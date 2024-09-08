import { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import ninePointImg from '../../img/img-google/ninePoint.png';
import React from 'react';
import { DataItem } from './types';
import classNames from 'classnames';
const NavContent = () => {
  const serverUrl = 'http://localhost:8080/pages/back/goods/getGoods';
  //这一步不知道为什么state默认值不能写二维数组[][]只能写一维数组[]
  const [dataResult, setDataResult] = useState<DataItem[][] | [][]>([]);
  const ninePoint = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const [ninePointClickOrNot, setNinePointClickOrNot] = useState(false);

  //请求数据
  useEffect(() => {
    const handleNinePointClick: (event) => void = (event) => {
      if (ninePoint.current && ninePoint.current.contains(event.target)) {
        setNinePointClickOrNot((ninePointClickOrNot) => !ninePointClickOrNot);
      } else if (dialog.current && dialog.current.contains(event.target)) {
        console.log('dialog内点击,不关闭');
      } else {
        console.log('点击与抽屉无关，关闭');
        setNinePointClickOrNot(false);
      }
    };
    document.addEventListener('click', handleNinePointClick);
    return () => {
      document.removeEventListener('click', handleNinePointClick);
    };
  }, []);
  //文档流监听关闭dialog
  useEffect((): void => {
    fetch('http://localhost:8080/pages/back/goods/getGoods')
      .then((response) => response.json())
      .then((result: DataItem[][]) => {
        setDataResult(result);
        console.log('fetch in', dataResult);
      })
      .catch(() => {
        import('./staticData/data.js')
          .then((data) => {
            const moreData: DataItem[][] = data.default;
            setDataResult(moreData);
          })
          .catch();
      });
  }, [serverUrl]);
  //遍历请求的App内容
  const dataResultDisplay: () => JSX.Element[] = () => {
    return dataResult.map((itemBlock, index) => {
      let classForType = classNames({
        [styles.first]: index === 0,
        [styles.end]: index !== 0,
        [styles.child]: true,
      });
      return (
        <div className={classForType} key={index}>
          {itemBlock.map(({ name, imgComponent, id }) => {
            return (
              <a className={styles.box} href="/#" key={id}>
                <div className={styles.divItem}>{imgComponent}</div>
                <span> {name}</span>
              </a>
            );
          })}
          {/* </div> */}
        </div>
      );
    });
  };
  return (
    <div className={styles.navigation}>
      <a className={styles.gmail} href="/#">
        Gmail
      </a>
      <a className={styles.picture} href="/#">
        图片
      </a>
      {/* 这里套两层是因为需要加入悬停时的背景，border-radius: 100px;写在img标签会影响图片形状 */}
      <div ref={ninePoint} className={styles.more}>
        <img className={styles.morePicture} src={ninePointImg} alt="" />
      </div>
      {ninePointClickOrNot ? (
        <div ref={dialog} className={styles.dialogItem}>
          {/* 这里多套一层是因为，滚动条在dialog内，如果不写多一层，滚动条则会显示在dialog外侧 */}
          <div className={styles.display}>
            {dataResultDisplay()}
            <button className={styles.buttonItem}>更多Google应用/产品</button>
          </div>
        </div>
      ) : null}
      <a className={styles.login}>登录</a>
    </div>
  );
};
export default NavContent;
