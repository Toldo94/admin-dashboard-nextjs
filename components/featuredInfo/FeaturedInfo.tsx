import classNames from 'classnames';
import css from './featured-info.module.scss';

import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className={css.featured}>
      <div className={css.featuredItem}>
        <span className={css.featuredTitle}>Revenue</span>
        <div className={css.featuredMoneyContainer}>
          <span className={css.featuredMoney}>$2.415</span>
          <span className={css.featuredMoneyRate}>
            -11.4 <ArrowDownward className={classNames(css.featuredIcon, css.negative)} />{' '}
          </span>
        </div>
        <span className={css.featuredSub}>Compared to last month</span>
      </div>
      <div className={css.featuredItem}>
        <span className={css.featuredTitle}>Sales</span>
        <div className={css.featuredMoneyContainer}>
          <span className={css.featuredMoney}>$4.415</span>
          <span className={css.featuredMoneyRate}>
            -1.4 <ArrowDownward className={classNames(css.featuredIcon, css.negative)} />{' '}
          </span>
        </div>
        <span className={css.featuredSub}>Compared to last month</span>
      </div>
      <div className={css.featuredItem}>
        <span className={css.featuredTitle}>Cost</span>
        <div className={css.featuredMoneyContainer}>
          <span className={css.featuredMoney}>$6.415</span>
          <span className={css.featuredMoneyRate}>
            2.4 <ArrowUpward className={classNames(css.featuredIcon)} />{' '}
          </span>
        </div>
        <span className={css.featuredSub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
