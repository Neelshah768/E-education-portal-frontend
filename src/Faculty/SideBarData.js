import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import ClassIcon from '@mui/icons-material/Class';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBarData = [
    {
        title:"My Profile",
        icon: <AccountBoxIcon />,
        link: '/facultyprofile'
    },
    {
        title:"Home",
        icon: <HomeIcon />,
        link:'/faculty'
    },
    {
        title:"My ClassRoom",
        icon: <ClassIcon />,
        link: '/myclassroom'
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