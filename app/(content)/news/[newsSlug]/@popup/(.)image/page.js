'use client';

import { DUMMY_NEWS } from "@/dumy-news";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

const InterceptedImagePage = ({ params }) => { 

  //console.log('intercepted', params)
  // if (!params.newsSlug) {
  //   console.error("newsSlug is missing!");
  //   return <p>Error: Missing news slug.</p>;
  // }

  const newsItemSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  if (!newsItem) return notFound()

  
  //import { useRouter } from "next/navigation"
  // AND NOT from next/router very importante
  const router = useRouter()
  

  return (
    <>
      <div className="modal-backdrop" onClick={ router.back } ></div>
      <dialog className="modal" open onClick={ router.back }>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={ newsItem.title } />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;