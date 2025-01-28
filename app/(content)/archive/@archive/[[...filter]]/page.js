import Link from "next/link";

import NewsList from "@/components/newslist";
import {getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth} from '@/lib/news';

const FilteredNewsPage = ({ params }) => { 

  
  const selectedYear = params.filter ? params.filter[0] : undefined;
  const selectedMonth = params?.filter && params.filter.length > 1 ? params.filter[1] : undefined;

  let news;
  let links = getAvailableNewsYears();
  let newsContent = <p>No news found for the selected period.....</p>

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) { 
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  if (news && news.length > 0) { 
    newsContent = <NewsList news={news}></NewsList>
  }

  // handle not exsting routes
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) { 
    throw new Error('Invalid filter');
  }

  return (
    <>
    <header id="archive-header">
      <nav>
        <ul>
            {(links ?? []).map((link => { 
            
            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
            return (
              <li key={link}>
                <Link href={href}>{ link }</Link>
              </li>
            )
          }))}
        </ul>
      </nav>
      </header>
      { newsContent }
      </>
  ) 
}

export default FilteredNewsPage;