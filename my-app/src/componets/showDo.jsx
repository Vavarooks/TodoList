import React, {useState} from "react";
import ToDoForm from './ToDoForm';

const ShowDo = (props) =>{
    const [createCode, setCreateCode] = useState([
        {
            text: "Do the dishes",
            completed: false
        }
    ])

    return(
        <div>
            <ToDoForm createCode={createCode} setCreateCode={setCreateCode} />
        </div>
    );
}

export default ShowDo;