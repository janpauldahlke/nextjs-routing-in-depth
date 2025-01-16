import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>welcome to fakenews</h1>
      <p>we make desinformation great again.</p>
      <ul>
        <li><Link href="/news/link1">newslink 1</Link></li>
        <li><Link href="/news/link2">newslink 2</Link></li>
        <li><Link href="/news/link3">newslink 3</Link></li>
      </ul>
    </>
  ); 
}

export default NewsPage;