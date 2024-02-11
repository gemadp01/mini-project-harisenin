import HeaderTitleSection from '@/components/header-title-section';

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <HeaderTitleSection
            className="header-light"
            title="Contact"
            subTitle="Hubungi Kami"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat est mollitia odio eligendi, unde sequi culpa. Repellat, delectus atque."
          />
          <div className="contact-detail">
            <div className="contact-form">
              <form action="">
                <div className="contact-detail-item">
                  <div className="input-group">
                    <label htmlFor="name">Nama</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="message">Pesan</label>
                    <textarea type="text" id="message" defaultValue={''} />
                  </div>
                  <div className="input-group">
                    <button type="submit">Kirim</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.869826566487!2d107.5856668524724!3d-7.024583783325032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ebf1b5fea8af%3A0x7a5c34fc250de7a1!2sSDN%20Waas%20I!5e0!3m2!1sen!2sid!4v1707640466386!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
