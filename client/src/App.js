import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './component/PostList';
import PostCreate from './component/PostCreate';
import PostEdit from './component/PostEdit';

import authProvider from './authProvider';

function App() {
  return (
    <Admin
      dataProvider={restProvider('http://localhost:3000')}
      authProvider={authProvider}>
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
    </Admin>
  );
}

export default App;
