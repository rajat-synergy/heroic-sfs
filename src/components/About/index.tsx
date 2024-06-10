import Image from "next/image";

export const Team = [
    {
        name: 'Jane Doe',
        title: 'CEO',
        image: '/images/team/faviconuser.png',
    },
    {
        name: 'John Smith',
        title: 'CTO',
        image: '/images/team/faviconuser.png',
    },
    {
        name: 'Emily Jones',
        title: 'CMO',
        image: '/images/team/faviconuser.png',
    },
    {
        name: 'Jane Doe',
        title: 'CEO',
        image: '/images/team/faviconuser.png',
    },
    {
        name: 'John Smith',
        title: 'CTO',
        image: '/images/team/faviconuser.png',
    },
    {
        name: 'Emily Jones',
        title: 'CMO',
        image: '/images/team/faviconuser.png',
    },
];

const About = () => {
    return (
        <section className="about-aection theme-bg-secondary ">
            <div className="container">
                <div className="about-banner align-items-center">
                    <div className="about-head align-middle">
                        <h2>About Our Company</h2>
                        <p>Mission Statement: Emphasize your commitment to
                            excellence and leadership.</p>
                        <p>Company Values: Highlight values such as
                            commitment, clarity, consistency, and leadership.</p>
                        <p>Team: Introduce key team members, emphasizing
                            their expertise and leadership qualities.</p>
                    </div>
                    <div className="about-img">
                        <Image
                            src="/images/ourcompany.png"
                            alt="logo"
                            width={501}
                            height={545}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
