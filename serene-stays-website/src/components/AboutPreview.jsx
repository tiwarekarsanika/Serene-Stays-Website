import React from "react";
import img2 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0002.webp';

function AboutPreview() {
    return (
        <div>
            <h1 className="text-6xl text-center mt-20 mb-20" sx={{ fontFamily: "var(--font-header" }}>About Us</h1>
            <div className="flex flex-row space-x-10 items-center justify-center ml-20 mr-20">
                <div>
                    <img
                        src={img2}
                        alt="About Us"
                        height="6400"
                        width="6400"
                    />
                </div>
                <div className="flex flex-col space-y-10">
                    <p className="text-left text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus mauris arcu, finibus quis pellentesque sit amet, vestibulum
                        sit amet ante. Praesent eu commodo metus. Integer ac magna vitae odio
                        dignissim facilisis eu nec metus. Pellentesque ultricies ante tristique
                        malesuada congue. Fusce feugiat urna enim, eget hendrerit justo ornare eu.
                        Vestibulum eu dolor ligula. Quisque in aliquam nulla. Praesent urna ligula,
                        pulvinar in eros non, ullamcorper bibendum nulla. Donec ultricies feugiat
                        nibh vel fringilla. Maecenas in ligula tempor, maximus diam eget, eleifend
                        ipsum. Proin porta elit elit, nec venenatis quam venenatis sed. Cras
                        scelerisque enim at orci interdum, id cursus metus.
                    </p>
                    <button class="bg-transparent text-[var(--color--secondary)] font-[var(--font-navigation)] border-[1px] border-[var(--color--secondary)] rounded-xl py-2 cursor-pointer">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutPreview;