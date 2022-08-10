import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/nav-bar/NavBar.components";
import SignIn from "./routes/sign-in/sign-in.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
