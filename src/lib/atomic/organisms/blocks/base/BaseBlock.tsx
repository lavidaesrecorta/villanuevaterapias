export interface IBaseBlock {
  sampleTextProp: string;
}

const BaseBlock: React.FC<IBaseBlock> = ({ sampleTextProp }) => {
  return (
    <div className="bg-red-800">
      <h1 className="text-2xl p-2">El pepe.</h1>
      <p className="text-justify p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula
        dolor, eleifend a euismod quis, molestie eu justo. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Integer placerat molestie augue, ac convallis sapien dignissim id.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed quis finibus eros. Duis pharetra ipsum
        pretium tempor suscipit.
      </p>
      {/* insert grid of clients or img */}
    </div>
  );
};

export default BaseBlock;
