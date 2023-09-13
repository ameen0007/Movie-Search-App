import { Route, Routes } from "react-router-dom";

import { Home } from "./Pages/homepage/Home";

import { Protected, Protectedlogin } from "./protected";
import { Forgot } from "./Pages/forgotpaapage/Forgot";
import { Signup } from "./Pages/signuppage/Signup";
import { Login } from "./Pages/loginpage/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Protectedlogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>
        <Route element={<Protected />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
