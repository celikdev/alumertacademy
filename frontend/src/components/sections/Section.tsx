import { ComputerIcon, TrustIcon, UserGroupIcon } from "../../assets/icons";

const Online = () => {
  const cardData = [
    {
      title: "Yüz Yüze Eğitim",
      description:
        "Yüz yüze eğitimlerimizde öğrencilerimizle birebir ilgilenerek onların satrançta ilerlemelerini sağlıyoruz.",
      icon: UserGroupIcon,
    },
    {
      title: "Online Eğitim",
      description:
        "Online eğitimlerimizde öğrencilerimizle online platformlar üzerinden dersler yapıyoruz.",
      icon: ComputerIcon,
    },
    {
      title: "Online Kurs",
      description:
        "Online kurslarımızda öğrencilerimiz satranç oyununu öğrenerek ilerliyorlar. ",
      icon: TrustIcon,
    },
  ];
  return (
    <div
      className="bg-[url('assets/images/bg-image.png')] w-full flex flex-col items-center justify-between md:py-40 py-10
    bg-cover bg-center bg-no-repeat"
    >
      <div className=" h-1/2 flex items-end justify-center md:justify-end lg:px-60 md:px-20 md:w-full">
        <div className="w-4/5 md:w-3/5 flex flex-col gap-4">
          <h1 className="font-extrabold xl:text-5xl lg:text-4xl md:text-5xl text-2xl text-white drop-shadow-2xl">
            Deneyimli Eğitmenler İle Satrançta Başarının Tek Adresi
          </h1>
          <p className="text-white font-semibold">
            Başlangıç seviyesinden, ileri seviyeye kadar derslerimiz ve alanında
            uzman eğitmenlerimiz ile başarı Alumert Academy'de!
          </p>
          <button className="border-blue-600 border-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm">
            Hemen Başla
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 container w-4/5 md:w-2/3 mx-auto items-center justify-center gap-4 py-10 mt-20">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full p-10 items-center bg-white gap-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-4"
            >
              <card.icon />
              <div className="flex flex-col items-center gap-4 h-1/2">
                <h2 className="text-black font-bold">{card.title}</h2>
                <p className="text-black text-center text-sm font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Online;
