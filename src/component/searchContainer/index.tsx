import logo from '../../img/img-google/logo.png';
import SearchForm from './component/searchForm';
import SearchButton from './component/searchButton';
import './index/sass/index.scss';
import React from 'react';
const SearchContent: React.FC = () => {
  return (
    <div className="search">
      <img className="imgItem" src={logo} alt="" />
      <div className="searchArea">
        <SearchForm />
        <SearchButton />
        <div className="language">
          Google 提供：
          <a className="change pd" href="*">
            繁體中文
          </a>
          <a className="change" href="*">
            English
          </a>
        </div>
      </div>
    </div>
  );
};
export default SearchContent;
