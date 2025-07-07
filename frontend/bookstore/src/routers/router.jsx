import { createBrowserRouter } from "react-router-dom";
import App from "../App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{           //path: "/": Matches the root URL (/). element: <App />: Renders the App component as the layout  children: Nested routes that render inside <App>.
            path: "/",
            element: <h1>Home</h1>,
        },
        {
            path: "/orders",
            element: <div>Orders</div>
        },
        {
            path: "/about",
            element:<div>About</div>
        }

        ]
    },
  
])

export default router;