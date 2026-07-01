import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Members from "@/components/home/Members";
import Universe from "@/components/home/Universe";
import Fanclub from "@/components/home/Fanclub";
import LightStick from "@/components/home/LightStick";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Members />
      <Universe />
      <Fanclub />
      <LightStick />
      <GalleryPreview />
    </>
  );
}
