import Card from '../UI/Card';
import { useState } from 'react';
import './Admin_login.css';
const Admin_login = (props) => {

  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState(null);

  const adminIdHandler = (event) => {
    setAdminId(event.target.value);
  };
  const adminPasswordHandler = (event) => {
    setAdminPassword(event.target.value);
  };
  async function adminFormSubmitHandler(event) {

    event.preventDefault();
    let aData = {
      username: adminId,
      password: adminPassword,
    };
    try{
      const response = await fetch('https://react-http-767a0-default-rtdb.firebaseio.com/project.json',
      {
      method: 'POST',
      body: JSON.stringify(aData),
      headers: {
        'Content-type':'application/json',
        Authorization: 'Token'
      }
    });
    if(!response.ok){
      throw new Error('Request Failed');
    }

    const data = await response.json();
      console.log(data);
    }catch(err){
      setError(err.message || 'Something Went Wrong!');
    }
    
    
    
    setAdminId("");
    setAdminPassword("");
  }

  return (
    <div>
      <div className="AdminPortal">
        <p>Admin Portal</p>
      </div>
      <div>
        <Card className="login">
          <h2>Login to your Account</h2>
          <form onSubmit={adminFormSubmitHandler}>
            <label htmlFor="Username">Login Id:- </label>
            <input
              id="Username"
              type="text"
              placeholder="Enter your login Id"
              onChange={adminIdHandler}
              value={adminId}
              required
            ></input>

            <label htmlFor="Password">Password:- </label>
            <input
              id="Password"
              type="Password"
              placeholder="Enter your Password"
              onChange={adminPasswordHandler}
              value={adminPassword}
              required
            ></input>
            <button type="submit">Login </button>
          </form>
        </Card>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Admin_login;
