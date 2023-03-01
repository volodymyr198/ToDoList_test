import { useSelector, useDispatch } from 'react-redux';
import { detailsToDo } from 'redux/todoSlise';
import { PropTypes } from 'prop-types';

import styles from './details-to-do.module.css';

const DetailsToDo = ({ id }) => {
    const dispatch = useDispatch();

    const { title, description, status } = useSelector(state =>
        state.todos.items.find(todo => todo.id === id)
    );

    const handleCheckboxChange = e => {
        const isChecked = e.target.checked;

        dispatch(detailsToDo({ id, status: isChecked }));
    };

    return (
        <>
            <h2 className={styles.detailsTitle}>{title}</h2>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>
                Status:
                <input
                    className={styles.detailsCheck}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    checked={status}
                />
            </p>
        </>
    );
};

DetailsToDo.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DetailsToDo;
