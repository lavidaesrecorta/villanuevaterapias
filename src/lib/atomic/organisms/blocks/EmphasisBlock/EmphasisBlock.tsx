// TODO: Add emphasis object, make it dynamic.
import {
  IBlockStyle,
  IResponsiveSettings,
  ITextStyle,
} from "@lib/types/styling.types";
import Image from "next/image";
import { ReactNode } from "react";

export interface IEmphasisBlock {
  blockTitle: string;
  blockBody: string;
  textStyle?: ITextStyle;
  imageAlignment?: string;
  blockStyle?: IBlockStyle;
  emphasisElement?: ReactNode;
}

const defaultTextTheme: ITextStyle = {
  titlePadding: "p-6",
  bodyPadding: "px-6 pb-4",
  titleAlignment: "text-left",
  bodyAlignment: "lg:text-justify mx-auto",
  titleFontSize: "text-2xl",
  bodyFontSize: "text-3xl",
};

const defaultImageTheme = "text-center";

const defaultBlockTheme: IBlockStyle = {
  colorPalette: {
    backgroundColorClass: "bg-secondary",
    textColorClass: "",
  },
  reverseLayout: {
    mobile: false,
    desktop: false,
  },
};

const EmphasisBlock: React.FC<IEmphasisBlock> = ({
  blockTitle,
  blockBody,
  textStyle = defaultTextTheme,
  imageAlignment = defaultImageTheme,
  blockStyle = defaultBlockTheme,
  emphasisElement,
}) => {
  return (
    <div className={`${blockStyle.colorPalette.backgroundColorClass} ${blockStyle.colorPalette.textColorClass} py-10`}>
      <div className="lg:w-3/5 mx-auto">
        <h1
          className={`${textStyle.titleFontSize} ${textStyle.titleAlignment} ${textStyle.titlePadding}`}
        >
          {blockTitle}
        </h1>
        <p
          className={`${textStyle.bodyFontSize} ${textStyle.bodyAlignment} ${textStyle.bodyPadding}`}
        >
          {blockBody}
        </p>
      </div>
      <div className={`lg:basis-5/12 text-center`}>{emphasisElement}</div>
    </div>
  );
};

export default EmphasisBlock;
