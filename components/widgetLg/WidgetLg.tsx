import React from 'react';
import className from 'classnames';

import Image from 'next/image';

import css from './widget-lg.module.scss';

interface ButtonProps {
  type: string;
}

function WidgetLg() {
  const Button = ({ type }: ButtonProps) => {
    return <button className={className({
        [css.typeApproved]: type === 'Approved',
        [css.typeDeclined]: type === 'Declined',
        [css.typePending]: type === 'Pending',
    })} >{type}</button>;
  };

  return (
    <div className={css.widgetLg}>
      <span className={css.widgetLgTitle}>Latest Transactions</span>
      <table className={css.widgetLgTable}>
        <tr className={css.widgetLgTr}>
          <th className={css.widgetLgTh}>Customer</th>
          <th className={css.widgetLgTh}>Date</th>
          <th className={css.widgetLgTh}>Amount</th>
          <th className={css.widgetLgTh}>Status</th>
        </tr>
        <tr className={css.widgetLgTr}>
          <td className={css.widgetLgUser}>
            <Image
              className={css.widgetLgImg}
              src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
              width={40}
              height={40}
              alt='Avatar'
            />
            <span className={css.widgetLgName}>Susan Carol</span>
          </td>
          <td className={css.widgetLgDate}>2 Jun 2021</td>
          <td className={css.widgetLgAmount}>$122.60</td>
          <td className={css.widgetLgStatus}>
            <Button type="Pending" />
          </td>
        </tr>
        <tr className={css.widgetLgTr}>
          <td className={css.widgetLgUser}>
            <Image
              className={css.widgetLgImg}
              src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
              width={40}
              height={40}
              alt='Avatar'
            />
            <span className={css.widgetLgName}>Susan Carol</span>
          </td>
          <td className={css.widgetLgDate}>2 Jun 2021</td>
          <td className={css.widgetLgAmount}>$122.60</td>
          <td className={css.widgetLgStatus}>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className={css.widgetLgTr}>
          <td className={css.widgetLgUser}>
            <Image
              className={css.widgetLgImg}
              src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
              width={40}
              height={40}
              alt='Avatar'
            />
            <span className={css.widgetLgName}>Susan Carol</span>
          </td>
          <td className={css.widgetLgDate}>2 Jun 2021</td>
          <td className={css.widgetLgAmount}>$122.60</td>
          <td className={css.widgetLgStatus}>
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
