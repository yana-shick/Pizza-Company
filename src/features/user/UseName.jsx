import { useSelector } from 'react-redux';
import { getUserName } from '../user/userSlice';
export default function UseName() {
  const username = useSelector(getUserName);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}
