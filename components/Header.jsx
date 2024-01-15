import Link from "next/link"
import ThemeButton from "./ui/ThemeButton"

const Header = () => {
  return (
    <header>
        <nav className="py-8 container flex items-center justify-between">
            <ul className="flex gap-10">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>

            <ThemeButton />
        </nav>
    </header>
  )
}
export default Header