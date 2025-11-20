import React from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";
import { activeStudents, alumniStudents } from "./data/students";

function calculateMostCommonSkill(allStudents) {
  const freq = {};
  allStudents.forEach((s) =>
    s.skills.forEach((skill) => {
      const normalized = skill.trim();
      freq[normalized] = (freq[normalized] || 0) + 1;
    })
  );
  const entries = Object.entries(freq);
  if (entries.length === 0) return "N/A";
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

export default function App() {
  const allStudents = [...activeStudents, ...alumniStudents];
  const mostCommonSkill = calculateMostCommonSkill(allStudents);

  return (
    <div className="app">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <main className="container">
        <section className="group">
          <h2 className="group-title">Active Students</h2>
          <div className="grid">
            {activeStudents.map((s) => (
              <StudentCard key={s.id} {...s} />
            ))}
          </div>
        </section>

        <section className="group">
          <h2 className="group-title">Alumni</h2>
          <div className="grid">
            {alumniStudents.map((s) => (
              <StudentCard key={s.id} {...s} />
            ))}
          </div>
        </section>

        <section className="stats">
          <h2>Directory Statistics</h2>
          <p>Total students: <strong>{allStudents.length}</strong></p>
          <p>Active: <strong>{activeStudents.length}</strong> &nbsp;|&nbsp; Alumni: <strong>{alumniStudents.length}</strong></p>
          <p>Most common skill: <strong>{mostCommonSkill}</strong></p>
        </section>
      </main>

      <footer className="footer">
        <div>Full Stack Development — My Institution</div>
        <div>Contact: studentportal@gmail.com</div>
        <div>© {new Date().getFullYear()} Student Portal</div>
      </footer>
    </div>
  );
}
