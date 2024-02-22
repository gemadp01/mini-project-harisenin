import HeaderTitleSection from '@/components/header-title-section';
import LoadingButton from '@/components/loading-button';
import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const formInputContactRef = useRef(null);
  useEffect(() => {
    const inputElement = formInputContactRef.current.querySelector('#no_telepon');

    inputElement.addEventListener('input', function (event) {
      // Hapus border merah saat ada input
      inputElement.style.border = '';
    });

    inputElement.addEventListener('keydown', function (event) {
      var key = event.key;

      if (event.ctrlKey) {
        if (key === 'a') {
          inputElement.style.border = '';
          // Izinkan pemilihan teks
        }

        return;
      }

      if (!isNaN(key) || key === 'Backspace' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Delete') {
        inputElement.style.border = '';
      } else {
        inputElement.addEventListener('select', function () {
          inputElement.style.border = '';
        });
        event.preventDefault();
        inputElement.style.border = '1px solid red';
      }
    });

    inputElement.addEventListener('select', function (event) {
      // Hapus border merah saat teks dipilih
      inputElement.style.border = '';
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxf3ToI9dja2ZNCnkM5Dc3XRePzfh6xYptSlN8PcbhfHW_zRQLgmXjLctEg6NVsIG_P/exec';
    const form = document.forms['rencos-contact-form'];
    const btnLoading = document.querySelector('.btn-loading');
    const btnKirim = document.querySelector('.btn-kirim');
    btnKirim.style.display = 'none';
    btnLoading.style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        btnKirim.style.display = 'block';
        btnLoading.style.display = 'none';
        form.reset();
        Swal.fire({
          title: 'Terima kasih!',
          text: 'Pesan anda sudah kami terima.',
          icon: 'success',
          showCloseButton: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Pesan anda gagal kami terima.' + error,
          icon: 'error',
          showCloseButton: true,
        });
      });
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <HeaderTitleSection className="header-light" title="Contact" subTitle="Hubungi Kami" description="Untuk pertanyaan lebih lanjut atau bantuan, silakan hubungi kami." />
          <div className="contact-detail">
            <div className="contact-form">
              <form ref={formInputContactRef} action="" name="rencos-contact-form" onSubmit={handleSubmit}>
                <div className="contact-detail-item">
                  <div className="input-group">
                    <label htmlFor="nama">Nama</label>
                    <input type="text" id="nama" name="nama" maxLength={50} required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" maxLength={50} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="no_telepon">No. Telepon</label>
                    <input type="text" id="no_telepon" name="no_telepon" required maxLength={13} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="pesan">Pesan</label>
                    <textarea type="text" id="pesan" name="pesan" defaultValue={''} rows={7} maxLength={255} required />
                  </div>
                  <div className="input-group">
                    <button className="btn-loading" type="submit" style={{ display: 'none' }}>
                      <LoadingButton />
                    </button>
                    <button className="btn-kirim" type="submit" style={{ cursor: 'pointer' }}>
                      Kirim
                    </button>
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
