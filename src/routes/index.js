
import LayoutDefault from "../layouts/LayoutDefault";
import BookingRoom from "../pages/BookingRoom";
import Crm from "../pages/Crm";
import Ecommerce from "../pages/Ecommerce";
import Home from "../pages/Home";
import RoomManager from "../pages/RoomManager";
import CreateRoom from "../pages/RoomManager/CreateRoom";
import Setting from "../pages/Setting";

export const routes = [
   {
      path: '/',
      element: <LayoutDefault />,
      children: [
         { index: true, element: <Home /> },
         { path: 'crm', element: <Crm /> },
         { path: 'booking-room', element: <BookingRoom /> },
         { path: 'room-manager', element: <RoomManager /> },
         { path: 'create-room', element: <CreateRoom />},
         { path: 'ecommerce', element: <Ecommerce /> },
         {path: 'setting', element:<Setting />}
      ]
   }
]