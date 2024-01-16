import { HomeOutline, PersonOutline, ChatbubbleOutline, BarChartOutline, CartOutline, SettingsOutline } from 'react-ionicons';

export const links = [
    {
        id: 1,
        text: "Home",
        icon: <HomeOutline />,
        url: '/'
    },{
        id: 2,
        text: "Profile",
        icon: <PersonOutline />,
        url: '/profile'
    },{
        id: 3,
        text: "Inbox",
        icon: <ChatbubbleOutline />,
        url: '/inbox'
    },{
        id: 4,
        text: "Analytics",
        icon: <BarChartOutline />,
        url: '/analytics'
    },{
        id: 5,
        text: "Order",
        icon: <CartOutline />,
        url: '/order'
    },{
        id: 6,
        text: "Settings",
        icon: <SettingsOutline />,
        url: '/settings'
    }
]