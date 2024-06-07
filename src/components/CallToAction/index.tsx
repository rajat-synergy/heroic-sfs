import Link from "next/link";
import Image from 'next/image';


const CallToAction = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          Awards & Recognition
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          With 13+ years of rich EXPERIENCE
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/winwin.png"
              alt="Guidewire Award"
              className="w-6/12 mb-4"
              width={300} 
              height={150}
            />
            <p className="text-gray-400">Top Web Development Company</p>
          </div>
          <div className="bg-black rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/winwin.png"
              alt="Guidewire Award"
              className="w-6/12 mb-4"
              width={300} 
              height={150}
            />
            <p className="text-gray-400">Top Software Development Company</p>
          </div>
          <div className="bg-black rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/winwin.png"
              alt="Guidewire Award"
              className="w-6/12 mb-4"
              width={300} 
              height={150}
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
          {/* <div className="bg-black rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/winwin.png"
              alt="Guidewire Award"
              className="w-6/12 mb-4"
              width={300} 
              height={150}
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
          <div className="bg-black rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/winwin.png"
              alt="Guidewire Award"
              className="w-6/12 mb-4"
              width={300} 
              height={150}
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
          <div className="bg-black rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/winwin.png"
              alt="Guidewire Award"
              className="w-6/12 mb-4"
              width={300} 
              height={150}
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
