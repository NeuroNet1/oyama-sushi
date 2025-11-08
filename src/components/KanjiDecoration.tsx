interface KanjiDecorationProps {
  className?: string;
}

export const KanjiDecoration = ({ className = "" }: KanjiDecorationProps) => {
  const kanjis = [
    { char: "食", translation: "food", position: "top-[8%] left-[5%]", color: "text-red-decoration/[0.2]" },
    { char: "味", translation: "taste", position: "top-[20%] right-[12%]", color: "text-red-decoration/[0.2]" },
    { char: "魚", translation: "fish", position: "top-[65%] left-[3%]", color: "text-red-decoration/[0.2]" },
    { char: "司", translation: "sushi", position: "bottom-[12%] right-[8%]", color: "text-red-decoration/[0.2]" },
    { char: "理", translation: "cuisine", position: "top-[42%] right-[25%]", color: "text-red-decoration/[0.02]" },
    { char: "飯", translation: "rice", position: "bottom-[35%] left-[10%]", color: "text-red-decoration/[0.2]" },
    { char: "鮮", translation: "fresh", position: "top-[32%] left-[25%]", color: "text-red-decoration/[0.2]" },
    { char: "旨", translation: "delicious", position: "bottom-[48%] right-[6%]", color: "text-red-decoration/[0.2]" },
    { char: "酒", translation: "sake", position: "top-[75%] right-[18%]", color: "text-red-decoration/[0.2]" },
    { char: "心", translation: "heart", position: "bottom-[23%] left-[25%]", color: "text-red-decoration/[0.2]" },
  ];

  const circles = [
    { position: "top-[20%] right-[25%]", size: "w-32 h-32" },
    { position: "bottom-[25%] left-[25%]", size: "w-24 h-24" },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Kanji characters */}
      {kanjis.map((kanji, index) => (
        <div
          key={`kanji-${index}`}
          className={`absolute ${kanji.position} ${kanji.color} font-serif text-7xl md:text-8xl animate-fade-in`}
          style={{ 
            animationDelay: `${index * 0.2}s`,
            writingMode: 'vertical-rl',
            textOrientation: 'upright'
          }}
          aria-hidden="true"
        >
          {kanji.char}
        </div>
      ))}
      
      {/* Decorative circles */}
      {circles.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.position} ${circle.size} border border-red-decoration/[0.03] rounded-full animate-fade-in`}
          style={{ animationDelay: `${(index + 3) * 0.3}s` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};
