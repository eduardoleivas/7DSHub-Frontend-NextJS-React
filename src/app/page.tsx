import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "@/components/Carousel";
import { Filterbar } from "@/components/Filterbar";

export default function Home() {
  const images: string[] = [
    `${process.env.IMG_URL}/file/news/20240909112810_news.png`,
    `${process.env.IMG_URL}/file/news/20240909112737_news.png`,
    `${process.env.IMG_URL}/file/news/20240909112810_news.png`,
    `${process.env.IMG_URL}/file/news/20240909112737_news.png`,
  ];

  return (
    <div className="main-container">
      <div className="banner-container overflow-hidden">
        <Carousel images={images} />
      </div>
      <div className="teams-container">
        <Filterbar />
      </div>
    </div>
  );
}
