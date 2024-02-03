import { Routes, Route } from 'react-router-dom';
import {
  Community,
  CreatePost,
  Home,
  Profile,
  ProtectedRoute,
  SignInPage,
} from './pages/_index';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuth } from './services/redux/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = () => {
      dispatch(fetchAuth());
    };
    fetch();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path='/sign-in'
          element={<SignInPage />}
        />

        <Route
          path='/'
          element={<ProtectedRoute />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/profile/:id'
            element={<Profile />}
          />
          <Route
            path='/community/:communityId'
            element={<Community />}
          />
          <Route
            path='/create-post'
            element={<CreatePost />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
