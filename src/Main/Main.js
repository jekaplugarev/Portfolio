import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.scss'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Eugene Plugarev</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    )
}