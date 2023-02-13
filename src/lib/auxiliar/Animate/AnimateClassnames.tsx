import { FC, CSSProperties, PropsWithChildren, useRef, ReactNode } from "react";
import useElementOnScreen from "./elementOnScreenHook";

export interface IAnimateClassnames {
    from?: string,
    to?: string,
    rootMargin?: string,
    children?: ReactNode,
    className: string,
}

const AnimateClassnames: FC<IAnimateClassnames> = ({ from = "", to = "", rootMargin = "0px", children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref, rootMargin);
    const defaultStyles: CSSProperties = {
        transition: "600ms ease-in-out",
    };
    return (
        <div
            ref={ref}
            className={`${className} ${onScreen ? to : from}`}
        >
            {children}
        </div>
    );
};

export default AnimateClassnames;