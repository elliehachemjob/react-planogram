import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Article() {
  const router: any = useRouter();
  const { id } = router.query;

  return <div>This is article {id}</div>;
}
