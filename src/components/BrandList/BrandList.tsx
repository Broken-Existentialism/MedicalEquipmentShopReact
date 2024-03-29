import { Box, Container, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getAllBrands } from "../../api/brandServiceApi";
import { IBrandType } from "../../types/brand";
import { Loading } from "../Loading/Loading";
import BrandListItem from "./BrandListItem/BrandListItem";
import style from './BrandList.module.css'
import TextLable from "../TextLable/TextLable";

interface IProps{
    show: boolean
}


export default function BrandList({show}: IProps){

    const [categoryItems, setCategoryItems] = useState<IBrandType[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            try
            {
                let result = await getAllBrands()
                setCategoryItems(result.data)
            }
            catch(ex: any)
            {
                setError(ex)
                setLoading(false)
            }
            setLoading(false)
        }
        fetchData()
      }, [])


    return(
        <div>
            <TextLable text={"Our Brands"} show={show}  />
            {
                loading
                ? <Loading />
                : <div className={style.brandGrid}>
                        {
                            categoryItems.map((item, index)=> <BrandListItem img={item.img} key={index}/>)
                        }
                 </div>
            }
        </div>
    )
}