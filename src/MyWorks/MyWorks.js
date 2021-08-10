import React from 'react';
import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './Work/Work';
import {Title} from '../common/components/Title/Title';
import socialImage from '../assets/image/social.jpg'
import todoImage from '../assets/image/todolist.jpg'

export const MyWorks = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'My Works'}/>
                <div className={style.works}>
                    <Work style={social} title={'Todo List'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work style={todolist} title={'Social Network'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'Landing Page'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Work title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}