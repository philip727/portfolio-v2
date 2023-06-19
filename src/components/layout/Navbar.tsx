import { Component } from "solid-js"

export const Navbar: Component = () => {
    return (
        <nav class="absolute top-0 left-0 w-screen bg-[var(--colour2)] h-16 flex flex-row items-center justify-center">
            <div class="w-1/2 h-full">

            </div>
            <div class="w-1/2 h-full flex flex-row justify-end pr-8 items-center gap-8">
                <p class="text-[var(--colour1)] text-md">
                    <span class="text-[var(--colour3)] font-bold fira mr-1">0.</span>
                    intro 
                </p>
                <p class="text-[var(--colour1)] text-md">
                    <span class="text-[var(--colour3)] font-bold fira mr-1">1.</span>
                    skills 
                </p>
                <p class="text-[var(--colour1)] text-md">
                    <span class="text-[var(--colour3)] font-bold fira mr-1">2.</span>
                    projects 
                </p>
                <p class="text-[var(--colour1)] text-md">
                    <span class="text-[var(--colour3)] font-bold fira mr-1">3.</span>
                    contact 
                </p>
            </div>
        </nav>
    )
}
