import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import User from "./pages/user";
import Login from "./pages/login";
import Channels from './pages/channels';
import Channel from './pages/channel';
import Videopage from './pages/videopage';
import Account from './pages/account';
import Blog from './pages/blog';
import Blogdetail from './pages/blogdetail';
import Category from './pages/categories';
import Contact from './pages/contact';
import HistoryPage from './pages/historypage';
import Upload from './pages/upload';
import UploadVideo from './pages/uploadvideo';
import Subscription from './pages/subscription';
import Setting from './pages/setting';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ForgotPassword from './pages/forgotpassword';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
   
        <Route path="user" element={< User />} />
       
      </Route>
      <Route>
      <Route path="login" element={< Login />} />
      </Route>
      <Route>
      <Route path="channels" element={< Channels />} />
      </Route>
      <Route>
      <Route path="channel" element={< Channel />} />
      </Route>
      <Route>
      <Route path="videopage" element={< Videopage />} />
      </Route>
      <Route>
      <Route path="account" element={< Account />} />
      </Route>
      <Route>
      <Route path="blog" element={< Blog />} />
      </Route>
      <Route>
      <Route path="blogdetail" element={< Blogdetail />} />
      </Route>
      <Route>
      <Route path="category" element={< Category/>} />
      </Route>
      <Route>
      <Route path="contact" element={< Contact/>} />
      </Route>
      <Route>
      <Route path="historypage" element={< HistoryPage/>} />
      </Route>
      <Route>
      <Route path="upload" element={< Upload/>} />
      </Route>
      <Route>
      <Route path="uploadvideo" element={< UploadVideo/>} />
      </Route>
      <Route>
      <Route path="subscription" element={< Subscription/>} />
      </Route>
      <Route>
      <Route path="setting" element={< Setting/>} />
      </Route>
      <Route>
      <Route path="forgotpassword" element={< ForgotPassword/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


