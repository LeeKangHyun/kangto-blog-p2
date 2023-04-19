import Head from 'next/head';

interface Props {
  title?: string;
}

function SEO({ title = '데브강 블로그 :)' }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
  );
}

export default SEO;
