import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import './css/common.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path = '/*' element={<Home></Home>}></Route>
          <Route path='/profile/*' element={<Profile></Profile>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/profile/:id' element={<Detail></Detail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
