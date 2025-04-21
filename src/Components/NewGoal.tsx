import { FormEvent, useRef } from "react";

interface NGProps{
    handleNewGoal:(title:string,description:string)=>void
}
export default function NewGoal({handleNewGoal}:NGProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (
          goal.current!.value.trim() == "" ||
          summary.current!.value.trim() == ""
        )
          return;
          const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        e.currentTarget.reset()
        handleNewGoal(enteredGoal,enteredSummary);
        
    }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} required/>
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} required />
      </p>
      <button type="submit">Add Goal</button>
    </form>
  );
}
