import {A} from 'hookrouter'
import './style.css'

export default function Nav() {
  return (
    <nav>
        <ul>
            <li><A href="/">Home Page</A></li>
            <li><A href="/blog">Blog</A></li>
            <li><A href="/">About Us</A></li>
        </ul>
    </nav>
  )
}
