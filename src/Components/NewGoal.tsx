import { FormEvent, useRef } from "react";

interface NGProps{
    handleNewGoal:(title:string,description:string)=>void
}
export default function NewGoal({handleNewGoal}:NGProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(e:FormEvent){
        e.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        handleNewGoal(enteredGoal,enteredSummary);
        
    }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
