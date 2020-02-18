import React from 'react';
import Router from './router';
import HeadComponent from './components/HeadComponent';

const App = () => {
  return (
    <HeadComponent>
      <Router />
    </HeadComponent>
  );
};

export default App;
