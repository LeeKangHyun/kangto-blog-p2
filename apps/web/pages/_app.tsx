import type { AppProps } from 'next/app';

import { KangtoQueryProvider } from '@/Provider';
import Layout from '@/components/Layout';

import { globalStyles } from '@/styles';

function Blog({ Component, pageProps }: AppProps) {
  return (
    <KangtoQueryProvider>
      <Layout>
        {globalStyles}
        <Component {...pageProps} />
      </Layout>
    </KangtoQueryProvider>
  );
}

export default Blog;
