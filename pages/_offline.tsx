import useRouterFunctionalities from '../helpers/router';
import InnerPage from './inner-page';

export default function Offline() {
  const router = useRouterFunctionalities();

  return <InnerPage />;
}
