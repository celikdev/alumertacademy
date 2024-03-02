import { Header, Title } from "../components";
import { Container } from "../components/";
import { useLessonQuery } from "../services/query/lesson";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Dersler = () => {
  const { data, isLoading } = useLessonQuery();

  return (
    <div>
      <Header />
      <Container>
        <Title title="Dersler" />
        <p className="font-semibold text-md mt-6">
          Uzman eğitmenlerimiz, her yaş grubundan öğrencilere özel dersler sunar
          ve her seviyeye uygun bir öğrenme deneyimi sağlar. Stratejilerin,
          taktiklerin ve satrancın inceliklerini keşfetmek için buradayız.
          Eğitim materyallerimiz ve interaktif derslerimizle, satrancı daha iyi
          anlamanıza ve ustalaşmanıza yardımcı olmak için yanınızdayız.
          Kendinizi geliştirmek ve satranç dünyasında ilerlemek için bize
          katılın.
        </p>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {data?.data.map((ders: any) => (
              <a
                href={`https://wa.me/905467845760?text=Merhaba, ${ders.title} hakkında bilgi almak istiyorum.`}
                target="_blank"
                rel="noreferrer"
                key={ders._id}
                className="flex mt-6 p-4 items-start justify-start rounded-lg transition-colors duration-300 gap-4 bg-gray-200 border-2 hover:border-primary"
              >
                <LazyLoadImage
                  placeholderSrc="https://via.placeholder.com/300"
                  src={ders.imageURL}
                  alt={ders.title}
                  className="object-cover rounded-md w-72"
                />
                <div className="flex flex-col gap-4 w-2/3">
                  <h2 className="font-bold text-2xl">{ders.title}</h2>
                  <h2 className="font-semibold">{ders.content}</h2>
                </div>
              </a>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dersler;
