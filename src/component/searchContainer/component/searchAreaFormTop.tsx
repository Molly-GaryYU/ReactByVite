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
import React from 'react';

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

  const handelInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.value) {
      setInputValueIsNull(true);
      setInputOrNot(true);
    } else {
      setInputOrNot(false);
      setInputValueIsNull(false);
    }
  };
  const handelCleanInput = () => {
    if (inputElement.current) inputElement.current.value = '';
    setInputValueIsNull(false);
    setInputOrNot(false);
  };
  return (
    <div className="top">
      <div className="divItem">
        <div className="left">
          <img
            className={hoverInput ? 'imgItemHover' : 'imgItem'}
            src={hoverInput ? hoverSearchImg : searchImg}
            alt=""
          />
          <input
            ref={inputElement}
            className={hoverInput ? 'inputHover inputItem ' : 'inputItem'}
            onFocus={() => {
              setFocusRightNow(true);
              setHoverInput(true);
            }}
            onChange={handelInputValue}
          />
        </div>
        <div className="right">
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? 'hiddenImg'
                  : 'hidden'
                : 'hidden hide'
            }
            src={hoverInput ? deleteImg : deleteImg2}
            alt=""
            onClick={handelCleanInput}
          />
          <span
            className={
              inputValueIsNull ? (hoverInput ? 'lineHover' : 'line') : 'hide'
            }
          ></span>
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? 'InputMikeHover'
                  : 'mike'
                : hoverInput
                ? 'mikeHover'
                : 'mike'
            }
            src={hoverInput ? hoverMaiKeImg : maiKeImg}
            alt=""
          />
          <img
            className={
              inputValueIsNull
                ? hoverInput
                  ? 'InputCameraHover'
                  : 'camera'
                : hoverInput
                ? 'cameraHover'
                : 'camera'
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
