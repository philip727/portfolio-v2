import { Component, For } from "solid-js"
import './Home.css'
import { Intro } from "./__home/Intro"
import { Skill } from "../components/Skill"
import { skills } from "../store"

export const Home: Component = () => {
    return (
        <article class="flex flex-col w-full mt-20 items-center justify-start">
            <Intro />
            <section id="skills" class="w-screen bg-[var(--colour2)]">
                <h2 class="text-7xl font-bold font-whiteish mt-4 w-full text-center">My skills</h2>
                <div class="skills-grid w-full px-16 mt-8">
                    <For each={skills}>{(skill) => (
                        <Skill src={skill.src} name={skill.name} />
                    )}
                    </For>
                </div>
                <div class="flex flex-row gap-20 w-full justify-center">
                    <div class="mt-16">
                        <h1 class="mt-4 font-whiteish font-bold text-4xl">
                            Programming Languages
                        </h1>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Proficient in developing efficient and concurrent applications and following the functional programming paradigm using Go.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Experienced in writing memory safe and high-performance applications using Rust and using imperative programming rules.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Skilled in building robust and scalable web applications using TypeScript and JavaScript.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Confident with Object Orientated Programming using C#.
                        </p>
                    </div>
                    <div class="mt-16">
                        <h1 class="mt-4 font-whiteish font-bold text-4xl">
                            Tools
                        </h1>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Experienced in designing and optimizing database schemas, writing complex queries and managing MySQL databases.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Proficient in building interactive and responsive user interfaces and building scalable and maintainable web applications using React and Solid.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Skilled in client sided state managment with Redux, enabling efficient data flow in web apps.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Experienced in developing cross-platform desktop applications using Tauri, making use of Web UI Frameworks like 
                            Solid and React to develop the front end and also making use of Rust to securely interact with the backend from the client.
                        </p>
                        <p class="pl-8 max-w-2xl mt-2 text-line-side relative font-whiteish">
                            Experienced in using CSS frameworks like Tailwind CSS to create modern and visually appealing designs with speed and productivity in mind.
                        </p>
                    </div>
                    <div class="mt-16">
                        <h1 class="mt-4 font-whiteish font-bold text-4xl">
                            Server-Side & Deployment
                        </h1>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Experienced in building high-performance and lightweight web applications using GoFiber and NodeJS.
                        </p>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Skilled in using ORMs to interact with databases to handle data modeling, validation and strict type checking from using Sequelize and GORM.
                        </p>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Knowledgeable in configuring and managing Nginx web servers.
                        </p>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Experienced in version control with Git, enabling efficient collaboration and code management.
                        </p>
                        <p class="pl-8 max-w-2xl mt-4 text-line-side relative font-whiteish">
                            Experienced in using various AWS services such as EC2, S3, RDS, Cloudfront and Route 53 for deploying scalable and robust web applications 
                            in a cloud environment, configuring networking and ensuring security best practices.
                        </p>
                    </div>
                </div>
            </section>
        </article>
    )
}
