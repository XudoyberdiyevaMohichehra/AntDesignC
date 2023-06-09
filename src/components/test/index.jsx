// import React from "react";
// import {Dropdown} from 'antd'

// const Test =()=>{
//  return(
//     <>
     
//     </>
//  )
// }
// export default Test
import { Button, Dropdown } from 'antd';
const items = [
    {
        key: 'Student',
        label:(
            <a href="https:t.me/Mohichehra0501">1st menu item</a>
        )
        // key: '1',
        // label: (
        //     <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        //         1st menu item
        //     </a>
        // ),
    },
    {
        key: '2',
        label: (
            // <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            //     2nd menu item
            // </a>
            <input type="text" />
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];
const App = () => (
    <>
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomLeft"
            arrow={{
                pointAtCenter: true,
            }}
        >
            <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown
            menu={{
                items,
            }}
            placement="bottom"
            arrow={{
                pointAtCenter: true,
            }}
        >
            <Button>bottom</Button>
        </Dropdown>
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomRight"
            arrow={{
                pointAtCenter: true,
            }}
        >
            <button>bottomRight</button>
        </Dropdown>
        <br />
        {/* <Dropdown
            menu={{
                items,
            }}
            placement="topLeft"
            arrow={{
                pointAtCenter: true,
            }}
        >
            <Button>topLeft</Button>
        </Dropdown>
        <Dropdown
            menu={{
                items,
            }}
            placement="top"
            arrow={{
                pointAtCenter: true,
            }}
        >
            <Button>top</Button>
        </Dropdown>
        <Dropdown
            menu={{
                items,
            }}
            placement="topRight"
            arrow={{
                pointAtCenter: true,
            }}
        >
            <Button>topRight</Button>
        </Dropdown> */}
    </>
);
export default App;