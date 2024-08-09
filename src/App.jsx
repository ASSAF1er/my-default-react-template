import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./app/layouts/DefaultLayout";

import { routes } from "./router/routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
