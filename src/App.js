import "./App.css";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
