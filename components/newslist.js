import Link from "next/link";
import Image from "next/image";

const NewsList = ({news}) => { 
  return (
    <ul className="news-list">
    {(news ?? []).map(({id,  slug, title, image}) => { 
      return (
        <li key={id}>
          <Link href={`/news/${slug}`} >
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
  )
}
export default NewsList;