import { useEffect, useState } from 'react';

const Gallery = () => {
  const [gallery, setGallery] = useState();

  const fetchData = async () => {
    const response = await fetch('https://api.nekosapi.com/v3/images?limit=10');
    const data = await response.json();
    setGallery(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <section className="gallery">{/* <h2>Gallery</h2> */}</section>;
};

export default Gallery;
