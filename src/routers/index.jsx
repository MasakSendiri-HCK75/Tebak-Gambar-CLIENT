import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Index from "../pages/Index";
import Roompage from "../pages/Roompage";
import Quiz from "../pages/Quiz";

export const router = createBrowserRouter([
    {
        path:"",
        element:<RootLayout/>,
        children:[
            {
                path:"",
                element:<Roompage/>
            },
            {
                path:"quiz",
                element:<Quiz/>
            }
        ]
    }
])