import React from "react";
import PIPortal from "../../../../../components/realtimedata/products/data_historians/aveva_pi/PIPortal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../../../../components/Layout";

export default function AvevaPI() {
  return (
    <Layout>
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            <Route
              path="/realtimedata/products/data_historians/aveva_pi/"
              exact
              element={<PIPortal />}
            />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </Layout>
  );
}
