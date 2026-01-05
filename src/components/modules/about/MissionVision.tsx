import { Rocket, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MissionVision() {
  const items = [
    {
      title: "Our Mission",
      description:
        "To provide a safe, nurturing, and stimulating environment where every child feels valued. We strive to foster a love for learning through play, creativity, and exploration, ensuring holistic development for every student.",
      icon: Rocket,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Our Vision",
      description:
        "To be a leading institution in early childhood education, recognized for empowering focused, compassionate, and innovative future leaders who are ready to take on the world with confidence.",
      icon: Eye,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Core Values",
      description:
        "Integrity, Empathy, Creativity, and Excellence. We believe in building strong character and social skills alongside academic foundations.",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Guiding Your Child's Future
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center pt-8">
                <div
                  className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${item.color} mb-4`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground pb-8">
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
