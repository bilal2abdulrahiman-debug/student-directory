import React from "react";
import "./StudentCard.css";

export default function StudentCard({ id, name, rollNumber, course, email, skills = [], isActive }) {
  return (
    <article className="student-card">
      <div className="card-top">
        <h3 className="student-name">{name}</h3>
        <span className={`status ${isActive ? "active" : "inactive"}`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="card-body">
        <p><strong>Roll:</strong> {rollNumber}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>

        <div className="skills">
          {skills.map((skill, i) => (
            <span className="skill" key={`${id}-skill-${i}`}>{skill}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
