// dict_wk5.js —— 第五周点词翻译词典
const DICT = {
  // 基础词汇
  "the": {
    "ph": "/ðə/",
    "zh": "定冠词，用于指特定的人或事物",
    "eg": "The sun is shining brightly."
  },
  "fifth": {
    "ph": "/fɪfθ/",
    "zh": "第五",
    "eg": "This is the fifth edition of our magazine."
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
    "zh": "文钅玉（人名）",
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
    "zh": "王奇龺月（人名）",
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
  "changes": {
    "ph": "/ˈtʃeɪndʒɪz/",
    "zh": "变化；改变",
    "eg": "There are many changes this year."
  },
  "in": {
    "ph": "/ɪn/",
    "zh": "在...里面；参与",
    "eg": "She is in the school choir."
  },
  "situation": {
    "ph": "/ˌsɪtʃuˈeɪʃn/",
    "zh": "情况；形势",
    "eg": "The economic situation is improving."
  },
  "time": {
    "ph": "/taɪm/",
    "zh": "时间；次数",
    "eg": "What time is it now?"
  },
  "march": {
    "ph": "/mɑːrtʃ/",
    "zh": "三月；行进",
    "eg": "March is the third month."
  },
  "19th": {
    "ph": "/ˈnaɪnˌtiːnθ/",
    "zh": "第十九",
    "eg": "Today is March 19th."
  },
  "2026": {
    "ph": "/ˈtwɛnti twɛnti sɪks/",
    "zh": "2026年",
    "eg": "The event will be in 2026."
  },
  "writer": {
    "ph": "/ˈraɪtər/",
    "zh": "作者；作家",
    "eg": "She is a famous writer."
  },
  "helper": {
    "ph": "/ˈhelpər/",
    "zh": "助手；帮手",
    "eg": "My brother is my helper."
  },
  "on": {
    "ph": "/ɒn/",
    "zh": "在...上；关于",
    "eg": "The book is on the table."
  },
  "18th": {
    "ph": "/ˈeɪˌtiːnθ/",
    "zh": "第十八",
    "eg": "Her birthday is on the 18th."
  },
  "great": {
    "ph": "/ɡreɪt/",
    "zh": "伟大的；很好的",
    "eg": "We had a great time."
  },
  "reform": {
    "ph": "/rɪˈfɔːrm/",
    "zh": "改革；改良",
    "eg": "The education system needs reform."
  },
  "took": {
    "ph": "/tʊk/",
    "zh": "拿；取（take的过去式）",
    "eg": "She took the book from the shelf."
  },
  "place": {
    "ph": "/pleɪs/",
    "zh": "地方；位置",
    "eg": "This is a quiet place."
  },
  "class": {
    "ph": "/klæs/",
    "zh": "班级；阶级",
    "eg": "Our class has thirty students."
  },
  "223": {
    "ph": "/tuː ˈtuː ˈθriː/",
    "zh": "二百二十三",
    "eg": "Room 223 is on the second floor."
  },
  "of": {
    "ph": "/əv/",
    "zh": "的；属于",
    "eg": "This is the capital of France."
  },
  "guiyang": {
    "ph": "/ɡweɪjæŋ/",
    "zh": "贵阳（地名）",
    "eg": "Guiyang is a beautiful city."
  },
  "no": {
    "ph": "/nʌmbər/",
    "zh": "第...号",
    "eg": "She lives at No. 25 Park Street."
  },
  "1": {
    "ph": "/wʌn/",
    "zh": "一；第一",
    "eg": "This is my first time here."
  },
  "middle": {
    "ph": "/ˈmɪdl/",
    "zh": "中等的；中间的",
    "eg": "She is in middle school."
  },
  "school": {
    "ph": "/skuːl/",
    "zh": "学校",
    "eg": "My school is near the park."
  },
  "at": {
    "ph": "/æt/",
    "zh": "在；向；以",
    "eg": "Meet me at the station."
  },
  "this": {
    "ph": "/ðɪs/",
    "zh": "这；这个",
    "eg": "This is my favorite song."
  },
  "important": {
    "ph": "/ɪmˈpɔːrtnt/",
    "zh": "重要的；重大的",
    "eg": "This is an important decision."
  },
  "point": {
    "ph": "/pɔɪnt/",
    "zh": "点；要点",
    "eg": "That's a good point."
  },
  "second": {
    "ph": "/ˈsekənd/",
    "zh": "第二；秒",
    "eg": "She finished in second place."
  },
  "term": {
    "ph": "/tɜːrm/",
    "zh": "学期；术语",
    "eg": "The new term starts in September."
  },
  "grade": {
    "ph": "/ɡreɪd/",
    "zh": "年级；等级",
    "eg": "She is in eighth grade."
  },
  "8": {
    "ph": "/eɪt/",
    "zh": "八",
    "eg": "I have eight apples."
  },
  "zhang": {
    "ph": "/ʒæŋ/",
    "zh": "张（姓氏）",
    "eg": "Mr. Zhang is our history teacher."
  },
  "and": {
    "ph": "/ənd/",
    "zh": "和；与",
    "eg": "She bought apples and oranges."
  },
  "two": {
    "ph": "/tuː/",
    "zh": "二；两个",
    "eg": "I have two brothers."
  },
  "students": {
    "ph": "/ˈstjuːdnts/",
    "zh": "学生（复数）",
    "eg": "The students are studying."
  },
  "did": {
    "ph": "/dɪd/",
    "zh": "做（do的过去式）",
    "eg": "She did her homework."
  },
  "homework": {
    "ph": "/ˈhəʊmwɜːk/",
    "zh": "家庭作业",
    "eg": "I have too much homework."
  },
  "other": {
    "ph": "/ˈʌðər/",
    "zh": "其他的；另外的",
    "eg": "Some people disagree."
  },
  "subjects": {
    "ph": "/ˈsʌbdʒɪkts/",
    "zh": "科目；主题（复数）",
    "eg": "We study many subjects."
  },
  "openly": {
    "ph": "/ˈəʊpənli/",
    "zh": "公开地；坦率地",
    "eg": "They discussed it openly."
  },
  "during": {
    "ph": "/ˈdjʊərɪŋ/",
    "zh": "在...期间",
    "eg": "During the summer vacation."
  },
  "continued": {
    "ph": "/kənˈtɪnjuːd/",
    "zh": "继续；持续",
    "eg": "The rain continued all night."
  },
  "for": {
    "ph": "/fɔːr/",
    "zh": "为了；因为",
    "eg": "This gift is for you."
  },
  "quite": {
    "ph": "/kwaɪt/",
    "zh": "相当；很",
    "eg": "It's quite cold today."
  },
  "long": {
    "ph": "/lɒŋ/",
    "zh": "长的；长久的",
    "eg": "We waited a long time."
  },
  "they": {
    "ph": "/ðeɪ/",
    "zh": "他们；它们",
    "eg": "They are coming to dinner."
  },
  "caused": {
    "ph": "/kɔːzd/",
    "zh": "引起；导致",
    "eg": "The news caused excitement."
  },
  "nearby": {
    "ph": "/ˌnɪərˈbaɪ/",
    "zh": "附近的",
    "eg": "The nearby supermarket is open."
  },
  "to": {
    "ph": "/tuː/",
    "zh": "向；到；对于",
    "eg": "We walked to the station."
  },
  "start": {
    "ph": "/stɑːrt/",
    "zh": "开始；启动",
    "eg": "The movie will start soon."
  },
  "imitating": {
    "ph": "/ˈɪmɪteɪtɪŋ/",
    "zh": "模仿（imitate的现在分词）",
    "eg": "Children learn by imitating."
  },
  "third": {
    "ph": "/θɜːd/",
    "zh": "第三",
    "eg": "This is my third visit."
  },
  "afternoon": {
    "ph": "/ˌɑːftəˈnuːn/",
    "zh": "下午",
    "eg": "We'll meet tomorrow afternoon."
  },
  "math": {
    "ph": "/mæθ/",
    "zh": "数学",
    "eg": "Math is my favorite subject."
  },
  "teacher": {
    "ph": "/ˈtiːtʃər/",
    "zh": "教师；老师",
    "eg": "She is a strict teacher."
  },
  "suddenly": {
    "ph": "/ˈsʌdənli/",
    "zh": "突然地",
    "eg": "The phone rang suddenly."
  },
  "shouted": {
    "ph": "/ˈʃaʊtɪd/",
    "zh": "大喊；呼喊",
    "eg": "He shouted for help."
  },
  "insults": {
    "ph": "/ɪnˈsʌlts/",
    "zh": "侮辱；辱骂",
    "eg": "He shouted insults at them."
  },
  "door": {
    "ph": "/dɔːr/",
    "zh": "门",
    "eg": "Please close the door."
  },
  "emphasized": {
    "ph": "/ˈemfəsaɪzd/",
    "zh": "强调；着重",
    "eg": "She emphasized the importance."
  },
  "these": {
    "ph": "/ðiːz/",
    "zh": "这些",
    "eg": "These books are interesting."
  },
  "didn't": {
    "ph": "/ˈdɪdnt/",
    "zh": "不（did not的缩写）",
    "eg": "They didn't know the answer."
  },
  "have": {
    "ph": "/hæv/",
    "zh": "有；吃",
    "eg": "I have two sisters."
  },
  "listen": {
    "ph": "/ˈlɪsn/",
    "zh": "听；倾听",
    "eg": "Please listen carefully."
  },
  "from": {
    "ph": "/frɒm/",
    "zh": "从；来自",
    "eg": "I come from China."
  },
  "then": {
    "ph": "/ðen/",
    "zh": "然后；那时",
    "eg": "We had dinner, then watched TV."
  },
  "day": {
    "ph": "/deɪ/",
    "zh": "天；白天",
    "eg": "What day is it today?"
  },
  "morning": {
    "ph": "/ˈmɔːnɪŋ/",
    "zh": "早晨；上午",
    "eg": "I go for a run in the morning."
  },
  "still": {
    "ph": "/stɪl/",
    "zh": "仍然；还",
    "eg": "She's still working."
  },
  "kept": {
    "ph": "/kept/",
    "zh": "保持；继续",
    "eg": "She kept practicing."
  },
  "making": {
    "ph": "/ˈmeɪkɪŋ/",
    "zh": "制作；制定",
    "eg": "She's making a cake."
  },
  "sarcastic": {
    "ph": "/sɑːrˈkæstɪk/",
    "zh": "讽刺的；挖苦的",
    "eg": "He made sarcastic remarks."
  },
  "remarks": {
    "ph": "/rɪˈmɑːrks/",
    "zh": "评论；言论",
    "eg": "His remarks were offensive."
  },
  "began": {
    "ph": "/bɪˈɡæn/",
    "zh": "开始（begin的过去式）",
    "eg": "The concert began at eight."
  },
  "divided": {
    "ph": "/dɪˈvaɪdɪd/",
    "zh": "分开；划分",
    "eg": "The group was divided into teams."
  },
  "into": {
    "ph": "/ˈɪntuː/",
    "zh": "进入；成为",
    "eg": "She walked into the room."
  },
  "four": {
    "ph": "/fɔːr/",
    "zh": "四",
    "eg": "There are four seasons."
  },
  "aspects": {
    "ph": "/ˈæspekts/",
    "zh": "方面；层面",
    "eg": "We considered all aspects."
  },
  "politics": {
    "ph": "/ˈpɒlətɪks/",
    "zh": "政治；政治学",
    "eg": "She studies politics at university."
  },
  "said": {
    "ph": "/sed/",
    "zh": "说（say的过去式）",
    "eg": "She said goodbye."
  },
  "if": {
    "ph": "/ɪf/",
    "zh": "如果；是否",
    "eg": "If it rains, we'll stay home."
  },
  "you": {
    "ph": "/juː/",
    "zh": "你；你们",
    "eg": "Are you coming with us?"
  },
  "don't": {
    "ph": "/doʊnt/",
    "zh": "不（do not的缩写）",
    "eg": "I don't like coffee."
  },
  "make": {
    "ph": "/meɪk/",
    "zh": "做；制造",
    "eg": "She made a delicious cake."
  },
  "contributions": {
    "ph": "/ˌkɒntrɪˈbjuːʃnz/",
    "zh": "贡献；捐献",
    "eg": "We appreciate your contributions."
  },
  "we": {
    "ph": "/wi/",
    "zh": "我们",
    "eg": "We are going to the beach."
  },
  "won't": {
    "ph": "/wəʊnt/",
    "zh": "不会（will not的缩写）",
    "eg": "She won't be late."
  },
  "consider": {
    "ph": "/kənˈsɪdər/",
    "zh": "考虑；认为",
    "eg": "We need to consider all options."
  },
  "either": {
    "ph": "/ˈaɪðər/",
    "zh": "也（用于否定句）",
    "eg": "I don't like it either."
  },
  "economy": {
    "ph": "/ɪˈkɒnəmi/",
    "zh": "经济；节约",
    "eg": "The economy is growing."
  },
  "forced": {
    "ph": "/fɔːrst/",
    "zh": "强迫；迫使",
    "eg": "He was forced to leave."
  },
  "several": {
    "ph": "/ˈsevrəl/",
    "zh": "几个；若干",
    "eg": "Several people attended."
  },
  "selected": {
    "ph": "/sɪˈlektɪd/",
    "zh": "选中的；精选的",
    "eg": "The selected candidates will be notified."
  },
  "bring": {
    "ph": "/brɪŋ/",
    "zh": "带来；引起",
    "eg": "Please bring your book."
  },
  "plants": {
    "ph": "/plɑːnts/",
    "zh": "植物；工厂（复数）",
    "eg": "The plants need water."
  },
  "reason": {
    "ph": "/ˈriːzn/",
    "zh": "原因；理由",
    "eg": "What is the reason for your decision?"
  },
  "was": {
    "ph": "/wɒz/",
    "zh": "是（be的过去式单数）",
    "eg": "She was happy yesterday."
  },
  "based": {
    "ph": "/beɪst/",
    "zh": "基于；以...为基础",
    "eg": "The movie is based on a true story."
  },
  "sentence": {
    "ph": "/ˈsentəns/",
    "zh": "句子；判决",
    "eg": "This is a complex sentence."
  },
  "he": {
    "ph": "/hi/",
    "zh": "他",
    "eg": "He is my brother."
  },
  "above": {
    "ph": "/əˈbʌv/",
    "zh": "在...上面；超过",
    "eg": "The picture is above the sofa."
  },
  "ideology": {
    "ph": "/ˌaɪdiˈɒlədʒi/",
    "zh": "意识形态；思想体系",
    "eg": "Political ideology influences decisions."
  },
  "english": {
    "ph": "/ˈɪŋɡlɪʃ/",
    "zh": "英语；英国的",
    "eg": "She teaches English literature."
  },
  "talked": {
    "ph": "/tɔːkt/",
    "zh": "谈话；交谈",
    "eg": "They talked for hours."
  },
  "taking": {
    "ph": "/ˈteɪkɪŋ/",
    "zh": "拿；取（take的现在分词）",
    "eg": "She is taking a break."
  },
  "turns": {
    "ph": "/tɜːrnz/",
    "zh": "轮流；转弯（复数）",
    "eg": "We take turns cooking."
  },
  "speaking": {
    "ph": "/ˈspiːkɪŋ/",
    "zh": "说话；演讲",
    "eg": "Public speaking makes me nervous."
  },
  "what": {
    "ph": "/wɒt/",
    "zh": "什么；多么",
    "eg": "What is your name?"
  },
  "impressed": {
    "ph": "/ɪmˈprest/",
    "zh": "给...留下深刻印象",
    "eg": "I was impressed by her speech."
  },
  "me": {
    "ph": "/mi/",
    "zh": "我（宾格）",
    "eg": "She gave the book to me."
  },
  "most": {
    "ph": "/məʊst/",
    "zh": "最；大多数",
    "eg": "This is the most interesting book."
  },
  "ms": {
    "ph": "/mɪz/",
    "zh": "女士（婚姻状况不明）",
    "eg": "Ms Smith is the manager."
  },
  "among": {
    "ph": "/əˈmʌŋ/",
    "zh": "在...之中",
    "eg": "She is among the best students."
  },
  "morality": {
    "ph": "/məˈræləti/",
    "zh": "道德；道德观",
    "eg": "Morality is important in society."
  },
  "intelligence": {
    "ph": "/ɪnˈtelɪdʒəns/",
    "zh": "智力；智能",
    "eg": "Artificial intelligence is developing."
  },
  "physical": {
    "ph": "/ˈfɪzɪkl/",
    "zh": "身体的；物理的",
    "eg": "Physical exercise is important."
  },
  "education": {
    "ph": "/ˌedʒuˈkeɪʃn/",
    "zh": "教育",
    "eg": "Education is the key to success."
  },
  "aesthetics": {
    "ph": "/iːsˈθetɪks/",
    "zh": "美学；审美",
    "eg": "She has a good sense of aesthetics."
  },
  "labor": {
    "ph": "/ˈleɪbər/",
    "zh": "劳动；劳工",
    "eg": "Labor Day is a holiday."
  },
  "comes": {
    "ph": "/kʌmz/",
    "zh": "来；来到（come的第三人称）",
    "eg": "She comes from Japan."
  },
  "first": {
    "ph": "/fɜːrst/",
    "zh": "第一；最初的",
    "eg": "This is my first time."
  },
  "followed": {
    "ph": "/ˈfɒləʊd/",
    "zh": "跟随；接着",
    "eg": "The dog followed its owner."
  },
  "by": {
    "ph": "/baɪ/",
    "zh": "在旁边；通过",
    "eg": "The book was written by a famous author."
  },
  "territory": {
    "ph": "/ˈterətɔːri/",
    "zh": "领土；领域",
    "eg": "This is our territory."
  },
  "made": {
    "ph": "/meɪd/",
    "zh": "制作；使（make的过去式）",
    "eg": "She made a decision."
  },
  "rearrangement": {
    "ph": "/ˌriːəˈreɪndʒmənt/",
    "zh": "重新安排；重组",
    "eg": "The rearrangement improved efficiency."
  },
  "seats": {
    "ph": "/siːts/",
    "zh": "座位；席位（复数）",
    "eg": "Please take your seats."
  },
  "although": {
    "ph": "/ɔːlˈðəʊ/",
    "zh": "虽然；尽管",
    "eg": "Although it was raining, we went out."
  },
  "it": {
    "ph": "/ɪt/",
    "zh": "它；这",
    "eg": "It is raining outside."
  },
  "rationalized": {
    "ph": "/ˈræʃənəlaɪzd/",
    "zh": "使合理化",
    "eg": "The system was rationalized."
  },
  "arrangement": {
    "ph": "/əˈreɪndʒmənt/",
    "zh": "安排；布置",
    "eg": "The seating arrangement was changed."
  },
  "more": {
    "ph": "/mɔːr/",
    "zh": "更多的；更大的",
    "eg": "I need more time."
  },
  "reasonable": {
    "ph": "/ˈriːznəbl/",
    "zh": "合理的；公道的",
    "eg": "The price is reasonable."
  },
  "doesn't": {
    "ph": "/ˈdʌznt/",
    "zh": "不（does not的缩写）",
    "eg": "He doesn't drink water."
  },
  "mean": {
    "ph": "/miːn/",
    "zh": "意味着；意思是",
    "eg": "What does this word mean?"
  },
  "much": {
    "ph": "/mʌtʃ/",
    "zh": "很多；大量",
    "eg": "It doesn't mean much now."
  },
  "now": {
    "ph": "/naʊ/",
    "zh": "现在；目前",
    "eg": "We need to leave now."
  },
  "that": {
    "ph": "/ðæt/",
    "zh": "那；那个",
    "eg": "I know that person."
  },
  "will": {
    "ph": "/wɪl/",
    "zh": "将；会",
    "eg": "She will arrive tomorrow."
  },
  "soon": {
    "ph": "/suːn/",
    "zh": "很快；不久",
    "eg": "We'll see you soon."
  },
  "be": {
    "ph": "/bi/",
    "zh": "是；成为",
    "eg": "I want to be a doctor."
  },
  "able": {
    "ph": "/ˈeɪbl/",
    "zh": "能够的；有能力的",
    "eg": "She is able to speak three languages."
  },
  "choose": {
    "ph": "/tʃuːz/",
    "zh": "选择；挑选",
    "eg": "You can choose any color."
  },
  "our": {
    "ph": "/ˈaʊər/",
    "zh": "我们的",
    "eg": "This is our house."
  },
  "own": {
    "ph": "/əʊn/",
    "zh": "自己的；拥有",
    "eg": "She has her own business."
  },
  "strengthen": {
    "ph": "/ˈstreŋθn/",
    "zh": "加强；巩固",
    "eg": "Exercise strengthens muscles."
  },
  "his": {
    "ph": "/hɪz/",
    "zh": "他的",
    "eg": "This is his book."
  },
  "position": {
    "ph": "/pəˈzɪʃn/",
    "zh": "位置；职位",
    "eg": "She got a new position."
  },
  "however": {
    "ph": "/haʊˈevər/",
    "zh": "然而；可是",
    "eg": "However, it's not that simple."
  },
  "its": {
    "ph": "/ɪts/",
    "zh": "它的",
    "eg": "The company changed its policy."
  },
  "positive": {
    "ph": "/ˈpɒzətɪv/",
    "zh": "积极的；肯定的",
    "eg": "She has a positive attitude."
  },
  "impact": {
    "ph": "/ˈɪmpækt/",
    "zh": "影响；冲击",
    "eg": "The news had a big impact."
  },
  "was": {
    "ph": "/wɒz/",
    "zh": "是（be的过去式）",
    "eg": "She was happy yesterday."
  },
  "huge": {
    "ph": "/hjuːdʒ/",
    "zh": "巨大的；庞大的",
    "eg": "They made a huge profit."
  },
  "not": {
    "ph": "/nɒt/",
    "zh": "不；没有",
    "eg": "I'm not sure about that."
  },
  "only": {
    "ph": "/ˈəʊnli/",
    "zh": "只；仅仅",
    "eg": "Only three people came."
  },
  "effectively": {
    "ph": "/ɪˈfektɪvli/",
    "zh": "有效地；实际上",
    "eg": "The medicine works effectively."
  },
  "stopped": {
    "ph": "/stɒpt/",
    "zh": "停止；阻止",
    "eg": "The rain stopped suddenly."
  },
  "internal": {
    "ph": "/ɪnˈtɜːnl/",
    "zh": "内部的；国内的",
    "eg": "Internal affairs are confidential."
  },
  "rat": {
    "ph": "/ræt/",
    "zh": "老鼠；卑鄙的人",
    "eg": "The rat race is stressful."
  },
  "race": {
    "ph": "/reɪs/",
    "zh": "比赛；种族",
    "eg": "She won the race."
  },
  "but": {
    "ph": "/bʌt/",
    "zh": "但是；除了",
    "eg": "I'm tired but happy."
  },
  "also": {
    "ph": "/ˈɔːlsəʊ/",
    "zh": "也；同样",
    "eg": "She is also coming."
  },
  "maintained": {
    "ph": "/meɪnˈteɪnd/",
    "zh": "维持；保持",
    "eg": "He maintained his innocence."
  },
  "dignity": {
    "ph": "/ˈdɪɡnəti/",
    "zh": "尊严；高贵",
    "eg": "We must respect human dignity."
  },
  "teachers": {
    "ph": "/ˈtiːtʃəz/",
    "zh": "老师们（复数）",
    "eg": "The teachers are dedicated."
  },
  "end": {
    "ph": "/end/",
    "zh": "结束；末端",
    "eg": "This is the end of the story."
  },
  "reference": {
    "ph": "/ˈrefrəns/",
    "zh": "参考；引用",
    "eg": "Check the reference section."
  },
  "translation": {
    "ph": "/trænsˈleɪʃn/",
    "zh": "翻译；译文",
    "eg": "The translation is accurate."
  },
  "can": {
    "ph": "/kæn/",
    "zh": "能；可以",
    "eg": "I can swim very well."
  },
  "see": {
    "ph": "/siː/",
    "zh": "看；看见",
    "eg": "Can you see the mountains?"
  },
  "fifth": {
    "ph": "/fɪfθ/",
    "zh": "第五",
    "eg": "This is the fifth time."
  },
  "edition": {
    "ph": "/ɪˈdɪʃn/",
    "zh": "版本；版次",
    "eg": "This is the fifth edition."
  },
  "magazine": {
    "ph": "/ˌmæɡəˈziːn/",
    "zh": "杂志；期刊",
    "eg": "I read a fashion magazine."
  },
  "assistant": {
    "ph": "/əˈsɪstənt/",
    "zh": "助手；助理",
    "eg": "She is the assistant editor."
  },
  "participate": {
    "ph": "/pɑːˈtɪsɪpeɪt/",
    "zh": "参与；参加",
    "eg": "Everyone can participate."
  },
  "discussion": {
    "ph": "/dɪˈskʌʃn/",
    "zh": "讨论；议论",
    "eg": "We had a long discussion."
  },
  "situation": {
    "ph": "/ˌsɪtʃuˈeɪʃn/",
    "zh": "情况；形势",
    "eg": "The situation is under control."
  },
  "playwright": {
    "ph": "/ˈpleɪraɪt/",
    "zh": "剧作家；编剧",
    "eg": "He is a famous playwright."
  },
  "assistants": {
    "ph": "/əˈsɪstənts/",
    "zh": "助手们（复数）",
    "eg": "The assistants helped organize."
  },
  "march": {
    "ph": "/mɑːtʃ/",
    "zh": "三月；行进",
    "eg": "March is a spring month."
  },
  "conducted": {
    "ph": "/kənˈdʌktɪd/",
    "zh": "进行；实施",
    "eg": "The survey was conducted."
  },
  "eighth": {
    "ph": "/eɪtθ/",
    "zh": "第八",
    "eg": "She is in eighth grade."
  },
  "important": {
    "ph": "/ɪmˈpɔːtnt/",
    "zh": "重要的；重大的",
    "eg": "This is an important meeting."
  },
  "moment": {
    "ph": "/ˈməʊmənt/",
    "zh": "时刻；瞬间",
    "eg": "Wait a moment, please."
  },
  "openly": {
    "ph": "/ˈəʊpənli/",
    "zh": "公开地；坦率地",
    "eg": "They discussed it openly."
  },
  "subjects": {
    "ph": "/ˈsʌbdʒɪkts/",
    "zh": "科目；主题（复数）",
    "eg": "We study many subjects."
  },
  "nearby": {
    "ph": "/ˌnɪəˈbaɪ/",
    "zh": "附近的",
    "eg": "The nearby store is open."
  },
  "imitating": {
    "ph": "/ˈɪmɪteɪtɪŋ/",
    "zh": "模仿（imitate的现在分词）",
    "eg": "Children learn by imitating."
  },
  "afternoon": {
    "ph": "/ˌɑːftəˈnuːn/",
    "zh": "下午",
    "eg": "We'll meet in the afternoon."
  },
  "suddenly": {
    "ph": "/ˈsʌdənli/",
    "zh": "突然地",
    "eg": "The phone rang suddenly."
  },
  "shouted": {
    "ph": "/ˈʃaʊtɪd/",
    "zh": "大喊；呼喊",
    "eg": "He shouted for help."
  },
  "insults": {
    "ph": "/ɪnˈsʌlts/",
    "zh": "侮辱；辱骂",
    "eg": "He shouted insults at them."
  },
  "emphasized": {
    "ph": "/ˈemfəsaɪzd/",
    "zh": "强调；着重",
    "eg": "She emphasized the importance."
  },
  "listen": {
    "ph": "/ˈlɪsn/",
    "zh": "听；倾听",
    "eg": "Please listen carefully."
  },
  "morning": {
    "ph": "/ˈmɔːnɪŋ/",
    "zh": "早晨；上午",
    "eg": "I go for a run in the morning."
  },
  "kept": {
    "ph": "/kept/",
    "zh": "保持；继续",
    "eg": "She kept practicing."
  },
  "making": {
    "ph": "/ˈmeɪkɪŋ/",
    "zh": "制作；制定",
    "eg": "She's making a cake."
  },
  "sarcastic": {
    "ph": "/sɑːˈkæstɪk/",
    "zh": "讽刺的；挖苦的",
    "eg": "He made sarcastic remarks."
  },
  "remarks": {
    "ph": "/rɪˈmɑːks/",
    "zh": "评论；言论",
    "eg": "His remarks were offensive."
  },
  "began": {
    "ph": "/bɪˈɡæn/",
    "zh": "开始（begin的过去式）",
    "eg": "The concert began at eight."
  },
  "divided": {
    "ph": "/dɪˈvaɪdɪd/",
    "zh": "分开；划分",
    "eg": "The group was divided into teams."
  },
  "aspects": {
    "ph": "/ˈæspekts/",
    "zh": "方面；层面",
    "eg": "We considered all aspects."
  },
  "politics": {
    "ph": "/ˈpɒlətɪks/",
    "zh": "政治；政治学",
    "eg": "She studies politics at university."
  },
  "contributions": {
    "ph": "/ˌkɒntrɪˈbjuːʃnz/",
    "zh": "贡献；捐献",
    "eg": "We appreciate your contributions."
  },
  "economy": {
    "ph": "/ɪˈkɒnəmi/",
    "zh": "经济；节约",
    "eg": "The economy is growing."
  },
  "forced": {
    "ph": "/fɔːst/",
    "zh": "强迫；迫使",
    "eg": "He was forced to leave."
  },
  "selected": {
    "ph": "/sɪˈlektɪd/",
    "zh": "选中的；精选的",
    "eg": "The selected candidates will be notified."
  },
  "plants": {
    "ph": "/plɑːnts/",
    "zh": "植物；工厂（复数）",
    "eg": "The plants need water."
  },
  "reason": {
    "ph": "/ˈriːzn/",
    "zh": "原因；理由",
    "eg": "What is the reason for your decision?"
  },
  "sentence": {
    "ph": "/ˈsentəns/",
    "zh": "句子；判决",
    "eg": "This is a complex sentence."
  },
  "ideology": {
    "ph": "/ˌaɪdiˈɒlədʒi/",
    "zh": "意识形态；思想体系",
    "eg": "Political ideology influences decisions."
  },
  "english": {
    "ph": "/ˈɪŋɡlɪʃ/",
    "zh": "英语；英国的",
    "eg": "She teaches English literature."
  },
  "talked": {
    "ph": "/tɔːkt/",
    "zh": "谈话；交谈",
    "eg": "They talked for hours."
  },
  "taking": {
    "ph": "/ˈteɪkɪŋ/",
    "zh": "拿；取（take的现在分词）",
    "eg": "She is taking a break."
  },
  "turns": {
    "ph": "/tɜːnz/",
    "zh": "轮流；转弯（复数）",
    "eg": "We take turns cooking."
  },
  "speaking": {
    "ph": "/ˈspiːkɪŋ/",
    "zh": "说话；演讲",
    "eg": "Public speaking makes me nervous."
  },
  "impressed": {
    "ph": "/ɪmˈprest/",
    "zh": "给...留下深刻印象",
    "eg": "I was impressed by her speech."
  },
  "morality": {
    "ph": "/məˈræləti/",
    "zh": "道德；道德观",
    "eg": "Morality is important in society."
  },
  "intelligence": {
    "ph": "/ɪnˈtelɪdʒəns/",
    "zh": "智力；智能",
    "eg": "Artificial intelligence is developing."
  },
  "physical": {
    "ph": "/ˈfɪzɪkl/",
    "zh": "身体的；物理的",
    "eg": "Physical exercise is important."
  },
  "education": {
    "ph": "/ˌedʒuˈkeɪʃn/",
    "zh": "教育",
    "eg": "Education is the key to success."
  },
  "aesthetics": {
    "ph": "/iːsˈθetɪks/",
    "zh": "美学；审美",
    "eg": "She has a good sense of aesthetics."
  },
  "labor": {
    "ph": "/ˈleɪbər/",
    "zh": "劳动；劳工",
    "eg": "Labor Day is a holiday."
  },
  "comes": {
    "ph": "/kʌmz/",
    "zh": "来；来到（come的第三人称）",
    "eg": "She comes from Japan."
  },
  "followed": {
    "ph": "/ˈfɒləʊd/",
    "zh": "跟随；接着",
    "eg": "The dog followed its owner."
  },
  "territory": {
    "ph": "/ˈterətɔːri/",
    "zh": "领土；领域",
    "eg": "This is our territory."
  },
  "rearrangement": {
    "ph": "/ˌriːəˈreɪndʒmənt/",
    "zh": "重新安排；重组",
    "eg": "The rearrangement improved efficiency."
  },
  "seats": {
    "ph": "/siːts/",
    "zh": "座位；席位（复数）",
    "eg": "Please take your seats."
  },
  "although": {
    "ph": "/ɔːlˈðəʊ/",
    "zh": "虽然；尽管",
    "eg": "Although it was raining, we went out."
  },
  "rationalized": {
    "ph": "/ˈræʃənəlaɪzd/",
    "zh": "使合理化",
    "eg": "The system was rationalized."
  },
  "arrangement": {
    "ph": "/əˈreɪndʒmənt/",
    "zh": "安排；布置",
    "eg": "The seating arrangement was changed."
  },
  "reasonable": {
    "ph": "/ˈriːznəbl/",
    "zh": "合理的；公道的",
    "eg": "The price is reasonable."
  },
  "strengthen": {
    "ph": "/ˈstreŋθn/",
    "zh": "加强；巩固",
    "eg": "Exercise strengthens muscles."
  },
  "position": {
    "ph": "/pəˈzɪʃn/",
    "zh": "位置；职位",
    "eg": "She got a new position."
  },
  "impact": {
    "ph": "/ˈɪmpækt/",
    "zh": "影响；冲击",
    "eg": "The news had a big impact."
  },
  "effectively": {
    "ph": "/ɪˈfektɪvli/",
    "zh": "有效地；实际上",
    "eg": "The medicine works effectively."
  },
  "stopped": {
    "ph": "/stɒpt/",
    "zh": "停止；阻止",
    "eg": "The rain stopped suddenly."
  },
  "internal": {
    "ph": "/ɪnˈtɜːnl/",
    "zh": "内部的；国内的",
    "eg": "Internal affairs are confidential."
  },
  "maintained": {
    "ph": "/meɪnˈteɪnd/",
    "zh": "维持；保持",
    "eg": "He maintained his innocence."
  },
  "dignity": {
    "ph": "/ˈdɪɡnəti/",
    "zh": "尊严；高贵",
    "eg": "We must respect human dignity."
  },
  "reference": {
    "ph": "/ˈrefrəns/",
    "zh": "参考；引用",
    "eg": "Check the reference section."
  },
  "translation": {
    "ph": "/trænsˈleɪʃn/",
    "zh": "翻译；译文",
    "eg": "The translation is accurate."
  },
  "edition": {
    "ph": "/ɪˈdɪʃn/",
    "zh": "版本；版次",
    "eg": "This is the fifth edition."
  },
  "magazine": {
    "ph": "/ˌmæɡəˈziːn/",
    "zh": "杂志；期刊",
    "eg": "I read a fashion magazine."
  },
  "assistant": {
    "ph": "/əˈsɪstənt/",
    "zh": "助手；助理",
    "eg": "She is the assistant editor."
  },
  "participate": {
    "ph": "/pɑːˈtɪsɪpeɪt/",
    "zh": "参与；参加",
    "eg": "Everyone can participate."
  },
  "discussion": {
    "ph": "/dɪˈskʌʃn/",
    "zh": "讨论；议论",
    "eg": "We had a long discussion."
  },
  "playwright": {
    "ph": "/ˈpleɪraɪt/",
    "zh": "剧作家；编剧",
    "eg": "He is a famous playwright."
  },
  "assistants": {
    "ph": "/əˈsɪstənts/",
    "zh": "助手们（复数）",
    "eg": "The assistants helped organize."
  },
  "conducted": {
    "ph": "/kənˈdʌktɪd/",
    "zh": "进行；实施",
    "eg": "The survey was conducted."
  },
  "class 223": {
    "ph": "连这也不会拼？",
    "zh": "223班",
    "eg": "YOU ARE IN CLASS 223!!!."
  },
  "eighth": {
    "ph": "/eɪtθ/",
    "zh": "第八",
    "eg": "She is in eighth grade."
  }
};
