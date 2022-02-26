import {useState} from 'react';
import CreateQuizForm from './CreateQuizForm';
import './CreateQuiz.css';

const CreateQuiz = (props) => {
    const[isEditing,setIsEditing]=useState(false);
    
    const onSaveQuestionDataHandler = () =>{
        
        setIsEditing(false);
    }
    const startEditingHandler=()=>{
            setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }

    return ( 
        <div className="new-question">
            {!isEditing && <button onClick={startEditingHandler}>Add New Question</button>}
            {isEditing &&<CreateQuizForm 
                onSaveQuizData={onSaveQuestionDataHandler}
                onCancel={stopEditingHandler}
                />
            }
        </div>
     );
}
 
export default CreateQuiz;