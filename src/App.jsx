import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";
import ProjectDetail from "./pages/ProjectDetail";

export const AppContext = createContext();

function getInitialTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // 저장소를 쓸 수 없는 환경에서는 테마만 적용
    }
  }, [theme]);

  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
