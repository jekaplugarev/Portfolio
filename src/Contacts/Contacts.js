import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea rows={3}/>
                </form>
                <button className={styleContainer.btn}>
                    Send
                </button>
            </div>
        </div>
    )
}