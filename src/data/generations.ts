export type Meme = {
  name: string;
  year: string;
  description: string;
  tag: string;
};

export type Generation = {
  id: string;
  label: string;
  years: string;
  emoji: string;
  color: string;
  image: string;
  tagline: string;
  desc: string;
  longDesc: string;
  memes: Meme[];
  phrases: string[];
  vibeCheck: string;
};

export const generations: Generation[] = [
  {
    id: "alpha",
    label: "Gen Alpha",
    years: "2013–н.в.",
    emoji: "🦕",
    color: "#ff6b35",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/9eaff6f1-97dd-496a-9eb6-e66576afb1f6.jpg",
    tagline: "Они родились с планшетом в руках",
    desc: "Живут в Roblox, говорят на языке, который не понимают родители.",
    longDesc: "Gen Alpha — первое поколение, которое никогда не знало мира без смартфонов и YouTube. Их мемы — это хаос во всей красе: абсурдные видео, skibidi-рефлексы и язык, на котором взрослые просто зависают. Если вы не знаете, что такое «rizz» или «no cap fr fr» — добро пожаловать в их мир.",
    memes: [
      { name: "Skibidi Toilet", year: "2023", description: "Анимационный сериал про головы в унитазах, захвативший умы детей всего мира. Родители в шоке, дети в восторге.", tag: "Вирусное" },
      { name: "Rizz", year: "2022", description: "Способность очаровывать людей без особых усилий. «W rizz» — высший комплимент от альфа-поколения.", tag: "Сленг" },
      { name: "Ohio = место зла", year: "2022", description: "Штат Огайо превратился в интернет-символ всего странного и жуткого. «Only in Ohio» — реакция на любую дичь.", tag: "Место" },
      { name: "NPC-поведение", year: "2023", description: "Человек, который ведёт себя как персонаж из видеоигры — предсказуемо и бездумно.", tag: "Концепт" },
      { name: "Grimace Shake", year: "2023", description: "McDonald's выпустил шейк, а TikTok превратил его в серию «смертей» — сотни видео с драматическим финалом.", tag: "Тренд" },
      { name: "Mewing", year: "2023", description: "Техника «правильного положения языка» для красивой челюсти, ставшая мемом о том, что молодёжь делает в тишине.", tag: "Лайфхак" },
    ],
    phrases: ["no cap fr fr", "slay", "rizz", "bussin", "it's giving...", "understood the assignment", "rent free"],
    vibeCheck: "Полный хаос, максимальная энергия, ноль контекста — и это нормально.",
  },
  {
    id: "genz",
    label: "Gen Z",
    years: "1997–2012",
    emoji: "💀",
    color: "#a855f7",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/7fc197d1-38ba-4a28-9095-4e765a03a2f8.jpg",
    tagline: "Ирония — их родной язык",
    desc: "Никогда не знаешь: смеются или плачут. Скорее всего — и то, и другое.",
    longDesc: "Gen Z вырос в эпоху кризисов и соцсетей. Их юмор — это защитный механизм: если смеяться над болью, она не так больно. Их мемы многослойны, часто абсурдны и требуют контекста. «Я умер» — значит смешно. Череп 💀 — значит очень смешно.",
    memes: [
      { name: "Brainrot", year: "2024", description: "Состояние мозга после часов в TikTok. Когда реальность кажется скучной по сравнению с лентой.", tag: "Состояние" },
      { name: "Delulu", year: "2023", description: "Сокращение от «delusional» — человек, живущий в выдуманном мире. «Delulu is the solulu» стало мантрой оптимистов.", tag: "Сленг" },
      { name: "Roman Empire", year: "2023", description: "Мужчины якобы думают о Римской Империи несколько раз в день. Тренд разоблачил странные навязчивые темы у всех.", tag: "Тренд" },
      { name: "Girl dinner", year: "2023", description: "Ужин из случайных продуктов — сыр, крекеры, виноград. Не готовить, но и не голодать.", tag: "Лайфстайл" },
      { name: "Understood the assignment", year: "2021", description: "Комплимент тому, кто идеально справился с задачей или выглядел точно как надо.", tag: "Фраза" },
      { name: "That's so real", year: "2022", description: "Максимальное подтверждение чужих слов. «Это так верно, что я не могу добавить ничего».", tag: "Реакция" },
    ],
    phrases: ["💀", "it's giving main character", "no thoughts head empty", "core memory", "that hits different", "understood the assignment"],
    vibeCheck: "Депрессия с юмором, тревога с эстетикой, ирония как броня.",
  },
  {
    id: "millennial",
    label: "Миллениалы",
    years: "1981–1996",
    emoji: "😂",
    color: "#3b82f6",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/72a62fe9-3ca1-481a-a67c-28bd4016e404.jpg",
    tagline: "Создатели интернет-культуры",
    desc: "Они изобрели мемы. Теперь их мемы называют «олдскул».",
    longDesc: "Миллениалы — поколение, которое застало оба мира: аналоговое детство и цифровую юность. Они создали мем-культуру, форумы, первые блоги и лол-кэты. Сейчас им 28–43, они платят ипотеку и ностальгируют по MSN Messenger, сочиняя шутки про авокадо-тосты.",
    memes: [
      { name: "Doge", year: "2013", description: "Сиба-ину с внутренним монологом на Comic Sans. «Wow. Such meme. Very iconic.» Один из самых живучих мемов всех времён.", tag: "Классика" },
      { name: "Rage Comics", year: "2008", description: "Серия лиц: Forever Alone, Trollface, Me Gusta. Целый язык эмоций для форумов до эпохи эмодзи.", tag: "Классика" },
      { name: "Success Kid", year: "2007", description: "Малыш с кулаком — символ маленькой победы над жизнью. До сих пор актуален.", tag: "Символ" },
      { name: "I can haz cheezburger", year: "2007", description: "Первый вирусный мем с котиком. Положил начало целой культуре лол-котов и сайту с миллионами подписчиков.", tag: "Легенда" },
      { name: "Харлем Шейк", year: "2013", description: "15 секунд нормы, потом — безумный танец всего офиса/школы/армии. Первый массовый видео-мем.", tag: "Тренд" },
      { name: "YOLO / SWAG", year: "2012", description: "You Only Live Once — оправдание любой глупости. Эпоха кепок козырьком назад и пика Дрейка.", tag: "Эпоха" },
    ],
    phrases: ["lol", "omg", "YOLO", "I can't even", "adulting is hard", "we don't talk about that", "throwback Thursday"],
    vibeCheck: "Ностальгия + ипотека + «помните Flash-игры?» + авокадо-тост.",
  },
  {
    id: "genx",
    label: "Gen X",
    years: "1965–1980",
    emoji: "🎸",
    color: "#10b981",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/6920ff0f-a05e-4812-852e-ad08d142a025.jpg",
    tagline: "Первые настоящие интернет-циники",
    desc: "Сарказм — их родной язык. Они видели всё и устали от всего.",
    longDesc: "Gen X вырос на панке, гранже и MTV. Они видели крах СССР, расцвет корпораций и начало интернета. Их реакция на всё — тихий сарказм и усталая усмешка. Они не жалуются публично — просто молча поставят facepalm и уйдут слушать Nirvana.",
    memes: [
      { name: "This Is Fine (dog)", year: "2013", description: "Пёс сидит в горящей комнате с кофе. «Всё нормально». Идеальная метафора жизни взрослого человека.", tag: "Философия" },
      { name: "Picard Facepalm", year: "2010", description: "Капитан Пикар прикрывает лицо рукой. Универсальная реакция на глупость — от политики до семейного чата.", tag: "Реакция" },
      { name: "Y U NO", year: "2010", description: "Злой персонаж с вопросом «почему ты не...». Первый мем для выражения праведного негодования.", tag: "Классика" },
      { name: "Forever Alone", year: "2010", description: "Грустное лицо одиночки. Gen X узнал себя в нём раньше всех остальных.", tag: "Сочувствие" },
      { name: "Deal With It", year: "2009", description: "Пиксельные очки медленно падают на нос. «Разберись с этим сам». Квинтэссенция Gen X-отношения к миру.", tag: "Отношение" },
      { name: "Что? (Confused Nick Young)", year: "2012", description: "Баскетболист в недоумении. Реакция на любую современную молодёжную культуру от человека за 40.", tag: "Реакция" },
    ],
    phrases: ["whatever", "talk to the hand", "as if", "don't have a cow", "been there, done that", "I'm fine 🔥"],
    vibeCheck: "Усталый сарказм, крепкий кофе, Nirvana в наушниках и притворное безразличие.",
  },
  {
    id: "boomer",
    label: "Бумеры",
    years: "1946–1964",
    emoji: "📺",
    color: "#f59e0b",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/0dd60c42-d925-42e0-a772-82bdda3776cf.jpg",
    tagline: "OK Boomer",
    desc: "Поставят лайк, напишут «Молодёжь не та», перешлют маме.",
    longDesc: "Бумеры — поколение экономического роста, телевидения и «главное — стабильность». Они пришли в интернет позже всех, но компенсировали это количеством. Их мемы — это вдохновляющие цитаты на фоне закатов, котики с надписями и цепочки писем «перешли 10 друзьям».",
    memes: [
      { name: "OK Boomer", year: "2019", description: "Универсальный ответ молодёжи на устаревшие взгляды. Стал символом межпоколенческого конфликта и был немедленно запрещён в нескольких компаниях.", tag: "Конфликт" },
      { name: "Цитаты на закате", year: "2010", description: "«Жизнь — это не ждать бури, а учиться танцевать под дождём» на фоне природы. Репостится тысячи раз в день.", tag: "Вдохновение" },
      { name: "Minions", year: "2013", description: "Жёлтые существа с мотивационными цитатами. Захватили Facebook-ленты бумеров и стали символом определённого типа юмора.", tag: "Символ" },
      { name: "Цепочки писем", year: "2000", description: "«Перешли 10 друзьям, иначе...». Первый вирусный контент до эпохи соцсетей. Бумеры создали его и продолжают практиковать.", tag: "Легенда" },
      { name: "Back in my day", year: "2008", description: "«А вот в моё время...» — начало любой лекции о том, как раньше было лучше/тяжелее/правильнее.", tag: "Ностальгия" },
      { name: "Have you tried turning it off and on again?", year: "2001", description: "Универсальный совет по IT-поддержке, ставший мемом о беспомощности перед технологиями.", tag: "Техника" },
    ],
    phrases: ["back in my day", "kids these days...", "I'm not racist, but...", "did you eat today?", "call me, не пиши"],
    vibeCheck: "Стабильность, традиции, вдохновляющие цитаты и полное непонимание TikTok.",
  },
];
