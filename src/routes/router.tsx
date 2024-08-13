import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from '../pages/App'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Checkout from '../pages/Checkout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path='/products/:id' element={<ProductDetail/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Route>
        </Route>
    )
)

export default router
