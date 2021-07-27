import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type="text" className={style.contactsInput}/>
                    <input type="text" className={style.contactsInput}/>
                    <textarea rows={4} className={style.contactsTextarea}/>
                </form>
                <button className={styleContainer.btn}>
                    Send
                </button>
            </div>
        </div>
    )
}