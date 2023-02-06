import style from './BrandListItem.module.css'

interface IBrandListItem{
    img: string | null
}

export default function BrandListItem ({img}: IBrandListItem){
    return(
        <div className={style.brandItem}>
            <div className={style.itemImg}>
                <img src={img ? img : ''} alt="Error" />
            </div>
        </div>
    )
}