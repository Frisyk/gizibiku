import Image from "next/image";
import { knewave } from "./layout";
import Link from "next/link";
import { tips } from "./components/TipsItems";


const TipItem = ({ text, imageSrc, colorClass, index }) => (
  <Link
      href={`details/${index}`}
      className={`w-full lg:w-[30%]  h-32 relative flex rounded-xl justify-center ${colorClass} items-center  ${
      index % 2 === 0 ? "flex-row-reverse" : ""
    }`}
  >
    <p className="text-lg p-3 text-wrap overflow-auto">{text}</p>
    <Image
      src={imageSrc}
      alt={text}
      width={200}
      height={200}
      className="object-cover my-[-10px] w-36 h-36 rounded-md"
    />
  </Link>
);


export default function Home() {
  
  return (
    <main className="min-h-screen md:w-4/5 mx-auto py-20">
      <h1 className={knewave.className + "  md:text-6xl text-3xl text-red-800 text-center my-5 md:my-10"}>
        10 Pesan <br /> Gizi Seimbang
      </h1>
      <div className="list_container text-white w-full flex flex-wrap justify-center gap-10 items-center p-5 py-10">
        {tips.map((tip, index) => (
          <TipItem key={tip.text} {...tip} index={index} />
        ))}
      </div>
    </main>
  );
}
