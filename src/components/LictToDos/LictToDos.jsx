import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DetailsToDo from 'components/DetailsToDo/DetailsToDo';

import style from './list-to-dos.module.css';

const ListToDos = () => {
    const [toDoDetails, setToDoDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const todos = useSelector(state => state.todos.items);

    const showToDo = ({ title, description }) => {
        setToDoDetails({ title, description });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setToDoDetails(null);
    };

    // const [isChecked, setIsChecked] = useState(false);
    // const handleCheckboxChange = e => {
    //     setIsChecked(e.target.checked);
    // };
    // console.log(isChecked);
    return (
        <div>
            <div className={style.wrapper}>
                <p>ID</p>
                <p>TITLE</p>
                <p>DESCRIPTION</p>
                <p>STATUS</p>
            </div>
            <ol>
                {todos.map(({ title, description, status }, index) => (
                    <li className={style.li} key={index}>
                        <a
                            href="/"
                            onClick={e => {
                                e.preventDefault();
                                showToDo({ title, description });
                            }}
                        >
                            <span>{title}</span> <span>{description}</span>
                        </a>
                        <input
                            // onChange={handleCheckboxChange}
                            // checked={isChecked}
                            type="checkbox"
                        />
                    </li>
                ))}
            </ol>
            {showModal && (
                <Modal closeModal={closeModal}>
                    <DetailsToDo {...toDoDetails} />
                </Modal>
            )}
        </div>
    );
};

export default ListToDos;
