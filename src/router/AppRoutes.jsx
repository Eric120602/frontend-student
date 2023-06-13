import { Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Schedule from '../containers/Schedule';
import Learnerdetails from '../containers/Learnerdetails';
import BuyPack from '../pages/buypack'
import Trainerdetails from '../containers/Trainerdetails';
import Login from '../containers/Login';
import { ifLoggedIn } from '../hoc/ifLoggedIn';
import { ifLoggedOut } from '../hoc/ifLoggedOut';

const HomeRoute = ifLoggedIn(Home)
const BuyPackRoute = ifLoggedIn(BuyPack)
const TrainerdetailsRoute = ifLoggedIn(Trainerdetails)
const ScheduleRoute = ifLoggedIn(Schedule)
const LearnerdetailsRoute = ifLoggedIn(Learnerdetails)
const LoginRoute = ifLoggedOut(Login)

const AppRoutes = () => {
    return <Routes>
        <Route path='/home' element={<HomeRoute/>} />
        <Route path='/home/buypack' element={<BuyPackRoute/>} />
        <Route path='/trainer/info' element={<TrainerdetailsRoute/>} />
        <Route path='/schedule' element={<ScheduleRoute/>} />
        <Route path='/learnerdetails' element={<LearnerdetailsRoute/>} />
        <Route path='/login' element={<LoginRoute/>} />
    </Routes>
};

export default AppRoutes;
