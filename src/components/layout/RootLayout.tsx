import { Component } from "solid-js"
import { Outlet } from "@solidjs/router";
import { Navbar } from "./Navbar";

export const RootLayout: Component = () => {
    return (
        <article>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </article>
    )
}
