import Image from "next/image";
export interface IAtCard {
  title: string;
  body?: string;
  imgUrl?: string;
  positionalClasses?: string;
}

const AtCard: React.FC<IAtCard> = ({ title, body, imgUrl = "/media/img/480x640.png", positionalClasses }) => {
  return (
    <div className={`card card-compact w-60 bg-rose-50 shadow-xl hover:scale-105 transition-all ${positionalClasses}`}>
      <figure className="h-48">
        <div className="relative w-full h-full">
          <Image src={imgUrl} fill alt="Shoes" style={{ objectFit: "cover" }} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-left">{body}</p>
      </div>
    </div>
  );
};

export default AtCard;
