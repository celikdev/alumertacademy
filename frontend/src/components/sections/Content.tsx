import { Link } from "react-router-dom";
import { useLessonQuery } from "../../services/query/lesson";
import { HashLoader } from "react-spinners";

const Content = () => {
  const { data, isLoading } = useLessonQuery();
  return (
    <div className="w-2/3 mx-auto flex flex-col gap-4">
      <div className="text-center">
        <h1 className="font-extrabold text-5xl">Derslerimiz</h1>
      </div>
      <div className="flex gap-10">
        {isLoading ? (
          <div className="w-full flex items-center justify-center">
            <HashLoader color="#2563EB" size={32} />
          </div>
        ) : (
          data?.data
            .slice(Math.max(data.data.length - 3, 0), data.data.length)
            .map((ders: any) => (
              <div
                key={ders._id}
                className={`flex flex-col items-center p-4 rounded-md w-1/3 gap-4 shadow-2xl transition-colors duration-300 border-2 border-transparent hover:border-primary group`}
              >
                <img
                  src={ders.imageURL}
                  alt={ders.title}
                  className="w-4/6 transition-all duration-300 group-hover:scale-105"
                />
                <div className="flex items-center flex-col gap-2">
                  <h1 className="font-bold">{ders.title}</h1>
                  <Link
                    to={`/dersler}`}
                    className="border-2 px-8 py-2 rounded-lg text-sm font-semibold border-primary text-primary hover:bg-primary group-hover:bg-primary group-hover:text-white hover:text-white transition-all duration-300 ease-in-out"
                  >
                    Detay
                  </Link>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Content;
