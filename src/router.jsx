import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import HomePage from "./pages/Homepage";
import GamePlay from "./pages/GamePlay";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/gamePlay",
        element: <GamePlay/>
    }

])
export default router