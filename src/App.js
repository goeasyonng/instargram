import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";

import routes from "./routes";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.signUp} element={isLoggedIn ? null : <SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
