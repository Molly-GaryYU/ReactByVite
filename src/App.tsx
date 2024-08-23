import './component/footer/index/sass/bottom.scss';
import '../googleHome.css';
import './component/searchContainer/index/sass/index.scss';
import './component/Navigation/index/sass/index.scss';
import FooterContainer from './component/footer';
import NavContent from './component/Navigation';
import SearchContent from './component/searchContainer';
import React from 'react';
const App: React.FC = () => {
  return (
    <div className="main-frame" id="main-frame">
      <NavContent />
      <SearchContent />
      <FooterContainer />
    </div>
  );
};
export default App;
