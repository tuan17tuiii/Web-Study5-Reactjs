/// <reference types="vite/client" />

type User_Exam={
    id:number
    score:number
    user_id:User
    exam_id:Exam
    createdAt:Date
}

type ExamType = {
    createdAt:Date
    createdById:number
    id:number
    name:string
    number_questions:number
    time_todo:number
    updatedAt:Date
    updatedById:number
}
type Course = {
    createdAt:Date
    createdById:number
    id:number
    name:string
    price:number
    price_sale:number
    updatedAt:Date
    updatedById:number
}
type User={
    id:string
    username?:string
    password?:string
    email?:string
    phone?:string
    role?:string

    
}
type Exam = {
    createdAt:Date
    createdById:number
    id:number
    name:string
    number_questions:number
    time_todo:number
    updatedAt:Date
    updatedById:number
    questions?:Questions[]
}
type Questions ={
    id:number
    question:string
    answers_id:Ansewr[]

}
type Ansewr ={
    id?:number
    anser:string
    status:boolean

}
type Result = {
    id?: number;
    id_exam: number;
    id_user: number;
    answers: Answer[]; // Mảng các đối tượng Answer
  };
  type Score={
    id:number;
    score:number;
    answertrues:number;
    answers:number;
  }
  type UserExamed = {
    answers: number;
    answertrues: number;
    createdAt: string;
    createdById: number | null;
    fk_idexam: number;
    fk_user: number;
    id: number;
    id_exam: Exam;
    id_user: User;
    score: number | null;
    updatedAt: string;
    updatedById: number | null;
  }
  type User_Course ={
    id:number;
    course_id:Course;
    user_id:User
  }
type DateCus= {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  type Blog={
    blog_iduser?:string,
    content:string,
    createdAt:string,
    id?:number,
    image:string,
    title:string
  } 

  
  type Category={
    id:string
    name:string
  }
  type ResultExam ={
    answers:Ansewr[]
    id:string
    id_exam:Exam
    id_user:User
  }