import React from "react";

function Whatsnew() {
    return (
        <section className="bg-[#f5f5f7] text-black py-12">
            <div className="flex justify-center text-center">
                <div>
                    <img
                        className="w-32 mx-auto mb-6"
                        src="https://developer.apple.com/assets/elements/icons/sdk-18/sdk-18-128x128_2x.png"
                        alt="SDK Icon"
                    />
                    <h2 className="text-4xl font-bold mb-4">
                        What's new for Apple developers
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Discover even more new and updated technologies across Apple
                        platforms, so <br /> you can create your best apps yet.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Whatsnew;
