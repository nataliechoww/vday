import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Bemyvalentine from './Bemyvalentine';
import Ideas from './Ideas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/bemyvalentine" element={<Bemyvalentine />} />
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
