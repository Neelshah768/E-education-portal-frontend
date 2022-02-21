import "./StudentChat.css";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";
const StudentChat = (props) => {
  const [input, setInput] = useState();
  const [item, setItem] = useState(false);
  const [chat, setChat] = useState([]);

  useEffect(async()=>{
    let subjectCode = {
      subject_code: localStorage.getItem("student-subject-code"),
      chat: input,
    };
    const response = await fetch("http://localhost:8000/api/chat/", {
      method: "POST",
      body: JSON.stringify(subjectCode),
      headers: {
        Authorization: "Token " + localStorage.getItem("Student-token"),
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setChat(data);
  },[]);

  
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  let subjectCode = {
    subject_code: localStorage.getItem("student-subject-code"),
    chat: input,
  };
  async function messageHandler() {
    const response = await fetch("http://localhost:8000/api/chat/", {
      method: "POST",
      body: JSON.stringify(subjectCode),
      headers: {
        Authorization: "Token " + localStorage.getItem("Student-token"),
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setChat(data);
    setItem(true);
  }
  const chatList = chat.map((cList) => (
    <ul key={Math.random()} className="Studentul">
      <li className="Studentli">{cList.username}:-</li>
      <li className="Studentli">{cList.chat}</li>
    </ul>
  ));
  return (
    <div className="schat">
      {chatList}
      <div className="chattext">
        <input
          type="text"
          placeholder="Text Something"
          onChange={inputChangeHandler}
        />
        <button onClick={messageHandler}>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default StudentChat;
