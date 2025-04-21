import { ReactNode } from "react"

interface CGProps{
    title:string,
    children:ReactNode
}
export default function CourseGoal({title,children}:CGProps) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{children}</p>
    </article>
  );
}
