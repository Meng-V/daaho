import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
}

const HeroImage = ({ backgroundImage, title }: CampProps) => {
  return (
    <div
      className={`h-full w-full ${backgroundImage} bg-cover 
      bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div
        className="flex h-full flex-col 
      items-start justify-between p-6 lg:px-20 lg:py-10"
      >
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-miami_accent_red p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="2xl:max-container relative flex flex-col lg:mb-10"
    >
      <div
        className="flex h-[340px] w-full items-start justify-start 
      gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <HeroImage
          backgroundImage="bg-bg-img-1"
          title="Diversity, Equity, and Inclusion at Miami University Libraries"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div
          className="bg-miami-red-gradient p-8 lg:max-w-[650px] xl:max-w-[850px] xl:rounded-5xl 
        xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl"
        >
          <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
            <strong>Inclusive Excellence</strong> @ Miami University Libraries
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            The staff at the University Libraries are committed to ensuring that
            the Libraries will always be a welcoming and inclusive environment
            that takes deliberate actions to meet the needs of the entire Miami
            community. We provide meaningful, globally diverse cultural
            collections focusing on racial, ethnic, religious, geographical,
            socioeconomic, disability, and gender and sexual orientation topics.
            We promote programs, events, displays, services and other activities
            and resources to enhance student, faculty, staff, and community
            awareness.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
