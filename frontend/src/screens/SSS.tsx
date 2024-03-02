import { Container, Header, Title } from "../components";

const SSS = () => {
  const sssData = [
    {
      id: 1,
      title: "Nasıl kayıt olabilirim?",
      content: "Kayıt olmak için iletişime geçebilirsiniz.",
    },
    {
      id: 2,
      title: "Nasıl ödeme yapabilirim?",
      content: "Ödeme yapmak için iletişime geçebilirsiniz.",
    },
    {
      id: 3,
      title: "Dersler nerede yapılıyor?",
      content: "Dersler online olarak yapılmaktadır.",
    },
    {
      id: 4,
      title: "Dersler ne zaman yapılıyor?",
      content: "Dersler haftanın her günü yapılmaktadır.",
    },
    {
      id: 5,
      title: "Dersler kaç saat sürüyor?",
      content: "Dersler 1 saat sürmektedir.",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Title title="SSS" />
        <p className="font-semibold text-md mt-6">
          Alumert Academy ile ilgili sıkça sorulan soruları aşağıda
          bulabilirsiniz.
        </p>
        <div className="grid grid-cols-1">
          {sssData.map((sss) => (
            <details
              key={sss.id}
              className="mt-6 transition-all duration-300 border-b-2 p-2 cursor-pointer hover:border-primary"
            >
              <summary className="font-bold text-2xl">{sss.title}</summary>
              <p className="font-semibold mt-4">{sss.content}</p>
            </details>
          ))}
        </div>
      </Container>
    </>
  );
};

export default SSS;
