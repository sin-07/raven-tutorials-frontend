import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import AdmissionForm from "./Components/AdmissionForm";
import SubmissionSuccess from "./Components/SubmissionSuccess ";
import GettingUsers from "./Components/GettingUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<AdmissionForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/submit-successfully" element={<SubmissionSuccess />} />
          <Route path='/getUsers' element={<GettingUsers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
