import { Grid } from '@mui/material'
import { Container} from '@mui/system'
import EquipmentList from '../../components/EquipmentList/EquipmentList'
import s from './Catalog.module.css'

const Catalog = () =>{
    return(
        <Container>
            <Grid container>
                <Grid item xs={3} style={{background: "yellow"}}>
                    1
                </Grid>
                <Grid item xs={9}>
                    <EquipmentList />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Catalog