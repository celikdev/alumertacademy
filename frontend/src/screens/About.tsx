import { Container, Header, Title } from "../components";

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title="Hakkımızda" />
        <p className="font-semibold text-md mt-6">
          Alumert Academy, satranç eğitimi veren bir platformdur. Uzman
          eğitmenlerimiz, her yaş grubundan öğrencilere özel dersler sunar ve
          her seviyeye uygun bir öğrenme deneyimi sağlar. Stratejilerin,
          taktiklerin ve satrancın inceliklerini keşfetmek için buradayız.
          Eğitim materyallerimiz ve interaktif derslerimizle, satrancı daha iyi
          anlamanıza ve ustalaşmanıza yardımcı olmak için yanınızdayız.
          Kendinizi geliştirmek ve satranç dünyasında ilerlemek için bize
          katılın.
        </p>
      </Container>
    </>
  );
};

export default About;
