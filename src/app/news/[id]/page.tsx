// app/news/[id]/page.tsx
import Footer from "../../../components/Footer";

interface NewsData {
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  content: string;
  metadata: string;
}

/*
const fetchNewsData = async (id: string): Promise<NewsData> => {
  const fakeNews = {
    title: "Breaking: New AI Model Set to Revolutionize Healthcare",
    category: "Technology",
    author: "John Doe",
    publishedAt: new Date().toISOString(),
    content: JSON.stringify({
      blocks: [
        { 
          type: "image", 
          content: "/images/FitSho.png", 
          description: "Revolutionary AI Model for Healthcare Diagnoses"
        },
        { 
          type: "title", 
          content: "Breakthrough in Medical AI"
        },
        { 
          type: "text", 
          content: "In a groundbreaking development, a team of scientists has introduced an artificial intelligence model that promises to revolutionize the healthcare sector. The AI system, trained on extensive datasets, can analyze medical records with unprecedented accuracy, potentially transforming how diagnoses are made."
        },
        { 
          type: "title", 
          content: "Accuracy in Diagnostics"
        },
        { 
          type: "text", 
          content: "The new AI model excels in diagnosing complex conditions such as cancer, heart disease, and neurological disorders. Early testing has demonstrated that it significantly outperforms traditional diagnostic tools, offering doctors more reliable results for quicker decision-making."
        },
        { 
          type: "image", 
          content: "/images/FitSho.png", 
          description: "AI diagnostic accuracy chart compared to traditional methods"
        },
        { 
          type: "title", 
          content: "Global Healthcare Impact"
        },
        { 
          type: "text", 
          content: "Experts predict that this AI-driven diagnostic tool could play a pivotal role in healthcare systems worldwide. By reducing human error and improving the speed of diagnosis, the model has the potential to save thousands of lives every year."
        },
        { 
          type: "title", 
          content: "Future Applications"
        },
        { 
          type: "text", 
          content: "The potential applications for this AI model are vast. From assisting doctors in diagnosing rare diseases to predicting patient outcomes, the technology is poised to be integrated into hospitals and clinics globally. With further development, it could even be used for preventative healthcare by identifying health risks before they become life-threatening."
        },
        { 
          type: "image", 
          content: "/images/FitSho.png", 
          description: "Doctors using AI to assist with patient diagnoses"
        },
        { 
          type: "title", 
          content: "AI and the Future of Medicine"
        },
        { 
          type: "text", 
          content: "As AI continues to evolve, it is expected that healthcare professionals will work alongside intelligent systems to make more accurate diagnoses and improve patient care. This collaboration between human expertise and AI technology could be the future of medicine."
        }
      ]
    }),
    metadata: JSON.stringify({
      views: 1254,
      likes: 540,
      shares: 210,
      comments: 98,
      publicationDate: "2025-02-03T10:00:00Z"
    })
  };

  return fakeNews;
};
*/

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

/*
const NewsPage = async ({ params }: Props) => {
  const { id } = params;
  const news = await fetchNewsData(id);

  const content = JSON.parse(news.content);
  const metadata = JSON.parse(news.metadata);

  return (
    <div className="mx-auto h-full flex flex-col">
      <div
        className="card px-3 col-lg-8 h-full mx-auto"
        style={{ marginTop: "80px" }}
      >
        <div className="card-body">
          <h1 className="card-title" style={{ color: "black" }}>
            {news.title}
          </h1>
          <p className="card-text">
            <strong>Category:</strong> {news.category}
          </p>
          <p className="card-text">
            <strong>Author:</strong> {news.author}
          </p>
          <p className="card-text">
            <strong>Published At:</strong>{" "}
            {new Date(news.publishedAt).toLocaleString()}
          </p>
          <hr />

          <div>
            {content.blocks.map((block: any, index: number) => (
              <div key={index} className="my-3">
                {block.type === "text" && (
                  <p className="txt fs-5 py-1">{block.content}</p>
                )}
                {block.type === "title" && (
                  <h3 className="txt pt-3">
                    <strong>{block.content}</strong>
                  </h3>
                )}
                {block.type === "image" && (
                  <img
                    src={block.content}
                    alt={block.description}
                    className="img-fluid rounded shadow-sm"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
*/

const NewsPage = () => {
  return (
    <div className="mx-auto h-full flex flex-col justify-center items-center" style={{ marginTop: "80px" }}>
      <h2>این صفحه فعلاً غیرفعال است.</h2>
    </div>
  );
};

export default NewsPage;
