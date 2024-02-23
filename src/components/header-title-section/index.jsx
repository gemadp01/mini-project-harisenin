import styles from './HeaderTitle.module.css';

const HeaderTitleSection = (props) => {
  const { className, title, subTitle, description } = props;
  return (
    <div className={className === 'header-light' ? styles['header-light'] : styles['header-dark']}>
      <div>
        <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="400">
          {title}
        </h4>
        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-offset="400">
          {subTitle}
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeaderTitleSection;
