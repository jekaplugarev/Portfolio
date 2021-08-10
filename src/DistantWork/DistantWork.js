import React from 'react';
import style from './DistantWork.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title/Title';


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <Title title={'I will consider the option of remote work'}/>
                <button className={`${styleContainer.btn} ${style.btn}`}>
                    Hire me
                </button>
            </div>
        </div>
    )
}