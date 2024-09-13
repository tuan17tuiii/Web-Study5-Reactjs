import React from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/blog:list";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
function BlogService() {

const findAll= async()=>{
    const urls = url 
    try {
      const respon = await axios.get(urls, {
        headers: {
          'authorization': String(apiKey)
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
const findById= async(id:string|null)=>{

    const urls = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/blog:list?pageSize=20&appends[]=user_id&page=1&filter={"$and":[{"id":{"$eq":${id}}}]}`;

    
    try {
      const respon = await axios.get(urls, {
        headers: {
          'authorization': String(apiKey)
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
        'authorization': String(apiKey)
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
  return {findAll,findById,findByIdUserfull}
}

 
export default BlogService