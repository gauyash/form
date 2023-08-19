import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./SCSS/App.scss";
import MainLayout from "./Components/MainLayout";
import PersonalInfo from "./Components/Steps/PersonalInfo";
import Plan from "./Components/Steps/Plan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="plan" element={<Plan />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
