import { Component } from "solid-js"

export const Intro: Component = () => {
    return (
            <section id="into" class="w-[48rem] mt-20">
                <h1 class="text-xl fira font-blue font-medium">Hey there, I am</h1>
                <h2 class="text-7xl font-bold font-black-grey mt-2">Philip Hutchinson</h2>
                <p class="text-5xl font-medium mt-2 font-black-grey">A <span class="fira font-blue font-bold">fullstack</span> developer.</p>
                <p class="pl-8 max-w-2xl mt-4 text-line-side relative">
                    I'm a fullstack developer based in Manchester, UK.
                    With a strong passion for software engineering, I thrive on creating accessible, interactive, and well-designed products.
                    <br />
                    <br />
                    I continuously seek opportunities to broaden my skill set and stay at the forefront of emerging technologies.
                    Let's collaborate and create something remarkable together.
                </p>
                <a href="#skills">
                    <button class="fira relative hover-undo-underline w-fit cursor-pointer mt-4">View my skills</button>
                </a>
                {/*
                        <div class="mt-2 relative h-[42rem]">




                    <div class="relative" id="rust-container">
                        <img 
                            id="rust-example"
                            src="home/rust-example.png" 
                            class="absolute top-16 h-[32rem] w-[36rem] shadow-one" 
                            alt="Rust bevy example"
                        />
                        <div 
                            id="__overlay" 
                            class="absolute top-16 h-[32rem] w-[36rem] opacity-50 
                            bg-[var(--colour3)] hover:opacity-0 transition-opacity duration-150" 
                        />
                    </div>
                    <div class="relative">
                        <img 
                            src="home/go-example.png" 
                            class="absolute top-28 left-20 h-[32rem] w-[36rem] shadow-one" 
                            alt="Go middleware example"
                        />
                        <div 
                            id="__overlay" 
                            class="absolute top-28  left-20 h-[32rem] w-[36rem] 
                            opacity-50 bg-[var(--colour3)] hover:opacity-0 transition-opacity duration-150" 
                        />
                    </div>
                </div>
                */   }
            </section>
    )
}
