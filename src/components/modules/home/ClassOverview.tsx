import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, BookOpen, GraduationCap } from "lucide-react";

export function ClassOverview() {
  const classes = [
    {
      title: "Nursery",
      description: "Play-based learning for our youngest stars (Age 3+)",
      icon: Baby,
      color: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-500",
      features: ["Sensory Play", "Social Skills", "Basic Motor Skills"],
      link: "/academics/nursery",
    },
    {
      title: "LKG & UKG",
      description:
        "Building strong foundations for literacy and numeracy (Age 4-6)",
      icon: BookOpen,
      color: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-500",
      features: ["Phonics", "Basic Math", "Creative Arts"],
      link: "/academics/kindergarten",
    },
    {
      title: "Primary (Class 1-4)",
      description:
        "Structured academic learning with holistic growth (Age 6-10)",
      icon: GraduationCap,
      color: "bg-orange-100 dark:bg-orange-900/20",
      iconColor: "text-orange-500",
      features: ["Subject Mastery", "Sports", "Project Work"],
      link: "/academics/primary",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm tracking-wide uppercase mb-4">
            Academics
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Programs for Every Age
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a tailored curriculum designed to meet the developmental
            needs of children at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div
                className={`h-2`}
                style={{
                  backgroundColor:
                    index === 0
                      ? "var(--primary)"
                      : index === 1
                        ? "var(--secondary)"
                        : "var(--accent)",
                }}
              />
              <CardHeader
                className={`${item.color} pt-10 pb-8 rounded-t-lg text-center`}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-4">
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base font-medium opacity-90">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 text-center bg-card">
                <ul className="space-y-3 mb-6 inline-block text-left">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${item.iconColor.replace("text-", "bg-")}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-8 justify-center bg-card">
                <Button
                  variant="outline"
                  className="w-full rounded-xl group border-2 hover:border-primary hover:text-primary transition-colors"
                  asChild
                >
                  <Link href={item.link}>
                    Learn Details{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
