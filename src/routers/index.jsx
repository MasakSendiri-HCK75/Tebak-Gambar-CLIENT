import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Index from "../pages/Index";
import Roompage from "../pages/Roompage";
import Quiz from "../pages/Quiz";
import LandingPage from "../pages/Landing";
import HomePage from "../pages/Homepage";

export const router = createBrowserRouter([
    {
        path:"",
        element:<RootLayout/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>
            },
            {
                path:"homepage",
                element:<HomePage/>
            },
            {
                path:"room",
                element:<Roompage/>
            },
            {
                path:"quiz",
                element:<Quiz/>
            },
            {
                path: "gamePlay",
                element: <GamePlay/>
            }
        ]
    }
])