import LoginPage from "./components/LoginPage";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<LoginPage/>}/>
        <Route path={"/register"} element={<RegisterPage/>}/>
        <Route path={"/home"} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;