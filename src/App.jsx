import React from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
