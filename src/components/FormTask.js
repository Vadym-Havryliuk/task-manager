import React from 'react';
import form from './FormTask.module.css';

const FormTask = ({toggle, handleItems, header, text, type, change1, change2}) => {
    return (
        <div className={form.background}>
            <form action="" method="GET" className={form.formAbsolute}>
                <div className={form.text}>Enter task name:</div>
                <input className={form.input} value={header} onChange={change1}/><br/>
                <div className={form.text}>Enter you want to do:</div>
                <input className={form.input} value={text} onChange={change2}/><br/>
                <input type="submit" className={form.submitData} onClick={() => {
                    toggle();
                    handleItems(type, text, header);
                }}
                />
            </form> 
        </div> 
    );
};

export default FormTask;