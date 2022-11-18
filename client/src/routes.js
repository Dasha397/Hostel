import { ACCOMMODATION_ROUTE, BENEFIT_ROUTE, CREATE_STUDENT_ROUTE, LOGIN_ROUTE, PENALTY_ROUTE, PROFILE_ROUTE, QUEUE_ROUTE, REGISTRATION_ROUTE, STUDENTS_ROUTE } from "./utils/consts"
import AccommodationInformation from './pages/AccommodationInfo'
import CreateStudent from './pages/CreateStudent'
import StudentsList from './pages/StudentsList'
import Queue from './pages/Queue'
import Auth from './pages/Auth'
import Profile from "./pages/Profile"
import Benefit from "./pages/Benefits"
import Penalty from "./pages/Penalties"

export const authRoutes = [
	{
		path: PROFILE_ROUTE,
		element: <Profile />
	},
	{
		path: CREATE_STUDENT_ROUTE,
		element: <CreateStudent />
	},
	{
		path: ACCOMMODATION_ROUTE,
		element: <AccommodationInformation />
	},
	{
		path: STUDENTS_ROUTE,
		element: <StudentsList />
	},
	{
		path: BENEFIT_ROUTE,
		element: <Benefit />
	},
	{
		path: PENALTY_ROUTE,
		element: <Penalty />
	},
	{
		path: QUEUE_ROUTE,
		element: <Queue />
	},
]

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		element: <Auth />
	},
	{
		path: REGISTRATION_ROUTE,
		element: <Auth />
	}
]