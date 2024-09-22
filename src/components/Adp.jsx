import React from "react";

function Adp() {
    return (
        <section className="bg-gradient-to-br from-[#bf46a5] to-[#341d8c] py-16 text-white">
            <div className="flex justify-center">
                <div className="text-center">
                    <img
                        width={144}
                        className="mx-auto mb-6 invert"
                        src="https://developer.apple.com/assets/elements/icons/symbols/person-3.svg"
                        alt="People Icon"
                    />
                    <h2 className="text-4xl font-bold mb-4">Apple Developer Program</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Join the Apple Developer Program to reach customers around the world
                        on the App Store for iPhone, iPad, Mac, Apple Watch, Apple TV, and
                        Apple Vision Pro. You'll also get access to beta software, advanced
                        app capabilities, extensive beta testing tools, and app analytics.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Adp;
