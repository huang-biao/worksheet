import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Worksheet from './page/home'
// import Add from './components/add'

import * as serviceWorker from './serviceWorker';

// Create-react-app 创建的直接在 package.json 里添加 proxy 就能代理
// 但是只能开发环境使用，线上环境还是要访问接口，跨域的话可以自己写个 node 代理
// 放自己服务器上
fetch('/api/kebiao', {
  method: 'POST',
  body: 'stu_num=2018214294',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
}).then(r => r.json()).then(console.log)

ReactDOM.render(<Worksheet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
