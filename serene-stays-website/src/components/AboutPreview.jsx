import React from "react";
import img2 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0002.webp';

function AboutPreview() {
    return (
        <div>
            <h1 className="text-6xl text-center mt-20 mb-20 font-header">About Us</h1>
            <div className="flex flex-row items-center justify-center ml-20 mr-20 space-x-10">
                <div className="w-1/2 h-full">
                    <img
                        src={img2}
                        alt="About Us"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-between p-4">
                    <p className="text-left text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris
                        arcu, finibus quis pellentesque sit amet, vestibulum sit amet ante.
                        Praesent eu commodo metus. Integer ac magna vitae odio dignissim
                        facilisis eu nec metus. Pellentesque ultricies ante tristique malesuada
                        congue. Fusce feugiat urna enim, eget hendrerit justo ornare eu.
                        Vestibulum eu dolor ligula. Quisque in aliquam nulla. Praesent urna
                        ligula, pulvinar in eros non, ullamcorper bibendum nulla. Donec
                        ultricies feugiat nibh vel fringilla. Maecenas in ligula tempor,
                        maximus diam eget, eleifend ipsum. Proin porta elit elit, nec venenatis
                        quam venenatis sed. Cras scelerisque enim at orci interdum, id cursus
                        metus.
                    </p>
                    <div className="flex justify-end">
                        <button className="bg-transparent text-[var(--color-secondary)] font-navigation border-[1px] text-[var(--color-primary)] font-[var(--font-navigation)] border-[var(--color-primary)] border-secondary rounded-xl px-4 py-2 cursor-pointer">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPreview;


