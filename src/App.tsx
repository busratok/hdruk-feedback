import "./App.css";
import FeedBackForm from "./components/FeedBackForm/FeedBackForm";

function App() {
  return (
    <main className="app-container">
      <header>
        <h1>HDRUK Feedback</h1>
        <p>Junior Frontend Developer Task 1</p>
      </header>
      <section>
        <h2>Feedback Form</h2>
        <FeedBackForm />
      </section>
    </main>
  );
}

export default App;
