const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact-header">
            <div>
              <h4>Contact</h4>
              <h2>Hubungi Kami</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat est mollitia odio eligendi, unde sequi culpa. Repellat, delectus atque.</p>
            </div>
          </div>
          <div className="contact-detail">
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
            {/* <div class="contact-detail-item">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7919.650455722404!2d107.58386897304445!3d-7.029818839647696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ebed6ed3cc87%3A0xc2563b8b7ca6e705!2sJl.%20Waas%2C%20Sukasari%2C%20Kec.%20Pameungpeuk%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1706520259693!5m2!1sen!2sid"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
