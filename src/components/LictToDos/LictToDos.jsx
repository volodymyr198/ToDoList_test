import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DetailsToDo from 'components/DetailsToDo/DetailsToDo';

import style from './list-to-dos.module.css';

const ListToDos = () => {
    const [toDoDetails, setToDoDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const todos = useSelector(state => state.todos.items);
    console.log(todos.status);

    console.log(showModal);
    const showToDo = (title, description) => {
        setToDoDetails(title, description);
        setShowModal(true);
    };
    console.log(toDoDetails);

    const closeModal = () => {
        setShowModal(false);
        setToDoDetails(null);
    };

    return (
        <div>
            <div className={style.wrapper}>
                <p>ID</p>
                <p>TITLE</p>
                <p>DESCRIPTION</p>
                <p>STATUS</p>
            </div>
            <ol>
                {todos.map(({ title, description }, index) => (
                    <li className={style.li} key={index}>
                        <a
                            href="/"
                            onClick={() => showToDo(title, description)}
                        >
                            <span>{title}</span> <span>{description}</span>
                        </a>
                        <input type="checkbox" />
                    </li>
                ))}
            </ol>
            {showModal && (
                <Modal close={closeModal}>
                    <DetailsToDo {...toDoDetails} closeModal={closeModal} />
                </Modal>
            )}
        </div>
    );
};

export default ListToDos;
