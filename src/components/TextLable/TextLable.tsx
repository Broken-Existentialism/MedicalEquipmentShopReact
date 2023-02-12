import { Typography } from "@mui/material";
import style from './TextLable.module.css'

interface ITextLableProps{
    text: string
    show: boolean
}

export default function TextLable({text, show}:ITextLableProps){
    return(
        <Typography sx={{display: `${show ? '' : 'none'}`}} className={style.blockText}>{text}</Typography >
    )
}