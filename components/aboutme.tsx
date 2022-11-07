import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11 ">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>About me</strong>
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>
          Sunt commodo elit duis cillum esse. Dolor magna pariatur elit ea ea.
          Ad ullamco nisi id proident occaecat excepteur eiusmod labore. Id
          cillum ullamco et amet cupidatat sint amet. Aliqua proident sunt ad
          veniam excepteur veniam ut fugiat tempor minim. Ullamco nisi proident
          exercitation dolor laborum pariatur aliquip nostrud consectetur
          tempor.
        </h2>
      </div>
    </section>
  );
};

export default AboutMe;
