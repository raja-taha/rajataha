import profile from "./assets/profile.jpg";
import GitHubCalendar from "react-github-calendar";

function App() {
  return (
    <div className="App">
      <h1>Muhammad Taha</h1>
      <img src={profile} width={300} alt="profile" />
      <ul>
        <li>
          <a href="https://wired-wizards.vercel.app" target="_blank">
            Wired Wizards
          </a>
        </li>
        <li>
          <a href="https://nest-videos.vercel.app" target="_blank">
            Nest Videos
          </a>
        </li>
        <li>
          <a href="https://crypto-warrior.vercel.app" target="_blank">
            Crypto Warrior
          </a>
        </li>
        <li>
          <a href="https://master-cart.vercel.app" target="_blank">
            Master Cart
          </a>
        </li>
      </ul>

      <GitHubCalendar username="raja-taha" />
    </div>
  );
}

export default App;
