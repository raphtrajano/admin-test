import React from 'react';
import logo from './logo.svg';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Title } from 'react-admin';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import CategoryIcon from '@material-ui/icons/Category';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HelpIcon from '@material-ui/icons/Help';

import fakeDataProvider from 'ra-data-fakerest';

import { LudumTheme } from './components/LudumTheme';
import { BoardsList } from './components/Boards';
import { MilestonesList } from './components/Milestones/MilestonesList';
import { ReviewList } from './components/Reviews';
import { ProfileEdit } from './components/Profile/ProfileEdit';
import { ProfileList } from './components/Profile/ProfileList';
import { CustomLayout } from './components/CustomLayout';
import './App.css';

const dataProvider = fakeDataProvider({
  boards: [
    {
      id: 0, 
      title: 'My first Board',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRPcaeXEtyzW78TkrttXLLR8TPw2vDCessOQ&usqp=CAU',
    },
    {
      id: 1, 
      title: 'Test Board',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD7k_4pyYuJrVXCQmxBNilTXvp6-gxvj4g2w&usqp=CAU',
    },
    {
      id: 2, 
      title: 'Board 3',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTga9wZ7jLJ74Ni6RuvjWhjYZEAUpVfmco-uQ&usqp=CAU',
    }
  ],
  categories: [
    { id: 0, title: 'Physics' },
    { id: 1, title: 'Science' },
    { id: 2, title: 'Math' },
  ],
  reviews: [
    { id: 0,  author: 'John Doe', body: 'Sensational!' },
    { id: 1,  author: 'Jane Doe', body: 'I agree' },
  ],
  account: [
    {
      first_name: 'Doug',
      last_name: 'wick',
      address: '183 Court St.Rosedale, NY 11422',
      gender: 'Male',
      password: 'easypassword',
      birth_date: '1990-10-20',
      latest_amount: 40,
      billing: '-',
      plan_type: 'Free',
      TwoFactorAuthentication: true,
      set_new_password: '',
    }
  ],
  milestones: [
    { 
      board: 'My first board',  
      educator: 'Mr Jose', 
      title: 'Some fixes to be done', 
      status: 'Open',
      comment: 'Hey user, your board is great but I think that it would be better if you change de font size of the title' 
    },
    { 
      board: 'Board 2',  
      educator: 'Mr Paul', 
      title: 'Random improvements', 
      status: 'Expired',
      comment: 'Hey user, Lorem ipsum Lorem ipsum' 
    },
    { 
      board: 'Board 3',  
      educator: 'Mrs Kate', 
      title: 'This is finished!', 
      status: 'Completed',
      comment: 'Hey user, your board is great so no changes to be done!' 
    },
  ],
  help: [{ text: 'This is the Ludum boards support' }]
});

function App() {
  return (
    <div className="App">
      <Admin layout={CustomLayout} theme={LudumTheme} dataProvider={dataProvider}>
      <Resource icon={LocalLibraryIcon} options={{ label: 'Home/Boards' }} name="boards" list={BoardsList} />
      <Resource icon={CategoryIcon} options={{ label: 'Milestones/Tasks' }} name="milestones" list={MilestonesList} />
      <Resource icon={RateReviewIcon} options={{ label: 'Reports' }} name="reviews" list={ReviewList} />
      <Resource icon={AccountBoxIcon} options={{ label: 'Profile' }} name="account" list={ProfileList} edit={ProfileEdit} />
      <Resource icon={HelpIcon} options={{ label: 'Ludum Help' }} name="help" list={ListGuesser} />
    </Admin>
    </div>
  );
}

export default App;
