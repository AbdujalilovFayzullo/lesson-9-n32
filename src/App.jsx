import React from 'react';
import './App.css';
import Users from './components/Users';
import Comments from './components/Comments';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <Users />
      <Comments />
      {/* <Todos /> */}
    </div>
  );
};

export default App;
