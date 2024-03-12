import { tips } from "@/app/components/TipsItems";
import Image from "next/image";

function Details({ params }) {

  const { imageSrc, text, desc1, desc2, desc3, desc4, desc5, desc6 } = tips[params.id];

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-[90%] mx-auto md:w-[60%] flex flex-col items-center">
        <Image
          src={imageSrc}
          alt={text}
          width={400}
          height={400}
          className="md:w-full"
          objectFit="cover" 
        />
        <h1 className="text-3xl font-bold my-5 text-center">{text}</h1>
        <div className="text-lg mt-3">
          <p>{desc1}</p>
          {desc2 && <p>{desc2}</p>} <br />
          {desc3 && <p>{desc3}</p>} <br />
          {desc4 && <p>{desc4}</p>} <br />
          {desc5 && <p>{desc5}</p>} <br />
          {desc6 && <p>{desc6}</p>} <br />
 
        </div>
      </div>
    </main>
  );
  }

export default Details;