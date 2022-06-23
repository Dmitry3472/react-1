import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state, { subscribe } from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);
