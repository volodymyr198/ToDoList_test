import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DetailsToDo from 'components/DetailsToDo/DetailsToDo';
import { detailsToDo } from 'redux/todoSlise';

import styles from './list-to-dos.module.css';

const ListToDos = () => {
    const [toDoDetails, setToDoDetails] = useState(null);

    const todos = useSelector(state => state.todos.items);

    const dispatch = useDispatch();

    const handleTaskClick = (id, title, description, status) => {
        setToDoDetails({ id, title, description, status });
    };

    const closeModal = () => {
        setToDoDetails(null);
    };

    const handleCheckboxChange = (id, status) => {
        dispatch(detailsToDo({ id, status }));
    };

    const handleTableClick = event => {
        const checkbox = event.target.closest('input[type="checkbox"]');
        const tr = event.target.closest('tr');
        if (!checkbox && tr) {
            const id = tr.getAttribute('data-id');
            const todo = todos.find(todo => todo.id === id);

            handleTaskClick(todo.id, todo.title, todo.description, todo.status);
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <table onClick={handleTableClick}>
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
                                <tr key={index} data-id={id}>
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

                {toDoDetails && (
                    <Modal closeModal={closeModal}>
                        <DetailsToDo {...toDoDetails} />
                    </Modal>
                )}
            </div>
        </>
    );
};

export default ListToDos;
