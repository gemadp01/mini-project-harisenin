import Image from 'next/image';
import styles from './Card.module.css';

const Card = (props) => {
  const { url, title, description } = props;
  return (
    <div className={styles.serviceDetail}>
      <div>
        <Image src={url} alt={title} width={45} height={45} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
