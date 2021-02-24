import React, { useEffect, useState } from 'react';
import './User.css'
import axios from 'axios'

function fetchUserData() {
    return axios.get('https://randomuser.me/api/')
        .then(({ data }) => {
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
        })
}

const getFullName = (userInfo) => {
    const { name: { title, first, last } } = userInfo;
    return `${title}.${first} ${last}`
}

function UserInterface(props) {

    console.log(props);

    const { onGetName } = props;

    const [userName, setUserName] = useState([]);

    const fetchUserDataAll = () => {
        fetchUserData().then(fetchUser => {
            setUserName(fetchUser.results)
        });
    }

    useEffect(() => {
        fetchUserDataAll();
    }, [])

    console.log(userName[0]);
    if (userName[0]) {
        const fullName = getFullName(userName[0]);
        console.log(fullName);
        onGetName(fullName)
    }

    return (
        <div className="user-ui">
            <div className="user-pic">
                <img src={userName[0] ? userName[0].picture.large : ''} />
            </div>
            <div className="user-name">{userName[0] ? getFullName(userName[0]) : ''}</div>
        </div>
    )
}

export default UserInterface;