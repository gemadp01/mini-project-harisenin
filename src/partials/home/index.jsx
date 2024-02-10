import Image from 'next/image';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="sub-container">
          <div className="headline">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis ratione architecto esse assumenda tempore similique? Exercitationem veritatis vitae porro.</p>
            <a href="#">Contact Us</a>
          </div>
          <div className="sub-headline">
            <div>
              <Image src="/img/4.png" alt="Sample" width={336} height={449} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
