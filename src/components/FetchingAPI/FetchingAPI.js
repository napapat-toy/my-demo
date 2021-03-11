import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './FetchingAPI.css'

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

function FetchingAPI() {

    const [userName, setUserName] = useState([]);
    const [userData, setUserData] = useState("");

    const fetchUserDataAll = () => {
        fetchUserData().then(fetchUser => {
            setUserData(JSON.stringify(fetchUser, null, 2))
            setUserName(fetchUser.results)
        });
    }

    useEffect(() => {
        fetchUserDataAll();
    }, [])

    const getFullName = (userInfo) => {
        const { name: { title, first, last } } = userInfo;
        return `${title}. ${first} ${last}`
    }

    return (
        <div className="fetching-api">
            <div className="api-minimal">
                <div className="api-pic">
                    <img alt="random people" src={userName[0] ? userName[0].picture.large : ''} />
                </div>
                <div className="api-name">{userName[0] ? getFullName(userName[0]) : ''}
                </div>
            </div>

            <hr />
            <pre>
                {userData}
            </pre>
        </div>
    )
}

export default FetchingAPI;