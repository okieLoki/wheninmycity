import React from 'react';

const Navbar = () => {
    const navItems = ["Home", "About", "Events", "Agency", "Latest"];

    return (
        <div
            className="bg-yellow-50 flex items-center justify-between gap-5 p-4 px-60 text-stone-900 text-base font-semibold tracking-tight fixed top-0 left-0 right-0 z-50"
        >
            <div className="flex items-center justify-between gap-10">
                {navItems.slice(0, 3).map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>

            <img
                loading="lazy"
                src="https://media.discordapp.net/attachments/905755072699449355/1172102126613315584/logo.png?ex=655f182b&is=654ca32b&hm=a8d29853b4dd109033bbc88536ec9ca00c1bec77c59faa77d51df6c5bc42a3bf&="
                className="aspect-[6.4] object-contain object-center w-full overflow-hidden max-w-[228px]"
                alt="Image"
            />

            <div className="flex items-center justify-between gap-10">
                {navItems.slice(3).map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <button className="bg-[#fcd858] p-1 rounded-lg">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;
