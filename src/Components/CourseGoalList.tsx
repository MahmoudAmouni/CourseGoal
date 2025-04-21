import { CourseGoalsType } from "../App";
interface CGLPorps{
    goals:CourseGoalsType,
}
export default function CourseGoalList({goals}:) {
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
