import { Route, Routes } from 'react-router-dom';
import Traineehome from '../containers/Home';
import Schedule from '../containers/Schedule';
import Learnerdetails from '../containers/Learnerdetails';
import BuyPack from '../pages/buypack'
import Trainerdetails from '../containers/Trainerdetails';
import Login from '../containers/Login';
import Home from '../homeElements/Home';
import { ifLoggedIn } from '../hoc/ifLoggedIn';
import { ifLoggedOut } from '../hoc/ifLoggedOut';
import Register from '../homeElements/Register';
import ForgotPassword from '../homeElements/ForgotPassword';
import Contact from '../homeElements/Contact';
import About from '../homeElements/About';


const PackagesRoute = ifLoggedIn(Traineehome)
const BuyPackRoute = ifLoggedIn(BuyPack)
const TrainerdetailsRoute = ifLoggedIn(Trainerdetails)
const ScheduleRoute = ifLoggedIn(Schedule)
const LearnerdetailsRoute = ifLoggedIn(Learnerdetails)
const LoginRoute = ifLoggedOut(Login)

const AppRoutes = () => {
    return <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/packages' element={<PackagesRoute />} />
        <Route path='/home/buypack' element={<BuyPackRoute />} />
        <Route path='/trainer/info' element={<TrainerdetailsRoute />} />
        <Route path='/schedule' element={<ScheduleRoute />} />
        <Route path='/learnerdetails' element={<LearnerdetailsRoute />} />
        <Route path='/login' element={<LoginRoute />} />
    </Routes>
};

export default AppRoutes;
