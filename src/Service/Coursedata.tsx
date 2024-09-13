import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/courses:list";
const apiKey = import.meta.env.VITE_API_KEY;
const body = new URLSearchParams({

}).toString();
function Coursedata() {
  const [examList, setexamlist] = useState<Course[] | []|null>([])
  const [loading, setloading] = useState(false)
  const findAllCouses = async () => {
    try {
      const respon = await axios.get(url, {
        headers: {
          'authorization': apiKey
        },
      });
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
    

    // Hàm con 2


  }
  const findByIdCourse = async (id:string|undefined) => {
    try {
      let url2=`https://dinhtruongtho-app-1724042398.pass.id.vn/api/courses:list?filter=%7B%22%24and%22%3A%5B%7B%22id%22%3A%7B%22%24eq%22%3A${id}%7D%7D%5D%7D`
      const respon = await axios.get(url2, {
        headers: {
          'authorization': apiKey
        },
      });
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
  return { findAllCouses ,findByIdCourse}

}

export default Coursedata;

