import "./App.css";
import Panel from "/src/Panel";
import iconStar from "../public/assets/images/icon-star.svg";

function App() {
  return (
    <main className="faq-according-main">
      <header className="faq-heading">
        <img src={iconStar} alt="star-icon" className="star-icon" />
        <h1>FAQs</h1>
      </header>
      <Panel
        id={1}
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable 
        for all levels and ideal for portfolio building."
      />
      <Panel
        id={2}
        question="Is Frontend Mentor free?"
        answer="Yes,Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
      />
      <Panel
        id={3}
        question="Can I use Frontend Mentor projects in my portfolio?"
        answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
      />

      <Panel
        id={4}
        question="How can I get help if I'm stuck on a challenge?"
        answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
      />
    </main>
  );
}

export default App;
