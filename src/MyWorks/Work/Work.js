import React from 'react';
import style from './Work.module.scss';

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgContainer} style={props.style}>
                <a className={style.showBtn} href={'#'}>
                    Show
                </a>
            </div>
            <div className={style.workDescription}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}