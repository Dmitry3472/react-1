import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "MyMessage1", likeCounts: "15" },
  { id: 2, message: "MyMessage2", likeCounts: "23" },
  { id: 3, message: "MyMessage3", likeCounts: "33" },
  { id: 4, message: "MyMessage4" },
  { id: 5, message: "MyMessage5" },
  { id: 6, message: "MyMessage6" },
];

let dialogs = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
  { id: 4, name: "User4" },
  { id: 5, name: "User5" },
  { id: 6, name: "User6" },
];


let messages = [
  { id: 1, message: "Message1" },
  { id: 2, message: "Message2" },
  { id: 3, message: "Message3" },
  { id: 4, message: "Message4" },
  { id: 5, message: "Message5" },
  { id: 6, message: "Message6" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
