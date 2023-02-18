import AtIconButton from "@atomic/atoms/IconButton/AtIconButton";
export interface IMlSocialButtons {
  sampleTextProp: string;
}


const MlSocialButtons: React.FC<IMlSocialButtons> = ({ sampleTextProp }) => {
  return (
    <div className="block my-4 py-8 mx-auto lg:w-96 w-full">
      <button className="btn btn-secondary btn-block btn-lg" onClick={(e) => { window.open("https://wa.me/56964964397") }}>Agenda tu cita ahora!</button>
      <div className="py-8">
        <AtIconButton iconSrc="/andrea/facebook.svg" iconTitle="Facebook" link="https://www.facebook.com/Villanuevaterapias/" />
        <AtIconButton iconSrc="/andrea/instagram.svg" iconTitle="Instagram" link="https://www.instagram.com/villanueva_saludintegral/" />
        <AtIconButton iconSrc="/andrea/whatsapp.svg" iconTitle="Whatsapp" link="https://wa.me/56964964397" />
      </div>
    </div>
  );
};

export default MlSocialButtons;
