import Home from './components/home'
import Quote from './components/quote'
import History from './components/history'

const AppRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/quote',
    element: <Quote />
  },
  {
    path: '/history',
    element: <History />
  }
];

export default AppRoutes