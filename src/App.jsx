import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/404'
import ProjectDetail from './pages/ProjectDetail'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "preline/preline";

export const AppContext = createContext();

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition
				key={location.pathname}
				classNames={location.pathname.startsWith('/project/') ? 'page-slide' : 'page-fade'}
				timeout={400}
			>
				<Routes location={location}>
					<Route path="/" element={<Homepage />} />
					<Route path="/project/:id" element={<ProjectDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}

function App() {
	const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
