import { ITextStyle } from "@/lib/types/styling.types";
import AtIconButton from "@atomic/atoms/IconButton/AtIconButton";
import { MouseEventHandler } from "react";
export interface ICallToAction {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonClick: MouseEventHandler;
  textStyle?: ITextStyle;
}


const CallToAction: React.FC<ICallToAction> = ({ title, subtitle, buttonText, buttonClick }) => {
  return (
    <div className="absolute top-0 w-full h-full flex-col flex md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6">
      <div className={`bg-primary bg-opacity-80 backdrop-blur-sm p-4 rounded-sm max-w-lg`} style={{ animationName: 'slidein', animationDuration: '3s', animationFillMode: 'forwards' }}>
        <h1 className=" lg:text-4xl text-2xl" style={{ animationName: 'opacityIn50', animationDuration: '3s', animationFillMode: 'forwards' }} >{title}</h1>
        <h2 className="text-lg py-2 text-justify" style={{ animationName: 'opacityIn75', animationDuration: '3s', animationFillMode: 'forwards' }}>{subtitle}</h2>
        <button className="btn btn-secondary btn-block mt-2" onClick={buttonClick} style={{ animationName: 'opacityIn75', animationDuration: '3s', animationFillMode: 'forwards' }}>{buttonText}</button>
      </div>
      <div className="lg:w-1/5">

      </div>
    </div>
  );
};

export default CallToAction;
