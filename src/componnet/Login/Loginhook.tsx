import { userInfo } from 'os';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
const urlredirect: string = "http://localhost:5173/loginhook";
const clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET||"";
const url = "https://oauth2.googleapis.com/token";
type OAuth = {
    state: string,
    code: string,
    scope: string,
    authuser: string
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}




function Loginhook() {
let userInforr=null;
    const query = useQuery();

    const oauth = (): OAuth => {
        return {
            state: query.get('state') || "null",
            code: query.get('code') || "null",
            scope: query.get('scope') || "null",
            authuser: query.get('authuser') || "null",
        };
    };
    let oauthdata = oauth();
    console.log(url)
    const body = new URLSearchParams({
        code: oauthdata.code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: urlredirect,
        grant_type: 'authorization_code'
    }).toString();

    // Sử dụng Fetch API để gửi yêu cầu POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Access Token:', data.access_token);
            const accessToken :string = data.access_token; // Access Token mà bạn đã nhận được

            // Endpoint để lấy thông tin người dùng
            const userInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';

            fetch(userInfoUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}` // Thêm access token vào header
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(userInfo => {
                    console.log('User Info:', userInfo); 
                    userInforr    = userInfo// Xuất thông tin người dùng
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    return (
        <div>
          helle
        </div>

    )
}

export default Loginhook