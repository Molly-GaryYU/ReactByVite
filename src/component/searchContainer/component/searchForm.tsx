/* eslint-disable react/prop-types */
import SearchAreaFormTop from './searchAreaFormTop';
import SearchAreaFormData from './searchAreaFormData';
import SearchButton from './searchButton';
import styles from '../index.module.scss';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import classNames from 'classnames';
const SearchForm: React.FC = () => {
  const [hoverInput, setHoverInput] = useState(false);
  const [inputOrNot, setInputOrNot] = useState(false);
  const [focusRightNow, setFocusRightNow] = useState(false);
  const searchFrameElem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleSearchClick = (event) => {
      if (
        searchFrameElem.current &&
        searchFrameElem.current.contains(event.target)
      ) {
        setFocusRightNow(true);
      } else {
        setInputOrNot(false);
        setFocusRightNow(false);
        setHoverInput(false);
      }
    };
    document.addEventListener('mousedown', handleSearchClick);
    return () => {
      document.removeEventListener('mousedown', handleSearchClick);
    };
  }, []);
  const searchFrameElemStyles = classNames({
    [styles.formItem]: true,
    [styles.formBackground]: hoverInput,
  });
  return (
    <div
      ref={searchFrameElem}
      className={searchFrameElemStyles}
      onMouseLeave={() => {
        if (!focusRightNow) {
          setHoverInput(false);
        }
      }}
      onMouseEnter={() => {
        if (!focusRightNow) {
          setHoverInput(true);
        }
      }}
    >
      <SearchAreaFormTop
        hoverInput={hoverInput}
        setHoverInput={setHoverInput}
        setFocusRightNow={setFocusRightNow}
        setInputOrNot={setInputOrNot}
      ></SearchAreaFormTop>
      <SearchAreaFormData inputOrNot={inputOrNot}></SearchAreaFormData>
      {inputOrNot ? <SearchButton /> : null}
      {inputOrNot ? (
        <div className={styles.searchBottom}>举报不当的联想查询</div>
      ) : null}
    </div>
  );
};
export default SearchForm;
