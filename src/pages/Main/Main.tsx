import CatalogList from '../../components/CatalogList/CatalogList'
import style from './Main.module.css'

const MainPage = () =>{

    return(
        <div className={style.mainContainer}>
            <CatalogList />
        </div>
    )
}

export default MainPage