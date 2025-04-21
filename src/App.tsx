import { useState } from "react";
import CourseGoal from "./Components/CourseGoal";
import Header from "./Components/Header";
import imgsrc from "./assets/goals.jpg"

export interface CourseGoalsType {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  
  const [goals, setGoals] = useState<CourseGoalsType[]>([]);

  function handleAddGoal(){
    setGoals((goals)=>{
      const newGoal: CourseGoalsType={
        title:"new Goal",
        description:"goal description",
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
      <button onClick={handleAddGoal}>Add</button>
      
    </main>
  );
}
