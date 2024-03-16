import { Title } from "..";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const MOCK_COMMENTS = [
    {
      id: 1,
      name: "Hakan Çelik",
      comment:
        "Satranç eğitiminde uzmanlaşmış bir kaynak arıyordum ve Alumert Academy kursunu keşfetmek gerçek bir kurtuluştu! Derslerin anlaşılır ve öğretici olması beni şaşırttı. Her seviyeden oyuncu için harika bir deneyim sunuyorlar. Kesinlikle tavsiye ederim!",
      imageURL: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Mehmet Yılmaz",
      imageURL: "https://via.placeholder.com/150",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Ayşe Kaya",
      imageURL: "https://via.placeholder.com/150",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="w-2/3 mx-auto flex flex-col py-8 gap-8">
      <Title title="Referanslarımız" className="text-center w-full text-5xl" />

      <Slider {...settings} className="w-3/4 mx-auto">
        {MOCK_COMMENTS.map((comment) => (
          <div
            key={comment.id}
            className="flex flex-col items-center gap-4 p-4"
          >
            <div className="bg-gray-200 w-3/4 mx-auto p-10 rounded-lg flex flex-col items-center gap-3">
              <img
                src={comment.imageURL}
                alt={comment.name}
                className="w-30 h-30 rounded-full"
              />
              <p className="text-black text-center font-semibold">
                <i>{comment.comment}</i>
              </p>
              <p className="text-black/60 text-center font-semibold">
                {comment.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Comments;
