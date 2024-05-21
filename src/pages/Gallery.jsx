import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal } from "solid-js";
import g1 from "../assets/gallery_images/hesed-academy-01.jpg";
import g2 from "../assets/gallery_images/hesed-academy-02.jpg";
import g3 from "../assets/gallery_images/hesed-academy-03.jpg";
import g4 from "../assets/gallery_images/hesed-academy-04.jpg";
import g5 from "../assets/gallery_images/hesed-academy-05.jpg";
import g6 from "../assets/gallery_images/hesed-academy-06.jpg";
import g7 from "../assets/gallery_images/hesed-academy-07.jpg";
import g8 from "../assets/gallery_images/hesed-academy-08.jpg";
import g9 from "../assets/gallery_images/hesed-academy-09.jpg";
import g10 from "../assets/gallery_images/hesed-academy-10.jpg";
import g11 from "../assets/gallery_images/hesed-academy-11.jpg";
import g12 from "../assets/gallery_images/hesed-academy-12.jpg";
import g13 from "../assets/gallery_images/hesed-academy-13.jpg";
import g14 from "../assets/gallery_images/hesed-academy-14.jpg";
import g15 from "../assets/gallery_images/hesed-academy-15.jpg";
import g16 from "../assets/gallery_images/hesed-academy-16.jpg";
import g17 from "../assets/gallery_images/hesed-academy-17.jpg";
import g18 from "../assets/gallery_images/hesed-academy-18.jpg";
import g19 from "../assets/gallery_images/hesed-academy-19.jpg";
import g20 from "../assets/gallery_images/hesed-academy-20.jpg";

function Gallery() {
  const [showPicture, setShowPicture] = createSignal(false);
  const [pic, setPic] = createSignal();

  const pictures = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g15,
    g16,
    g17,
    g18,
    g19,
    g20,
  ];

  const doShowPicture = (url) => {
    console.log(url);
    setShowPicture(true);
    setPic(url);
  };
  return (
    <MetaProvider>
      <Title>Gallery - Hesed Academy</Title>
      <Link rel="canonical" href="https://hesedacademy.net/" />
      <Meta
        name="description"
        content="Gallery at Hesed Academy, Jos - Plateau State, Nigeria."
      />
      <div>
        <Show when={showPicture()}>
          <div class="fixed z-50 bg-slate-950 bg-opacity-90 h-screen w-screen flex items-center">
            <div class="bg-white rounded-lg p-4 w-11/12 mx-auto">
              <div class="flex justify-between font-bold text-lg border-b pb-4">
                <h2 class="pt-2">Pictures of Hesed Academy</h2>
                <svg
                  onClick={() => {
                    setShowPicture(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 hover:opacity-50 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div class="py-2 h-full overflow-y-auto">
                <img src={pic()} class="h-full max-w-11/12 max-h-96 mx-auto" />
              </div>
            </div>
          </div>
        </Show>
        <Header />
        <div>
          <div class="gray_bg text-center py-10">
            <span class="shadows-into-light topic text-3xl lg:text-4xl">
              Gallery
            </span>
          </div>
          <div class="w-11/12 lg:w-10/12 mx-auto my-20 border-2 rounded-lg p-3 lg:p-6 space-y-10 text-sm lg:text-lg">
            <p>
              Hesed Academy in Pictures (Click or tap on a picture to zoom):
            </p>

            <div id="">
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <For each={pictures}>
                  {(picture, i) => (
                    <span
                      onClick={() => {
                        doShowPicture(picture);
                      }}
                      class="cursor-pointer group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                    >
                      <img
                        src={picture}
                        loading="lazy"
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </span>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Gallery;
