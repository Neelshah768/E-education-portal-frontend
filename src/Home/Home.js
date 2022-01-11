import "./Home.css";
const Home = (props) => {
  return (
    <div className="background">
      <div className="heading">
        <h1>
          Online
          <br /> Education System
        </h1>
      </div>
      <div className="role">
        <p>Select Your Role</p>
      </div>
      <div className="action">
        <button>Student</button>
        <button>Faculty</button>
        <button>Admin</button>
      </div>
    </div>
  );
};

export default Home;
