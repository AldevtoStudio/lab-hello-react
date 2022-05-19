import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuImg from './images/menu-top-xs.png';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';

const Navbar = () => {
  return (
    <nav>
      <img src={ironhackLogo} alt="Ironhack Logo" />
      <img id="menuBtn" src={menuImg} alt="Menu Icon" />
    </nav>
  );
};

const Item = (img, title, description) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <section id="top">
        <Navbar />

        <div className="landing">
          <h1>
            Say hello to <br />
            ReactJS
          </h1>
          <p>
            You will learn how to use <br />
            the most popular frontend library, <br />
            and become a super Ninja developer. <br />
          </p>
          <a href="/">Awesome!</a>
        </div>
      </section>
      <section id="bottom">
        <div className="item">
          <img src={img1} alt="" />
          <h4>Declarative</h4>
          <p>
            React makes it <br />
            painless to create <br />
            interactive UIs. <br />
          </p>
        </div>

        <div className="item">
          <img src={img2} alt="" />
          <h4>Components</h4>
          <p>
            Build encapsulated <br />
            components that <br />
            manage their state. <br />
          </p>
        </div>

        <div className="item">
          <img src={img3} alt="" />
          <h4>Single-Way</h4>
          <p>
            A set of immutable <br />
            values are passed to <br />
            the component's. <br />
          </p>
        </div>

        <div className="item">
          <img src={img4} alt="" />
          <h4>JSX</h4>
          <p>
            Statically-typed, <br />
            designed to run on <br />
            modern browsers. <br />
          </p>
        </div>
      </section>
    </div>
  );
}
export default App;
