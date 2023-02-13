import ImageTextBlock from "@lib/atomic/organisms/blocks/ImageTextBlock/ImageTextBlock";
import EmphasisBlock from "@lib/atomic/organisms/blocks/EmphasisBlock/EmphasisBlock";
import VideoBlock from "@lib/atomic/organisms/blocks/VideoBlock/VideoBlock";
import Navbar from "@lib/atomic/organisms/navbar/Navbar";
import Footer from "@lib/atomic/organisms/footer/Footer";
import FeaturesDisplay from "@lib/atomic/molecules/FeaturesDisplay/base/FeaturesDisplay";
import CallToAction from "@lib/atomic/molecules/CallToAction/CallToAction";
import { IBlockStyle, IImageStyle } from "@lib/types/styling.types";

import { mockFeaturesDisplayProps } from "@lib/atomic/molecules/FeaturesDisplay/base/FeauresDisplay.mocks";
import AnimateIn from "@lib/auxiliar/Animate/AnimateIn";

export interface IWelcome {
  sampleTextProp?: string;
}

const primaryBackgroud: IBlockStyle = {
  colorPalette: {
    backgroundColorClass: "bg-primary"
  }
}

const tertiaryBackgroud: IBlockStyle = {
  colorPalette: {
    backgroundColorClass: "bg-purple-100",
    textColorClass: "text-gray-600",
  }
}

const neutralBackgroud: IBlockStyle = {
  colorPalette: {
    backgroundColorClass: "bg-rose-50",
    textColorClass: "text-gray-600"
  }
}

const bioImage: IImageStyle = { imageUrl: "/andrea/andreabio.png", imageAlt: "Andrea Villanueva" }


const Welcome: React.FC<IWelcome> = ({ sampleTextProp }) => {
  return (
    <div>
      <Navbar />
      <VideoBlock />
      <ImageTextBlock
        blockTitle="¡Hola! Soy Andrea"
        blockBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula dolor, eleifend a euismod quis, molestie eu justo."
        blockStyle={neutralBackgroud}
        imageStyle={bioImage}
      />
      <EmphasisBlock
        blockTitle="Terapias Disponibles"
        blockBody="Mis terapias están diseñadas para traer harmonía a su bienestar físico, emocional y espiritual. Ayudan a sanar el cuerpo y la mente para ayudarle a encontrar la paz y el balance en su vida."
        blockStyle={tertiaryBackgroud}
        emphasisElement={
          <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }} >
            <FeaturesDisplay {...mockFeaturesDisplayProps.cards} />
          </AnimateIn>
        }
      />
      <EmphasisBlock
        blockTitle="Mis redes sociales"
        blockBody="¡Visita mis redes sociales!"
        emphasisElement={
          <AnimateIn >
            <CallToAction sampleTextProp={""} />
          </AnimateIn>}
        blockStyle={primaryBackgroud}
      />
      <Footer />
    </div>
  );
};

export default Welcome;
