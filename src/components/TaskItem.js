import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({index, header, text, items, setItems, handleDragStart, deleteTask, edit, getData}) => {
    return <div className={styles.taskItem} draggable 
            onDragStart={e => handleDragStart(e, e.target, items, index)}
            onClick={() => {
                edit();
                getData(items, setItems, index);
            }}
        >
        <div className={styles.textBlock}>
            <h1 className={styles.header}>{header}</h1>
            <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.deleteButton} onClick={(event) => {
            event.stopPropagation();
            deleteTask(items, setItems, index);
        }}>
            Delete
        </div>
    </div>;
};

export default TaskItem;