import React, { useEffect, useState } from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/exam:list";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
const body = new URLSearchParams({

}).toString();
function Examdata() {
  const [examList, setexamlist] = useState<Exam[] | []>([])
  const [loading, setloading] = useState(false)


  const findAll = async () => {
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
  // Hàm con 2
  const findById = async (id: number) => {
    const r = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/exam:list?pageSize=20&page=1&filter=%7B%22%24and%22%3A%5B%7B%22id%22%3A%7B%22%24eq%22%3A${id}%7D%7D%5D%7D`;

    console.log(r); // In ra URL

    try {
      const respon = await axios.get(r, {
        headers: {
          'authorization': apiKey
        },
      })
      console.log("findbyid", respon['data'])
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
  // ham 3
  const findByIdFull = async (id: number) => {
    const r = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/exam:get?filterByTk=${id}&appends%5B%5D=questions&appends%5B%5D=questions.answers_id`;

    console.log(r); // In ra URL

    try {
      const respon = await axios.get(r, {
        headers: {
          'authorization': apiKey
        },
      })
      console.log("findbyid full", respon['data'])
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
  const findByCategory = async (userId: number) => {
    const urls = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/exam:list?pageSize=20&appends[]=questions&appends[]=category&page=1&filter=%7B%22%24and%22%3A%5B%7B%22category%22%3A%7B%22id%22%3A%7B%22%24eq%22%3A${userId}%7D%7D%7D%5D%7D`;
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

  const findByNameCategory = async (name: string) => {
    const urls = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/exam:list?pageSize=20&appends[]=questions&appends[]=course_exam&appends[]=category&page=1&filter={"$and":[{"category":{"name":{"$includes":"${name}"}}}]}`;
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

  // Kiểm tra nếu tìm thấy đối tượng hoặc gán một giá trị mặc định

  return { findAll, findById, findByIdFull ,findByCategory,findByNameCategory}

}

export default Examdata;

