import {
  Colleges,
  Hero,
  Hub,
  Stakeholder,
  Companies,
  Cities,
  Entrepreneurship,
  HowItWorks,
  AssessAndAlignDetailed,
  UpcomingEvents,
  PlatformShowcase,
} from "../../sections";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Hub />
        <Stakeholder />
        <Colleges />
        <Companies />
        <Cities />
        <Entrepreneurship />
        <HowItWorks />
        <AssessAndAlignDetailed/>
        <UpcomingEvents/>
        <PlatformShowcase/>
      </main>
    </>
  );
};

export default Home;
