import HeaderTitleSection from '@/components/header-title-section';
import Image from 'next/image';

const Gallery = (props) => {
  const { data } = props;
  return (
    <>
      <section id="gallery">
        <div className="container">
          <HeaderTitleSection
            className="header-dark"
            title="Gallery"
            subTitle="Berikut referensi costume."
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat est mollitia odio eligendi, unde sequi culpa. Repellat, delectus atque."
          />
          <div className="gallery-items">
            {data.map((item) => (
              <div key={item.id} className="gallery-item">
                <Image src={item.url} alt="Sample" width={150} height={180} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
