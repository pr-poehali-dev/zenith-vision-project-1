import ArcGalleryHero from "@/components/ArcGalleryHero";

const generations = [
  {
    label: "Gen Alpha",
    years: "2013–н.в.",
    emoji: "🦕",
    color: "#ff6b35",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/9eaff6f1-97dd-496a-9eb6-e66576afb1f6.jpg",
    memes: ["Skibidi Toilet", "Rizz", "Ohio = place of evil", "No cap fr fr"],
    desc: "Живут в Roblox, говорят на языке, который не понимают родители.",
  },
  {
    label: "Gen Z",
    years: "1997–2012",
    emoji: "💀",
    color: "#a855f7",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/7fc197d1-38ba-4a28-9095-4e765a03a2f8.jpg",
    memes: ["Brainrot", "Slay", "Delulu", "NPC behaviour", "That's so real"],
    desc: "Ironiya — eto ih yazyk. Никогда не знаешь: смеются или плачут.",
  },
  {
    label: "Миллениалы",
    years: "1981–1996",
    emoji: "😂",
    color: "#3b82f6",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/72a62fe9-3ca1-481a-a67c-28bd4016e404.jpg",
    memes: ["Doge", "Success Kid", "ЧСВ", "Rage Comics", "I can haz"],
    desc: "Создали интернет-культуру мемов. Теперь их мемы называют «олдскул».",
  },
  {
    label: "Gen X",
    years: "1965–1980",
    emoji: "🎸",
    color: "#10b981",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/6920ff0f-a05e-4812-852e-ad08d142a025.jpg",
    memes: ["This Is Fine (dog)", "Picard facepalm", "Y U NO", "Forever alone"],
    desc: "Сарказм — их родной язык. Первые настоящие интернет-циники.",
  },
  {
    label: "Бумеры",
    years: "1946–1964",
    emoji: "📺",
    color: "#f59e0b",
    image: "https://cdn.poehali.dev/projects/d3f06570-2115-411f-96cb-8eda841dae5a/files/0dd60c42-d925-42e0-a772-82bdda3776cf.jpg",
    memes: ["OK Boomer", "Back in my day", "Chain emails", "Minions quotes"],
    desc: "Поставят лайк, напишут «Молодёжь не та», перешлют маме.",
  },
];

const images = generations.map((g) => g.image);

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={130}
        cardSizeMd={105}
        cardSizeSm={82}
        className="pt-16 pb-0 md:pt-20 lg:pt-24"
        title="МемПедия"
        subtitle="Энциклопедия мемов для всех поколений. От бумеров до Gen Alpha — история интернет-культуры в одном месте."
        ctaPrimary="Исследовать мемы"
        ctaSecondary="По поколениям"
      />

      <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Поколения и их мемы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Каждое поколение говорит на своём языке. Мы собрали их все.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {generations.map((gen) => (
            <div
              key={gen.label}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
              style={{ boxShadow: `0 0 24px ${gen.color}22` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{gen.emoji}</span>
                <div>
                  <div className="font-bold text-lg text-foreground">{gen.label}</div>
                  <div className="text-xs text-muted-foreground">{gen.years}</div>
                </div>
                <div
                  className="ml-auto w-3 h-3 rounded-full"
                  style={{ background: gen.color }}
                />
              </div>

              <img
                src={gen.image}
                alt={gen.label}
                className="w-full h-36 object-cover rounded-xl"
              />

              <p className="text-sm text-muted-foreground">{gen.desc}</p>

              <div className="flex flex-wrap gap-2 mt-1">
                {gen.memes.map((meme) => (
                  <span
                    key={meme}
                    className="text-xs px-2 py-1 rounded-full border"
                    style={{ borderColor: gen.color, color: gen.color }}
                  >
                    {meme}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-muted-foreground text-sm border-t border-border">
        МемПедия — потому что мемы это серьёзно 💀
      </footer>
    </main>
  );
};

export default Index;
