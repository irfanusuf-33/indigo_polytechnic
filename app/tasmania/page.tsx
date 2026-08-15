import type { ReactNode } from "react";
import Image from "next/image";
import AdmissionBanner from "@/components/layout/AdmissionBanner";

type ChecklistItem = {
  title: string;
  description: string;
};

type ExploreCard = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-3 py-1 text-[14px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-2 w-2 rounded-full bg-white" />
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 shrink-0 rounded-[3px] bg-[#0C06DA] p-1"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const checklistItems: ChecklistItem[] = [
  {
    title: "Fabulous Food & Local Cafés",
    description:
      "Enjoy Tasmania's fresh produce, local flavours, cafés, and relaxed dining experiences.",
  },
  {
    title: "Fresh Local Produce",
    description:
      "Discover Tasmania's renowned food culture, from fresh seafood and produce to locally made specialties.",
  },
  {
    title: "World-Class Wilderness",
    description:
      "Explore beautiful landscapes, national parks, forests, mountains, and protected natural environments.",
  },
  {
    title: "Music & Arts",
    description:
      "Experience local festivals, creative events, live music, exhibitions, and Tasmania's vibrant arts scene.",
  },
  {
    title: "Historic Attractions",
    description:
      "Explore historic towns, heritage sites, museums, and landmarks that showcase Tasmania's unique past.",
  },
  {
    title: "Adventure & Outdoors",
    description:
      "Enjoy hiking, sightseeing, nature walks, scenic drives, and outdoor adventures across the island.",
  },
];

const exploreCards: ExploreCard[] = [
  {
    tag: "MONA",
    title: "Museum of Old and New Art",
    description:
      "Explore one of Tasmania's most distinctive cultural attractions. MONA offers an unconventional mix of art, architecture, exhibitions, and experiences in a unique waterfront setting.",
    image: "/images/mona.svg",
  },
  {
    tag: "HUON VALLEY",
    title: "Scenic Landscapes & Local Charm",
    description:
      "Discover the beautiful surroundings of Hobart and its neighbouring valleys, offering scenic views, peaceful landscapes, local communities, and opportunities to enjoy Tasmania's natural beauty.",
    image: "/images/huon.svg",
  },
  {
    tag: "ROYAL TASMANIAN BOTANICAL GARDENS",
    title: "Nature in the Heart of Hobart",
    description:
      "Take a peaceful break among beautiful gardens, native plants, historic collections, and unique botanical displays located close to Hobart.",
    image: "/images/royalgarden.svg",
  },
  {
    tag: "HOBART WATERFRONT & SALAMANCA",
    title: "Harbour Views & Local Culture",
    description:
      "Experience the lively atmosphere of Hobart's waterfront and Salamanca precinct, known for its historic surroundings, restaurants, cafés, markets, and beautiful harbour views.",
    image: "/images/waterfront.svg",
  },
  {
    tag: "MT FIELD NATIONAL PARK",
    title: "Nature, Trails & Waterfalls",
    description:
      "Escape into Tasmania's natural landscapes with scenic walking trails, forests, waterfalls, and peaceful surroundings ideal for exploring the outdoors.",
    image: "/images/nationalpark.svg",
  },
  {
    tag: "MT WELLINGTON",
    title: "Panoramic Views of Hobart",
    description:
      "Experience spectacular views across Hobart and beyond from kunanyi / Mount Wellington. Explore scenic roads, walking trails, and Tasmania's distinctive alpine environment.",
    image: "/images/wellington.svg",
  },
];

export default function TasmaniaLifePage() {
  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[662px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/tasmania-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] -translate-y-10 flex-col items-center">
          <span className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-3 py-1 text-[14px] font-bold italic tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            Tasmania Life
          </span>

          <h1 className="mt-4 text-[42px] font-bold leading-tight sm:text-[52px] lg:text-[58px]">
            <span className="text-[#0C06DA]">Welcome to</span>{" "}
            <span className="text-white">Tasmania!</span>
          </h1>

          <p className="mt-6 max-w-[640px] text-[20px] leading-7 text-white/100">
            Experience a unique student lifestyle in Tasmania, where beautiful
            landscapes, welcoming communities, vibrant culture, and exciting
            opportunities come together.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1281px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionLabel>Your New Home</SectionLabel>

            <h2 className="text-[32px] mt-9 font-bold leading-tight text-[#171717] sm:text-[38px]">
              Study, Explore &{" "}
              <span className="text-[#0C06DA]">Experience</span> Tasmania
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-7 text-[#8A8A8A]">
              <p>
                Tasmania offers international students much more than a quality
                education. With welcoming communities, stunning natural
                surroundings, and a relaxed lifestyle, it provides an ideal
                environment to learn, explore, and create meaningful
                experiences.
              </p>
              <p>
                Recognised by leading travel publications as one of the
                world&apos;s must-visit destinations, Tasmania combines
                breathtaking landscapes, rich culture, and vibrant local
                communities, making it an exciting place to live and study.
              </p>
              <p>
                Beyond the classroom, students can discover local attractions,
                participate in community life, experience Tasmania&apos;s unique
                lifestyle, and build valuable personal and professional
                connections.
              </p>
              <p>
                To help international students settle in and make the most of
                their time in Tasmania,{" "}
                <strong className="text-[#8A8A8A]">
                  Indigo Polytechnic College
                </strong>{" "}
                provides dedicated student support, including{" "}
                <strong className="text-[#8A8A8A]">Welcome New Tassie</strong>{" "}
                webinars held at the Hobart Campus.
              </p>
              <p>
                Students can also make use of the{" "}
                <strong className="text-[#8A8A8A]">Tasmania Handy Guide</strong>
                , which provides practical information and helpful tips for
                settling into Tasmania, engaging with the local community, and
                developing professional networks.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[553/612] w-full max-w-[600px]">
            <Image
              src="/images/yournewhome.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EEECFB] px-6 py-16 text-center sm:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Why Tasmania?</SectionLabel>

          <h2 className="text-[32px] mt-6 font-bold leading-tight text-[#171717] sm:text-[38px]">
            Discover What <span className="text-[#0C06DA]">Tasmania</span> Has
            to Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-6 text-[#8A8A8A]">
            Make the most of your time in Tasmania with experiences that combine
            natural beauty, culture, adventure, and a welcoming local community.
          </p>

          <div className="mt-17 grid grid-cols-1 gap-x-10 gap-y-10 text-left sm:grid-cols-2 lg:grid-cols-3">
            {checklistItems.map((item) => (
              <div key={item.title}>
                <div className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="block h-[2px] w-8 shrink-0 bg-[#0C06DA]" />
                  <h3 className="text-[18px] font-bold text-[#171717]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 ml-[80px] text-[14px] leading-6 text-[#545454]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-8">
          <SectionLabel>Explore Tasmania</SectionLabel>

          <h2 className="text-[32px] mt-8 font-bold leading-tight text-[#171717] sm:text-[38px]">
            Discover Life <span className="text-[#0C06DA]">Beyond</span> the
            Classroom
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-6 text-[#8A8A8A]">
            From fascinating heritage sites to spectacular mountains,
            waterfalls, and coastlines, Tasmania offers countless places to
            explore during your study journey.
          </p>

          {/* <div className="mt-14 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
            {exploreCards.map((card) => (
              <div
                key={card.tag}
                className="overflow-hidden rounded-2xl border border-[#E7E7E7] p-6"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="mt-5 inline-flex items-center rounded-full bg-[#0C06DA] px-3 py-1 text-[11px] font-bold uppercase italic tracking-wide text-white">
                  {card.tag}
                </span>

                <h3 className="mt-3 text-[18px] font-bold leading-5 text-[#171717]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#555555]">
                  {card.description}
                </p>
              </div>
            ))}
          </div> */}

          <div className="mt-14 grid grid-cols-1 gap-[80px] text-left sm:grid-cols-2 lg:grid-cols-3">
            {exploreCards.map((card) => (
              <div
                key={card.tag}
                className="w-full overflow-hidden rounded-[12px] border border-[#E7E7E7] p-[7px]"
              >
                {/* Image */}
                <div className="relative h-[250px] w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-[7px] pb-[14px] pt-[18px]">
                  <span className="inline-flex items-center rounded-[8px] bg-[#0C06DA] px-3 py-1 text-[11px] font-bold uppercase italic tracking-wide text-white">
                    {card.tag}
                  </span>

                  <h3 className="mt-3 text-[20px] font-bold leading-5 text-[#171717]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#555555]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionBanner />
    </main>
  );
}
