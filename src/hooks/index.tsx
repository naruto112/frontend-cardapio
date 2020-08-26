import React from "react";
import { AuthProvider } from "./auth";
import { Toast } from "../components/Toast";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <Toast>{children}</Toast>
  </AuthProvider>
);

export default AppProvider;
