import { Quote } from "lucide-react";
import Image from "next/image";

export default function StoriesCard({
  text,
  image,
  name,
  job,
}: {
  text: string;
  image: string;
  name: string;
  job: string;
  small?: boolean;
}) {
  return (
    <div className="flex flex-col justify-between gap-7 flex-1 bg-white !h-full p-7 rounded-[10px] shadow-lg">
      <div className="flex flex-col gap-5">
        <Quote className="stroke-black stroke-2 size-8" stroke="fill" />
        <p className="text-azany_secondary text-[20px] leading-6 font-medium">
          {text}
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image
          src={image}
          alt="user"
          className="w-[40px] h-[40px] rounded-full"
          width={40}
          height={40}
        />
        <div>
          <p className="text-xs font-semibold">{name}</p>
          <p className="text-dark_primary text-[10px]">{job}</p>
        </div>
      </div>
    </div>
  );
}
