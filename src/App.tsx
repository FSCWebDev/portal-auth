import { Route, Routes } from "react-router";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<h1>Redirecting...</h1>}
        />
        <Route
          path='sign-up'
          element={<SignUp />}
        />
        <Route
          path='log-in'
          element={<LogIn />}
        />
        <Route
          path='dashboard'
          element={<Dashboard />}
        />
      </Routes>
    </>
  );
}

export default App;
