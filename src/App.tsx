import styles from "./App.module.css";
import FeedBackForm from "./components/FeedBackForm/FeedBackForm";

function App() {
  return (
    <main>
      <header>
        <h1 className={styles.headerTitle}>HDRUK Feedback</h1>
        <p className={styles.headerSubTitle}>
          Junior Frontend Developer Task 1
        </p>
      </header>
      <section>
        <h2 className={styles.sectionTitle}>Feedback Form</h2>
        <FeedBackForm />
      </section>
    </main>
  );
}

export default App;
