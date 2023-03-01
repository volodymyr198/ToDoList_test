// import { useState } from 'react';

const DetailsToDo = ({ title, description, status }) => {
    console.log(status);

    return (
        <>
            <h2>{title}</h2>
            <h3>
                <b>Description:</b>
            </h3>
            <p>{description}</p>
            <p>
                Status
                <input type="checkbox" checked={status} />
            </p>
        </>
    );
};

export default DetailsToDo;
