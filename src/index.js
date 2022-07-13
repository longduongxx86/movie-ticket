import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
// import { DOMAIN } from "./util/settings/config"

//antd css
import "antd/dist/antd.css"
//slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//cấu hình realtime websocket với signalR
// import * as signalR from "@aspnet/signalr"

// import đa ngôn ngữ
import "i18next"


const root = ReactDOM.createRoot(document.getElementById('root'));

//kết nói server lắng nghe (socket)
// export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build()

// connection.start().then(() => {
   root.render(
      <Provider store={store}>
         <App />
      </Provider>
   )
// }).catch(err => console.log(err))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
