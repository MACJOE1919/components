import ProfilePhoto from "./component/Profile/ProfilePhoto";
import "./App.css";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address";
function App() {
  return (
    <div className="App">
      <ProfilePhoto className="profile" />
      <div className="name">
        {" "}
        <FullName />
      </div>
      <div className="adress">
        {" "}
        <Address />
      </div>
    </div>
  );
}

export default App;
