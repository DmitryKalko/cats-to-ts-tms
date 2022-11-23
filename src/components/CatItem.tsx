import { ICat } from '../types/types';
import styles from './styles/catItem.module.css';

interface ICatItemProps extends ICat {
    toBuy: (id: number) => void,
  }

const CatItem:React.FC<ICatItemProps> = (props) => {
    const {name, shortInfo, id, toBuy} = props;
    return (
        <div className={styles.cat}>
            <div>
                <h4>{name}</h4>
                <p> {shortInfo}</p>
            </div>
            <button className={styles.buyCat} onClick={() => toBuy(id)}> Купить</button>
        </div>
    )
}

export default CatItem;