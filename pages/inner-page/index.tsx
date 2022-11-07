import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function InnerPage({ articles }: any) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      Inner Table Page
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles: articles,
    },
  };
};
