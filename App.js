import React from 'react';
import { } from 'react-native';

import AuthNavigation from './src/navigation/AuthNavigation';
import Dashboard from './src/screens/users/Dashboard';
import Person from './src/screens/users/Person';
import User from './src/screens/users/User';
import Bubbles from './src/screens/users/Bubbles'
import AddAdjusters from './src/screens/users/AddAdjuster'
import Profile from './src/screens/users/Profile'


const App = () => {
  return <AuthNavigation />;
};

export default App;
