import React from 'react';
import style from './Work.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>
                <button className={styleContainer.btn}>
                    Show
                </button>
            </div>
            <div className={style.workDescription}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}