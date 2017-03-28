import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <App-user-grid />,
  document.getElementById('root')
);



function AppLeft() {
  return <h1>app left</h1>;
}

function AppRight() {
  return <h1>app right</h1>;
}

// function App() {
// 	return (
// 		<div>
// 	     	<div AppLeft></div>
// 	     	<div AppRight></div>
// 	    </div>
//   	);
// } 