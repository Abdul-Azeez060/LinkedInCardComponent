import AvatarCircles from "./AvatorCircles";
interface LinkedInCardProps {
  image?: string;
  profileImage?: string;
  collegeImage?: string;
}
export function LinkedInCard({
  image,
  profileImage,
  collegeImage,
}: LinkedInCardProps) {
  return (
    <div className="p-2 bg-[#F4F2EE]">
      <div className=" bg-white mb-2 rounded-sm">
        <div className="w-full">
          <img
            alt="Banner"
            className="rounded-t-sm w-full"
            src={
              "https://media.licdn.com/dms/image/v2/D5616AQFB-ClbOnz8QQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1734755901862?e=1740614400&v=beta&t=o0lLCnyh821aOEMdeHTWwm9O8bDKijYM6nsK8YGimUE"
            }></img>
        </div>

        <div className="relative bottom-11 left-2 size-1/5 js:bottom-16 sm:bottom-20 md:bottom-28 md:left-5 lg:bottom-36 lg:left-9 sxl:bottom-40 s2xl:bottom-44 s2xl:left-10 2xl:left-12">
          <div className="p-1 bg-white w-full h-full rounded-full 2xl:w-fit 2xl:h-fit">
            <img
              alt="profile"
              src={
                profileImage ||
                image ||
                "https://media.licdn.com/dms/image/v2/D5603AQFA6NcP5-3bLw/profile-displayphoto-shrink_400_400/B56ZPKyCSeHoAg-/0/1734273935514?e=1740614400&v=beta&t=hxgEHReIpfLQJzMb2YVdFfAJpSsjc_QRzK9A-NtZlGE"
              }
              className="rounded-full"></img>
          </div>
        </div>
        <div className="-mb-16 md:-mb-28 lg:-mb-32 relative bottom-11 js:bottom-16 sm:bottom-20 md:bottom-28 md:px-4 lg:bottom-36 px-3 lg:px-8  s2xl:bottom-44">
          <div className="flex justify-between">
            <div className="flex flex-col w-[75%] pr-2 ">
              <h2 className=" tracking-tight text-xs  js:text-lg sm:text-xl  md:text-2xl lg:text-3xl sxl:text-4xl xl:text-5xl font-semibold">
                Abdul Azeez Md
              </h2>
              <p className="leading-3 text-[0.55rem] js:text-[0.7rem] js:leading-4 sm:text-[0.9rem] sm:leading-5 md:text-[1rem] md:leading-6 lg:text-xl sxl:text-[1.6rem] sxl:leading-9 ">
                Building cool websites using Next, React | Creative Wordsmith in
                My Spare Time | Debugging Code... and Life
              </p>
              <p className="text-slate-500  my-1 leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 md:text-[0.8rem] md:leading-5 lg:text-[1rem] lg:my-4  sxl:text-[1.4rem] sxl:leading-9 ">
                Bhimavaram, Andhra Pradesh, India{" "}
                <span>
                  <a
                    className="text-[#2D64BC] hover:underline decoration-1  font-semibold"
                    href="https://www.linkedin.com/in/abdul-azeez-md-156822258/">
                    Contact Info
                  </a>
                </span>
              </p>
              <p className="text-[#2D64BC] font-semibold leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 md:text-[0.8rem] md:leading-5 lg:text-[1rem]  sxl:text-[1.4rem] sxl:leading-9  ">
                <a
                  className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold "
                  href="https://www.linkedin.com/mynetwork/invite-connect/connections/">
                  250 connections
                </a>
              </p>
              <div className="my-1 flex items-center">
                <AvatarCirclesDemo />
                <div className="px-1 leading-[0.4rem]">
                  <a
                    href="https://www.linkedin.com/mynetwork/invite-connect/connections/"
                    className="hover:text-[#2D64BC] hover:underline decoration-1 text-slate-500 leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 md:text-[0.8rem] md:leading-5 lg:text-[1rem]  sxl:text-[1.4rem] sxl:leading-8  ">
                    <span className="hover:text-[#2D64BC] text-slate-600 font-medium  ">
                      Madivada Prithvi, Chakri Kottana,
                    </span>{" "}
                    and 248 other mutual connections
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className=" flex ">
                <div className="w-8 h-8 lg:w-10 lg:h-10  rounded-full">
                  <img
                    src={
                      collegeImage ||
                      "https://media.licdn.com/dms/image/v2/C560BAQEdujoy3UR98A/company-logo_200_200/company-logo_200_200/0/1630657523088/vishnu_institute_of_technology_vishnupur_bhimavaram_pin_534202_cc_pa__logo?e=1743033600&v=beta&t=k02tCzDAOxNyXrLjFmbiDLwpxEnY4-7wGE1TEe2Obtg"
                    }
                    alt="CollegeImage"
                  />
                </div>

                <p className="leading-[0.4rem] text-[0.30rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 md:text-[0.6rem] md:leading-4 lg:text-[0.9rem] font-semibold  sxl:text-[1.2rem] sxl:leading-7 px-1">
                  <a
                    className="hover:text-[#2D64BC] hover:underline decoration-1  font-semibold w-full"
                    href="https://www.linkedin.com/school/vitbhimavaram/posts/?feedView=all">
                    Vishnu Institute of Technology (Autonomous)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-3 rounded-sm">
        <div className="">
          <h2 className=" tracking-tight font-medium   md:text-lg  my-2 text-[0.55rem] js:text-[0.7rem] js:leading-4 sm:text-[0.9rem] sm:leading-5 md:text-[1rem] md:leading-6 lg:text-xl sxl:text-[1.6rem] sxl:leading-9">
            About
          </h2>
          <p className="leading-3 text-[0.50rem] js:text-[0.6rem] js:leading-3 sm:text-[0.7rem] sm:leading-4 md:text-[0.8rem] md:leading-5 lg:text-[1rem] lg:my-4  sxl:text-[1.4rem] sxl:leading-9">
            I am Abdul Azeez, I am in my 3rd year computer science engineering,
            I build webites and deploy it to make our lives smother. Love to
            write blogs on hashnode and medium. Special love for Typescript,
            building backends, I work with React.js, Next.js, Express, AWS,
            Postgresql, Edge Networks, curious about Blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}

const avatars = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQE6PLCTtdOeBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694834108800?e=2147483647&v=beta&t=g4FnHxAc_BsKsATvNfe94dDAZyFvU5gX5UGs3j9rozw",
    profileUrl: "https://www.linkedin.com/in/madivada-prithvi-501005270/",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5635AQFdoGCeZHDEgw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726476792483?e=1735498800&v=beta&t=EgERRRGIm9dm2OMQCFxpPyFODaflD3_81NJyHKqWl6A",
    profileUrl: "https://www.linkedin.com/in/chakri-kottana-57a57725a/",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
];

export function AvatarCirclesDemo() {
  return (
    <AvatarCircles className="min-w-fit" numPeople={99} avatarUrls={avatars} />
  );
}
