import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePge/HomePage";
import TimeLinePage from "../pages/timeLinePage/TimeLinePage";
import StatsPage from "../pages/statsPage/StatsPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import DashBoardLayout from "../layout/DashBoardLayout";
import FriendDetails from "../pages/friendDetails/FriendDetails";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/timeLine',
        Component: TimeLinePage
      },
      {
        path: '/stats',
        Component: StatsPage
      },
      {
        path: '/friendDetails/:Id',
        Component: FriendDetails,
        loader: () =>  fetch('/FriendsData.json')
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
  {
    path: "dashBoard",
    element:<DashBoardLayout></DashBoardLayout>
  }
]);