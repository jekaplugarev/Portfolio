import React from 'react';
import style from './Btn.module.css';

export const Btn = (props) => {
    return (
        <a href="#" target="_blank" className={style.button}>
            <span className={`${style.button__line} ${style.button__line_top}`}/>
            <span className={`${style.button__line} ${style.button__line_right}`}/>
            <span className={`${style.button__line} ${style.button__line_bottom}`}/>
            <span className={`${style.button__line} ${style.button__line_left}`}/>
            {props.titleBtn}
        </a>
    )
}