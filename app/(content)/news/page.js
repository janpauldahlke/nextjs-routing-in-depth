import NewsList from "@/components/newslist";
import { DUMMY_NEWS } from "@/dumy-news";

const NewsPage = () => {
  return (
    <>
      <h1>welcome to fakenews</h1>
      <p>we make desinformation great again.</p>
      <NewsList news={DUMMY_NEWS}></NewsList>
    </>
  ); 
}

export default NewsPage;