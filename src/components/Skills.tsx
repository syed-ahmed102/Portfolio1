import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-white-500 pt-2'>
                As a beginner developer, you are stepping into an exciting world of technology 
                and creativity. Learning to code opens up endless possibilities for building 
                applications, solving real-world problems, and bringing your ideas to life. 
                Starting with the basics of programming languages, you’ll gradually develop 
                problem-solving skills, understand core concepts like variables, loops, and 
                functions, and explore different tools and frameworks. While the learning curve 
                can be steep, each step brings you closer to transforming ideas into tangible 
                projects and becoming part of a dynamic, ever-evolving field.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typerscript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Skills
