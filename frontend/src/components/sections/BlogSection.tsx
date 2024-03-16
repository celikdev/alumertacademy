import { Link } from "react-router-dom";
import { Title } from "..";
import { useBlogQuery } from "../../services/query/blog";

const BlogSection = () => {
  const { data, isLoading } = useBlogQuery();
  return (
    <div className="w-2/3 mx-auto flex flex-col py-8 gap-8">
      <Title title="Blog & Haberler" className="text-center w-full text-5xl" />
      <div className="grid grid-cols-3 gap-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.data
            .slice(-3)
            .reverse()
            .map((blog: any) => (
              <Link
                to={`/blog/${blog._id}`}
                key={blog.id}
                className="flex flex-col gap-4 bg-gray-100 rounded-lg p-4 shadow-md"
              >
                <img
                  src={blog.imageURL}
                  alt={blog.title}
                  className="object-cover rounded-lg mx-auto h-72"
                />
                <h1 className="text-xl font-bold">{blog.title}</h1>
                <p className="truncate font-semibold text-sm text-black/60">
                  {blog.content}
                </p>
              </Link>
            ))
        )}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/blog">
          <p className="text-center text-blue-500 font-semibold hover:underline">
            Tümünü Gör
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
