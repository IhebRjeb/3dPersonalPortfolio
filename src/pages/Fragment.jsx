import React from "react";
import { CTA } from "../components";
import { fragment, fragmentGallery } from "../constants";

const Fragment = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Fragment, A Personal{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Artistic Exploration
        </span>{" "}
        🎨
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Fragment is my personal artistic expression—a space where I explore
          and reflect my emotions through various forms of art without limits
          or rules. It aims to turn emotions into pieces of art and showcase
          hidden talents through artistic collaborations.
        </p>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">Fragment Gallery</h3>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fragmentGallery.map((image) => (
            <div key={image.id} className="gallery-item">
              <img
                src={image.imageUrl}
                alt={image.altText}
                className="w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">Vision</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{fragment.vision}</p>
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">Keywords</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {fragment.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">Theme Fragments</h3>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fragment.theme.fragments.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold">{item.theme}</h4>
              <p className="mt-2">
                Actions: {item.actions.join(", ")}
              </p>
              <p className="mt-2">Story: {item.story}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Fragment;
