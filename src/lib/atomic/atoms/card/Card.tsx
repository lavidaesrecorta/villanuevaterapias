import Image from "next/image";
export interface IAtCard {
  title: string;
  body?: string;
}

const AtCard: React.FC<IAtCard> = ({ title, body }) => {
  return (
    <div>
      <div className="card card-compact w-60 bg-rose-50 shadow-xl hover:scale-105 transition-all">
        <figure className="h-48">
          <Image src="/andrea/480x640.png" width={480} height={640} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default AtCard;
