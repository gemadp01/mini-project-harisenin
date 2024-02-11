import styles from './HeaderTitle.module.css';

const HeaderTitleSection = (props) => {
  const { className, title, subTitle, description } = props;
  return (
    <div className={className === 'header-light' ? styles['header-light'] : styles['header-dark']}>
      <div>
        <h4>{title}</h4>
        <h2>{subTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeaderTitleSection;
