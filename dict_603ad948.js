// dict_seventh_publication.js —— 第七期出版物完整词典（修改版，键名统一为小写）
const DICT = {
  // --- 标题与元信息 ---
  "the": {
    "ph": "/ðə/",
    "zh": "定冠词，用于指特定的人或事物",
    "eg": "The sun is shining brightly."
  },
  "seventh": {
    "ph": "/ˈsevənθ/",
    "zh": "第七",
    "eg": "This is the seventh edition of our magazine."
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
    "zh": "文钰（人名）",
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
    "zh": "梓妤（人名）",
    "eg": "Ziyu helped with the translation."
  },
  "hao": {
    "ph": "/haʊ/",
    "zh": "郝（姓氏）",
    "eg": "Ms. Hao is our math teacher."
  },
  "yuxuan": {
    "ph": "/juːˈʃuːən/",
    "zh": "雨萱（人名）",
    "eg": "Yuxuan designed the cover."
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
    "zh": "琦朝（人名）",
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
  "photographer": {
    "ph": "/fəˈtɑːɡrəfər/",
    "zh": "摄影师",
    "eg": "The photographer took amazing shots."
  },
  "song": {
    "ph": "/sʊŋ/",
    "zh": "宋（姓氏）",
    "eg": "Mr. Song is our PE teacher."
  },
  "shikang": {
    "ph": "/ʃiːˈkɑːŋ/",
    "zh": "时康（人名）",
    "eg": "Shikang captured the school spirit."
  },
  "guta": {
    "ph": "/ˈɡuːtɑː/",
    "zh": "古陶（地名/校名）",
    "eg": "Guta No.1 Middle School is nearby."
  },
  "no.1": {
    "ph": "/naɪm bɜːr/",
    "zh": "第一",
    "eg": "This is No.1 Middle School."
  },
  "middle": {
    "ph": "/ˈmɪdl/",
    "zh": "中间的",
    "eg": "We are in the middle of the class."
  },
  "school": {
    "ph": "/skuːl/",
    "zh": "学校",
    "eg": "I go to school every day."
  },
  "one-day": {
    "ph": "/wʌn deɪ/",
    "zh": "一天的",
    "eg": "We planned a one-day trip."
  },
  "tour": {
    "ph": "/tʊr/",
    "zh": "旅行；游览",
    "eg": "The museum tour was fun."
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
  "13th": {
    "ph": "/θɜːrsti θriː/",
    "zh": "第十三",
    "eg": "Today is April 13th."
  },
  "2026": {
    "ph": "/ˈtwɛnti twɛnti sɪks/",
    "zh": "2026年",
    "eg": "The event will be in 2026."
  },

  // --- 正文段落 ---
  "is": {
    "ph": "/ɪz/",
    "zh": "是（be动词单数）",
    "eg": "She is a teacher."
  },
  "taking": {
    "ph": "/ˈteɪkɪŋ/",
    "zh": "进行；拿（take的现在分词）",
    "eg": "The school is taking place a huge reform."
  },
  "place": {
    "ph": "/pleɪs/",
    "zh": "地方；举行",
    "eg": "The event will take place soon."
  },
  "a": {
    "ph": "/ə/",
    "zh": "一个；一件",
    "eg": "This is a book."
  },
  "huge": {
    "ph": "/hjuːdʒ/",
    "zh": "巨大的",
    "eg": "The school is making a huge reform."
  },
  "reform": {
    "ph": "/rɪˈfɔːrm/",
    "zh": "改革",
    "eg": "The government is pushing for reform."
  },
  "so": {
    "ph": "/soʊ/",
    "zh": "所以；因此",
    "eg": "It was raining, so we stayed home."
  },
  "that": {
    "ph": "/ðæt/",
    "zh": "那；那个",
    "eg": "I know that person."
  },
  "promoting": {
    "ph": "/prəˈmoʊtɪŋ/",
    "zh": "促进；提升（promote的现在分词）",
    "eg": "The reform is promoting all-around development."
  },
  "all-around": {
    "ph": "/ˌɔːl əˈraʊnd/",
    "zh": "全面的；多方面的",
    "eg": "We need all-around development."
  },
  "development": {
    "ph": "/dɪˈveləpmənt/",
    "zh": "发展",
    "eg": "The development of students is important."
  },
  "of": {
    "ph": "/əv/",
    "zh": "的；属于",
    "eg": "This is the capital of France."
  },
  "students": {
    "ph": "/ˈstjuːdənts/",
    "zh": "学生们",
    "eg": "The students are very active."
  },
  "morality": {
    "ph": "/məˈræləti/",
    "zh": "道德；品行",
    "eg": "The school emphasizes morality."
  },
  "intelligence": {
    "ph": "/ɪnˈtelɪdʒəns/",
    "zh": "智力；才智",
    "eg": "She has high intelligence."
  },
  "physical": {
    "ph": "/ˈfɪzɪkl/",
    "zh": "身体的；物理的",
    "eg": "Physical education is important."
  },
  "education": {
    "ph": "/ˌedʒuˈkeɪʃn/",
    "zh": "教育",
    "eg": "Education is the key to success."
  },
  "aesthetics": {
    "ph": "/esˈθetɪks/",
    "zh": "美学",
    "eg": "Aesthetics is part of the curriculum."
  },
  "and": {
    "ph": "/ənd/",
    "zh": "和；与",
    "eg": "She bought apples and oranges."
  },
  "labor": {
    "ph": "/ˈleɪbər/",
    "zh": "劳动",
    "eg": "Labor education is required."
  },
  "when": {
    "ph": "/wen/",
    "zh": "当...时候",
    "eg": "Call me when you arrive."
  },
  "new": {
    "ph": "/nuː/",
    "zh": "新的",
    "eg": "This is a new school."
  },
  "week": {
    "ph": "/wiːk/",
    "zh": "周；星期",
    "eg": "Next week is the holiday."
  },
  "beginning": {
    "ph": "/bɪˈɡɪnɪŋ/",
    "zh": "开始；开端",
    "eg": "The beginning of the year is exciting."
  },
  "flower": {
    "ph": "/ˈflaʊər/",
    "zh": "花",
    "eg": "The flower bed is beautiful."
  },
  "bed": {
    "ph": "/bed/",
    "zh": "床；花坛",
    "eg": "There is a new flower bed."
  },
  "completely": {
    "ph": "/kəmˈpliːtli/",
    "zh": "完全地",
    "eg": "The work is completely done."
  },
  "surrounded": {
    "ph": "/səˈraʊndɪd/",
    "zh": "被包围的（surround的过去分词）",
    "eg": "The house is surrounded by trees."
  },
  "by": {
    "ph": "/baɪ/",
    "zh": "被；由；通过",
    "eg": "The book was written by him."
  },
  "fence": {
    "ph": "/fens/",
    "zh": "篱笆；栅栏",
    "eg": "There is a fence around the garden."
  },
  "end": {
    "ph": "/end/",
    "zh": "结束；末端",
    "eg": "The end of the story is sad."
  },
  "please": {
    "ph": "/pliːz/",
    "zh": "请",
    "eg": "Please sit down."
  },
  "stay": {
    "ph": "/steɪ/",
    "zh": "停留；保持",
    "eg": "Please stay here."
  },
  "tuned": {
    "ph": "/tuːnd/",
    "zh": "调谐的；准备好的（tune的过去分词）",
    "eg": "Stay tuned for more updates."
  }
};