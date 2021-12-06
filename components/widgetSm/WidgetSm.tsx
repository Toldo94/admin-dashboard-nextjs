import React from 'react';
import Image from 'next/image';

import css from './widget-sm.module.scss';
import { Visibility } from '@mui/icons-material';

function WidgetSm() {
  return (
    <div className={css.widgetSm}>
      <span className={css.widgetSmTitle}>New Join Members</span>
      <ul className={css.widgetSmList}>
        <li className={css.widgetSmListItem}>
          <Image
            className={css.widgetSmImg}
            src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
            width={40}
            height={40}
            alt='Avatar'
          />
          <div className={css.widgetSmUser}>
            <span className={css.widgetSmUsername}>Anna Keller</span>
            <span className={css.widgetSmJobTitle}>Software Engineer</span>
          </div>
          <button className={css.widgetSmButton}>
            <Visibility className={css.widgetSmButtonImg} /> Display{' '}
          </button>
        </li>
        <li className={css.widgetSmListItem}>
          <Image
            className={css.widgetSmImg}
            src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
            width={40}
            height={40}
            alt='Avatar'
          />
          <div className={css.widgetSmUser}>
            <span className={css.widgetSmUsername}>Anna Keller</span>
            <span className={css.widgetSmJobTitle}>Software Engineer</span>
          </div>
          <button className={css.widgetSmButton}>
            <Visibility className={css.widgetSmButtonImg} /> Display{' '}
          </button>
        </li>
        <li className={css.widgetSmListItem}>
          <Image
            className={css.widgetSmImg}
            src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
            width={40}
            height={40}
            alt='Avatar'
          />
          <div className={css.widgetSmUser}>
            <span className={css.widgetSmUsername}>Anna Keller</span>
            <span className={css.widgetSmJobTitle}>Software Engineer</span>
          </div>
          <button className={css.widgetSmButton}>
            <Visibility className={css.widgetSmButtonImg} /> Display{' '}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
