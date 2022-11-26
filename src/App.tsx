import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loading from "@/components/loading";
import { useAuthStore } from "./store/auth";
import Layout from "./pages/layout";

const LoginPage = lazy(() => import("@/pages/login"));
const DevicesPage = lazy(() => import("@/pages/devices"));
const MapPage = lazy(() => import("@/pages/map"));

function App() {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/devices/:device" element={<DevicesPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="*" element={<Navigate to="/devices" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
