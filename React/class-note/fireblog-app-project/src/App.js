import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app-router/AppRouter';
import './App.css';
import ToastDeneme from './components/ToastDeneme';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextProvider from './contexts/BlogContext';

function App() {

  return (
    <div className="App h-screen font-ffKanit relative">
      <BrowserRouter >
        <BlogContextProvider >
          <AuthContextProvider >
            <AppRouter />
            <ToastDeneme />
          </AuthContextProvider>
        </BlogContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;