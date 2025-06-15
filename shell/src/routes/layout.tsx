import { Link, Outlet } from '@modern-js/runtime/router';
import './index.css';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/remote">Mfe</Link>
            </li>
          </ul>
          <span> [ Modernjs/React 18 ] </span>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
