import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import LoginPage from './components/auth/login/LoginPage';
import CookPage from './components/auth/cook/CookPage';
import FetchData from './components/FetchData';
import UserPage from './components/users/UserPage';
import RegistrationPage from './components/auth/registration/RegistrationPage';
import UserProfile from './components/users/UserProfile';
import TablesApp from './components/Tables/Tables-app';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/login' component={LoginPage} />
    <Route path='/cook' component={CookPage} />
    <Route path='/users' component={UserPage} />
    <Route path='/register' component={RegistrationPage} />
    <Route path='/profile' component={UserProfile} />
    <Route path='/tables' component={TablesApp} />
  </Layout>

);
