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
import { LudumHelp } from './components/LudumHelp/LudumHelp';
import { TicketEdit } from './components/LudumHelp/TicketEdit';
import { CustomLayout } from './components/CustomLayout';
import './App.css';
import { FormatListNumberedRtlRounded } from '@material-ui/icons';

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
      status: 'open',
      comment: 'Hey user, your board is great but I think that it would be better if you change de font size of the title' 
    },
    { 
      board: 'Board 3',  
      educator: 'Mrs Kate', 
      title: 'This is finished!', 
      status: 'completed',
      comment: 'Hey user, your board is great so no changes to be done!' 
    },
    { 
      board: 'Board 4',  
      educator: 'Mrs Kate', 
      title: 'This is finished!', 
      status: 'completed',
      comment: 'Hey user, your board is great so no changes to be done!' 
    },
    { 
      board: 'Board 2',  
      educator: 'Mr Paul', 
      title: 'Random improvements', 
      status: 'expired',
      comment: 'Hey user, Lorem ipsum Lorem ipsum' 
    },
    { 
      board: 'Board 5',  
      educator: 'Mr Paul', 
      title: 'Random improvements', 
      status: 'expired',
      comment: 'Hey user, Lorem ipsum Lorem ipsum' 
    },
  ],
  help: [
    {
      id: 2342342,
      type: "subject",
      title: "Subject 1",
      description: "This is the subject field of a ticket, This is the subject field of a ticket, This is the subject field of a ticket, This is the subject field of a ticket, This is the subject field of a ticket",
      position: 1,
      active: true,
      status: "Open",
      agent_description: "Agent only description",
      created_at: "2009-07-20 T17:15:17Z",
      updated_at: "2011-05-05 T22:38:52Z"
    },
    {
      id: 5435342,
      type: "subject",
      title: "Subject 2",
      description: "This is the subject field of a ticket 2",
      position: 2,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2019-08-20 T08:23:53Z",
      updated_at: "2019-09-05 T09:52:23Z"
    },
    {
      id: 3154990,
      type: "subject",
      title: "Subject 3",
      description: "This is the subject field of a ticket 3, This is the subject field of a ticket 3, This is the subject field of a ticket 3, This is the subject field of a ticket 3",
      position: 3,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2015-05-20 T07:23:22Z",
      updated_at: "2016-09-21 T16:25:32Z"
    },
    {
      id: 2768900,
      type: "subject",
      title: "Subject 4",
      description: "This is the subject field of a ticket 4, This is the subject field of a ticket 4, This is the subject field of a ticket 4",
      position: 4,
      active: true,
      status: "Open",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 8768900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: true,
      status: "Open",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 4768900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 5468900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: true,
      status: "Open",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 9968900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 5268900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 3368900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 8763900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5",
      position: 5,
      active: false,
      status: "Closed",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
    {
      id: 1168900,
      type: "subject",
      title: "Subject 5",
      description: "This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5, This is the subject field of a ticket 5,",
      position: 5,
      active: true,
      status: "Open",
      agent_description: "Agent only description",
      created_at: "2018-10-20 T12:35:19Z",
      updated_at: "2018-11-25 T15:38:52Z"
    },
  ]
});

function App() {
  return (
    <div className="App">
      <Admin layout={CustomLayout} theme={LudumTheme} dataProvider={dataProvider}>
      <Resource icon={LocalLibraryIcon} options={{ label: 'Home/Boards' }} name="boards" list={BoardsList} />
      <Resource icon={CategoryIcon} options={{ label: 'Milestones/Tasks' }} name="milestones" list={MilestonesList} />
      <Resource icon={RateReviewIcon} options={{ label: 'Reports' }} name="reviews" list={ReviewList} />
      <Resource icon={AccountBoxIcon} options={{ label: 'Profile' }} name="account" list={ProfileList} edit={ProfileEdit} />
      <Resource icon={HelpIcon} options={{ label: 'Ludum Help' }} name="help" list={LudumHelp} edit={TicketEdit} />
    </Admin>
    </div>
  );
}

export default App;
