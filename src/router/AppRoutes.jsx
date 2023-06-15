import { Route, Routes } from 'react-router-dom';
import Packages from '../containers/Packages';
import Schedule from '../containers/Schedule';
import LearnerDetails from '../containers/Learnerdetails';
import TrainerDetails from '../containers/Trainerdetails';
import Login from '../containers/Login';
import Home from '../homeElements/Home';
import { ifLoggedIn } from '../hoc/ifLoggedIn';
import { ifLoggedOut } from '../hoc/ifLoggedOut';
import Register from '../homeElements/Register';
import ForgotPassword from '../homeElements/ForgotPassword';
import Contact from '../homeElements/Contact';
import About from '../homeElements/About';


const PackagesRoute = ifLoggedIn(Packages)
const TrainerDetailsRoute = ifLoggedIn(TrainerDetails)
const ScheduleRoute = ifLoggedIn(Schedule)
const LearnerDetailsRoute = ifLoggedIn(LearnerDetails)
const LoginRoute = ifLoggedOut(Login)
const RegisterRoute = ifLoggedOut(Register)
const ForgotPasswordRoute = ifLoggedOut(ForgotPassword)


const AppRoutes = () => {
    return <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<RegisterRoute/>} />
        <Route path='/forgotPassword' element={<ForgotPasswordRoute />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/packages' element={<PackagesRoute />} />
        <Route path='/trainer/info' element={<TrainerDetailsRoute />} />
        <Route path='/schedule' element={<ScheduleRoute />} />
        <Route path='/learner/info' element={<LearnerDetailsRoute />} />
        <Route path='/login' element={<LoginRoute />} />
    </Routes>
};

export default AppRoutes;
