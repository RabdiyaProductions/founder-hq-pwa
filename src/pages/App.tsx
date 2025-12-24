import { Routes, Route, Navigate, Link } from "react-router-dom";

import Home from "./Home";
import Vault from "./Vault";
import Platform from "./Platform";
import Avatars from "./Avatars";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

export default function App() {
  return (
    <div style={{ padding: 18 }}>
      {/* simple nav */}
      <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
        <Link to="/">Home</Link>
        <Link to="/vault">Founder Vault</Link>
        <Link to="/platform">Platform PWAs</Link>
        <Link to="/avatars">Avatars</Link>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/vault" element={<RequireAuth><Vault /></RequireAuth>} />
        <Route path="/platform" element={<RequireAuth><Platform /></RequireAuth>} />
        <Route path="/avatars" element={<RequireAuth><Avatars /></RequireAuth>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
