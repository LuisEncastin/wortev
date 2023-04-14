import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
