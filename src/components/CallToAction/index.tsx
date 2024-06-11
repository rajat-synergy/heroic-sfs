import Link from "next/link";
import Image from 'next/image';


const CallToAction = () => {
  return (
    <section className="award-aection theme-bg-primary">
      <div className="container">
        <div className="award-banner">
          <div className="award-info">
            <h2>Awards & Recognition</h2>
            <p>With 13+ years of rich EXPERIENCE</p>
          </div>
          <div className="award-logo">
            <div className="award-box">
              <div className=" award1 award-banner-logo">
                <div className="">
                  <div className="">
                    <div className="card-box theme-border-bg theme-space theme-gradient-btg content-center">
                      <Image
                        src="/images/win1.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                      <Image
                        src="/images/win5.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" award2 award-banner-logo">
                <div className="">
                  <div className="">
                    <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                      <Image
                        src="/images/win3.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                      <Image
                        src="/images/win4.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" award3 award-banner-logo">
                <div className="">
                  <div className="">
                    <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                      <Image
                        src="/images/win5.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-box theme-border-bg theme-space theme-gradient-btg">
                      <Image
                        src="/images/win6.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default CallToAction;
