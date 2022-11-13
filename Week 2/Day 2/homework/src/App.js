import "./App.css";

function App() {
  return (
    <nav class="navbar">
      <div class="logo">QTemu</div>
      <ul class="nav-links">
        <div class="menu">
          <li>
            <a href="/">Create Meetup</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
        </div>
      </ul>
      <ul class="nav-links-login">
        <div class="menu-login">
          <li>
            <a href="/">Login</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default App;
