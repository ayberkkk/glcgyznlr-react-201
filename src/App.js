import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Contact from "./Contact";
import LoginForm from "./components/LoginForm";
import DashboardLayouts from "./layouts/DashboardLayouts";
import AuthLayouts from "./layouts/AuthLayouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayouts />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="auth" element={AuthLayouts}>
          <Route index element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
