import { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loading from "@/common/components/loading";
import { useAuthStore } from "./store/auth";

const LoginPage = lazy(() => import("@/pages/login/Login"));
const DevivesPage = lazy(() => import("@/pages/devices/Devices"));
const MapPage = lazy(() => import("@/pages/map/Map"));
const AlarmPage = lazy(() => import("@/pages/alarm/Alarm"));

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
          <Route path="/devices" element={<DevivesPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="*" element={<Navigate to="/devices" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
