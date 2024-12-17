import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminDashBoard from "./pages/AdminDashBoard";
import PackageDetails from "./pages/PackageDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/package/:id" element={<PackageDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
