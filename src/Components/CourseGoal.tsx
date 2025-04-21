import { ReactNode } from "react"

interface CGProps{
    title:string,
    children:ReactNode
}
export default function CourseGoal({title,children}:CGProps) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{children}</h2>
      <p>Delete</p>
    </article>
  );
}
