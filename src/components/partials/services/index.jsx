import Card from '@/components/Services/Card';
import HeaderTitleSection from '@/components/header-title-section';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <HeaderTitleSection
          className="header-light"
          title="Services"
          subTitle="Layanan Kami"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat est mollitia odio eligendi, unde sequi culpa. Repellat, delectus atque."
        />
        <div className="service-items">
          <Card url="svg/shirt-svgrepo-com.svg" title="Kualitas" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur!" />
          <Card url="svg/size-svgrepo-com.svg" title="Size" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur!" />
          <Card url="svg/dollar-svgrepo-com.svg" title="Harga Sewa" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur!" />
        </div>
      </div>
    </section>
  );
};

export default Services;
