import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
    <section class="service-section ">
    <div class="container  text-center common-title fw-bold">
      <h2 class="common-heading">What we will do for you</h2>
      <h2 class="w-30 mx-auto"></h2>
    </div>
  </section>
  <hr></hr>

  <div class="container mt-5">
    <div class="row g-5">
      <div class="col-12 col-lg-4 col-md-12">
        <div class="text-center card-box rounded-2 p-5 shadow">
          <img src="images/social.jpeg" alt="link" class="img-fluid"></img>
          <h5 class="my-3 fw-normal">Link Building</h5>
          <p class="mb-5">Elevate your productivity with task tracker, the ultimate todo app with real-time notifications. Stay on top of your tasks effortlessly as our app delivers instant reminders, ensuring you never miss a deadline.</p>
          
        </div>
      </div>

      <div class="col-12 col-lg-4 col-md-12">
        <div class="text-center card-box rounded-2 p-5 shadow">
          <img src="images/social2.jpeg" alt="link" class="img-fluid"></img>
          <h5 class="my-3 fw-normal">Social Media</h5>
          <p class="mb-5"> We leverage the power of social media to connect, engage, and empower your brand, helping you reach your audience and build meaningful online relationships.</p>
          
        </div>
      </div>

      <div class="col-12 col-lg-4 col-md-12">
        <div class="text-center card-box rounded-2 p-5 shadow">
          <img src="images/social3.jpeg" alt="link" class="img-fluid"></img>
          <h5 class="my-3 fw-normal">Tailored Solutions</h5>
          <p class="mb-5">Unlock a tailored solution for unparalleled productivity with task tracker. Our app offers personalized task management, coupled with real-time notifications, ensuring a customized experience that aligns perfectly with your workflow.</p>
          
        </div>
      </div>
    </div>
  </div>

            <section class="bg-main bg-color hero-section mt-5">
    <div class="container">
      <div class="row ">
        <div class="col-12 col-md-12 col-lg-6 prod-img">
          <figure>
            <img src="./images/Developers Gif.gif" alt="product image" width="400px" height="400px"></img>
          </figure>
        </div>
        <div class="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-right">
          <h1 class="text-uppercase fw-bolder text-white">Cutting-Edge Technology</h1>
          <p class="mt-5 mb-3 para-width text-light-grey">
           Introducing task tracker, the cutting-edge todo app designed to revolutionize your task management experience. With its advanced notification system, task tracker ensures that you never miss a beat. Imagine a seamless workflow where you are effortlessly reminded of your upcoming tasks in real-time. Whether it's project deadlines, important meetings, or daily to-dos, our app keeps you on track with prompt notifications that help you stay ahead of your schedule.
          </p>
          
        </div>
      </div>
    </div>

  </section>
        </div>
    );
};

export default About;