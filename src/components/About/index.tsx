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
        <section className="bg-black themeColor py-28">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
                    <div className="mb-8 space-y-4">
                        <p className="text-lg">
                            <b>Mission Statement:</b> Emphasize your commitment to excellence and leadership.
                        </p>
                        <p className="text-lg">
                            <b>Company Values:</b> Highlight values such as commitment, clarity, consistency, and leadership.
                        </p>
                        <p className="text-lg">
                            <b>Team:</b> Introduce key team members, emphasizing their expertise and leadership qualities.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Team.map((member) => (
                            <div key={member.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={500}
                                    height={300}
                                    className="w-full"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2 themeColor">{member.name}</h3>
                                    <p className="text-gray-300 text-sm">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;
