import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Vault from "./pages/Vault";
import Platform from "./pages/Platform";
import Avatars from "./pages/Avatars";
import RequireAuth from "./pages/RequireAuth";
import Engine from "./pages/Engine";

export default function App() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 18px" }}>
      <header style={{ marginBottom: 18 }}>
        <h3 style={{ margin: 0 }}>Founder HQ</h3>

        <nav
          style={{
            display: "flex",
            gap: 14,
            marginTop: 10,
            flexWrap: "wrap",
            fontSize: 13,
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/vault">Founder Vault</Link>
          <Link to="/platform">Platform PWAs</Link>
          <Link to="/avatars">Avatars</Link>
          <Link to="/engine">Engine</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route
          path="/vault"
          element={
            <RequireAuth>
              <Vault />
            </RequireAuth>
          }
        />
        <Route
          path="/platform"
          element={
            <RequireAuth>
              <Platform />
            </RequireAuth>
          }
        />
        <Route
          path="/avatars"
          element={
            <RequireAuth>
              <Avatars />
            </RequireAuth>
          }
        />
        <Route
  path="/engine"
  element={
    <RequireAuth>
      <Engine />
    </RequireAuth>
  }
/>
<Route
  path="/engine/:key"
  element={
    <RequireAuth>
      <Engine />
    </RequireAuth>
  }
        />
      </Routes>
    </div>
  );
}
