import Navbar from './components/navbar';
import Hero from './components/hero';
import CreatorBridgeSections from './components/CreatorBridge'
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CreatorBridgeSections />
    </main>
  );
}