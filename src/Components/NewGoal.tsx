import { FormEvent, useRef } from "react";

export default function NewGoal() {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(e:FormEvent){
        e.preventDefault();
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
