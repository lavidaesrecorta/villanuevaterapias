import {
  IBlockStyle,
  IImageStyle,
  IResponsiveSettings,
  ITextStyle,
} from "@lib/types/styling.types";
import Image from "next/image";
import { ReactNode } from "react";

export interface IStepsBlock {
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

const StepsBlock: React.FC<IStepsBlock> = ({
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
      <div className="text-center text-4xl"><h1>¿Cómo funciona?</h1></div>
      <div
        className={`lg:w-4/5 mx-auto pt-8 lg:py-24  flex ${blockStyle.reverseLayout?.mobile ? "flex-col-reverse" : "flex-col"
          } ${blockStyle.reverseLayout?.desktop
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
          }
          justify-center content-center gap-8`}
      >
        <div className="block">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Elige tu objetivo</li>
            <li className="step step-primary">Busca la estrategia más conveniente para tí</li>
            <li className="step step-primary">Elige el método de pago</li>
            <li className="step step-primary" data-content="✓">Recibe notificaciones sobre el progreso de tu boost</li>
          </ul>
        </div>
        <div className="block">
          <div className="py-8 px-4">
            <h1 className=" text-2xl">Más fácil imposible!</h1>
            <h2>En tan solo unos pasos podrás disfrutar de una liga superior.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsBlock;
