import { useDispatch } from 'react-redux';
import { addToDo } from 'redux/todoSlise';

import style from './form-to-do.module.css';

function FormToDo() {
    // const todos = useSelector(state => state.items);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const title = form.elements.title.value;
        const description = form.elements.description.value;
        if (title.trim() === '') {
            // setError(true);
            return;
        }
        dispatch(addToDo(title, description));
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <label className={style.label}>
                Title
                <input
                    className={style.input}
                    type="text"
                    name="title"
                    placeholder="Enter title"
                />
            </label>

            <label className={style.label}>
                Description
                <input
                    className={style.input}
                    type="text"
                    name="description"
                    placeholder="Enter description"
                />
            </label>

            <button type="submit">Create</button>
            {/* {error && <div style={{ color: 'red' }}>This field is empty</div>} */}
        </form>
    );
}

export default FormToDo;
