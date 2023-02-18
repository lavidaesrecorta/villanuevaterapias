import { IBlockStyle } from "@/lib/types/styling.types";

export interface IBaseBlock {
  blockTitle: string;
  blockBody: string;
  blockStyle?: IBlockStyle;
}

const BaseBlock: React.FC<IBaseBlock> = ({ blockTitle, blockBody, blockStyle }) => {
  return (
    <div className="bg-primary">
      <h1 className="text-2xl p-2">{blockTitle}</h1>
      <p className="text-justify p-4">
        {blockBody}
      </p>
    </div>
  );
};

export default BaseBlock;
