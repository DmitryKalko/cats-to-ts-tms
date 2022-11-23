import CatItem from './CatItem';
import styles from './styles/catList.module.css';

import {ICat} from '../types/types'

interface ICatListProps {
	cats: ICat[],
  toBuy: (id: number) => void,
}

const CatList: React.FC<ICatListProps> = (props) => {
  const { cats, toBuy } = props;
  const allCats = cats.map(cat => (
    <CatItem key={cat.id} {...cat} toBuy={toBuy}/>
  ));
  return (
    <div className={styles.listBlock}>
      <h1>Список кошек</h1>
      <div className={styles.allCats}>
        {allCats}
      </div>
    </div>
  )
}
export default CatList;