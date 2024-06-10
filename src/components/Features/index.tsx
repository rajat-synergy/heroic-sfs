import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";


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
    <section className="services theme-bg-primary ">
      <div className="container">
        <div className="services-banner">
          <div className=" services-head">
            <div className="services-info">
              <h2>Innovative Services For Your Unique Needs</h2>
              <p>Lorem ipsum is placeholder text
                commonly used in the graphic print.</p>
            </div>
          </div>
          <div className=" services-box">
            <div className="services-top-banner">
              <div className="services-box-right">
                <div className="card-box theme-border-bg theme-space  theme-gradient-gtb">
                  <h4 className="mb-2">Staffing Solutions</h4>
                  <p className="pera-small">Highlight your meticulous recruitment process and commitment to finding the best
                    talent. Showcase success stories of placements in leading companies.</p>
                  <div className="services-link">
                    <a href="#" className="theme-text-primary">Read More...</a>
                    <a href="#" className="theme-btn-secondary">Talk to an expert
                      <Image src="/images/right-arrow.svg" alt="" width={12} height={12} className="ms-2" /></a>
                  </div>
                </div>
                <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                  <h4 className="">Staffing Solutions</h4>
                  <p className="pera-small">Highlight your meticulous recruitment process
                    and commitment to finding the best talent.
                    Showcase success stories of placements in
                    leading companies.</p>
                  <div className="services-link">
                    <a href="#" className="theme-text-primary">Read More...</a>
                    <a href="#" className="theme-btn-secondary">Talk to an expert 
                      <Image src="/images/right-arrow.svg" alt="" width={12} height={12}/></a>
                  </div>
                </div>
              </div>
              <div className="services-box-right last-services">
                <div className="card-box theme-border-bg theme-space  theme-gradient-gtb">
                  <h4 className="">Staffing Solutions</h4>
                  <p className="pera-small">Highlight your meticulous recruitment process
                    and commitment to finding the best talent.
                    Showcase success stories of placements in
                    leading companies.</p>
                  <div className="services-link">
                    <a href="#" className="theme-text-primary">Read More...</a>
                    <a href="#" className="theme-btn-secondary">Talk to an expert <Image src="/images/right-arrow.svg"
                      alt="" width={12} height={12}/></a>
                  </div>
                </div>
                <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                  <h4 className="">Staffing Solutions</h4>
                  <p className="pera-small">Highlight your meticulous recruitment process
                    and commitment to finding the best talent.
                    Showcase success stories of placements in
                    leading companies.</p>
                  <div className="services-link">
                    <a href="#" className="theme-text-primary">Read More...</a>
                    <a href="#" className="theme-btn-secondary">Talk to an expert <Image src="/images/right-arrow.svg"
                      alt="" width={12} height={12}/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
