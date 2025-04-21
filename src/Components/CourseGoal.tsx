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
      <div>
        <h1>{title}</h1>
        <h2>{children}</h2>
      </div>
      <button onClick={() => handledltGoal(id)}>Delete</button>
    </article>
  );
}
