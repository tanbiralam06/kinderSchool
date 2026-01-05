import { Card, CardContent } from "@/components/ui/card";
import { Puzzle, Mic, Globe, Palette } from "lucide-react";

export function AcademicMethodology() {
  const methods = [
    {
      title: "Play-Way Method",
      text: "We use games and activities to make learning fun and engaging, reducing stress and increasing retention.",
      icon: Puzzle,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Experiential Learning",
      text: "Children learn best by doing. Use of hands-on projects and real-world examples.",
      icon: Globe,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Show & Tell",
      text: "Activities designed to build confidence, public speaking skills, and vocabulary.",
      icon: Mic,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Creative Arts",
      text: "Integrating art, music, and dance into the curriculum to foster creativity and self-expression.",
      icon: Palette,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm tracking-wide uppercase mb-4">
            Methodology
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How We Teach
          </h2>
          <p className="text-lg text-muted-foreground">
            Our teaching methodology is child-centric, focusing on the
            individual learning style of each student. We move away from rote
            learning to understanding concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardContent className="pt-6 text-center">
                <div
                  className={`mx-auto w-14 h-14 rounded-2xl flex items-center justify-center ${method.color} mb-4`}
                >
                  <method.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
