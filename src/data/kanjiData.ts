export interface KanjiData {
  character: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  examples: {
    word: string;
    reading: string;
    translation: string;
  }[];
}

export interface LessonData {
  id: number;
  title: string;
  titleEn: string;
  kanji: string[];
}

export const lessons: LessonData[] = [
  {
    id: 1,
    title: '絵からできた漢字',
    titleEn: 'Pictographic Kanji',
    kanji: ['山', '川', '田', '日', '月', '火', '水', '木', '金', '土']
  },
  {
    id: 2,
    title: '数字①',
    titleEn: 'Numbers (Part 1)',
    kanji: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  },
  {
    id: 3,
    title: '数字と時間',
    titleEn: 'Numbers & Time',
    kanji: ['百', '千', '万', '円', '年', '上', '下', '中', '半', '分']
  },
  {
    id: 4,
    title: '人と体',
    titleEn: 'People & Body',
    kanji: ['人', '子', '女', '男', '目', '口', '耳', '手', '足', '力']
  },
  {
    id: 5,
    title: '家族と学習',
    titleEn: 'Family & Learning',
    kanji: ['父', '母', '先', '生', '学', '校', '友', '本', '毎', '何']
  },
  {
    id: 6,
    title: '方向と場所',
    titleEn: 'Directions & Places',
    kanji: ['前', '後', '外', '左', '右', '東', '西', '南', '北', '名']
  },
  {
    id: 7,
    title: '動物と天気',
    titleEn: 'Animals & Weather',
    kanji: ['牛', '馬', '魚', '貝', '雨', '天', '気', '車', '門', '午']
  },
  {
    id: 8,
    title: '形容詞',
    titleEn: 'Adjectives',
    kanji: ['大', '小', '高', '安', '新', '古', '長', '多', '少', '早']
  },
  {
    id: 9,
    title: '基本動詞',
    titleEn: 'Basic Verbs',
    kanji: ['行', '来', '食', '見', '入', '出', '立', '書', '言', '飲']
  },
  {
    id: 10,
    title: '日常動詞',
    titleEn: 'Daily Verbs',
    kanji: ['話', '読', '語', '聞', '間', '買', '休', '時', '週', '道']
  },
  {
    id: 11,
    title: 'まとめ',
    titleEn: 'Review & More',
    kanji: ['今', '会', '社', '店', '駅', '国', '白', '花', '空', '電']
  }
];

export const kanjiDatabase: Record<string, KanjiData> = {
  // Lesson 1
  '山': {
    character: '山',
    onyomi: 'サン',
    kunyomi: 'やま',
    meaning: 'mountain',
    examples: [
      { word: '富士山', reading: 'ふじさん', translation: 'Mount Fuji' },
      { word: '山', reading: 'やま', translation: 'mountain' },
      { word: '火山', reading: 'かざん', translation: 'volcano' }
    ]
  },
  '川': {
    character: '川',
    onyomi: 'セン',
    kunyomi: 'かわ',
    meaning: 'river',
    examples: [
      { word: '川', reading: 'かわ', translation: 'river' },
      { word: '小川', reading: 'おがわ', translation: 'stream' },
      { word: '川口', reading: 'かわぐち', translation: 'river mouth' }
    ]
  },
  '田': {
    character: '田',
    onyomi: 'デン',
    kunyomi: 'た',
    meaning: 'rice field',
    examples: [
      { word: '田んぼ', reading: 'たんぼ', translation: 'rice paddy' },
      { word: '田中', reading: 'たなか', translation: 'Tanaka (surname)' },
      { word: '水田', reading: 'すいでん', translation: 'rice field' }
    ]
  },
  '日': {
    character: '日',
    onyomi: 'ニチ・ジツ',
    kunyomi: 'ひ・か',
    meaning: 'day / sun',
    examples: [
      { word: '日曜日', reading: 'にちようび', translation: 'Sunday' },
      { word: '日本', reading: 'にほん', translation: 'Japan' },
      { word: '毎日', reading: 'まいにち', translation: 'every day' }
    ]
  },
  '月': {
    character: '月',
    onyomi: 'ゲツ・ガツ',
    kunyomi: 'つき',
    meaning: 'month / moon',
    examples: [
      { word: '月曜日', reading: 'げつようび', translation: 'Monday' },
      { word: '一月', reading: 'いちがつ', translation: 'January' },
      { word: '月', reading: 'つき', translation: 'moon' }
    ]
  },
  '火': {
    character: '火',
    onyomi: 'カ',
    kunyomi: 'ひ',
    meaning: 'fire',
    examples: [
      { word: '火曜日', reading: 'かようび', translation: 'Tuesday' },
      { word: '火事', reading: 'かじ', translation: 'fire (incident)' },
      { word: '花火', reading: 'はなび', translation: 'fireworks' }
    ]
  },
  '水': {
    character: '水',
    onyomi: 'スイ',
    kunyomi: 'みず',
    meaning: 'water',
    examples: [
      { word: '水曜日', reading: 'すいようび', translation: 'Wednesday' },
      { word: '水', reading: 'みず', translation: 'water' },
      { word: '水泳', reading: 'すいえい', translation: 'swimming' }
    ]
  },
  '木': {
    character: '木',
    onyomi: 'モク・ボク',
    kunyomi: 'き',
    meaning: 'tree / wood',
    examples: [
      { word: '木曜日', reading: 'もくようび', translation: 'Thursday' },
      { word: '木', reading: 'き', translation: 'tree' },
      { word: '大木', reading: 'たいぼく', translation: 'large tree' }
    ]
  },
  '金': {
    character: '金',
    onyomi: 'キン・コン',
    kunyomi: 'かね',
    meaning: 'gold / money',
    examples: [
      { word: '金曜日', reading: 'きんようび', translation: 'Friday' },
      { word: 'お金', reading: 'おかね', translation: 'money' },
      { word: '金色', reading: 'きんいろ', translation: 'golden color' }
    ]
  },
  '土': {
    character: '土',
    onyomi: 'ド・ト',
    kunyomi: 'つち',
    meaning: 'earth / soil',
    examples: [
      { word: '土曜日', reading: 'どようび', translation: 'Saturday' },
      { word: '土', reading: 'つち', translation: 'soil' },
      { word: '土地', reading: 'とち', translation: 'land' }
    ]
  },

  // Lesson 2
  '一': {
    character: '一',
    onyomi: 'イチ・イツ',
    kunyomi: 'ひと',
    meaning: 'one',
    examples: [
      { word: '一人', reading: 'ひとり', translation: 'one person' },
      { word: '一つ', reading: 'ひとつ', translation: 'one thing' },
      { word: '一月', reading: 'いちがつ', translation: 'January' }
    ]
  },
  '二': {
    character: '二',
    onyomi: 'ニ',
    kunyomi: 'ふた',
    meaning: 'two',
    examples: [
      { word: '二人', reading: 'ふたり', translation: 'two people' },
      { word: '二つ', reading: 'ふたつ', translation: 'two things' },
      { word: '二月', reading: 'にがつ', translation: 'February' }
    ]
  },
  '三': {
    character: '三',
    onyomi: 'サン',
    kunyomi: 'み',
    meaning: 'three',
    examples: [
      { word: '三人', reading: 'さんにん', translation: 'three people' },
      { word: '三つ', reading: 'みっつ', translation: 'three things' },
      { word: '三月', reading: 'さんがつ', translation: 'March' }
    ]
  },
  '四': {
    character: '四',
    onyomi: 'シ',
    kunyomi: 'よ・よっ・よん',
    meaning: 'four',
    examples: [
      { word: '四つ', reading: 'よっつ', translation: 'four things' },
      { word: '四月', reading: 'しがつ', translation: 'April' },
      { word: '四人', reading: 'よにん', translation: 'four people' }
    ]
  },
  '五': {
    character: '五',
    onyomi: 'ゴ',
    kunyomi: 'いつ',
    meaning: 'five',
    examples: [
      { word: '五つ', reading: 'いつつ', translation: 'five things' },
      { word: '五月', reading: 'ごがつ', translation: 'May' },
      { word: '五人', reading: 'ごにん', translation: 'five people' }
    ]
  },
  '六': {
    character: '六',
    onyomi: 'ロク',
    kunyomi: 'む・むっ',
    meaning: 'six',
    examples: [
      { word: '六つ', reading: 'むっつ', translation: 'six things' },
      { word: '六月', reading: 'ろくがつ', translation: 'June' },
      { word: '六人', reading: 'ろくにん', translation: 'six people' }
    ]
  },
  '七': {
    character: '七',
    onyomi: 'シチ',
    kunyomi: 'なな・なの',
    meaning: 'seven',
    examples: [
      { word: '七つ', reading: 'ななつ', translation: 'seven things' },
      { word: '七月', reading: 'しちがつ', translation: 'July' },
      { word: '七人', reading: 'しちにん', translation: 'seven people' }
    ]
  },
  '八': {
    character: '八',
    onyomi: 'ハチ',
    kunyomi: 'や・やっ・よう',
    meaning: 'eight',
    examples: [
      { word: '八つ', reading: 'やっつ', translation: 'eight things' },
      { word: '八月', reading: 'はちがつ', translation: 'August' },
      { word: '八人', reading: 'はちにん', translation: 'eight people' }
    ]
  },
  '九': {
    character: '九',
    onyomi: 'キュウ・ク',
    kunyomi: 'ここの',
    meaning: 'nine',
    examples: [
      { word: '九つ', reading: 'ここのつ', translation: 'nine things' },
      { word: '九月', reading: 'くがつ', translation: 'September' },
      { word: '九人', reading: 'きゅうにん', translation: 'nine people' }
    ]
  },
  '十': {
    character: '十',
    onyomi: 'ジュウ・ジッ',
    kunyomi: 'とお・と',
    meaning: 'ten',
    examples: [
      { word: '十日', reading: 'とおか', translation: 'tenth day' },
      { word: '十月', reading: 'じゅうがつ', translation: 'October' },
      { word: '十人', reading: 'じゅうにん', translation: 'ten people' }
    ]
  },

  // Lesson 3
  '百': {
    character: '百',
    onyomi: 'ヒャク',
    kunyomi: '—',
    meaning: 'hundred',
    examples: [
      { word: '百円', reading: 'ひゃくえん', translation: '100 yen' },
      { word: '百', reading: 'ひゃく', translation: 'hundred' },
      { word: '三百', reading: 'さんびゃく', translation: 'three hundred' }
    ]
  },
  '千': {
    character: '千',
    onyomi: 'セン',
    kunyomi: 'ち',
    meaning: 'thousand',
    examples: [
      { word: '千円', reading: 'せんえん', translation: '1000 yen' },
      { word: '千', reading: 'せん', translation: 'thousand' },
      { word: '三千', reading: 'さんぜん', translation: 'three thousand' }
    ]
  },
  '万': {
    character: '万',
    onyomi: 'マン・バン',
    kunyomi: '—',
    meaning: 'ten thousand',
    examples: [
      { word: '一万', reading: 'いちまん', translation: 'ten thousand' },
      { word: '万年筆', reading: 'まんねんひつ', translation: 'fountain pen' },
      { word: '十万', reading: 'じゅうまん', translation: 'hundred thousand' }
    ]
  },
  '円': {
    character: '円',
    onyomi: 'エン',
    kunyomi: 'まる',
    meaning: 'yen / circle',
    examples: [
      { word: '百円', reading: 'ひゃくえん', translation: '100 yen' },
      { word: '千円', reading: 'せんえん', translation: '1000 yen' },
      { word: '円', reading: 'えん', translation: 'yen' }
    ]
  },
  '年': {
    character: '年',
    onyomi: 'ネン',
    kunyomi: 'とし',
    meaning: 'year',
    examples: [
      { word: '一年', reading: 'いちねん', translation: 'one year' },
      { word: '今年', reading: 'ことし', translation: 'this year' },
      { word: '来年', reading: 'らいねん', translation: 'next year' }
    ]
  },
  '上': {
    character: '上',
    onyomi: 'ジョウ',
    kunyomi: 'うえ・あがる',
    meaning: 'up / above',
    examples: [
      { word: '上がります', reading: 'あがります', translation: 'to go up' },
      { word: '上', reading: 'うえ', translation: 'above' },
      { word: '上手', reading: 'じょうず', translation: 'skillful' }
    ]
  },
  '下': {
    character: '下',
    onyomi: 'カ・ゲ',
    kunyomi: 'した・さがる',
    meaning: 'down / below',
    examples: [
      { word: '下', reading: 'した', translation: 'below' },
      { word: '地下', reading: 'ちか', translation: 'underground' },
      { word: '下さい', reading: 'ください', translation: 'please give' }
    ]
  },
  '中': {
    character: '中',
    onyomi: 'チュウ・ジュウ',
    kunyomi: 'なか',
    meaning: 'middle / inside',
    examples: [
      { word: '中国', reading: 'ちゅうごく', translation: 'China' },
      { word: '中', reading: 'なか', translation: 'inside' },
      { word: '一日中', reading: 'いちにちじゅう', translation: 'all day' }
    ]
  },
  '半': {
    character: '半',
    onyomi: 'ハン',
    kunyomi: 'なかば',
    meaning: 'half',
    examples: [
      { word: '半分', reading: 'はんぶん', translation: 'half' },
      { word: '三時半', reading: 'さんじはん', translation: '3:30' },
      { word: '半年', reading: 'はんとし', translation: 'half year' }
    ]
  },
  '分': {
    character: '分',
    onyomi: 'ブン・フン・プン',
    kunyomi: 'わける・わかる',
    meaning: 'minute / divide',
    examples: [
      { word: '五分', reading: 'ごふん', translation: 'five minutes' },
      { word: '十分', reading: 'じゅっぷん', translation: 'ten minutes' },
      { word: '半分', reading: 'はんぶん', translation: 'half' }
    ]
  },

  // Lesson 4
  '人': {
    character: '人',
    onyomi: 'ジン・ニン',
    kunyomi: 'ひと',
    meaning: 'person',
    examples: [
      { word: '人', reading: 'ひと', translation: 'person' },
      { word: '日本人', reading: 'にほんじん', translation: 'Japanese person' },
      { word: '二人', reading: 'ふたり', translation: 'two people' }
    ]
  },
  '子': {
    character: '子',
    onyomi: 'シ・ス',
    kunyomi: 'こ',
    meaning: 'child',
    examples: [
      { word: '子ども', reading: 'こども', translation: 'child' },
      { word: '男の子', reading: 'おとこのこ', translation: 'boy' },
      { word: '女の子', reading: 'おんなのこ', translation: 'girl' }
    ]
  },
  '女': {
    character: '女',
    onyomi: 'ジョ・ニョ',
    kunyomi: 'おんな',
    meaning: 'woman',
    examples: [
      { word: '女の人', reading: 'おんなのひと', translation: 'woman' },
      { word: '女の子', reading: 'おんなのこ', translation: 'girl' },
      { word: '女性', reading: 'じょせい', translation: 'female' }
    ]
  },
  '男': {
    character: '男',
    onyomi: 'ダン・ナン',
    kunyomi: 'おとこ',
    meaning: 'man',
    examples: [
      { word: '男の人', reading: 'おとこのひと', translation: 'man' },
      { word: '男の子', reading: 'おとこのこ', translation: 'boy' },
      { word: '長男', reading: 'ちょうなん', translation: 'eldest son' }
    ]
  },
  '目': {
    character: '目',
    onyomi: 'モク',
    kunyomi: 'め',
    meaning: 'eye',
    examples: [
      { word: '目', reading: 'め', translation: 'eye' },
      { word: '一番目', reading: 'いちばんめ', translation: 'first' },
      { word: '目的', reading: 'もくてき', translation: 'purpose' }
    ]
  },
  '口': {
    character: '口',
    onyomi: 'コウ・ク',
    kunyomi: 'くち',
    meaning: 'mouth',
    examples: [
      { word: '入口', reading: 'いりぐち', translation: 'entrance' },
      { word: '口', reading: 'くち', translation: 'mouth' },
      { word: '出口', reading: 'でぐち', translation: 'exit' }
    ]
  },
  '耳': {
    character: '耳',
    onyomi: 'ジ',
    kunyomi: 'みみ',
    meaning: 'ear',
    examples: [
      { word: '耳', reading: 'みみ', translation: 'ear' },
      { word: '早耳', reading: 'はやみみ', translation: 'quick to hear news' },
      { word: '耳鼻科', reading: 'じびか', translation: 'ENT clinic' }
    ]
  },
  '手': {
    character: '手',
    onyomi: 'シュ',
    kunyomi: 'て',
    meaning: 'hand',
    examples: [
      { word: '手紙', reading: 'てがみ', translation: 'letter' },
      { word: '手', reading: 'て', translation: 'hand' },
      { word: '上手', reading: 'じょうず', translation: 'skillful' }
    ]
  },
  '足': {
    character: '足',
    onyomi: 'ソク',
    kunyomi: 'あし・たりる',
    meaning: 'leg / foot',
    examples: [
      { word: '足', reading: 'あし', translation: 'foot/leg' },
      { word: '足りる', reading: 'たりる', translation: 'to be sufficient' },
      { word: '不足', reading: 'ふそく', translation: 'shortage' }
    ]
  },
  '力': {
    character: '力',
    onyomi: 'リョク・リキ',
    kunyomi: 'ちから',
    meaning: 'power / strength',
    examples: [
      { word: '力', reading: 'ちから', translation: 'strength' },
      { word: '努力', reading: 'どりょく', translation: 'effort' },
      { word: '電力', reading: 'でんりょく', translation: 'electric power' }
    ]
  },

  // Lesson 5
  '父': {
    character: '父',
    onyomi: 'フ',
    kunyomi: 'ちち',
    meaning: 'father',
    examples: [
      { word: 'お父さん', reading: 'おとうさん', translation: 'father (polite)' },
      { word: '父', reading: 'ちち', translation: 'father (my)' },
      { word: '父親', reading: 'ちちおや', translation: 'father' }
    ]
  },
  '母': {
    character: '母',
    onyomi: 'ボ',
    kunyomi: 'はは',
    meaning: 'mother',
    examples: [
      { word: 'お母さん', reading: 'おかあさん', translation: 'mother (polite)' },
      { word: '母', reading: 'はは', translation: 'mother (my)' },
      { word: '母親', reading: 'ははおや', translation: 'mother' }
    ]
  },
  '先': {
    character: '先',
    onyomi: 'セン',
    kunyomi: 'さき',
    meaning: 'previous / ahead',
    examples: [
      { word: '先生', reading: 'せんせい', translation: 'teacher' },
      { word: '先', reading: 'さき', translation: 'ahead' },
      { word: '先月', reading: 'せんげつ', translation: 'last month' }
    ]
  },
  '生': {
    character: '生',
    onyomi: 'セイ・ショウ',
    kunyomi: 'いきる・うまれる',
    meaning: 'life / birth',
    examples: [
      { word: '学生', reading: 'がくせい', translation: 'student' },
      { word: '先生', reading: 'せんせい', translation: 'teacher' },
      { word: '生まれる', reading: 'うまれる', translation: 'to be born' }
    ]
  },
  '学': {
    character: '学',
    onyomi: 'ガク',
    kunyomi: 'まなぶ',
    meaning: 'study / learn',
    examples: [
      { word: '学校', reading: 'がっこう', translation: 'school' },
      { word: '学生', reading: 'がくせい', translation: 'student' },
      { word: '大学', reading: 'だいがく', translation: 'university' }
    ]
  },
  '校': {
    character: '校',
    onyomi: 'コウ',
    kunyomi: '—',
    meaning: 'school',
    examples: [
      { word: '学校', reading: 'がっこう', translation: 'school' },
      { word: '高校', reading: 'こうこう', translation: 'high school' },
      { word: '校長', reading: 'こうちょう', translation: 'principal' }
    ]
  },
  '友': {
    character: '友',
    onyomi: 'ユウ',
    kunyomi: 'とも',
    meaning: 'friend',
    examples: [
      { word: '友だち', reading: 'ともだち', translation: 'friend' },
      { word: '友人', reading: 'ゆうじん', translation: 'friend' },
      { word: '親友', reading: 'しんゆう', translation: 'best friend' }
    ]
  },
  '本': {
    character: '本',
    onyomi: 'ホン',
    kunyomi: 'もと',
    meaning: 'book / origin',
    examples: [
      { word: '日本', reading: 'にほん', translation: 'Japan' },
      { word: '本', reading: 'ほん', translation: 'book' },
      { word: '本当', reading: 'ほんとう', translation: 'really' }
    ]
  },
  '毎': {
    character: '毎',
    onyomi: 'マイ',
    kunyomi: '—',
    meaning: 'every',
    examples: [
      { word: '毎日', reading: 'まいにち', translation: 'every day' },
      { word: '毎週', reading: 'まいしゅう', translation: 'every week' },
      { word: '毎年', reading: 'まいとし', translation: 'every year' }
    ]
  },
  '何': {
    character: '何',
    onyomi: 'カ',
    kunyomi: 'なに・なん',
    meaning: 'what',
    examples: [
      { word: '何ですか', reading: 'なんですか', translation: 'what is it?' },
      { word: '何', reading: 'なに', translation: 'what' },
      { word: '何時', reading: 'なんじ', translation: 'what time' }
    ]
  },

  // Lesson 6
  '前': {
    character: '前',
    onyomi: 'ゼン',
    kunyomi: 'まえ',
    meaning: 'before / front',
    examples: [
      { word: '午前', reading: 'ごぜん', translation: 'morning / AM' },
      { word: '前', reading: 'まえ', translation: 'front' },
      { word: '名前', reading: 'なまえ', translation: 'name' }
    ]
  },
  '後': {
    character: '後',
    onyomi: 'ゴ・コウ',
    kunyomi: 'あと・うしろ',
    meaning: 'after / back',
    examples: [
      { word: '午後', reading: 'ごご', translation: 'afternoon / PM' },
      { word: '後ろ', reading: 'うしろ', translation: 'behind' },
      { word: '後で', reading: 'あとで', translation: 'later' }
    ]
  },
  '外': {
    character: '外',
    onyomi: 'ガイ・ゲ',
    kunyomi: 'そと',
    meaning: 'outside',
    examples: [
      { word: '外国', reading: 'がいこく', translation: 'foreign country' },
      { word: '外', reading: 'そと', translation: 'outside' },
      { word: '海外', reading: 'かいがい', translation: 'overseas' }
    ]
  },
  '左': {
    character: '左',
    onyomi: 'サ',
    kunyomi: 'ひだり',
    meaning: 'left',
    examples: [
      { word: '左', reading: 'ひだり', translation: 'left' },
      { word: '左手', reading: 'ひだりて', translation: 'left hand' },
      { word: '左右', reading: 'さゆう', translation: 'left and right' }
    ]
  },
  '右': {
    character: '右',
    onyomi: 'ウ・ユウ',
    kunyomi: 'みぎ',
    meaning: 'right',
    examples: [
      { word: '右', reading: 'みぎ', translation: 'right' },
      { word: '右手', reading: 'みぎて', translation: 'right hand' },
      { word: '左右', reading: 'さゆう', translation: 'left and right' }
    ]
  },
  '東': {
    character: '東',
    onyomi: 'トウ',
    kunyomi: 'ひがし',
    meaning: 'east',
    examples: [
      { word: '東京', reading: 'とうきょう', translation: 'Tokyo' },
      { word: '東', reading: 'ひがし', translation: 'east' },
      { word: '関東', reading: 'かんとう', translation: 'Kanto region' }
    ]
  },
  '西': {
    character: '西',
    onyomi: 'セイ・サイ',
    kunyomi: 'にし',
    meaning: 'west',
    examples: [
      { word: '西', reading: 'にし', translation: 'west' },
      { word: '関西', reading: 'かんさい', translation: 'Kansai region' },
      { word: '東西', reading: 'とうざい', translation: 'east and west' }
    ]
  },
  '南': {
    character: '南',
    onyomi: 'ナン',
    kunyomi: 'みなみ',
    meaning: 'south',
    examples: [
      { word: '南', reading: 'みなみ', translation: 'south' },
      { word: '南口', reading: 'みなみぐち', translation: 'south exit' },
      { word: '南北', reading: 'なんぼく', translation: 'north and south' }
    ]
  },
  '北': {
    character: '北',
    onyomi: 'ホク',
    kunyomi: 'きた',
    meaning: 'north',
    examples: [
      { word: '北', reading: 'きた', translation: 'north' },
      { word: '北口', reading: 'きたぐち', translation: 'north exit' },
      { word: '東北', reading: 'とうほく', translation: 'Tohoku region' }
    ]
  },
  '名': {
    character: '名',
    onyomi: 'メイ・ミョウ',
    kunyomi: 'な',
    meaning: 'name',
    examples: [
      { word: '名前', reading: 'なまえ', translation: 'name' },
      { word: '名古屋', reading: 'なごや', translation: 'Nagoya' },
      { word: '有名', reading: 'ゆうめい', translation: 'famous' }
    ]
  },

  // Lesson 7
  '牛': {
    character: '牛',
    onyomi: 'ギュウ',
    kunyomi: 'うし',
    meaning: 'cow',
    examples: [
      { word: '牛肉', reading: 'ぎゅうにく', translation: 'beef' },
      { word: '牛', reading: 'うし', translation: 'cow' },
      { word: '牛乳', reading: 'ぎゅうにゅう', translation: 'milk' }
    ]
  },
  '馬': {
    character: '馬',
    onyomi: 'バ',
    kunyomi: 'うま',
    meaning: 'horse',
    examples: [
      { word: '馬', reading: 'うま', translation: 'horse' },
      { word: '馬車', reading: 'ばしゃ', translation: 'horse carriage' },
      { word: '競馬', reading: 'けいば', translation: 'horse racing' }
    ]
  },
  '魚': {
    character: '魚',
    onyomi: 'ギョ',
    kunyomi: 'さかな',
    meaning: 'fish',
    examples: [
      { word: '魚', reading: 'さかな', translation: 'fish' },
      { word: '金魚', reading: 'きんぎょ', translation: 'goldfish' },
      { word: '魚屋', reading: 'さかなや', translation: 'fish shop' }
    ]
  },
  '貝': {
    character: '貝',
    onyomi: 'バイ',
    kunyomi: 'かい',
    meaning: 'shellfish',
    examples: [
      { word: '貝', reading: 'かい', translation: 'shell' },
      { word: '貝殻', reading: 'かいがら', translation: 'seashell' },
      { word: '貝類', reading: 'かいるい', translation: 'shellfish' }
    ]
  },
  '雨': {
    character: '雨',
    onyomi: 'ウ',
    kunyomi: 'あめ',
    meaning: 'rain',
    examples: [
      { word: '雨', reading: 'あめ', translation: 'rain' },
      { word: '雨天', reading: 'うてん', translation: 'rainy weather' },
      { word: '梅雨', reading: 'つゆ', translation: 'rainy season' }
    ]
  },
  '天': {
    character: '天',
    onyomi: 'テン',
    kunyomi: 'あま',
    meaning: 'heaven / sky',
    examples: [
      { word: '天気', reading: 'てんき', translation: 'weather' },
      { word: '天国', reading: 'てんごく', translation: 'heaven' },
      { word: '天才', reading: 'てんさい', translation: 'genius' }
    ]
  },
  '気': {
    character: '気',
    onyomi: 'キ・ケ',
    kunyomi: '—',
    meaning: 'spirit / energy',
    examples: [
      { word: '元気', reading: 'げんき', translation: 'healthy/energetic' },
      { word: '天気', reading: 'てんき', translation: 'weather' },
      { word: '気分', reading: 'きぶん', translation: 'mood' }
    ]
  },
  '車': {
    character: '車',
    onyomi: 'シャ',
    kunyomi: 'くるま',
    meaning: 'car',
    examples: [
      { word: '電車', reading: 'でんしゃ', translation: 'train' },
      { word: '車', reading: 'くるま', translation: 'car' },
      { word: '自転車', reading: 'じてんしゃ', translation: 'bicycle' }
    ]
  },
  '門': {
    character: '門',
    onyomi: 'モン',
    kunyomi: 'かど',
    meaning: 'gate',
    examples: [
      { word: '専門', reading: 'せんもん', translation: 'specialty' },
      { word: '門', reading: 'もん', translation: 'gate' },
      { word: '正門', reading: 'せいもん', translation: 'main gate' }
    ]
  },
  '午': {
    character: '午',
    onyomi: 'ゴ',
    kunyomi: '—',
    meaning: 'noon',
    examples: [
      { word: '午前', reading: 'ごぜん', translation: 'morning / AM' },
      { word: '午後', reading: 'ごご', translation: 'afternoon / PM' },
      { word: '正午', reading: 'しょうご', translation: 'noon' }
    ]
  },

  // Lesson 8
  '大': {
    character: '大',
    onyomi: 'ダイ・タイ',
    kunyomi: 'おおきい',
    meaning: 'big',
    examples: [
      { word: '大きい', reading: 'おおきい', translation: 'big' },
      { word: '大学', reading: 'だいがく', translation: 'university' },
      { word: '大好き', reading: 'だいすき', translation: 'love very much' }
    ]
  },
  '小': {
    character: '小',
    onyomi: 'ショウ',
    kunyomi: 'ちいさい',
    meaning: 'small',
    examples: [
      { word: '小さい', reading: 'ちいさい', translation: 'small' },
      { word: '小学校', reading: 'しょうがっこう', translation: 'elementary school' },
      { word: '小説', reading: 'しょうせつ', translation: 'novel' }
    ]
  },
  '高': {
    character: '高',
    onyomi: 'コウ',
    kunyomi: 'たかい',
    meaning: 'tall / expensive',
    examples: [
      { word: '高い', reading: 'たかい', translation: 'tall/expensive' },
      { word: '高校', reading: 'こうこう', translation: 'high school' },
      { word: '最高', reading: 'さいこう', translation: 'best/highest' }
    ]
  },
  '安': {
    character: '安',
    onyomi: 'アン',
    kunyomi: 'やすい',
    meaning: 'cheap / peace',
    examples: [
      { word: '安い', reading: 'やすい', translation: 'cheap' },
      { word: '安心', reading: 'あんしん', translation: 'peace of mind' },
      { word: '安全', reading: 'あんぜん', translation: 'safe' }
    ]
  },
  '新': {
    character: '新',
    onyomi: 'シン',
    kunyomi: 'あたらしい',
    meaning: 'new',
    examples: [
      { word: '新しい', reading: 'あたらしい', translation: 'new' },
      { word: '新幹線', reading: 'しんかんせん', translation: 'bullet train' },
      { word: '新聞', reading: 'しんぶん', translation: 'newspaper' }
    ]
  },
  '古': {
    character: '古',
    onyomi: 'コ',
    kunyomi: 'ふるい',
    meaning: 'old',
    examples: [
      { word: '古い', reading: 'ふるい', translation: 'old' },
      { word: '中古', reading: 'ちゅうこ', translation: 'used/secondhand' },
      { word: '古本', reading: 'ふるほん', translation: 'used book' }
    ]
  },
  '長': {
    character: '長',
    onyomi: 'チョウ',
    kunyomi: 'ながい',
    meaning: 'long',
    examples: [
      { word: '長い', reading: 'ながい', translation: 'long' },
      { word: '社長', reading: 'しゃちょう', translation: 'company president' },
      { word: '校長', reading: 'こうちょう', translation: 'principal' }
    ]
  },
  '多': {
    character: '多',
    onyomi: 'タ',
    kunyomi: 'おおい',
    meaning: 'many',
    examples: [
      { word: '多い', reading: 'おおい', translation: 'many' },
      { word: '多分', reading: 'たぶん', translation: 'probably' },
      { word: '多数', reading: 'たすう', translation: 'many/majority' }
    ]
  },
  '少': {
    character: '少',
    onyomi: 'ショウ',
    kunyomi: 'すくない・すこし',
    meaning: 'few / little',
    examples: [
      { word: '少ない', reading: 'すくない', translation: 'few' },
      { word: '少し', reading: 'すこし', translation: 'a little' },
      { word: '少年', reading: 'しょうねん', translation: 'boy/youth' }
    ]
  },
  '早': {
    character: '早',
    onyomi: 'ソウ・サッ',
    kunyomi: 'はやい',
    meaning: 'early',
    examples: [
      { word: '早い', reading: 'はやい', translation: 'early' },
      { word: '早く', reading: 'はやく', translation: 'early/quickly' },
      { word: '早朝', reading: 'そうちょう', translation: 'early morning' }
    ]
  },

  // Lesson 9
  '行': {
    character: '行',
    onyomi: 'コウ・ギョウ',
    kunyomi: 'いく・おこなう',
    meaning: 'go',
    examples: [
      { word: '行きます', reading: 'いきます', translation: 'to go' },
      { word: '旅行', reading: 'りょこう', translation: 'trip' },
      { word: '銀行', reading: 'ぎんこう', translation: 'bank' }
    ]
  },
  '来': {
    character: '来',
    onyomi: 'ライ',
    kunyomi: 'くる',
    meaning: 'come',
    examples: [
      { word: '来ます', reading: 'きます', translation: 'to come' },
      { word: '来年', reading: 'らいねん', translation: 'next year' },
      { word: '来週', reading: '��いしゅう', translation: 'next week' }
    ]
  },
  '食': {
    character: '食',
    onyomi: 'ショク',
    kunyomi: 'たべる',
    meaning: 'eat',
    examples: [
      { word: '食べます', reading: 'たべます', translation: 'to eat' },
      { word: '食事', reading: 'しょくじ', translation: 'meal' },
      { word: '朝食', reading: 'ちょうしょく', translation: 'breakfast' }
    ]
  },
  '見': {
    character: '見',
    onyomi: 'ケン',
    kunyomi: 'みる',
    meaning: 'see / look',
    examples: [
      { word: '見ます', reading: 'みます', translation: 'to see/watch' },
      { word: '見物', reading: 'けんぶつ', translation: 'sightseeing' },
      { word: '意見', reading: 'いけん', translation: 'opinion' }
    ]
  },
  '入': {
    character: '入',
    onyomi: 'ニュウ',
    kunyomi: 'いる・はいる',
    meaning: 'enter / put in',
    examples: [
      { word: '入ります', reading: 'はいります', translation: 'to enter' },
      { word: '入口', reading: 'いりぐち', translation: 'entrance' },
      { word: '入学', reading: 'にゅうがく', translation: 'school entrance' }
    ]
  },
  '出': {
    character: '出',
    onyomi: 'シュツ',
    kunyomi: 'でる・だす',
    meaning: 'exit / leave',
    examples: [
      { word: '出ます', reading: 'でます', translation: 'to go out/leave' },
      { word: '出口', reading: 'でぐち', translation: 'exit' },
      { word: '出発', reading: 'しゅっぱつ', translation: 'departure' }
    ]
  },
  '立': {
    character: '立',
    onyomi: 'リツ',
    kunyomi: 'たつ',
    meaning: 'stand',
    examples: [
      { word: '立ちます', reading: 'たちます', translation: 'to stand' },
      { word: '国立', reading: 'こくりつ', translation: 'national' },
      { word: '立派', reading: 'りっぱ', translation: 'splendid' }
    ]
  },
  '書': {
    character: '書',
    onyomi: 'ショ',
    kunyomi: 'かく',
    meaning: 'write',
    examples: [
      { word: '書きます', reading: 'かきます', translation: 'to write' },
      { word: '書類', reading: 'しょるい', translation: 'documents' },
      { word: '辞書', reading: 'じしょ', translation: 'dictionary' }
    ]
  },
  '言': {
    character: '言',
    onyomi: 'ゲン・ゴン',
    kunyomi: 'いう',
    meaning: 'say',
    examples: [
      { word: '言います', reading: 'いいます', translation: 'to say' },
      { word: '言葉', reading: 'ことば', translation: 'word/language' },
      { word: '伝言', reading: 'でんごん', translation: 'message' }
    ]
  },
  '飲': {
    character: '飲',
    onyomi: 'イン',
    kunyomi: 'のむ',
    meaning: 'drink',
    examples: [
      { word: '飲みます', reading: 'のみます', translation: 'to drink' },
      { word: '飲み物', reading: 'のみもの', translation: 'beverage' },
      { word: '飲料', reading: 'いんりょう', translation: 'drink/beverage' }
    ]
  },

  // Lesson 10
  '話': {
    character: '話',
    onyomi: 'ワ',
    kunyomi: 'はなす',
    meaning: 'talk',
    examples: [
      { word: '話します', reading: 'はなします', translation: 'to talk/speak' },
      { word: '電話', reading: 'でんわ', translation: 'telephone' },
      { word: '会話', reading: 'かいわ', translation: 'conversation' }
    ]
  },
  '読': {
    character: '読',
    onyomi: 'ドク',
    kunyomi: 'よむ',
    meaning: 'read',
    examples: [
      { word: '読みます', reading: 'よみます', translation: 'to read' },
      { word: '読書', reading: 'どくしょ', translation: 'reading' },
      { word: '音読', reading: 'おんどく', translation: 'reading aloud' }
    ]
  },
  '語': {
    character: '語',
    onyomi: 'ゴ',
    kunyomi: 'かたる',
    meaning: 'language',
    examples: [
      { word: '日本語', reading: 'にほんご', translation: 'Japanese language' },
      { word: '英語', reading: 'えいご', translation: 'English language' },
      { word: '語学', reading: 'ごがく', translation: 'language study' }
    ]
  },
  '聞': {
    character: '聞',
    onyomi: 'ブン・モン',
    kunyomi: 'きく',
    meaning: 'listen',
    examples: [
      { word: '聞きます', reading: 'ききます', translation: 'to hear/listen' },
      { word: '新聞', reading: 'しんぶん', translation: 'newspaper' },
      { word: '聞こえる', reading: 'きこえる', translation: 'to be audible' }
    ]
  },
  '間': {
    character: '間',
    onyomi: 'カン・ケン',
    kunyomi: 'あいだ・ま',
    meaning: 'interval / time',
    examples: [
      { word: '時間', reading: 'じかん', translation: 'time' },
      { word: '間', reading: 'あいだ', translation: 'between' },
      { word: '人間', reading: 'にんげん', translation: 'human' }
    ]
  },
  '買': {
    character: '買',
    onyomi: 'バイ',
    kunyomi: 'かう',
    meaning: 'buy',
    examples: [
      { word: '買います', reading: 'かいます', translation: 'to buy' },
      { word: '買い物', reading: 'かいもの', translation: 'shopping' },
      { word: '売買', reading: 'ばいばい', translation: 'buying and selling' }
    ]
  },
  '休': {
    character: '休',
    onyomi: 'キュウ',
    kunyomi: 'やすむ',
    meaning: 'rest',
    examples: [
      { word: '休みます', reading: 'やすみます', translation: 'to rest' },
      { word: '休み', reading: 'やすみ', translation: 'holiday/break' },
      { word: '休日', reading: 'きゅうじつ', translation: 'holiday' }
    ]
  },
  '時': {
    character: '時',
    onyomi: 'ジ',
    kunyomi: 'とき',
    meaning: 'time / hour',
    examples: [
      { word: '一時', reading: 'いちじ', translation: 'one o\'clock' },
      { word: '時間', reading: 'じかん', translation: 'time' },
      { word: '時々', reading: 'ときどき', translation: 'sometimes' }
    ]
  },
  '週': {
    character: '週',
    onyomi: 'シュウ',
    kunyomi: '—',
    meaning: 'week',
    examples: [
      { word: '今週', reading: 'こんしゅう', translation: 'this week' },
      { word: '来週', reading: 'らいしゅう', translation: 'next week' },
      { word: '週末', reading: 'しゅうまつ', translation: 'weekend' }
    ]
  },
  '道': {
    character: '道',
    onyomi: 'ドウ',
    kunyomi: 'みち',
    meaning: 'road / way',
    examples: [
      { word: '道', reading: 'みち', translation: 'road' },
      { word: '北海道', reading: 'ほっかいどう', translation: 'Hokkaido' },
      { word: '歩道', reading: 'ほどう', translation: 'sidewalk' }
    ]
  },

  // Lesson 11
  '今': {
    character: '今',
    onyomi: 'コン・キン',
    kunyomi: 'いま',
    meaning: 'now',
    examples: [
      { word: '今', reading: 'いま', translation: 'now' },
      { word: '今日', reading: 'きょう', translation: 'today' },
      { word: '今年', reading: 'ことし', translation: 'this year' }
    ]
  },
  '会': {
    character: '会',
    onyomi: 'カイ・エ',
    kunyomi: 'あう',
    meaning: 'meet',
    examples: [
      { word: '会います', reading: 'あいます', translation: 'to meet' },
      { word: '会社', reading: 'かいしゃ', translation: 'company' },
      { word: '会話', reading: 'かいわ', translation: 'conversation' }
    ]
  },
  '社': {
    character: '社',
    onyomi: 'シャ',
    kunyomi: 'やしろ',
    meaning: 'company / shrine',
    examples: [
      { word: '会社', reading: 'かいしゃ', translation: 'company' },
      { word: '社長', reading: 'しゃちょう', translation: 'company president' },
      { word: '神社', reading: 'じんじゃ', translation: 'Shinto shrine' }
    ]
  },
  '店': {
    character: '店',
    onyomi: 'テン',
    kunyomi: 'みせ',
    meaning: 'shop / store',
    examples: [
      { word: '店', reading: 'みせ', translation: 'shop' },
      { word: '店員', reading: 'てんいん', translation: 'shop clerk' },
      { word: '書店', reading: 'しょてん', translation: 'bookstore' }
    ]
  },
  '駅': {
    character: '駅',
    onyomi: 'エキ',
    kunyomi: '—',
    meaning: 'station',
    examples: [
      { word: '駅', reading: 'えき', translation: 'station' },
      { word: '駅前', reading: 'えきまえ', translation: 'in front of station' },
      { word: '東京駅', reading: 'とうきょうえき', translation: 'Tokyo Station' }
    ]
  },
  '国': {
    character: '国',
    onyomi: 'コク',
    kunyomi: 'くに',
    meaning: 'country',
    examples: [
      { word: '国', reading: 'くに', translation: 'country' },
      { word: '外国', reading: 'がいこく', translation: 'foreign country' },
      { word: '中国', reading: 'ちゅうごく', translation: 'China' }
    ]
  },
  '白': {
    character: '白',
    onyomi: 'ハク',
    kunyomi: 'しろ・しら',
    meaning: 'white',
    examples: [
      { word: '白い', reading: 'しろい', translation: 'white' },
      { word: '白', reading: 'しろ', translation: 'white' },
      { word: '白黒', reading: 'しろくろ', translation: 'black and white' }
    ]
  },
  '花': {
    character: '花',
    onyomi: 'カ',
    kunyomi: 'はな',
    meaning: 'flower',
    examples: [
      { word: '花', reading: 'はな', translation: 'flower' },
      { word: '花火', reading: 'はなび', translation: 'fireworks' },
      { word: '花見', reading: 'はなみ', translation: 'cherry blossom viewing' }
    ]
  },
  '空': {
    character: '空',
    onyomi: 'クウ',
    kunyomi: 'そら',
    meaning: 'sky',
    examples: [
      { word: '空', reading: 'そら', translation: 'sky' },
      { word: '空港', reading: 'くうこう', translation: 'airport' },
      { word: '青空', reading: 'あおぞら', translation: 'blue sky' }
    ]
  },
  '電': {
    character: '電',
    onyomi: 'デン',
    kunyomi: '—',
    meaning: 'electricity',
    examples: [
      { word: '電話', reading: 'でんわ', translation: 'telephone' },
      { word: '電車', reading: 'でんしゃ', translation: 'train' },
      { word: '電気', reading: 'でんき', translation: 'electricity' }
    ]
  }
};

// Get all unique kanji from lessons
export const allKanji = Array.from(new Set(lessons.flatMap(lesson => lesson.kanji)));
