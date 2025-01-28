import '../globals.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'The marketing section',
};

const RootLayout = ({ children }) => {
return (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
  )
}

export default RootLayout;
