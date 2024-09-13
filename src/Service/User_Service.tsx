import React from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/score_bubble:list";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
function User_Service() {

const findAll= async()=>{
    const urls = url 
    try {
      const respon = await axios.get(urls, {
        headers: {
          'authorization': apiKey
        },
       
      })

      return respon['data'].data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(error)) {
          // Truy cập thông tin lỗi Axios
          console.error('Error response:', axiosError.response?.data);
          return null; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
        } else {
          console.error('Unexpected error:', error);
          return null; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
        }
    }
}
const findByIdUser= async(userId:string|null)=>{

    const urls = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/users:list?appends[]=roles&page=1&filter={"$and":[{"id":{"$eq":${userId}}}]}`;

    
    try {
      const respon = await axios.get(urls, {
        headers: {
          'authorization': apiKey
        },
      })
console.log("serce" ,respon['data'].data)
      return respon['data'].data;

    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(error)) {
          // Truy cập thông tin lỗi Axios
          console.error('Error response:', axiosError.response?.data);
          return null; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
        } else {
          console.error('Unexpected error:', error);
          return null; // Hoặc bạn có thể tùy chỉnh thông báo lỗi
        }
    }
    
}

  return {findAll,findByIdUser}
}

export default User_Service;