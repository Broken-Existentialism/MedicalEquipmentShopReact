import { Grid, Paper, styled } from '@mui/material'
import { Container} from '@mui/system'
import EquipmentList from '../../components/EquipmentList/EquipmentList'
import s from './Catalog.module.css'

/*   <EquipmentList /> */

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Catalog = () =>{
    return(
        <Container> 
            <Grid container rowSpacing={0} columnSpacing={5}>
                <Grid item xs={6} sx={{ backgroundColor:'blue'}}>
                    <div>
                        1
                    </div>
                </Grid>
                <Grid item xs={6} sx={{ backgroundColor:'red'}}>
                    <div style={{backgroundColor:'white'}}>
                        2
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Catalog