import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Schedule from '../containers/Schedule';
import Learnerdetails from '../containers/Learnerdetails';
import BuyPack from '../pages/buypack'
import Trainerdetails from '../containers/Trainerdetails';

const AppRoutes = () => {
    return <Routes>
        
        <Route path='/Home' element={<Home />} />
        <Route path='/Home/buypack' element={<BuyPack/>} />
        <Route path='/Trainerdetails' element={<Trainerdetails />} />
        <Route path='/Schedule' element={<Schedule />} />
        <Route path='/Learnerdetails' element={<Learnerdetails />} />
        
    </Routes>
};

export default AppRoutes;
