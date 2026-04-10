import { useNavigate } from "react-router-dom";
import ArcGalleryHero from "@/components/ArcGalleryHero";
import MemeOfTheDay from "@/components/MemeOfTheDay";
import MemeSearch from "@/components/MemeSearch";
import { generations } from "@/data/generations";

const images = generations.map((g) => g.image);

const Index = () => {
  const navigate = useNavigate();

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

      <MemeOfTheDay />

      <MemeSearch />

      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Поколения и их мемы
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Каждое поколение говорит на своём языке. Мы собрали их все.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {generations.map((gen) => (
            <div
              key={gen.id}
              onClick={() => navigate(`/generation/${gen.id}`)}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200 cursor-pointer group"
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
                {gen.memes.slice(0, 4).map((meme) => (
                  <span
                    key={meme.name}
                    className="text-xs px-2 py-1 rounded-full border"
                    style={{ borderColor: gen.color, color: gen.color }}
                  >
                    {meme.name}
                  </span>
                ))}
              </div>

              <div
                className="mt-auto text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: gen.color }}
              >
                Читать подробнее →
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