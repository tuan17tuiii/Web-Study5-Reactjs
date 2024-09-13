import React, { useEffect, useState } from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/auth:signIn";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
function LoginHook() {

    const checkLogin = async (user: User) => {
        try {
            const respon = await axios.post(url, {

                account: user.username,
                password: user.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyNDM4MzA2NCwiZXhwIjoxNzI0OTg3ODY0fQ.MYuC7z350FBrjUiIK0ugWuEKQ9nGImRvqKCJYDr1LCw'
                    // }
                }
            },);
              return respon.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axios.isAxiosError(error)) {
                // Truy cập thông tin lỗi Axios
                console.error('Error response:', axiosError.response?.data);
                return axiosError.response?.data; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
              } else {
                console.error('Unexpected error:', error);
                return null; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
              }
        }

    }
    return { checkLogin };

}
export default LoginHook;

