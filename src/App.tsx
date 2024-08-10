import { RouterProvider } from 'react-router-dom';
import ContextProvider from './app-state/ContextProvider';
import { router } from './routes';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
