// export-html.js - 导出用 HTML 结构模板
const ExportHTML = {
    // 生成完整的 HTML 文档
    generate(data) {
        // 不用解构，直接取值，避免任何变量名问题
        const title = data.title || '班级 Weekly Report';
        const weekNum = data.weekNum || 1;
        const content = data.content || '';
        const dictName = data.dictName || 'dict.js';
        const styleCSS = data.styleCSS || '';
        const dictScript = data.dictScript || 'const DICT = {};';

        return `<!DOCTYPE html>
<html lang="zh-CN" data-theme="bright">
<head>
<meta charset="utf-8">
<title>${this.escapeHtml(title)}</title>
<link rel="stylesheet" href="main.css">
<script src="theme.js"><\/script>
<!-- 词典数据（内联） -->
<script>
${dictScript}
<\/script>
<style>
${styleCSS}
</style>
</head>
<body>

<section class="card section-card">
<!-- 主内容 -->
<div id="editableRoot">
${content}
</div>

<div id="overlay" onclick="hideCard()"></div>
<div id="wordCard">
  <h4 id="wcWord"></h4>
  <div class="phonetic" id="wcPhonetic"></div>
  <div class="mean" id="wcMean"></div>
  <details class="eg-box">
    <summary class="d-btn">🔈 例句</summary>
    <div class="card"><span id="wcEg"></span></div>
  </details>
  <button class="speaker" onclick="speak(wcWord.textContent)">🔊</button>
</div>

<!-- 通知按钮 -->
<button id="notifyToggle" onclick="toggleNotify()">
    <span>通知</span><span id="notifyBadge">0</span>
</button>

<!-- 侧边栏 -->
<aside id="sideBar" class="side-bar translate">
  <nav class="side-nav"></nav>
  <div class="side-foot">
    <button class="d-btn" onClick="window.toggleTheme()">切换主题</button>
    <button class="d-btn danger" onClick="logout()">退出登录</button>
  </div>
</aside>
<div id="sideMask" class="side-mask" onClick="closeSide()"></div>
<!-- 主内容 -->
<div id="mainContent"></div>

<!-- 消息详情弹窗 -->
<div id="mask" class="modal-mask hidden">
  <div class="modal-panel">
    <div id="popupTitle" class="modal-title">消息详情</div>
    <div id="popupBody" class="modal-body"></div>
    <div class="btn-group">
      <button id="recallBtn" class="d-btn" onClick="doRecall()">撤回</button>
      <button id="knowBtn" class="d-btn" onClick="markRead()">知道了</button>
    </div>
  </div>
</div>
</section>



<script src="app.js"><\/script>
</body>
</html>`;
    },

    // 清理编辑器内容，移除编辑痕迹
    cleanContent(clone) {
        // 先移除拖拽手柄
        clone.querySelectorAll('.drag-handle').forEach(el => el.remove());
        
        // 清理 section 属性
        clone.querySelectorAll('.section-card').forEach(el => {
            el.classList.remove('selected', 'dragging', 'drag-over-section');
            el.removeAttribute('data-id');
        });
        
        // 处理 child-tag
        clone.querySelectorAll('.child-tag').forEach(el => {
            el.classList.remove('selected', 'dragging', 'drag-over-child');
            el.removeAttribute('data-tag-type');
            el.removeAttribute('data-is-word');
            el.removeAttribute('data-is-mask');
            el.removeAttribute('data-raw-text');
            el.removeAttribute('onclick');
        });
        
        clone.querySelectorAll('[data-editable]').forEach(el => el.removeAttribute('data-editable'));
        clone.querySelectorAll('.image-upload-overlay').forEach(el => el.remove());
        clone.querySelectorAll('.title-img-container').forEach(el => {
            el.classList.remove('title-img-container');
        });
        
        clone.classList.remove('edit-mode');
        
        return clone.innerHTML;
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// 兼容 CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExportHTML;
}
