import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Layout }from '../context/Layout'
import Home from '../pages/Home';
import CompletedRegistration from '../pages/CompletedRegistration';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/success" element={<CompletedRegistration/>} />          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
