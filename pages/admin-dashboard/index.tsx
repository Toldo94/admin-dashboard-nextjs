import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import DashboardLayout from '../../layouts/DashboardLayout';

import css from './index.module.scss';

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className={css.contentWrapper}>
        <FeaturedInfo />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
