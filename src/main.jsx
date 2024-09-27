import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Layout from './Layout'
import FeedElement from './components/FeedElement/FeedElement'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import './index.css'
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route index element={<App/>} />
    <Route path='feed/:feedid' element={<FeedElement/>} />
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
