import { Box, Container } from "@mui/material";
import BrandList from "../../components/BrandList/BrandList";
import style from './About.module.css'
import companyInfoPhoto from '../../../src/assets/images/CompanyInfo/1.jpg'

const About = () => {

  return (
    <Container>
      <Box className={style.companyInfoBlock}>
        <Box className={style.companyInfoText}>
           <p>
              Our company specializes in the repair and sale of used medical equipment. 
              We believe in providing cost-effective solutions for healthcare facilities without compromising on the quality of care. 
              Our team of experienced technicians thoroughly inspects and repairs each piece of equipment to ensure that it functions just like new. 
              With a wide range of products available, we aim to meet the needs of all our clients. 
              Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
              Our team of experts has extensive experience in repairing a wide range of medical equipment, from simple instruments to complex machines.
              Our services are available 24/7 to ensure that we are always there to support our clients when they need us the most.
              We are constantly updating our inventory with the latest and greatest equipment to meet the ever-changing needs of the healthcare industry.
              Contact us today to learn more about our services.
           </p>
        </Box>
        <Box className={style.companyInfoPhotoBlock}>
          <img src={companyInfoPhoto} alt='Error' />
        </Box>
      </Box>
      <BrandList />
    </Container>
  );
};

export default About