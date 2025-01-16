import NewsList from "@/components/newslist";
import {getNewsForYear} from '@/lib/news';

const FilteredNewsPage = ({ params }) => { 
  
  const year = params.yearSlug
  const newsForYear = getNewsForYear(year)

  return (
    <NewsList news={ newsForYear }></NewsList>
  )
}

export default FilteredNewsPage;