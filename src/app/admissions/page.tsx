import { AdmissionsProcess } from "@/components/modules/admissions/AdmissionsProcess";
import { AdmissionsFAQ } from "@/components/modules/admissions/AdmissionsFAQ";
import { EnquiryForm } from "@/components/modules/home/EnquiryForm";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Page Header */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Admissions
          </h1>
          <p className="text-xl text-muted-foreground">
            Join our family. Your child's journey starts here.
          </p>
        </div>
      </section>

      <AdmissionsProcess />

      {/* Reuse Enquiry Form for Applications */}
      <div className="bg-background">
        <EnquiryForm />
      </div>

      <AdmissionsFAQ />
    </div>
  );
}
