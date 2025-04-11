import React from 'react';
import styles from './EditForm.module.css';

const EditForm = ({ edit, text, heading, handleText, handleHeading, choose, editTask }) => {
    
    return (
        <div className={styles.background}>
            <div className={styles.form}>
                <div className={styles.text}>Edit heading</div>
                <input className={styles.input} value={heading} onChange={handleHeading}/>
                <div className={styles.text}>Edit task</div>
                <input className={styles.input} value={text} onChange={handleText}/>
                <button className={styles.button} onClick={() => 
                    {
                        edit();
                        editTask(heading, text, choose[0], choose[1], choose[2]);
                    }}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default EditForm;