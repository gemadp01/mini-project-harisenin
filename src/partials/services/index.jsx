const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="service-header">
          <div>
            <h4>Services</h4>
            <h2>Layanan yang kami sediakan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat est mollitia odio eligendi, unde sequi culpa. Repellat, delectus atque.</p>
          </div>
        </div>
        <div className="service-items">
          <div className="service-detail">
            <div className="service-detail-icon">
              <img src="public/svg/shirt-svgrepo-com.svg" alt="Kualitas Costume" width={40} />
            </div>
            <h3>Quality</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur!</p>
          </div>
          <div className="service-detail">
            <div className="service-detail-icon">
              <img src="public/svg/size-svgrepo-com.svg" alt="Ukuran" width={40} />
            </div>
            <h3>Size</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur!</p>
          </div>
          <div className="service-detail">
            <div className="service-detail-icon">
              <img src="public/svg/dollar-svgrepo-com.svg" alt="Harga sewa terjangkau" width={40} />
            </div>
            <h3>Rent</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
