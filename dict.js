// dict.js —— 点词翻译词典
// 随时往里追加即可，key 统一小写
const DICT = {
  
  "the": {
    "ph": "/ðə/",
    "zh": "定冠词，用于指特定的人或事物",
    "eg": "The sun is shining brightly.\nI saw the movie you recommended.\nThe book on the table is mine."
  },
  "second": {
    "ph": "/ˈsekənd/",
    "zh": "第二；秒；支持",
    "eg": "She finished in second place.\nWait a second, I need to tie my shoes.\nI second the proposal to start early."
  },
  "publication": {
    "ph": "/ˌpʌblɪˈkeɪʃn/",
    "zh": "出版；出版物；公布",
    "eg": "The publication of the novel was delayed.\nThis magazine is a monthly publication.\nThe publication of the data caused controversy."
  },
  "chief": {
    "ph": "/tʃiːf/",
    "zh": "主要的；首领；首席的",
    "eg": "The chief engineer approved the design.\nHe is the chief of the tribe.\nMy chief concern is your safety."
  },
  "editor": {
    "ph": "/ˈedɪtər/",
    "zh": "编辑；编者；校订者",
    "eg": "She works as an editor for a publishing house.\nThe editor corrected my grammar mistakes.\nHe is the chief editor of the newspaper."
  },
  "wang": {
    "ph": "/wæŋ/",
    "zh": "王（姓氏）",
    "eg": "Mr. Wang is our new neighbor.\nWang is a common Chinese surname.\nI met Wang at the conference."
  },
  "wenyu": {
    "ph": "/wɛnjuː/",
    "zh": "文钅玉（人名）",
    "eg": "Wenyu is responsible for the project.\nI haven't seen Wenyu today.\nWenyu's presentation was excellent."
  },
  "associate": {
    "ph": "/əˈsoʊʃieɪt/",
    "zh": "副的；联合的；关联",
    "eg": "She is an associate professor at the university.\nI associate summer with vacations.\nHe is an associate member of the club."
  },
  "fu": {
    "ph": "/fuː/",
    "zh": "亻寸（姓氏）",
    "eg": "Ms. Fu will lead the meeting.\nFu is a common surname in China."
  },
  "ziyu": {
    "ph": "/ziːjuː/",
    "zh": "木辛女予（人名）",
    "eg": "Ziyu helped me with the translation.\nZiyu's artwork is amazing.\nI'm going to the cinema with Ziyu."
  },
  "website": {
    "ph": "/ˈwebsaɪt/",
    "zh": "网站",
    "eg": "I found the information on their website.\nShe designed a beautiful website.\nThe company's website is easy to navigate."
  },
  "builder": {
    "ph": "/ˈbɪldər/",
    "zh": "建造者；建设者；开发者",
    "eg": "He is a famous building builder.\nThe software builder fixed the bug.\nWe need a skilled builder for this project."
  },
  "qizhao": {
    "ph": "/tʃiːʒaʊ/",
    "zh": "王奇龺月（人名）",
    "eg": "Qizhao is good at programming.\nI met Qizhao at the workshop.\nQizhao's website looks professional."
  },
  "all": {
    "ph": "/ɔːl/",
    "zh": "所有的；全部的；全体",
    "eg": "All students must attend the lecture.\nI ate all the cookies.\nAll of us agreed with the plan."
  },
  "contributor": {
    "ph": "/kənˈtrɪbjətər/",
    "zh": "贡献者；投稿人；捐助者",
    "eg": "She is a regular contributor to the magazine.\nEvery contributor will receive a certificate.\nWe appreciate each contributor's effort."
  },
  "are": {
    "ph": "/ɑːr/",
    "zh": "是（be动词的复数现在式）",
    "eg": "We are ready to start.\nThey are my best friends.\nWhere are the keys?"
  },
  "welcome": {
    "ph": "/ˈwelkəm/",
    "zh": "欢迎；受欢迎的",
    "eg": "You are welcome to join us.\nThank you for the warm welcome.\nWelcome to our home!"
  },
  "huge": {
    "ph": "/hjuːdʒ/",
    "zh": "巨大的；庞大的",
    "eg": "They made a huge profit.\nA huge crowd gathered in the square.\nThe project requires a huge investment."
  },
  "reversal": {
    "ph": "/rɪˈvɜːrsl/",
    "zh": "逆转；反转；撤销",
    "eg": "The court's reversal of the decision surprised everyone.\nThe team's reversal of fortune was dramatic.\nThis is a complete reversal of policy."
  },
  "class": {
    "ph": "/klæs/",
    "zh": "班级；阶级；种类",
    "eg": "Our class has thirty students.\nShe comes from a middle-class family.\nThis is a first-class hotel."
  },
  "got": {
    "ph": "/ɡɒt/",
    "zh": "得到；获得（get的过去式）",
    "eg": "I got a new job last week.\nShe got full marks in the exam.\nWe got home late last night."
  },
  "two": {
    "ph": "/tuː/",
    "zh": "二；两个",
    "eg": "I have two brothers.\nThe meeting will start in two hours.\nTwo of the students were absent."
  },
  "championships": {
    "ph": "/ˈtʃæmpiənʃɪps/",
    "zh": "锦标赛；冠军称号（复数）",
    "eg": "Our school won two championships this year.\nHe has won three tennis championships.\nThe championships will be held next month."
  },
  "again": {
    "ph": "/əˈɡen/",
    "zh": "再次；又",
    "eg": "Please say that again.\nI hope to see you again soon.\nThe machine started working again."
  },
  "time": {
    "ph": "/taɪm/",
    "zh": "时间；次数；时代",
    "eg": "What time is it now?\nI've been to Paris three times.\nThe Victorian time was interesting."
  },
  "december": {
    "ph": "/dɪˈsembər/",
    "zh": "十二月",
    "eg": "December is the last month of the year.\nMy birthday is in December.\nIt snows a lot here in December."
  },
  "18th": {
    "ph": "/ˈeɪtiːnθ/",
    "zh": "第十八",
    "eg": "Today is December 18th.\nHer office is on the 18th floor.\nThis is my 18th birthday."
  },
  "2025": {
    "ph": "/ˈtwɛnti twɛnti faɪv/",
    "zh": "2025年",
    "eg": "The event will take place in 2025.\nI plan to graduate in 2025.\nBy 2025, technology will advance further."
  },
  "writer": {
    "ph": "/ˈraɪtər/",
    "zh": "作者；作家",
    "eg": "She is a famous writer of children's books.\nThe writer described the scene vividly.\nI want to become a professional writer."
  },
  "helper": {
    "ph": "/ˈhelpər/",
    "zh": "助手；帮手",
    "eg": "My little brother is my helper in the kitchen.\nWe need more helpers for the event.\nThe software includes a helpful helper tool."
  },
  "football": {
    "ph": "/ˈfʊtbɔːl/",
    "zh": "足球；橄榄球",
    "eg": "We play football every weekend.\nAmerican football is popular in the US.\nHe is on the school football team."
  },
  "matches": {
    "ph": "/ˈmætʃɪz/",
    "zh": "比赛；匹配（复数）",
    "eg": "We watched the football matches yesterday.\nThese colors are perfect matches.\nThe team has won five matches in a row."
  },
  "in": {
    "ph": "/ɪn/",
    "zh": "在...里面；参与；穿着",
    "eg": "The book is in the bag.\nShe is in the school choir.\nHe was dressed in black."
  },
  "gu": {
    "ph": "/ɡuː/",
    "zh": "古（姓氏）",
    "eg": "Mr. Gu is our history teacher.\nGu is an ancient Chinese surname.\nI met Gu at the library."
  },
  "tao": {
    "ph": "/taʊ/",
    "zh": "陶（姓氏）",
    "eg": "Tao is a common Chinese surname.\nMs. Tao is an excellent musician.\nThe philosophy of Lao Tao is profound."
  },
  "no": {
    "ph": "/noʊ/",
    "zh": "不；没有；第几号",
    "eg": "No, I don't agree.\nThere is no milk left.\nShe lives at No. 25 Park Street."
  },
  "1": {
    "ph": "/wʌn/",
    "zh": "一；第一",
    "eg": "I have one sister.\nThis is my first time here.\nPage one is missing."
  },
  "middle": {
    "ph": "/ˈmɪdl/",
    "zh": "中间的；中等的；中部",
    "eg": "He sat in the middle row.\nShe is of middle height.\nThe table is in the middle of the room."
  },
  "school": {
    "ph": "/skuːl/",
    "zh": "学校；学派",
    "eg": "My school is near the park.\nShe attends a music school.\nThe Frankfurt School influenced philosophy."
  },
  "began": {
    "ph": "/bɪˈɡæn/",
    "zh": "开始（begin的过去式）",
    "eg": "The concert began at eight o'clock.\nShe began her career as a teacher.\nIt began to rain heavily."
  },
  "on": {
    "ph": "/ɒn/",
    "zh": "在...上；关于；进行中",
    "eg": "The book is on the table.\nWe watched a documentary on wildlife.\nThe lights are on."
  },
  "15th": {
    "ph": "/ˌfɪfˈtiːnθ/",
    "zh": "第十五",
    "eg": "Today is January 15th.\nThe 15th chapter is the most exciting.\nHer anniversary is on the 15th."
  },
  "tuesday": {
    "ph": "/ˈtjuːzdeɪ/",
    "zh": "星期二",
    "eg": "We have a meeting on Tuesday.\nTuesday is my busiest day.\nI'll see you next Tuesday."
  },
  "we": {
    "ph": "/wi/",
    "zh": "我们",
    "eg": "We are going to the beach.\nWe finished the project together.\nCan we help you?"
  },
  "saw": {
    "ph": "/sɔː/",
    "zh": "看见；明白（see的过去式）",
    "eg": "I saw a beautiful bird this morning.\nShe saw the solution immediately.\nThey saw the movie last night."
  },
  "footballers": {
    "ph": "/ˈfʊtbɔːlərz/",
    "zh": "足球运动员（复数）",
    "eg": "The footballers trained hard for the match.\nProfessional footballers earn high salaries.\nYoung footballers look up to their idols."
  },
  "won": {
    "ph": "/wʌn/",
    "zh": "赢得；获胜（win的过去式）",
    "eg": "Our team won the championship.\nShe won first prize in the competition.\nHe won her heart with his kindness."
  },
  "easily": {
    "ph": "/ˈiːzəli/",
    "zh": "容易地；无疑地",
    "eg": "She solved the problem easily.\nHe is easily the best player on the team.\nThe door opens easily."
  },
  "wednesday": {
    "ph": "/ˈwenzdeɪ/",
    "zh": "星期三",
    "eg": "The event is scheduled for Wednesday.\nWednesday is often called 'hump day'.\nI have piano lessons every Wednesday."
  },
  "afternoon": {
    "ph": "/ˌɑːftəˈnuːn/",
    "zh": "下午",
    "eg": "We'll meet tomorrow afternoon.\nThe afternoon sun is warm.\nShe takes a nap in the afternoon."
  },
  "physics": {
    "ph": "/ˈfɪzɪks/",
    "zh": "物理学",
    "eg": "Physics is my favorite subject.\nHe studies physics at university.\nThe laws of physics explain natural phenomena."
  },
  "teacher": {
    "ph": "/ˈtiːtʃər/",
    "zh": "教师；老师",
    "eg": "She is a strict but fair teacher.\nMy math teacher explains things clearly.\nHe respects his teacher deeply."
  },
  "don't": {
    "ph": "/doʊnt/",
    "zh": "不（do not的缩写）",
    "eg": "I don't like coffee.\nThey don't know the answer.\nPlease don't be late."
  },
  "wanted": {
    "ph": "/ˈwɒntɪd/",
    "zh": "想要；需要（want的过去式）",
    "eg": "She wanted to become a doctor.\nHe wanted a new bicycle for his birthday.\nThey wanted more time to finish."
  },
  "us": {
    "ph": "/ʌs/",
    "zh": "我们（宾格）",
    "eg": "She gave us a present.\nThe teacher helped us with the problem.\nCan you wait for us?"
  },
  "to": {
    "ph": "/tuː/",
    "zh": "向；到；对于",
    "eg": "We walked to the station.\nI gave the book to Mary.\nIt's important to study hard."
  },
  "see": {
    "ph": "/siː/",
    "zh": "看见；理解；参观",
    "eg": "I can see the mountains from here.\nDo you see what I mean?\nWe went to see the Great Wall."
  },
  "however": {
    "ph": "/haʊˈevər/",
    "zh": "然而；可是",
    "eg": "She is young; however, she is very talented.\nI'd like to go; however, I'm too busy.\nThe weather was bad; however, we had fun."
  },
  "that": {
    "ph": "/ðæt/",
    "zh": "那；那个；引导从句",
    "eg": "Look at that beautiful flower!\nI believe that he is honest.\nThe book that I read was interesting."
  },
  "day": {
    "ph": "/deɪ/",
    "zh": "一天；白天；时期",
    "eg": "There are seven days in a week.\nWe worked all day.\nIt was the happiest day of my life."
  },
  "is": {
    "ph": "/ɪz/",
    "zh": "是（be动词的第三人称单数现在式）",
    "eg": "She is a teacher.\nThe sky is blue.\nMy favorite color is green."
  },
  "pe": {
    "ph": "/ˌpiː ˈiː/",
    "zh": "体育课（Physical Education的缩写）",
    "eg": "We have PE on Mondays and Wednesdays.\nI enjoy playing basketball in PE.\nPE class helps students stay healthy."
  },
  "but": {
    "ph": "/bʌt/",
    "zh": "但是；除了",
    "eg": "She is small but strong.\nI like all fruits but bananas.\nHe tried hard but failed."
  },
  "heard": {
    "ph": "/hɜːrd/",
    "zh": "听见；听说（hear的过去式）",
    "eg": "I heard a strange noise last night.\nHave you heard the latest news?\nShe heard that he was moving abroad."
  },
  "bad": {
    "ph": "/bæd/",
    "zh": "坏的；严重的；劣质的",
    "eg": "The weather was bad yesterday.\nHe has a bad cold.\nThis is a bad example to follow."
  },
  "information": {
    "ph": "/ˌɪnfərˈmeɪʃn/",
    "zh": "信息；情报；资料",
    "eg": "Please give me more information.\nThis information is confidential.\nWe collected information from various sources."
  },
  "when": {
    "ph": "/wen/",
    "zh": "当...时；那时",
    "eg": "Call me when you arrive.\nI remember the day when we first met.\nWhen will the meeting start?"
  },
  "got": {
    "ph": "/ɡɒt/",
    "zh": "得到；到达（get的过去式）",
    "eg": "We got to the airport on time.\nShe got a letter from her friend.\nHe got home very late."
  },
  "playground": {
    "ph": "/ˈpleɪɡraʊnd/",
    "zh": "操场；游乐场",
    "eg": "The children are playing on the playground.\nOur school has a large playground.\nThe playground equipment is new."
  },
  "this": {
    "ph": "/ðɪs/",
    "zh": "这；这个",
    "eg": "This is my favorite song.\nLook at this picture.\nThis book belongs to me."
  },
  "shocked": {
    "ph": "/ʃɒkt/",
    "zh": "震惊的；震撼的（shock的过去式）",
    "eg": "I was shocked by the news.\nHer sudden appearance shocked everyone.\nThe tragic event left us deeply shocked."
  },
  "our": {
    "ph": "/ˈaʊər/",
    "zh": "我们的",
    "eg": "This is our house.\nOur team won the game.\nWe love our country."
  },
  "women's": {
    "ph": "/ˈwɪmɪnz/",
    "zh": "妇女的；女性的（women的所有格）",
    "eg": "The women's football team played well.\nShe bought a dress from the women's section.\nToday is International Women's Day."
  },
  "team": {
    "ph": "/tiːm/",
    "zh": "队；组",
    "eg": "Our basketball team needs more players.\nShe works well in a team.\nThe management team made the decision."
  },
  "results": {
    "ph": "/rɪˈzʌlts/",
    "zh": "结果；成绩；成果（复数）",
    "eg": "The exam results will be out tomorrow.\nWe are waiting for the test results.\nThe results of the experiment were surprising."
  },
  "had": {
    "ph": "/hæd/",
    "zh": "有；吃；得到（have的过去式）",
    "eg": "She had a busy day yesterday.\nWe had lunch at a new restaurant.\nHe had no idea what to do."
  },
  "been": {
    "ph": "/biːn/",
    "zh": "是；在（be的过去分词）",
    "eg": "I have been to London twice.\nShe has been sick for a week.\nIt has been raining since morning."
  },
  "cancelled": {
    "ph": "/ˈkænsəld/",
    "zh": "取消的；废除的（cancel的过去分词）",
    "eg": "The flight was cancelled due to fog.\nThe concert has been cancelled.\nShe cancelled her appointment."
  },
  "news": {
    "ph": "/njuːz/",
    "zh": "新闻；消息",
    "eg": "I heard the news on the radio.\nThe news of his success spread quickly.\nShe watches the news every evening."
  },
  "deeply": {
    "ph": "/ˈdiːpli/",
    "zh": "深深地；强烈地",
    "eg": "I am deeply grateful for your help.\nShe was deeply affected by the story.\nHe cares deeply about the environment."
  },
  "and": {
    "ph": "/ənd/",
    "zh": "和；与；而且",
    "eg": "She bought apples and oranges.\nHe is tall and handsome.\nWe talked and laughed all evening."
  },
  "even": {
    "ph": "/ˈiːvn/",
    "zh": "甚至；连；平坦的",
    "eg": "Even children can understand this.\nShe didn't even say goodbye.\nThe surface is smooth and even."
  },
  "some": {
    "ph": "/sʌm/",
    "zh": "一些；某个；大约",
    "eg": "Would you like some tea?\nSome people disagree with this idea.\nIt happened some years ago."
  },
  "students": {
    "ph": "/ˈstjuːdnts/",
    "zh": "学生（复数）",
    "eg": "The students are studying for the exam.\nSome students live on campus.\nThese students are from different countries."
  },
  "planned": {
    "ph": "/plænd/",
    "zh": "计划的；打算的（plan的过去式）",
    "eg": "We planned a trip to the beach.\nShe planned her career carefully.\nThey planned to leave early."
  },
  "launch": {
    "ph": "/lɔːntʃ/",
    "zh": "发射；发起；使开始",
    "eg": "The company will launch a new product.\nThey launched a rocket into space.\nWe launched a campaign to raise funds."
  },
  "december": {
    "ph": "/dɪˈsembər/",
    "zh": "十二月",
    "eg": "December is usually cold here.\nMy vacation starts in December.\nWe celebrate Christmas in December."
  },
  "8th": {
    "ph": "/eɪtθ/",
    "zh": "第八",
    "eg": "Today is May 8th.\nHe finished in 8th place.\nHer birthday is on the 8th of June."
  },
  "uprising": {
    "ph": "/ˈʌpraɪzɪŋ/",
    "zh": "起义；暴动",
    "eg": "The peasant uprising was suppressed.\nThe history book describes the famous uprising.\nThe uprising spread quickly across the region."
  },
  "lately": {
    "ph": "/ˈleɪtli/",
    "zh": "最近；不久前",
    "eg": "I haven't seen him lately.\nShe has been working hard lately.\nHave you read any good books lately?"
  },
  "reporter": {
    "ph": "/rɪˈpɔːrtər/",
    "zh": "记者；通讯员",
    "eg": "The reporter asked many questions.\nShe works as a TV reporter.\nA reporter from the local newspaper visited us."
  },
  "interviewed": {
    "ph": "/ˈɪntərvjuːd/",
    "zh": "采访；面试（interview的过去式）",
    "eg": "The journalist interviewed the president.\nWe interviewed several candidates for the job.\nHe was interviewed on live television."
  },
  "male": {
    "ph": "/meɪl/",
    "zh": "男性的；雄性的",
    "eg": "The male lion has a large mane.\nMost of the employees are male.\nThe study included both male and female participants."
  },
  "female": {
    "ph": "/ˈfiːmeɪl/",
    "zh": "女性的；雌性的",
    "eg": "She is a strong female leader.\nThe female bird builds the nest.\nThe company promotes female employees."
  },
  "athletes": {
    "ph": "/ˈæθliːts/",
    "zh": "运动员（复数）",
    "eg": "The athletes trained for the Olympics.\nProfessional athletes need to stay fit.\nYoung athletes look up to their heroes."
  },
  "of": {
    "ph": "/əv/",
    "zh": "的；属于；关于",
    "eg": "This is the capital of France.\nShe is a friend of mine.\nThe color of the sky is blue."
  },
  "hou": {
    "ph": "/hoʊ/",
    "zh": "侯（姓氏）",
    "eg": "Mr. Hou is our math teacher.\nHou is a common Chinese surname.\nI met Hou at the conference."
  },
  "qinren": {
    "ph": "/tʃɪn rɛn/",
    "zh": "秦仁（人名）",
    "eg": "Qinren is known for his leadership.\nI haven't seen Qinren recently.\nQinren's speech was inspiring."
  },
  "who": {
    "ph": "/huː/",
    "zh": "谁；那个人",
    "eg": "Who is that man?\nThe person who called you is my brother.\nWho wants to go first?"
  },
  "led": {
    "ph": "/led/",
    "zh": "领导；引导（lead的过去式）",
    "eg": "He led the team to victory.\nThe path led us through the forest.\nShe led the discussion."
  },
  "win": {
    "ph": "/wɪn/",
    "zh": "获胜；赢得",
    "eg": "We hope to win the competition.\nShe won a scholarship to study abroad.\nIt's not whether you win or lose, but how you play the game."
  },
  "difficult": {
    "ph": "/ˈdɪfɪkəlt/",
    "zh": "困难的；艰难的",
    "eg": "This is a difficult decision.\nThe exam was very difficult.\nShe is going through a difficult time."
  },
  "situation": {
    "ph": "/ˌsɪtʃuˈeɪʃn/",
    "zh": "情况；形势；处境",
    "eg": "The economic situation is improving.\nWe need to analyze the situation carefully.\nIt was an embarrassing situation."
  },
  "victory": {
    "ph": "/ˈvɪktəri/",
    "zh": "胜利；成功",
    "eg": "The army celebrated its victory.\nWinning this game was a great victory for us.\nThe victory was hard-won."
  },
  "lot": {
    "ph": "/lɒt/",
    "zh": "很多；抽签；命运",
    "eg": "I have a lot of work to do.\nWe drew lots to decide who would go first.\nIt was her lot to suffer."
  },
  "do": {
    "ph": "/duː/",
    "zh": "做；干；进行",
    "eg": "What are you doing?\nI have to do my homework.\nShe does yoga every morning."
  },
  "with": {
    "ph": "/wɪð/",
    "zh": "和...一起；用；带有",
    "eg": "I went to the cinema with my friends.\nShe wrote the letter with a pen.\nHe is a man with great courage."
  },
  "him": {
    "ph": "/hɪm/",
    "zh": "他（宾格）",
    "eg": "I gave him the book.\nShe was talking to him.\nWe invited him to the party."
  },
  "ren": {
    "ph": "/rɛn/",
    "zh": "任（姓氏）",
    "eg": "Mr. Ren is the director of the company.\nRen is a common Chinese surname.\nI had a meeting with Ren yesterday."
  },
  "keyu": {
    "ph": "/keɪ juː/",
    "zh": "可育（人名）",
    "eg": "Keyu is an excellent football player.\nKeyu's performance was outstanding.\nI often play football with Keyu."
  },
  "football": {
    "ph": "/ˈfʊtbɔːl/",
    "zh": "足球；橄榄球",
    "eg": "We play football every weekend.\nAmerican football is different from soccer.\nHe is a football fanatic."
  },
  "star": {
    "ph": "/stɑːr/",
    "zh": "星星；明星；主演",
    "eg": "The stars are bright tonight.\nShe is a movie star.\nHe starred in the new film."
  },
  "said": {
    "ph": "/sed/",
    "zh": "说（say的过去式）",
    "eg": "She said goodbye and left.\nHe said that he was tired.\nWhat you said is true."
  },
  "at": {
    "ph": "/æt/",
    "zh": "在；向；以",
    "eg": "Meet me at the station.\nShe is good at math.\nThe train arrives at 5 o'clock."
  },
  "end": {
    "ph": "/end/",
    "zh": "结束；末端；目标",
    "eg": "This is the end of the road.\nThe movie has a happy end.\nWe will never give up till the end."
  },
  "penalty": {
    "ph": "/ˈpenəlti/",
    "zh": "处罚；罚球；罚款",
    "eg": "The referee gave a penalty.\nHe scored from a penalty kick.\nThere is a penalty for late payment."
  },
  "shootout": {
    "ph": "/ˈʃuːtaʊt/",
    "zh": "点球大战；枪战",
    "eg": "The game was decided by a shootout.\nThe police were involved in a shootout.\nHe scored the winning goal in the shootout."
  },
  "mr": {
    "ph": "/ˈmɪstər/",
    "zh": "先生（Mister的缩写）",
    "eg": "Mr. Smith is our neighbor.\nGood morning, Mr. President.\nI have an appointment with Mr. Brown."
  },
  "thought": {
    "ph": "/θɔːt/",
    "zh": "想法；思考（think的过去式）",
    "eg": "I thought you were leaving.\nShe thought about the problem deeply.\nHe shared his thoughts with me."
  },
  "then": {
    "ph": "/ðen/",
    "zh": "然后；那时；那么",
    "eg": "We had dinner, and then we watched TV.\nI was younger then.\nIf you're ready, then let's start."
  },
  "liu": {
    "ph": "/ljuː/",
    "zh": "刘（姓氏）",
    "eg": "Ms. Liu is our English teacher.\nLiu is a very common Chinese surname.\nI met Liu at the library."
  },
  "qingxi": {
    "ph": "/tʃɪŋ ʃiː/",
    "zh": "清溪（人名）",
    "eg": "Qingxi asked an important question.\nQingxi's comment was misunderstood.\nI saw Qingxi in the hallway."
  },
  "how": {
    "ph": "/haʊ/",
    "zh": "如何；怎样；多么",
    "eg": "How are you today?\nHow does this machine work?\nHow beautiful the sunset is!"
  },
  "judgment": {
    "ph": "/ˈdʒʌdʒmənt/",
    "zh": "判断；判决；意见",
    "eg": "The court will pass judgment tomorrow.\nShe has good judgment of character.\nIn my judgment, we should wait."
  },
  "made": {
    "ph": "/meɪd/",
    "zh": "制作；使（make的过去式）",
    "eg": "She made a delicious cake.\nThe decision was made quickly.\nThis table is made of wood."
  },
  "misheard": {
    "ph": "/ˌmɪsˈhɜːrd/",
    "zh": "听错（mishear的过去式）",
    "eg": "I misheard what you said.\nShe misheard the instructions.\nHe often misheard words in noisy places."
  },
  "it": {
    "ph": "/ɪt/",
    "zh": "它；这",
    "eg": "It is raining outside.\nI found a book, and it was very interesting.\nIt's important to be honest."
  },
  "as": {
    "ph": "/æz/",
    "zh": "如同；当...时；因为",
    "eg": "She works as a teacher.\nAs I was leaving, the phone rang.\nAs it was raining, we stayed home."
  },
  "what": {
    "ph": "/wɒt/",
    "zh": "什么；多么",
    "eg": "What is your name?\nWhat a beautiful day!\nI don't know what to do."
  },
  "you": {
    "ph": "/juː/",
    "zh": "你；你们",
    "eg": "Are you coming with us?\nYou are my best friend.\nWhat do you think?"
  },
  "looking": {
    "ph": "/ˈlʊkɪŋ/",
    "zh": "看；寻找（look的现在分词）",
    "eg": "She is looking for her keys.\nWhat are you looking at?\nHe was looking out the window."
  },
  "she": {
    "ph": "/ʃi/",
    "zh": "她",
    "eg": "She is a talented musician.\nI gave the book to her.\nShe loves reading novels."
  },
  "angrily": {
    "ph": "/ˈæŋɡrɪli/",
    "zh": "生气地；愤怒地",
    "eg": "He spoke angrily to the waiter.\nShe left the room angrily.\nThe teacher looked at him angrily."
  },
  "can": {
    "ph": "/kæn/",
    "zh": "能；可以；罐头",
    "eg": "I can swim.\nCan you help me?\nShe opened a can of beans."
  },
  "your": {
    "ph": "/jɔːr/",
    "zh": "你的；你们的",
    "eg": "Is this your book?\nYour help is appreciated.\nWhat is your favorite color?"
  },
  "quality": {
    "ph": "/ˈkwɒləti/",
    "zh": "质量；品质；特性",
    "eg": "The quality of this product is excellent.\nShe has many good qualities.\nWe are improving the quality of service."
  },
  "be": {
    "ph": "/bi/",
    "zh": "是；成为；存在",
    "eg": "I want to be a doctor.\nBe careful!\nThe concert will be tomorrow."
  },
  "so": {
    "ph": "/soʊ/",
    "zh": "如此；这么；所以",
    "eg": "I am so tired today.\nIt was so cold that we stayed inside.\nShe was ill, so she didn't come."
  },
  "poor": {
    "ph": "/pɔːr/",
    "zh": "贫穷的；可怜的；劣质的",
    "eg": "They are too poor to afford a car.\nThe poor child was crying.\nThe sound quality is poor."
  },
  "then": {
    "ph": "/ðen/",
    "zh": "然后；那时；那么",
    "eg": "We had dinner, and then we watched TV.\nI was younger then.\nIf you're ready, then let's start."
  },
  "when": {
    "ph": "/wen/",
    "zh": "当...时；那时",
    "eg": "Call me when you arrive.\nI remember the day when we first met.\nWhen will the meeting start?"
  },
  "all": {
    "ph": "/ɔːl/",
    "zh": "所有的；全部的；全体",
    "eg": "All students must attend the lecture.\nI ate all the cookies.\nAll of us agreed with the plan."
  },
  "thought": {
    "ph": "/θɔːt/",
    "zh": "想法；思考（think的过去式）",
    "eg": "I thought you were leaving.\nShe thought about the problem deeply.\nHe shared his thoughts with me."
  },
  "there": {
    "ph": "/ðeər/",
    "zh": "那里；有",
    "eg": "Put the book over there.\nThere is a cat in the garden.\nThere are many reasons for this."
  },
  "was": {
    "ph": "/wɒz/",
    "zh": "是（be的过去式，单数）",
    "eg": "She was happy yesterday.\nIt was a beautiful day.\nThere was a storm last night."
  },
  "no": {
    "ph": "/noʊ/",
    "zh": "不；没有；第几号",
    "eg": "No, I don't agree.\nThere is no milk left.\nShe lives at No. 25 Park Street."
  },
  "hope": {
    "ph": "/hoʊp/",
    "zh": "希望；期望",
    "eg": "I hope to see you soon.\nDon't give up hope.\nThere is still hope for success."
  },
  "grey": {
    "ph": "/ɡreɪ/",
    "zh": "灰色的；灰白的",
    "eg": "The sky was grey and cloudy.\nHe has grey hair.\nShe wore a grey dress."
  },
  "ex": {
    "ph": "/eks/",
    "zh": "前；以前的",
    "eg": "She is my ex-girlfriend.\nHe is an ex-soldier.\nWe met at an ex-colleague's party."
  },
  "soldier": {
    "ph": "/ˈsoʊldʒər/",
    "zh": "士兵；军人",
    "eg": "The soldier saluted the officer.\nHe served as a soldier for ten years.\nThe soldiers marched in parade."
  },
  "came": {
    "ph": "/keɪm/",
    "zh": "来；来到（come的过去式）",
    "eg": "She came to visit us.\nThe train came late.\nHe came from a small town."
  },
  "it": {
    "ph": "/ɪt/",
    "zh": "它；这",
    "eg": "It is raining outside.\nI found a book, and it was very interesting.\nIt's important to be honest."
  },
  "our": {
    "ph": "/ˈaʊər/",
    "zh": "我们的",
    "eg": "This is our house.\nOur team won the game.\nWe love our country."
  },
  "class": {
    "ph": "/klæs/",
    "zh": "班级；阶级；种类",
    "eg": "Our class has thirty students.\nShe comes from a middle-class family.\nThis is a first-class hotel."
  },
  "mr": {
    "ph": "/ˈmɪstər/",
    "zh": "先生（Mister的缩写）",
    "eg": "Mr. Smith is our neighbor.\nGood morning, Mr. President.\nI have an appointment with Mr. Brown."
  },
  "li": {
    "ph": "/liː/",
    "zh": "李（姓氏）",
    "eg": "Mr. Li is our class teacher.\nLi is the most common Chinese surname.\nI had a conversation with Li yesterday."
  },
  "he": {
    "ph": "/hi/",
    "zh": "他",
    "eg": "He is my brother.\nI gave him the book.\nHe works in a bank."
  },
  "tried": {
    "ph": "/traɪd/",
    "zh": "尝试；努力（try的过去式）",
    "eg": "She tried to open the door.\nHe tried his best to succeed.\nWe tried several methods."
  },
  "every": {
    "ph": "/ˈevri/",
    "zh": "每个；每一",
    "eg": "Every student must wear a uniform.\nI go jogging every morning.\nEvery child deserves education."
  },
  "means": {
    "ph": "/miːnz/",
    "zh": "方法；手段；财产",
    "eg": "We need to find a means of communication.\nHe has the means to buy a car.\nThe ends justify the means."
  },
  "please": {
    "ph": "/pliːz/",
    "zh": "请；使高兴",
    "eg": "Please sit down.\nShe tried to please her parents.\nThe music pleased the audience."
  },
  "mrs": {
    "ph": "/ˈmɪsɪz/",
    "zh": "夫人；太太（Mrs.的缩写）",
    "eg": "Mrs. Brown is our neighbor.\nGood afternoon, Mrs. President.\nI spoke to Mrs. Smith yesterday."
  },
  "decided": {
    "ph": "/dɪˈsaɪdɪd/",
    "zh": "决定；决心（decide的过去式）",
    "eg": "We decided to go on a trip.\nShe decided that it was time to leave.\nThe committee decided against the proposal."
  },
  "would": {
    "ph": "/wʊd/",
    "zh": "将；愿意；会",
    "eg": "She said she would come.\nWould you like some tea?\nIf I were rich, I would travel the world."
  },
  "have": {
    "ph": "/hæv/",
    "zh": "有；吃；进行",
    "eg": "I have two sisters.\nWe have lunch at noon.\nThey have a meeting every week."
  },
  "rematch": {
    "ph": "/ˈriːmætʃ/",
    "zh": "重赛；复赛",
    "eg": "The teams will play a rematch next week.\nHe demanded a rematch after losing.\nThe rematch was even more exciting."
  },
  "what": {
    "ph": "/wɒt/",
    "zh": "什么；多么",
    "eg": "What is your name?\nWhat a beautiful day!\nI don't know what to do."
  },
  "great": {
    "ph": "/ɡreɪt/",
    "zh": "伟大的；很好的；重大的",
    "eg": "He is a great leader.\nWe had a great time at the party.\nThe Great Wall is a famous landmark."
  },
  "also": {
    "ph": "/ˈɔːlsoʊ/",
    "zh": "也；同样",
    "eg": "She is also a teacher.\nI also like chocolate.\nHe is rich, and he is also generous."
  },
  "made": {
    "ph": "/meɪd/",
    "zh": "制作；使（make的过去式）",
    "eg": "She made a delicious cake.\nThe decision was made quickly.\nThis table is made of wood."
  },
  "contribution": {
    "ph": "/ˌkɒntrɪˈbjuːʃn/",
    "zh": "贡献；捐献；稿件",
    "eg": "He made a significant contribution to science.\nWe appreciate your contribution.\nThe book includes contributions from several authors."
  },
  "winning": {
    "ph": "/ˈwɪnɪŋ/",
    "zh": "获胜的；赢的",
    "eg": "The winning team celebrated.\nShe had a winning smile.\nThe winning ticket was announced."
  },
  "double": {
    "ph": "/ˈdʌbl/",
    "zh": "双倍的；双重的",
    "eg": "She ordered a double espresso.\nThe word has a double meaning.\nWe need double the amount."
  },
  "championship": {
    "ph": "/ˈtʃæmpiənʃɪp/",
    "zh": "锦标赛；冠军称号",
    "eg": "Our team won the championship.\nShe has held the championship for three years.\nThe championship game will be on Sunday."
  },
  "thursday": {
    "ph": "/ˈθɜːzdeɪ/",
    "zh": "星期四",
    "eg": "We have a test on Thursday.\nThursday is my favorite day.\nI'll see you next Thursday."
  },
  "shuhan": {
    "ph": "/ʃuː hæn/",
    "zh": "舒涵（人名）",
    "eg": "Shuhan is a member of the football team.\nShuhan's opinion is important.\nI discussed the issue with Shuhan."
  },
  "one": {
    "ph": "/wʌn/",
    "zh": "一；一个；唯一",
    "eg": "I have one brother.\nThis is the one I want.\nShe is the one who helped me."
  },
  "members": {
    "ph": "/ˈmembərz/",
    "zh": "成员；会员（复数）",
    "eg": "All members must attend the meeting.\nThe club has over 100 members.\nShe is one of the founding members."
  },
  "don't": {
    "ph": "/doʊnt/",
    "zh": "不（do not的缩写）",
    "eg": "I don't like coffee.\nThey don't know the answer.\nPlease don't be late."
  },
  "need": {
    "ph": "/niːd/",
    "zh": "需要；必须",
    "eg": "I need your help.\nYou need to finish your homework.\nThere is no need to worry."
  },
  "because": {
    "ph": "/bɪˈkɒz/",
    "zh": "因为",
    "eg": "We stayed home because it was raining.\nShe was late because of the traffic.\nI like him because he is honest."
  },
  "qingzi": {
    "ph": "/tʃɪŋ ziː/",
    "zh": "清子（人名）",
    "eg": "Qingzi apologized to the teacher.\nQingzi's action resolved the conflict.\nI saw Qingzi in the cafeteria."
  },
  "took": {
    "ph": "/tʊk/",
    "zh": "拿；取；接受（take的过去式）",
    "eg": "She took the book from the shelf.\nHe took a photograph of the sunset.\nIt took me an hour to finish."
  },
  "initiative": {
    "ph": "/ɪˈnɪʃətɪv/",
    "zh": "主动性；倡议；主动权",
    "eg": "She showed great initiative.\nThe government launched a new initiative.\nHe took the initiative to start the project."
  },
  "apologize": {
    "ph": "/əˈpɒlədʒaɪz/",
    "zh": "道歉；认错",
    "eg": "I apologize for being late.\nHe apologized to his friend.\nYou should apologize for your mistake."
  },
  "duan": {
    "ph": "/duːæn/",
    "zh": "段（姓氏）",
    "eg": "Mr. Duan is the headmaster.\nDuan is a common Chinese surname.\nI had a meeting with Duan."
  },
  "yankai": {
    "ph": "/jæn kaɪ/",
    "zh": " Yankai（人名）",
    "eg": "Yankai was adjusted to first place.\nYankai's performance was outstanding.\nI congratulated Yankai on his success."
  },
  "has": {
    "ph": "/hæz/",
    "zh": "有（have的第三人称单数现在式）",
    "eg": "She has a beautiful voice.\nHe has two children.\nThe company has a good reputation."
  },
  "directly": {
    "ph": "/dəˈrektli/",
    "zh": "直接地；立即",
    "eg": "He spoke directly to the manager.\nThe sun was directly overhead.\nYou can contact me directly."
  },
  "adjusted": {
    "ph": "/əˈdʒʌstɪd/",
    "zh": "调整的；适应的（adjust的过去分词）",
    "eg": "The seat can be adjusted for height.\nShe quickly adjusted to the new environment.\nThe data was adjusted for inflation."
  },
  "first": {
    "ph": "/fɜːrst/",
    "zh": "第一；最初的",
    "eg": "This is my first time in Beijing.\nShe won first prize.\nThe first chapter is interesting."
  },
  "place": {
    "ph": "/pleɪs/",
    "zh": "地方；位置；名次",
    "eg": "This is a quiet place.\nShe finished in second place.\nWe need to find a parking place."
  },
  "very": {
    "ph": "/ˈveri/",
    "zh": "非常；很",
    "eg": "She is very intelligent.\nThank you very much.\nIt's very cold today."
  },
  "happy": {
    "ph": "/ˈhæpi/",
    "zh": "快乐的；幸福的",
    "eg": "I am very happy today.\nThey have a happy marriage.\nThe children are playing happily."
  },
  "because": {
    "ph": "/bɪˈkɒz/",
    "zh": "因为",
    "eg": "We stayed home because it was raining.\nShe was late because of the traffic.\nI like him because he is honest."
  },
  "this": {
    "ph": "/ðɪs/",
    "zh": "这；这个",
    "eg": "This is my favorite song.\nLook at this picture.\nThis book belongs to me."
  },
  "meant": {
    "ph": "/ment/",
    "zh": "意味；打算（mean的过去式）",
    "eg": "What he said meant a lot to me.\nI meant to call you yesterday.\nThe sign means that parking is prohibited."
  },
  "sure": {
    "ph": "/ʃɔːr/",
    "zh": "确信的；一定的",
    "eg": "I am sure she will come.\nMake sure to lock the door.\nHe is sure of his success."
  },
  "become": {
    "ph": "/bɪˈkʌm/",
    "zh": "成为；变得",
    "eg": "She wants to become a doctor.\nIt became dark suddenly.\nHe became famous overnight."
  },
  "better": {
    "ph": "/ˈbetər/",
    "zh": "更好的；较好的",
    "eg": "This book is better than that one.\nI feel better today.\nWe need a better solution."
  },
  "future": {
    "ph": "/ˈfjuːtʃər/",
    "zh": "未来；将来",
    "eg": "We plan to expand in the future.\nThe future is uncertain.\nShe has a bright future ahead."
  },
  "i": {
    "ph": "/aɪ/",
    "zh": "我",
    "eg": "I am a student.\nI love reading books.\nCan I help you?"
  },
  "hope": {
    "ph": "/hoʊp/",
    "zh": "希望；期望",
    "eg": "I hope to see you soon.\nDon't give up hope.\nThere is still hope for success."
  },
  "end": {
    "ph": "/end/",
    "zh": "结束；末端；目标",
    "eg": "This is the end of the road.\nThe movie has a happy end.\nWe will never give up till the end."
  },
  "hilarious": {
    "ph": "/hɪˈleəriəs/",
    "zh": "好笑的；滑稽的",
    "eg": "The movie was hilarious.\nShe told a hilarious story.\nWe had a hilarious time at the party."
  },
  "character": {
    "ph": "/ˈkærəktər/",
    "zh": "人物角色；性格；字符",
    "eg": "The main character is a detective.\nShe has a strong character.\nPlease enter your password using alphanumeric characters."
  },
  "drawing": {
    "ph": "/ˈdrɔːɪŋ/",
    "zh": "绘画；图画",
    "eg": "She is good at drawing.\nThe drawing on the wall is beautiful.\nHe made a drawing of the building."
  },
  "many": {
    "ph": "/ˈmeni/",
    "zh": "许多",
    "eg": "Many people attended the concert.\nHow many books do you have?\nThere are many reasons to be happy."
  },
  "artists": {
    "ph": "/ˈɑːrtɪsts/",
    "zh": "艺术家（复数）",
    "eg": "The artists displayed their work.\nShe is one of the famous artists.\nYoung artists need encouragement."
  },
  "appeared": {
    "ph": "/əˈpɪərd/",
    "zh": "出现；显得（appear的过去式）",
    "eg": "A cat appeared from behind the tree.\nShe appeared confident during the interview.\nThe stars appeared in the night sky."
},
"art": {

"ph": "/ɑːrt/",

"zh": "艺术；美术",

"eg": "She studies art at university.\nThe museum has a great collection of modern art.\nPainting is a form of art."

},

"lesson": {

"ph": "/ˈlesn/",

"zh": "课；教训",

"eg": "We have an English lesson today.\nThe accident taught me a valuable lesson.\nThe piano lesson lasts for an hour."

},

"morning": {

"ph": "/ˈmɔːrnɪŋ/",

"zh": "早晨；上午",

"eg": "I usually go for a run in the morning.\nGood morning! How did you sleep?\nThe morning sun is warm and pleasant."

},

"26th": {

"ph": "/ˈtwentɪ sɪksθ/",

"zh": "第二十六",

"eg": "Today is December 26th.\nHer birthday is on the 26th of May.\nThe conference will be held on the 26th."

},

"here": {

"ph": "/hɪər/",

"zh": "这里；在这儿",

"eg": "Come here, please.\nHere is your coffee.\nI've lived here for five years."

},

"are": {

"ph": "/ɑːr/",

"zh": "是（be动词的复数现在式）",

"eg": "We are ready to start.\nThey are my best friends.\nWhere are the keys?"

},

"some": {

"ph": "/sʌm/",

"zh": "一些；某个；大约",

"eg": "Would you like some tea?\nSome people disagree with this idea.\nIt happened some years ago."

},

"pictures": {

"ph": "/ˈpɪktʃərz/",

"zh": "图片；照片（复数）",

"eg": "She showed me some pictures of her vacation.\nThe book has colorful pictures.\nI took many pictures at the wedding."

},

"they": {

"ph": "/ðeɪ/",

"zh": "他们；它们",

"eg": "They are coming to dinner tonight.\nI gave the books to them.\nThey live in a big house."

},

"drew": {

"ph": "/druː/",

"zh": "画；拉（draw的过去式）",

"eg": "She drew a beautiful landscape.\nThe children drew pictures of their families.\nHe drew the curtains to let in the light."

},

"annotation": {

"ph": "/ˌænəˈteɪʃn/",

"zh": "注解；注释",

"eg": "The book has helpful annotations.\nPlease read the annotation carefully.\nThe annotation explains the difficult terms."

},

"adj": {

"ph": "/ˈædʒɪktɪv/",

"zh": "形容词（adjective的缩写）",

"eg": "'Happy' is an adjective.\nAdjective usually comes before nouns.\nLearn some common adjectives first."

},

"n": {

"ph": "/naʊn/",

"zh": "名词（noun的缩写）",

"eg": "'Book' is a noun.\nNouns can be singular or plural.\nProper nouns start with capital letters."

},

"third": {

"ph": "/θɜːrd/",

"zh": "第三；三分之一",

"eg": "This is my third visit to Paris.\nShe finished in third place.\nTwo thirds of the students passed the exam."

},

"annotation": {

"ph": "/ˌænəˈteɪʃn/",

"zh": "注解；注释",

"eg": "The professor's annotations were very helpful.\nPlease add annotations to explain your code.\nThe annotation at the bottom clarifies the meaning."

},

"1": {

"ph": "/wʌn/",

"zh": "一；第一",

"eg": "This is annotation number 1.\nPage 1 contains the introduction.\nMy first point is about safety."

},

"2": {

"ph": "/tuː/",

"zh": "二；第二",

"eg": "See annotation 2 for more details.\nThis is my second attempt.\nThe second chapter is the most interesting."

},

"from": {

"ph": "/frɒm/",

"zh": "从；来自；由于",

"eg": "I come from China.\nThis gift is from my parents.\nThe train from London arrives at 5 PM."

},

"private": {

"ph": "/ˈpraɪvət/",

"zh": "私人的；私有的",

"eg": "This is a private conversation.\nShe has a private office.\nThe beach is private property."

},

"grudge": {

"ph": "/ɡrʌdʒ/",

"zh": "怨恨；积怨",

"eg": "He holds a grudge against his neighbor.\nIt's not good to keep grudges.\nShe forgave him without any grudge."

},

"probably": {

"ph": "/ˈprɒbəbli/",

"zh": "很可能；大概",

"eg": "She will probably arrive late.\nIt will probably rain tomorrow.\nHe probably forgot about the meeting."

},

"personal": {

"ph": "/ˈpɜːsənl/",

"zh": "个人的；私人的",

"eg": "This is a personal matter.\nShe keeps her personal life private.\nI have personal reasons for leaving."

},

"rivalry": {

"ph": "/ˈraɪvlri/",

"zh": "竞争；对抗",

"eg": "There is strong rivalry between the two teams.\nThe business rivalry became intense.\nSibling rivalry is common in families."

},

"return": {

"ph": "/rɪˈtɜːn/",

"zh": "返回；归还；回报",

"eg": "I will return next week.\nPlease return the book to the library.\nThe investment brought good returns."

},

"privacy": {

"ph": "/ˈprɪvəsi/",

"zh": "隐私；私密",

"eg": "Respect other people's privacy.\nThe new law protects online privacy.\nShe values her privacy greatly."

},

"terms": {

"ph": "/tɜːrmz/",

"zh": "条款；术语；条件（复数）",

"eg": "Read the terms and conditions carefully.\nThe contract has strict terms.\nI agree to these terms."

},

"original": {

"ph": "/əˈrɪdʒənl/",

"zh": "原始的；最初的；原创的",

"eg": "This is the original manuscript.\nShe has very original ideas.\nThe painting is an original, not a copy."

},

"manuscript": {

"ph": "/ˈmænjuskrɪpt/",

"zh": "手稿；原稿",

"eg": "The author's manuscript was discovered.\nShe submitted her manuscript to the publisher.\nThe medieval manuscript is well preserved."

},

"due": {

"ph": "/djuː/",

"zh": "由于；应得的；到期的",

"eg": "The delay was due to bad weather.\nShe finally received her due recognition.\nThe rent is due on the first of the month."

},

"violation": {

"ph": "/ˌvaɪəˈleɪʃn/",

"zh": "违反；侵犯",

"eg": "This is a violation of the rules.\nThe company was fined for safety violations.\nPrivacy violation is a serious offense."

},

"removed": {

"ph": "/rɪˈmuːvd/",

"zh": "移除的；删除的（remove的过去分词）",

"eg": "The content was removed from the website.\nShe had her tonsils removed.\nThe stain was easily removed."

},

"click": {

"ph": "/klɪk/",

"zh": "点击；发出咔嗒声",

"eg": "Click the button to continue.\nThe camera made a click sound.\nIt took me a while to click with the new software."

},

"view": {

"ph": "/vjuː/",

"zh": "查看；观点；景色",

"eg": "The view from the top is amazing.\nIn my view, we should wait.\nYou can view the document online."

},

"original": {

"ph": "/əˈrɪdʒənl/",

"zh": "原始的；最初的；原创的",

"eg": "This is the original version of the song.\nShe has an original way of thinking.\nThe original plan was changed."

},

"draft": {

"ph": "/drɑːft/",

"zh": "草稿；草案",

"eg": "This is only a first draft.\nShe wrote several drafts of the essay.\nThe draft agreement needs revision."

},

"illustration": {

"ph": "/ˌɪləˈstreɪʃn/",

"zh": "插画；说明",

"eg": "The book has beautiful illustrations.\nThis illustration explains the process.\nShe works as a scientific illustration."

},

"figure": {

"ph": "/ˈfɪɡər/",

"zh": "图形；人物；数字",

"eg": "See figure 1 for reference.\nShe is an important political figure.\nThe final figure was surprising."

},

"caption": {

"ph": "/ˈkæpʃn/",

"zh": "标题；说明文字",

"eg": "The caption under the photo was funny.\nWrite a caption for this picture.\nThe caption explains what's happening."

},

"margin": {

"ph": "/ˈmɑːrdʒɪn/",

"zh": "页边空白；边缘；利润",

"eg": "Write your notes in the margin.\nThe company operates on thin margins.\nWe won by a narrow margin."

},

"top": {

"ph": "/tɒp/",

"zh": "顶部；顶端；最好的",

"eg": "The book is on the top shelf.\nShe finished at the top of her class.\nThe mountain top was covered in snow."

},

"font": {

"ph": "/fɒnt/",

"zh": "字体；字形",

"eg": "Use a larger font size.\nThis font is hard to read.\nShe chose an elegant font for the invitation."

},

"size": {

"ph": "/saɪz/",

"zh": "大小；尺寸；尺码",

"eg": "What size do you wear?\nThe room is a good size.\nThe font size should be 12 points."

},

"color": {

"ph": "/ˈkʌlər/",

"zh": "颜色；色彩",

"eg": "What's your favorite color?\nThe leaves change color in autumn.\nShe painted the room a bright color."

},

"666": {

"ph": "/sɪks sɪks sɪks/",

"zh": "六百六十六",

"eg": "The number 666 is often associated with symbolism.\nPage 666 contains the conclusion.\nThe address is 666 Main Street."

},

"center": {

"ph": "/ˈsentər/",

"zh": "中心；中央",

"eg": "The hotel is in the city center.\nPlace the text in the center.\nShe likes to be the center of attention."

},

"text": {

"ph": "/tekst/",

"zh": "文本；课文",

"eg": "Send me a text message.\nThe text is easy to understand.\nShe studied the original text carefully."

},

"align": {

"ph": "/əˈlaɪn/",

"zh": "对齐；排列",

"eg": "Align the text to the left.\nThe planets align once every hundred years.\nWe need to align our goals."

},

"left": {

"ph": "/left/",

"zh": "左边；剩余的",

"eg": "Turn left at the traffic lights.\nThere's some food left in the fridge.\nShe writes with her left hand."

},

"right": {

"ph": "/raɪt/",

"zh": "右边；正确的；权利",

"eg": "The bank is on the right.\nYou are right about that.\nEveryone has the right to education."

},

"justify": {

"ph": "/ˈdʒʌstɪfaɪ/",

"zh": "证明合理；对齐",

"eg": "Can you justify your decision?\nThe text is fully justified.\nNothing can justify such behavior."

},

"border": {

"ph": "/ˈbɔːrdər/",

"zh": "边框；边界",

"eg": "The photo has a white border.\nThey crossed the border at night.\nThe garden has a wooden border."

},

"solid": {

"ph": "/ˈsɒlɪd/",

"zh": "固体的；坚实的；纯色的",

"eg": "Ice is water in solid form.\nThey built the house on solid ground.\nUse a solid color for the background."

},

"dotted": {

"ph": "/ˈdɒtɪd/",

"zh": "虚线的；有点的",

"eg": "Sign on the dotted line.\nThe dotted line shows the proposed route.\nThe fabric has a dotted pattern."

},

"dashed": {

"ph": "/dæʃt/",

"zh": "虚线的；破折号的",

"eg": "The border is dashed.\nFollow the dashed path.\nShe dashed off a quick note."

},

"padding": {

"ph": "/ˈpædɪŋ/",

"zh": "内边距；填充",

"eg": "Add some padding around the text.\nThe jacket has extra padding.\nCSS padding controls the space inside elements."

},

"shadow": {

"ph": "/ˈʃædəʊ/",

"zh": "阴影；影子",

"eg": "The tree cast a long shadow.\nThe text has a drop shadow effect.\nThey lived in the shadow of the mountain."

},

"radius": {

"ph": "/ˈreɪdiəs/",

"zh": "半径；范围",

"eg": "The circle has a radius of 5cm.\nThe explosion could be heard within a radius of 10 miles.\nCSS border-radius creates rounded corners."

},

"background": {

"ph": "/ˈbækɡraʊnd/",

"zh": "背景；背景色",

"eg": "The background music was pleasant.\nShe has a strong academic background.\nChange the background color to blue."

},

"transparent": {

"ph": "/trænsˈpærənt/",

"zh": "透明的；明显的",

"eg": "The water was transparent.\nWe need transparent policies.\nThe background is semi-transparent."

},

"cursor": {

"ph": "/ˈkɜːrsər/",

"zh": "光标；指针",

"eg": "Move the cursor to the link.\nThe cursor changes to a hand symbol.\nUse the cursor to select text."

},

"pointer": {

"ph": "/ˈpɔɪntər/",

"zh": "指针；指示器",

"eg": "The mouse pointer moved across the screen.\nThis report is a good pointer to future trends.\nThe compass pointer shows north."

},

"transition": {

"ph": "/trænˈzɪʃn/",

"zh": "过渡；转变",

"eg": "The transition from summer to autumn is gradual.\nCSS transitions make changes smooth.\nThe country is in transition to democracy."

},

"ease": {

"ph": "/iːz/",

"zh": "轻松；缓和；减缓",

"eg": "She completed the task with ease.\nThe medicine will ease the pain.\nCSS ease function creates smooth animations."

},

"hover": {

"ph": "/ˈhɒvər/",

"zh": "悬停；徘徊",

"eg": "The helicopter hovered above.\nCSS hover effect changes style when mouse is over element.\nBirds hover in the air before diving."

},

"active": {

"ph": "/ˈæktɪv/",

"zh": "活跃的；激活的",

"eg": "She leads an active lifestyle.\nThe volcano is still active.\nCSS active state applies when element is being clicked."

},

"transform": {

"ph": "/trænsˈfɔːrm/",

"zh": "变换；改变",

"eg": "The caterpillar transforms into a butterfly.\nCSS transform can rotate, scale, or move elements.\nEducation can transform lives."

},

"translate": {

"ph": "/trænsˈleɪt/",

"zh": "平移；翻译",

"eg": "Can you translate this document?\nCSS translate moves elements without affecting layout.\nThe book has been translated into many languages."

},

"box": {

"ph": "/bɒks/",

"zh": "盒子；箱；方框",

"eg": "Put the books in the box.\nCheck the box if you agree.\nCSS box model includes content, padding, border, and margin."

},

"shadow": {

"ph": "/ˈʃædəʊ/",

"zh": "阴影；影子",

"eg": "The building casts a large shadow.\nCSS box-shadow adds shadow effects.\nThey worked in the shadow of the great leader."

},

"blur": {

"ph": "/blɜːr/",

"zh": "模糊；使模糊",

"eg": "The photo is blurry.\nCSS filter: blur() creates blur effects.\nTears blurred her vision."

},

"spread": {

"ph": "/spred/",

"zh": "传播；展开；蔓延",

"eg": "The news spread quickly.\nCSS box-shadow spread controls how far the shadow extends.\nShe spread the map on the table."

},

"opacity": {

"ph": "/əʊˈpæsəti/",

"zh": "不透明度；模糊",

"eg": "The opacity of the glass makes it hard to see through.\nCSS opacity sets the transparency level.\nThe opacity of the smoke increased."

},

"z-index": {

"ph": "/ziː ˈɪndeks/",

"zh": "z轴索引；层叠顺序",

"eg": "Elements with higher z-index appear on top.\nUse z-index to control stacking order.\nThe modal has a high z-index to overlay other content."

},

"position": {

"ph": "/pəˈzɪʃn/",

"zh": "位置；定位",

"eg": "What is your current position?\nCSS position can be static, relative, absolute, or fixed.\nThe company's market position is strong."

},

"fixed": {

"ph": "/fɪkst/",

"zh": "固定的；不变的",

"eg": "The price is fixed.\nCSS position: fixed keeps element in viewport.\nShe has fixed ideas about politics."

},

"absolute": {

"ph": "/ˈæbsəluːt/",

"zh": "绝对的；完全的",

"eg": "I have absolute confidence in you.\nCSS position: absolute positions relative to nearest positioned ancestor.\nThe ruler had absolute power."

},

"relative": {

"ph": "/ˈrelətɪv/",

"zh": "相对的；比较的",

"eg": "Everything is relative.\nCSS position: relative positions relative to normal position.\nShe's a relative of mine."

},

"static": {

"ph": "/ˈstætɪk/",

"zh": "静态的；静止的",

"eg": "Static electricity can cause shocks.\nCSS position: static is the default positioning.\nThe TV screen showed static."

},

"display": {

"ph": "/dɪˈspleɪ/",

"zh": "显示；陈列",

"eg": "The museum has a new display.\nCSS display property controls layout behavior.\nShe displayed great courage."

},

"flex": {

"ph": "/fleks/",

"zh": "弹性；弯曲",

"eg": "CSS display: flex creates flexible layouts.\nHe did some flex exercises.\nThe material has good flex quality."

},

"grid": {

"ph": "/ɡrɪd/",

"zh": "网格；格子",

"eg": "The city streets form a grid.\nCSS display: grid creates two-dimensional layouts.\nThe electrical grid was damaged in the storm."

},

"responsive": {

"ph": "/rɪˈspɒnsɪv/",

"zh": "响应式的；反应迅速的",

"eg": "The website is responsive on mobile devices.\nShe is very responsive to feedback.\nThe government needs to be more responsive to people's needs."

},

"media": {

"ph": "/ˈmiːdiə/",

"zh": "媒体；媒介",

"eg": "Social media has changed communication.\nCSS media queries adapt styles to different devices.\nThe news media reported the event."

},

"query": {

"ph": "/ˈkwɪəri/",

"zh": "查询；询问",

"eg": "I have a query about my bill.\nCSS media queries apply styles based on conditions.\nThe database query returned many results."

},

"breakpoint": {

"ph": "/ˈbreɪkpɔɪnt/",

"zh": "断点；临界点",

"eg": "Set breakpoints for different screen sizes.\nThe system reached a breakpoint.\nCSS breakpoints help create responsive designs."

},

"container": {

"ph": "/kənˈteɪnər/",

"zh": "容器；集装箱",

"eg": "Food should be stored in airtight containers.\nCSS container queries are a new feature.\nThe shipping container was loaded onto the ship."

},

"wrapper": {

"ph": "/ˈræpər/",

"zh": "包装；包装器",

"eg": "The candy has a colorful wrapper.\nCSS wrapper div centers content.\nShe removed the wrapper from the gift."

},

"centering": {

"ph": "/ˈsentərɪŋ/",

"zh": "居中；对中",

"eg": "Text centering makes content look balanced.\nThe machine needs proper centering.\nCSS provides several centering techniques."

},

"margin": {

"ph": "/ˈmɑːrdʒɪn/",

"zh": "页边空白；边缘；利润",

"eg": "Set margin: auto to center elements.\nThe company operates on thin margins.\nWrite notes in the margin of the book."

},

"auto": {

"ph": "/ˈɔːtəʊ/",

"zh": "自动的；汽车的",

"eg": "The car has an automatic transmission.\nCSS margin: auto centers elements horizontally.\nShe works in the auto industry."

},

"animation": {

"ph": "/ˌænɪˈmeɪʃn/",

"zh": "动画；生机",

"eg": "The movie uses computer animation.\nCSS animations bring websites to life.\nShe studied animation at art school."

},

"keyframe": {

"ph": "/ˈkiːfreɪm/",

"zh": "关键帧",

"eg": "CSS @keyframes define animation sequences.\nThe animator drew the keyframes.\nKeyframe animation creates smooth motion."

},

"duration": {

"ph": "/djʊˈreɪʃn/",

"zh": "持续时间；期间",

"eg": "The animation duration is 2 seconds.\nThe storm lasted for the duration of the night.\nCSS animation-duration controls how long animations take."

},

"delay": {

"ph": "/dɪˈleɪ/",

"zh": "延迟；延期",

"eg": "The flight was delayed by bad weather.\nCSS animation-delay sets when animation starts.\nThere will be a short delay before the show begins."

},

"iteration": {

"ph": "/ˌɪtəˈreɪʃn/",

"zh": "迭代；重复",

"eg": "The animation iterates 3 times.\nSoftware development involves many iterations.\nCSS animation-iteration-count controls repetitions."

},

"infinite": {

"ph": "/ˈɪnfɪnət/",

"zh": "无限的；无穷的",

"eg": "The universe may be infinite.\nCSS animation-iteration-count: infinite loops forever.\nShe has infinite patience with children."

},

"direction": {

"ph": "/dəˈrekʃn/",

"zh": "方向；指导",

"eg": "Which direction should we go?\nCSS animation-direction controls playback direction.\nThe company needs new direction."

},

"alternate": {

"ph": "/ˈɔːltəneɪt/",

"zh": "交替的；轮流的",

"eg": "CSS animation-direction: alternate reverses direction each cycle.\nThey alternate between two strategies.\nThe pattern uses alternate colors."

},

"timing": {

"ph": "/ˈtaɪmɪŋ/",

"zh": "定时；时机",

"eg": "The timing of the announcement was perfect.\nCSS animation-timing-function controls speed curve.\nGood timing is essential in comedy."

},

"function": {

"ph": "/ˈfʌŋkʃn/",

"zh": "函数；功能；作用",

"eg": "The heart's function is to pump blood.\nCSS timing functions like ease, linear, ease-in-out.\nThis machine has multiple functions."

},

"cubic-bezier": {

"ph": "/ˈkjuːbɪk ˈbeziər/",

"zh": "三次贝塞尔曲线",

"eg": "CSS cubic-bezier() creates custom timing functions.\nThe designer used cubic-bezier for smooth animation.\nLearn to use cubic-bezier for better transitions."

},

"steps": {

"ph": "/steps/",

"zh": "步数；台阶",

"eg": "CSS animation-timing-function: steps() creates frame-by-frame animation.\nShe climbed the steps slowly.\nFollow these steps to complete the task."

},
"not": {

"ph": "/nɒt/",

"zh": "非；不",

"eg": "CSS :not() pseudo-class excludes elements.\nThis is not what I expected.\nThe :not() selector is useful for exceptions."

},

"target": {

"ph": "/ˈtɑːɡɪt/",

"zh": "目标；靶子",

"eg": "CSS :target pseudo-class styles the element with matching ID.\nThe arrow hit the center of the target.\nOur target is to finish by Friday."

},

"focus": {

"ph": "/ˈfəʊkəs/",

"zh": "焦点；集中",

"eg": "CSS :focus styles elements when they receive focus.\nPlease focus on your work.\nThe camera automatically adjusts focus."

},

"hover": {

"ph": "/ˈhɒvə/",

"zh": "悬停；徘徊",

"eg": "CSS :hover styles elements when mouse is over them.\nThe helicopter can hover in one place.\nBirds hover above the water before diving."

},

"active": {

"ph": "/ˈæktɪv/",

"zh": "活跃的；激活的",

"eg": "CSS :active styles elements when being activated.\nShe leads an active lifestyle.\nThe volcano is still active and dangerous."

},

"visited": {

"ph": "/ˈvɪzɪtɪd/",

"zh": "已访问的",

"eg": "CSS :visited styles links that have been visited.\nI visited Paris last summer.\nThe visited links appear in purple color."

},

"link": {

"ph": "/lɪŋk/",

"zh": "链接；连接",

"eg": "CSS :link styles unvisited links.\nClick the link to open the website.\nThere's a strong link between diet and health."

},

"before": {

"ph": "/bɪˈfɔː/",

"zh": "在...之前",

"eg": "CSS ::before creates pseudo-element before content.\nPlease arrive before 8 o'clock.\nThink carefully before making a decision."

},

"after": {

"ph": "/ˈɑːftə/",

"zh": "在...之后",

"eg": "CSS ::after creates pseudo-element after content.\nWe'll meet after the meeting.\nThe party will continue after dinner."

},

"content": {

"ph": "/ˈkɒntent/",

"zh": "内容；满足",

"eg": "CSS content property sets pseudo-element content.\nThe book has interesting content.\nShe is content with her current job."

},

"counter": {

"ph": "/ˈkaʊntə/",

"zh": "计数器；柜台",

"eg": "CSS counters automatically number elements.\nThe shop assistant stood behind the counter.\nUse counters for custom numbering systems."

},

"quotes": {

"ph": "/kwəʊts/",

"zh": "引号；引用",

"eg": "CSS quotes property sets quotation marks.\nShe included several quotes from famous authors.\nThe article begins with inspiring quotes."

},

"cursor": {

"ph": "/ˈkɜːsə/",

"zh": "光标；指针",

"eg": "CSS cursor property sets mouse cursor style.\nMove the cursor to the link.\nThe cursor changes to indicate different actions."

},

"pointer": {

"ph": "/ˈpɔɪntə/",

"zh": "指针；指示器",

"eg": "CSS cursor: pointer shows hand cursor.\nThe compass pointer shows north.\nThis report serves as a pointer to future trends."

},

"default": {

"ph": "/dɪˈfɔːlt/",

"zh": "默认；缺省",

"eg": "CSS cursor: default shows arrow cursor.\nThe default settings work well for most users.\nIf you don't choose, the default option is selected."

},

"text": {

"ph": "/tekst/",

"zh": "文本；文字",

"eg": "CSS cursor: text shows I-beam for text selection.\nThe book contains both text and images.\nSend me a text message when you arrive."

},

"wait": {

"ph": "/weɪt/",

"zh": "等待；等候",

"eg": "CSS cursor: wait shows hourglass or watch.\nPlease wait for further instructions.\nThe wait for the results was nerve-wracking."

},

"help": {

"ph": "/help/",

"zh": "帮助；援助",

"eg": "CSS cursor: help shows question mark.\nCan you help me with this problem?\nThe help documentation is very detailed."

},

"move": {

"ph": "/muːv/",

"zh": "移动；搬动",

"eg": "CSS cursor: move shows cross with arrows.\nWe need to move the furniture.\nThe company will move to a new location."

},

"grab": {

"ph": "/ɡræb/",

"zh": "抓取；夺取",

"eg": "CSS cursor: grab shows open hand for dragging.\nHe tried to grab the opportunity.\nThe child wanted to grab the toy."

},

"grabbing": {

"ph": "/ˈɡræbɪŋ/",

"zh": "抓取中",

"eg": "CSS cursor: grabbing shows closed hand during drag.\nShe was grabbing her bag when the phone rang.\nThe grabbing cursor indicates active dragging."

},

"zoom-in": {

"ph": "/zuːm ɪn/",

"zh": "放大",

"eg": "CSS cursor: zoom-in shows magnifying glass with plus.\nZoom in to see more details.\nThe map allows you to zoom in on specific areas."

},

"zoom-out": {

"ph": "/zuːm aʊt/",

"zh": "缩小",

"eg": "CSS cursor: zoom-out shows magnifying glass with minus.\nZoom out to see the whole picture.\nYou need to zoom out to understand the context."

},

"resize": {

"ph": "/ˌriːˈsaɪz/",

"zh": "调整大小",

"eg": "CSS has various resize cursors like n-resize, e-resize.\nYou can resize the image to fit the space.\nThe window allows users to resize it as needed."

},

"scroll": {

"ph": "/skrəʊl/",

"zh": "滚动；卷轴",

"eg": "CSS cursor: scroll shows arrows for scrolling.\nUse the mouse wheel to scroll down.\nAncient scrolls were found in the cave."

},

"auto": {

"ph": "/ˈɔːtəʊ/",

"zh": "自动的",

"eg": "CSS cursor: auto lets browser decide cursor.\nThe car has an automatic transmission.\nThe system will switch to auto mode."

},

"overflow": {

"ph": "/ˈəʊvəfləʊ/",

"zh": "溢出；超出",

"eg": "CSS overflow property handles overflowing content.\nThe river overflowed after heavy rain.\nThe overflow of information can be overwhelming."

},

"visible": {

"ph": "/ˈvɪzəbl/",

"zh": "可见的；明显的",

"eg": "CSS overflow: visible shows content outside box.\nThe stars are visible on clear nights.\nThere was visible improvement in her health."

},

"hidden": {

"ph": "/ˈhɪdn/",

"zh": "隐藏的",

"eg": "CSS overflow: hidden clips overflowing content.\nThe hidden treasure was finally found.\nShe kept her feelings hidden from others."

},

"scroll": {

"ph": "/skrəʊl/",

"zh": "滚动",

"eg": "CSS overflow: scroll always shows scrollbars.\nScroll to the bottom of the page.\nAncient scrolls contain valuable historical information."

},

"auto": {

"ph": "/ˈɔːtəʊ/",

"zh": "自动",

"eg": "CSS overflow: auto shows scrollbars only when needed.\nThe doors open automatically.\nSet the overflow to auto for flexible containers."

},

"clip": {

"ph": "/klɪp/",

"zh": "裁剪；夹子",

"eg": "CSS overflow: clip strictly clips content.\nUse the clip to hold the papers together.\nVideo editors often clip unnecessary scenes."

},

"text-overflow": {

"ph": "/tekst ˈəʊvəfləʊ/",

"zh": "文本溢出",

"eg": "CSS text-overflow handles overflowing text.\nThe text-overflow property adds ellipsis for long text.\nSet text-overflow to ellipsis for truncated text."

},

"ellipsis": {

"ph": "/ɪˈlɪpsɪs/",

"zh": "省略号",

"eg": "CSS text-overflow: ellipsis shows ... for overflow.\nUse ellipsis to indicate omitted text.\nThe quote ended with an ellipsis to show continuation."

},

"white-space": {

"ph": "/waɪt speɪs/",

"zh": "空白处理",

"eg": "CSS white-space controls how whitespace is handled.\nThe white-space property preserves spaces and line breaks.\nUse white-space: nowrap to prevent text wrapping."

},

"normal": {

"ph": "/ˈnɔːml/",

"zh": "正常；普通",

"eg": "CSS white-space: normal collapses whitespace.\nThis is a normal situation.\nHer temperature returned to normal."

},

"nowrap": {

"ph": "/ˈnəʊræp/",

"zh": "不换行",

"eg": "CSS white-space: nowrap prevents line breaks.\nThe text continues in a single line with nowrap.\nUse nowrap for text that should stay on one line."

},

"pre": {

"ph": "/priː/",

"zh": "预格式化",

"eg": "CSS white-space: pre preserves whitespace exactly.\nThe <pre> tag is used for preformatted text.\nPre-formatted text maintains original spacing."

},

"pre-wrap": {

"ph": "/priː ræp/",

"zh": "预格式化换行",

"eg": "CSS white-space: pre-wrap preserves spaces but wraps.\nPre-wrap is useful for code snippets.\nThe text wraps naturally while preserving spaces."

},

"pre-line": {

"ph": "/priː laɪn/",

"zh": "预格式化行",

"eg": "CSS white-space: pre-line collapses spaces but preserves lines.\nPre-line is good for poetry or addresses.\nLine breaks are preserved but spaces collapse."

},

"word-wrap": {

"ph": "/wɜːd ræp/",

"zh": "单词换行",

"eg": "CSS word-wrap (overflow-wrap) breaks long words.\nWord-wrap prevents horizontal scrolling.\nLong URLs benefit from word-wrap: break-word."

},

"break-word": {

"ph": "/breɪk wɜːd/",

"zh": "单词中断",

"eg": "CSS word-wrap: break-word breaks long words.\nBreak-word ensures text stays within container.\nUse break-word for better text flow."

},

"word-break": {

"ph": "/wɜːd breɪk/",

"zh": "单词断行",

"eg": "CSS word-break controls line breaking rules.\nWord-break: break-all breaks between any characters.\nDifferent languages require different word-break rules."

},

"keep-all": {

"ph": "/kiːp ɔːl/",

"zh": "保持所有",

"eg": "CSS word-break: keep-all prevents breaking in CJK text.\nKeep-all is useful for Chinese/Japanese/Korean text.\nThis setting keeps words together when possible."

},

"break-all": {

"ph": "/breɪk ɔːl/",

"zh": "全部中断",

"eg": "CSS word-break: break-all allows breaking between any characters.\nBreak-all is aggressive but prevents overflow.\nUse break-all for narrow containers with long words."

},

"hyphens": {

"ph": "/ˈhaɪfənz/",

"zh": "连字符",

"eg": "CSS hyphens controls automatic hyphenation.\nHyphens: auto adds hyphens at line breaks.\nProper hyphenation improves text readability."

},

"auto": {

"ph": "/ˈɔːtəʊ/",

"zh": "自动",

"eg": "CSS hyphens: auto automatically hyphenates words.\nThe car features automatic transmission.\nAuto-hyphenation creates better text flow."

},

"manual": {

"ph": "/ˈmænjuəl/",

"zh": "手动",

"eg": "CSS hyphens: manual only hyphenates at ­ or ­.\nManual control allows precise hyphenation.\nThe camera has both auto and manual modes."

},

"none": {

"ph": "/nʌn/",

"zh": "无",

"eg": "CSS hyphens: none disables hyphenation.\nNone of the options were suitable.\nSet hyphens to none for code or URLs."

},

"writing-mode": {

"ph": "/ˈraɪtɪŋ məʊd/",

"zh": "书写模式",

"eg": "CSS writing-mode controls text direction.\nWriting-mode: vertical-rl writes top-to-bottom.\nDifferent languages use different writing modes."

},

"horizontal": {

"ph": "/ˌhɒrɪˈzɒntl/",

"zh": "水平的",

"eg": "CSS writing-mode: horizontal-tb is default.\nThe line should be perfectly horizontal.\nHorizontal layout is common in Western languages."

},

"vertical": {

"ph": "/ˈvɜːtɪkl/",

"zh": "垂直的",

"eg": "CSS writing-mode: vertical-* for vertical text.\nThe vertical line divides the page.\nVertical text is traditional in East Asian languages."

},

"text-orientation": {

"ph": "/tekst ˌɔːriənˈteɪʃn/",

"zh": "文本方向",

"eg": "CSS text-orientation controls glyph orientation.\nText-orientation: mixed allows both upright and sideways.\nThis property works with vertical writing modes."

},

"mixed": {

"ph": "/mɪkst/",

"zh": "混合的",

"eg": "CSS text-orientation: mixed rotates text 90°.\nThe audience had mixed reactions to the performance.\nMixed orientation is common in vertical text."

},

"upright": {

"ph": "/ˈʌpraɪt/",

"zh": "直立的",

"eg": "CSS text-orientation: upright keeps text upright.\nStand upright with your shoulders back.\nUpright text is easier to read in vertical layout."

},

"sideways": {

"ph": "/ˈsaɪdweɪz/",

"zh": "侧向的",

"eg": "CSS text-orientation: sideways rotates text 90°.\nShe glanced sideways at her friend.\nSideways text is compact but harder to read."

},

"text-combine-upright": {

"ph": "/tekst kəmˈbaɪn ˈʌpraɪt/",

"zh": "文本合字直立",

"eg": "CSS text-combine-upright combines characters.\nThis property is used for dates in vertical text.\nText-combine-upright: all combines 2-4 characters."

},

"all": {

"ph": "/ɔːl/",

"zh": "所有",

"eg": "CSS text-combine-upright: all combines all digits.\nAll students must attend the meeting.\nThe 'all' value works for numbers and dates."

},

"digits": {

"ph": "/ˈdɪdʒɪts/",

"zh": "数字",

"eg": "CSS text-combine-upright: digits 4 combines 4 digits.\nPhone numbers contain seven digits.\nArabic digits are used worldwide."

},

"text-align": {

"ph": "/tekst əˈlaɪn/",

"zh": "文本对齐",

"eg": "CSS text-align controls horizontal alignment.\nText-align: center centers the text.\nProper text alignment improves readability."

},

"left": {

"ph": "/left/",

"zh": "左对齐",

"eg": "CSS text-align: left aligns text to the left.\nTurn left at the next intersection.\nLeft alignment is common in Western languages."

},

"right": {

"ph": "/raɪt/",

"zh": "右对齐",

"eg": "CSS text-align: right aligns text to the right.\nThe answer is right in front of you.\nRight alignment is used for numbers and dates."

},

"center": {

"ph": "/ˈsentə/",

"zh": "居中",

"eg": "CSS text-align: center centers text horizontally.\nThe town center is very busy.\nCenter alignment is good for titles and headings."

},

"justify": {

"ph": "/ˈdʒʌstɪfaɪ/",

"zh": "两端对齐",

"eg": "CSS text-align: justify spreads text to fill space.\nCan you justify your decision?\nJustified text creates clean edges but may have uneven spacing."

},

"text-justify": {

"ph": "/tekst ˈdʒʌstɪfaɪ/",

"zh": "文本两端对齐",

"eg": "CSS text-justify controls justification method.\nText-justify: auto lets browser choose method.\nThis property refines text justification quality."

},

"auto": {

"ph": "/ˈɔːtəʊ/",

"zh": "自动",

"eg": "CSS text-justify: auto uses browser default.\nThe system will adjust automatically.\nAuto justification balances speed and quality."

},

"inter-word": {

"ph": "/ˈɪntə wɜːd/",

"zh": "单词间",

"eg": "CSS text-justify: inter-word adjusts word spacing.\nInter-word spacing affects readability.\nThis method works well for most languages."

},

"inter-character": {

"ph": "/ˈɪntə ˈkærɪktə/",

"zh": "字符间",

"eg": "CSS text-justify: inter-character adjusts character spacing.\nInter-character spacing is used in CJK text.\nThis method spreads space between characters."

},

"text-indent": {

"ph": "/tekst ɪnˈdent/",

"zh": "文本缩进",

"eg": "CSS text-indent sets first line indentation.\nText-indent: 2em indents the first line.\nParagraph indentation improves text structure."

},

"letter-spacing": {

"ph": "/ˈletə ˈspeɪsɪŋ/",

"zh": "字母间距",

"eg": "CSS letter-spacing controls space between letters.\nLetter-spacing: 0.1em increases spacing slightly.\nTight letter-spacing can make text hard to read."

},

"word-spacing": {

"ph": "/wɜːd ˈspeɪsɪŋ/",

"zh": "单词间距",

"eg": "CSS word-spacing controls space between words.\nWord-spacing: 0.2em increases word spacing.\nProper word spacing improves reading comfort."

},

"line-height": {

"ph": "/laɪn haɪt/",

"zh": "行高",

"eg": "CSS line-height sets distance between lines.\nLine-height: 1.5 is good for readability.\nAdequate line-height prevents text crowding."

},

"text-transform": {

"ph": "/tekst trænsˈfɔːm/",

"zh": "文本转换",

"eg": "CSS text-transform changes text capitalization.\nText-transform: uppercase makes text ALL CAPS.\nThis property maintains original text in source."

},

"uppercase": {

"ph": "/ˈʌpəkeɪs/",

"zh": "大写",

"eg": "CSS text-transform: uppercase converts to capital letters.\nUPPERCASE TEXT OFTEN INDICATES SHOUTING.\nUse uppercase for acronyms and abbreviations."

},

"lowercase": {

"ph": "/ˈləʊəkeɪs/",

"zh": "小写",

"eg": "CSS text-transform: lowercase converts to small letters.\nlowercase text is easier to read in paragraphs.\nMost body text should be in lowercase."

},

"capitalize": {

"ph": "/ˈkæpɪtəlaɪz/",

"zh": "首字母大写",

"eg": "CSS text-transform: capitalize capitalizes first letter of each word.\nThis Text Becomes Capitalized.\nCapitalize is useful for titles and headings."

},

"text-decoration": {

"ph": "/tekst ˌdekəˈreɪʃn/",

"zh": "文本装饰",

"eg": "CSS text-decoration adds lines to text.\nText-decoration: underline adds underline.\nText decoration should be used sparingly."

},

"underline": {

"ph": "/ˈʌndəlaɪn/",

"zh": "下划线",

"eg": "CSS text-decoration: underline adds line below.\nUnderline important terms for emphasis.\nLinks are traditionally underlined."

},

"overline": {

"ph": "/ˈəʊvəlaɪn/",

"zh": "上划线",

"eg": "CSS text-decoration: overline adds line above.\nOverline is rarely used in Western typography.\nThis decoration can be useful for special effects."

},

"line-through": {

"ph": "/laɪn θruː/",

"zh": "删除线",

"eg": "CSS text-decoration: line-through adds strike-through.\nLine-through indicates deleted or discounted text.\nSale prices often use line-through for original price."

},

"text-decoration-line": {

"ph": "/tekst ˌdekəˈreɪʃn laɪn/",

"zh": "文本装饰线",

"eg": "CSS text-decoration-line specifies which lines to use.\nYou can combine underline and overline.\nThis property offers more control than text-decoration."

},

"text-decoration-color": {

"ph": "/tekst ˌdekəˈreɪʃn ˈkʌlə/",

"zh": "文本装饰颜色",

"eg": "CSS text-decoration-color sets decoration color.\nMake the underline a different color.\nThis allows decorative lines to stand out."

},

"text-decoration-style": {

"ph": "/tekst ˌdekəˈreɪʃn staɪl/",

"zh": "文本装饰样式",

"eg": "CSS text-decoration-style sets line style.\nText-decoration-style: wavy creates wavy lines.\nDifferent styles can convey different meanings."

},

"solid": {

"ph": "/ˈsɒlɪd/",

"zh": "实线",

"eg": "CSS text-decoration-style: solid creates solid line.\nThe table is made of solid wood.\nSolid lines are the most common decoration."

},

"double": {

"ph": "/ˈdʌbl/",

"zh": "双线",

"eg": "CSS text-decoration-style: double creates double line.\nShe ordered a double espresso.\nDouble lines are thicker and more prominent."

},

"dotted": {

"ph": "/ˈdɒtɪd/",

"zh": "点线",

"eg": "CSS text-decoration-style: dotted creates dotted line.\nSign on the dotted line.\nDotted lines suggest uncertainty or draft status."

},

"dashed": {

"ph": "/dæʃt/",

"zh": "虚线",

"eg": "CSS text-decoration-style: dashed creates dashed line.\nThe border is marked with a dashed line.\nDashed lines often indicate optional or temporary elements."

},

"wavy": {

"ph": "/ˈweɪvi/",

"zh": "波浪线",

"eg": "CSS text-decoration-style: wavy creates wavy line.\nThe flag moved in wavy patterns.\nWavy lines can indicate emphasis or importance."

},

"text-decoration-thickness": {

"ph": "/tekst ˌdekəˈreɪʃn ˈθɪknəs/",

"zh": "文本装饰粗细",

"eg": "CSS text-decoration-thickness controls line thickness.\nMake the underline thicker for emphasis.\nThis property works with all decoration styles."

},

"text-shadow": {

"ph": "/tekst ˈʃædəʊ/",

"zh": "文本阴影",

"eg": "CSS text-shadow adds shadow to text.\nText-shadow: 2px 2px 4px black adds shadow.\nSubtle text shadows improve readability on busy backgrounds."

},

"font": {

"ph": "/fɒnt/",

"zh": "字体",

"eg": "CSS font property sets font-related styles.\nChoose a readable font for your website.\nThe document uses a standard font."

},

"font-family": {

"ph": "/fɒnt ˈfæməli/",

"zh": "字体系列",

"eg": "CSS font-family specifies font family.\nFont-family: Arial, sans-serif uses Arial first.\nAlways specify fallback fonts in font stacks."

},

"serif": {

"ph": "/ˈserɪf/",

"zh": "衬线字体",

"eg": "Serif fonts have small strokes at ends.\nTimes New Roman is a common serif font.\nSerif fonts are often used in print."

},

"sans-serif": {

"ph": "/ˌsæn ˈserɪf/",

"zh": "无衬线字体",

"eg": "Sans-serif fonts lack decorative strokes.\nArial and Helvetica are sans-serif fonts.\nSans-serif fonts are good for web display."

},

"monospace": {

"ph": "/ˈmɒnəspeɪs/",

"zh": "等宽字体",

"eg": "Monospace fonts have equal character width.\nCourier New is a common monospace font.\nMonospace is essential for code and tables."

},

"cursive": {

"ph": "/ˈkɜːsɪv/",

"zh": "手写体",

"eg": "Cursive fonts mimic handwriting.\nBrush Script is a cursive font.\nCursive fonts add personal touch but reduce readability."

},
"fantasy": {

"ph": "/ˈfæntəsi/",

"zh": "幻想字体；装饰字体",

"eg": "Fantasy fonts are decorative and stylized.\nPapyrus is a common fantasy font.\nUse fantasy fonts sparingly for special headings."

},

"font-size": {

"ph": "/fɒnt saɪz/",

"zh": "字体大小",

"eg": "CSS font-size sets the text size.\nFont-size: 16px is standard for body text.\nUse relative units like em or rem for scalability."

},

"px": {

"ph": "/ˈpɪksəl/",

"zh": "像素",

"eg": "CSS px unit represents screen pixels.\nSet the width to 200px.\nPixel values are fixed and not scalable."

},

"em": {

"ph": "/em/",

"zh": "相对长度单位（相对于当前字体尺寸）",

"eg": "CSS em is relative to current font size.\n1em equals the current font size.\nUsing em allows for proportional scaling."

},

"rem": {

"ph": "/rem/",

"zh": "相对长度单位（相对于根元素字体尺寸）",

"eg": "CSS rem is relative to root element font size.\n1rem equals the root font size.\nRem units provide consistent scaling across the document."

},

"font-weight": {

"ph": "/fɒnt weɪt/",

"zh": "字体粗细",

"eg": "CSS font-weight sets text thickness.\nFont-weight: bold makes text thicker.\nCommon values include normal, bold, 100-900."

},

"normal": {

"ph": "/ˈnɔːrml/",

"zh": "正常；标准",

"eg": "CSS font-weight: normal is standard thickness.\nThe patient's temperature is normal.\nNormal weight is typically 400."

},

"bold": {

"ph": "/bəʊld/",

"zh": "粗体",

"eg": "CSS font-weight: bold makes text thicker.\nUse bold for important headings.\nBold weight is typically 700."

},

"lighter": {

"ph": "/ˈlaɪtər/",

"zh": "更细",

"eg": "CSS font-weight: lighter reduces thickness.\nThis font is lighter than the regular version.\nLighter is relative to the parent element's weight."

},

"bolder": {

"ph": "/ˈbəʊldər/",

"zh": "更粗",

"eg": "CSS font-weight: bolder increases thickness.\nThe headline should be bolder.\nBolder is relative to the parent element's weight."

},

"font-style": {

"ph": "/fɒnt staɪl/",

"zh": "字体样式",

"eg": "CSS font-style sets text style.\nFont-style: italic creates slanted text.\nCommon styles include normal, italic, oblique."

},

"italic": {

"ph": "/ɪˈtælɪk/",

"zh": "斜体",

"eg": "CSS font-style: italic uses italic version.\nItalic text emphasizes important points.\nTrue italic fonts have specially designed characters."

},

"oblique": {

"ph": "/əˈbliːk/",

"zh": "倾斜体",

"eg": "CSS font-style: oblique slants normal font.\nOblique is a simulated italic style.\nUse oblique when true italic is not available."

},

"font-variant": {

"ph": "/fɒnt ˈveəriənt/",

"zh": "字体变体",

"eg": "CSS font-variant controls typographic variants.\nFont-variant: small-caps uses small capitals.\nThis property affects character presentation."

},

"small-caps": {

"ph": "/smɔːl kæps/",

"zh": "小型大写字母",

"eg": "CSS font-variant: small-caps uses smaller capitals.\nSMALL-CAPS ARE OFTEN USED FOR ACRONYMS.\nSmall caps maintain consistent letter height."

},

"line-height": {

"ph": "/laɪn haɪt/",

"zh": "行高",

"eg": "CSS line-height sets space between lines.\nLine-height: 1.5 improves readability.\nAdequate line-height prevents text crowding."

},

"font-stretch": {

"ph": "/fɒnt stretʃ/",

"zh": "字体拉伸",

"eg": "CSS font-stretch controls width variation.\nFont-stretch: condensed makes text narrower.\nThis property requires a supporting font family."

},

"condensed": {

"ph": "/kənˈdenst/",

"zh": "紧缩",

"eg": "CSS font-stretch: condensed narrows characters.\nCondensed fonts save horizontal space.\nUse condensed for fitting more text in limited width."

},

"expanded": {

"ph": "/ɪkˈspændɪd/",

"zh": "扩展",

"eg": "CSS font-stretch: expanded widens characters.\nExpanded fonts create a more open feel.\nUse expanded for headings or decorative text."

},

"font-kerning": {

"ph": "/fɒnt ˈkɜːrnɪŋ/",

"zh": "字体字距调整",

"eg": "CSS font-kerning controls space between characters.\nFont-kerning: normal enables automatic adjustment.\nProper kerning improves text appearance."

},

"normal": {

"ph": "/ˈnɔːrml/",

"zh": "正常",

"eg": "CSS font-kerning: normal uses default kerning.\nThe situation has returned to normal.\nNormal kerning provides optimal character spacing."

},

"none": {

"ph": "/nʌn/",

"zh": "无",

"eg": "CSS font-kerning: none disables kerning.\nNone of the options were suitable.\nDisabling kerning may cause uneven spacing."

},

"font-feature-settings": {

"ph": "/fɒnt ˈfiːtʃər ˈsetɪŋz/",

"zh": "字体特性设置",

"eg": "CSS font-feature-settings controls OpenType features.\nEnable ligatures with 'liga' feature.\nThis property provides advanced typographic control."

},

"ligatures": {

"ph": "/ˈlɪɡətʃərz/",

"zh": "连字",

"eg": "CSS enables ligatures for better typography.\nLigatures combine characters like 'fi' into single glyph.\nCommon ligatures improve text flow and appearance."

},

"font-variant-ligatures": {

"ph": "/fɒnt ˈveəriənt ˈlɪɡətʃərz/",

"zh": "字体变体连字",

"eg": "CSS font-variant-ligatures controls ligature usage.\nFont-variant-ligatures: common enables standard ligatures.\nThis property offers granular control over ligatures."

},

"common-ligatures": {

"ph": "/ˈkɒmən ˈlɪɡətʃərz/",

"zh": "普通连字",

"eg": "CSS enables common ligatures for better readability.\nCommon ligatures include fi, fl, ff combinations.\nThese ligatures are standard in professional typography."

},

"discretionary-ligatures": {

"ph": "/dɪˈskreʃəneri ˈlɪɡətʃərz/",

"zh": "自由连字",

"eg": "CSS discretionary-ligatures are decorative ligatures.\nDiscretionary ligatures include st, ct combinations.\nUse these for more elegant, formal typography."

},

"historical-ligatures": {

"ph": "/hɪˈstɒrɪkəl ˈlɪɡətʃərz/",

"zh": "历史连字",

"eg": "CSS historical-ligatures use archaic character combinations.\nHistorical ligatures recreate ancient typographic styles.\nThese are useful for historical documents or displays."

},

"font-variant-caps": {

"ph": "/fɒnt ˈveəriənt kæps/",

"zh": "字体变体大写",

"eg": "CSS font-variant-caps controls capital letter variants.\nFont-variant-caps: small-caps uses small capitals.\nThis property handles various capitalization styles."

},

"all-small-caps": {

"ph": "/ɔːl smɔːl kæps/",

"zh": "全部小型大写",

"eg": "CSS all-small-caps converts all letters to small caps.\nALL TEXT APPEARS IN SMALL CAPITALS.\nThis style maintains consistent letter height throughout."

},

"petite-caps": {

"ph": "/pəˈtiːt kæps/",

"zh": "特小型大写",

"eg": "CSS petite-caps uses even smaller capital letters.\nPetite caps are smaller than small caps.\nThis variant is rare but available in some font families."

},

"all-petite-caps": {

"ph": "/ɔːl pəˈtiːt kæps/",

"zh": "全部特小型大写",

"eg": "CSS all-petite-caps converts all to petite caps.\nALL TEXT USES PETITE CAPITAL LETTERS.\nThis creates a very compact, uniform appearance."

},

"unicase": {

"ph": "/ˈjuːnɪkeɪs/",

"zh": "单一大小写",

"eg": "CSS unicase mixes capital and small letter forms.\nUnicase creates a unique blended appearance.\nThis style is available in some modern font families."

},

"titling-caps": {

"ph": "/ˈtaɪtlɪŋ kæps/",

"zh": "标题大写",

"eg": "CSS titling-caps uses special capitals for headings.\nTitling caps are designed specifically for titles.\nThese variants often have more elegant proportions."

},

"font-variant-numeric": {

"ph": "/fɒnt ˈveəriənt njuːˈmerɪk/",

"zh": "字体变体数字",

"eg": "CSS font-variant-numeric controls number formatting.\nThis property handles numeric typographic variants.\nUse it for proper number presentation in text."

},

"lining-nums": {

"ph": "/ˈlaɪnɪŋ nʌmz/",

"zh": "等高数字",

"eg": "CSS lining-nums use numbers with consistent height.\n1234567890 - Lining numbers align with capital letters.\nThis is the default numbering style in most fonts."

},

"oldstyle-nums": {

"ph": "/ˈəʊldstaɪl nʌmz/",

"zh": "旧样式数字",

"eg": "CSS oldstyle-nums use numbers with varying heights.\nOldstyle numbers blend better with lowercase text.\nThis style is common in traditional typography."

},

"proportional-nums": {

"ph": "/prəˈpɔːrʃənəl nʌmz/",

"zh": "比例数字",

"eg": "CSS proportional-nums use varying number widths.\nProportional numbers have different character widths.\nThis creates more natural-looking numeric text."

},

"tabular-nums": {

"ph": "/ˈtæbjələr nʌmz/",

"zh": "表格数字",

"eg": "CSS tabular-nums use fixed-width numbers.\nTabular numbers align vertically in tables.\nEssential for financial data and statistics."

},

"slashed-zero": {

"ph": "/slæʃt ˈzɪərəʊ/",

"zh": "带斜杠零",

"eg": "CSS slashed-zero differentiates zero from capital O.\nSlashed zero: 0 helps distinguish from letter O.\nImportant for technical documents and code."

},

"ordinal": {

"ph": "/ˈɔːrdɪnəl/",

"zh": "序数",

"eg": "CSS ordinal formats numbers as ordinals.\n1st, 2nd, 3rd - Ordinal numbers indicate position.\nAutomatically adds the correct ordinal indicators."

},

"fractions": {

"ph": "/ˈfrækʃənz/",

"zh": "分数",

"eg": "CSS fractions display numeric fractions properly.\n½ ¼ ¾ - Fractions appear as single glyphs.\nThis creates more professional mathematical text."

},

"font-variant-alternates": {

"ph": "/fɒnt ˈveəriənt ˈɔːltərneɪts/",

"zh": "字体变体替代",

"eg": "CSS font-variant-alternates accesses alternate glyphs.\nThis property enables stylistic alternates in fonts.\nUse it for decorative or specialized typography."

},

"stylistic": {

"ph": "/staɪˈlɪstɪk/",

"zh": "风格化",

"eg": "CSS stylistic alternates offer design variations.\nStylistic sets provide different character designs.\nUse these for creative typographic expressions."

},

"historical-forms": {

"ph": "/hɪˈstɒrɪkəl fɔːrmz/",

"zh": "历史形式",

"eg": "CSS historical-forms use archaic character shapes.\nHistorical forms recreate ancient writing styles.\nPerfect for historical documents or vintage designs."

},

"styleset": {

"ph": "/ˈstaɪlset/",

"zh": "样式集",

"eg": "CSS styleset applies coordinated character sets.\nStyleset provides consistent alternative glyph groups.\nUse for maintaining design coherence throughout text."

},

"character-variant": {

"ph": "/ˈkærɪktər ˈveəriənt/",

"zh": "字符变体",

"eg": "CSS character-variant changes specific character forms.\nCharacter variants offer individual glyph alternatives.\nUse for fine-tuning particular character appearances."

},

"swash": {

"ph": "/swɒʃ/",

"zh": "花饰",

"eg": "CSS swash adds decorative flourishes to characters.\nSwash characters have elegant extended strokes.\nCommonly used for initial capitals in formal text."

},

"ornaments": {

"ph": "/ˈɔːnəmənts/",

"zh": "装饰符号",

"eg": "CSS ornaments access decorative typographic elements.\nOrnaments include fleurons, borders, and decorative glyphs.\nUse for adding visual interest to text layouts."

},

"annotation": {

"ph": "/ˌænəˈteɪʃən/",

"zh": "注解符号",

"eg": "CSS annotation provides enclosed numbers and symbols.\nAnnotation forms include circled numbers and parenthesized forms.\nUse for technical references or numbered lists."

},

"font-variant-east-asian": {

"ph": "/fɒnt ˈveəriənt iːst ˈeɪʒən/",

"zh": "字体变体东亚文字",

"eg": "CSS font-variant-east-asian controls East Asian text.\nThis property handles CJK (Chinese, Japanese, Korean) typography.\nEssential for proper East Asian text rendering."

},

"jis78": {

"ph": "/dʒiː aɪ es ˈsevənti eɪt/",

"zh": "日本工业标准78",

"eg": "CSS JIS78 uses older Japanese character forms.\nJIS78 follows the 1978 Japanese Industrial Standard.\nThis variant maintains traditional character shapes."

},

"jis83": {

"ph": "/dʒiː aɪ es ˈeɪti θriː/",

"zh": "日本工业标准83",

"eg": "CSS JIS83 uses newer Japanese character forms.\nJIS83 follows the 1983 Japanese Industrial Standard.\nThis variant uses modern, simplified character shapes."

},

"jis90": {

"ph": "/dʒiː aɪ es ˈnaɪnti/",

"zh": "日本工业标准90",

"eg": "CSS JIS90 uses contemporary Japanese forms.\nJIS90 follows the 1990 Japanese Industrial Standard.\nThis represents the current standard character set."

},

"jis04": {

"ph": "/dʒiː aɪ es ˈzɪərəʊ fɔː/",

"zh": "日本工业标准04",

"eg": "CSS JIS04 uses the latest Japanese standard.\nJIS04 follows the 2004 Japanese Industrial Standard.\nThis includes the most recent character additions."

},

"simplified": {

"ph": "/ˈsɪmplɪfaɪd/",

"zh": "简化字",

"eg": "CSS simplified uses simplified Chinese characters.\nSimplified characters have reduced stroke counts.\nThis is the standard in Mainland China."

},

"traditional": {

"ph": "/trəˈdɪʃənəl/",

"zh": "繁体字",

"eg": "CSS traditional uses traditional Chinese characters.\nTraditional characters maintain original complex forms.\nUsed in Taiwan, Hong Kong, and Macau."

},

"proportional-width": {

"ph": "/prəˈpɔːrʃənəl wɪdθ/",

"zh": "比例宽度",

"eg": "CSS proportional-width uses varying character widths.\nProportional-width text has natural spacing.\nThis is standard for most Latin-based languages."

},

"full-width": {

"ph": "/fʊl wɪdθ/",

"zh": "全角",

"eg": "CSS full-width makes all characters equal width.\nFull-width characters occupy square spaces.\nCommon in East Asian typography for alignment."

},

"ruby": {

"ph": "/ˈruːbi/",

"zh": "注音标示",

"eg": "CSS ruby handles phonetic annotations for East Asian text.\nRuby text provides pronunciation guides.\nEssential for learning materials and dictionaries."

},

"font-size-adjust": {

"ph": "/fɒnt saɪz əˈdʒʌst/",

"zh": "字体大小调整",

"eg": "CSS font-size-adjust maintains readability across fonts.\nThis property preserves x-height consistency.\nUseful for fallback font scenarios."

},

"none": {

"ph": "/nʌn/",

"zh": "无",

"eg": "CSS font-size-adjust: none disables size adjustment.\nNone of the solutions worked perfectly.\nDisabling may cause readability issues with fallback fonts."

},

"number": {

"ph": "/ˈnʌmbər/",

"zh": "数字值",

"eg": "CSS font-size-adjust uses a numeric ratio.\nThe number determines the aspect value adjustment.\nTypical values range from 0.4 to 0.6."

},

"font-synthesis": {

"ph": "/fɒnt ˈsɪnθəsɪs/",

"zh": "字体合成",

"zh": "CSS font-synthesis controls fake bold/italic generation.\nThis property prevents browser-generated styles.\nUse it to maintain typographic integrity."

},

"weight": {

"ph": "/weɪt/",

"zh": "粗细",

"eg": "CSS font-synthesis: weight controls bold synthesis.\nWeight synthesis creates artificial bold faces.\nDisable for fonts that have proper bold variants."

},

"style": {

"ph": "/staɪl/",

"zh": "样式",

"eg": "CSS font-synthesis: style controls italic synthesis.\nStyle synthesis creates artificial italic faces.\nDisable when true italic variants are available."

},

"none": {

"ph": "/nʌn/",

"zh": "无",

"eg": "CSS font-synthesis: none disables all synthesis.\nNone of the alternatives were acceptable.\nPrevents both bold and italic synthesis."

},"new": {

"ph": "/njuː/",

"zh": "新的；新鲜的",

"eg": "I bought a new car yesterday.\nShe has a new idea for the project.\nLet's start a new chapter in our lives."

},

"year": {

"ph": "/jɪər/",

"zh": "年；年份",

"eg": "Happy New Year!\nThe school year starts in September.\nShe's been working here for five years."

},

"day": {

"ph": "/deɪ/",

"zh": "天；日子；白天",

"eg": "What day is it today?\nI'll see you in three days.\nIt's a beautiful day outside."

},

"beginning": {

"ph": "/bɪˈɡɪnɪŋ/",

"zh": "开始；开端",

"eg": "This is just the beginning of our journey.\nThe beginning of the movie was exciting.\nEvery ending is a new beginning."

},

"everything": {

"ph": "/ˈevriθɪŋ/",

"zh": "一切事物；所有事物",

"eg": "Everything is ready for the party.\nShe means everything to me.\nEverything happens for a reason."

},

"looks": {

"ph": "/lʊks/",

"zh": "看起来；显得（look的第三人称单数）",

"eg": "She looks happy today.\nThe weather looks good for our picnic.\nThis cake looks delicious."

},

"fresh": {

"ph": "/freʃ/",

"zh": "新鲜的；清新的",

"eg": "I bought some fresh vegetables from the market.\nThe air feels fresh after the rain.\nLet's start with a fresh perspective."

},

"bright": {

"ph": "/braɪt/",

"zh": "明亮的；聪明的；欢快的",

"eg": "The sun is bright today.\nShe's a bright student who learns quickly.\nThe future looks bright for our company."

},

"time": {

"ph": "/taɪm/",

"zh": "时间；次数；时代",

"eg": "What time is it now?\nI've been to Paris three times.\nThe Victorian time was interesting."

},

"december": {

"ph": "/dɪˈsembər/",

"zh": "十二月",

"eg": "December is the last month of the year.\nMy birthday is in December.\nIt snows a lot here in December."

},

"31th": {

"ph": "/ˈθɜːti fɜːst/",

"zh": "第三十一",

"eg": "Today is December 31st.\nHer office is on the 31st floor.\nThis is my 31st birthday."

},

"2025": {

"ph": "/ˈtwɛnti twɛnti faɪv/",

"zh": "2025年",

"eg": "The event will take place in 2025.\nI plan to graduate in 2025.\nBy 2025, technology will advance further."

},

"writer": {

"ph": "/ˈraɪtər/",

"zh": "作者；作家",

"eg": "She is a famous writer of children's books.\nThe writer described the scene vividly.\nI want to become a professional writer."

},

"helper": {

"ph": "/ˈhelpər/",

"zh": "助手；帮手",

"eg": "My little brother is my helper in the kitchen.\nWe need more helpers for the event.\nThe software includes a helpful helper tool."

},

"ai": {

"ph": "/ˌeɪ ˈaɪ/",

"zh": "人工智能",

"eg": "AI technology is developing rapidly.\nThe company uses AI for customer service.\nMany industries are being transformed by AI."

},

"gregorian": {

"ph": "/ɡrɪˈɡɔːriən/",

"zh": "公历的；格里高利的",

"eg": "The Gregorian calendar is used internationally.\nGregorian chant is a form of medieval music.\nMost countries follow the Gregorian calendar system."

},

"calendar": {

"ph": "/ˈkælɪndər/",

"zh": "日历；历法",

"eg": "Mark the date on your calendar.\nThe school calendar shows all the holidays.\nDifferent cultures have different calendar systems."

},

"marks": {

"ph": "/mɑːrks/",

"zh": "标志；记号（mark的第三人称单数）",

"eg": "This day marks the beginning of spring.\nThe teacher marks the attendance every day.\nThe anniversary marks fifty years of marriage."

},

"brand": {

"ph": "/brænd/",

"zh": "品牌；商标",

"eg": "This is a brand new computer.\nShe prefers certain brands of clothing.\nThe company is building a strong brand identity."

},

"people": {

"ph": "/ˈpiːpl/",

"zh": "人们；人民",

"eg": "Many people enjoy traveling.\nThe people have spoken through the election.\nThere were about fifty people at the party."

},

"over": {

"ph": "/ˈəʊvər/",

"zh": "在...上方；超过；关于",

"eg": "The plane flew over the mountains.\nShe is over sixty years old.\nWe need to talk over this problem."

},

"world": {

"ph": "/wɜːrld/",

"zh": "世界；地球",

"eg": "She has traveled around the world.\nThe natural world is full of wonders.\nWorld peace is our ultimate goal."

},

"celebrate": {

"ph": "/ˈselɪbreɪt/",

"zh": "庆祝；庆贺",

"eg": "We celebrate Christmas with our family.\nThe team celebrated their victory.\nLet's celebrate your success!"

},

"harvest": {

"ph": "/ˈhɑːrvɪst/",

"zh": "收获；收割",

"eg": "Farmers celebrate the autumn harvest.\nThe harvest this year was abundant.\nThe harvest festival is a traditional celebration."

},

"past": {

"ph": "/pɑːst/",

"zh": "过去的；从前",

"eg": "In the past, people traveled by horse.\nLet's learn from past mistakes.\nThe past year has been challenging."

},

"welcome": {

"ph": "/ˈwelkəm/",

"zh": "欢迎；迎接",

"eg": "We welcome the new students.\nThe community welcomed the changes.\nShe welcomed the opportunity to learn."

},

"future": {

"ph": "/ˈfjuːtʃər/",

"zh": "未来；将来",

"eg": "We plan for the future.\nThe future looks promising.\nFuture generations will benefit from this research."

},

"hope": {

"ph": "/həʊp/",

"zh": "希望；期望",

"eg": "I hope to see you soon.\nDon't lose hope during difficult times.\nThere is hope for a better tomorrow."

},

"china": {

"ph": "/ˈtʃaɪnə/",

"zh": "中国",

"eg": "China has a long and rich history.\nThe Great Wall of China is a famous landmark.\nChinese culture is becoming increasingly popular worldwide."

},

"although": {

"ph": "/ɔːlˈðəʊ/",

"zh": "虽然；尽管",

"eg": "Although it was raining, we went for a walk.\nShe succeeded although she faced many challenges.\nAlthough he's young, he's very experienced."

},

"statutory": {

"ph": "/ˈstætʃətɔːri/",

"zh": "法定的；依照法令的",

"eg": "New Year's Day is a statutory holiday.\nThere are statutory requirements for this procedure.\nThe company follows statutory regulations."

},

"holiday": {

"ph": "/ˈhɒlədeɪ/",

"zh": "假日；节日",

"eg": "We have a three-day holiday next week.\nThe summer holiday is my favorite time of year.\nPublic holidays are usually busy for travel."

},

"traditionally": {

"ph": "/trəˈdɪʃənəli/",

"zh": "传统上；习惯上",

"eg": "Traditionally, people wear red during Chinese New Year.\nThis dish is traditionally served with rice.\nTraditionally, the eldest son inherits the property."

},

"lunar": {

"ph": "/ˈluːnər/",

"zh": "月亮的；农历的",

"eg": "The Lunar New Year is based on the moon's cycles.\nLunar eclipses are fascinating astronomical events.\nMany Asian cultures follow the lunar calendar."

},

"spring": {

"ph": "/sprɪŋ/",

"zh": "春天；春季",

"eg": "Spring is my favorite season.\nThe flowers bloom in spring.\nSpring Festival is the most important holiday in China."

},

"festival": {

"ph": "/ˈfestɪvl/",

"zh": "节日；庆典",

"eg": "The music festival attracts thousands of visitors.\nWe celebrate the Mid-Autumn Festival with mooncakes.\nThe film festival showcases international movies."

},

"valued": {

"ph": "/ˈvæljuːd/",

"zh": "受重视的；宝贵的",

"eg": "The Lunar New Year is highly valued in Chinese culture.\nHer opinion is valued by the team.\nThis is a valued tradition in our family."

},

"nevertheless": {

"ph": "/ˌnevərðəˈles/",

"zh": "然而；不过",

"eg": "It was raining; nevertheless, we decided to go hiking.\nThe task was difficult; nevertheless, she completed it.\nNevertheless, we must continue with our plans."

},

"modern": {

"ph": "/ˈmɒdən/",

"zh": "现代的；当代的",

"eg": "Modern technology has changed our lives.\nShe prefers modern art to classical art.\nThe building has a modern design."

},

"still": {

"ph": "/stɪl/",

"zh": "仍然；还",

"eg": "I still remember my first day at school.\nShe's still working on the project.\nDo you still live in the same house?"

},

"various": {

"ph": "/ˈveəriəs/",

"zh": "各种各样的；不同的",

"eg": "There are various ways to solve this problem.\nThe store sells various types of coffee.\nWe discussed various topics during the meeting."

},

"ways": {

"ph": "/weɪz/",

"zh": "方式；方法（way的复数）",

"eg": "There are many ways to learn a language.\nTraditional ways of farming are disappearing.\nWe need to find better ways to communicate."

},

"having": {

"ph": "/ˈhævɪŋ/",

"zh": "拥有；进行（have的现在分词）",

"eg": "We're having dinner at a restaurant tonight.\nShe's having difficulty with the assignment.\nThey're having a meeting right now."

},

"meals": {

"ph": "/miːlz/",

"zh": "餐；饭（meal的复数）",

"eg": "We usually have three meals a day.\nFamily meals are important for bonding.\nThe restaurant serves delicious meals."

},

"family": {

"ph": "/ˈfæməli/",

"zh": "家庭；家人",

"eg": "My family lives in Shanghai.\nFamily values are important in our culture.\nWe're having a family reunion next month."

},

"friends": {

"ph": "/frendz/",

"zh": "朋友（friend的复数）",

"eg": "I'm going out with friends tonight.\nClose friends support each other.\nShe has friends from all over the world."

},

"watching": {

"ph": "/ˈwɒtʃɪŋ/",

"zh": "观看；注视（watch的现在分词）",

"eg": "We're watching a movie together.\nShe enjoys watching birds in the garden.\nThe children are watching cartoons."

},

"eve": {

"ph": "/iːv/",

"zh": "前夕；前夜",

"eg": "New Year's Eve is celebrated on December 31st.\nWe exchange gifts on Christmas Eve.\nThe party will be held on the eve of the conference."

},

"galas": {

"ph": "/ˈɡɑːləz/",

"zh": "庆典；盛会（gala的复数）",

"eg": "TV stations broadcast New Year's Eve galas.\nThe charity gala raised money for a good cause.\nThe school's annual gala is a major event."

},

"making": {

"ph": "/ˈmeɪkɪŋ/",

"zh": "制作；制定（make的现在分词）",

"eg": "She's making a cake for the party.\nThe company is making progress on the project.\nWe're making plans for our vacation."

},

"resolutions": {

"ph": "/ˌrezəˈluːʃənz/",

"zh": "决心；决议（resolution的复数）",

"eg": "Many people make New Year's resolutions.\nThe committee passed several resolutions.\nKeeping resolutions requires determination."

},

"sending": {

"ph": "/ˈsendɪŋ/",

"zh": "发送；寄送（send的现在分词）",

"eg": "I'm sending you an email with the details.\nShe's sending gifts to her relatives.\nWe're sending our best wishes for the New Year."

},

"blessings": {

"ph": "/ˈblesɪŋz/",

"zh": "祝福；保佑（blessing的复数）",

"eg": "People exchange blessings during holidays.\nCount your blessings every day.\nThe priest gave his blessings to the congregation."

},

"social": {

"ph": "/ˈsəʊʃl/",

"zh": "社会的；社交的",

"eg": "Social media has changed how we communicate.\nShe has good social skills.\nWe need to address social issues in our community."

},

"media": {

"ph": "/ˈmiːdiə/",

"zh": "媒体；媒介",

"eg": "The news media reported the event.\nSocial media platforms are very popular.\nThe company uses various media for advertising."

},

"cities": {

"ph": "/ˈsɪtiz/",

"zh": "城市（city的复数）",

"eg": "Major cities around the world celebrate New Year.\nMany cities have their own unique traditions.\nBig cities offer more job opportunities."

},

"often": {

"ph": "/ˈɒfn/",

"zh": "经常；常常",

"eg": "I often go swimming on weekends.\nShe often works late at the office.\nWe often meet for coffee after work."

},

"hold": {

"ph": "/həʊld/",

"zh": "举行；持有",

"eg": "The city will hold a fireworks display.\nShe holds a master's degree in engineering.\nPlease hold the line while I transfer your call."

},

"light": {

"ph": "/laɪt/",

"zh": "光；灯；轻的",

"eg": "The light show was spectacular.\nTurn on the light, it's getting dark.\nThe package is light and easy to carry."

},

"shows": {

"ph": "/ʃəʊz/",

"zh": "表演；显示（show的复数）",

"eg": "The light shows attract many tourists.\nTV shows are popular entertainment.\nThe art shows feature local artists."

},

"countdown": {

"ph": "/ˈkaʊntdaʊn/",

"zh": "倒计时",

"eg": "The New Year countdown begins at 11:59 PM.\nWe're in the final countdown to the launch.\nThe countdown event was broadcast live."

},

"events": {

"ph": "/ɪˈvents/",

"zh": "事件；活动（event的复数）",

"eg": "The city organizes many events for New Year.\nSports events bring people together.\nThe conference includes several special events."

},

"filled": {

"ph": "/fɪld/",

"zh": "充满的；填满的",

"eg": "The atmosphere was filled with excitement.\nThe room was filled with laughter.\nHer heart was filled with gratitude."

},

"with": {

"ph": "/wɪð/",

"zh": "和...一起；用；带有",

"eg": "I went to the cinema with my friends.\nShe wrote the letter with a pen.\nHe is a man with great courage."

},

"joyful": {

"ph": "/ˈdʒɔɪfl/",

"zh": "快乐的；令人高兴的",

"eg": "The celebration created a joyful atmosphere.\nWe heard joyful news this morning.\nThe children's laughter was joyful to hear."

},

"atmosphere": {

"ph": "/ˈætməsfɪər/",

"zh": "气氛；大气",

"eg": "The party had a wonderful atmosphere.\nEarth's atmosphere protects us from radiation.\nThe restaurant creates a romantic atmosphere."

},

"for": {

"ph": "/fɔːr/",

"zh": "为了；因为；对于",

"eg": "This gift is for you.\nShe's been waiting for an hour.\nFor many people, holidays are family time."

},

"many": {

"ph": "/ˈmeni/",

"zh": "许多",

"eg": "Many people enjoy traveling abroad.\nThere are many reasons to learn English.\nHow many books have you read this year?"

},

"especially": {

"ph": "/ɪˈspeʃəli/",

"zh": "尤其；特别",

"eg": "I love all fruits, especially apples.\nThe course is designed especially for beginners.\nShe's talented, especially in mathematics."

},

"students": {

"ph": "/ˈstjuːdnts/",

"zh": "学生（复数）",

"eg": "The students are studying for the exam.\nSome students live on campus.\nThese students are from different countries."

},

"means": {

"ph": "/miːnz/",

"zh": "意味着；意思是（mean的第三人称单数）",

"eg": "The holiday means a break from school.\nWhat does this word mean?\nSuccess means different things to different people."

},

"short": {

"ph": "/ʃɔːt/",

"zh": "短的；短暂的",

"eg": "We have a short holiday next week.\nShe has short hair.\nThe meeting was shorter than expected."

},

"good": {

"ph": "/ɡʊd/",

"zh": "好的；优秀的",

"eg": "This is a good opportunity to relax.\nShe's a good friend who always helps me.\nThe weather is good for outdoor activities."

},

"opportunity": {

"ph": "/ˌɒpəˈtjuːnəti/",

"zh": "机会；时机",

"eg": "This is a good opportunity to learn.\nShe seized the opportunity to study abroad.\nDon't miss this opportunity to improve your skills."

},

"relax": {

"ph": "/rɪˈlæks/",

"zh": "放松；休息",

"eg": "It's important to relax after work.\nI like to relax by reading a book.\nThe vacation helped me relax and recharge."

},

"recharge": {

"ph": "/ˌriːˈtʃɑːdʒ/",

"zh": "充电；恢复精力",

"eg": "The holiday allows students to recharge.\nI need to recharge my phone battery.\nTaking breaks helps recharge your energy."

},

"after": {

"ph": "/ˈɑːftər/",

"zh": "在...之后",

"eg": "We'll meet after the meeting.\nShe arrived after everyone had left.\nAfter working hard, it's important to rest."

},

"busy": {

"ph": "/ˈbɪzi/",

"zh": "忙碌的；繁忙的",

"eg": "The students have been busy with exams.\nThe city center is always busy.\nShe manages a busy schedule effectively."

},

"study": {

"ph": "/ˈstʌdi/",

"zh": "学习；研究",

"eg": "She needs to focus on her study.\nThe study of languages is fascinating.\nHe's involved in a research study."

},

"work": {

"ph": "/wɜːk/",

"zh": "工作；劳动",

"eg": "She goes to work by subway every day.\nThe project requires hard work.\nTeamwork is essential for success."

},

"adding": {

"ph": "/ˈædɪŋ/",

"zh": "添加；增加（add的现在分词）",

"eg": "I'm adding more information to the report.\nThe chef is adding spices to the dish.\nAdding examples makes the explanation clearer."

},

"festivities": {

"ph": "/feˈstɪvɪtiz/",

"zh": "庆祝活动；欢庆",

"eg": "The New Year festivities lasted until dawn.\nStreet festivities included music and dancing.\nEveryone joined in the festive festivities."

},

"typically": {

"ph": "/ˈtɪpɪkli/",

"zh": "通常；典型地",

"eg": "Families typically gather for reunion dinners.\nThe weather is typically cold in December.\nShe typically arrives at work by 8 AM."

},

"include": {

"ph": "/ɪnˈkluːd/",

"zh": "包括；包含",

"eg": "Celebrations include fireworks and parties.\nThe price includes breakfast and dinner.\nDoes the tour include museum visits?"

},

"fireworks": {

"ph": "/ˈfaɪəwɜːks/",

"zh": "烟花；焰火",

"eg": "The fireworks display was spectacular.\nWe watched fireworks from the rooftop.\nFireworks lit up the night sky."

},

"parties": {

"ph": "/ˈpɑːrtiz/",

"zh": "聚会；派对（party的复数）",

"eg": "New Year parties are popular worldwide.\nWe attended several holiday parties.\nThe office party was well organized."

},

"gatherings": {

"ph": "/ˈɡæðərɪŋz/",

"zh": "集会；聚会",

"eg": "Family gatherings are common during holidays.\nThe community gatherings strengthen bonds.\nWe enjoy casual gatherings with friends."

},

"special": {

"ph": "/ˈspeʃl/",

"zh": "特别的；特殊的",

"eg": "New Year is a special occasion for everyone.\nShe prepared a special meal for guests.\nThis day holds special meaning for us."

},

"traditions": {

"ph": "/trəˈdɪʃənz/",

"zh": "传统；惯例（tradition的复数）",

"eg": "Different cultures have unique traditions.\nFamily traditions are passed down generations.\nWe respect local traditions when traveling."

},

"cultural": {

"ph": "/ˈkʌltʃərəl/",

"zh": "文化的；与文化有关的",

"eg": "The event has deep cultural significance.\nCultural exchange promotes understanding.\nWe appreciate cultural diversity."

},

"significance": {

"ph": "/sɪɡˈnɪfɪkəns/",

"zh": "重要性；意义",

"eg": "The day has great cultural significance.\nWhat is the significance of this symbol?\nThe discovery has scientific significance."

},

"reflect": {

"ph": "/rɪˈflekt/",

"zh": "反思；反映",

"eg": "People reflect on the past year.\nThe report reflects current trends.\nWater reflects light beautifully."

},

"accomplishments": {

"ph": "/əˈkʌmplɪʃmənts/",

"zh": "成就；成绩（accomplishment的复数）",

"eg": "We celebrate our accomplishments.\nHer academic accomplishments are impressive.\nThe team's accomplishments were recognized."

},

"challenges": {

"ph": "/ˈtʃælɪndʒɪz/",

"zh": "挑战；困难（challenge的复数）",

"eg": "We overcame many challenges this year.\nThe project presented several challenges.\nShe enjoys intellectual challenges."

},

"experienced": {

"ph": "/ɪkˈspɪəriənst/",

"zh": "经历；体验（experience的过去式）",

"eg": "We experienced both joy and sorrow.\nShe experienced different cultures.\nThe company experienced rapid growth."

},

"throughout": {

"ph": "/θruːˈaʊt/",

"zh": "贯穿；在整个期间",

"eg": "Celebrations occur throughout the world.\nThe quality remained high throughout.\nWe maintained communication throughout."

},

"previous": {

"ph": "/ˈpriːviəs/",

"zh": "先前的；以前的",

"eg": "We learned from previous mistakes.\nThe previous year was challenging.\nRefer to the previous chapter."

},

"months": {

"ph": "/mʌnθs/",

"zh": "月份（month的复数）",

"eg": "The past twelve months were eventful.\nSummer months are usually hot.\nThe project lasted several months."

},

"simultaneously": {

"ph": "/ˌsɪmlˈteɪniəsli/",

"zh": "同时地",

"eg": "People celebrate simultaneously worldwide.\nThe events occurred simultaneously.\nWe need to handle multiple tasks simultaneously."

},

"different": {

"ph": "/ˈdɪfrənt/",

"zh": "不同的；各种的",

"eg": "Different time zones mean celebrations at different times.\nPeople have different opinions.\nThe store offers different payment options."

},

"time": {

"ph": "/taɪm/",

"zh": "时间；时刻",

"eg": "Different time zones affect celebration times.\nWhat time does the event start?\nTime management is important."

},

"zones": {

"ph": "/zəʊnz/",

"zh": "区域；地带（zone的复数）",

"eg": "The Earth has 24 time zones.\nThe city has commercial and residential zones.\nSafety zones were established."

},

"meaning": {

"ph": "/ˈmiːnɪŋ/",

"zh": "意义；含义",

"eg": "The holiday has deep personal meaning.\nWhat is the meaning of this word?\nShe found new meaning in her work."

},

"varies": {

"ph": "/ˈveəriz/",

"zh": "变化；不同（vary的第三人称单数）",

"eg": "The celebration style varies by region.\nQuality varies between products.\nThe temperature varies throughout the day."

},

"depending": {

"ph": "/dɪˈpendɪŋ/",

"zh": "取决于；依赖（depend的现在分词）",

"eg": "Traditions vary depending on the culture.\nThe price depends on the quality.\nWe'll proceed depending on the weather."

},

"local": {

"ph": "/ˈləʊkl/",

"zh": "当地的；本地的",

"eg": "Each region has local customs.\nSupport local businesses.\nThe local community is very friendly."

},

"customs": {

"ph": "/ˈkʌstəmz/",

"zh": "习俗；风俗",

"eg": "Respect local customs when traveling.\nTraditional customs are preserved.\nThe customs vary from country to country."

},

"practices": {

"ph": "/ˈpræktɪsɪz/",

"zh": "实践；做法（practice的复数）",

"eg": "Cultural practices are diverse.\nBest practices should be followed.\nThe company improved its business practices."

},

"however": {

"ph": "/haʊˈevər/",

"zh": "然而；可是",

"eg": "However, some traditions are universal.\nThe plan was good; however, it failed.\nHowever difficult, we must try."

},

"universal": {

"ph": "/ˌjuːnɪˈvɜːsl/",

"zh": "普遍的；全世界的",

"eg": "The desire for happiness is universal.\nSome values are universal across cultures.\nThe theme has universal appeal."

},

"themes": {

"ph": "/θiːmz/",

"zh": "主题；主旨（theme的复数）",

"eg": "Common themes include renewal and hope.\nThe conference had several themes.\nThe book explores various themes."

},

"renewal": {

"ph": "/rɪˈnjuːəl/",

"zh": "更新；恢复",

"eg": "The new year symbolizes renewal.\nUrban renewal improved the city.\nThe contract is up for renewal."

},

"optimism": {

"ph": "/ˈɒptɪmɪzəm/",

"zh": "乐观；乐观主义",

"eg": "People approach the future with optimism.\nHer optimism is contagious.\nThe report shows economic optimism."

},

"common": {

"ph": "/ˈkɒmən/",

"zh": "常见的；共同的",

"eg": "These are common New Year traditions.\nWe have common interests.\nThe problem is quite common."

},

"across": {

"ph": "/əˈkrɒs/",

"zh": "跨越；穿过",

"eg": "Traditions are similar across cultures.\nThe bridge stretches across the river.\nThe news spread across the country."

},

"cultures": {

"ph": "/ˈkʌltʃəz/",

"zh": "文化（culture的复数）",

"eg": "Different cultures celebrate differently.\nWe should appreciate diverse cultures.\nThe museum exhibits ancient cultures."

},

"regardless": {

"ph": "/rɪˈɡɑːdləs/",

"zh": "不管；不顾",

"eg": "People celebrate regardless of differences.\nWe continue regardless of difficulties.\nThe event proceeds regardless of weather."

},

"differences": {

"ph": "/ˈdɪfrənsɪz/",

"zh": "差异；不同（difference的复数）",

"eg": "Cultural differences enrich celebrations.\nWe respect our differences.\nThe differences are quite noticeable."

},

"backgrounds": {

"ph": "/ˈbækɡraʊndz/",

"zh": "背景；出身（background的复数）",

"eg": "People from various backgrounds celebrate.\nThe team has diverse backgrounds.\nOur different backgrounds create perspective."

},

"shared": {

"ph": "/ʃeəd/",

"zh": "共享的；共同的",

"eg": "There is shared excitement worldwide.\nWe have shared responsibilities.\nThe shared experience brought us closer."

},

"excitement": {

"ph": "/ɪkˈsaɪtmənt/",

"zh": "兴奋；激动",

"eg": "There's great excitement for the new year.\nThe children's excitement was palpable.\nThe game generated much excitement."

},

"anticipation": {

"ph": "/ænˌtɪsɪˈpeɪʃn/",

"zh": "期待；预期",

"eg": "There's anticipation for what's to come.\nWe waited with great anticipation.\nThe anticipation built before the announcement."

},

"upcoming": {

"ph": "/ˈʌpkʌmɪŋ/",

"zh": "即将到来的",

"eg": "People make plans for the upcoming year.\nThe upcoming event is highly anticipated.\nCheck the upcoming schedule."

},

"twelve": {

"ph": "/twelv/",

"zh": "十二",

"eg": "The clock strikes twelve at midnight.\nThere are twelve months in a year.\nShe has twelve students in her class."

},

"strikes": {

"ph": "/straɪks/",

"zh": "敲响；打击（strike的第三人称单数）",

"eg": "The clock strikes midnight.\nLightning strikes during the storm.\nThe worker strikes for better conditions."

},

"midnight": {

"ph": "/ˈmɪdnaɪt/",

"zh": "午夜；半夜",

"eg": "Celebrations peak at midnight.\nWe stayed up until midnight.\nThe deadline is midnight tonight."

},

"moment": {

"ph": "/ˈməʊmənt/",

"zh": "时刻；瞬间",

"eg": "It's a moment of celebration and reflection.\nWait a moment, please.\nThat was a defining moment."

},

"transition": {

"ph": "/trænˈzɪʃn/",

"zh": "过渡；转变",

"eg": "The new year represents a transition.\nThe transition was smooth.\nWe're in transition to new systems."

},

"old": {

"ph": "/əʊld/",

"zh": "旧的；老的",

"eg": "We say goodbye to the old year.\nThe old building was renovated.\nShe's old enough to understand."

},

"new": {

"ph": "/njuː/",

"zh": "新的",

"eg": "We welcome the new year.\nShe bought a new car.\nThe new policy takes effect tomorrow."

},

"symbolic": {

"ph": "/sɪmˈbɒlɪk/",

"zh": "象征性的；象征的",

"eg": "The celebration is highly symbolic.\nThe gesture was symbolic of peace.\nThe color has symbolic meaning."

},

"gestures": {

"ph": "/ˈdʒestʃəz/",

"zh": "姿态；手势（gesture的复数）",

"eg": "People exchange symbolic gestures.\nHis gestures were friendly.\nThe peace gesture was appreciated."

},

"such": {

"ph": "/sʌtʃ/",

"zh": "这样的；如此的",

"eg": "There are traditions such as first-footing.\nSuch opportunities are rare.\nI've never seen such beauty."

},

"first-footing": {

"ph": "/ˈfɜːrst ˈfʊtɪŋ/",

"zh": "第一个访客（苏格兰传统）",

"eg": "First-footing involves the first visitor.\nThe first-footer brings symbolic gifts.\nThis tradition is popular in Scotland."

},

"involves": {

"ph": "/ɪnˈvɒlvz/",

"zh": "涉及；包含（involve的第三人称单数）",

"eg": "The tradition involves specific rituals.\nThe job involves frequent travel.\nThe process involves several steps."

},

"first": {

"ph": "/fɜːrst/",

"zh": "第一；最初的",

"eg": "The first visitor brings good luck.\nThis is my first time here.\nShe won first prize."

},

"visitor": {

"ph": "/ˈvɪzɪtər/",

"zh": "访客；参观者",

"eg": "The first visitor should be a dark-haired man.\nThe museum had many visitors.\nWe're expecting visitors today."

},

"entering": {

"ph": "/ˈentərɪŋ/",

"zh": "进入（enter的现在分词）",

"eg": "The person entering the home first.\nShe was entering the building.\nEntering the competition requires registration."

},

"home": {

"ph": "/həʊm/",

"zh": "家；住宅",

"eg": "After midnight brings symbolic gifts.\nWelcome home!\nThe nursing home provides care."

},

"after": {

"ph": "/ˈɑːftər/",

"zh": "在...之后",

"eg": "The first visitor after midnight.\nWe'll meet after the meeting.\nAfter working hard, rest is important."

},

"brings": {

"ph": "/brɪŋz/",

"zh": "带来；引起（bring的第三人称单数）",

"eg": "The visitor brings symbolic items.\nShe brings happiness wherever she goes.\nThe news brings hope."

},

"symbolic": {

"ph": "/sɪmˈbɒlɪk/",

"zh": "象征性的",

"eg": "They bring symbolic gifts like coal.\nThe handshake was symbolic.\nThe event has symbolic importance."

},

"items": {

"ph": "/ˈaɪtəmz/",

"zh": "物品；项目（item的复数）",

"eg": "Traditional items include bread and salt.\nThe list contains ten items.\nStore the items properly."

},

"coal": {

"ph": "/kəʊl/",

"zh": "煤；煤炭",

"eg": "Coal symbolizes warmth and energy.\nThe factory uses coal for power.\nCoal mining is dangerous work."

},

"bread": {

"ph": "/bred/",

"zh": "面包；食物",

"eg": "Bread represents prosperity and food.\nShe bakes fresh bread daily.\nWe need bread for the sandwiches."

},

"salt": {

"ph": "/sɔːlt/",

"zh": "盐；食盐",

"eg": "Salt symbolizes flavor and preservation.\nAdd salt to taste.\nThe sea salt is very pure."

},

"represent": {

"ph": "/ˌreprɪˈzent/",

"zh": "代表；象征",

"eg": "These items represent different blessings.\nThe flag represents our country.\nShe will represent our school."

},

"prosperity": {

"ph": "/prɒˈsperəti/",

"zh": "繁荣；成功",

"eg": "Bread represents prosperity.\nEconomic prosperity benefits everyone.\nWe wish you prosperity and health."

},

"abundance": {

"gh": "/əˈbʌndəns/",

"zh": "丰富；充裕",

"eg": "Salt represents abundance.\nThe region has an abundance of resources.\nWe're grateful for the abundance."

},

"while": {

"ph": "/waɪl/",

"zh": "虽然；当...的时候",

"eg": "While traditions vary, the spirit is similar.\nShe read while waiting.\nWhile I agree, I have concerns."

},

"spirit": {

"ph": "/ˈspɪrɪt/",

"zh": "精神；灵魂",

"eg": "The spirit of celebration is universal.\nShe has a kind spirit.\nTeam spirit is important for success."

},

"similar": {

"ph": "/ˈsɪmɪlər/",

"zh": "相似的；类似的",

"eg": "The celebratory spirit is similar worldwide.\nWe have similar interests.\nThe two designs are quite similar."

},

"emphasizes": {

"ph": "/ˈemfəsaɪzɪz/",

"zh": "强调；着重（emphasize的第三人称单数）",

"eg": "The holiday emphasizes new beginnings.\nThe teacher emphasizes importance of practice.\nThe report emphasizes key findings."

},

"beginnings": {

"ph": "/bɪˈɡɪnɪŋz/",

"zh": "开始；开端（beginning的复数）",

"eg": "New Year represents new beginnings.\nThe beginnings were difficult.\nWe celebrate new beginnings."

},

"fresh": {

"ph": "/freʃ/",

"zh": "新鲜的；新的",

"eg": "It's a chance for fresh starts.\nI need fresh air.\nShe brought fresh ideas."

},

"starts": {

"ph": "/stɑːrts/",

"zh": "开始；启动（start的复数）",

"eg": "People make fresh starts.\nThe car has quick starts.\nNew business starts are increasing."

},

"positive": {

"ph": "/ˈpɒzətɪv/",

"zh": "积极的；肯定的",

"eg": "There's positive energy everywhere.\nShe maintains a positive attitude.\nThe test results were positive."

},

"energy": {

"ph": "/ˈenədʒi/",

"zh": "能量；精力",

"eg": "Positive energy fills the air.\nShe has boundless energy.\nRenewable energy is important."

},

"everywhere": {

"ph": "/ˈevriweər/",

"zh": "到处；处处",

"eg": "Celebrations are happening everywhere.\nWe looked everywhere for the keys.\nTechnology is everywhere today."

},

"sense": {

"ph": "/sens/",

"zh": "感觉；意识",

"eg": "There's a sense of unity globally.\nShe has a good sense of humor.\nThe decision makes sense."

},

"unity": {

"ph": "/ˈjuːnəti/",

"zh": "团结；统一",

"eg": "The celebration promotes global unity.\nNational unity is important.\nThe team showed great unity."

},

"globally": {

"ph": "/ˈɡləʊbəli/",

"zh": "全球地；全世界地",

"eg": "People connect globally during celebrations.\nThe company operates globally.\nThe issue affects us globally."

},

"connects": {

"ph": "/kəˈnekts/",

"zh": "连接；联系（connect的第三人称单数）",

"eg": "The holiday connects people across borders.\nThe bridge connects two cities.\nThe internet connects us all."

},

"borders": {

"ph": "/ˈbɔːdəz/",

"zh": "边界；边境（border的复数）",

"eg": "Celebrations transcend national borders.\nThe country has secure borders.\nThe garden has flower borders."

},

"reminding": {

"ph": "/rɪˈmaɪndɪŋ/",

"zh": "提醒；使想起（remind的现在分词）",

"eg": "The occasion reminds us of our shared humanity.\nShe keeps reminding me about the meeting.\nThe photo reminds me of our vacation."

},

"humanity": {

"ph": "/hjuːˈmænəti/",

"zh": "人类；人性",

"eg": "We celebrate our shared humanity.\nThe disaster affected all humanity.\nShe works for the benefit of humanity."

},

"collective": {

"ph": "/kəˈlektɪv/",

"zh": "集体的；共同的",

"eg": "There's collective hope for better times.\nWe made a collective decision.\nThe collective effort brought success."

},

"better": {

"ph": "/ˈbetər/",

"zh": "更好的",

"eg": "People hope for better times ahead.\nThis solution is better.\nShe's getting better at French."

},

"times": {

"ph": "/taɪmz/",

"zh": "时期；时代（time的复数）",

"eg": "We hope for better times.\nAncient times were different.\nThe New York Times is a famous newspaper."

},

"ahead": {

"ph": "/əˈhed/",

"zh": "向前；在前面",

"eg": "We look forward to the year ahead.\nThe road ahead is clear.\nPlan ahead for best results."

},

"making": {

"ph": "/ˈmeɪkɪŋ/",

"zh": "制作；制定（make的现在分词）",

"eg": "People focus on making improvements.\nShe's making dinner.\nDecision-making requires careful thought."

},

"improvements": {

"ph": "/ɪmˈpruːvmənts/",

"zh": "改进；改善（improvement的复数）",

"eg": "Many plan personal improvements.\nThe software includes several improvements.\nHome improvements increase property value."

},

"setting": {

"ph": "/ˈsetɪŋ/",

"zh": "设定；设置（set的现在分词）",

"eg": "People enjoy setting new goals.\nShe's setting the table.\nGoal setting is important for success."

},

"goals": {

"ph": "/ɡəʊlz/",

"zh": "目标；目的（goal的复数）",

"eg": "New Year is perfect for setting goals.\nShe achieved her career goals.\nThe team scored three goals."

},

"whether": {

"ph": "/ˈweðər/",

"zh": "是否；不管",

"eg": "Whether big or small, goals matter.\nI wonder whether she'll come.\nWhether it rains or not, we'll go."

},

"personal": {

"ph": "/ˈpɜːsənl/",

"zh": "个人的；私人的",

"eg": "Goals can be personal or professional.\nThis is personal information.\nShe has personal reasons for leaving."

},

"professional": {

"ph": "/prəˈfeʃənl/",

"zh": "职业的；专业的",

"eg": "Many set professional development goals.\nShe maintains professional standards.\nThe conference had professional speakers."

},

"ultimately": {

"ph": "/ˈʌltɪmətli/",

"zh": "最终；最后",

"eg": "The celebration ultimately brings people together.\nUltimately, the decision is yours.\nThe plan ultimately succeeded."

},

"together": {

"ph": "/təˈɡeðər/",

"zh": "一起；共同",

"eg": "People come together to celebrate.\nWe worked together on the project.\nThe family stays together."

},

"creating": {

"ph": "/kriˈeɪtɪŋ/",

"zh": "创造；创建（create的现在分词）",

"eg": "Creating memories with loved ones.\nShe's creating a new website.\nThe artist is creating a masterpiece."

},

"memories": {

"ph": "/ˈmeməriz/",

"zh": "记忆；回忆（memory的复数）",

"eg": "We cherish these happy memories.\nThe photo brings back memories.\nChildhood memories are precious."

},

"loved": {

"ph": "/lʌvd/",

"zh": "被爱的；心爱的",

"eg": "Time spent with loved ones.\nShe's my loved grandmother.\nThe loved pet was missed."

},

"ones": {

"ph": "/wʌnz/",

"zh": "人们；一些（one的复数）",

"eg": "Being with loved ones is precious.\nThe red ones are mine.\nWhich ones do you prefer?"

},

"precious": {

"ph": "/ˈpreʃəs/",

"zh": "宝贵的；珍贵的",

"eg": "These moments are precious.\nTime is precious.\nThe necklace is very precious."

},
"gala": {

"ph": "/ˈɡɑːlə/",

"zh": "庆典；盛会",

"eg": "The New Year's Day Gala is a major event.\nWe attended a charity gala last night.\nThe school gala features performances by students."

},

"2026": {

"ph": "/ˈtwɛnti twɛnti sɪks/",

"zh": "2026年",

"eg": "The gala is scheduled for New Year's Day 2026.\nBy 2026, the project should be complete.\nShe plans to graduate in 2026."

},

"time": {

"ph": "/taɪm/",

"zh": "时间；时刻",

"eg": "The event time is from 17:30 to 19:30.\nWhat time does the movie start?\nTime flies when you're having fun."

},

"dec": {

"ph": "/dɪˈsembər/",

"zh": "十二月（December的缩写）",

"eg": "Dec 31st is New Year's Eve.\nThe conference is in early Dec.\nWe usually decorate the house in Dec."

},

"31": {

"ph": "/ˈθɜːti wʌn/",

"zh": "三十一",

"eg": "December 31st is the last day of the year.\nHe lives at number 31 on this street.\nThere are 31 days in January."

},

"2025": {

"ph": "/ˈtwɛnti twɛnti faɪv/",

"zh": "2025年",

"eg": "The gala happens on Dec 31, 2025.\nThe World Expo will be held in 2025.\nBy 2025, we aim to reduce carbon emissions by 20%."

},

"17:30": {

"ph": "/ˌsevnˈtiːn ˈθɜːti/",

"zh": "下午五点半",

"eg": "The opening is at 17:30 sharp.\nMy flight departs at 17:30.\nLet's meet at 17:30 outside the cinema."

},

"19:30": {

"ph": "/ˌnaɪnˈtiːn ˈθɜːti/",

"zh": "晚上七点半",

"eg": "The gala ends at 19:30.\nThe dinner reservation is for 19:30.\nThe news starts at 19:30 every evening."

},

"opening": {

"ph": "/ˈəʊpnɪŋ/",

"zh": "开幕式；开始",

"eg": "The opening ceremony will be grand.\nThe store's opening hours are 9 to 5.\nHer opening remarks were very inspiring."

},

"at": {

"ph": "/æt/",

"zh": "在（时间或地点）",

"eg": "The show starts at 17:30.\nLet's meet at the station.\nShe's good at playing the piano."

},

"song": {

"ph": "/sɒŋ/",

"zh": "歌曲；歌唱",

"eg": "The first song is called 《给 某某》.\nShe sang a beautiful song.\nDo you know the lyrics to this song?"

},

"1": {

"ph": "/wʌn/",

"zh": "一；第一",

"eg": "Song 1 will be performed first.\nShe won first place in the competition.\nI have one sister and two brothers."

},

"给": {

"ph": "/ɡěi/",

"zh": "给；给予",

"eg": "《给 某某》means 'To Someone'.\nPlease give this book to him.\nShe gave a present to her friend."

},

"某某": {

"ph": "/mǒu mǒu/",

"zh": "某某；某人",

"eg": "《给 某某》is a popular song.\nMr./Ms. So-and-so is used for anonymity.\nThe letter was addressed to '某某同学'."

},

"2": {

"ph": "/tuː/",

"zh": "二；第二",

"eg": "Song 2 is titled 《特别 的 人》.\nThis is the second time I've been here.\nTwo of the students were absent."

},

"特别": {

"ph": "/tèbié/",

"zh": "特别；特殊",

"eg": "《特别 的 人》means 'Special Person'.\nToday is a special day.\nShe has a special talent for music."

},

"的": {

"ph": "/de/",

"zh": "的（所有格或修饰语助词）",

"eg": "A special '的' person.\nThis is my friend's book.\nThe red '的' car is mine."

},

"人": {

"ph": "/rén/",

"zh": "人；人物",

"eg": "A special person.\nShe is a kind person.\nHow many people are coming?"

},

"drama": {

"ph": "/ˈdrɑːmə/",

"zh": "戏剧；电视剧",

"eg": "Drama 3 is 《人民 的 名义》.\nShe studies drama at university.\nWe watched a historical drama on TV."

},

"3": {

"ph": "/θriː/",

"zh": "三；第三",

"eg": "Drama 3 is the third performance.\nI've read the first three chapters.\nThe meeting starts at three o'clock."

},

"人民": {

"ph": "/rénmín/",

"zh": "人民；民众",

"eg": "《人民 的 名义》means 'In the Name of the People'.\nThe government serves the people.\nPeople's needs should come first."

},

"名义": {

"ph": "/míngyì/",

"zh": "名义；名分",

"eg": "In the name of the people.\nHe attended the meeting in his official capacity.\nThe fund was set up in her name."

},

"game": {

"ph": "/ɡeɪm/",

"zh": "游戏；比赛",

"eg": "Game 1 is called 接龙 画画.\nWe played a fun game last night.\nThe Olympic Games are held every four years."

},

"接龙": {

"ph": "/jiēlóng/",

"zh": "接龙（一种游戏）",

"eg": "接龙 is a chain game often played with words or drawings.\nLet's play a word chain game.\nThe drawing chain game was hilarious."

},

"画画": {

"ph": "/huàhuà/",

"zh": "画画；绘画",

"eg": "画画 means drawing or painting.\nChildren love to draw.\nShe is good at painting landscapes."

},

"4": {

"ph": "/fɔː/",

"zh": "四；第四",

"eg": "Song 4 is titled 《花海》.\nThere are four seasons in a year.\nShe lives on the fourth floor."

},

"花海": {

"ph": "/huāhǎi/",

"zh": "花海",

"eg": "《花海》means 'Sea of Flowers'.\nThe tulip field looked like a sea of flowers.\nThey walked through a sea of flowers in the park."

},

"talk-show": {

"ph": "/ˈtɔːk ʃəʊ/",

"zh": "脱口秀；访谈节目",

"eg": "Talk-show 5 is a comedy skit.\nHe is a host of a famous talk-show.\nWe watched a political talk-show last night."

},

"5": {

"ph": "/faɪv/",

"zh": "五；第五",

"eg": "Talk-show 5 is the fifth item.\nI'll be back in five minutes.\nShe has five years of experience."

},

"天": {

"ph": "/tiān/",

"zh": "天；天空",

"eg": "天不怕地不怕 means 'fear nothing in heaven or earth'.\nThe sky is blue today.\nIt's a beautiful day."

},

"不": {

"ph": "/bù/",

"zh": "不；没有",

"eg": "I am not afraid.\nShe does not like coffee.\nThis is not my book."

},

"怕": {

"ph": "/pà/",

"zh": "害怕；担心",

"eg": "I'm not afraid of ghosts.\nChildren are often afraid of the dark.\nDon't be afraid to ask questions."

},

"地": {

"ph": "/dì/",

"zh": "地；地面",

"eg": "Earth; ground.\nThe book fell on the ground.\nWe sat on the grass."

},

"就": {

"ph": "/jiù/",

"zh": "就；正是",

"eg": "I'm only afraid of one thing.\nThat's exactly what I mean.\nHe left just now."

},

"老师": {

"ph": "/lǎoshī/",

"zh": "老师；教师",

"eg": "The teacher called my dad.\nShe is my math teacher.\nTeachers deserve our respect."

},

"找": {

"ph": "/zhǎo/",

"zh": "找；寻找",

"eg": "The teacher is looking for my dad.\nI'm looking for my keys.\nCan you help me find my phone?"

},

"我": {

"ph": "/wǒ/",

"zh": "我；我的",

"eg": "My teacher called my dad.\nThis is my book.\nI am a student."

},

"爸": {

"ph": "/bà/",

"zh": "爸爸；父亲",

"eg": "Dad; father.\nMy dad is a doctor.\nI'll ask my father for advice."

},

"2": {

"ph": "/tuː/",

"zh": "二；第二",

"eg": "Game 2 is '撕名牌'.\nThis is my second attempt.\nI have two tickets for the concert."

},

"撕": {

"ph": "/sī/",

"zh": "撕；撕开",

"eg": "To tear; to rip.\nDon't tear the paper.\nShe tore the letter into pieces."

},

"名牌": {

"ph": "/míngpái/",

"zh": "名牌；姓名牌",

"eg": "Name tag; brand name.\nEveryone wore a name tag at the meeting.\nThis is a famous brand."

},

"mini-play": {

"ph": "/ˈmɪni pleɪ/",

"zh": "短剧；小品",

"eg": "Mini-play 6 is 《总裁 看病》.\nThe students performed a funny mini-play.\nWe wrote a mini-play for the English class."

},

"6": {

"ph": "/sɪks/",

"zh": "六；第六",

"eg": "Mini-play 6 is the sixth performance.\nI have six apples.\nThe meeting is on the sixth of June."

},

"总裁": {

"ph": "/zǒngcái/",

"zh": "总裁；总经理",

"eg": "President; CEO.\nThe company president will give a speech.\nShe was promoted to CEO."

},

"看病": {

"ph": "/kànbìng/",

"zh": "看病；就诊",

"eg": "To see a doctor.\nI need to see a doctor for my cough.\nThe clinic is crowded with patients."

},

"finale": {

"ph": "/fɪˈnɑːli/",

"zh": "终场；压轴戏",

"eg": "The finale is song 《Happy New Year》.\nThe fireworks were the finale of the celebration.\nThe concert ended with a spectacular finale."

},

"7": {

"ph": "/ˈsevən/",

"zh": "七；第七",

"eg": "Finale 7 is the last performance.\nThere are seven days in a week.\nShe is in the seventh grade."

},

"happy": {

"ph": "/ˈhæpi/",

"zh": "快乐的；幸福的",

"eg": "Happy New Year!\nShe has a happy family.\nI'm happy to help you."

},
"farewell": {

"ph": "/ˌfeəˈwel/",

"zh": "告别；再见",

"eg": "We bid farewell to the Year of the Snake.\nShe waved farewell to her friends.\nIt's time to say farewell to our old habits."

},

"snake": {

"ph": "/sneɪk/",

"zh": "蛇（生肖）",

"eg": "The Year of the Snake is ending.\nSome people are afraid of snakes.\nThe snake symbolizes wisdom in some cultures."

},

"welcome": {

"ph": "/ˈwelkəm/",

"zh": "欢迎；迎接",

"eg": "We welcome the Year of the Horse.\nThe community welcomed the new family.\nWelcome to our city!"

},

"horse": {

"ph": "/hɔːrs/",

"zh": "马（生肖）",

"zh": "The Year of the Horse is coming.\nHorses are beautiful and powerful animals.\nShe enjoys riding horses on weekends."

},

"january": {

"ph": "/ˈdʒænjuəri/",

"zh": "一月",

"eg": "January 1st is New Year's Day.\nIt's very cold here in January.\nWe're going on vacation in January."

},

"1st": {

"ph": "/fɜːrst/",

"zh": "第一",

"eg": "January 1st marks the new year.\nShe finished in first place.\nThis is my first time visiting Beijing."

},

"wang": {

"ph": "/wɑːŋ/",

"zh": "王（姓氏）",

"eg": "Wang Zhihong is the writer of this article.\nMr. Wang is our math teacher.\nWang is one of the most common Chinese surnames."

},

"zhihong": {

"ph": "/dʒɪˈhɒŋ/",

"zh": "志宏（人名）",

"eg": "Wang Zhihong wrote about the New Year celebration.\nZhihong is known for his writing skills.\nI met Zhihong at the school library."

},

"fu": {

"ph": "/fuː/",

"zh": "付（姓氏）",

"eg": "Fu Zixuan assisted with the writing.\nMs. Fu is our English teacher.\nThe Fu family lives next door."

},

"zixuan": {

"ph": "/ziːˈʃwɑːn/",

"zh": "子轩（人名）",

"eg": "Fu Zixuan helped prepare the article.\nZixuan is good at organizing events.\nWe worked on the project with Zixuan."

},

"bell": {

"ph": "/bel/",

"zh": "钟声；铃",

"eg": "The New Year's bell has rung.\nThe church bell rings every hour.\nThe school bell signals the end of class."

},

"has": {

"ph": "/hæz/",

"zh": "有（have的第三人称单数现在式）",

"eg": "The year has been wonderful.\nShe has a beautiful voice.\nThe company has many employees."

},

"rung": {

"ph": "/rʌŋ/",

"zh": "敲响；打电话（ring的过去分词）",

"eg": "The bell has rung for the new year.\nI've rung the doorbell three times.\nThe alarm has rung, so we must evacuate."

},

"enjoyed": {

"ph": "/ɪnˈdʒɔɪd/",

"zh": "享受；喜欢（enjoy的过去式）",

"eg": "We enjoyed the happiest year.\nThey enjoyed the concert very much.\nShe enjoyed reading the novel."

},

"happiest": {

"ph": "/ˈhæpiɪst/",

"zh": "最快乐的（happy的最高级）",

"eg": "This was our happiest year together.\nIt was the happiest moment of my life.\nChildren are often the happiest during holidays."

},

"neither": {

"ph": "/ˈnaɪðər/",

"zh": "既不；也不",

"eg": "We neither felt strange nor pressured.\nNeither of the options is suitable.\nShe neither confirmed nor denied the rumor."

},

"felt": {

"ph": "/felt/",

"zh": "感觉；觉得（feel的过去式）",

"eg": "We felt comfortable from the beginning.\nShe felt happy about the news.\nHe felt tired after the long journey."

},

"strange": {

"ph": "/streɪndʒ/",

"zh": "陌生的；奇怪的",

"eg": "We didn't feel strange in the new environment.\nThe situation seemed strange to everyone.\nIt's strange that she hasn't arrived yet."

},

"when": {

"ph": "/wen/",

"zh": "当...时；那时",

"eg": "We adapted quickly when we first came.\nCall me when you arrive.\nI remember when we first met."

},

"first": {

"ph": "/fɜːrst/",

"zh": "第一；最初",

"eg": "We weren't nervous when we first came.\nThis is my first time trying sushi.\nShe finished first in the race."

},

"came": {

"ph": "/keɪm/",

"zh": "来；来到（come的过去式）",

"eg": "We adapted quickly when we first came here.\nShe came to the party with her friends.\nThe train came late yesterday."

},

"nor": {

"ph": "/nɔːr/",

"zh": "也不；也没有",

"eg": "We had neither too much pressure nor stress.\nHe neither smokes nor drinks.\nThe movie was neither interesting nor boring."

},

"too": {

"ph": "/tuː/",

"zh": "太；也",

"eg": "We didn't have too much pressure.\nIt's too cold to go outside.\nI want to go too!"

},

"much": {

"ph": "/mʌtʃ/",

"zh": "很多；大量",

"eg": "We didn't have much schoolwork pressure.\nThere isn't much time left.\nThank you very much for your help."

},

"schoolwork": {

"ph": "/ˈskuːlwɜːrk/",

"zh": "学业；功课",

"eg": "The schoolwork pressure was manageable.\nShe always completes her schoolwork on time.\nThe schoolwork became more challenging this year."

},

"pressure": {

"ph": "/ˈpreʃər/",

"zh": "压力；压迫",

"eg": "We didn't feel much academic pressure.\nThe work pressure is quite high this month.\nShe handles pressure very well."

},

"also": {

"ph": "/ˈɔːlsoʊ/",

"zh": "也；同样",

"eg": "We also met two new teachers.\nI also enjoy reading science fiction.\nShe is also coming to the meeting."

},

"met": {

"ph": "/met/",

"zh": "遇见；见面（meet的过去式）",

"eg": "We met two excellent new teachers.\nI met her at the conference last year.\nThey met each other in college."

},

"two": {

"ph": "/tuː/",

"zh": "二；两个",

"eg": "We welcomed two new teachers this year.\nThere are two apples on the table.\nThe meeting will last two hours."

},

"teachers": {

"ph": "/ˈtiːtʃərz/",

"zh": "老师们（teacher的复数）",

"eg": "Our two new teachers are very professional.\nThe teachers at this school are excellent.\nStudents should respect their teachers."

},

"ms": {

"ph": "/mɪz/",

"zh": "女士（用于婚姻状况不明的女性）",

"eg": "Ms Yang teaches us physics.\nMs Smith is the new manager.\nYou can call me Ms Zhang."

},

"yang": {

"ph": "/jæŋ/",

"zh": "杨（姓氏）",

"eg": "Ms Yang is our physics teacher.\nThe Yang family lives nearby.\nYang is a common Chinese surname."

},

"physics": {

"ph": "/ˈfɪzɪks/",

"zh": "物理；物理学",

"eg": "Ms Yang teaches physics very clearly.\nPhysics is my favorite subject.\nWe're learning about Newton's laws in physics."

},

"cao": {

"ph": "/kaʊ/",

"zh": "曹（姓氏）",

"eg": "Ms Cao is our biology teacher.\nCao is another common Chinese surname.\nMr. Cao works in the office next door."

},

"biology": {

"ph": "/baɪˈɒlədʒi/",

"zh": "生物；生物学",

"eg": "Ms Cao makes biology interesting.\nWe're studying plant cells in biology.\nBiology helps us understand living organisms."

},

"seize": {

"ph": "/siːz/",

"zh": "抓住；把握",

"eg": "We should seize the day and study hard.\nSeize the opportunity while you can.\nThe police seized the illegal goods."

},

"important": {

"ph": "/ɪmˈpɔːrtnt/",

"zh": "重要的；重大的",

"eg": "It's important to cherish the present.\nThis is an important decision.\nWater is important for all living things."

},

"should": {

"ph": "/ʃʊd/",

"zh": "应该；应当",

"eg": "We should also look to the future.\nYou should get more rest.\nStudents should complete their homework."

},

"look": {

"ph": "/lʊk/",

"zh": "看；看起来",

"eg": "We should look forward to the future.\nLook at the beautiful sunset!\nShe looks happy today."

},

"forward": {

"ph": "/ˈfɔːrwərd/",

"zh": "向前；前进",

"eg": "We look forward to what's ahead.\nThe project is moving forward smoothly.\nPlease look forward to our next update."

},

"will": {

"ph": "/wɪl/",

"zh": "将；会",

"eg": "We will work hard together.\nShe will arrive tomorrow morning.\nThe meeting will start at 3 PM."

},

"stand": {

"ph": "/stænd/",

"zh": "站立；位于",

"eg": "We will stand side by side.\nPlease stand when the teacher enters.\nThe building stands in the city center."

},

"side": {

"ph": "/saɪd/",

"zh": "边；侧面",

"eg": "We'll stand side by side through challenges.\nWrite on both sides of the paper.\nThe hospital is on the east side of town."

},

"by": {

"ph": "/baɪ/",

"zh": "在旁边；通过",

"eg": "We'll stand side by side as a team.\nThe book was written by a famous author.\nShe passed by without noticing me."

},

"work": {

"ph": "/wɜːrk/",

"zh": "工作；学习",

"eg": "We'll work hard to achieve our goals.\nShe works as a teacher.\nTeamwork is essential for success."

},

"hard": {

"ph": "/hɑːrd/",

"zh": "努力地；困难的",

"eg": "We'll work hard together.\nShe studies very hard for exams.\nThis is a hard problem to solve."

},

"together": {

"ph": "/təˈɡeðər/",

"zh": "一起；共同",

"eg": "We'll work together as a class.\nLet's solve this problem together.\nThe family eats dinner together every night."

},

"build": {

"ph": "/bɪld/",

"zh": "建设；建造",

"eg": "We'll build a better future together.\nThey plan to build a new school.\nIt takes time to build trust."

},

"better": {

"ph": "/ˈbetər/",

"zh": "更好的",

"eg": "We aim to build a better future.\nThis solution is better than the previous one.\nShe's getting better at playing piano."

},

"finally": {

"ph": "/ˈfaɪnəli/",

"zh": "最后；最终",

"eg": "Finally, I wish you a happy new year.\nFinally, we reached an agreement.\nAfter much discussion, finally we decided."

},

"wish": {

"ph": "/wɪʃ/",

"zh": "祝愿；希望",

"eg": "I wish you a wonderful New Year.\nI wish I could speak French.\nWe wish you success in your exams."

},

"wonderful": {

"ph": "/ˈwʌndərfl/",

"zh": "精彩的；极好的",

"eg": "I wish you a wonderful celebration.\nWe had a wonderful time at the beach.\nThe weather was wonderful yesterday."

},

"best": {

"ph": "/best/",

"zh": "最好的（good的最高级）",

"eg": "I wish you all the best!\nThis is the best movie I've ever seen.\nShe did her best in the competition."

},

"three": {

"ph": "/θriː/",

"zh": "三；三个",

"eg": "Three sketches were performed.\nThere are three primary colors.\nThe meeting lasted three hours."

},

"sketches": {

"ph": "/sketʃɪz/",

"zh": "小品；短剧（sketch的复数）",

"eg": "The three sketches were very popular.\nThe comedy sketches made everyone laugh.\nStudents performed several humorous sketches."

},

"rule": {

"ph": "/ruːl/",

"zh": "统治；支配",

"eg": "The sketches ruled the stage!\nThe king ruled for fifty years.\nSafety rules must be followed."

},

"stage": {

"ph": "/steɪdʒ/",

"zh": "舞台；阶段",

"eg": "The performances dominated the stage.\nShe was nervous on stage.\nThe project is in its final stage."

},

"4th": {

"ph": "/fɔːrθ/",

"zh": "第四",

"eg": "The event was on January 4th.\nThis is the fourth time I've called.\nHer office is on the fourth floor."

},

"eve": {

"ph": "/iːv/",

"zh": "前夕；前夜",

"eg": "On the eve of New Year's Day.\nWe exchange gifts on Christmas Eve.\nThe party was held on New Year's Eve."

},

"guto": {

"ph": "/ˈɡuːtəʊ/",

"zh": "古陀（可能为学校名）",

"eg": "Guto No.1 Middle School held a party.\nGuto School has excellent facilities.\nStudents at Guto are very talented."

},

"no": {

"ph": "/nʌmbər/",

"zh": "第...号",

"eg": "Guto No.1 Middle School is well-known.\nShe lives at No. 25 Park Street.\nThis is room No. 304."

},

"middle": {

"ph": "/ˈmɪdl/",

"zh": "中等的；中间的",

"eg": "Guto No.1 Middle School is prestigious.\nShe is in middle school now.\nThe middle seat is uncomfortable."

},

"held": {

"ph": "/held/",

"zh": "举行；举办（hold的过去式）",

"eg": "The school held a wonderful party.\nWe held a meeting to discuss the issue.\nThe concert was held outdoors."

},

"christmas": {

"ph": "/ˈkrɪsməs/",

"zh": "圣诞节",

"eg": "The Christmas-New Year party was fun.\nWe celebrate Christmas with family.\nChristmas trees are decorated with lights."

},

"party": {

"ph": "/ˈpɑːrti/",

"zh": "聚会；派对",

"eg": "The New Year party was exciting.\nWe're having a birthday party next week.\nThe political party announced its candidate."

},

"class": {

"ph": "/klɑːs/",

"zh": "班级；课堂",

"eg": "Class 23's performances were outstanding.\nShe is the top student in her class.\nThe yoga class starts at 6 PM."

},

"23": {

"ph": "/ˈtwenti θriː/",

"zh": "二十三",

"eg": "Class 23 presented three sketches.\nThere are 23 students in our class.\nThe event is on the 23rd of December."

},

"eye-catching": {

"ph": "/ˈaɪ kætʃɪŋ/",

"zh": "引人注目的",

"eg": "The sketches were the most eye-catching.\nShe wore an eye-catching red dress.\nThe advertisement was very eye-catching."

},

"song": {

"ph": "/sɒŋ/",

"zh": "宋（姓氏）",

"eg": "Song Shikang performed in the first sketch.\nMr. Song is our history teacher.\nThe Song dynasty was important in Chinese history."

},

"shikang": {

"ph": "/ʃɪˈkæŋ/",

"zh": "士康（人名）",

"eg": "Song Shikang is a talented performer.\nShikang has great comedic timing.\nWe enjoyed Shikang's performance."

},

"shao": {

"ph": "/ʃaʊ/",

"zh": "邵（姓氏）",

"eg": "Shao Zhiqiang was another performer.\nShao is a common Chinese surname.\nMs. Shao teaches chemistry."

},

"zhiqiang": {

"ph": "/dʒɪˈtʃæŋ/",

"zh": "志强（人名）",

"eg": "Shao Zhiqiang acted in the anti-corruption play.\nZhiqiang is known for his acting skills.\nWe applauded Zhiqiang's performance."

},

"partners": {

"ph": "/ˈpɑːrtnərz/",

"zh": "伙伴；搭档（partner的复数）",

"eg": "They performed with their partners.\nBusiness partners should trust each other.\nDance partners need good coordination."

},

"brought": {

"ph": "/brɔːt/",

"zh": "带来；引起（bring的过去式）",

"eg": "They brought an anti-corruption story to life.\nShe brought cookies to the party.\nThe news brought happiness to everyone."

},

"anti-corruption": {

"ph": "/ˌænti kəˈrʌpʃən/",

"zh": "反腐败的",

"eg": "The play was an anti-corruption story.\nThe government launched an anti-corruption campaign.\nAnti-corruption laws are becoming stricter."

},

"story": {

"ph": "/ˈstɔːri/",

"zh": "故事；叙述",

"eg": "They performed a meaningful story.\nChildren love listening to bedtime stories.\nThe news story was widely shared."

},

"official": {

"ph": "/əˈfɪʃl/",

"zh": "官员；正式的",

"eg": "The official character kept eating peppers.\nGovernment officials attended the ceremony.\nThis is the official website."

},

"kept": {

"ph": "/kept/",

"zh": "保持；继续（keep的过去式）",

"eg": "The official kept eating red peppers.\nShe kept practicing until she improved.\nThe secret was kept for many years."

},

"eating": {

"ph": "/ˈiːtɪŋ/",

"zh": "吃（eat的现在分词）",

"eg": "The character was eating peppers comically.\nWe enjoy eating together as a family.\nHealthy eating is important for everyone."

},

"red": {

"ph": "/red/",

"zh": "红色的",

"eg": "He ate red peppers continuously.\nShe wore a beautiful red dress.\nThe red light means stop."

},

"peppers": {

"ph": "/ˈpepərz/",

"zh": "辣椒（pepper的复数）",

"eg": "The official ate spicy red peppers.\nBell peppers are rich in vitamin C.\nSome peppers are very hot."

},

"then": {

"ph": "/ðen/",

"zh": "然后；那时",

"eg": "He ate peppers, then drank water.\nWe'll have dinner, then watch a movie.\nI was younger then."

},

"drank": {

"ph": "/dræŋk/",

"zh": "喝（drink的过去式）",

"eg": "Then he drank water continuously.\nShe drank three cups of coffee.\nWe drank toast to the newlyweds."

},

"water": {

"ph": "/ˈwɔːtər/",

"zh": "水",

"eg": "He drank water to cool his mouth.\nDrink plenty of water every day.\nThe water in this lake is very clear."

},

"non-stop": {

"ph": "/nɒn stɒp/",

"zh": "不停地；不间断地",

"eg": "He drank water non-stop after eating peppers.\nThe flight was non-stop to New York.\nShe worked non-stop for eight hours."

},

"hilarious": {

"ph": "/hɪˈleəriəs/",

"zh": "极有趣的；滑稽的",

"eg": "The performance was absolutely hilarious!\nWe told hilarious stories at the party.\nThe comedian's jokes were hilarious."

},

"wang": {

"ph": "/wɑːŋ/",

"zh": "王（姓氏）",

"eg": "Wang Xiyuan performed in the second sketch.\nWang is one of the most common surnames.\nMr. Wang is our class teacher."

},

"xiyuan": {

"ph": "/ʃiːˈjuːən/",

"zh": "希媛（人名）",

"eg": "Wang Xiyuan showed great acting talent.\nXiyuan's performance was memorable.\nWe congratulated Xiyuan after the show."

},

"li": {

"ph": "/liː/",

"zh": "李（姓氏）",

"eg": "Li Cheng was another performer.\nLi is the most common Chinese surname.\nMs. Li teaches mathematics."

},

"cheng": {

"ph": "/tʃʌŋ/",

"zh": "成（人名）",

"eg": "Li Cheng acted alongside Wang Xiyuan.\nCheng has natural comedic talent.\nThe audience loved Cheng's performance."

},

"presented": {

"ph": "/prɪˈzentɪd/",

"zh": "呈现；表演（present的过去式）",

"eg": "They presented a funny school story.\nThe team presented their project well.\nShe presented the award to the winner."

},

"student": {

"ph": "/ˈstjuːdnt/",

"zh": "学生",

"eg": "A student got into trouble for using phone.\nShe is a hardworking student.\nThe university has many international students."

},

"trouble": {

"ph": "/ˈtrʌbl/",

"zh": "麻烦；困难",

"eg": "The student got into trouble with teacher.\nI'm having trouble with this computer.\nShe went to a lot of trouble to help us."

},

"using": {

"ph": "/ˈjuːzɪŋ/",

"zh": "使用（use的现在分词）",

"eg": "He got caught using his mobile phone.\nUsing public transport is eco-friendly.\nShe's using the computer right now."

},

"mobile": {

"ph": "/ˈməʊbaɪl/",

"zh": "移动的；手机的",

"eg": "Mobile phones are not allowed in class.\nShe bought a new mobile phone.\nThe mobile library visits our village monthly."

},

"phone": {

"ph": "/fəʊn/",

"zh": "电话；手机",

"eg": "He used his phone during class.\nThe phone is ringing.\nI'll call you on your mobile phone."

},

"pretended": {

"ph": "/prɪˈtendɪd/",

"zh": "假装；伪装（pretend的过去式）",

"eg": "He pretended to be his own father.\nThe children pretended to be superheroes.\nShe pretended not to see me."

},

"own": {

"ph": "/əʊn/",

"zh": "自己的；拥有",

"eg": "He pretended to be his own father.\nShe has her own business.\nI saw it with my own eyes."

},

"father": {

"ph": "/ˈfɑːðər/",

"zh": "父亲；爸爸",

"eg": "He impersonated his own father.\nMy father is a doctor.\nFather's Day is in June."

},

"fool": {

"ph": "/fuːl/",

"zh": "愚弄；欺骗",

"eg": "He tried to fool the teacher.\nDon't fool yourself about the situation.\nShe's nobody's fool."

},

"notably": {

"ph": "/ˈnəʊtəbli/",

"zh": "尤其；显著地",

"eg": "Notably, Wang Wenqiu wore a wig.\nThe team played well, notably the goalkeeper.\nSeveral changes were made, notably to the schedule."

},

"wenqiu": {

"ph": "/wɛnˈtʃuː/",

"zh": "文秋（人名）",

"eg": "Wang Wenqiu's wig was very noticeable.\nWenqiu is known for his bold acting choices.\nEveryone talked about Wenqiu's performance."

},"wore": {

"ph": "/wɔːr/",

"zh": "穿着；戴着（wear的过去式）",

"eg": "Wang Wenqiu wore a funny wig for the performance.\nShe wore a beautiful dress to the party.\nHe wore glasses to read the small print."

},

"wig": {

"ph": "/wɪɡ/",

"zh": "假发",

"eg": "The wig made the character look hilarious.\nShe bought a wig for the costume party.\nThe actor wore a wig to play the historical figure."

},

"bold": {

"ph": "/bəʊld/",

"zh": "大胆的；醒目的",

"eg": "Wearing the wig was a bold act.\nShe made a bold decision to start her own business.\nThe bold text highlights the important points."

},

"act": {

"ph": "/ækt/",

"zh": "行为；表演",

"eg": "His bold act caused a sensation.\nThe play consists of three acts.\nWe need to act quickly to solve this problem."

},

"caused": {

"ph": "/kɔːzd/",

"zh": "引起；导致（cause的过去式）",

"eg": "The performance caused great excitement.\nThe heavy rain caused flooding in the area.\nHis words caused confusion among the listeners."

},

"sensation": {

"ph": "/senˈseɪʃn/",

"zh": "轰动；感觉",

"eg": "The wig caused a sensation among the audience.\nThe new product created a sensation in the market.\nShe felt a tingling sensation in her fingers."

},

"zhu": {

"ph": "/ʒuː/",

"zh": "朱（姓氏）",

"eg": "Zhu Shihan performed in the third sketch.\nMr. Zhu is our physics teacher.\nThe Zhu family has lived here for generations."

},

"shihan": {

"ph": "/ʃɪˈhæn/",

"zh": "诗涵（人名）",

"eg": "Zhu Shihan played the businesswoman role.\nShihan is known for her expressive acting.\nWe applauded Shihan's performance enthusiastically."

},

"zhao": {

"ph": "/ʒaʊ/",

"zh": "赵（姓氏）"

},

"zirui": {

"ph": "/ziːˈruːi/",

"zh": "紫瑞（人名）"
},

"hou": {

"ph": "/hoʊ/",

"zh": "侯（姓氏）"

},

"qinren": {

"ph": "/tʃɪnˈrɛn/",

"zh": "钦壬（人名）"


},

"staged": {

"ph": "/steɪdʒd/",

"zh": "上演；举办（stage的过去式）",

"eg": "They staged 'The Businesswoman Sees a Doctor'.\nThe school staged a wonderful musical.\nThe protest was staged peacefully."

},

"businesswoman": {

"ph": "/ˈbɪznəswʊmən/",

"zh": "女商人；女企业家",

"eg": "Zhu Shihan played a businesswoman.\nShe is a successful businesswoman.\nThe businesswoman donated to charity."

},

"sees": {

"ph": "/siːz/",

"zh": "看；见面（see的第三人称单数）",

"eg": "The businesswoman sees a doctor.\nShe sees her doctor regularly.\nHe sees opportunities where others see problems."

},

"doctor": {

"ph": "/ˈdɒktər/",

"zh": "医生；博士",

"eg": "The character goes to see a doctor.\nYou should see a doctor if you're sick.\nShe became a doctor after years of study."

},

"held": {

"ph": "/held/",

"zh": "握住；举行（hold的过去式）",

"eg": "Ms. Zhu held her cheek dramatically.\nShe held the baby gently in her arms.\nThe conference was held in Beijing."

},

"cheek": {

"ph": "/tʃiːk/",

"zh": "脸颊",

"eg": "She held her cheek in pain.\nHe kissed her on the cheek.\nHer cheeks turned red with embarrassment."

},

"shouted": {

"ph": "/ˈʃaʊtɪd/",

"zh": "大喊；呼喊（shout的过去式）",

"eg": "She shouted 'Virus, leave my body!'.\nThe coach shouted instructions from the sidelines.\nThey shouted with joy when they won."

},

"virus": {

"ph": "/ˈvaɪrəs/",

"zh": "病毒",

"eg": "She shouted at the virus to leave.\nThe computer has a virus.\nScientists are studying the new virus."

},

"write": {

"ph": "/raɪt/",

"zh": "写；书写",

"eg": "She told the virus to write a number.\nPlease write your name on the paper.\nShe writes articles for the school newspaper."

},

"number": {

"ph": "/ˈnʌmbər/",

"zh": "数字；号码",

"eg": "The virus should write a number.\nWhat's your phone number?\nA large number of people attended."

},

"leave": {

"ph": "/liːv/",

"zh": "离开；留下",

"eg": "She demanded the virus leave her body.\nWhat time does the train leave?\nDon't leave your belongings unattended."

},

"body": {

"ph": "/ˈbɒdi/",

"zh": "身体；主体",

"eg": "The virus should leave her body.\nExercise is good for your body.\nThe main body of the text follows."

},

"right": {

"ph": "/raɪt/",

"zh": "正确的；右边",

"eg": "She said 'right away' meaning immediately.\nTurn right at the next intersection.\nYou're right about that."

},

"away": {

"ph": "/əˈweɪ/",

"zh": "离开；远离",

"eg": "She wanted the virus gone right away.\nThe airport is 20 miles away.\nPut your toys away when you're done."

},

"whole": {

"ph": "/həʊl/",

"zh": "整个的；全部的",

"eg": "The whole audience burst out laughing.\nShe ate the whole cake by herself.\nWe need to consider the whole situation."

},

"audience": {

"ph": "/ˈɔːdiəns/",

"zh": "观众；听众",

"eg": "The whole audience found it hilarious.\nThe audience clapped enthusiastically.\nThe TV show has a large audience."

},

"burst": {

"ph": "/bɜːrst/",

"zh": "爆发；突然发生",

"eg": "The audience burst out laughing.\nShe burst into tears when she heard the news.\nThe balloon burst with a loud pop."

},

"laughing": {

"ph": "/ˈlɑːfɪŋ/",

"zh": "笑；大笑（laugh的现在分词）",

"eg": "Everyone was laughing heartily.\nThe children were laughing while playing.\nI couldn't stop laughing at the joke."

},

"everyone": {

"ph": "/ˈevriwʌn/",

"zh": "每个人；人人",

"eg": "Everyone smiled happily after the show.\nEveryone is welcome to join the party.\nEveryone has their own opinion."

},

"smiled": {

"ph": "/smaɪld/",

"zh": "微笑（smile的过去式）",

"eg": "Everyone smiled at the wonderful performances.\nShe smiled when she saw her friend.\nThe baby smiled for the first time."

},

"happily": {

"ph": "/ˈhæpɪli/",

"zh": "快乐地；幸福地",

"eg": "The audience left happily after the show.\nThe children played happily in the park.\nThey lived happily ever after."

},

"performances": {

"ph": "/pəˈfɔːmənsɪz/",

"zh": "表演；演出（performance的复数）",

"eg": "All three performances were outstanding.\nThe dance performances were beautiful.\nWe enjoyed the musical performances."

},

"successful": {

"ph": "/səkˈsesfl/",

"zh": "成功的；圆满的",

"eg": "The New Year party was very successful.\nShe is a successful businesswoman.\nThe project was successful beyond expectations."

},

"memorable": {

"ph": "/ˈmemərəbl/",

"zh": "难忘的；值得纪念的",

"eg": "It was a memorable evening for everyone.\nThe trip was a memorable experience.\nShe gave a memorable speech."

},

"evening": {

"ph": "/ˈiːvnɪŋ/",

"zh": "晚上；傍晚",

"eg": "The celebration made for a wonderful evening.\nWe're going out this evening.\nThe evening sky was beautiful."

},

"celebration": {

"ph": "/ˌselɪˈbreɪʃn/",

"zh": "庆祝；庆典",

"eg": "The New Year celebration was joyful.\nThe birthday celebration lasted all day.\nWe're planning a celebration for the achievement."

},

"cultural": {

"ph": "/ˈkʌltʃərəl/",

"zh": "文化的；与文化有关的",

"eg": "The event had great cultural significance.\nWe should respect cultural differences.\nThe museum has many cultural artifacts."

},

"significance": {

"ph": "/sɪɡˈnɪfɪkəns/",

"zh": "重要性；意义",

"eg": "The celebration has cultural significance.\nThis discovery has great scientific significance.\nWhat is the significance of this symbol?"

},

"tradition": {

"ph": "/trəˈdɪʃn/",

"zh": "传统；惯例",

"eg": "It's a school tradition to hold this party.\nWe should respect local traditions.\nThe tradition has been passed down for generations."

},

"continued": {

"ph": "/kənˈtɪnjuːd/",

"zh": "继续；持续（continue的过去式）",

"eg": "The celebration continued until late.\nShe continued working despite being tired.\nThe rain continued all night."

},

"late": {

"ph": "/leɪt/",

"zh": "晚的；迟的",

"eg": "The party continued until late at night.\nSorry I'm late for the meeting.\nIt's getting late, we should go home."

},

"night": {

"ph": "/naɪt/",

"zh": "夜晚；晚上",

"eg": "The celebration went on into the night.\nWe stayed up all night talking.\nThe city looks beautiful at night."

},

"creating": {

"ph": "/kriˈeɪtɪŋ/",

"zh": "创造；创建（create的现在分词）",

"eg": "The event created wonderful memories.\nShe's creating a new website.\nThe artist is creating a masterpiece."

},

"memories": {

"ph": "/ˈmeməriz/",

"zh": "记忆；回忆（memory的复数）",

"eg": "The celebration created lasting memories.\nI have fond memories of my childhood.\nThe photo album holds many memories."

},

"students": {

"ph": "/ˈstjuːdnts/",

"zh": "学生们（student的复数）",

"eg": "All students participated enthusiastically.\nThe students are studying for exams.\nInternational students bring diverse perspectives."

},

"teachers": {

"ph": "/ˈtiːtʃərz/",

"zh": "老师们（teacher的复数）",

"eg": "Teachers and students celebrated together.\nThe teachers are very dedicated.\nExperienced teachers make learning enjoyable."

},

"together": {

"ph": "/təˈɡeðər/",

"zh": "一起；共同",

"eg": "Everyone celebrated together as a community.\nLet's work together on this project.\nThe family eats dinner together every day."

},

"community": {

"ph": "/kəˈmjuːnəti/",

"zh": "社区；团体",

"eg": "The school community came together.\nWe live in a friendly community.\nThe local community supports the school."

},

"strengthening": {

"ph": "/ˈstreŋθənɪŋ/",

"zh": "加强；巩固（strengthen的现在分词）",

"eg": "The event helped in strengthening bonds.\nExercise is good for strengthening muscles.\nThey're strengthening their relationship."

},

"bonds": {

"ph": "/bɒndz/",

"zh": "联系；纽带（bond的复数）",

"eg": "The celebration strengthened social bonds.\nFamily bonds are very important.\nThe experience created strong bonds between them."

},

"looking": {

"ph": "/ˈlʊkɪŋ/",

"zh": "看；期待（look的现在分词）",

"eg": "Everyone is looking forward to next year.\nShe's looking for her keys.\nI'm looking forward to the weekend."

},

"forward": {

"ph": "/ˈfɔːrwərd/",

"zh": "向前；前进",

"eg": "We look forward to future celebrations.\nThe project is moving forward.\nPlease look forward to our next event."

},

"future": {

"ph": "/ˈfjuːtʃər/",

"zh": "未来；将来",

"eg": "We anticipate more wonderful events in the future.\nThe future looks bright for our school.\nWe need to plan for the future."

},

"events": {

"ph": "/ɪˈvents/",

"zh": "事件；活动（event的复数）",

"eg": "We hope for more cultural events.\nThe school organizes many events.\nSports events bring people together."

},"more": {

"ph": "/mɔːr/",

"zh": "更多的；更大的",

"eg": "We hope to have more celebrations next year.\nI need more time to finish this project.\nWould you like more coffee?"

},

"cultural": {

"ph": "/ˈkʌltʃərəl/",

"zh": "文化的；与文化有关的",

"eg": "Cultural events help students learn about traditions.\nThe museum has many cultural exhibits.\nWe should respect cultural differences."

},

"exchange": {

"ph": "/ɪksˈtʃeɪndʒ/",

"zh": "交流；交换",

"eg": "The event promoted cultural exchange.\nWe did a student exchange with a school in Japan.\nLet's exchange phone numbers."

},

"promoted": {

"ph": "/prəˈməʊtɪd/",

"zh": "促进；提升（promote的过去式）",

"eg": "The celebration promoted school spirit.\nShe was promoted to manager last month.\nThe campaign promoted healthy eating."

},

"school": {

"ph": "/skuːl/",

"zh": "学校；学派",

"eg": "School events bring everyone together.\nShe walks to school every day.\nThe impressionist school of painting"

},

"spirit": {

"ph": "/ˈspɪrɪt/",

"zh": "精神；灵魂",

"eg": "The event showed great school spirit.\nShe has a kind and generous spirit.\nThe team played with great spirit."

},

"showed": {

"ph": "/ʃəʊd/",

"zh": "显示；表明（show的过去式）",

"eg": "The performances showed great talent.\nThe data showed significant improvement.\nShe showed me how to use the software."

},

"great": {

"ph": "/ɡreɪt/",

"zh": "伟大的；很好的",

"eg": "The students showed great creativity.\nWe had a great time at the party.\nShe has great potential as an artist."

},

"talent": {

"ph": "/ˈtælənt/",

"zh": "才能；天赋",

"eg": "The students displayed amazing talent.\nShe has a natural talent for music.\nThe company is looking for young talent."

},

"displayed": {

"ph": "/dɪˈspleɪd/",

"zh": "展示；显示（display的过去式）",

"eg": "Students displayed their acting skills.\nThe museum displayed ancient artifacts.\nShe displayed great courage in the emergency."

},

"acting": {

"ph": "/ˈæktɪŋ/",

"zh": "表演；演戏",

"eg": "Their acting skills were impressive.\nShe studied acting at drama school.\nThe acting in the movie was excellent."

},

"skills": {

"ph": "/skɪlz/",

"zh": "技能；技巧（skill的复数）",

"eg": "The performers showed various skills.\nShe has excellent communication skills.\nTechnical skills are important for this job."

},

"impressive": {

"ph": "/ɪmˈpresɪv/",

"zh": "令人印象深刻的",

"eg": "The performances were very impressive.\nShe has an impressive collection of books.\nThe building's architecture is impressive."

},

"creative": {

"ph": "/kriˈeɪtɪv/",

"zh": "创造性的；有创意的",

"eg": "The sketches showed creative thinking.\nShe has a very creative mind.\nWe need creative solutions to this problem."

},

"thinking": {

"ph": "/ˈθɪŋkɪŋ/",

"zh": "思考；想法",

"eg": "The plays demonstrated creative thinking.\nI need some time for careful thinking.\nHer thinking on this issue has evolved."

},

"demonstrated": {

"ph": "/ˈdemənstreɪtɪd/",

"zh": "展示；证明（demonstrate的过去式）",

"eg": "The event demonstrated student creativity.\nShe demonstrated how to use the equipment.\nThe experiment demonstrated the theory."

},

"student": {

"ph": "/ˈstjuːdnt/",

"zh": "学生",

"eg": "Student participation was excellent.\nShe is a hardworking student.\nThe university has many international students."

},

"creativity": {

"ph": "/ˌkriːeɪˈtɪvəti/",

"zh": "创造力；创造性",

"eg": "The event encouraged student creativity.\nThe design shows great creativity.\nWe need to foster creativity in children."

},

"encouraged": {

"ph": "/ɪnˈkʌrɪdʒd/",

"zh": "鼓励；促进（encourage的过去式）",

"eg": "The teachers encouraged student participation.\nShe encouraged me to apply for the job.\nThe program encourages healthy eating."

},

"participation": {

"ph": "/pɑːˌtɪsɪˈpeɪʃn/",

"zh": "参与；参加",

"eg": "Student participation made the event successful.\nWe need full participation from everyone.\nThe game requires active participation."

},

"made": {

"ph": "/meɪd/",

"zh": "使；制作（make的过去式）",

"eg": "The performances made everyone laugh.\nShe made a delicious cake for the party.\nThe news made him very happy."

},

"laugh": {

"ph": "/lɑːf/",

"zh": "笑；大笑",

"eg": "The comedy sketches made us laugh.\nThe children laugh while playing.\nHer joke made everyone laugh."

},

"comedy": {

"ph": "/ˈkɒmədi/",

"zh": "喜剧；喜剧性",

"eg": "The comedy sketches were very popular.\nShe prefers comedy movies to dramas.\nThe situation had an element of comedy."

},

"popular": {

"ph": "/ˈpɒpjələr/",

"zh": "受欢迎的；流行的",

"eg": "Comedy performances are always popular.\nThis song is very popular among teenagers.\nThe restaurant is popular with tourists."

},

"always": {

"ph": "/ˈɔːlweɪz/",

"zh": "总是；一直",

"eg": "School events are always enjoyable.\nShe always arrives on time.\nThe sun always rises in the east."

},

"enjoyable": {

"ph": "/ɪnˈdʒɔɪəbl/",

"zh": "令人愉快的；有乐趣的",

"eg": "The celebration was very enjoyable.\nWe had an enjoyable weekend at the beach.\nThe book makes for enjoyable reading."

},

"helped": {

"ph": "/helpt/",

"zh": "帮助；协助（help的过去式）",

"eg": "The event helped build community.\nShe helped me with my homework.\nThe medicine helped reduce the pain."

},

"build": {

"ph": "/bɪld/",

"zh": "建立；建造",

"eg": "Such events help build school community.\nThey plan to build a new playground.\nIt takes time to build trust."

},

"community": {

"ph": "/kəˈmjuːnəti/",

"zh": "社区；团体",

"eg": "The event strengthened school community.\nWe live in a friendly community.\nThe local community supports the school."

},

"strengthened": {

"ph": "/ˈstreŋθənd/",

"zh": "加强；巩固（strengthen的过去式）",

"eg": "The celebration strengthened relationships.\nExercise strengthens your muscles.\nThe agreement strengthened their partnership."

},

"relationships": {

"ph": "/rɪˈleɪʃnʃɪps/",

"zh": "关系；联系（relationship的复数）",

"eg": "The event improved student-teacher relationships.\nShe has good relationships with her colleagues.\nHealthy relationships require communication."

},

"improved": {

"ph": "/ɪmˈpruːvd/",

"zh": "改善；提高（improve的过去式）",

"eg": "Such activities improved communication.\nHer English has improved significantly.\nThe new system improved efficiency."

},

"communication": {

"ph": "/kəˌmjuːnɪˈkeɪʃn/",

"zh": "沟通；交流",

"eg": "The event promoted better communication.\nGood communication is key to success.\nWe need to improve communication between departments."

},

"provided": {

"ph": "/prəˈvaɪdɪd/",

"zh": "提供；供给（provide的过去式）",

"eg": "The celebration provided entertainment.\nThe school provided lunch for the students.\nThe manual provides detailed instructions."

},

"entertainment": {

"ph": "/ˌentəˈteɪnmənt/",

"zh": "娱乐；消遣",

"eg": "The performances provided great entertainment.\nThe city offers various entertainment options.\nReading is my favorite form of entertainment."

},

"relaxation": {

"ph": "/ˌriːlækˈseɪʃn/",

"zh": "放松；休息",

"eg": "The event offered relaxation from studies.\nYoga is good for relaxation.\nWe went to the spa for some relaxation."

},

"studies": {

"ph": "/ˈstʌdiz/",

"zh": "学习；研究（study的复数）",

"eg": "Students enjoyed relaxation from their studies.\nShe is pursuing her studies in medicine.\nRecent studies show interesting results."

},

"enjoyed": {

"ph": "/ɪnˈdʒɔɪd/",

"zh": "享受；喜欢（enjoy的过去式）",

"eg": "Everyone enjoyed the performances.\nThey enjoyed their vacation in Hawaii.\nShe enjoyed reading the novel."

},

"break": {

"ph": "/breɪk/",

"zh": "休息；中断",

"eg": "The event provided a break from routine.\nLet's take a short break.\nThe holiday break starts next week."

},

"routine": {

"ph": "/ruːˈtiːn/",

"zh": "常规；例行公事",

"eg": "It was a pleasant break from daily routine.\nExercise should be part of your daily routine.\nThe morning routine includes breakfast and exercise."

},

"pleasant": {

"ph": "/ˈpleznt/",

"zh": "愉快的；舒适的",

"eg": "The celebration was a pleasant experience.\nWe had a pleasant conversation.\nThe weather is pleasant today."

},

"experience": {

"ph": "/ɪkˈspɪəriəns/",

"zh": "经历；经验",

"eg": "It was a wonderful cultural experience.\nShe has years of teaching experience.\nTraveling abroad is a valuable experience."

},

"valuable": {

"ph": "/ˈvæljuəbl/",

"zh": "有价值的；宝贵的",

"eg": "Such events provide valuable experiences.\nShe gave me some valuable advice.\nThe antique is very valuable."

},

"learning": {

"ph": "/ˈlɜːnɪŋ/",

"zh": "学习；学问",

"eg": "The event offered learning opportunities.\nOnline learning has become popular.\nChildren's learning should be fun."

},

"opportunities": {

"ph": "/ˌɒpəˈtjuːnətiz/",

"zh": "机会；机遇（opportunity的复数）",

"eg": "It created opportunities for talent display.\nThe program offers great opportunities.\nWe should seize opportunities when they come."

},

"created": {

"ph": "/kriˈeɪtɪd/",

"zh": "创造；创建（create的过去式）",

"eg": "The event created lasting memories.\nShe created a beautiful painting.\nThe company was created in 1990."

},

"lasting": {

"ph": "/ˈlɑːstɪŋ/",

"zh": "持久的；永恒的",

"eg": "The celebration created lasting impressions.\nThey formed a lasting friendship.\nThe medicine has lasting effects."

},

"impressions": {

"ph": "/ɪmˈpreʃənz/",

"zh": "印象；感想（impression的复数）",

"eg": "The performances left positive impressions.\nFirst impressions are important.\nThe movie made a deep impression on me."

},

"positive": {

"ph": "/ˈpɒzətɪv/",

"zh": "积极的；肯定的",

"eg": "The event had positive effects.\nShe has a positive attitude.\nThe test results were positive."

},

"effects": {

"ph": "/ɪˈfekts/",

"zh": "影响；效果（effect的复数）",

"eg": "The celebration had positive educational effects.\nThe medicine has side effects.\nThe new policy had immediate effects."

},

"educational": {

"ph": "/ˌedʒuˈkeɪʃənl/",

"zh": "教育的；有教育意义的",

"eg": "The event had educational value.\nEducational programs should be engaging.\nThe museum offers educational tours."

},

"value": {

"ph": "/ˈvæljuː/",

"zh": "价值；重要性",

"eg": "Such activities have great educational value.\nThe necklace has sentimental value.\nWe should value our friendships."

},

"appreciated": {

"ph": "/əˈpriːʃieɪtɪd/",

"zh": "欣赏；感激（appreciate的过去式）",

"eg": "Everyone appreciated the efforts.\nI appreciated your help very much.\nThe artwork was appreciated by critics."

},

"efforts": {

"ph": "/ˈefəts/",

"zh": "努力；尽力（effort的复数）",

"eg": "The organizers' efforts were appreciated.\nShe put great efforts into the project.\nTeam efforts led to the success."

},

"organizers": {

"ph": "/ˈɔːɡənaɪzəz/",

"zh": "组织者（organizer的复数）",

"eg": "The organizers did excellent work.\nEvent organizers need good planning skills.\nThe conference organizers welcomed participants."

},

"excellent": {

"ph": "/ˈeksələnt/",

"zh": "优秀的；极好的",

"eg": "The organizers did excellent work.\nShe is an excellent teacher.\nThe food was excellent."

},

"work": {

"ph": "/wɜːk/",

"zh": "工作；作品",

"eg": "The organizers' work was commendable.\nShe has a lot of work to do.\nThe artist's work is displayed in the gallery."

},

"commendable": {

"ph": "/kəˈmendəbl/",

"zh": "值得赞扬的",

"eg": "Their dedication was commendable.\nShe showed commendable courage.\nThe team's effort was commendable."

},

"dedication": {

"ph": "/ˌdedɪˈkeɪʃn/",

"zh": "奉献； dedication",

"eg": "The teachers showed great dedication.\nShe approaches her work with dedication.\nThe project requires dedication and hard work."

},

"shown": {

"ph": "/ʃəʊn/",

"zh": "展示；显示（show的过去分词）",

"eg": "The teachers have shown great commitment.\nThe data has shown improvement.\nShe has shown interest in the project."

},

"commitment": {

"ph": "/kəˈmɪtmənt/",

"zh": "承诺；奉献",

"eg": "Everyone showed strong commitment.\nShe has a commitment to quality.\nThe company shows commitment to sustainability."

},

"strong": {

"ph": "/strɒŋ/",

"zh": "强烈的；强大的",

"eg": "There was strong community support.\nShe has strong opinions about education.\nThe building survived the strong earthquake."

},

"support": {

"ph": "/səˈpɔːt/",

"zh": "支持；支援",

"eg": "The event received strong support.\nThank you for your support.\nThe bridge needs additional support."

},

"received": {

"ph": "/rɪˈsiːvd/",

"zh": "收到；接受（receive的过去式）",

"eg": "The event received positive feedback.\nShe received an award for her work.\nI received your email yesterday."

},

"feedback": {

"ph": "/ˈfiːdbæk/",

"zh": "反馈；意见",

"eg": "The organizers received positive feedback.\nWe welcome feedback from our customers.\nThe teacher gave feedback on our essays."

},

"looking": {

"ph": "/ˈlʊkɪŋ/",

"zh": "期待；寻找（look的现在分词）",

"eg": "Everyone is looking forward to next year.\nShe is looking for a new apartment.\nI'm looking forward to the holidays."

},

"next": {

"ph": "/nekst/",

"zh": "下一个的；接下来的",

"eg": "We anticipate next year's celebration.\nThe next train arrives in 10 minutes.\nSee you next week!"

},

"anticipate": {

"ph": "/ænˈtɪsɪpeɪt/",

"zh": "预期；期待",

"eg": "We anticipate even better events.\nWe anticipate a large crowd at the concert.\nThe company anticipates growth next year."

},

"even": {

"ph": "/ˈiːvn/",

"zh": "甚至；更加",

"eg": "We hope for even better performances.\nThe second movie was even better.\nEven children can understand this concept."

},

"hope": {

"ph": "/həʊp/",

"zh": "希望；期望",

"eg": "We hope for continued success.\nI hope you have a great day.\nThere is hope for a peaceful solution."

},

"continued": {

"ph": "/kənˈtɪnjuːd/",

"zh": "持续的；继续的",

"eg": "We hope for continued community support.\nThe continued rain caused flooding.\nShe enjoyed continued success in her career."

},

"success": {

"ph": "/səkˈses/",

"zh": "成功；成就",

"eg": "The event was a great success.\nShe achieved success through hard work.\nThe success of the project surprised everyone."

},

"chengyi": {

"ph": "//",

"zh": "成毅（人名）"

},
"zhonghao": {

"ph": "//",

"zh": "中昊（人名）"

}
};
