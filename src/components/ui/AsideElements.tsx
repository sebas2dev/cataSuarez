import Image from "next/image";

type CardItemProps = {
  title: string;
  imageUrl: string;
};
export default function AsideElements({ title, imageUrl }: CardItemProps) {
  return (
    <div className=" flex  items-center gap-4 my-4">
      <div className="relative w-[50px] h-[50px]  rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover absolute center "
        />
      </div>
      <h6 className="w-3/5 uppercase font-bold"> {title}</h6>
    </div>
  );
}
