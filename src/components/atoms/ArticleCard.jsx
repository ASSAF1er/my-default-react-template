function ArticleCard({ image, title, date, author }) {
  return (
    <div className="flex flex-col gap-3 group w-full h-[600px] p-10 bg-primary hover:bg-vvbluedark border-y first-of-type:border-l-0 border-l border-vbluedark cursor-pointer ">
      <div className="h-[300px] w-full overflow-hidden rounded-2xl ">
        <img
          src={image}
          alt=""
          className="rounded-2xl h-full w-full object-cover group-hover:scale-105 transition duration-500 ease-in-out "
        />
      </div>
      <span className="text-gray-600 font-[300] text-lg first-letter:uppercase   ">
        {date}{" "}
      </span>
      <p className="text-light text-2xl">{title} </p>
      <p className="text-gray-600 font-[300] ">{author} </p>
    </div>
  );
}

export default ArticleCard;
