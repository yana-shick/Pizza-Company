import { useFetcher } from 'react-router-dom';

import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';


export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  //   i need to wrap the button in form.
  //   this form not navigate away like regular form
  //   this will submit the form and revalidate the page

  return (
    <fetcher.Form method="PATCH" class="text-right">
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
}
//   i dont need request parameter
//   params are from url string
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
