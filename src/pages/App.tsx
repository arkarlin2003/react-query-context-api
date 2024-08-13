import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const App = () => {
  return (
    <div className='container mx-auto px-20 py-3 space-y-10'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App