import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AllLayout';
import Home from './ui/Home';
import Error from './ui/Error';

import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateNewOrder, {
  action as createOrderAction,
} from './features/order/CreateNewOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, //it can be here or in menu as well
    children: [
      { path: '/Pizza-Company', element: <Home /> },
      {
        path: '/Pizza-Company/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/Pizza-Company/cart', element: <Cart /> },
      {
        path: '/Pizza-Company/order/new',
        element: <CreateNewOrder />,
        action: createOrderAction,
      },
      {
        path: '/Pizza-Company/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
