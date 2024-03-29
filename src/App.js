import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/profile' element={<ProfileContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;