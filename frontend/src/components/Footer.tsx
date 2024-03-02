import { Link } from "react-router-dom";

const Footer = () => {
  const getDate = () => {
    const newDate = new Date();
    return newDate.getFullYear();
  };

  return (
    <footer className="h-96 bg-dark flex flex-col justify-between py-10">
      <div className="container mx-auto flex md:flex-row flex-col justify-around md:pt-10 px-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-2xl text-white">
            Alumert Academy
          </h1>
          <div className="hidden md:flex">
            <a
              href="https://instagram.com/alumertacademy"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                className="transition duration-300 ease-in-out fill-current text-white hover:text-primary hover:scale-105"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                id="instagram"
              >
                <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Link
            to="/hakkimizda"
            className="text-white font-semibold flex items-center group transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width={40}
              className="transition-all -translate-x-2 group-hover:translate-x-0 fill-current text-white group-hover:text-primary hover:scale-105"
              height={40}
              id="dot"
            >
              <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
            </svg>
            <h1 className="transition-all -translate-x-2 group-hover:translate-x-0">
              Hakkımızda
            </h1>
          </Link>
          <Link
            to="/blog"
            className="text-white font-semibold flex items-center group transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width={40}
              className="transition-all -translate-x-2 group-hover:translate-x-0 fill-current text-white group-hover:text-primary hover:scale-105"
              height={40}
              id="dot"
            >
              <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
            </svg>
            <h1 className="transition-all -translate-x-2 group-hover:translate-x-0">
              Blog
            </h1>
          </Link>
          <Link
            to="/contact"
            className="text-white font-semibold flex items-center group transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width={40}
              className="transition-all -translate-x-2 group-hover:translate-x-0 fill-current text-white group-hover:text-primary hover:scale-105"
              height={40}
              id="dot"
            >
              <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
            </svg>
            <h1 className="transition-all -translate-x-2 group-hover:translate-x-0">
              İletişim
            </h1>
          </Link>
        </div>
        <div className="mt-4">
          <h1 className="text-white font-semibold">İletişim</h1>
          <h1 className="text-sm font-semibold text-white/50 mt-1">E-Posta</h1>

          <a
            href="mailto:info@alumertacademy.com"
            className="text-sm font-semibold flex items-center gap-2 group w-max"
          >
            <h1 className="group-hover:text-primary transition-colors duration-300 text-white">
              info@alumertacademy.com
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 96"
                width="20"
                height="20"
                className="group-hover:fill-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
                id="open"
              >
                <switch>
                  <g>
                    <path d="M88 48a4 4 0 0 0-4 4v28c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4V16c0-2.21 1.79-4 4-4h28a4 4 0 0 0 0-8H16C9.373 4 4 9.373 4 16v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12V52a4 4 0 0 0-4-4zm4-40v24a4 4 0 0 1-8 0V17.656l-32.771 32.77a4 4 0 0 1-5.655-5.656L78.343 12H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4z"></path>
                  </g>
                </switch>
              </svg>
            </span>
          </a>
          <h1 className="text-sm font-semibold mt-1 text-white/50">Telefon</h1>
          <a
            href="tel:+905555555555"
            className="text-sm font-semibold flex items-center gap-2 group w-max"
          >
            <h1 className="group-hover:text-primary transition-colors duration-300 text-white">
              +90 555 555 55 55
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 96"
                width="20"
                height="20"
                className="group-hover:fill-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
                id="open"
              >
                <switch>
                  <g>
                    <path d="M88 48a4 4 0 0 0-4 4v28c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4V16c0-2.21 1.79-4 4-4h28a4 4 0 0 0 0-8H16C9.373 4 4 9.373 4 16v64c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12V52a4 4 0 0 0-4-4zm4-40v24a4 4 0 0 1-8 0V17.656l-32.771 32.77a4 4 0 0 1-5.655-5.656L78.343 12H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4z"></path>
                  </g>
                </switch>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="md:flex hidden">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-semibold text-sm">
            © {getDate()} Alumert Academy
          </h1>
          <div className="flex gap-4">
            <a
              href="https://celik.dev"
              rel="noreferrer"
              target="_blank"
              className="text-white/50 font-semibold text-sm"
            >
              Develop by celikdev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
