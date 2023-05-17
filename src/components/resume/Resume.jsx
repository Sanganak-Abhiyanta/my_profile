import React from 'react'
import "./resume.css"
import Data from "./Data"
export default function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Experience</h2>

      <div className="resume_container grid">
        <div className="timeline grid"></div>
      </div>
    </section>
  )
}
