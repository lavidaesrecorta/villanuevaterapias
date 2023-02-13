export interface ITextStyle {
  titlePadding: string;
  bodyPadding: string;
  titleAlignment: string;
  bodyAlignment: string;
  titleFontSize: string;
  bodyFontSize: string;
}

export interface IResponsiveSettings {
  mobile: boolean;
  desktop: boolean;
}

export interface IBlockStyle {
  colorPalette: {
    backgroundColorClass: string;
    textColorClass?: string;
  };
  reverseLayout?: IResponsiveSettings;
}

export interface IImageStyle {
  imageUrl: string;
  imageAlt: string;
  imageMask?: string;
}
