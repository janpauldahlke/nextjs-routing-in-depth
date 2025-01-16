import Link from "next/link";

const MainHeader = () => { 
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
    </header>
  )
}

export default MainHeader;