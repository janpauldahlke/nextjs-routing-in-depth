
import { DUMMY_NEWS } from "@/dumy-news";
import { notFound } from "next/navigation";

const NewsDetailsPage = ({ params }) => { 
  
  const newsSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if(!newsItem) return notFound()
  
  return (
    <>
    <article className="news-article">
      <header>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}> {newsItem.date}</time>
      </header>
      <main>
        { newsItem.content}
      </main>
      
    </article>
    </>
  )
}

export default NewsDetailsPage;