import { Link } from 'react-router-dom'
import { ICatalogItem } from '../../../types/types'
import s from './CatalogListItem.module.css'

const CatalogListItem = ({title, icon, path}: ICatalogItem) =>{
    return (
        <div className={s.catalogItem}>
            <Link to={path} className={s.itemInner}>
                <div className={s.itemImg}>
                    <img src={icon} alt="Error" />
                </div>
                <div className={s.itemTitle}>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}


export default CatalogListItem