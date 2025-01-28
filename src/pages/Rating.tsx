import React from "react";
// hiasan
import line from "../assets/hiasan/line.png";

const ratingData = [
  {
    name: "Firmansyah",
    role: "Culture Guide",
    stars: 4,
    comment:
      "Sudah beberapa kali pergi ke Nusantara, memang sangat cocok untuk wisata di alam!",
    source: "Instagram",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Winchester",
    role: "Travel Blogger",
    stars: 5,
    comment:
      "Pemandangan alam yang menakjubkan! Pelayanan guide sangat profesional dan ramah.",
    source: "TripAdvisor",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Chen",
    role: "Photographer",
    stars: 5,
    comment:
      "Perfect spot for nature photography. The cultural experiences are authentic and memorable.",
    source: "Facebook",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Maria Rodriguez",
    role: "Adventure Seeker",
    stars: 4,
    comment:
      "Great hiking trails and amazing local cuisine. Will definitely come back!",
    source: "Google Reviews",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James Wilson",
    role: "History Enthusiast",
    stars: 5,
    comment:
      "The historical sites are well-preserved and the guided tours are very informative.",
    source: "Booking.com",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akiko Tanaka",
    role: "Food Critic",
    stars: 4,
    comment:
      "Beautiful blend of nature and culture. The local delicacies are must-try!",
    source: "Yelp",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Michael Brown",
    role: "Nature Explorer",
    stars: 5,
    comment:
      "The biodiversity here is amazing. Every trail offers a unique experience!",
    source: "Instagram",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Emma Thomp",
    role: "Cultur Researcher",
    stars: 5,
    comment:
      "The local traditions and customs are fascinating. A must-visit for culture enthusiasts!",
    source: "TripAdvisor",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const Rating = () => {
  return (
    <div className="container relative md:px-40 px-4 flex flex-col w-full items-center justify-center py-20 md:gap-16 gap-8 mx-auto bg-gray-900 dark:bg-white">
      <img src={line} className="w-full absolute top-0 md:px-40 px-4" alt="" />
      <div className="header flex flex-col items-start text-start w-full text-white dark:text-black">
        <h1 className="md:text-3xl text-2xl font-semibold">
          Rating Pengunjung
        </h1>
        <p>Lihat apa kata mereka</p>
      </div>

      <div className="rating-container w-full overflow-x-auto pb-4">
        <div className="rating-wrapper flex gap-6 snap-x snap-mandatory overflow-x-auto ">
          {ratingData.map((rating, index) => (
            <div
              key={index}
              className="rating flex-none snap-center w-96 md:w-[600px] bg-gray-900 border border-gray-600 dark:border-none dark:bg-white dark:shadow-inner dark:shadow-gray-400  p-4 md:p-8 md:rounded-3xl rounded-xl md:gap-6 gap-4 flex flex-col"
            >
              <div className="top flex items-center justify-between w-full">
                <div className="name flex items-center gap-3">
                  <img
                    src={rating.profileImage}
                    alt={rating.name}
                    className="md:w-16 md:h-16 object-cover rounded-full w-12 h-12"
                  />
                  <p className="text-start font-semibold md:text-2xl text-lg text-white dark:text-black">
                    {rating.name}
                  </p>
                </div>
                <p className="As font-medium md:text-lg text-sm text-blue-500  uppercase">
                  {rating.role}
                </p>
              </div>

              <div className="star">
                <ul className="flex items-center text-blue-500 ">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i
                        className={`${
                          i < rating.stars ? "ri-star-fill" : "ri-star-line"
                        } md:ri-2x ri-xl`}
                      ></i>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="kritik w-full items-start text-start md:text-xl text-lg font-medium text-white dark:text-black">
                {rating.comment}
              </p>

              <p className="source w-full text-end text-sm md:text-lg font-medium text-white dark:text-black">
                Source : {rating.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
