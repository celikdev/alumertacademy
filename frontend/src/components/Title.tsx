const Title = ({ title, className }: any) => {
  return (
    <span className="flex items-center gap-2 w-full">
      <h1
        className={`${
          className ? className : "md:text-7xl text-5xl"
        } font-extrabold text-black`}
      >
        {title}
      </h1>
    </span>
  );
};

export default Title;
