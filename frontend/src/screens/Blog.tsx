import { HashLoader } from "react-spinners";
import { Container, Footer, Header, Title } from "../components";
import { useBlogQuery } from "../services/query/blog";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const { data, isLoading } = useBlogQuery();

  const [searchQuery, setSearchQuery] = useState("");

  const getDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  //TODO: Footer Yapilacak, Responsive Yapilacak, Blog Details Yapilacak, Eğitmenler, Turnuvalar, Kurumsal
  return (
    <div className="bg-gray-100">
      <Header />
      <Container>
        <Title title="Blog" />
        <p className="font-semibold text-md mt-6">
          Eğitici ve öğretici satranç içeriklerimize göz atın.
        </p>
        <div className="flex justify-between my-10 flex-col md:flex-row">
          <div className="rounded-lg w-full flex-col gap-8 flex md:hidden p-4">
            <div className="w-full bg-white p-4 rounded-lg flex flex-col gap-2">
              <h1 className="text-sm font-semibold">İçerik Ara</h1>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ara"
                className="border-2 rounded-lg outline-none w-full px-4 py-3 border-gray-200 transition-colors duration-300 hover:border-primary focus:border-primary text-sm font-semibold"
              />
            </div>
          </div>
          <div className="md:w-3/4">
            {isLoading ? (
              <div className="flex items-center justify-center my-8">
                <HashLoader color="#2563EB" size={32} />
              </div>
            ) : (
              <div className="w-full flex flex-col gap-4">
                {data?.data
                  .filter((searched: any) =>
                    searched.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((blog: any) => (
                    <div
                      key={blog._id}
                      className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg w-full"
                    >
                      <Link
                        to={`/blog/${blog._id}`}
                        className="bg-white p-8 rounded-lg hover:shadow-lg flex flex-col gap-4 transition-colors duration-300 hover:bg-gray-200 w-full"
                      >
                        <img
                          src="https://alumertacademy.com.tr/wp-content/uploads/2023/09/satranc%CC%A7-900x500.jpeg"
                          alt="blog"
                          className="rounded-lg"
                        />
                        <div className="w-full">
                          <h2 className="text-lg font-semibold text-start">
                            {blog.title}
                          </h2>
                          <p className="mt-2">{blog.content}</p>
                          <span className="mt-2 flex items-center gap-4 bg-gray-200 w-max px-4 py-2 rounded-2xl">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 md:w-8 md:h-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                id="user"
                              >
                                <path
                                  fill="#000"
                                  fillRule="evenodd"
                                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <h1 className="font-semibold text-xs md:text-sm">
                                {blog.createdBy}
                              </h1>
                            </div>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 md:w-8 md:h-8"
                                viewBox="0 0 24 24"
                                id="date"
                              >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"></path>
                              </svg>
                              <h1 className="text-xs md:text-sm font-semibold mt-px">
                                {getDate(blog.createdAt)}
                              </h1>
                            </div>
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            )}
            {data?.data.filter((searched: any) =>
              searched.title.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <p className="font-semibold text-sm md:text-lg text-red-400 text-center">
                Sonuç Bulunamadı
              </p>
            )}
          </div>
          <div className="rounded-lg w-1/4 my-4 flex-col gap-8 hidden md:flex">
            <div className="w-full bg-white p-4 rounded-lg flex flex-col gap-2">
              <h1 className="text-sm font-semibold">İçerik Ara</h1>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ara"
                className="border-2 rounded-lg outline-none w-full px-4 py-3 border-gray-200 transition-colors duration-300 hover:border-primary focus:border-primary text-sm font-semibold"
              />
            </div>
            <div className="w-full bg-white p-4 rounded-lg  flex-col">
              <h1 className="font-semibold">Son Eklenenler</h1>
              <div>
                {isLoading ? (
                  <div>
                    <HashLoader color="#2563EB" size={32} />
                  </div>
                ) : (
                  data?.data.map((blog: any) => (
                    <Link
                      to={`/blog/${blog._id}`}
                      key={blog._id}
                      className="flex items-center gap-4 my-4 transition-colors duration-300 hover:bg-gray-300 rounded-lg p-2 bg-gray-200"
                    >
                      <img
                        src="https://alumertacademy.com.tr/wp-content/uploads/2023/09/satranc%CC%A7-900x500.jpeg"
                        alt="blog"
                        className="rounded-lg w-24 h-20 object-cover"
                      />
                      <div>
                        <h1 className="font-semibold text-sm">{blog.title}</h1>
                        <p className="text-xs">{getDate(blog.createdAt)}</p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
