import { useState } from "react";
import Header from "./Components/Header";
import imgsrc from "./assets/icon.jpg"
import CourseGoalList from "./Components/CourseGoalList";
import NewGoal from "./Components/NewGoal";

export interface CourseGoalsType {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  
  const [goals, setGoals] = useState<CourseGoalsType[]>([]);

  function handleAddGoal(title:string,description:string){
    setGoals((goals)=>{
      const newGoal: CourseGoalsType={
        title,
        description,
        id:Math.random()
      }
      return [...goals,newGoal]
    })
  }
  function handledltGoal(id:number):void{
    setGoals((el)=>
    el.filter((el)=>el.id!==id)
    )
  }
  return (
    <main>
      <Header img={{ src: imgsrc, alt: "img alt" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal handleNewGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} handledltGoal={handledltGoal} />
    </main>
  );
}
