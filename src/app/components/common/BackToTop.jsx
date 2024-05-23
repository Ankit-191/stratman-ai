"use client"
import { useEffect, useState } from "react";
import { TopArrow } from "./Icons";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show/hide the button based on the scroll position
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;

            // Show the button if the user has scrolled beyond a certain point
            setIsVisible(scrollTop > 300);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to the top of the page when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        // Back to Top button with fixed position at bottom right
        <button
            className={`${isVisible ? "opacity-100" : "opacity-0"
                } fixed bottom-0 m-4 w-10 h-10 flex items-center justify-center right-0 bg-blue-linear-gradient text-white rounded-full transition-all ease-in-out duration-300 z-50 border border-white hover:shadow-[0px_0px_20px_4px] hover:shadow-blue `}
            onClick={scrollToTop}
            aria-label="Back to Top"
        >
            <TopArrow className="h-6 w-6" />
        </button>
    );
};

export default BackToTop;
