import HeaderTitleSection from '@/components/header-title-section';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        for (let i = 0; i < 5; i++) {
          const response = await fetch('https://nekos.best/api/v2/neko');
          if (!response.ok) {
            throw new Error(`HTTP Error! status:: ${response.status}`);
          }
          const result = await response.json();
          setGallery((prevGallery) => [...prevGallery, result.results[0]]);
        }
      } catch (error) {
        console.error('An error occurred while fetching the data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="gallery">
      <div className="container">
        <HeaderTitleSection
          className="header-dark"
          title="Gallery"
          subTitle="Berikut referensi costume."
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat est mollitia odio eligendi, unde sequi culpa. Repellat, delectus atque."
        />
        <div className="gallery-items">
          {gallery.map((item) => (
            <div key={item.id} className="gallery-item">
              <Image src={item.url} alt="Sample" width={150} height={180} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
      {/* <h2>Gallery</h2> */}
      {/* {console.log(gallery)} */}
    </section>
  );
};

export default Gallery;
