import s from './Footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { FACEBOOK_ROUTE, INSTAGRAM_ROUTE, TELEGRAM_ROUTE, YOUTUBE_ROUTE } from '../../utils/consts';
import { Container } from '@mui/system';

const Footer = () =>{
    return(
        <footer className={s.footerContainer}>
           <Container>
                <div className={s.footerInfo}>

                    <div className={s.Social}>

                        <a href={FACEBOOK_ROUTE} target='_blank' rel="noreferrer">
                            <FacebookIcon className={s.facebookIcon} />
                        </a>
                        <a href={TELEGRAM_ROUTE} target='_blank' rel="noreferrer">
                            <TelegramIcon className={s.telegramIcon}/>
                        </a>
                        <a href={INSTAGRAM_ROUTE} target='_blank' rel="noreferrer"> 
                            <InstagramIcon className={s.instagramIcon}/>
                        </a>
                        <a href={YOUTUBE_ROUTE} target='_blank' rel="noreferrer">
                            <YouTubeIcon className={s.youtubeIcon}/>
                        </a>
                        
                    </div>

                    <div className={s.accsesBlockInfo}>

                        <a href='mailto:info@medicalequipment.com' className={s.accsesBlockInfoItem}>
                            <span><MailOutlineIcon /></span>
                            <p>info@medicalequipment.com</p>
                        </a>
                        
                        <a href='tel:06xxxxx39' className={s.accsesBlockInfoItem}>
                            <span><CallIcon /></span>
                            <p>+373 06xxxxx9</p>
                        </a>

                        <div className={s.accsesBlockInfoItem}>
                            <span><AccessTimeIcon /></span>
                            <p>From 9:00 to 18:00</p>
                        </div>
                        
                        <div className={s.accsesBlockInfoItem}>
                            <span><LocationOnIcon /></span>
                            <p>1313 Disneyland Dr, Anaheim, CA 92802, USA</p>
                        </div>
                        
                    </div>

                </div>
            </Container>
        </footer>
    )
}

export default Footer