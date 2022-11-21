import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { CATALOG_ROUTE } from '../../utils/consts';
import s from '../Search/Search.module.css'

export function Search(){

    const {handleSubmit} = useForm();
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    let filters = useTypeSelector(state => state.filters)

    let {setFilters} = useActions()

    const onChangeValue = (event: any) =>{
        let searchParam = event.target.value
        setValue(searchParam)
    }
    
    const submitValue = () =>{
        setFilters({
            name: value,
            brandTitle: value,
            typeName: value,
            categoryName: value,
        })
        navigate(`${CATALOG_ROUTE}/${'all'}`)
    }
    return(
        <div className={s.headerSearch}>
        <Box component='form' className={s.formBlock} onSubmit={handleSubmit(submitValue)}>
            <input onChange={(e)=>onChangeValue(e)} value={value} type="text" placeholder="TYPE YOUR QUERY..." />
            <Button variant="contained" type="submit" >
                <SearchIcon sx={{ color: 'white', fontSize: 40 }} />
            </Button>
        </Box>
    </div>
    )
}

