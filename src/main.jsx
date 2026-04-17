import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { router } from './routes/Routes';
import QuickCheckFriendsProvider from './context/QuickCheckFriendsProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuickCheckFriendsProvider>

        <RouterProvider router={router} />,
          <ToastContainer />

    </QuickCheckFriendsProvider>
  </StrictMode>,
)
