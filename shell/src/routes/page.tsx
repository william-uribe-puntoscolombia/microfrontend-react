import { Helmet } from '@modern-js/runtime/head';
import './index.css';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>

    <header>
      <nav>
        <ul>
          <li><a href='#' >Home</a></li>
          <li><a href='#'>Mfe</a></li>
        </ul>
        <span> [ Modernjs/React 18 ] </span>
      </nav>
    </header>

    <main>
      Page
    </main>
  </div>
);

export default Index;
