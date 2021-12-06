import React from 'react';
import classNames from 'classnames';

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';

import css from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebarWrapper}>
        <div className={css.sidebarMenu}>
          <h3 className={css.sidebarTitle}>Dashboard</h3>
          <ul className={css.sidebarList}>
            <li
              className={classNames(css.sidebarListItem, {
                [css.active]: true,
              })}
            >
              <LineStyle className={css.sidebarIcon} /> Home
            </li>
            <li className={css.sidebarListItem}>
              <Timeline className={css.sidebarIcon} /> Analytics
            </li>
            <li className={css.sidebarListItem}>
              <TrendingUp className={css.sidebarIcon} /> Sales
            </li>
          </ul>
        </div>
        <div className={css.sidebarMenu}>
          <h3 className={css.sidebarTitle}>Quick Menu</h3>
          <ul className={css.sidebarList}>
            <li
              className={classNames(css.sidebarListItem, {
                [css.active]: false,
              })}
            >
              <PermIdentity className='sidebarIcon' /> Users
            </li>
            <li className={css.sidebarListItem}>
              <Storefront className='sidebarIcon' />
              Products
            </li>
            <li className={css.sidebarListItem}>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className={css.sidebarListItem}>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className={css.sidebarMenu}>
          <h3 className={css.sidebarTitle}>Notifications</h3>
          <ul className={css.sidebarList}>
            <li
              className={classNames(css.sidebarListItem, {
                [css.active]: false,
              })}
            >
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className={css.sidebarListItem}>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className={css.sidebarListItem}>
              <ChatBubbleOutline className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className={css.sidebarMenu}>
          <h3 className={css.sidebarTitle}>Staff</h3>
          <ul className={css.sidebarList}>
            <li
              className={classNames(css.sidebarListItem, {
                [css.active]: false,
              })}
            >
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className={css.sidebarListItem}>
              <Timeline className={css.sidebarIcon} /> Analytics
            </li>
            <li className={css.sidebarListItem}>
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
