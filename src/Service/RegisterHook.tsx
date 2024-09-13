import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;


function RegisterHook() {
    const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/users:create";
    const [rs, setRs] = useState<string | null>(null);
    const [userr, setUserr] = useState<User>({id:"", username: "", password: "", role: "2" });

    useEffect(() => {

    }, [userr]);


    const register = async (user: User) => {
        // { "email": "tusannguyen@gmail.com", "password": "1s23", "phone": "3", "role": [{ "id": "2" }, { "id": "1" }] }
        const body = {
            username: user.username,
            password: user.password,
            ...(user.email && { email: user.email }), // Thêm email nếu có
            ...(user.phone && { phone: user.phone }),  // Thêm phone nếu có
            role: [{id :2}]
        };
        const r = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/users:create`;



        try {
            const respon = await axios.post(r, body, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': apiKey
                },
            })
            console.log("findbyid full", respon['data'])
            return respon['data'].data;
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axios.isAxiosError(error)) {
                // Truy cập thông tin lỗi Axios
                console.log('Error response:', axiosError.response?.data);
                return axiosError.response?.data // Hoặc bạn có thể tùy chỉnh thông báo lỗi
            } else {
                console.error('Unexpected error:', error);
                return error; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
            }
        }

    }

    return {
        register
    }; // Trả về trạng thái
}

export default RegisterHook;
