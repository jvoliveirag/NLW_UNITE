import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/headet";

export function App() {

  return (
    <div className="flex flex-col gap-5 max-w-[1216px] mx-auto py-5 px-3">
      <Header/>
      <AttendeeList/>
    </div>
  )
}