import React from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/use_couse:list";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
function User_Course_Service() {

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

 const findByIdUserfull= async(userId:string|null)=>{

  const urls = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/use_couse:list?appends[]=user_id&appends[]=course_id&filter={"$and":[{"user_id":{"id":{"$eq":${userId}}}}]}`;

  
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
const created = async ( dataToSend:{}) => {
    const urls = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/use_couse:create"; // Đảm bảo `url` đã được định nghĩa
 
  
    try {
      const respon = await axios.post(urls, dataToSend, {
        headers: {
          'authorization': apiKey
        }
      });
  
      // Trả về dữ liệu từ phản hồi
      return respon.data; // Hoặc respon.data.data nếu cấu trúc yêu cầu như vậy
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(error)) {
        console.error('Error response:', axiosError.response?.data);
        return null; // Hoặc tùy chỉnh thông báo lỗi
      } else {
        console.error('Unexpected error:', error);
        return null; // Hoặc tùy chỉnh thông báo lỗi
      }
    }
  }
  return {findAll,findByIdUserfull,created}
}

export default User_Course_Service;