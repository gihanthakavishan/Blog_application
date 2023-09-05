// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header';
import Post from './post';
import Layout from './layout';
import IndexPage from './pages/IndexPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <userContextProvider>

    
  <Routes>  
     <Route path="/" element={<Layout />}>
           <Route index element={ <IndexPage /> } />
           <Route path="/login" element={ <LoginPage /> }/>
           <Route path="/register" element={ <RegisterPage /> }/>
     </Route>
  </Routes>
  </userContextProvider>
  );
}

export default App;
