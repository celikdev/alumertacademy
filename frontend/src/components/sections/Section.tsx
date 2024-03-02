import { ComputerIcon, TrustIcon, UserGroupIcon } from "../../assets/icons";
import Satranc from "../../assets/images/satranc.jpg";

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
      className="bg-[url('assets/images/bg-image.png')] w-full h-[100vh] flex flex-col items-center justify-between
    bg-cover bg-center bg-no-repeat"
    >
      <div className=" h-1/2 flex items-end justify-end px-60 w-full">
        <div className="w-3/5 flex flex-col gap-4">
          <h1 className="font-extrabold text-6xl text-white drop-shadow-2xl">
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
        <div className="grid grid-cols-3 container w-2/3 mx-auto items-center justify-center gap-4 py-10">
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
