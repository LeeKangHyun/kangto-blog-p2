import Footer from './Footer';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
