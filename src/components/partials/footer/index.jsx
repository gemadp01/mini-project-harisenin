const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content-footer">
          <div>
            <h1 style={{ color: '#ef4444', fontSize: 20, fontWeight: 600 }}>Rencos Project</h1>
            <p>Kp. Waas</p>
            <p>Kecamatan Pameungpeuk Desa Sukasari</p>
            <p>Kabupaten Bandung Jawa Barat 40376</p>
          </div>

          <div>
            <h1 style={{ color: 'white', fontSize: 20, fontWeight: 600, paddingBottom: 12 }}>Sitemap</h1>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 style={{ color: 'white', fontSize: 20, fontWeight: 600, paddingBottom: 12 }}>Ikuti kami di</h1>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright" style={{ paddingTop: '14px' }}>
          <p
            style={{
              textAlign: 'center',
              color: '#64748b',
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            Created with ❤️ by
            <span style={{ color: '#ef4444', fontWeight: 600 }}> Gema Dodi Pranata</span>
          </p>
          <p
            style={{
              textAlign: 'center',
              color: '#64748b',
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            Copyright &copy; 2024
            <span style={{ color: '#ef4444', fontWeight: 600, display: 'block' }}> Rencos Project</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
