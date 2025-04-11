import React, {useState} from 'react';
import styles from './TaskManager.module.css';

import TaskItem from './TaskItem';
import TaskButton from './TaskButton';
import FormTask from './FormTask';
import EditForm from './EditForm';

const TaskManager = () => {
    const [items1, setItems1] = useState(
        [
            { header: 'Text 1', text: 'Text 1'}, 
            { header: 'Text 2', text: 'Text 2'}
        ]
    );
    const [items2, setItems2] = useState(
        [
            { header: 'Text 3', text: 'Text 3'}, 
            { header: 'Text 4', text: 'Text 4'}
        ]
    );
    const [items3, setItems3] = useState(
        [
            { header: 'Text 5', text: 'Text 5'}, 
            { header: 'Text 6', text: 'Text 6'}
        ]
    );
    const [elem, setElem] = useState(null);
    const [tasks, setTasks] = useState(null);
    const [isForm, setIsForm] = useState(false);
    const [valueText, setValueText] = useState('');
    const [valueHeader, setValueHeader] = useState('');
    const [type, setType] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [itemText, setItemText] = useState('');
    const [itemHeading, setItemHeading] = useState('');
    const [choose, setChoose] = useState(null);

    const handleDragStart = (e, item, items, index) => {
        e.dataTransfer.setData('text/plain', item);
        setElem(items[index]);
        setTasks(items);
    };
      
    const handleDrop = (e, items, setItems) => {
        e.preventDefault();

        const newItems = [];

        if (tasks !== items) {
            if (tasks === items1) {
                for (let el of items1) {
                    if (el !== elem) {
                        newItems.push(el);
                    }
                }

                setItems1(newItems);
            }

            if (tasks === items2) {
                for (let el of items2) {
                    if (el !== elem) {
                        newItems.push(el);
                    }
                }

                setItems2(newItems);
            }
            
            if (tasks === items3) {
                for (let el of items3) {
                    if (el !== elem) {
                        newItems.push(el);
                    }
                }

                setItems3(newItems);
            }

            setItems([...items, elem]);
        }
        
        setElem(null);
    };

    const openForm = (items) => {
        setIsForm(true);
        setType(items);
    };

    const closeForm = () => {
        setIsForm(false);
    }

    const handleChange1 = (event) => {
        setValueHeader(event.target.value);
    };

    const handleChange2 = (event) => {
        setValueText(event.target.value);
    };

    const deleteTask = (items, setItems, index) => {
        const arr = [];

        for (let e of items) {
            if (e !== items[index]) {
                arr.push(e);
            }
        }

        setItems(arr);
    };

    const handleItems = (type, text, header) => {
        const newTask = {header: header, text: text};

        switch(type) {
            case items1:
                items1.push(newTask);
            break;
            case items2:
                items2.push(newTask);
            break;
            case items3:
                items3.push(newTask);
            break;
        }
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleText = (event) => {
        setItemText(event.target.value);
    };

    const handleHeading = (event) => {
        setItemHeading(event.target.value);
    };

    const getData = (items, setItems, index) => {
        setChoose([items, setItems, index]);
        setItemHeading(items[index].header);
        setItemText(items[index].text);
    };

    const editTask = (heading, text, items, setItems, index) => {
        const arr = Object.assign([], items);
        arr[index].header = heading;
        arr[index].text = text;

        setItems(arr);
    };
    
    const tasks1 = items1.map((item, index) => {
        return <TaskItem 
            key={index} 
            index={index} 
            header={item.header} 
            text={item.text} 
            items={items1} 
            setItems={setItems1}
            handleDragStart={handleDragStart}
            deleteTask={deleteTask}
            edit={toggleEdit}
            getData={getData}
        />;
    });

    const tasks2 = items2.map((item, index) => {
        return <TaskItem 
            key={index} 
            index={index}
            header={item.header} 
            text={item.text} 
            items={items2} 
            setItems={setItems2}
            handleDragStart={handleDragStart}
            deleteTask={deleteTask}
            edit={toggleEdit}
            getData={getData}
        />;
    });

    const tasks3 = items3.map((item, index) => {
        return <TaskItem 
            key={index} 
            index={index}
            header={item.header} 
            text={item.text} 
            items={items3} 
            setItems={setItems3}
            handleDragStart={handleDragStart}
            deleteTask={deleteTask}
            edit={toggleEdit}
            getData={getData}
        />;
    });
    
    return (
        <>
            <div className={styles.taskManager}>
                <div className={styles.taskManagerColumn} 
                    onDragOver={(e) => e.preventDefault()} 
                    onDrop={e => handleDrop(e, items1, setItems1)}
                >
                    <h1 className={styles.header}>To Do</h1>
                    {tasks1}
                    <TaskButton toggle={openForm} items={items1}/>
                </div>
                <div className={styles.taskManagerColumn} 
                    onDragOver={(e) => e.preventDefault()} 
                    onDrop={e => handleDrop(e, items2, setItems2)}
                >
                    <h1 className={styles.header}>In Progress</h1>
                    {tasks2}
                    <TaskButton toggle={openForm} items={items2}/>
                </div>
                <div className={styles.taskManagerColumn} 
                    onDragOver={(e) => e.preventDefault()} 
                    onDrop={e => handleDrop(e, items3, setItems3)}
                >
                    <h1 className={styles.header}>Done</h1>
                    {tasks3}
                    <TaskButton toggle={openForm} items={items3}/>
                </div>
            </div>

            {
                isForm && <FormTask 
                    toggle={closeForm} 
                    handleItems={handleItems} 
                    header={valueHeader} 
                    text={valueText}
                    type={type}
                    change1={handleChange1}
                    change2={handleChange2}
                />
            }

            {
                isEdit && <EditForm 
                    edit={toggleEdit}
                    text={itemText}
                    heading={itemHeading}
                    handleText={handleText}
                    handleHeading={handleHeading}
                    choose={choose}
                    editTask={editTask}
                />
            }
        </>
    );
};

export default TaskManager;