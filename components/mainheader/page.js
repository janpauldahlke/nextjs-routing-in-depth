import NavLink from './nav-link';
import Link from 'next/link';

export default function MainHeader() {

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <NavLink href={"news" }>News</NavLink>
          <NavLink href={"archive" }>Archive</NavLink>
        </ul>
      </nav>
    </header>
  );
}