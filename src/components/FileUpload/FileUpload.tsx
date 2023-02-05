import {Box} from "@mui/material";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import style from './FileUpload.module.css'

interface IFileUploadProps{
    handleFileChange: any
}

export const FileUpload = ({handleFileChange}: IFileUploadProps) =>{
    return(
        <Box className={style.fileUploadButton}>
            <input id="file"  type="file" onChange={handleFileChange} />
            <label htmlFor="file">
                <div><CloudDownloadIcon fontSize="large" /></div>
                    <div>Choose a photo</div>
            </label>
        </Box>
    )
}