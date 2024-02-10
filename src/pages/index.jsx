import Head from 'next/head';
import Home from '@/partials/home';
import Services from '@/partials/services';
import Contact from '@/partials/contact';
import Footer from '@/partials/footer';
import Header from '@/partials/header';
import Gallery from '@/partials/gallery';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Aplikasi Rental Costume</title>
        <meta name="description" content="Aplikasi Rental Costume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Home />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
