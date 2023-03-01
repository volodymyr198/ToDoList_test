import FormToDo from '../FormToDo/FormToDo';
import ListToDos from '../LictToDos/LictToDos';
import styles from './app.module.css';

export const App = () => {
    return (
        <div className={styles.container}>
            <FormToDo />
            <ListToDos />
        </div>
    );
};
