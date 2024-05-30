import Heroic from "@/components/Heroic";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-items-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Heroic />
      </div>
    </main>
  );
}
