import React from "react";
import { Toast } from "../components/Toast";

const AppProvider: React.FC = ({ children }) => <Toast>{children}</Toast>;

export default AppProvider;
