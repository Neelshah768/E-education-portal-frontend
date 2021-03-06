import "./FacultyChat.css";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";
const FacultyChat = (props) => {
  useEffect(async()=>{
    let subjectCode = { subject_code: localStorage.getItem("faculty-subject-code") , "chat": input};
    const response = await fetch(
      "http://localhost:8000/api/chat/",
      {
        method: "POST",
        body: JSON.stringify(subjectCode),
        headers: {
          Authorization: "Token " + localStorage.getItem("Faculty-token"),
          "Content-type": "application/json",
        },
      }
      
    )
    const data = await response.json();
    console.log(data);
    setChat(data);
  },[]);
  const[input,setInput] = useState();
  const[item,setItem] = useState(false);
  const[chat,setChat] = useState([]);
  
  const inputChangeHandler = (event) =>{
    setInput(event.target.value);
    
  }
  let subjectCode = { subject_code: localStorage.getItem("faculty-subject-code") , "chat": input};
  async function messageHandler(){
    const response = await fetch(
      "http://localhost:8000/api/chat/",
      {
        method: "POST",
        body: JSON.stringify(subjectCode),
        headers: {
          Authorization: "Token " + localStorage.getItem("Faculty-token"),
          "Content-type": "application/json",
        },
      }
      
    )
    const data = await response.json();
    console.log(data);
    setChat(data);
    setItem(true);
    

  }
  const chatList = chat.map((cList)=>(
    <ul key={Math.random()} className="facultyul">
      <li className="facultyli">{cList.username} :-</li>
      <li className="facultyli">{cList.chat}</li>
    </ul>
  )) 
  return (
    <div className="fchat">
      {chatList}
      <div className="chattext">
        <input type="text" placeholder="Text Something" onChange={inputChangeHandler}/>
        <button onClick={messageHandler}>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default FacultyChat;
