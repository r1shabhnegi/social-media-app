import { Routes, Route } from 'react-router-dom';
import {
  Community,
  CreatePost,
  Home,
  Profile,
  ProtectedRoute,
  RootLayout,
  SignInPage,
  SignUpPage,
} from './pages/_index';
function App() {
  return (
    <main>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path='/sign-in'
            element={<SignInPage />}
          />
          <Route
            path='/sign-up'
            element={<SignUpPage />}
          />
        </Route>

        <Route
          path='/'
          element={<RootLayout />}>
          <Route
            path='/home'
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
