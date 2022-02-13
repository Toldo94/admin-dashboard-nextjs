import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import DashboardLayout from '../../layouts/DashboardLayout';

import css from './index.module.scss';

const data = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
  {
    name: 'Page D',
    pv: 3908,
  },
  {
    name: 'Page E',
    pv: 4800,
  },
  {
    name: 'Page F',
    pv: 3800,
  },
  {
    name: 'Page G',
    pv: 4300,
  },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className={css.contentWrapper}>
        <FeaturedInfo />
        <Chart title='User Analytics' data={data} dataKey='pv' grid />
        <div className={css.homeWidget}>
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </DashboardLayout>

  );
};

export default AdminDashboard;
