import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Api from './api'
import App from './App';
// import reportWebVitals from './reportWebVitals';

// class App extends React.Component{
//   render(){
//     return(
//       <div className='App'>
//         <h1>hello ,react</h1>
//       </div>
//     )
//   }
// }
ReactDOM.render(
    <div>
        <Api></Api><App />
    </div>,
document.getElementById('root'));
// reportWebVitals();
