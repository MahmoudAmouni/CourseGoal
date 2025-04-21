import CourseGoal from "./Components/CourseGoal";
import Header from "./Components/Header";
import imgsrc from "./assets/goals.jpg"
export default function App() {
  return (
    <main>
      <Header img={{src:imgsrc,alt:"img alt"}} >
        <h1>Your Course Goal</h1>
      </Header>
      <CourseGoal title="the course title">
        The course goal of this course
      </CourseGoal>
    </main>
  )
}
