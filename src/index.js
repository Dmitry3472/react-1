import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>
  );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState);
