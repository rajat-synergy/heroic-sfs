import Link from "next/link";

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
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <img
              src="/awards-images/appfutura-award.png"
              alt="Appfutura Award"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400">Top Web Development Company</p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <img
              src="/awards-images/guidewire-award.png"
              alt="Guidewire Award"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400">Top Software Development Company</p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <img
              src="/awards-images/golden-trophy.png"
              alt="Golden Trophy"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <img
              src="/awards-images/golden-trophy-2.png"
              alt="Golden Trophy"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <img
              src="/awards-images/golden-trophy-3.png"
              alt="Golden Trophy"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <img
              src="/awards-images/golden-trophy-4.png"
              alt="Golden Trophy"
              className="w-full h-auto mb-4"
            />
            <p className="text-gray-400">Digital Trophy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
