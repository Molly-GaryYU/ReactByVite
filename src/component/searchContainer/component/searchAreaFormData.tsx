/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { ReactElement, useEffect, useState } from 'react';
import focusSearchImg from '../../../img/img-google/hoverSearch.png';
import hoverSearchImg from '../../..//img/img-google/searchAreaImgHover.png';
import React from 'react';
import { DataItem } from '../data.d';

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
      const module = await import('../staticData/data.jsx');
      const data = module.default;
      setSearchData(data);
    })();
    return;
  }, []);
  // 更新 imgComponent 的函数
  const updateImgSrc = (index: number, imgSrc: string) => {
    const updatedSearchData = [...searchData];
    if (!updatedSearchData[index].img) {
      console.log('没图片,替换searchImg');
      updatedSearchData[index] = {
        ...updatedSearchData[index],
        imgComponent: (
          <img
            src={imgSrc}
            className={updatedSearchData[index].img ? 'imgRow' : 'nothingRow'}
            alt=""
          />
        ),
      };
    }
    setSearchData(updatedSearchData);
  };

  return (
    <>
      {inputOrNot ? <div className="baseLine"></div> : null}
      {inputOrNot ? (
        <div className="data">
          {searchData.map((item, index) => {
            let containerClass = 'rowMargin row';
            let nameSpan;
            let introduceSpan;
            if (index === 0) {
              containerClass = 'firstRow row';
            }
            // 没图片有作者
            if (item.introduceOrNot) {
              if (item.img) {
                nameSpan = '';
                introduceSpan = 'author';
              } else {
                nameSpan = 'noneImg';
                introduceSpan = 'noneImg author';
              }
              return (
                <div
                  className={containerClass}
                  data-key={index}
                  key={index}
                  onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
                    const target = event.target as HTMLElement;
                    //   const index = parseInt(
                    //     target.getAttribute('data-key'),
                    //     10
                    //   );
                    updateImgSrc(index, hoverSearchImg);
                    updateImgSrc(index, hoverSearchImg);
                  }}
                  onMouseLeave={() => {
                    updateImgSrc(index, focusSearchImg);
                  }}
                >
                  {item.imgComponent}
                  <div className="divItem">
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
                  // const index = parseInt(target.getAttribute('data-key'), 10);
                  updateImgSrc(index, hoverSearchImg);
                }}
                onMouseLeave={() => {
                  updateImgSrc(index, focusSearchImg);
                }}
              >
                {item.imgComponent}
                <div className="divItem">
                  <span className="spanItem">{item.name}</span>
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
