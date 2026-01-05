import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, UserCheck, School, Banknote } from "lucide-react";

export function AdmissionsProcess() {
  const steps = [
    {
      id: 1,
      title: "Submit Enquiry",
      description:
        "Fill out the online enquiry form or visit the school office to register your interest.",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "School Visit & Interaction",
      description:
        "Schedule a campus tour. Parents and child interact with the admissions counselor.",
      icon: School,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 3,
      title: "Document Verification",
      description:
        "Submit necessary documents (Birth Certificate, Address Proof, Photos, etc.) for verification.",
      icon: UserCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      title: "Fee Payment & Admission",
      description:
        "Pay the admission fees to confirm the seat. Welcome kit and schedule will be provided.",
      icon: Banknote,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase mb-4">
            How to Apply
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-muted-foreground">
            We have kept our admission process transparent and hassle-free for
            parents.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-muted -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`w-24 h-24 rounded-full border-4 border-background flex items-center justify-center ${step.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <step.icon className="h-10 w-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold border-2 border-background">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
