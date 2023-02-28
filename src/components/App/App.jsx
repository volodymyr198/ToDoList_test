import FormToDo from '../FormToDo/FormToDo';
import ListToDos from '../LictToDos/LictToDos';
import style from './app.module.css';

export const App = () => {
    return (
        <div className={style.container}>
            <FormToDo />
            <ListToDos />
        </div>
    );
};
