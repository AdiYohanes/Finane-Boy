import React from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import WalletPage from "./pages/WalletPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
