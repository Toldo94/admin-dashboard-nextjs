import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';

import css from './dashboard-layout.module.scss';

const DashboardLayout: NextPage = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <main>
        <Topbar />
        <div className={css.container}>
          <Sidebar />
          <div className={css.content}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
