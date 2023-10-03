import "./App.css";
import { SettingsPage } from "./pages/SettingsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
