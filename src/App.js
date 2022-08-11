import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/nav-bar/NavBar.components";
import Authentication from "./routes/auth/authentication.component";

const App = () =>
{

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
