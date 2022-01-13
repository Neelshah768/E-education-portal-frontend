import Card from '../UI/Card';
import './Admin_login.css';
const Admin_login = (props) => {
  return (
    <div>
      <div className="AdminPortal">
        <p>Admin Portal</p>
      </div>
      <div>
        <Card className="login">
          <h2>Login to your Account</h2>
          <form>
            <label htmlFor="Username">Login Id:- </label>
            <input
              id="Username"
              type="text"
              placeholder="Enter your login Id"
              required
            ></input>

            <label htmlFor="Password">Password:- </label>
            <input
              id="Password"
              type="Password"
              placeholder="Enter your Password"
              required
            ></input>
            <button type="submit">Login </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Admin_login;
