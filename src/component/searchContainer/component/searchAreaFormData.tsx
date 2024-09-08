/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { ReactElement, useEffect, useState } from 'react';
import focusSearchImg from '../../../img/img-google/hoverSearch.png';
import hoverSearchImg from '../../..//img/img-google/searchAreaImgHover.png';
import React from 'react';
import { DataItem } from '../types';
import styles from '../index.module.scss';
import classNames from 'classnames';
// 输入框检索内容
interface SearchAreaFormDataProps {
  inputOrNot: boolean;
}
const SearchAreaFormData: React.FC<SearchAreaFormDataProps> = ({
  inputOrNot,
}) => {
  const [searchData, setSearchData] = useState<DataItem[]>([]);
  //请求静态文件数据
  useEffect(() => {
    (async () => {
      const module = await import('../staticData/data.js');
      const data = module.default;
      setSearchData(data);
    })();
    return;
  }, []);
  // 更新 imgComponent 的函数
  const updateImgSrc: (index: number, imgSrc: string) => void = (
    index,
    imgSrc
  ) => {
    const updatedSearchData = [...searchData];
    if (!updatedSearchData[index].img) {
      console.log('没图片,替换searchImg');
      updatedSearchData[index] = {
        ...updatedSearchData[index],
        imgComponent: (
          <img
            src={imgSrc}
            className={
              updatedSearchData[index].img ? styles.imgRow : styles.nothingRow
            }
            alt=""
          />
        ),
      };
    }
    setSearchData(updatedSearchData);
  };

  return (
    <>
      {inputOrNot ? <div className={styles.baseLine}></div> : null}
      {inputOrNot ? (
        <div className={styles.data}>
          {searchData.map((item, index) => {
            let nameSpan;
            let introduceSpan;
            const containerClass = classNames({
              [styles.rowMargin]: index !== 0,
              [styles.firstRow]: index === 0,
              [styles.row]: true,
            });
            // 没图片有作者
            if (item.introduceOrNot) {
              introduceSpan = classNames({
                [styles.author]: true,
                [styles.noneImg]: !item.img,
              });
              if (item.img) {
                nameSpan = '';
              } else {
                nameSpan = styles.noneImg;
              }
              return (
                <div
                  className={containerClass}
                  data-key={index}
                  key={index}
                  onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                    const target = event.target as HTMLElement;
                    updateImgSrc(index, hoverSearchImg);
                    updateImgSrc(index, hoverSearchImg);
                  }}
                  onMouseLeave={() => {
                    updateImgSrc(index, focusSearchImg);
                  }}
                >
                  {item.imgComponent}
                  <div className={styles.divItem}>
                    <span className={nameSpan}>{item.name}</span>
                    <span className={introduceSpan}>{item.introduce}</span>
                  </div>
                </div>
              );
            }
            return (
              <div
                className={containerClass}
                key={index}
                data-key={index}
                onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                  const target = event.target as HTMLElement;
                  updateImgSrc(index, hoverSearchImg);
                }}
                onMouseLeave={() => {
                  updateImgSrc(index, focusSearchImg);
                }}
              >
                {item.imgComponent}
                <div className={styles.divItem}>
                  <span className={styles.spanItem}>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
export default SearchAreaFormData;
