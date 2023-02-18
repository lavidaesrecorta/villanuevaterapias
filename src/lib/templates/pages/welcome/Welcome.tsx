import ImageTextBlock from "@lib/atomic/organisms/blocks/ImageTextBlock/ImageTextBlock";
import EmphasisBlock from "@lib/atomic/organisms/blocks/EmphasisBlock/EmphasisBlock";
import VideoBlock from "@lib/atomic/organisms/blocks/VideoBlock/VideoBlock";
import Navbar from "@lib/atomic/organisms/navbar/Navbar";
import Footer from "@lib/atomic/organisms/footer/Footer";
import FeaturesDisplay from "@lib/atomic/molecules/FeaturesDisplay/base/FeaturesDisplay";
import { IBlockStyle, IImageStyle } from "@lib/types/styling.types";
import { mockFeaturesDisplayProps } from "@lib/atomic/molecules/FeaturesDisplay/base/FeauresDisplay.mocks";
import AnimateIn from "@lib/auxiliar/Animate/AnimateIn";
import MlSocialButtons from "@/lib/atomic/molecules/CallToAction/MlSocialButtons/MlSocialButtons";
import CallToAction from "@/lib/atomic/molecules/CallToAction/base/CallToAction";

export interface IWelcome {
  // blocks?: IBlocks //TODO: CREATE BLOCK TYPES
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


const bioText = {
  blockTitle: "¡Hola! Soy Andrea",
  blockBody: "Estoy aquí para ayudarte a lograr tu bienestar a través del poder de las terapias alternativas. Durante los últimos 7 años, he estado guiando a personas como tú para que cambien su perspectiva sobre la vida, lo que les ha permitido sanar a niveles físico, mental y espiritual.",
}

const Welcome: React.FC<IWelcome> = ({ }) => {
  return (
    <div>
      <VideoBlock videoPath="/andrea/andrea.mp4" >
        <CallToAction title="Alcanza tu paz interior - Conoce la verdadera sanación" subtitle="Descubre el poder de la terapia alternativa - Experimenta una salud óptima, niveles de energía aumentados y equilibrio en tu día a día." buttonText="Agenda tu cita ahora!" buttonClick={(e) => { window.open("https://wa.me/56964964397") }} />
      </VideoBlock>
      <ImageTextBlock
        blockTitle={bioText.blockTitle}
        blockBody={bioText.blockBody}
        blockStyle={neutralBackgroud}
        imageStyle={bioImage}
      />
      <EmphasisBlock
        blockTitle="Terapias Disponibles"
        blockBody="Diseñadas para traer armonía a su bienestar físico, emocional y espiritual. Ayudan a sanar el cuerpo y la mente para ayudarle a encontrar la paz y el balance en su vida."
        blockStyle={tertiaryBackgroud}
        emphasisElement={
          <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }} >
            <FeaturesDisplay {...mockFeaturesDisplayProps.cards} />
          </AnimateIn>
        }
      />
      <EmphasisBlock
        blockTitle="Mis redes sociales"
        blockBody="¡Conoce más sobre las terapias alternativas!"
        emphasisElement={
          <AnimateIn >
            <MlSocialButtons sampleTextProp={""} />
          </AnimateIn>}
        blockStyle={primaryBackgroud}
      />
      <Footer />
    </div>
  );
};

export default Welcome;
