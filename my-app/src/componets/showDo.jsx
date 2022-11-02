import React, {useState} from "react";
import ToDoForm from './ToDoForm';

const ShowDo = (props) =>{
    const [createCode, setCreateCode] = useState([
        {
            text: "",
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