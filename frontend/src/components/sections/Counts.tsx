const Counts = () => {
  return (
    <div className="w-2/3 mx-auto bg-primary rounded-xl h-60 flex justify-between mb-20 drop-shadow-2xl shadow-inner items-center">
      <div className="w-1/2">
        <h1 className="text-lg font-bold text-white text-center">
          500’den fazla sporcuya satranç eğitimi vererek Milli Takım ve İl
          Şampiyonları yetiştirmenin haklı gururunu yaşıyoruz.
        </h1>
      </div>
      <div className="flex w-1/2 justify-center gap-10">
        <span className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-orange-200">500+</h1>
          <h1 className="font-semibold text-white/90">Başarılı Öğrenci</h1>
        </span>
        <span className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-orange-200">98%</h1>
          <h1 className="font-semibold text-white/90">Müşteri Memnuniyeti</h1>
        </span>
        <span className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-orange-200">350 Bin+</h1>
          <h1 className="font-semibold text-white/90">İzlenme</h1>
        </span>
      </div>
    </div>
  );
};

export default Counts;
