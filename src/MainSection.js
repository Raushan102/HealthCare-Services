import React from 'react'
import img1 from "./assets/cardio surgeon is holding stethoscope.png";
function MainSection() {
  return (
   <section className="welcome-section">
  <div className="content">
    <h1>Welcome to Healthcare Services Manager</h1>
    <h3>Your Health, Our Priority</h3>
    <p>
      We are committed to providing top-quality healthcare services with a seamless experience.
      Manage appointments, access a variety of healthcare services, and stay on top of your health—all in one place.
    </p>
  </div>
  <div className="image-container">
       <img src={img1} alt="img 1" className="doctor-img" />
  </div>
</section>
  )
}

export default MainSection