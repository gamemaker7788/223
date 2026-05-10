// dict_parent_teacher_meeting.js —— 家长会纪要完整词典（含结尾语）
const DICT = {
  // --- 标题与元信息 ---
  "on": {
    "ph": "/ɑːn/",
    "zh": "在...之上；关于",
    "eg": "On the table is a book."
  },
  "the": {
    "ph": "/ðə/",
    "zh": "定冠词，用于指特定的人或事物",
    "eg": "The sun is shining brightly."
  },
  "april": {
    "ph": "/ˈeɪprəl/",
    "zh": "四月",
    "eg": "April is the fourth month."
  },
  "30th": {
    "ph": "/ˈθɜːrti θ/ (注：口语常读作 thirtieth)",
    "zh": "第三十",
    "eg": "Today is April 30th."
  },
  "2026": {
    "ph": "/ˈtwenti twenti sɪks/",
    "zh": "2026年",
    "eg": "The event will be in 2026."
  },
  "parent": {
    "ph": "/ˈperənt/",
    "zh": "父亲（或母亲）；家长",
    "eg": "Parents should communicate with teachers."
  },
  "teacher": {
    "ph": "/ˈtiːtʃər/",
    "zh": "教师；老师",
    "eg": "My English teacher is kind."
  },
  "meeting": {
    "ph": "/ˈmiːtɪŋ/",
    "zh": "会议；会面",
    "eg": "We have a meeting every Monday."
  },
  "hold": {
    "ph": "/hoʊld/",
    "zh": "举行；握住（过去式 held）",
    "eg": "The conference will be held tomorrow."
  },
  "there": {
    "ph": "/ðer/",
    "zh": "那里；存在",
    "eg": "There are many students here."
  },
  "were": {
    "ph": "/wɜːr/",
    "zh": "是（are的过去式）",
    "eg": "They were happy yesterday."
  },
  "three": {
    "ph": "/θriː/",
    "zh": "三",
    "eg": "There are three apples."
  },
  "points": {
    "ph": "/pɔɪnts/",
    "zh": "要点；分数",
    "eg": "Please note down the key points."
  },
  "at": {
    "ph": "/æt/",
    "zh": "在（某处/某时）",
    "eg": "I will meet you at school."
  },
  "1": {
    "ph": "/wʌn/",
    "zh": "一",
    "eg": "One plus one equals two."
  },
  "physical": {
    "ph": "/ˈfɪzɪkl/",
    "zh": "身体的；物理的",
    "eg": "Physical exercise is good for health."
  },
  "health": {
    "ph": "/helθ/",
    "zh": "健康",
    "eg": "Health is wealth."
  },
  "and": {
    "ph": "/ənd/",
    "zh": "和；与",
    "eg": "She bought apples and oranges."
  },
  "exercise": {
    "ph": "/ˈeksərsaɪz/",
    "zh": "运动；锻炼；练习",
    "eg": "We should do more exercise."
  },
  "2": {
    "ph": "/tuː/",
    "zh": "二",
    "eg": "Two plus two equals four."
  },
  "change": {
    "ph": "/tʃeɪndʒ/",
    "zh": "改变；更换",
    "eg": "We need to change our plans."
  },
  "children's": {
    "ph": "/ˈtʃɪldrənz/",
    "zh": "孩子们的（child的复数所有格）",
    "eg": "Children's Day is in June."
  },
  "learning": {
    "ph": "/ˈlɜːrnɪŋ/",
    "zh": "学习（learn的动名词）",
    "eg": "Learning English takes time."
  },
  "habits": {
    "ph": "/ˈhæbɪts/",
    "zh": "习惯",
    "eg": "Good habits are important."
  },
  "3": {
    "ph": "/θriː/",
    "zh": "三",
    "eg": "Three blind mice."
  },
  "parents": {
    "ph": "/ˈperənts/",
    "zh": "父母们",
    "eg": "Parents play an important role."
  },
  "make": {
    "ph": "/meɪk/",
    "zh": "制作；使成为",
    "eg": "She can make cakes."
  },
  "changes": {
    "ph": "/ˈtʃeɪndʒɪz/",
    "zh": "改变；变化（复数）",
    "eg": "There have been many changes."
  },
  "to": {
    "ph": "/tuː/",
    "zh": "到；向；为了",
    "eg": "I go to school every day."
  },
  "influence": {
    "ph": "/ˈɪnfluəns/",
    "zh": "影响",
    "eg": "Parents greatly influence their kids."
  },
  "now": {
    "ph": "/naʊ/",
    "zh": "现在",
    "eg": "Do it now."
  },
  "we": {
    "ph": "/wiː/",
    "zh": "我们",
    "eg": "We are a team."
  },
  "sum": {
    "ph": "/sʌm/",
    "zh": "总结；总和",
    "eg": "Let's sum up the results."
  },
  "up": {
    "ph": "/ʌp/",
    "zh": "向上；起来",
    "eg": "Stand up, please."
  },
  "some": {
    "ph": "/sʌm/",
    "zh": "一些",
    "eg": "I have some questions."
  },
  "ways": {
    "ph": "/weɪz/",
    "zh": "方法；道路",
    "eg": "There are many ways to solve this."
  },
  "of": {
    "ph": "/əv/",
    "zh": "的；属于",
    "eg": "This is the capital of France."
  },
  "improvement": {
    "ph": "/ɪmˈpruːvmənt/",
    "zh": "改进；提高",
    "eg": "We need constant improvement."
  },
  "from": {
    "ph": "/frʌm/",
    "zh": "从...；来自",
    "eg": "I come from China."
  },
  "chinese": {
    "ph": "/ˌtʃaɪˈniːz/",
    "zh": "语文；中文；中国人",
    "eg": "I like Chinese class."
  },
  "read": {
    "ph": "/riːd/",
    "zh": "阅读（原形，过去式 read 发音不同）",
    "eg": "I read a book yesterday."
  },
  "more": {
    "ph": "/mɔːr/",
    "zh": "更多的",
    "eg": "Can I have more water?"
  },
  "books": {
    "ph": "/bʊks/",
    "zh": "书（复数）",
    "eg": "I love reading books."
  },
  "accumulate": {
    "ph": "/əˈkjuːmjəleɪt/",
    "zh": "积累；积聚",
    "eg": "We should accumulate knowledge."
  },
  "good": {
    "ph": "/ɡʊd/",
    "zh": "好的",
    "eg": "This is a good idea."
  },
  "words": {
    "ph": "/wɜːrdz/",
    "zh": "单词；话语（复数）",
    "eg": "Learn more English words."
  },
  "beautiful": {
    "ph": "/ˈbjuːtɪfl/",
    "zh": "美丽的",
    "eg": "What a beautiful day!"
  },
  "sentences": {
    "ph": "/ˈsentənsɪz/",
    "zh": "句子（复数）",
    "eg": "Practice making sentences."
  },
  "maths": {
    "ph": "/mæθs/",
    "zh": "数学（英式常用）",
    "eg": "I am good at maths."
  },
  "everyone": {
    "ph": "/ˈevriwʌn/",
    "zh": "每个人",
    "eg": "Everyone likes music."
  },
  "should": {
    "ph": "/ʃʊd/",
    "zh": "应该",
    "eg": "You should study hard."
  },
  "prepare": {
    "ph": "/prɪˈper/",
    "zh": "准备",
    "eg": "Prepare your materials."
  },
  "mistake": {
    "ph": "/mɪˈsteɪk/",
    "zh": "错误",
    "eg": "Correct your mistakes."
  },
  "notebook": {
    "ph": "/ˈnoʊtbʊk/",
    "zh": "笔记本",
    "eg": "Take notes in your notebook."
  },
  "physics": {
    "ph": "/ˈfɪzɪks/",
    "zh": "物理",
    "eg": "Physics is a challenging subject."
  },
  "let": {
    "ph": "/let/",
    "zh": "让；允许",
    "eg": "Let me help you."
  },
  "listen": {
    "ph": "/ˈlɪsn/",
    "zh": "听（注意拼写去t）",
    "eg": "Listen to the teacher carefully."
  },
  "us": {
    "ph": "/ʌs/",
    "zh": "我们（宾格）",
    "eg": "Tell us a story."
  },
  "explain": {
    "ph": "/ɪkˈspleɪn/",
    "zh": "解释",
    "eg": "Can you explain this rule?"
  },
  "questions": {
    "ph": "/ˈkwestʃənz/",
    "zh": "问题（复数）",
    "eg": "Do you have any questions?"
  },
  "biology": {
    "ph": "/baɪˈɑːlədʒi/",
    "zh": "生物",
    "eg": "Biology studies living things."
  },
  "follow": {
    "ph": "/ˈfɑːloʊ/",
    "zh": "跟随；遵守",
    "eg": "Follow the instructions."
  },
  "teachers": {
    "ph": "/ˈtiːtʃərz/",
    "zh": "老师们（复数）",
    "eg": "Teachers work very hard."
  },
  "review": {
    "ph": "/rɪˈvjuː/",
    "zh": "复习；回顾",
    "eg": "Review your lessons before the test."
  },
  "rhythm": {
    "ph": "/ˈrɪðəm/",
    "zh": "节奏；韵律",
    "eg": "Follow the rhythm of the music."
  },
  "geography": {
    "ph": "/dʒiˈɑːɡrəfi/",
    "zh": "地理",
    "eg": "Geography is about places."
  },
  "start": {
    "ph": "/stɑːrt/",
    "zh": "开始",
    "eg": "Start your work now."
  },
  "by": {
    "ph": "/baɪ/",
    "zh": "通过；被",
    "eg": "Learn by doing."
  },
  "oneself": {
    "ph": "/wʌnˈself/",
    "zh": "自己；独自",
    "eg": "He did it by himself."
  },
  "if": {
    "ph": "/ɪf/",
    "zh": "如果",
    "eg": "If it rains, we will stay home."
  },
  "you": {
    "ph": "/juː/",
    "zh": "你；你们",
    "eg": "You are my friend."
  },
  "want": {
    "ph": "/wɑːnt/",
    "zh": "想要",
    "eg": "I want an apple."
  },
  "original": {
    "ph": "/əˈrɪdʒənl/",
    "zh": "原始的；原版的",
    "eg": "This is the original painting."
  },
  "recording": {
    "ph": "/rɪˈkɔːrdɪŋ/",
    "zh": "录音；记录",
    "eg": "I listened to the recording."
  },
  "go": {
    "ph": "/ɡoʊ/",
    "zh": "去",
    "eg": "Go home now."
  },
  "official": {
    "ph": "/əˈfɪʃl/",
    "zh": "官方的；正式的",
    "eg": "Visit the official website."
  },
  "website": {
    "ph": "/ˈwebsaɪt/",
    "zh": "网站",
    "eg": "I found the info on their website."
  },
  "ps": {
    "ph": "/ˌpiː ˈes/",
    "zh": "附言（Postscript）",
    "eg": "PS: Don't forget the keys."
  },
  "can": {
    "ph": "/kæn/",
    "zh": "能够；可以",
    "eg": "You can swim fast."
  },
  "top-secret": {
    "ph": "/ˌtɑːp ˈsiːkrət/",
    "zh": "绝密的；最高机密的",
    "eg": "This is a top-secret document."
  },
  "min": {
    "ph": "/mɪn/",
    "zh": "分钟（minute缩写）",
    "eg": "Wait for 5 min."
  },
  "s": {
    "ph": "/ˌɛs/",
    "zh": "秒（second缩写）或复数标记",
    "eg": "62 min 46 s (62 minutes 46 seconds)"
  },
  "time": {
    "ph": "/taɪm/",
    "zh": "时间",
    "eg": "What time is it?"
  },
  "may": {
    "ph": "/meɪ/",
    "zh": "五月；可能",
    "eg": "May is the fifth month."
  },
  "6th": {
    "ph": "/sɪksθ/",
    "zh": "第六",
    "eg": "Today is May 6th."
  },
  "writer": {
    "ph": "/ˈraɪtər/",
    "zh": "作者；撰写人",
    "eg": "The writer is famous."
  },
  "helper": {
    "ph": "/ˈhelpər/",
    "zh": "助手；帮手",
    "eg": "He is my helper."
  },
  "note": {
    "ph": "/noʊt/",
    "zh": "笔记；注释；注意",
    "eg": "Take a note."
  },
  "this": {
    "ph": "/ðɪs/",
    "zh": "这个",
    "eg": "This is my book."
  },
  "report": {
    "ph": "/rɪˈpɔːrt/",
    "zh": "报告",
    "eg": "Write a report."
  },
  "completely": {
    "ph": "/kəmˈpliːtli/",
    "zh": "完全地",
    "eg": "The room is completely empty."
  },
  "based": {
    "ph": "/beɪst/",
    "zh": "基于（base的过去分词）",
    "eg": "This movie is based on a true story."
  },
  "end": {
    "ph": "/end/",
    "zh": "结束；末尾",
    "eg": "The end of the story."
  },
  "please": {
    "ph": "/pliːz/",
    "zh": "请",
    "eg": "Please sit down."
  },
  "stay": {
    "ph": "/steɪ/",
    "zh": "停留；保持",
    "eg": "Stay here for a while."
  },
  "tuned": {
    "ph": "/tuːnd/",
    "zh": "已调谐的；（比喻）关注着的",
    "eg": "Stay tuned for more updates."
  }
};