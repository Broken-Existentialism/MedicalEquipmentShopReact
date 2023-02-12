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
import { FormInputMultiCheckbox } from './FormInputMultiCheckbox';
import { FormInputSlider } from './FormInputSlider';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  date: yup.string().test(
    'date-format',
    'Invalid date format. Must be MM.DD.YYYY',
    dateString => moment(dateString, 'MM.DD.YYYY', true).isValid()
  ).test(
    'date-range',
    `Date must be between 01/01/2000 and 12/31/${moment().year()}`,
    dateString => {
      const date = moment(dateString, 'MM.DD.YYYY');
      return date.isBetween(moment('2000-01-01'), moment(`${moment().year()}-12-31`));
    }
  )
}).required()


const options = [
  {
      label: "Option 1",
      value:  "1",
  },
  {
      label: "Option 2",
      value:  "2",
  },
  {
      label: "Option 3",
      value:  "3",
  },
]

interface IFormState{
  text: string,
  radioOption: string,
  selectOption: string,
  date: string,
  checkboxOptions: string[],
  sliderValue: number,
}

const BoxForm = styled(Box)({
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alingItems: 'start',
    margin: '5% auto',
})

const Contacts = () => {

  const {control, handleSubmit, formState:{errors}, setValue} = useForm<IFormState>({
    defaultValues:{
      text: '',
      radioOption: '',
      selectOption: '',
      date: moment().format('MM.DD.YYYY'),
      checkboxOptions: [],
      sliderValue: 0,
    },
    resolver: yupResolver(schema),
  })

  const onSubmitForm = (data: IFormState) =>{
    console.log(data)
  }

  return (
    <Container>
      {
        /*
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
        label={'Calendar'} 
        controlCallback={control} 
        dateFormat={'MM.DD.YYYY'}
        errorMessage={errors?.date && String(errors.date.message)}
        />

      <FormInputMultiCheckbox 
        name={'checkboxOptions'} 
        controlCallback={control} 
        label={'Checkbox'} 
        checkboxOptions={options} />

      <FormInputSlider 
        name={'sliderValue'} 
        label={'Slider'} 
        controlCallback={control} />
      
      <Button 
        type="submit" 
        fullWidth 
        variant="contained" 
        sx={{ mt: 3, mb: 2 , background: '#A4C9FF'}}
      >
        Submint
      </Button>

      </BoxForm>
        */
      }
    </Container>
  )
}
export default Contacts
