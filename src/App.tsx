import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Platform from "./pages/Platform";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <h2>Founder HQ</h2>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/">Home</Link>
          <Link to="/vault">Founder Vault</Link>
          <Link to="/platform">Platform PWAs</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>
    </div>
  );
}
