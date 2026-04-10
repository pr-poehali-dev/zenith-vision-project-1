import { useParams, useNavigate } from "react-router-dom";
import { generations } from "@/data/generations";
import Icon from "@/components/ui/icon";

const GenerationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gen = generations.find((g) => g.id === id);

  if (!gen) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-foreground">
        <div className="text-center">
          <div className="text-6xl mb-4">💀</div>
          <p className="text-muted-foreground">Поколение не найдено</p>
          <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 rounded-full border border-border hover:bg-accent transition-colors text-foreground">
            На главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${gen.color}18 0%, transparent 60%)` }}
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <Icon name="ArrowLeft" size={16} />
            <span className="text-sm">МемПедия</span>
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={gen.image}
              alt={gen.label}
              className="w-full md:w-64 h-52 md:h-64 object-cover rounded-3xl shadow-2xl flex-shrink-0"
              style={{ boxShadow: `0 20px 60px ${gen.color}40` }}
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-5xl">{gen.emoji}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${gen.color}25`, color: gen.color }}
                >
                  {gen.years}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-2">{gen.label}</h1>
              <p className="text-xl text-muted-foreground italic mb-4">«{gen.tagline}»</p>
              <p className="text-foreground leading-relaxed">{gen.longDesc}</p>

              <div
                className="mt-6 rounded-2xl px-5 py-4 border"
                style={{ borderColor: `${gen.color}40`, background: `${gen.color}10` }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: gen.color }}>
                  Вайб-чек поколения
                </div>
                <p className="text-sm text-foreground">{gen.vibeCheck}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Культовые мемы</h2>
        <p className="text-muted-foreground mb-8">Мемы, которые определили поколение</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {gen.memes.map((meme) => (
            <div
              key={meme.name}
              className="rounded-2xl border border-border bg-card p-5 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-lg leading-tight">{meme.name}</h3>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-xs text-muted-foreground">{meme.year}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${gen.color}20`, color: gen.color }}
                  >
                    {meme.tag}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{meme.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 mb-12">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>💬</span> Характерные фразы
          </h2>
          <div className="flex flex-wrap gap-3">
            {gen.phrases.map((phrase) => (
              <span
                key={phrase}
                className="px-4 py-2 rounded-full border text-sm font-medium"
                style={{ borderColor: `${gen.color}50`, color: gen.color, background: `${gen.color}10` }}
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">Другие поколения</h2>
        <div className="flex flex-wrap gap-3">
          {generations
            .filter((g) => g.id !== gen.id)
            .map((g) => (
              <button
                key={g.id}
                onClick={() => navigate(`/generation/${g.id}`)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-card transition-colors text-sm"
              >
                <span>{g.emoji}</span>
                <span>{g.label}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GenerationPage;
