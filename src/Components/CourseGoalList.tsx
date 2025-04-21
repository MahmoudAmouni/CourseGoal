import { CourseGoalsType } from "../App";
import CourseGoal from "./CourseGoal";
interface CGLPorps{
    goals:CourseGoalsType[],
    handledltGoal:(id:number)=>void
}
export default function CourseGoalList({goals,handledltGoal}:CGLPorps) {
  return (
    <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} handledltGoal={handledltGoal}>
             {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
  )
}
