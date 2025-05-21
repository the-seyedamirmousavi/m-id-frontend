import React from "react";

const LastNews = () => {
  // اخبار نمونه (می‌توانید این را از یک API بارگذاری کنید)
  const news = [
    {
      id: 1,
      title: "Breaking News: New Technology Innovations in 2024",
      description: "In 2024, technology is advancing at an unprecedented rate...",
      link: "/news/2024-tech-innovations",
      date: "December 25, 2024",
      image: "/images/FitSho.png",
    },
    {
      id: 2,
      title: "Global Market Trends: What to Expect in 2025",
      description: "Experts predict a shift in global market trends by 2025...",
      link: "/news/2025-market-trends",
      date: "December 24, 2024",
      image: "/images/FitSho.png",
    },
    {
      id: 3,
      title: "Climate Change: Global Efforts and Challenges",
      description: "Climate change is one of the most pressing issues of our time...",
      link: "/news/climate-change-efforts",
      date: "December 20, 2024",
      image: "/images/FitSho.png",
    },
    {
      id: 4,
      title: "New Space Discoveries in 2025",
      description: "Scientists are making groundbreaking discoveries in space...",
      link: "/news/2025-space-discoveries",
      date: "December 18, 2024",
      image: "/images/FitSho.png",
    },
  ];

  return (
    <div className="w-full bg-background md:w-[90%] mx-auto p-6 rounded-lg my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>
      <div className="overflow-x-auto scrollbar-hide">
        {/* تغییر justify-center به justify-start */}
        <ul className="flex space-x-4 flex-nowrap justify-start my-10 lg:justify-center">
          {news.map((item) => (
            <li
              key={item.id}
              className="w-[240px] sm:w-[280px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col flex-shrink-0 transform duration-300 transition-transform hover:scale-105"
            >
              <a href={item.link} className="block no-underline hover:no-underline">
                <div className="w-full h-40 overflow-hidden flex justify-center rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[90%] h-full object-cover rounded-xl m-3"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {item.description}
                  </p>
                  <span className="text-xs text-gray-400 mt-2">
                    {item.date}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LastNews;
