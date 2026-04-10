import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { generations } from "@/data/generations";
import Icon from "@/components/ui/icon";

type Result = {
  meme: (typeof generations)[0]["memes"][0];
  gen: (typeof generations)[0];
};

const getAllMemes = (): Result[] => {
  const all: Result[] = [];
  generations.forEach((gen) => {
    gen.memes.forEach((meme) => all.push({ meme, gen }));
  });
  return all;
};

const ALL_MEMES = getAllMemes();

const MemeSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_MEMES.filter(
      ({ meme, gen }) =>
        meme.name.toLowerCase().includes(q) ||
        meme.description.toLowerCase().includes(q) ||
        meme.tag.toLowerCase().includes(q) ||
        gen.label.toLowerCase().includes(q) ||
        gen.phrases.some((p) => p.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="px-6 pb-16 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-foreground mb-2">
        Найди свой мем
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Вбей название, слово или фразу — найдём из любого поколения
      </p>

      <div className="relative max-w-xl mx-auto mb-8">
        <Icon
          name="Search"
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Doge, skibidi, YOLO, rizz..."
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>

      {query && results.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-4xl mb-3">🤷</div>
          <p>Ничего не нашли по запросу «{query}»</p>
          <p className="text-sm mt-1">Попробуй другое слово или имя мема</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map(({ meme, gen }, i) => (
            <div
              key={`${gen.id}-${meme.name}-${i}`}
              onClick={() => navigate(`/generation/${gen.id}`)}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4 cursor-pointer hover:scale-[1.02] transition-transform duration-200 group"
              style={{ boxShadow: `0 0 16px ${gen.color}18` }}
            >
              <img
                src={gen.image}
                alt={gen.label}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-bold text-foreground truncate">{meme.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: `${gen.color}20`, color: gen.color }}
                  >
                    {meme.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {meme.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>{gen.emoji}</span>
                  <span>{gen.label}</span>
                  <span>·</span>
                  <span>{meme.year}</span>
                  <span
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity font-semibold"
                    style={{ color: gen.color }}
                  >
                    Подробнее →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!query && (
        <div className="flex flex-wrap justify-center gap-2">
          {["Doge", "Rizz", "OK Boomer", "Brainrot", "Picard", "YOLO", "Skibidi", "Minions"].map((hint) => (
            <button
              key={hint}
              onClick={() => setQuery(hint)}
              className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
            >
              {hint}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default MemeSearch;
