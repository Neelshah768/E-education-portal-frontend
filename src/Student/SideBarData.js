import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import SubjectIcon from '@mui/icons-material/Subject';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBarData = [
    {
        title:"My Profile",
        icon: <AccountBoxIcon />,
        link: '/studentProfile'
    },
    {
        title:"Home",
        icon: <HomeIcon />,
        link:'/student'
    },
    {
        title:"My Subjects",
        icon: <SubjectIcon />,
        link: '/studentclass'
    },
    {
        title:"Join a Class",
        icon: <LoginIcon />,
        link: 'join_class'
    },
    {
        title:"logout",
        icon:<LogoutIcon />,
        link: 'studentlogin.js'
    }
]