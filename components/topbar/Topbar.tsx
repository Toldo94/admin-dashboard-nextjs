import React from 'react';
import Image from 'next/image'

import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import css from './topbar.module.scss';

const Topbar = () => {
  return (
    <div className={css.topbar}>
      <div className={css.topbarWrapper}>
        <div className={css.topbarLeft}>
          <span className={css.logo}>Dashboard</span>
        </div>
        <div className={css.topbarRight}>
          <div className={css.topbarIconContainer}>
            <NotificationsNone />
            <span className={css.topIconBag}>2</span>
          </div>
          <div className={css.topbarIconContainer}>
            <Language />
            <span className={css.topIconBag}>2</span>
          </div>
          <div className={css.topbarIconContainer}>
            <Settings />
          </div>
          <Image className={css.topAvatar} src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" width={40} height={40} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
