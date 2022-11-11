import useRouterFunctionalities from '../helpers/router';
import InnerPage from './inner-page';

export default function Home() {
  const router = useRouterFunctionalities();

  if (router.pathname === '/inner-page') {
    return <InnerPage />;
  }
  return <>So here we will render each page</>;
}
