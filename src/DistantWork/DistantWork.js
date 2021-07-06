import React from 'react';
import style from './DistantWork.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <h2>I will consider the option of remote work</h2>
                <button className={styleContainer.btn}>
                    Hire me
                </button>
            </div>
        </div>
    )
}