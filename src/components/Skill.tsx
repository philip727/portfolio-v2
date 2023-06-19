import { Component } from "solid-js"

type Props = {
    src?: string,
    name?: string,
}

export const Skill: Component<Props> = (props) => {
    return (
        <div class="w-64 h-24 bg-[var(--colour4)] shadow-two flex flex-row items-center justify-start rounded-sm">
            <div class="w-1/3 h-full flex items-center justify-center pl-2">
                <img src={props.src} class="w-20 h-20" />
            </div>
            <div class="w-2/3 h-full flex items-center justify-center">
                <p class="w-full text-center font-black-grey text-2xl font-light tracking-wider">{props.name}</p>
            </div>
        </div>
    )
}
