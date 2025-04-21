import { ReactNode } from "react";
import { CourseGoalsType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
interface CGLPorps{
    goals:CourseGoalsType[],
    handledltGoal:(id:number)=>void
}
export default function CourseGoalList({goals,handledltGoal}:CGLPorps) {
  if(goals.length == 0)return <InfoBox mode="hint" >
    You have no course goals.Start adding some!!📰
  </InfoBox>

  let warningBox: ReactNode;
  if(goals.length>=4)warningBox = <InfoBox mode="warning" severity="high" >Dont add more goals to not get unmotivated😣</InfoBox>
  return (
    <>
    {warningBox}
    <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} handledltGoal={handledltGoal}>
             {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}
