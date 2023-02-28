const DetailsToDo = ({ title, description, closeModal }) => {
    return (
        <>
            <h2>{title}</h2>
            <h3>
                <b>Description:</b>
            </h3>
            <p>{description}</p>
            <p>
                Status
                <input type="checkbox" />
            </p>
            <button type="button" onClick={closeModal}>
                close
            </button>
        </>
    );
};

export default DetailsToDo;
