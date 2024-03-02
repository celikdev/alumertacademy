import { Container, Header, Title, Footer } from "../components";

const Contact = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title title="İletişim" />
        <p className="font-semibold text-md mt-6">
          Aşağıdaki iletişim kanallarını kullanarak bize ulaşabilirsiniz.
        </p>
        <div className="flex md:flex-row flex-col my-10 gap-10">
          <div className="md:w-1/2 flex flex-col gap-2 bg-gray-200 p-8 rounded-xl">
            <h1 className="text-xl font-bold">İletişim Formu</h1>
            <h1 className="text-sm font-semibold opacity-60">
              Aşağıdaki formu doldurarak bize ulaşabilirsiniz.
            </h1>
            <input
              type="text"
              className="border-2 rounded-lg py-4 px-2 border-transparent text-sm font-semibold transition-colors duration-300 hover:border-primary focus:border-primary outline-none"
              placeholder="Ad / Soyad"
            />
            <input
              type="text"
              className="border-2 rounded-lg py-4 px-2 border-transparent text-sm font-semibold transition-colors duration-300 hover:border-primary focus:border-primary outline-none"
              placeholder="E-Posta"
            />
            <input
              type="text"
              className="border-2 rounded-lg py-4 px-2 border-transparent text-sm font-semibold transition-colors duration-300 hover:border-primary focus:border-primary outline-none"
              placeholder="Konu"
            />
            <textarea
              className="border-2 rounded-lg py-4 px-2 border-transparent text-sm font-semibold transition-colors duration-300 hover:border-primary focus:border-primary outline-none"
              placeholder="Mesaj"
            />
            <button className="border-2 border-primary transition-colors duration-300 hover:bg-primary rounded-lg py-2 text-sm font-semibold hover:text-white">
              Gönder
            </button>
          </div>
          <div className="md:w-1/2 flex flex-col gap-2 bg-gray-200 p-8 rounded-xl">
            <div className="bg-gray-100 rounded-lg p-4">
              <h1 className="text-xl font-bold">İletişim Bilgileri</h1>
              <h1 className="text-sm font-semibold opacity-60">
                Aşağıdaki iletişim bilgilerimizden bize ulaşabilirsiniz.
              </h1>
              <div>
                <h1 className="text-sm font-semibold mt-4">Adres</h1>
                <h1 className="text-sm font-semibold opacity-60">
                  İstanbul, Türkiye
                </h1>

                <h1 className="text-sm font-semibold mt-4">E-Posta</h1>
                <a
                  href="mailto:info@alumertacademy.com"
                  className="text-sm font-semibold opacity-60 flex items-center gap-2 group w-max"
                >
                  <h1 className="group-hover:text-primary transition-colors duration-300">
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
                <h1 className="text-sm font-semibold mt-4">Telefon</h1>
                <a
                  href="tel:+905555555555"
                  className="text-sm font-semibold opacity-60 flex items-center gap-2 group w-max"
                >
                  <h1 className="group-hover:text-primary transition-colors duration-300">
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
            <div className="bg-gray-100 rounded-lg p-4">
              <h1 className="text-xl font-bold">Sosyal Medya</h1>
              <h1 className="text-sm font-semibold opacity-60">
                Aşağıdaki sosyal medya hesaplarımızdan bize ulaşabilirsiniz.
              </h1>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:fill-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    className=""
                    width={40}
                    height={40}
                    id="instagram"
                  >
                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:fill-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width={40}
                    height={40}
                    id="twitter"
                  >
                    <path d="M22.99121,3.9502a.99942.99942,0,0,0-1.51074-.85938,7.47956,7.47956,0,0,1-1.873.793,5.15234,5.15234,0,0,0-3.374-1.24219,5.23238,5.23238,0,0,0-5.22363,5.06348A11.03194,11.03194,0,0,1,4.19629,3.78125,1.01154,1.01154,0,0,0,3.33887,3.416a.99852.99852,0,0,0-.78516.5,5.2755,5.2755,0,0,0-.24219,4.76855l-.00195.00195a1.0411,1.0411,0,0,0-.49512.88868,3.04174,3.04174,0,0,0,.02637.43945,5.1854,5.1854,0,0,0,1.56836,3.3125.99813.99813,0,0,0-.06641.76953,5.20436,5.20436,0,0,0,2.36231,2.92187,7.46464,7.46464,0,0,1-3.58985.44825.99975.99975,0,0,0-.665,1.833A12.94248,12.94248,0,0,0,8.46,21.36133,12.7878,12.7878,0,0,0,20.9248,11.998,12.82166,12.82166,0,0,0,21.46,8.35156c0-.06543,0-.13281-.001-.20019A5.76963,5.76963,0,0,0,22.99121,3.9502ZM19.68457,7.16211a.995.995,0,0,0-.2334.70215c.00977.165.00879.331.00879.4873a10.82371,10.82371,0,0,1-.4541,3.08106A10.68457,10.68457,0,0,1,8.46,19.36133a10.93791,10.93791,0,0,1-2.55078-.30078,9.47951,9.47951,0,0,0,2.94238-1.56348A1.00033,1.00033,0,0,0,8.25,15.71094a3.208,3.208,0,0,1-2.21387-.93457q.22413-.04248.44532-.10547a1.00026,1.00026,0,0,0-.08008-1.94336,3.19824,3.19824,0,0,1-2.25-1.72559,5.29929,5.29929,0,0,0,.54492.0459,1.02093,1.02093,0,0,0,.9834-.69629A.9998.9998,0,0,0,5.2793,9.21484,3.19559,3.19559,0,0,1,3.85547,6.542c0-.0664.00195-.13281.00586-.19824a13.01365,13.01365,0,0,0,8.209,3.47949,1.02046,1.02046,0,0,0,.81739-.3584,1.00037,1.00037,0,0,0,.206-.86816,3.15653,3.15653,0,0,1-.08691-.72852A3.23,3.23,0,0,1,16.2334,4.6416a3.18428,3.18428,0,0,1,2.34472,1.02051A.993.993,0,0,0,19.499,5.96a9.27073,9.27073,0,0,0,1.21192-.32226A6.68126,6.68126,0,0,1,19.68457,7.16211Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:fill-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width={40}
                    height={40}
                    id="linkedin"
                  >
                    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
