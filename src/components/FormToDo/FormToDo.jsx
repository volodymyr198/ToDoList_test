import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from 'redux/todoSlise';

import styles from './form-to-do.module.css';

function FormToDo() {
    const dispatch = useDispatch();
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const title = form.elements.title.value.trim();
        const description = form.elements.description.value.trim();

        if (!title) {
            setTitleError(true);
        }

        if (!description) {
            setDescriptionError(true);
        }

        if (title && description) {
            dispatch(addToDo(title, description));
            form.reset();
            setTitleError(false);
            setDescriptionError(false);
        }
    };

    const handleInputChange = e => {
        const { name } = e.target;
        if (name === 'title') {
            setTitleError(false);
        }
        if (name === 'description') {
            setDescriptionError(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
                Title
                <input
                    className={`${styles.input} ${
                        titleError ? styles.error : ''
                    }`}
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    onChange={handleInputChange}
                />
                {titleError && (
                    <div className={styles.errorMessage}>
                        This field is required
                    </div>
                )}
            </label>

            <label className={styles.label}>
                Description
                <input
                    className={`${styles.input} ${
                        descriptionError ? styles.error : ''
                    }`}
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    onChange={handleInputChange}
                />
                {descriptionError && (
                    <div className={styles.errorMessage}>
                        This field is required
                    </div>
                )}
            </label>

            <button className={styles.btn} type="submit">
                Create
            </button>
        </form>
    );
}

export default FormToDo;
