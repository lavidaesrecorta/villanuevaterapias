import Image from "next/image";
import { ReactNode } from "react";
export interface IVideoBlock {
  videoPath?: string;
  children?: ReactNode;
}
const VideoBlock: React.FC<IVideoBlock> = ({ videoPath = "./media/video/bg.mp4", children }) => {
  return (
    <div className="h-screen sm:h-[90vh] w-full">
      <video
        src={videoPath}
        autoPlay
        loop
        muted
        className=" overflow-hidden object-cover h-full w-full"
      />
      {children}
    </div>
  );
};

export default VideoBlock;