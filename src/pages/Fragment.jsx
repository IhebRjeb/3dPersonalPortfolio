import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import { CTA } from "../components";
  import { experiences, skills } from "../constants";
  
  import "react-vertical-timeline-component/style.min.css";
  
  const Fragment = () => {
    return (
      <section className='max-container'>
        <h1 className='head-text'>
          Fragment, A Personal {" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Artistic Exploration
          </span>{" "}
          🎨
        </h1>
  
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Fragment is my personal artistic expression—a space where I explore and reflect my emotions through various forms of art without limits or rules. It aims to turn emotions into pieces of art and showcase hidden talents through artistic collaborations.
          </p>
        </div>
  
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>
  
          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <hr className='border-slate-200' />
  
        <CTA />
      </section>
    );
  };
  
  export default Fragment;