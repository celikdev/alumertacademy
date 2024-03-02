import CategoryImage from "../../assets/images/category.png";

const Category = () => {
  return (
    <div className="w-2/3 mx-auto flex items-center">
      <div className=" flex flex-col gap-4">
        <h1 className="text-primary font-bold text-xs">ALUMERT ACADEMY</h1>
        <h1 className="text-4xl font-bold">
          Her Yaş Kategorisinde <br /> Profesyonel Satranç Eğitimi
        </h1>
        <p className="text-sm font-semibold">
          FIDE Master Orkun Efe ALUMERT ve birbirinden değerli eğitmen
          kadromuzla Türkiye'nin satranç vizyonuna yön veriyoruz.
          <br />
          <br />
          Siz veya çocuğunuz için en iyi satranç eğitimini arıyorsanız doğru
          adrestesiniz.
        </p>
        <button className="border-2 border-primary rounded-lg py-2 text-sm font-semibold transition-colors duration-300 hover:text-white hover:bg-primary">
          Hakkımızda
        </button>
      </div>
      <div className="">
        <img src={CategoryImage} alt="Category" className="scale-90" />
      </div>
    </div>
  );
};

export default Category;
