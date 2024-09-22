import React from "react";

function Plan() {
    return (
        <div className="text-white bg-[rgb(14,14,14)]">
            <div className="w-[980px] mx-auto text-center">
                <div className="p-[1.5em]">
                    <h2 className="text-[40px] font-bold">Introducing Pathways</h2>
                    <p className="text-[19px] mt-[0.4em]">
                        Your first step toward developing for Apple platforms.
                    </p>
                    <img 
                        src="https://developer.apple.com/pathways/images/hero-pathways-large_2x.png" 
                        alt="Hero Pathways" 
                        className="mt-8 w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Plan;
