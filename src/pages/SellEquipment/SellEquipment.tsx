import { Box, Button, Container, Grid, Paper, styled, Typography} from "@mui/material"
import { useForm } from "react-hook-form"
import TextLable from "../../components/TextLable/TextLable"
import { FormInputText } from "../Contacts/FormInputText"
import roomPhoto from '../../assets/images/CompanyInfo/1.jpg'
import { useTypeSelector } from "../../hooks/useTypeSelector"
import BrandList from "../../components/BrandList/BrandList"

const BoxForm = styled(Box)({
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alingItems: 'start',
    margin: '0% auto',
    boxShadow: ' 0 0 5px 5px rgba(34, 60, 80, 0.03)',
    padding: '20px',
    borderRadius: '10px',
})


export const SellEquipment = () =>{

    const items = useTypeSelector(state => state.medicalEquipments).total

    const {control, handleSubmit, formState:{errors}} = useForm({
            defaultValues:{
                organization: '',
                phoneNumber: '(+373) -',
                subject: '',
                email: '',
            }
        }
    )

    const onSubmitForm = (formData: any) =>{
        console.log(formData)
    }   

    return(
        <Container >
            <Box sx={{}} >
            <Paper elevation={3} sx={{width:'400px !important', padding: '10px', fontSize: '14px'}} >
                We can help your organization with the sale and sale of equipment !
            </Paper>
            <Grid container sx={{backgroundColor: '', height: '', marginBottom: '80px'}} spacing={3}>
                <Grid item xs="auto">
                    <BoxForm component={'form'} onSubmit={handleSubmit(onSubmitForm)}>
                        <Grid container  direction="column" spacing={3}>
                            <Grid item>
                                <FormInputText 
                                    name={"organization"} 
                                    controlCallback={control} 
                                    label={"Organization Name"} 
                                    placeHolder={"Enter Organization Name"} 
                                    errorMessage={undefined} 
                                    fullWidth={true}
                                />
                            </Grid>

                            <Grid item>
                                <FormInputText
                                    name={"email"} 
                                    controlCallback={control} 
                                    label={"Email"} 
                                    placeHolder={"Enter Email"} 
                                    errorMessage={undefined} 
                                    fullWidth={true}
                                />
                            </Grid>

                            <Grid item>
                                <FormInputText
                                    name={"phoneNumber"} 
                                    controlCallback={control} 
                                    label={"Phone Number"} 
                                    placeHolder={"Enter Phone Number"} 
                                    errorMessage={undefined} 
                                    fullWidth={true}
                                />
                            </Grid>

                            <Grid item>
                                <FormInputText
                                    name={"subject"} 
                                    controlCallback={control} 
                                    label={"Subject"} 
                                    placeHolder={"Enter Subject"} 
                                    errorMessage={undefined} 
                                    fullWidth={true}
                                />
                            </Grid>

                            
                        </Grid>

                        <Button 
                            type="submit" 
                            fullWidth 
                            variant="contained" 
                            sx={{ mt: 3, mb: 2 , background: '#A4C9FF'}}
                        >
                            Submint
                        </Button>
                    </BoxForm>
                </Grid>
                <Grid item xs>
                    <Grid container spacing={0} >

                        <Grid item xs={12}>
                            <p style={{
                                textAlign: 'justify', 
                                textIndent: '20px',
                                lineHeight: '24px',
                                fontSize: '16px',
                                fontFamily: 'Roboto Condensed, Arial, sans-serif',
                                }}>
                            Our company specializes in providing sales support for medical equipment.
We have extensive knowledge and expertise in the medical industry.
Our goal is to help clients increase their sales and profits through our services.
We offer customized sales strategies tailored to meet each client's unique needs.
Our team of experienced professionals works closely with clients to understand their products and target market.
We provide marketing support, lead generation and customer engagement activities.
Our services also include market research, competitor analysis, and product positioning.
We help clients showcase their products effectively and reach their target audience.
Our focus is on delivering results, and we are committed to providing high-quality services to our clients.
If you are looking to boost your medical equipment sales, we are the right choice for you.
                            </p>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

           <BrandList show={false} />


            </Box>
            
        </Container>
    )
}