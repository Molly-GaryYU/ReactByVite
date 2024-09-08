import React from 'react';
import styles from './bottom.module.scss';

export default function footerContainer() {
  return (
    <>
      <div className={styles.location}>香港</div>
      <footer className={styles.bottom}>
        <nav className={styles.left}>
          <a className={styles.textStyle}>关于 Google</a>
          <a className={styles.textStyle}>广告</a>
          <a className={styles.textStyle}>商务</a>
          <a className={styles.textStyle}>Google 搜索的运作方式</a>
        </nav>
        <nav className={styles.right}>
          <a className={styles.textStyle}>隐私权</a>
          <a className={styles.textStyle}>条款</a>
          <a className={styles.textStyle}>设置</a>
        </nav>
      </footer>
    </>
  );
}
