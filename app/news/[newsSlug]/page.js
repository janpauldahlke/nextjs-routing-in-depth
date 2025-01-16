const NewsDetailsPage = ({ params }) => { 
  console.log(params)
  return (
    <>
      news content for:  { params.newsSlug}
    </>
  )
}

export default NewsDetailsPage;