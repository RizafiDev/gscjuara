import { useRef, useEffect } from "react";
import rajaAmpat from "../assets/images/card/ampat.jpg";
import tnpKomodo from "../assets/images/card/komodo.jpg";
import tnBromoSemeru from "../assets/images/card/bromo.jpg";
import tawangmangu from "../assets/images/card/tawangmangu.jpg";
import toba from "../assets/images/card/toba.jpg";
import sentani from "../assets/images/card/sentani.jpg";
import ijen from "../assets/images/card/ijen.jpg";

// Map ikon kategori
const iconMap: Record<string, string> = {
  Laut: "ri-water-flash-line",
  Diving: "ri-anchor-line",
  Alam: "ri-landscape-line",
  Family: "ri-user-heart-line",
  Pulau: "ri-earth-line",
  Fauna: "ri-bug-line",
  Gunung: "ri-triangle-line",
};

const cardData = [
  {
    image: rajaAmpat,
    title: "Raja Ampat",
    rating: "4.7/5",
    description: "Surga tropis dengan keindahan bawah laut terbaik di dunia.",
    price: "$70",
    tags: ["Laut", "Diving", "Alam", "Family", "Pulau"],
  },
  {
    image: tnpKomodo,
    title: "TN Pulau Komodo",
    rating: "4.8/5",
    description: "Tempat dimana keindahan flora dan fauna ada di satu tempat.",
    price: "$90",
    tags: ["Laut", "Diving", "Alam", "Family", "Fauna"],
  },
  {
    image: tnBromoSemeru,
    title: "TN Bromo Tengger Semeru",
    rating: "4.6/5",
    description: "Memandang alam dari atas gunung.",
    price: "$50",
    tags: ["Gunung", "Alam", "Family", "Fauna"],
  },
  {
    image: tawangmangu,
    title: "Tawangmangu",
    rating: "4.1/5",
    description: "Nikmati keindahan dan segarnya alam di lereng Gunung Lawu.",
    price: "$50",
    tags: ["Gunung", "Alam", "Family"],
  },
  {
    image: toba,
    title: "Danau Toba",
    rating: "4.5/5",
    description:
      "Danau vulkanik terbesar di Indonesia dengan pulau Samosir di tengahnya.",
    price: "$50",
    tags: ["Gunung", "Alam", "Family"],
  },
  {
    image: ijen,
    title: "Kawah Ijen",
    rating: "4.8/5",
    description:
      "Rasakan keajaiban api biru dan pemandangan kawah belerang yang memukau.",
    price: "$50",
    tags: ["Gunung", "Alam", "Family"],
  },
  {
    image: sentani,
    title: "Danau Sentani",
    rating: "4.2/5",
    description:
      "Nikmati keindahan danau yang dikelilingi oleh 21 pulau kecil.",
    price: "$50",
    tags: ["Alam", "Family"],
  },
];

function Card() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (direction: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });

        // Check if it has reached the last card and scroll back to the first
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Interval in milliseconds (5 seconds)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container w-full mx-auto items-center justify-center px-4 md:px-40 flex flex-col gap-8 pb-24">
      {/* Header */}
      <div className="header flex w-full items-center  justify-between">
        <div className="layer md:gap-5 flex md:flex-row flex-col items-start md:items-center gap-2">
          <h1 className="font-medium text-white drop-shadow-xl text-base">
            Destinasi Favorit
          </h1>
          <div className="badge text-white dark:text-black dark:bg-white bg-gray-800 flex items-center w-fit gap-1 py-2 px-3 md:px-4 rounded-full shadow-xl">
            <i className="ri-star-smile-line ri-xs"></i>
            <p className="text-xs">Pengalaman Terbaik</p>
          </div>
        </div>
        <div className="navigation flex items-center bg-gray-800 dark:bg-white rounded-full p-2 h-8 ">
          <button
            onClick={() => scrollContainer("left")}
            className="p-2 rounded-full transition-all dark:hover:bg-gray-200 dark:text-black text-white"
          >
            <i className="ri-arrow-left-s-line ri-xl "></i>
          </button>
          <div className="h-4 rounded-full w-[2px] bg-white mx-2 dark:bg-black"></div>
          <button
            onClick={() => scrollContainer("right")}
            className="p-2 rounded-full transition-all dark:hover:bg-gray-200 dark:text-black text-white"
          >
            <i className="ri-arrow-right-s-line ri-xl "></i>
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div
        ref={containerRef}
        id="card-container"
        className="card-section flex w-full items-center gap-4 overflow-hidden scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card h-[350px] w-64 md:h-[380px] rounded-[25px] md:w-72 overflow-hidden p-[6px] bg-gray-900 dark:bg-white relative flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-[19px]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[800px] dark:h-[220px] bg-gradient-to-t from-gray-900 dark:from-white via-transparent to-transparent rounded-[19px]"></div>
            <div className="text absolute bottom-0 p-4 left-0 right-0 w-full h-full flex flex-col justify-between">
              <div className="top flex items-center justify-between">
                <div className="flex items-center text-white dark:text-black bg-gray-900 dark:bg-white py-[6px] px-3 rounded-full w-fit text-xs gap-1">
                  <i className="ri-star-fill"></i>
                  <p className="md:text-base text-xs">{card.rating}</p>
                </div>
                <div className="p-2 w-8 h-8 rounded-full bg-gray-900 dark:bg-white dark:text-black text-white flex items-center justify-center">
                  <i className="ri-heart-2-line "></i>
                </div>
              </div>
              <div className="desc text-white flex flex-col items-start mb-2">
                <h1 className="md:text-lg text-base font-medium dark:drop-shadow-xl">
                  {card.title}
                </h1>
                <p className="md:text-xs text-[10px] max-w-56 dark:drop-shadow-xl">
                  {card.description}
                </p>
                <div className="badge flex flex-wrap gap-2 my-3 w-full">
                  {card.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="tag flex items-center text-white dark:text-black justify-center gap-1 bg-gray-700 dark:bg-white dark:shadow-inner dark:shadow-gray-400 py-1 px-3 rounded-full max-w-[200px] truncate"
                    >
                      <i
                        className={`${iconMap[tag] || "ri-star-line"} ri-xs`}
                      ></i>
                      <p className="md:text-xs text-[10px] truncate">{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="harga text-2xl text-white dark:text-black">
                  {card.price}
                  <span className="text-gray-400 dark:text-gray-800 text-sm">
                    /orang
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
