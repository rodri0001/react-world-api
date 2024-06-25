import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Country from "./features/Country/Country";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/country/:name"
            element={
              <AppProvider>
                <Country />
              </AppProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
