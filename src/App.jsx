import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./SCSS/App.scss";
import MainLayout from "./Components/MainLayout";
import PersonalInfo from "./Components/Steps/PersonalInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PersonalInfo />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
