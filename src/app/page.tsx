import Image from "next/image";
import teamPicture from "../../public/images/team.webp"

export default function HomePage() {
  return (
    <section className="w-screen min-h-screen bg-[#E84100] max-w-7xl mx-auto">
      <div className="relative">
        <div className="max-h-[450px] overflow-clip z-0">
          <Image className="md:-translate-y-[8rem] w-full" src={teamPicture} alt="Varsity Genie Team" priority={true} />
        </div>
        <div className="absolute top-0 left-0 z-10 max-h-[450px] h-full w-full">
          <div className="flex flex-col justify-center h-full w-full">
            <p className="text-white font-medium px-6 md:px-16">
              At <span className="text-orange-600">VarsityGenie</span> we are all about self-development and community engagement. We aim to empower others for the betterment of our future and future generations. We live by the motto <span className="text-orange-600 underline">Paying it forward.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row auto-rows-max py-4">
        <div className="flex flex-col px-6 md:px-16 gap-2">
          <h1 className="text-center text-3xl font-bold text-[#1E1E1E]">a little <span className="text-white font-semibold underline">about us</span></h1>
          <p className="text-white font-medium text-justify">VarsityGenie is dedicated to empowering individuals by providing them with tailored training in technical skills that resonate with their present and prospective career paths. The vision extends beyond traditional learning environments, encouraging participants to immerse themselves in hands-on projects and take on leadership roles within the community.</p>
        </div>
        <div className="flex flex-col px-6 md:px-16 gap-2">
          <h1 className="text-center text-3xl font-bold text-[#1E1E1E] pt-4">what <span className="text-white font-semibold underline">we offer</span></h1>
          <p className="text-white font-medium text-justify">Think of VarsityGenie is a platform that empowers individuals to plan, develop, and gain experience in technical skills aligned to their current and future job aspirations. </p>
          <p className="text-white font-medium">
            We offer;
          </p>
          <ul className="ms-12">
            <li className="text-white font-medium list-disc">Tailored training in technical skills</li>
            <li className="text-white font-medium list-disc">Immersive hands-on projects</li>
            <li className="text-white font-medium list-disc">Opportunities to take on leadership roles within the community</li>
            <li className="text-white font-medium list-disc">A transformative journey towards professional aspirations</li>
            <li className="text-white font-medium list-disc">Access to a supportive community for career growth</li>
          </ul>
        </div>
        <div className="flex flex-col px-6 md:px-16 gap-2">
          <h1 className="text-center text-3xl font-bold text-[#1E1E1E] pt-4">our <span className="text-white font-semibold underline">vision</span></h1>
          <p className="text-white font-medium text-justify">VarsityGenie is dedicated to empowering individuals by providing them with tailored training in technical skills that resonate with their present and prospective career paths. The vision extends beyond traditional learning environments, encouraging participants to immerse themselves in hands-on projects and take on leadership roles within the community.</p>
        </div>
      </div>
    </section>
  )
}
