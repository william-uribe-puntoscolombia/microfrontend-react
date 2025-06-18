import { Link, Outlet } from '@modern-js/runtime/router';
import './index.css';

export default function Layout() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home (shell)</Link>
          </li>
          <li>
            <Link to="/users">Usuarios (remote)</Link>
          </li>
        </ul>

        <span> [ Modernjs/React 18 ] </span>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
