import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Governor Sindh Hero Section",
        desc: "This image shows a promotional webpage for a tuition-free education program focused on the latest technology, supported by the Governor of Sindh, Kamran Khan Tessori.",
        img: "/gsi.PNG",
        tags: ["React","Node","CSS","Typescript"],
    },
    {
        id: 1,
        title: "Login and Signup Form",
        desc: "This image shows a dark-themed login form with fields for Email and Password. Below the input fields, there is a Forgot Password? link and a bright pink Login button. A message at the bottom offers a Register",
        img: "/project2.PNG",
        tags: ["HTML", "CSS","Javascript" ],
    },
    {
        id: 2,
        title: "Weather App front page",
        desc: " This image shows a weather app interface deployed on a web page. The app features a search bar for entering a city name and displays sections for the current weather and a 5-day forecast",
        img: "/wapp.PNG",
        tags: ["HTML","CSS","Javascript"],
     },
     {
        id: 3,
        title: "Portfolio web",
        desc: "Creating a portfolio using HTML and CSS is a powerful way to showcase your skills, projects in a visually appealing and interactive format. The foundation of a portfolio website is built using HTML, the markup language that structures the content and layout of web pages.",
        img: "/project4.PNG",
        tags: ["HTML","CSS", "Javascript"],
        },
        {
          id: 4,
          title: "Static Interactive Builder",
          desc: "A static Interactive  builder is a powerful tool that allows individuals to create professional-looking resumes without any complex design skills or software. Unlike dynamic resume builders that required.",
          img: "/srb.PNG",
          tags: ["React","Node","CSS","Typescript"],
          }
]


const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading  title='Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
