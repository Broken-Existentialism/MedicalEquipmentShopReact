import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useForm} from "react-hook-form";
import { Button} from '@mui/material';
import { FormInputText } from './FormInputText';
import { FormInputRadio } from './FormInputRadio';
import { styled } from '@mui/system';
import { FormInputSelect } from './FormInputSelect';
import { FormInputDate } from './FormInputDate';
import moment from 'moment';


const options = [
  {
      label: "Radio Option 1",
      value:  "1",
  },
  {
      label: "Radio Option 2",
      value:  "2",
  },
  {
      label: "Radio Option 3",
      value:  "3",
  },
]

interface IFormState{
  text: string,
  radioOption: string,
  selectOption: string,
  date: moment.Moment,
  checkbox: string,
}

const BoxForm = styled(Box)({
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alingItems: 'start',
    margin: '5% auto',
})

const Contacts = () => {

  const {control, handleSubmit, formState:{errors}} = useForm<IFormState>({
    defaultValues:{
      text: '',
      radioOption: '1',
      selectOption: '',
      date: moment('2022-01-01T00:00:00.000Z', moment.ISO_8601).format(),
      checkbox: 'default',
    }
  })

  const onSubmitForm = (data: IFormState) =>{
    console.log(data)
  }

  return (
    <Container>
      <BoxForm
        component="form" 
        onSubmit={handleSubmit(onSubmitForm)}
      >

      <FormInputText 
        name={'text'} 
        controlCallback={control} 
        label={'Input Text'} 
        placeHolder={'Input Text'} 
        errorMessage={errors?.text && String(errors.text.message)} 
        fullWidth={true} />

      <FormInputRadio 
          name={'radioOption'}
          label={'Options'}
          controlCallback={control} 
          radioOptions={options}        
      />

      <FormInputSelect 
        name={'selectOption'} 
        label={'Select'} 
        controlCallback={control} 
        selectOptions={options} />

      <FormInputDate 
        name={'date'} 
        label={''} 
        controlCallback={control} 
        dateFormat={''} />

      <Button 
        type="submit" 
        fullWidth 
        variant="contained" 
        sx={{ mt: 3, mb: 2 , background: '#A4C9FF'}}
      >
        Submint
      </Button>

      </BoxForm>
    </Container>
  )
}
export default Contacts
