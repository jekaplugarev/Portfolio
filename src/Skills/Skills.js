import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Title/Title';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}