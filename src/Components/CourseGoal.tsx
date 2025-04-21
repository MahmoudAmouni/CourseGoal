import { ReactNode } from "react"

interface CGProps{
    title:string,
    children:ReactNode,
    id:number,
    handledltGoal:(id:number)=> void
}
export default function CourseGoal({title,children,id,handledltGoal}:CGProps) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{children}</h2>
      <p onClick={()=>handledltGoal(id)}>Delete</p>
    </article>
  );
}
