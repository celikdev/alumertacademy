import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Footer, Header, Title } from "../components";
import { useTournamentQuery } from "../services/query/tournament";

const Turnuvalar = () => {
  const { data, isLoading } = useTournamentQuery();
  return (
    <div>
      <Header />
      <Container>
        <Title title="Turnuvalar" />
        <p className="font-semibold text-md mt-6">
          Est ut tempor nisi Lorem nulla anim eu labore. Cupidatat veniam eu
          nulla enim exercitation aute laborum. Officia sunt nisi ipsum eu id
          proident incididunt ipsum esse laboris. Aliqua ad sit sunt consectetur
          ex velit commodo officia Lorem exercitation labore culpa pariatur.
          Amet fugiat culpa consectetur nostrud eiusmod laboris occaecat ipsum
          ex adipisicing pariatur. Officia veniam ullamco Lorem sint laborum eu
          mollit cupidatat sint ex veniam quis mollit amet.
        </p>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {data?.data.map((ders: any) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={ders._id}
                className="flex flex-col md:flex-row mt-6 p-4 items-start justify-start rounded-lg transition-colors duration-300 gap-4 bg-gray-200 border-2 hover:border-primary"
              >
                <LazyLoadImage
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
      <Footer />
    </div>
  );
};

export default Turnuvalar;
