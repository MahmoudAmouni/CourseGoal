
export default function NewGoal() {
  return (
    <form onSubmit={}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
    </form>
  );
}
