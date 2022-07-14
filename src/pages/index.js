import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amina Ait | Software Dev & Computer Engineer</title>
      </Head>
      <div>Hello</div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
