import { Hero } from "@/components/modules/home/Hero";
import { HomeAbout } from "@/components/modules/home/HomeAbout";
import { ClassOverview } from "@/components/modules/home/ClassOverview";
import { FacilitiesPreview } from "@/components/modules/home/FacilitiesPreview";
import { EnquiryForm } from "@/components/modules/home/EnquiryForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HomeAbout />
      <ClassOverview />
      <FacilitiesPreview />
      <EnquiryForm />
    </div>
  );
}
