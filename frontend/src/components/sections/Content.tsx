const Content = () => {
  return (
    <div className="w-2/3 mx-auto flex gap-4 justify-between">
      {/* <Title title="Derslerimiz" />
      <div className="flex flex-col md:flex-row gap-10">
        {isLoading ? (
          <div className="w-full flex items-center justify-center">
            <HashLoader color="#2563EB" size={32} />
          </div>
        ) : (
          data?.data
            .slice(Math.max(data.data.length - 3, 0), data.data.length)
            .map((ders: any) => (
              <div
                key={ders._id}
                className={`flex flex-col items-center p-4 rounded-md w-1/3 gap-4 shadow-2xl transition-colors duration-300 border-2 border-transparent hover:border-primary group`}
              >
                <img
                  src={ders.imageURL}
                  alt={ders.title}
                  className="w-4/6 transition-all duration-300 group-hover:scale-105"
                />
                <div className="flex items-center flex-col gap-2">
                  <h1 className="font-bold">{ders.title}</h1>
                  <Link
                    to={`/dersler}`}
                    className="border-2 px-8 py-2 rounded-lg text-sm font-semibold border-primary text-primary hover:bg-primary group-hover:bg-primary group-hover:text-white hover:text-white transition-all duration-300 ease-in-out"
                  >
                    Detay
                  </Link>
                </div>
              </div>
            ))
        )}
      </div> */}
      <div className="w-1/2">
        <img
          src="
          https://placehold.co/600x400
        "
          alt="derslerImage"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-5xl font-bold">
          Evinizin Konforunda Premium Satranç Eğitimi!
        </h1>
        <p className="font-semibold text-black/50 text-sm">
          Evde, işte veya tatilde, yalnızca bir laptop, tablet veya telefon ile
          derslere katılabilir ve kaliteli satranç eğitiminize ara vermeden
          devam edebilirsiniz!
        </p>
        <button className="border-2 border-primary rounded-lg py-2 text-sm font-semibold transition-colors duration-300 hover:text-white hover:bg-primary">
          Derslerimize Göz Atın
        </button>
      </div>
    </div>
  );
};

export default Content;
