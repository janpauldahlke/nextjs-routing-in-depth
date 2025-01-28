import { DUMMY_NEWS } from "@/dumy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = ({ params }) => { 

  const newsItemSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  if(!newsItem) return notFound()

  return (
    <>
      <div className="modal-backdrop" ></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={ newsItem.title } />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;