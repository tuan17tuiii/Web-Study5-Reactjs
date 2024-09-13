import React from 'react'
const url = "https://dinhtruongtho-app-1724042398.pass.id.vn/api/result_exam:create";
import axios, { AxiosError } from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
function ResultService() {

  const created = async ( dataToSend:Result) => {
    const urls = 'https://dinhtruongtho-app-1724042398.pass.id.vn/api/result_exam:create'; // Đảm bảo `url` đã được định nghĩa
 
  
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
  const findById= async(idExam:string,idUser:string)=>{
  

const urls = `https://dinhtruongtho-app-1724042398.pass.id.vn/api/result_exam:list?pageSize=20&appends[]=id_exam&appends[]=answers&appends[]=id_user&page=1&filter={"$and":[{"id_exam":{"id":{"$eq":${idExam}}}},{"id_user":{"id":{"$eq":${idUser}}}}]}`;

    try {
      const respon = await axios.get(urls, {
        headers: {
          'authorization': apiKey
        },
       
      })
      console.log("tex",respon['data'])
if(respon['data'].data.length<=0){
  return null;
}
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



  return {created,findById}
}

export default ResultService