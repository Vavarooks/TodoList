import React, {useState} from "react";

    const coding = [
        'Python',
        'HTML',
        'Javascript',
        'Java',
        'CSS',
        'C#'
    ];

export default function todoForm(){
    const [selectedChoice, setSelectedChoice] = useState(coding[0]);
    const [isPicked, setIsPicked] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
    }

    return(
        <>
            <div class="card d-block mx-auto w-50 my-3 border p-3">
                <h1>To do List</h1>
                <ul>
                    <ls>{choice}</ls>
                </ul>
            </div>
            <div class="card d-block mx-auto w-50 my-3 border p-3">
                <form onSubmit={handleSubmit}>
                    <select value={selectedChoice} onChange={e => setSelectedChoice}>
                        {fruit.map((choice, idx) => 
                            <option key={idx} value={choice}>{choice}</option>
                        )}
                    </select>
                    <label>
                        <input type="checkbox" checked={isPicked} onChange={ e=>
                            setIsPicked(e.target.value)}/>
                    </label>
                    <button>Add To List</button>
                </form>
            </div>
        </>
    );
}