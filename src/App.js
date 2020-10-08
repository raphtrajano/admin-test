import React from 'react';
import logo from './logo.svg';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { Title } from 'react-admin';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import CategoryIcon from '@material-ui/icons/Category';
import RateReviewIcon from '@material-ui/icons/RateReview';

import fakeDataProvider from 'ra-data-fakerest';

import { LudumTheme } from './components/LudumTheme';
import { PostList } from './components/posts';
import { CategoryList } from './components/Categories';
import { ReviewList } from './components/Reviews';
import { Logo } from './components/Logo';
import './App.css';

const dataProvider = fakeDataProvider({
  boards: [
    {
      id: 0, title: 'Board 1',
    },
    {
      id: 1, title: 'Board 2',
    },
    {
      id: 2, title: 'Board 3',
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
});

function App() {
  return (
    <div className="App">
      <Admin theme={LudumTheme} title={<Logo/>} dataProvider={dataProvider}>
        <Title title={<Logo/>} />
      <Resource icon={LocalLibraryIcon} name="boards" list={PostList} />
      <Resource icon={CategoryIcon} name="categories" list={CategoryList} />
      <Resource icon={RateReviewIcon} name="reviews" list={ReviewList} />
    </Admin>
    </div>
  );
}

export default App;
