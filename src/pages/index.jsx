import Head from 'next/head';
import Header from '@/components/partials/header';
import Home from '@/components/partials/home';
import Services from '@/components/partials/services';
import Gallery from '@/components/partials/gallery';
import Contact from '@/components/partials/contact';
import Footer from '@/components/partials/footer';
import Loading from '@/components/loading';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function LandingPage() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startTime = performance.now();
        for (let i = 0; i < 5; i++) {
          const response = await fetch('https://nekos.best/api/v2/neko');
          if (!response.ok) {
            throw new Error(`HTTP Error! status:: ${response.status}`);
          }
          const result = await response.json();
          const endTime = performance.now();
          const duration = endTime - startTime;

          const minLoadingTime = 500;
          const remainingTime = minLoadingTime - duration;
          const loadingTime = remainingTime > 0 ? remainingTime : 0;

          setTimeout(() => setLoading(false), loadingTime);
          setGallery((prevGallery) => [...prevGallery, result.results[0]]);
        }
      } catch (error) {
        console.error('An error occurred while fetching the data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Aplikasi Rental Costume</title>
        <meta name="description" content="Aplikasi Rental Costume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home />
          <Services />
          <Gallery data={gallery} />
          <Contact />
          <Footer />
          <Script src="js/navBar.js" />
        </>
      )}
    </>
  );
}
