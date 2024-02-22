import Head from 'next/head';
import Header from '@/components/partials/header';
import Home from '@/components/partials/home';
import Services from '@/components/partials/services';
import Gallery from '@/components/partials/gallery';
import Contact from '@/components/partials/contact';
import Footer from '@/components/partials/footer';
import Script from 'next/script';

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
      <Script src="js/navBar.js" />
      {/* <Script src="js/contactForm.js" /> */}
    </>
  );
}
