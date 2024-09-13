import React from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/course_program:list";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
function Category_Course_Service() {

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

    const urls = 'xxx';

    
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
 const findByIdUserfull= async(userId:string|null)=>{
//chua doi url
  const urls = `xxx`;

  
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
  return {findAll,findByIdUser,findByIdUserfull}
}

 
export default Category_Course_Service