import {
  IBlockStyle,
  IImageStyle,
  IResponsiveSettings,
  ITextStyle,
} from "@lib/types/styling.types";
import Image from "next/image";
import { ReactNode } from "react";

export interface IImageTextBlock {
  blockTitle: string;
  blockBody: string;
  textStyle?: ITextStyle;
  imageAlignment?: string;
  imageStyle?: IImageStyle;
  blockStyle?: IBlockStyle;
  additionalElements?: ReactNode;
}

const defaultTextTheme: ITextStyle = {
  titlePadding: "pt-8 px-16 lg:px-20",
  bodyPadding: "px-8 md:px-14 lg:px-16 py-4",
  titleAlignment: "text-left",
  bodyAlignment: "text-justify",
  titleFontSize: "text-2xl",
  bodyFontSize: "text-xl",
};

const defaultImageTheme = "my-4 text-center lg:text-right align-middle";

const defaultImageMask: React.CSSProperties = {
  objectFit: "cover",
};

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

const ImageTextBlock: React.FC<IImageTextBlock> = ({
  blockTitle,
  blockBody,
  textStyle = defaultTextTheme,
  imageAlignment = defaultImageTheme,
  imageStyle = { imageUrl: "/andrea/andreabio2.jpg", imageAlt: "Andrea Villanueva" },
  blockStyle = defaultBlockTheme,
  additionalElements,
}) => {
  if (!!imageStyle.imageMask) {
    defaultImageMask.maskImage = `url(${imageStyle.imageMask})`
    defaultImageMask.maskRepeat = "no-repeat"
    defaultImageMask.maskSize = "100% 100%"
  }
  return (
    <div className={`${blockStyle.colorPalette?.backgroundColorClass ?? 'bg-primary'} ${blockStyle.colorPalette.textColorClass}`}>
      <div
        className={`lg:w-4/5 lg:min-h-[320px] mx-auto pt-8 lg:py-24 flex ${blockStyle.reverseLayout?.mobile ? "flex-col-reverse" : "flex-col"
          } ${blockStyle.reverseLayout?.desktop
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
          }`}
      >
        <div className="lg:flex-1 lg:py-10 lg:px-4">
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
          <div>{additionalElements}</div>
        </div>
        <div
          className={`lg:basis-5/12 min-h-[12rem] inline-flex content-center justify-end`}
        >
          <div className="block relative mx-4" style={
            { width: "512px", height: "512px" }
          }>
            <Image
              alt={imageStyle.imageAlt}
              src={imageStyle.imageUrl}
              fill
              style={defaultImageMask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextBlock;
