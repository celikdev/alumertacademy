const VisionAndMission = () => {
  return (
    <div className="w-2/3 mx-auto flex gap-10 mb-20">
      <div className="w-1/2 p-4 rounded-lg border-[1px] bg-white border-primary relative">
        <div className="w-52 h-52 bg-primary rounded-full absolute -z-50 blur-3xl opacity-40 left-0 top-0" />
        <h1 className="text-sm w-full font-medium border-b-[1px] mb-4 text-primary border-primary">
          Misyon
        </h1>
        <h1 className="text-2xl font-bold  mb-2">Misyon</h1>
        <p className="text-sm font-semibold text-black/70">
          Profesyonel satranç eğitimi yoluyla zeki, bilgili ve düşünen bir
          gelecek yetiştirmektir. Bilişsel yetenekleri geliştirmek, stratejik
          düşünmeyi geliştirmek ve satranç tahtasının ötesine geçen değerli
          yaşam becerileri aşılamak için satrancın gücüne inanıyoruz!
        </p>
      </div>
      <div className="w-1/2 p-4 rounded-lg border-[1px] bg-white border-orange-400 relative">
        <div className="w-52 h-52 bg-orange-400 rounded-full absolute -z-50 blur-3xl opacity-40 right-0" />
        <h1 className="text-sm w-full font-medium border-b-[1px] mb-4 text-orange-400 border-orange-400">
          Vizyon
        </h1>
        <h1 className="text-2xl font-bold mb-2">Vizyon</h1>
        <p className="text-sm font-semibold text-black/70">
          Alumert Academy olarak satrancın sadece bir oyun değil, bir yaşam
          tarzı ve kişisel gelişim aracı olarak kabul edildiği bir dünya
          yaratmayı ve insanların satrançla tanışmasını ve bu oyunun sağladığı
          değerleri keşfetmesini hedefliyoruz.
        </p>
      </div>
    </div>
  );
};

export default VisionAndMission;
