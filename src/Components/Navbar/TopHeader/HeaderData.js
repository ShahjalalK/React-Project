import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineGooglePlus, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'

export const HeaderData = [
    {
       title: 'Sign Up',
       path: '/signUp'
        

    },
    {
       title: 'Login',
       path: '/login'

    },
    {
       title: 'RSS Feeds',
       path: '/feeds'
       
    }
    ,
    {
       title: 'Archived News',
       path: '/news'

    }
]

export const HeaderIcon = [
    {
        icon: <RiLinkedinFill />,
        path: '/'
    },
    {
        icon: <AiOutlineTwitter />,
        path: '/'
    },
    {
        icon: <FaPinterestP />,
        path: '/'
    },
    {
        icon: <AiOutlineGooglePlus />, 
        path: '/'
    },
]