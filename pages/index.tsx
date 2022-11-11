import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home({}: any) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('welcome-page');
    }
  }, []);

  return <></>;
}
