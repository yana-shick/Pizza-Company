import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UseName from '../features/user/UseName';

export default function Header() {
  return (
    <header
      className="flex items-center
     justify-between border-b border-stone-200
      bg-yellow-400 px-4 py-3 font-serif uppercase sm:px-6"
    >
      <Link to="/" className="tracking-widest">
        React Pizza Company
      </Link>
      <SearchOrder />
      <UseName />
    </header>
  );
}
