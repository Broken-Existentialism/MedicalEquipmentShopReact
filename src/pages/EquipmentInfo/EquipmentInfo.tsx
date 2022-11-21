import { Box, Container, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import s from '../EquipmentInfo/EquipmentInfo.module.css'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { useEffect, useState } from "react"
import { getEquipmentInfoById } from "../../api/equipmentInfoServiceApi"
import { IEquipmentInfoType } from "../../types/equipmentInfo"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { IMedicalEquipmentType } from "../../types/medicalEquipments"
import { getMedicalEquipmentById } from "../../api/medicalEquipmentsServiceApi"

const EquipmentInfo = () =>{

    let params = useParams()
    
    const [equipmentInfo, setEquipmentInfo] = useState<IEquipmentInfoType>()
    const [equipment, setEquipment] = useState<IMedicalEquipmentType>()

    useEffect(() =>{
        const fetchData = async () =>{
            let infoResult = await getEquipmentInfoById(Number(params.id))
            let equipmentResult = await getMedicalEquipmentById(Number(params.id))
            setEquipmentInfo(infoResult.data)
            setEquipment(equipmentResult.data)
        }
        fetchData()
    }, [])

    return(
        <Container>
            <Grid container className={s.equipmentInfoBlock}>
                <Grid item xs={6}>
                    <Box className={s.imageBlock}>
                        <img src={equipment?.img ? equipment?.img : undefined } alt="Error"/>
                    </Box>
                </Grid>
                <Grid item xs={6} className={s.infoBlock}>
                    <Typography sx={{color:'#898989', fontSize:'13px'}}>{`Id: ${equipmentInfo?.medicalEquipmentId}`}</Typography>
                    <Typography sx={{color:'#3550aa', fontWeight: 'bold'}}>{`${equipment?.name} ${equipment?.year}`}</Typography>
                    <Typography sx={{display:'flex', alignItems:'center', color:'#d96857'}}>
                        {`Availability: ${equipmentInfo?.availability}`}
                        <Inventory2Icon fontSize='small'/>
                    </Typography>
                    <Typography>{`State: ${equipmentInfo?.state}`}</Typography>
                    <Typography sx={{display:'flex', alignItems:'center'}}>
                        {`Guaranty: ${equipmentInfo?.guaranty}`}
                        <WorkspacePremiumIcon sx={{color:'green'}} />
                    </Typography>
                    <Typography>{`Description: ${equipmentInfo?.description}`}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EquipmentInfo