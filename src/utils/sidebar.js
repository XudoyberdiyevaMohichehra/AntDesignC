import Generic from "../components/Generic";
import Buttons from '../components/Buttons/index'
import Carousels from '../components/Carousels/index'
import {CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
// import NormalInput from "../components/Inputs/index";
import {Inputs2} from '../components/Inputs2S/index'
import Inputs from '../components/Inputs/index'
export const sidebar = [
  {
    id: 1,
    icon:<CheckCircleOutlined/>,
    title: "Buttons",
    path: "/components/buttons",
    element: <Buttons />,
  },
  { id: 2, title: "Inputs", 
    icon:<CheckCircleOutlined/>,
    path: "/components/inputs", element: <Inputs2 /> },
  {
    id: 3,
    title: "Dropdown",
    icon:<CheckCircleOutlined/>,
    path: "/components/dropdown",
    element: <Inputs />,
  },
  {id:4, title:'Tooltip', icon:<CheckCircleOutlined/>, path:'/components/tooltip', element:<Generic/>},
  {id:5, title:'Menu',icon:<ClockCircleOutlined/>, path:'/components/menu',  element:<Generic/>},
  {id:6, title:'Steps',icon:<ClockCircleOutlined/>, path:'/components/steps',  element:<Generic/>},
  {id:7, title:'Calendar',icon:<ClockCircleOutlined/>, path:'/components/calendar', element:<Generic/>},
  {id:8, title:'Maps', icon:<ClockCircleOutlined/>, path:'/components/maps',  element:<Generic/>},
  {id:9, title:'Charts',icon:<ClockCircleOutlined/>, path:'/components/charts',  element:<Generic/>},
  {id:10, title:'Checkbox',icon:<CheckCircleOutlined/>, path:'/components/checkbox', element:<Generic/>},
  {id:11, title:'Forms',icon:<ClockCircleOutlined/>, path:'/components/forms',  element:<Generic/>},
  {id:12, title:'Date picker',icon:<ClockCircleOutlined/>, path:'/components/datepicker',  element:<Generic/>},
  {id:13, title:'Switch',icon:<CheckCircleOutlined/>, path:'/components/switch', element:<Generic/>},
  {id:14, title:'Transfer',icon:<ClockCircleOutlined/>, path:'/components/transfer',  element:<Generic/>},
  {id:15, title:'Upload',icon:<ClockCircleOutlined/>, path:'/components/upload',  element:<Generic/>},
  {id:16, title:'Avatar',icon:<ClockCircleOutlined/>, path:'/components/avatar', element:<Generic/>},
  {id:17, title:'Badge',icon:<CheckCircleOutlined/>, path:'/components/badge',  element:<Generic/>},
  {id:18, title:'Card',icon:<ClockCircleOutlined/>, path:'/components/card',  element:<Generic/>},
  {id:19, title:'Carousel',icon:<CheckCircleOutlined/>, path:'/components/carousel', element:<Generic/>},
  {id:20, title:'Collapse',icon:<ClockCircleOutlined/>, path:'/components/collapse',  element:<Generic/>},
  {id:21, title:'Image',icon:<ClockCircleOutlined/>, path:'/components/image',  element:<Generic/>},
  {id:22, title:'Pagination',icon:<ClockCircleOutlined/>, path:'/components/pagination', element:<Generic/>},
  {id:23, title:'Popover',icon:<ClockCircleOutlined/>, path:'/components/popover',  element:<Generic/>},
  {id:24, title:'Tabs',icon:<ClockCircleOutlined/>, path:'/components/tabs',  element:<Generic/>},
  {id:25, title:'Alert',icon:<CheckCircleOutlined/>, path:'/components/alert',  element:<Generic/>},
  {id:26, title:'Drawer',icon:<ClockCircleOutlined/>, path:'/components/drawer', element:<Generic/>},
  {id:27, title:'Modal',icon:<ClockCircleOutlined/>, path:'/components/modal',  element:<Generic/>},
  {id:28, title:'Notification',icon:<ClockCircleOutlined/>, path:'/components/notification',  element:<Generic/>},
  {id:29, title:'Pop confirm',icon:<ClockCircleOutlined/>, path:'/components/popconfirm', element:<Generic/>},
  {id:30, title:'Progress',icon:<ClockCircleOutlined/>, path:'/components/progress',  element:<Generic/>},
  {id:31, title:'Result',icon:<ClockCircleOutlined/>, path:'/components/result',  element:<Generic/>},
  {id:32, title:'Spinner',icon:<ClockCircleOutlined/>, path:'/components/spinner', element:<Generic/>},
];
