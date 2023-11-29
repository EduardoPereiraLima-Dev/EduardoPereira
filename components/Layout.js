// Import Google Fonts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
`;

// Import icon
import { HiHome, HiUser, HiViewColumns } from 'react-icons/hi';

// Config font Sora
const sora = {
  font: 'Sora, sans-serif',
  subsets: ['latin'],
  variable: '--font-sora',
  weight: [100, 200, 300, 400, 500, 600, 700, 800],
};

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className={'page bg text-white gh-cover bg-no-repeat ${Sora.variable}font-sora relative'}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
