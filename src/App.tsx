import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Vault from "./Vault";
import Platform from "./Platform";
import Avatars from "./Avatars";
import RequireAuth from "./RequireAuth";
import Engine from "./Engine";

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

        {/* Founder internal engines (private, never public) */}
        <Route
          path="/engine/:engineId"
          element={
            <RequireAuth>
              <Engine />
            </RequireAuth>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
