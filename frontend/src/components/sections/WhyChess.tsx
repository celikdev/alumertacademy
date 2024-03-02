const WhyChess = () => {
  const whyChess = [
    {
      title: "Zihinsel Gelişim",
      description:
        "Satranç, çocukların zihinsel gelişimine katkıda bulunur. Zihinsel gelişim, çocukların problem çözme, kritik düşünme, odaklanma ve planlama yeteneklerini geliştirir.",
    },
    {
      title: "Strateji ve Planlama",
      description:
        "Satranç, çocuklara strateji ve planlama yapma yeteneği kazandırır. Bu sayede çocuklar, günlük hayatlarında karşılaşacakları sorunları daha iyi çözebilirler.",
    },
    {
      title: "Sosyal Beceriler",
      description:
        "Satranç, çocukların sosyal becerilerini geliştirmelerine yardımcı olur. Bu sayede çocuklar, sosyal yaşamlarında daha başarılı olabilirler.",
    },
  ];
  return (
    <div className="flex drop-shadow-2xl flex-col relative gap-10 bg-violet-400 p-8 rounded-3xl">
      <div>
        <h1 className="absolute font-bold text-8xl left-2 top-0 text-white select-none">
          *
        </h1>
        <h1 className="text-5xl font-extrabold px-10 py-4 z-10 w-1/3 text-white">
          Neden Satranç?
        </h1>
      </div>
      <div className="flex gap-4">
        {whyChess.map((item, index) => (
          <div
            key={index}
            className="w-1/3 kutu flex flex-col items-center gap-8 justify-center bg-gray-200 rounded-3xl p-10 transition-all duration-300 hover:bg-gray-100"
          >
            <div>
              <h2 className="text-7xl font-extrabold">{item.title}</h2>
            </div>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChess;
