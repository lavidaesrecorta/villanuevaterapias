import { FC, CSSProperties, PropsWithChildren, useRef, ReactNode } from "react";
import useElementOnScreen from "./elementOnScreenHook";

export interface IAnimateClassnames {
    rootMargin?: string,
    className: string,
    children?: ReactNode,
}

const AnimateClassnames: FC<IAnimateClassnames> = ({ rootMargin = "0px", className, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref, rootMargin);
    return (
        <div
            ref={ref}
            className={className}
        >
            {children}
        </div>
    );
};

export default AnimateClassnames;