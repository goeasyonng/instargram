/* routes */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";

/* styled-component */
import { ThemeProvider } from "styled-components";

/* apollo - reactive variables */
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar, darkModeVar } from "./apollo";

const lightTheme = {
  fontColor: "#c2c2c2",
  bgColor: "lightgray",
};

const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#c2c2c2",
};

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={isLoggedIn ? <Home /> : <Login />}
          />
          <Route path={routes.profile} element={<Profile />} />
          <Route
            path={routes.signUp}
            element={isLoggedIn ? null : <SignUp />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
