import React from 'react';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from '../index.module.scss';

const SearchButton: React.FC = () => {
  const [lockByGoogle, setLockByGoogle] = useState(false);
  const [lockByLucky, setLockByLucky] = useState(false);
  const [hoverGoogleButton, setHoverGoogleButton] = useState(false);
  const [hoverLuckyButton, setHoverLuckyButton] = useState(false);
  const googleButton = useRef<HTMLButtonElement | null>(null);
  const luckyButton = useRef<HTMLButtonElement | null>(null);
  const googleBtnClass = classNames({
    [styles.searchButtonBackground]: true,
    [styles.searchButton]: true,
    [styles.googleButton]: true,
    [styles.buttonBorderHover]: hoverGoogleButton,
    [styles.buttonBorder]: !hoverGoogleButton,
  });
  const luckyBtnClass = classNames({
    [styles.searchButtonBackground]: true,
    [styles.searchButton]: true,
    [styles.luckyButton]: true,
    [styles.buttonBorderHover]: hoverLuckyButton,
    [styles.buttonBorder]: !hoverLuckyButton,
  });

  useEffect(() => {
    const handelGoogleButton: (event) => void = (event) => {
      if (googleButton.current && googleButton.current.contains(event.target)) {
        setLockByGoogle(true);
        setHoverGoogleButton(true);
        console.log('googleButton点击');
      } else {
        setLockByGoogle(false);
        setHoverGoogleButton(false);
        console.log('googleButton关闭');
      }
    };
    const handelLockByLucky: (event) => void = (event) => {
      if (luckyButton.current && luckyButton.current.contains(event.target)) {
        setLockByLucky(true);
        setHoverLuckyButton(true);
      } else {
        setLockByLucky(false);
        setHoverLuckyButton(false);
      }
    };
    document.addEventListener('click', handelGoogleButton);
    document.addEventListener('click', handelLockByLucky);
    return () => {
      document.removeEventListener('click', handelGoogleButton);
      document.removeEventListener('click', handelLockByLucky);
    };
  }, []);
  return (
    <div className={styles.searchButtonItem}>
      <button
        ref={googleButton}
        className={googleBtnClass}
        onMouseLeave={() => {
          if (!lockByGoogle) {
            console.log('googleButton hover');
            setHoverGoogleButton(false);
          }
        }}
        onMouseEnter={() => {
          if (!lockByGoogle) {
            console.log('googleButton out');
            setHoverGoogleButton(true);
          }
        }}
      >
        Google 搜索
      </button>
      <button
        ref={luckyButton}
        onMouseEnter={() => {
          if (!lockByLucky) console.log('lockByLucky hover');
          setHoverLuckyButton(true);
        }}
        onMouseLeave={() => {
          console.log('lockByLucky out');
          if (!lockByLucky) setHoverLuckyButton(false);
        }}
        className={luckyBtnClass}
      >
        手气不错
      </button>
    </div>
  );
};
export default SearchButton;
