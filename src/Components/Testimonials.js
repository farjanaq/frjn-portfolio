import React from "react";

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
          
          </blockquote>
          <a id="testimonial-user" href={testimonials.LinkedIn}>{testimonials.user}</a>
            <p id="testimonial-desc">{testimonials.description}</p>
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
