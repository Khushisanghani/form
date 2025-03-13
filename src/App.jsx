import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Comoponent/Content"
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitData from "./Comoponent/SubmitData";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/submit" element={<SubmitData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
