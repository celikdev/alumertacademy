import { Container, Header, Title } from "../components";

const Egitmenler = () => {
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
      </Container>
    </div>
  );
};

export default Egitmenler;
