import React from 'react';
import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './Work/Work';

export const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>
                    My Works
                </h2>
                <div className={style.works}>
                    <Work title={'Todo List'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'Landing Page'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}