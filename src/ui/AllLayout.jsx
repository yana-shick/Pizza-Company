import { Outlet, useNavigation } from 'react-router-dom';

import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

export default function AllLayout({ children }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />
      {/* i need this container to set a width to main. otherwise it will not work because it is in the grid */}
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">{children ?? <Outlet />}</main>
      </div>
      <CartOverview />
    </div>
  );
}
