import Image from "next/image";
import { GradeBadge } from "./GradeBadge";
import { BiPlusCircle } from "react-icons/bi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MdOutlineImage } from "react-icons/md";
import { IoPersonCircleOutline, IoSearchSharp } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { FaRegHeart, FaRegKeyboard } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { GiAlliedStar } from "react-icons/gi";

interface SectionProps {
  icon: React.ElementType;
  title: string;
  grade: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  icon: Icon,
  title,
  grade,
  content,
}) => (
  <div className="bg-white text-white rounded-[10px] overflow-hidden">
    <div className="flex justify-between items-center md:px-[18px] px-4 py-[7px] bg-[#5E656C]">
      <div className="flex items-center 2xl:gap-[19px] xl:gap-[17px] lg:gap-[16px] md:gap-[14px] gap-2">
        <Icon
          size={24}
          className="lg:min-w-[24px] lg:w-[24px] w-[20px] min-w-[20px]"
        />
        <h2 className="font-[400] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]">
          {title}
        </h2>
      </div>
      <GradeBadge grade={grade} />
    </div>
    <div className="md:px-[18px] px-4 py-[14px]">{content}</div>
  </div>
);

export default function ReportPage() {
  const sections = [
    {
      icon: MdOutlineImage,
      title: "Visual Appeal",
      grade: "C",
      content: (
        <ul className="list-disc md:ml-6 ml-5 mb-4 text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          <li>Image quality / relevance</li>
          <li>Use of white space</li>
          <li>Color scheme</li>
          <li>Visual "freshness", modernity</li>
        </ul>
      ),
    },
    {
      icon: IoPersonCircleOutline,
      title: "Usability",
      grade: "A",
      content: (
        <ul className="list-disc md:ml-6 ml-5 mb-4 text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          <li>Ease of navigation</li>
          <li>Mobile responsiveness</li>
          <li>Page load speed</li>
        </ul>
      ),
    },
    {
      icon: LuPencil,
      title: "Content",
      grade: "A",
      content: (
        <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ),
    },
    {
      icon: FaRegHeart,
      title: "Branding",
      grade: "B",
      content: (
        <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ),
    },
    {
      icon: IoMdCheckmark,
      title: "Trustworthy",
      grade: "C",
      content: (
        <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ),
    },
    {
      icon: GiAlliedStar,
      title: "Call to Action",
      grade: "F",
      content: (
        <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit ea
          assumenda eos laudantium qui officia necessitatibus quibusdam, aliquam
          magni et animi at placeat atque dolore optio asperiores, molestiae
          nihil?
        </p>
      ),
    },
    {
      icon: FaRegKeyboard,
      title: "Functionality",
      grade: "F",
      content: (
        <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          exercitationem assumenda, dolore amet illum quam nam eius quia
          nesciunt, corporis iste iusto cumque animi fuga eveniet sequi
          consequatur incidunt odit!
        </p>
      ),
    },
    {
      icon: IoSearchSharp,
      title: "SEO",
      grade: "C-",
      content: (
        <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde
          maiores ducimus adipisci, aspernatur impedit assumenda numquam veniam.
          Ad eaque recusandae doloremque harum vitae id? Consequatur magni quas
          mollitia ut!
        </p>
      ),
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#252A2E] text-white relative">
      <Header />

      <main className="px-4 lg:px-[24px] 3xl:py-[47px] py-[23px] w-full relative z-[0]">
        <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto">
          {/* Header Card */}
          <div className="bg-white text-[#252A2E] rounded-[20px] xl:px-[48px] lg:px-[42px] md:px-[30px] sm:px-[20px] px-4 xl:py-[42px] lg:py-[38px] md:py-[30px] py-[20px] xl:mb-[62px] lg:mb-[50px] md:mb-[40px] mb-[30px] flex justify-between items-center gap-2 md:flex-nowrap flex-wrap">
            <div>
              <h1 className="2xl:text-[56px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[20px] text-[18px] font-bold">
                Your Custom Report
              </h1>
              <p className="font-[300] 2xl:text-[35px] xl:text-[28px] lg:text-[20px] md:text-[18px] text-base md:mt-1">
                www.yourwebsite.com
              </p>
            </div>
            <div className="flex items-center md:gap-2 gap-[6px]">
              <Image
                src="/assets/box.svg"
                alt="box"
                width={52.05}
                height={59.8}
                className="2xl:w-[52.05px] lg:w-[40px] md:w-[30px] w-[24px] 2xl:h-[59.8px] lg:h-[40px] md:h-[30px] h-[24px]"
              />
              <span className="font-[600] 2xl:text-[42px] xl:text-[40px] lg:text-[30px] md:text-[20px] text-base">
                Polygonal Research, LLC
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[300px,1fr] lg:gap-8 gap-[100px]">
            {/* Left Sidebar */}
            <div>
              <div className="relative">
                <div className="rounded-[10px] overflow-hidden">
                  <Image
                    src="/assets/laptop.png"
                    alt="Website Screenshot"
                    width={545}
                    height={337}
                    className="w-full rounded-[10px] overflow-hidden"
                  />
                </div>
                <div className="absolute lg:top-[-2%] top-[2%] lg:right-[3%] right-[7%]">
                  <GradeBadge
                    grade="B-"
                    className="md:w-[70px] sm:w-[55px] w-[48px] md:h-[70px] md:h-[55px] sm:h-[55px] h-[48px] sm:border-[4.5px] border-[4px] 2xl:text-[30px] xl:text-[30px] lg:text-[20px] md:text-[18px] text-[16px]"
                  />
                </div>
              </div>

              <div className="2xl:space-y-[45px] xl:space-y-[40px] lg:space-y-[35px] md:space-y-[25px] space-y-[20px] 2xl:mt-[40px] xl:mt-[35px] lg:mt-[30px] md:mt-[25px] mt-[20px]">
                <h2 className="lg:text-[23px] md:text-[20px] text-[18px] font-bold">
                  Get your full detailed PDF report by email today!
                </h2>
                <button className="w-full bg-cyan text-white 2xl:py-[18px] xl:py-[14px] lg:py-[12px] md:py-[10px] py-[9px] px-6 rounded-[10px] overflow-hidden 2xl:text-[30px] xl:text-[25px] lg:text-[22px] md:text-[20px] text-[18px] font-bold hover:bg-emerald-500 transition-colors">
                  Unlock ($4.99)
                </button>
              </div>

              <div className="relative mx-auto 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[358.4px] 2xl:mt-[70px] xl:mt-[60px] lg:mt-[50px] md:mt-[40px] mt-[30px]">
                {/* First page - back */}
                <div className="absolute right-0 top-8 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[190px] xl:h-[180px] lg:h-[170px] h-auto mt-[20px]">
                  <Image
                    src="/assets/page3.png"
                    alt="Website Review Page 3"
                    width={167}
                    height={216.12}
                    priority
                    className="shadow-lg ms-auto object-contain"
                  />
                </div>

                {/* Second page - middle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[190px] xl:h-[180px] lg:h-[170px] h-auto mt-[20px]">
                  <Image
                    src="/assets/page2.png"
                    alt="Website Review Page 2"
                    width={167}
                    height={216.12}
                    priority
                    className="shadow-lg mx-auto object-contain"
                  />
                </div>

                {/* Third page - front */}
                <div className="relative left-0 3xl:w-[361px] lg:w-[240px] w-[220px] 3xl:h-[190px] xl:h-[180px] lg:h-[170px] h-auto mt-[20px]">
                  <Image
                    src="/assets/page1.png"
                    alt="Website Review Page 1"
                    width={167}
                    height={216.12}
                    priority
                    className="shadow-lg relative left-0 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Summary Section */}
              <div className="bg-white text-white rounded-[10px] overflow-hidden">
                <div className="flex justify-between items-center md:px-[18px] px-4 py-[7px] bg-[#5E656C]">
                  <div className="flex items-center 2xl:gap-[19px] xl:gap-[17px] lg:gap-[16px] md:gap-[14px] gap-2">
                    <span>
                      <BiPlusCircle
                        size={24}
                        className="lg:min-w-[24px] lg:w-[24px] w-[20px] min-w-[20px]"
                      />
                    </span>

                    <h2 className="font-[400] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]">
                      Summary
                    </h2>
                  </div>
                  <GradeBadge grade="B" />
                </div>
                <div className="md:px-[18px] px-4 py-[14px]">
                  <ul className="list-disc md:ml-6 ml-5 mb-4 text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16px] text-[15px]">
                    <li>Our understanding of the goal of the website</li>
                    <li>High level summary of our takeaways</li>
                    <li>Grades for each category</li>
                  </ul>
                  <p className="text-[#252A2E] xl:text-[18px] lg:text-[17px] md:text-[16] text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Visual Appeal Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <Section key={index} {...section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
