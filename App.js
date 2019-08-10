import React from "react";

import { categories } from "./dummy";
import NavigationBar from "./components/navigationBar";

export default function App() {
    return <NavigationBar {...categories} />;
}
