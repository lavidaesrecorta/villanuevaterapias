import Image from "next/image";
export interface IAtIconButton {
  iconSrc: string;
  iconTitle?: string;
  link?: string;
}

const AtIconButton: React.FC<IAtIconButton> = (props) => {
  return (
    <button className="hover:scale-110 transition-all text-center mx-6 my-6" onClick={(e) => { props.link ? window.open(props.link) : null }}>
      <Image
        src={props.iconSrc}
        height={48}
        width={48}
        alt=""
        className="inline-block"
      />
      <h1>{props.iconTitle}</h1>
    </button>
  );
};

export default AtIconButton;