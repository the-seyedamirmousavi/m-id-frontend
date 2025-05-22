import React from "react";

const LastNews = () => {
  // اخبار نمونه (می‌توانید این را از یک API بارگذاری کنید)
  const news = [
    {
      id: 1,
      title: "Just Released: Introducing New FitSho Technologies",
      description: "Our team has recently introduced innovative technologies for the FitSho app, revolutionizing user experience.",
      link: "/news/fitscho-new-tech",
      date: "May 20, 2025",
      image: "/images/FitSho.png",
    },
    {
      id: 2,
      title: "New Server Purchased to Boost FitSho Performance",
      description: "A new powerful server has been acquired to enhance service quality and provide better response times for users.",
      link: "/news/fitscho-new-server",
      date: "May 15, 2025",
      image: "/images/FitSho.png",
    },
    {
      id: 3,
      title: "Successful Completion of FitSho Project Phases One and Two",
      description: "The first two phases of the FitSho project have been successfully completed, and the team is preparing for the next stages.",
      link: "/news/fitscho-phase1-2-success",
      date: "May 10, 2025",
      image: "/images/FitSho.png",
    },
    {
      id: 4,
      title: "Preparation Underway for FitSho Project Phase Three",
      description: "Phase three of the FitSho project is currently being prepared and will soon be launched with new and improved features.",
      link: "/news/fitscho-phase3-preparation",
      date: "May 18, 2025",
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
              <a className="block no-underline hover:no-underline">
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
