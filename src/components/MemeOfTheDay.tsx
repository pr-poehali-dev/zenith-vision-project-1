import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generations } from "@/data/generations";
import Icon from "@/components/ui/icon";

const getAllMemes = () => {
  const all: { meme: (typeof generations)[0]["memes"][0]; gen: (typeof generations)[0] }[] = [];
  generations.forEach((gen) => {
    gen.memes.forEach((meme) => {
      all.push({ meme, gen });
    });
  });
  return all;
};

const getDayIndex = () => {
  const start = new Date("2024-01-01").getTime();
  const now = new Date().getTime();
  const daysPassed = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const all = getAllMemes();
  return daysPassed % all.length;
};

const MemeOfTheDay = () => {
  const navigate = useNavigate();
  const all = useMemo(() => getAllMemes(), []);
  const todayIndex = useMemo(() => getDayIndex(), []);
  const { meme, gen } = all[todayIndex];

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `Мем дня: «${meme.name}» (${gen.label}, ${meme.year})\n${meme.description}\n\nУзнай больше на МемПедии!`;
    if (navigator.share) {
      navigator.share({ title: "МемПедия — Мем дня", text });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const today = new Date().toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="px-6 pb-20 max-w-5xl mx-auto">
      <div
        className="relative rounded-3xl border border-border overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${gen.color}15 0%, transparent 60%)` }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: gen.color }}
        />

        <div className="relative p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: `${gen.color}25`, color: gen.color }}
              >
                <Icon name="Flame" size={12} />
                Мем дня
              </div>
              <span className="text-xs text-muted-foreground">{today}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-card transition-colors text-sm text-foreground"
            >
              <Icon name={copied ? "Check" : "Share2"} size={14} />
              {copied ? "Скопировано!" : "Поделиться"}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{gen.emoji}</span>
                <div>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mb-1 inline-block"
                    style={{ background: `${gen.color}20`, color: gen.color }}
                  >
                    {meme.tag}
                  </div>
                  <div className="text-muted-foreground text-xs">{gen.label} · {meme.year}</div>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 leading-tight">
                {meme.name}
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                {meme.description}
              </p>

              <button
                onClick={() => navigate(`/generation/${gen.id}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: gen.color, color: "#0a0a0f" }}
              >
                Все мемы {gen.label}
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>

            <div className="w-full md:w-56 flex-shrink-0">
              <img
                src={gen.image}
                alt={gen.label}
                className="w-full h-48 md:h-56 object-cover rounded-2xl"
                style={{ boxShadow: `0 12px 40px ${gen.color}35` }}
              />
              <div className="mt-4 text-center">
                <div className="text-xs text-muted-foreground mb-2">Завтра будет новый мем</div>
                <div className="flex items-center justify-center gap-1">
                  {all.map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all"
                      style={{
                        width: i === todayIndex ? 16 : 4,
                        height: 4,
                        background: i === todayIndex ? gen.color : `${gen.color}40`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeOfTheDay;
