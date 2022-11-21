import { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loading from "@/common/components/loading";
import PrivateRoutes from "./util/PrivateRoute";

const LoginPage = lazy(() => import("@/pages/login/Login"));
const DevivesPage = lazy(() => import("@/pages/devices/Devices"));
const MapPage = lazy(() => import("@/pages/map/Map"));
const AlarmPage = lazy(() => import("@/pages/alarm/Alarm"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/devices" element={<DevivesPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/alarm" element={<AlarmPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
