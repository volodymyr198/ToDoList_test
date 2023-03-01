import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DetailsToDo from 'components/DetailsToDo/DetailsToDo';
import { detailsToDo } from 'redux/todoSlise';

import styles from './list-to-dos.module.css';

const ListToDos = () => {
    const [toDoDetails, setToDoDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const todos = useSelector(state => state.todos.items);

    const dispatch = useDispatch();

    const handleTaskClick = (id, title, description, status) => {
        setToDoDetails({ id, title, description, status });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setToDoDetails(null);
    };

    const handleCheckboxChange = (id, status) => {
        dispatch(detailsToDo({ id, status }));
    };

    return (
        <>
            <div className={styles.wrapper}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            ({ id, title, description, status }, index) => (
                                <tr
                                    onClick={e => {
                                        if (e.target.type === 'checkbox') {
                                            return;
                                        }
                                        handleTaskClick(
                                            id,
                                            title,
                                            description,
                                            status
                                        );
                                    }}
                                    key={index}
                                >
                                    <td>{index + 1}.</td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td>
                                        <input
                                            onChange={e =>
                                                handleCheckboxChange(
                                                    id,
                                                    e.target.checked
                                                )
                                            }
                                            checked={status}
                                            type="checkbox"
                                        />
                                        {status}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>

                {showModal && (
                    <Modal closeModal={closeModal}>
                        <DetailsToDo {...toDoDetails} />
                    </Modal>
                )}
            </div>
        </>
    );
};

export default ListToDos;
