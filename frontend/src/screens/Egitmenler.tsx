import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Header, Title } from "../components";
import { useInstructorQuery } from "../services/query/instructor";

const Egitmenler = () => {
  const { data, isLoading } = useInstructorQuery();

  console.log(data);
  return (
    <div>
      <Header />
      <Container>
        <Title title="Eğitmenler" />
        <p className="font-semibold text-md mt-6">
          Bizler, satranç tutkusunu paylaşan ve öğrencilerimize bu heyecanı
          aşılamak için buradayız. Her biri kendi alanında uzmanlaşmış
          eğitmenlerimiz, derin bilgi birikimleri ve tutkularıyla öne çıkıyor.
          Öğrencilerimize sadece satranç stratejilerini ve taktiklerini
          öğretmekle kalmıyor, aynı zamanda onların potansiyellerini
          keşfetmelerine, özgüvenlerini artırmalarına ve satrançta daha da
          ilerlemelerine yardımcı oluyoruz. Tecrübelerimizi ve bilgi
          birikimimizi paylaşmaktan büyük keyif alıyoruz ve öğrencilerimizin
          başarılarına ortak olmaktan gurur duyuyoruz.
        </p>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {data?.data.map((egitmen: any) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={egitmen._id}
                className="flex flex-col items-center mt-6 p-4 rounded-lg transition-colors duration-300 gap-4 bg-gray-200 border-2 hover:border-primary h-96"
              >
                <LazyLoadImage
                  src={egitmen.imageURL}
                  alt={egitmen.title}
                  className=" rounded-md h-72 w-full object-contain"
                />
                <div className="flex flex-col text-center max-w-xs">
                  <h2 className="font-bold md:text-xl text-lg">
                    {egitmen.name}
                  </h2>
                  <h2 className="truncate font-semibold text-sm text-black/50">
                    {egitmen.description}
                  </h2>
                </div>
              </a>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Egitmenler;
