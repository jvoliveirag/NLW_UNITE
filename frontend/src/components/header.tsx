import nlwIcon from "../assets/nlw-unite-icon.svg"
import { NavLink } from "./nav-link"

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwIcon} alt="icon" />
      <nav className="flex items-center gap-5">
        <NavLink href="/events">Eventos</NavLink>
        <NavLink href="attendees">Participantes</NavLink>
      </nav>
    </div>
  )
}