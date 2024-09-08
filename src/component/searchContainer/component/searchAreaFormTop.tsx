/* eslint-disable react/prop-types */
import searchImg from '../../../img/img-google/search.png';
import deleteImg from '../../../img/img-google/delete.png';
import maiKeImg from '../../../img/img-google/maike.png';
import cameraImg from '../../../img/img-google/picture.png';
import hoverMaiKeImg from '../../../img/img-google/hoverMaike.png';
import hoverCameraImg from '../../../img/img-google/hoverPicture.png';
import hoverSearchImg from '../../../img/img-google/hoverSearch.png';
import deleteImg2 from '../../../img/img-google/delete2.png';
import { useRef, useState } from 'react';
import styles from '../index.module.scss';
import React from 'react';
import classNames from 'classnames';

interface SearchAreaFormTopProps {
  hoverInput: boolean;
  setHoverInput: Function;
  setFocusRightNow: Function;
  setInputOrNot: Function;
}
// 输入框
const SearchAreaFormTop: React.FC<SearchAreaFormTopProps> = ({
  hoverInput,
  setHoverInput,
  setFocusRightNow,
  setInputOrNot,
}) => {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [inputValueIsNull, setInputValueIsNull] = useState<boolean>(false);

  const handelInputValue: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.value) {
      setInputValueIsNull(true);
      setInputOrNot(true);
    } else {
      setInputOrNot(false);
      setInputValueIsNull(false);
    }
  };
  const handelCleanInput: () => void = () => {
    if (inputElement.current) inputElement.current.value = '';
    setInputValueIsNull(false);
    setInputOrNot(false);
  };
  const inputElementStyle = classNames({
    [styles.inputItem]: true,
    [styles.inputHover]: hoverInput,
  });
  const deleteImgStyles = classNames({
    [styles.hidden]: true,
    [styles.hide]: !inputValueIsNull,
  });

  return (
    <div className={styles.top}>
      <div className={styles.divItem}>
        <div className={styles.left}>
          <img
            className={hoverInput ? styles.imgItemHover : styles.imgItem}
            src={hoverInput ? hoverSearchImg : searchImg}
            alt=""
          />
          <input
            ref={inputElement}
            className={inputElementStyle}
            onFocus={() => {
              setFocusRightNow(true);
              setHoverInput(true);
            }}
            onChange={handelInputValue}
          />
        </div>
        <div className={styles.right}>
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? styles.hiddenImg
                  : styles.hidden
                : deleteImgStyles
            }
            src={hoverInput ? deleteImg : deleteImg2}
            alt=""
            onClick={handelCleanInput}
          />
          <span
            className={
              inputValueIsNull
                ? hoverInput
                  ? styles.lineHover
                  : styles.line
                : styles.hide
            }
          ></span>
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? styles.InputMikeHover
                  : styles.mike
                : hoverInput
                ? styles.mikeHover
                : styles.mike
            }
            src={hoverInput ? hoverMaiKeImg : maiKeImg}
            alt=""
          />
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? styles.InputCameraHover
                  : styles.camera
                : hoverInput
                ? styles.cameraHover
                : styles.camera
            }
            src={hoverInput ? hoverCameraImg : cameraImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default SearchAreaFormTop;
