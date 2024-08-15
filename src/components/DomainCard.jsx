import { JusticeScale01Icon } from "hugeicons-react";

function DomainCard({ name, icon, title, description }) {
  return (
    <div className="group flex flex-col justify-between rounded-3xl bg-vvbluedark domain-card cubicTrans px-7 py-5 h-[300px] w-[290px]  hover:shadow-xl ">
      {icon}

      <div>
        <p className="text-3xl mb-3 group-hover:text-gold">{name}</p>
        <p className="text-lg mb-3">{title}</p>
        <p className="text-md font-[200] line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

export default DomainCard;
