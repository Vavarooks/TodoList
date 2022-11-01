import React, {useState} from "react";

const newCode = (e) =>{

    const coding = [
        'Python',
        'HTML',
        'Javascript',
        'Java',
        'CSS',
        'C#'
    ];
    
        return(
            <>
                <ul>
                    {coding.map((choice, i) =>
                        <li key={i}>{choice}</li>
                    )}
                </ul>
                <div class="card d-block mx-auto w-50 my-3 border p-3">
                    <h1>To do List</h1>
                    <ul>
                        <ls>{choice}</ls>
                    </ul>
                </div>
                <div class="card d-block mx-auto w-50 my-3 border p-3">
                    <form onSubmit={handleSubmit}>
                        <select value={selectedChoice} onChange={e => setSelectedChoice}>
                            {coding.map((choice, idx) => 
                                <option key={idx} value={choice}>{choice}</option>
                            )}
                        </select>
                        <label class="form-lable">Add {choice}?</label>
                            <input class="form-control" type="checkbox" checked={isPicked} onChange={ e=> 
                                setIsPicked(e.target.value)}/>
                        <button class="btn btn-secondary">Add To List</button>
                    </form>
                </div>
            </>
        );
}

    export default function todoForm(){
        const [selectedChoice, setSelectedChoice] = useState(coding[0]);
        const [isPicked, setIsPicked] = useState(false);
        
        function handleSubmit(event){
            event.preventDefault();
            console.log("Form Submitted");
            
        }
    } 