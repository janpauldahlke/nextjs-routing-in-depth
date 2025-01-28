
import { DUMMY_NEWS } from "@/dumy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

const NewsDetailsPage = ({ params }) => { 
  
  const newsSlug = params.newsSlug;
  
  const newsItem = DUMMY_NEWS.find((news) => { 
    //console.log(newsSlug, news.slug)
    return news.slug === newsSlug
  });
  

  if(!newsItem) return notFound()
  
  return (
    <>
    <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image` }>
            <img
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title} />
          </Link>
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