import Image from "next/image";
export interface IVideoBlock {
  sampleTextProp?: string;
}
const VideoBlock: React.FC<IVideoBlock> = ({ sampleTextProp }) => {
  return (
    <div className="h-screen sm:h-[90vh] w-full">
      <video
        src="./andrea/andrea.mp4"
        autoPlay
        loop
        muted
        className=" overflow-hidden object-cover h-full w-full"
      />
      <div className="absolute top-0 w-full h-full flex-col flex md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6">
        {/* <div>
          <Image
            src="/logo.svg"
            height={100}
            width={300}
            alt=""
            className="inline align-middle"
          />
        </div>
        <div className="bg-secondary w-72 h-1 md:w-1 md:h-48 opacity-25 rounded"></div>
        <div className="bg-primary bg-opacity-60 md:w-96 mx-2 md:mx-0 h-fit text-justify p-4 text-xl">
          En Wondersoil Diatomeas, lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent ligula dolor, eleifend a euismod quis,
          molestie eu justo.
        </div> */}
        <div className={`bg-primary bg-opacity-80 backdrop-blur-sm p-4 rounded-sm max-w-lg`} style={{ animationName: 'slidein', animationDuration: '3s', animationFillMode: 'forwards' }}>
          <h1 className=" lg:text-4xl text-2xl" style={{ animationName: 'opacityIn50', animationDuration: '3s', animationFillMode: 'forwards' }} >Alcanza tu paz interior - Conoce la verdadera sanación</h1>
          <h2 className="text-lg py-2 text-justify" style={{ animationName: 'opacityIn75', animationDuration: '3s', animationFillMode: 'forwards' }}>Descubre el poder de la terapia alternativa - Experimenta una salud óptima, niveles de energía aumentados y equilibrio en tu día a día.</h2>
          <button className="btn btn-secondary btn-block mt-2" onClick={(e) => { window.open("https://wa.me/56964964397") }} style={{ animationName: 'opacityIn75', animationDuration: '3s', animationFillMode: 'forwards' }}>Agenda tu cita ahora!</button>
        </div>
        <div className="lg:w-1/5">

        </div>
      </div>
    </div>
  );
};

export default VideoBlock;


<style>
  @keyframes slidein {

  }
</style>