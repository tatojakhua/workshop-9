import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "./constants/routes";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <h1>App</h1>
            <nav>
                <button onClick={() => navigate(routes.HOME)}>Home</button>
                <button onClick={() => navigate(routes.PRODUCTS)}>
                    Products
                </button>
            </nav>
            <Routes>
                <Route
                    path={routes.HOME}
                    element={<Home />}
                />
                <Route
                    path={routes.PRODUCTS}
                    element={<Products />}
                />
            </Routes>
        </div>
    );
}

export default App;
