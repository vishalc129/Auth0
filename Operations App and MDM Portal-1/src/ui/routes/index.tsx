import React, { Suspense } from "react";
import { Routes as Switch, Route } from "react-router-dom";

import ProtectedRoute from "./../../auth/protected-route";
import { AppRoutes } from "./../../constants";
import { Dashboard, Profile, ExternalApi } from "../pages";

export default function Routes() {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route path={AppRoutes.ROOT_PATH} element={<Dashboard />} />
        <Route
          path={AppRoutes.DASHBOARD_PATH}
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          path={AppRoutes.PROFILE_PATH}
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="/external-api" element={<ExternalApi />} />
      </Switch>
    </Suspense>
  );
}
