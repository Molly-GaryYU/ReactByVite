import logo from '../../img/img-google/logo.png';
import SearchForm from './component/searchForm';
import SearchButton from './component/searchButton';
import styles from './index.module.scss';
import React from 'react';
const SearchContent: React.FC = () => {
  return (
    <div className={styles.search}>
      <img className={styles.imgItem} src={logo} alt="" />
      <div className={styles.searchArea}>
        <SearchForm />
        <SearchButton />
        <div className={styles.language}>
          Google 提供：
          <a className={`${styles.change} ${styles.pd}`} href="*">
            繁體中文
          </a>
          <a className={styles.change} href="*">
            English
          </a>
        </div>
      </div>
    </div>
  );
};
export default SearchContent;
