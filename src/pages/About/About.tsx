import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container } from "@mui/material";


const schema = yup.object({
  name: yup.string().required().min(3).max(200),
  year: yup.number().required().positive(),
  price: yup.number().required().positive(),
  brandId: yup.number().required().positive(),
  typeId: yup.number().required().positive(),
}).required();

const StyledTextField = styled(TextField) ({
  backgroundColor: "white",
  padding: 0.1,
  width: "100%",
  borderRadius: 10,
  '& p':{
    color:'rgb(255, 108, 50)',
  },
  '& .MuiFormLabel-root' : {
    color: 'black',
    
  },
});

const About = () => {

  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      name: '',
      year: 0,
      price: 0,
      brandId: 0,
      typeId: 0,
      img: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data : any) => {
   
      console.log(data)
  }

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item xs={6}>
          <Controller
          name="name"
          control={control}
          render={({ field }) => <StyledTextField  label="Name" helperText={errors?.name && String(errors.name.message)} placeholder="Name" variant="filled" type="text" {...field} />}
          />
          </Grid>

          <Grid item xs={6}>
          <Controller
            name="year"
            control={control}
            render={({ field }) => <StyledTextField label="Year" helperText={errors?.year && String(errors.year.message)} placeholder="Year" variant="filled" type="text" {...field} />}
          />
          </Grid>

          <Grid item xs={6}>
          <Controller
            name="price"
            control={control}
            render={({ field }) => <StyledTextField label="Price" helperText={errors?.price && String(errors.price.message)} placeholder="Price" variant="filled" multiline={true} type="text" {...field} />}
          />
          </Grid>

          <Grid item xs={6}>
          <Controller
            name="brandId"
            control={control}
            render={({ field }) => <StyledTextField label="Brand Id" helperText={errors?.brandId && String(errors.brandId.message)} placeholder="Brand Id" variant="filled" multiline={true} type="number" {...field} />}
          />
          </Grid>

          <Grid item xs={6}>
          <Controller
            name="typeId"
            control={control}
            render={({ field }) => <StyledTextField label="Type Id" helperText={errors?.typeId && String(errors.typeId.message)} placeholder="Type Id" variant="filled" multiline={true} type="number" {...field} />}
          />
          </Grid>

          <Grid item xs={6}>
          <Controller
            name="img"
            control={control}
            render={({ field }) => <StyledTextField label="Img"  helperText={errors?.img && String(errors.img.message)} placeholder="Img" variant="filled" type="file" {...field} />}
          />
          </Grid>

          <Grid item xs={6}>
            <Button type="submit" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default About