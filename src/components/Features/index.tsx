import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

interface Service {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const services: Service[] = [
  {
    title: 'Staffing Solutions',
    description: 'Highlight your meticulous recruitment process and commitment to finding the best talent. Showcase success stories of placements in leading companies.',
    link: '#',
    buttonText: 'Talk to an expert',
  },
  {
    title: 'Digitization Solutions',
    description: 'Showcase how your digitization services help businesses streamline operations and enhance efficiency. Highlight key technologies and methodologies you employ.',
    link: '#',
    buttonText: 'Talk to an expert',
  },
  {
    title: 'Consultancy Services',
    description: 'Emphasize your team\'s expertise and track record in guiding businesses towards digital success. Offer case studies demonstrating tangible results achieved through your consultancy.',
    link: '#',
    buttonText: 'Talk to an expert',
  },
  {
    title: 'Branding Services',
    description: 'Communicate your approach to building strong, consistent brands that resonate with audiences. Showcase before-and-after examples of brand transformations.',
    link: '#',
    buttonText: 'Talk to an expert',
  },
];

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   buttonText: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   title,
//   description,
//   buttonText,
// }) => {
//   return (
//     <div className="p-6 rounded-lg shadow-md bg-gray-800 text-white">
//       <h3 className="text-xl font-bold mb-4">{title}</h3>
//       <p className="text-gray-400 mb-4">{description}</p>
//       <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
//         {buttonText}
//       </button>
//     </div>
//   );
// };


const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-5xl font-bold themeColor mb-6">
              Innovative Services <br /> For Your Unique <br /> Needs
            </h2>
            <p className="text-gray-400 py-5 text-3xl mb-8">
              Lorem ipsum is placeholder text <br /> commonly used in the graphic, print
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg">
                  <h3 className="font-semibold themeColor">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                  <a href={service.link} className="themeColor hover:text-yellow-600 font-semibold py-0 text-sm pe-5">
                    Read More...
                  </a>
                  <button className="text-sm mt-4 bgthemeColor text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-600">
                    {service.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
