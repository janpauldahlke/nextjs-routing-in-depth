import MainHeader from '@/components/mainheader/page';
import '../globals.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

const RootLayout = ({ children }) => {
return (
  <html lang="en">
    <body>
      <div id="page">
        <MainHeader></MainHeader>
        {children}
      </div>
    </body>
    </html>
  )
}

export default RootLayout;
