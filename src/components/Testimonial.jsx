import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonials</h2>
      <section>
        <TestimonialCard
          name={"Talha"}
          feedback={"Your Teaching skills are so good."}
        />

        <TestimonialCard
          name={"Saif"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"Umair"}
          feedback={"Amazing seems like you should be the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
