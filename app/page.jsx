import Image from "next/image";
import { knewave } from "./layout";
import Link from "next/link";
import { tips } from "./components/TipsItems";


const TipItem = ({ text, imageSrc, colorClass, index }) => (
  <Link
      href={`details/${index}`}
      className={`item  h-32 relative flex rounded-xl justify-center ${colorClass} items-center  ${
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
    <main className="min-h-screen home_bg">
      <h1 className={knewave.className + "  text-4xl text-center my-5"}>
        Sepuluh Pedoman <br /> Gizi Seimbang
      </h1>
      <div className="list_container text-white w-full flex flex-wrap justify-center gap-10 items-center p-5 py-10">
        {tips.map((tip, index) => (
          <TipItem key={tip.text} {...tip} index={index} />
        ))}
      </div>
    </main>
  );
}
