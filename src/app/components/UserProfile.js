import React from 'react';
import { menus } from '@/app/utils/Data';
import Header from './Header';

const UserProfile = () => {

    //     const FetchApi = async () =>{
//         const DataUrl = "https://jsonplaceholder.typicode.com/posts";
//         const fetchApi = await fetch(DataUrl)
//         // console.log(fetchApi)
//         const Data = await fetchApi.json()
//         console.log(Data)
//    }

//    FetchApi();

    return (
        <>
            <Header />
            <ul className='userlist'>
                {menus.map(item => (
                    <li key={item.label}>
                        <i className={item.icon}></i>{item.label}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserProfile;
