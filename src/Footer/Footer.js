import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import telegram from '../common/img/telegram.png'
import whatsapp from '../common/img/free-icon-whatsapp-1384095.png'
import linkedin from '../common/img/free-icon-linkedin-logo-49068.png'
import instagram from '../common/img/free-icon-instagram-social-network-logo-of-photo-camera-48898.png'


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Eugene Plugarev</h3>
                <div className={style.socialLinks}>
                    <a href="#">
                        <img src={telegram} alt="Telegram" className={style.socialLink}/>
                    </a>
                    <a href="#">
                        <img src={whatsapp} alt="Telegram" className={style.socialLink}/>
                    </a>
                    <a href="#">
                        <img src={linkedin} alt="Telegram" className={style.socialLink}/>
                    </a>
                    <a href="#">
                        <img src={instagram} alt="Telegram" className={style.socialLink}/>
                    </a>
                </div>
                <span className={style.copyRight}>&#169; 2021 All rights reserved</span>
            </div>
        </div>
    )
}