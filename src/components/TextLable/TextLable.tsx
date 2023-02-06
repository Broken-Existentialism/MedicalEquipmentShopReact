import { Typography } from "@mui/material";
import style from './TextLable.module.css'

interface ITextLableProps{
    text: string
}

export default function TextLable({text}:ITextLableProps){
    return(
        <Typography className={style.blockText}>{text}</Typography >
    )
}