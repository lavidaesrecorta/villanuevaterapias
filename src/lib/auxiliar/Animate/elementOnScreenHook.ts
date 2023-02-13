import { useState, useEffect, RefObject } from "react";

const useElementOnScreen = (
    ref: RefObject<Element>,
    rootMargin = "0px",
) => {
    const [isInterSecting, setIsIntersecting] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { setIsIntersecting(entry.isIntersecting) }, { rootMargin });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);
    return isInterSecting
}

export default useElementOnScreen