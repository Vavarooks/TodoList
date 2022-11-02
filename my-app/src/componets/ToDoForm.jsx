import React, { useState, useEffect } from "react";

const ToDoForm = (props) => {
    // const [selectedChoice, setSelectedChoice] = useState(coding[0]);
    let { createCode, setCreateCode } = props;
    const [isPicked, setIsPicked] = useState(false);
    const [listCoding, setListCoding] = useState("");

    const xyz = (code) => {
        setCreateCode([...createCode, code]);
    }


    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted");

        xyz({"text": listCoding,
            completed: false});

        setListCoding("");

    }

    useEffect(() => {
        console.log(props);
    },[])


    const coding = [
        'Python',
        'HTML',
        'Javascript',
        'Java',
        'CSS',
        'C#'
    ];

    return (
        <>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <h1>To do List</h1>

                {createCode.map((choice, i) =>
                    <ul key={i}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={choice.completed}/>
                            <label className="form-check">{choice.text}</label>
                        </div>
                    </ul>
                )}
                <ul>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check">{listCoding}</label>
                    </div>
                </ul>

            </div>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                {/* <form onSubmit={handleSubmit}> */}
                    <label className="form-lable">Add to list?</label>
                    <input className="form-control" type="text" value={listCoding} onChange={e =>
                        setListCoding(e.target.value)} />
                    <button onClick={handleSubmit} className="btn btn-secondary" type="submit">Add To List</button>
                {/* </form> */}
            </div>
            {/* {JSON.stringify(createCode)} */}
        </>
    );
}

export default ToDoForm;