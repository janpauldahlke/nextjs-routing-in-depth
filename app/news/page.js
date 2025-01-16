import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dumy-news";

const NewsPage = () => {
  return (
    <>
      <h1>welcome to fakenews</h1>
      <p>we make desinformation great again.</p>
      <ul className="news-list">
        {(DUMMY_NEWS ?? []).map(({id,  slug, title, image}) => { 
          return (
            <li key={id}>
              <Link href={`news/${slug}`} >
                <Image
                  src={`/images/news/${image}`}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} 
                />
                <span>{ title }</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  ); 
}

export default NewsPage;