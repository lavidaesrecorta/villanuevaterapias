import { FC, CSSProperties, PropsWithChildren, useRef, ReactNode } from "react";
import useElementOnScreen from "./elementOnScreenHook";

export interface IAnimateIn {
    from?: CSSProperties,
    to?: CSSProperties,
    rootMargin?: string,
    children?: ReactNode
}

const AnimateIn: FC<IAnimateIn> = ({ from = { opacity: "0" }, to = { opacity: "1" }, rootMargin = "0px", children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref, rootMargin);
    const defaultStyles: CSSProperties = {
        transition: "600ms ease-in-out",
    };
    return (
        <div
            ref={ref}
            style={
                onScreen
                    ? {
                        ...defaultStyles,
                        ...to,
                    }
                    : {
                        ...defaultStyles,
                        ...from,
                    }
            }
        >
            {children}
        </div>
    );
};

export default AnimateIn;