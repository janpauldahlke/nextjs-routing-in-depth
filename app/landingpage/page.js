import logo from '@/assets/logo.jpg';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div id="home">
      <img src={logo.src} alt="A newspaper" />
      <h1>"Think for yourself, schmuck!"</h1>
      <p>
        Welcome to NextNews, where we deliver the latest headlines—concise,
        sharp, and free from the conditioning of the Illuminati.
      </p>

      <p>
        "The more you see, the less you know. The more you hear, the less you
        understand." We strip away the noise to bring you the news in its
        purest form—without bias, without distortion, just raw information.
      </p>

      <p>
        Our journalists follow a simple principle: "Everybody understands Mickey
        Mouse. Few understand Hermann Hesse. Hardly anybody understands Albert
        Einstein." We break down complex stories so you can stay informed
        without drowning in confusion.
      </p>

      <p>
        "The final war will be between those who see clearly and those who
        delude themselves." Stay on the right side of history. Stay informed.
      </p>

      <p>
        <Link href="/news">"They shall know the truth, and the truth shall make them laugh."</Link>
      </p>
    </div>
  );
};

export default LandingPage;
