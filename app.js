// 朗读词点击
document.addEventListener('click', e => {
  const w = e.target.closest('.word');
  if (!w) return;
  const raw = w.dataset.raw || w.textContent.trim().toLowerCase();
  const entry = (typeof DICT !== 'undefined' && DICT[raw]) ? DICT[raw] : { ph: '', zh: '（暂无释义）', eg: '' };
  showCard(w.textContent, entry.ph, entry.zh, entry.eg);
});

// 打码点击
document.addEventListener('click', e => {
  const m = e.target.closest('.mask-box');
  if (m) {
    m.classList.toggle('hidden');
  }
});

function showCard(word, phonetic, mean, eg) {
  document.getElementById('wcWord').textContent = word;
  document.getElementById('wcPhonetic').textContent = phonetic;
  document.getElementById('wcMean').textContent = mean;
  document.getElementById('wcEg').textContent = eg;
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('wordCard').style.display = 'block';
  speak(word);
}

function hideCard() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('wordCard').style.display = 'none';
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  speechSynthesis.speak(utter);
}

document.onkeydown = e => e.key === 'Escape' && hideCard();

/* ================= 常量 ================= */
const USER_URL   = 'https://jbcrkuwnlmdmwwmiimhr.supabase.co/rest/v1/users';
const CHAT_URL   = 'https://jbcrkuwnlmdmwwmiimhr.supabase.co/rest/v1/comments';
const BANS_URL   = 'https://jbcrkuwnlmdmwwmiimhr.supabase.co/rest/v1/bans';
const NOTI_URL   = 'https://jbcrkuwnlmdmwwmiimhr.supabase.co/rest/v1/notifications';
//const ANON_KEY   = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiY3JrdXdubG1kbXd3bWlpbWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0ODcyNjUsImV4cCI6MjA4MDA2MzI2NX0.mK7o1xaVrV39J6_wahE_1iv_cacYUVrZJurKs_s2Wf0';
const CHAT_INTERVAL = 3000;
const ARTICLE_ID = parseInt(document.getElementById('weekNum').textContent, 10);

/* ========== 通知开关 ========== */
let notifyOn = localStorage.getItem('notifyOn')==='true';
function toggleNotify(){
  notifyOn = !notifyOn;
  localStorage.setItem('notifyOn',notifyOn);
  renderNotifyBtn();
  if(notifyOn) requestNotifyPermission();
}
function renderNotifyBtn(){
  const btn = document.getElementById('notifyToggle');
  btn.style.borderColor = notifyOn ? 'var(--bottom-blue)' : 'var(--gray1)';
}
function requestNotifyPermission(){
  if(!window.Notification) return;
  if(Notification.permission==='default') Notification.requestPermission();
}
renderNotifyBtn();

/* ========== 框架函数 ========== */
function closeSide(){
  const bar = document.getElementById('sideBar');
  const mask = document.getElementById('sideMask');
  bar.classList.remove('open'); mask.classList.remove('on');
}
function openSide(){
  const bar = document.getElementById('sideBar');
  const mask = document.getElementById('sideMask');
  bar.classList.add('open'); mask.classList.add('on');
}
function markRead(){
  document.getElementById('mask').classList.add('hidden');
  if(window.currentMarkResolve){
    window.currentMarkResolve();
    delete window.currentMarkResolve;
  }
}

/* ========== 页面切换 ========== */
function showProfile(){
  closeSide();
  const u = JSON.parse(localStorage.getItem('user'));
  document.getElementById('mainContent').innerHTML=`
    <h1>个人设置</h1>
    <section class="card">
      <h3>账号信息</h3>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <img id="avatarImg" class="avatar" src="${u?u.avatar_url||'':''}">
        <div>
          <div id="userName">${u?u.username:'未登录'}</div>
          <div id="userUUID" style="font-size:12px;color:var(--gray2)">${u?u.id:''}</div>
        </div>
      </div>
      <input id="avatarFile" type="file" accept="image/*" onchange="uploadAvatar()">
      <div class="progress-box hidden" id="progressBox"><div class="progress-bar" id="progressBar"></div></div>
      <div class="btn-group"><button class="d-btn" onclick="logout()">退出登录</button></div>
    </section>`;
}
function showChat(){
  closeSide();
  document.getElementById('mainContent').innerHTML=`
    
    <section class="card">
      <h1>消息列表</h1>
      <div id="msgBox" class="chat-box"></div>
    </section>
    <section class="card">
      <h3>发送消息</h3>
      <div style="position:relative">
        <textarea id="msgText" class="duo-input" placeholder="说点什么… 输入 @ 搜索用户" maxlength="300" rows="4" oninput="onMsgInput()"></textarea>
        <div id="atBox" class="hidden" style="position:absolute;left:0;right:0;top:100%;max-height:180px;overflow:auto;border:2px solid var(--gray1);border-top:none;border-radius:0 0 8px 8px;background:var(--bg);z-index:20"></div>
      </div>
      <div class="btn-group"><button id="sendBtn" class="d-btn" onclick="sendMessage()">立即发送</button></div>
    </section>`;
  loadMessages();
  fetchAllUsers();
  if(!window.chatTimer)window.chatTimer=setInterval(loadMessages,CHAT_INTERVAL);
  checkBanStatus();
  if(!window.banTimer)window.banTimer=setInterval(checkBanStatus,30000);
  loadNotifications();
  if(!window.notiTimer)window.notiTimer=setInterval(loadNotifications,5000);
}

/* ========== 禁言检查 ========== */
let userBanUntil = null;
async function checkBanStatus(){
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user)return;
  await fetch(BANS_URL+'?user_id=eq.'+user.id+'&until=lt.now()',{method:'DELETE',headers:{'apikey':ANON_KEY,'Authorization':`Bearer ${ANON_KEY}`}});
  const res = await fetch(BANS_URL+'?user_id=eq.'+user.id+'&until=gt.now()&select=until',{headers:{apikey:ANON_KEY}});
  const list = res.ok ? await res.json() : [];
  userBanUntil = list.length ? list[0].until : null;
  renderSendButton();
}
function renderSendButton(){
  const btn = document.getElementById('sendBtn');
  if(!btn)return;
  if(userBanUntil){
    btn.disabled=true;
    btn.textContent=`禁言至 ${new Date(userBanUntil).toLocaleString()}`;
  }else{
    btn.disabled=false;
    btn.textContent='立即发送';
  }
}

/* ========== 登录 / 注册 / 退出 ========== */
async function login(){
  const username=document.getElementById('username').value.trim();
  const password=document.getElementById('password').value.trim();
  if(!username||!password)return alert('请填写完整');
  const res=await fetch(USER_URL+'?select=id,username,avatar_url&username=eq.'+username+'&password=eq.'+password,{headers:{apikey:ANON_KEY}});
  const arr=await res.json();
  if(arr.length!==1)return alert('用户名或密码错误');
  localStorage.setItem('user',JSON.stringify(arr[0]));
  showChat();
}
async function register(){
  const username=document.getElementById('username').value.trim();
  const password=document.getElementById('password').value.trim();
  if(!username||!password)return alert('请填写完整');
  const uid=self.crypto.randomUUID();
  const res=await fetch(USER_URL,{
    method:'POST',
    headers:{'apikey':ANON_KEY,'Authorization':`Bearer ${ANON_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
    body:JSON.stringify({id:uid,username,password,avatar_url:''})
  });
  if(!res.ok)return alert('注册失败：'+res.status);
  localStorage.setItem('user',JSON.stringify({id:uid,username,avatar_url:''}));
  showChat();
}
function logout(){
  localStorage.removeItem('user');
  location.reload();
}

/* ========== 头像上传 ========== */
async function uploadAvatar(){
  const file=document.getElementById('avatarFile').files[0];
  if(!file)return;
  const user=JSON.parse(localStorage.getItem('user'));
  const fileName=`${user.id}.png`;
  const progressBox=document.getElementById('progressBox');
  const progressBar=document.getElementById('progressBar');
  progressBox.classList.remove('hidden');
  progressBar.style.width='0%';
  await fetch(BUCKET_URL+fileName,{method:'DELETE',headers:{'apikey':ANON_KEY,'Authorization':`Bearer ${ANON_KEY}`}});
  const xhr=new XMLHttpRequest();
  xhr.open('PUT',BUCKET_URL+fileName);
  xhr.setRequestHeader('apikey',ANON_KEY);
  xhr.setRequestHeader('Authorization',`Bearer ${ANON_KEY}`);
  xhr.setRequestHeader('Content-Type','image/png');
  xhr.upload.onprogress=e=>{if(e.lengthComputable)progressBar.style.width=Math.round((e.loaded/e.total)*100)+'%';};
  xhr.onload=async()=>{
    progressBox.classList.add('hidden');
    if(xhr.status!==200){alert('上传失败');return;}
    const publicURL=BUCKET_URL+fileName;
    const patchRes=await fetch(USER_URL+'?id=eq.'+user.id,{
      method:'PATCH',
      headers:{'apikey':ANON_KEY,'Authorization':`Bearer ${ANON_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({avatar_url:publicURL})
    });
    if(!patchRes.ok){alert('更新头像失败');return;}
    user.avatar_url=publicURL;
    localStorage.setItem('user',JSON.stringify(user));
    document.getElementById('avatarImg').src=publicURL;
  };
  xhr.send(file);
}

/* ========== 发送消息 ========== */
async function sendMessage(){
  const user=JSON.parse(localStorage.getItem('user'));
  if(!user)return alert('请先登录');
  if(userBanUntil)return alert('您已被禁言，暂无法发送消息');
  const text=document.getElementById('msgText').value.trim();
  if(!text)return alert('消息不能为空');
  const res=await fetch(CHAT_URL,{
    method:'POST',
    headers:{'apikey':ANON_KEY,'Authorization':`Bearer ${ANON_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
    body:JSON.stringify({username:user.username,content:text,sender_id:user.id,sender_avatar:user.avatar_url||'',article_id:ARTICLE_ID})
  });
  if(!res.ok)return alert('发送失败：'+res.status);
  document.getElementById('msgText').value='';
  loadMessages();
}

/* ========== 加载消息 ========== */
async function loadMessages(){
  const res=await fetch(CHAT_URL+'?select=id,username,content,created_at,sender_id,sender_avatar,status&article_id=eq.'+ARTICLE_ID+'&order=created_at.desc&limit=200',{headers:{apikey:ANON_KEY}});
  const arr=res.ok?await res.json():[];
  const box=document.getElementById('msgBox');
  let html='';
  for(const m of arr){
    if(m.status==='deleted')continue;
    const isBanned=m.status==='banned';
    html+=`
      <div class="chat-msg ${isBanned?'msg-banned':''}" onclick="popupMsg('${m.username.replace(/'/g,"\\'")}','${m.content.replace(/'/g,"\\'")}','${new Date(m.created_at).toLocaleString()}','${m.sender_id}',${m.id},'${m.status}')">
        <img src="${m.sender_avatar||'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZWVlIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzk5OSIgZm9udC1zaXplPSIxMnB4Ij7njovvvJs8L3RleHQ+Cjwvc3ZnPg=='}" class="chat-avatar">
        <div class="chat-content">
          <div class="chat-name">${m.username}<span class="chat-time">${new Date(m.created_at).toLocaleString()}</span></div>
          <div class="chat-text">${highlightAt(m.content)}</div>
        </div>
      </div>`;
  }
  box.innerHTML=html||'<p style="color:var(--gray2)">暂无消息</p>';
  box.scrollTop=0;
}
function highlightAt(text){
  return text.replace(/@([\w\u4e00-\u9fa5_-]+)/g,'<span style="color:var(--bottom-blue);font-weight:600">@$1</span>');
}

/* ========== 弹窗（撤回） ========== */
window.popupMsg=async function(username,content,time,uuid,msgId,status){
  const user=JSON.parse(localStorage.getItem('user'));
  const canRecall=user&&user.id===uuid&&(Date.now()-new Date(time).getTime()<10*60*1000)&&status==='exist';
  const recallBtn=document.getElementById('recallBtn');
  const knowBtn=document.getElementById('knowBtn');
  recallBtn.style.display=canRecall?'inline-block':'none';
  knowBtn.textContent='知道了';
  await new Promise(resolve=>{
    window.currentMarkResolve=resolve;
    document.getElementById('popupTitle').textContent=`${username} · ${time}`;
    document.getElementById('popupBody').textContent=`${content}\n\nUUID：${uuid}`;
    document.getElementById('mask').classList.remove('hidden');
    if(canRecall)window._pendingRecall={msgId,resolve};else window._pendingRecall=null;
  });
  if(window._pendingRecall){
    window.recallMessage(window._pendingRecall.msgId);
    window._pendingRecall=null;
  }
};
window.doRecall=async function(){
  if(!window._pendingRecall)return;
  const msgId=window._pendingRecall.msgId;
  const res=await fetch(CHAT_URL+'?id=eq.'+msgId,{
    method:'PATCH',
    headers:{'apikey':ANON_KEY,'Authorization':`Bearer ${ANON_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
    body:JSON.stringify({status:'deleted'})
  });
  if(!res.ok){alert('撤回失败');return;}
  window.markRead();
  loadMessages();
};

/* ========== @人相关 ========== */
let __allUsers=[];
async function fetchAllUsers(){
  if(__allUsers.length)return;
  const res=await fetch(USER_URL+'?select=id,username,avatar_url',{headers:{apikey:ANON_KEY}});
  __allUsers=res.ok?await res.json():[];
}
window.onMsgInput=function(){
  const val=document.getElementById('msgText').value;
  const atIndex=val.lastIndexOf('@');
  const box=document.getElementById('atBox');
  if(atIndex===-1||(val.length!==atIndex+1&&val[atIndex+1]===' ')){box.classList.add('hidden');return;}
  const kw=val.substring(atIndex+1).toLowerCase();
  fetchAllUsers().then(()=>{
    const hits=__allUsers.filter(u=>u.username.toLowerCase().includes(kw));
    if(!hits.length){box.classList.add('hidden');return;}
    box.innerHTML=hits.map(u=>`
      <div class="side-item" style="margin:0;border:none;border-radius:0;cursor:pointer" onmousedown="pickUser('${u.username.replace(/'/g,"\\'")}')">
        <img src="${u.avatar_url||'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2VlZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtc2l6ZT0iMTBweCI+5LqG77yaPC90ZXh0Pjwvc3ZnPg=='}" style="width:20px;height:20px;border-radius:4px;vertical-align:middle;margin-right:6px">${u.username}</div>`).join('');
    box.classList.remove('hidden');
  });
};
window.pickUser=function(username){
  const ta=document.getElementById('msgText');
  const val=ta.value;
  const atIndex=val.lastIndexOf('@');
  ta.value=val.slice(0,atIndex)+'@'+username+' ';
  ta.focus();
  document.getElementById('atBox').classList.add('hidden');
};

/* ========== 通知中心 ========== */
async function loadNotifications(){
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user)return;
  const res = await fetch(NOTI_URL+`?user_id=eq.${user.id}&read=eq.false&select=id`,{headers:{apikey:ANON_KEY}});
  const unread = res.ok ? await res.json() : [];
  const badge = document.getElementById('notifyBadge');
  badge.style.display = unread.length ? 'inline-block' : 'none';
  badge.textContent = unread.length;
}

/* ========== 初始化 ========== */
(()=>{
  const u=localStorage.getItem('user');
  if(u){showChat();}else{showLogin();}
})();

/* ========== 登录页（嵌入 index） ========== */
function showLogin(){
  document.getElementById('mainContent').innerHTML=`
    <h1>223班聊天室</h1>
    <section class="card">
      <h3>登录 / 注册</h3>
      <input id="username" class="duo-input" placeholder="用户名（必填）" maxlength="20">
      <input id="password" class="duo-input" placeholder="密码（必填）" type="password" maxlength="20">
      <div class="btn-group"><button class="d-btn" onClick="login()">登录</button><button class="d-btn" onClick="register()">注册</button></div>
    </section>`;
}