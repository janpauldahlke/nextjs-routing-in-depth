// defines default fallback content when we do not ha

import NewsList from "@/components/newslist";
import { getLatestNews } from "@/lib/news";

const LatestPage = () => {

  const latestNews = getLatestNews().reverse()

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={ latestNews} />
    </>
  )
}

export default LatestPage;