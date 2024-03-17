/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNavbar = () => {
    //!!======= SCROLL PASS THE NAVBAR =========!!//
    //!!======= SCROLL PASS THE NAVBAR =========!!//
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollDistance = 250;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= scrollDistance);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //!!======= CLOSE WHEN MOVED TO A NEW PAGE =========!!//
    //!!======= CLOSE WHEN MOVED TO A NEW PAGE =========!!//
    const location = useLocation();

    useEffect(() => {
        setNavClassName("-translate-x-[100%]");
    }, [location]);

    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    //!!======= OPEN AND CLOSE NAVBAR =========!!//
    const [navClassName, setNavClassName] = useState("-translate-x-[100%]");

    const handleToggleNavOpen = () => {
        if (navClassName === "-translate-x-[100%]") {
            setNavClassName("-translate-x-[0%]");
        } else {
            setNavClassName("-translate-x-[100%]");
        }
    };

    return { navClassName, isScrolled, handleToggleNavOpen };
};
