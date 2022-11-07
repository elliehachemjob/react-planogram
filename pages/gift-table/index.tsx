import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/gift-table.module.css';

export default function GiftTable({ articles }: any) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='gift-table-section'>
        <div className='fxd-header-sect-cont sub-categories'>
          <div className='fxd-header-sect'>
            <div className='fxd-header-content'>CATEGORY A</div>
            <div className='discover-proceed-arrow back-arrow'>
              <a href='vip-inner-page.html'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18.613'
                  height='14.083'
                  viewBox='0 0 18.613 14.083'
                >
                  <path
                    className='a'
                    d='M2.814,21.877l6,6A1.039,1.039,0,1,0,10.279,26.4L6.066,22.17H20.075a1.039,1.039,0,1,0,0-2.077H6.066l4.212-4.212a1.028,1.028,0,0,0,0-1.469,1.07,1.07,0,0,0-.745-.314,1.024,1.024,0,0,0-.745.314L2.814,20.387a1.04,1.04,0,0,0,0,1.489Z'
                    transform='translate(21.113 28.181) rotate(180)'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='gift-table-wrapper'>
          <div className='gift-table-container'>
            <div className='gift-table-content'>
              <table>
                <tbody>
                  <tr>
                    <th>Impulse VIP A</th>
                    <th>BEFORE</th>
                    <th>AFTER</th>
                  </tr>
                  <tr>
                    <td>Recommended Shelf Price</td>
                    <td>10.00</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>VAT</td>
                    <td>0.48</td>
                    <td>0.48</td>
                  </tr>
                  <tr>
                    <td>Shelf Price Excluding VAT</td>
                    <td>53.70</td>
                    <td>55.337</td>
                  </tr>
                  <tr>
                    <td>Excise Tax</td>
                    <td>10.00</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>Rebate %</td>
                    <td>10.00</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>Total Rebates</td>
                    <td>14.00</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Recommended Shelf Price</td>
                    <td>27.120</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
