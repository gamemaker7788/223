// dict_wk6.js —— 第六周点词翻译词典（完整版）
const DICT = {
  // 英文部分（原文）
  "the": {
    "ph": "/ðə/",
    "zh": "定冠词，用于指特定的人或事物",
    "eg": "The sun is shining brightly."
  },
  "sixth": {
    "ph": "/sɪksθ/",
    "zh": "第六",
    "eg": "This is the sixth edition of our magazine."
  },
  "publication": {
    "ph": "/ˌpʌblɪˈkeɪʃn/",
    "zh": "出版物；出版",
    "eg": "The publication of the novel was successful."
  },
  "chief": {
    "ph": "/tʃiːf/",
    "zh": "首席的；主要的",
    "eg": "She is the chief editor of the newspaper."
  },
  "editor": {
    "ph": "/ˈedɪtər/",
    "zh": "编辑；编者",
    "eg": "He works as an associate editor."
  },
  "wang": {
    "ph": "/wæŋ/",
    "zh": "王（姓氏）",
    "eg": "Mr. Wang is our class teacher."
  },
  "wenyu": {
    "ph": "/wɛnjuː/",
    "zh": "文钅钅玉（人名）",
    "eg": "Wenyu is responsible for the project."
  },
  "associate": {
    "ph": "/əˈsoʊʃieɪt/",
    "zh": "副的；联合的",
    "eg": "She is an associate professor."
  },
  "fu": {
    "ph": "/fuː/",
    "zh": "付（姓氏）",
    "eg": "Ms. Fu will lead the meeting."
  },
  "ziyu": {
    "ph": "/ziːjuː/",
    "zh": "木辛女予（人名）",
    "eg": "Ziyu helped with the translation."
  },
  "website": {
    "ph": "/ˈwebsaɪt/",
    "zh": "网站",
    "eg": "I found the information on their website."
  },
  "builder": {
    "ph": "/ˈbɪldər/",
    "zh": "建造者；建设者",
    "eg": "He is a website builder."
  },
  "qizhao": {
    "ph": "/tʃiːʒaʊ/",
    "zh": "王奇龺龺月（人名）",
    "eg": "Qizhao's website looks professional."
  },
  "all": {
    "ph": "/ɔːl/",
    "zh": "所有的；全部的",
    "eg": "All students must attend."
  },
  "contributor": {
    "ph": "/kənˈtrɪbjətər/",
    "zh": "贡献者；投稿人",
    "eg": "We welcome all contributors."
  },
  "are": {
    "ph": "/ɑːr/",
    "zh": "是（be动词复数）",
    "eg": "They are my best friends."
  },
  "welcome": {
    "ph": "/ˈwelkəm/",
    "zh": "欢迎；受欢迎的",
    "eg": "You are welcome to join us."
  },
  "voice": {
    "ph": "/vɔɪs/",
    "zh": "声音；嗓音",
    "eg": "She has a beautiful voice."
  },
  "of": {
    "ph": "/əv/",
    "zh": "的；属于",
    "eg": "This is the capital of France."
  },
  "people": {
    "ph": "/ˈpiːpl/",
    "zh": "人民；人们",
    "eg": "The people elected a new leader."
  },
  "time": {
    "ph": "/taɪm/",
    "zh": "时间；次数",
    "eg": "What time is it now?"
  },
  "april": {
    "ph": "/ˈeɪprəl/",
    "zh": "四月",
    "eg": "April is the fourth month."
  },
  "1st": {
    "ph": "/fɜːrst/",
    "zh": "第一",
    "eg": "Today is April 1st."
  },
  "2026": {
    "ph": "/ˈtwɛnti twɛnti sɪks/",
    "zh": "2026年",
    "eg": "The event will be in 2026."
  },
  "is": {
    "ph": "/ɪz/",
    "zh": "是（be动词单数）",
    "eg": "She is a teacher."
  },
  "a": {
    "ph": "/ə/",
    "zh": "一个；一件",
    "eg": "This is a book."
  },
  "day": {
    "ph": "/deɪ/",
    "zh": "天；白天",
    "eg": "What day is it today?"
  },
  "for": {
    "ph": "/fɔːr/",
    "zh": "为了；因为",
    "eg": "This gift is for you."
  },
  "playing": {
    "ph": "/ˈpleɪɪŋ/",
    "zh": "玩；演奏（play的现在分词）",
    "eg": "Children are playing outside."
  },
  "jokes": {
    "ph": "/dʒoʊks/",
    "zh": "玩笑；笑话",
    "eg": "He likes to tell jokes."
  },
  "but": {
    "ph": "/bʌt/",
    "zh": "但是；除了",
    "eg": "I'm tired but happy."
  },
  "don't": {
    "ph": "/doʊnt/",
    "zh": "不（do not的缩写）",
    "eg": "I don't like coffee."
  },
  "go": {
    "ph": "/ɡoʊ/",
    "zh": "去；走",
    "eg": "Let's go to the park."
  },
  "too": {
    "ph": "/tuː/",
    "zh": "太；也",
    "eg": "It's too hot today."
  },
  "far": {
    "ph": "/fɑːr/",
    "zh": "远；遥远",
    "eg": "The school is not far from here."
  },
  "in": {
    "ph": "/ɪn/",
    "zh": "在...里面；参与",
    "eg": "She is in the school choir."
  },
  "afternoon": {
    "ph": "/ˌæftərˈnuːn/",
    "zh": "下午",
    "eg": "We'll meet tomorrow afternoon."
  },
  "that": {
    "ph": "/ðæt/",
    "zh": "那；那个",
    "eg": "I know that person."
  },
  "during": {
    "ph": "/ˈdjʊrɪŋ/",
    "zh": "在...期间",
    "eg": "During the summer vacation."
  },
  "jog": {
    "ph": "/dʒɒɡ/",
    "zh": "慢跑；缓行",
    "eg": "I go for a jog every morning."
  },
  "many": {
    "ph": "/ˈmeni/",
    "zh": "许多；很多",
    "eg": "Many people attended the meeting."
  },
  "girls": {
    "ph": "/ɡɜːrlz/",
    "zh": "女孩们；女生们",
    "eg": "The girls are playing basketball."
  },
  "chose": {
    "ph": "/tʃoʊz/",
    "zh": "选择（choose的过去式）",
    "eg": "She chose the red dress."
  },
  "to": {
    "ph": "/tuː/",
    "zh": "向；到；对于",
    "eg": "We walked to the station."
  },
  "stay": {
    "ph": "/steɪ/",
    "zh": "停留；保持",
    "eg": "Please stay here."
  },
  "classroom": {
    "ph": "/ˈklæsruːm/",
    "zh": "教室",
    "eg": "The classroom is clean and bright."
  },
  "avoid": {
    "ph": "/əˈvɔɪd/",
    "zh": "避免；躲避",
    "eg": "Try to avoid making mistakes."
  },
  "it": {
    "ph": "/ɪt/",
    "zh": "它；这",
    "eg": "It is raining outside."
  },
  "and": {
    "ph": "/ənd/",
    "zh": "和；与",
    "eg": "She bought apples and oranges."
  },
  "their": {
    "ph": "/ðer/",
    "zh": "他们的；她们的",
    "eg": "This is their house."
  },
  "reason": {
    "ph": "/ˈriːzn/",
    "zh": "原因；理由",
    "eg": "What is the reason for your decision?"
  },
  "was": {
    "ph": "/wʌz/",
    "zh": "是（be的过去式）",
    "eg": "She was happy yesterday."
  },
  "i": {
    "ph": "/aɪ/",
    "zh": "我",
    "eg": "I am a student."
  },
  "have": {
    "ph": "/hæv/",
    "zh": "有；吃",
    "eg": "I have two sisters."
  },
  "period": {
    "ph": "/ˈpɪriəd/",
    "zh": "时期；月经期",
    "eg": "She has her period."
  },
  "so": {
    "ph": "/soʊ/",
    "zh": "所以；因此",
    "eg": "It was raining, so we stayed home."
  },
  "maths": {
    "ph": "/mæθs/",
    "zh": "数学（英式）",
    "eg": "Maths is my favorite subject."
  },
  "class": {
    "ph": "/klæs/",
    "zh": "班级；阶级",
    "eg": "Our class has thirty students."
  },
  "lesson": {
    "ph": "/ˈlesn/",
    "zh": "课；课程",
    "eg": "We have an English lesson today."
  },
  "after": {
    "ph": "/ˈæftər/",
    "zh": "在...之后",
    "eg": "We'll go after lunch."
  },
  "teacher": {
    "ph": "/ˈtiːtʃər/",
    "zh": "教师；老师",
    "eg": "She is a strict teacher."
  },
  "belittled": {
    "ph": "/bɪˈlɪtld/",
    "zh": "贬低；轻视",
    "eg": "He belittled her achievements."
  },
  "crazily": {
    "ph": "/ˈkreɪzɪli/",
    "zh": "疯狂地；发狂地",
    "eg": "He was shouting crazily."
  },
  "these": {
    "ph": "/ðiːz/",
    "zh": "这些",
    "eg": "These books are interesting."
  },
  "because": {
    "ph": "/bɪˈkɒz/",
    "zh": "因为",
    "eg": "We stayed home because it was raining."
  },
  "remarks": {
    "ph": "/rɪˈmɑːrks/",
    "zh": "评论；言论",
    "eg": "His remarks were offensive."
  },
  "were": {
    "ph": "/wɜːr/",
    "zh": "是（be的过去式复数）",
    "eg": "They were late for school."
  },
  "extreme": {
    "ph": "/ɪkˈstriːm/",
    "zh": "极端的；过分的",
    "eg": "His views are too extreme."
  },
  "they": {
    "ph": "/ðeɪ/",
    "zh": "他们；它们",
    "eg": "They are coming to dinner."
  },
  "aroused": {
    "ph": "/əˈraʊzd/",
    "zh": "引起；激起",
    "eg": "The speech aroused enthusiasm."
  },
  "dissatisfaction": {
    "ph": "/dɪsˌsætɪsˈfækʃn/",
    "zh": "不满；不满意",
    "eg": "There is dissatisfaction with the decision."
  },
  "hao": {
    "ph": "/haʊ/",
    "zh": "郝（姓氏）",
    "eg": "Ms. Hao is our math teacher."
  },
  "who": {
    "ph": "/huː/",
    "zh": "谁；那个人",
    "eg": "The person who called you is my friend."
  },
  "could": {
    "ph": "/kʊd/",
    "zh": "能；可以（can的过去式）",
    "eg": "She could speak three languages."
  },
  "not": {
    "ph": "/nɒt/",
    "zh": "不；没有",
    "eg": "I'm not sure about that."
  },
  "join": {
    "ph": "/dʒɔɪn/",
    "zh": "参加；加入",
    "eg": "Would you like to join us?"
  },
  "she": {
    "ph": "/ʃiː/",
    "zh": "她",
    "eg": "She is my sister."
  },
  "had": {
    "ph": "/hæd/",
    "zh": "有（have的过去式）",
    "eg": "She had a headache."
  },
  "stomachache": {
    "ph": "/ˈstʌməkˌeɪk/",
    "zh": "胃痛；肚子痛",
    "eg": "I have a stomachache."
  },
  "at": {
    "ph": "/æt/",
    "zh": "在；向；以",
    "eg": "Meet me at the station."
  },
  "first": {
    "ph": "/fɜːrst/",
    "zh": "第一；最初的",
    "eg": "This is my first time."
  },
  "just": {
    "ph": "/dʒʌst/",
    "zh": "只是；刚刚",
    "eg": "I just arrived."
  },
  "tried": {
    "ph": "/traɪd/",
    "zh": "尝试（try的过去式）",
    "eg": "She tried to explain."
  },
  "her": {
    "ph": "/hɜːr/",
    "zh": "她的；她（宾格）",
    "eg": "This is her book."
  },
  "best": {
    "ph": "/best/",
    "zh": "最好的",
    "eg": "She did her best."
  },
  "argue": {
    "ph": "/ˈɑːrɡjuː/",
    "zh": "争论；辩论",
    "eg": "They argue about politics."
  },
  "finally": {
    "ph": "/ˈfaɪnəli/",
    "zh": "最后；终于",
    "eg": "Finally, we reached an agreement."
  },
  "when": {
    "ph": "/wen/",
    "zh": "当...时候",
    "eg": "Call me when you arrive."
  },
  "mentioned": {
    "ph": "/ˈmenʃənd/",
    "zh": "提到；提及",
    "eg": "He mentioned your name."
  },
  "again": {
    "ph": "/əˈɡen/",
    "zh": "再次；又",
    "eg": "Please say that again."
  },
  "exploded": {
    "ph": "/ɪkˈsploʊdɪd/",
    "zh": "爆发；爆炸",
    "eg": "She exploded with anger."
  },
  "this": {
    "ph": "/ðɪs/",
    "zh": "这；这个",
    "eg": "This is my favorite song."
  },
  "student": {
    "ph": "/ˈstuːdnt/",
    "zh": "学生",
    "eg": "She is a good student."
  },
  "223": {
    "ph": "/tuː ˈtuː ˈθriː/",
    "zh": "二百二十三",
    "eg": "Room 223 is on the second floor."
  },
  "next": {
    "ph": "/nekst/",
    "zh": "下一个；接下来的",
    "eg": "See you next week."
  },
  "second": {
    "ph": "/ˈsekənd/",
    "zh": "第二；秒",
    "eg": "She finished in second place."
  },
  "disposition": {
    "ph": "/ˌdɪspəˈzɪʃn/",
    "zh": "性情； disposition",
    "eg": "She has a cheerful disposition."
  },
  "wonderfully": {
    "ph": "/ˈwʌndəfəli/",
    "zh": "极好地；精彩地",
    "eg": "She sings wonderfully."
  },
  "bad": {
    "ph": "/bæd/",
    "zh": "坏的；糟糕的",
    "eg": "The weather is bad today."
  },
  "it's": {
    "ph": "/ɪts/",
    "zh": "它是（it is的缩写）",
    "eg": "It's raining outside."
  },
  "that": {
    "ph": "/ðæt/",
    "zh": "那；那个",
    "eg": "I know that person."
  },
  "half": {
    "ph": "/hæf/",
    "zh": "一半",
    "eg": "She ate half of the apple."
  },
  "mouth": {
    "ph": "/maʊθ/",
    "zh": "嘴；口",
    "eg": "Open your mouth."
  },
  "turned": {
    "ph": "/tɜːrnd/",
    "zh": "变成；转动",
    "eg": "The leaves turned yellow."
  },
  "into": {
    "ph": "/ˈɪntuː/",
    "zh": "进入；成为",
    "eg": "She walked into the room."
  },
  "black": {
    "ph": "/blæk/",
    "zh": "[特指:起的外号]“黑”,这里指“郝”姓",
    "eg": "She wears a black dress."
  },
  "on": {
    "ph": "/ɒn/",
    "zh": "在...上；关于",
    "eg": "The book is on the table."
  },
  "3rd": {
    "ph": "/θɜːrd/",
    "zh": "第三",
    "eg": "Today is April 3rd."
  },
  "took": {
    "ph": "/tʊk/",
    "zh": "拿；取（take的过去式）",
    "eg": "She took the book from the shelf."
  },
  "apologize": {
    "ph": "/əˈpɒlədʒaɪz/",
    "zh": "道歉",
    "eg": "You should apologize for your behavior."
  },
  "end": {
    "ph": "/end/",
    "zh": "结束；末端",
    "eg": "This is the end of the story."
  }
};