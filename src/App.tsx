import './component/footer/bottom.module.scss';
import '../googleHome.css';
import './component/searchContainer/index.module.scss';
import './component/Navigation/index.module.scss';
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
