import React from 'react';
import button from './TaskButton.module.css';

const TaskButton = ({toggle, items}) => {
    return <button className={button.newTask} onClick={() => toggle(items)}>ADD TASK</button>
};

export default TaskButton; 