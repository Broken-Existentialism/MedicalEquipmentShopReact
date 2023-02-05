import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Box, Grid, CircularProgress} from "@mui/material";
import { useState } from "react";
import { ICreateBrandType } from "../../types/brand";
import { createNewBrand} from "../../api/brandServiceApi";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FileUpload } from "../FileUpload/FileUpload";

const schema = yup.object({
    title: yup.string()
        .required("Title is required")
        .max(20, "Title should have a maximum length of 20"),
    country: yup.string()
        .required("Country is required")
        .max(20, "Country should have a maximum length of 20"),
    discount: yup.string()
        .notRequired()
  }).required()

export default function BrandCreateForm(){

    const [selectedFile, setFile] = useState<any>();
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [uploadStatus, setUploadStatus] = useState<boolean>(false)


    const { control, handleSubmit, formState:{ errors }, reset } = useForm({
        defaultValues: {
        title: '',
        country: '',
        discount: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data : ICreateBrandType) =>{

        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('country', data.country)
        formData.append('discount', data.discount ? data.discount : '')
        formData.append('img', selectedFile ? selectedFile: '')

        setLoading(true)
        try
        {
            let result =  await createNewBrand(formData)
            console.log(result)
            setUploadStatus(true)
            setTimeout(() => {
                setUploadStatus(false)
            }, 1500);
        }
        catch(ex: any)
        {
            setError(ex.responce.data)
            setLoading(false)
        }
        setLoading(false)
        setFile(null)
        setError(null)
        reset()
    }

    const handleFileChange = (event: any) => {
        setFile(event.target.files?.[0]);
    };
 
    return (
        <Box sx={{width: '400px', display: 'flex', flexDirection: 'column',}}>
            {loading && <CircularProgress sx={{color:'#A4C9FF'}}/>}
            {error && 
                <Box sx={{display:'flex', alignItems: 'center', justifyContent:'center', margin:'10px'}}> 
                    <ErrorIcon fontSize="large" sx={{color:'red'}}/> 
                    <Box component="span"> {error.error} </Box>
                </Box>}
            {uploadStatus &&
                <Box sx={{display:'flex', alignItems: 'center', justifyContent:'center', margin:'10px'}}> 
                    <CheckCircleIcon fontSize="large" sx={{color:'green'}}/> 
                    <Box component="span">Form submitted successfully!</Box>
                </Box>}
            <Box component="form"  onSubmit={handleSubmit(onSubmit)} >
                <Grid container direction='row' spacing={2} justifyContent="center" alignItems="flex-start">
                    <Grid item xs={6}>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <TextField 
                                fullWidth
                                margin="normal"
                                required
                                label="Title" 
                                type="text"  
                                autoFocus
                                helperText={errors?.title && String(errors.title.message)} 
                                placeholder="Title"{...field} />}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="country"
                            control={control}
                            render={({ field }) => <TextField 
                                fullWidth
                                margin="normal"
                                required
                                label="Country" 
                                type="text"  
                                helperText={errors?.country && String(errors.country.message)} 
                                placeholder="Country"{...field} />}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="discount"
                            control={control}
                            render={({ field }) => <TextField 
                                fullWidth
                                margin="normal"
                                label="Discount" 
                                type="number"  
                                helperText={errors?.discount && String(errors.discount.message)} 
                                placeholder="Discount"{...field} />}/>
                    </Grid>
                    <Grid item xs={6}>
                        <FileUpload handleFileChange={handleFileChange} />
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent="center" alignItems="center">
                   {
                        selectedFile && 
                        <Box>
                            <Box>File Name: {selectedFile.name}</Box>
                            <Box>File Size: {selectedFile.size}</Box>
                            <Box>Last Modified Date: {selectedFile.lastModifiedDate.toLocaleDateString()}</Box>
                            <Box>File Type: {selectedFile.type}</Box>
                        </Box>
                   }
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , background: '#A4C9FF'}}
                    >
                    Create
                </Button>
            </Box>
        </Box>
    )
}


