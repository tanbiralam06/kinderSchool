"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BookOpen, Music, Users, Brain } from "lucide-react";

export function CurriculumTabs() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("nursery");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const years = [
    {
      id: "nursery",
      label: "Nursery",
      title: "Nursery Program (Age 3+)",
      description:
        "A gentle introduction to learning through sensory play and socialization.",
      subjects: [
        "Sensory Development",
        "Storytelling",
        "Art & Craft",
        "Music & Movement",
      ],
      outcomes: [
        "Improved social skills and sharing",
        "Basic motor skill development",
        "Recognition of colors and shapes",
        "Confidence in expressing needs",
      ],
      icon: Users,
      color: "text-blue-500 bg-blue-50",
    },
    {
      id: "kindergarten",
      label: "LKG & UKG",
      title: "Kindergarten (Age 4-6)",
      description:
        "Building the blocks of literacy, numeracy, and independent thinking.",
      subjects: [
        "Phonetics & Reading",
        "Basic Mathematics",
        "Environmental Science",
        "Creative Writing",
      ],
      outcomes: [
        "Ability to read simple sentences",
        "Understanding basic math concepts",
        "Curiosity about the world",
        "Self-discipline and routine",
      ],
      icon: Brain,
      color: "text-green-500 bg-green-50",
    },
    {
      id: "primary",
      label: "Primary (1-4)",
      title: "Primary Years (Age 6-10)",
      description:
        "Structured academic learning focused on core subjects and holistic growth.",
      subjects: [
        "English Literature & Grammar",
        "Mathematics & Logic",
        "General Science",
        "Social Studies",
        "Hindi / Regional Language",
        "Computer Basics",
      ],
      outcomes: [
        "Strong foundation in core subjects",
        "Critical thinking and problem solving",
        "Effective communication skills",
        "Digital literacy",
      ],
      icon: BookOpen,
      color: "text-orange-500 bg-orange-50",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full grid-cols-3 h-14 rounded-full bg-muted/50 p-1">
              {years.map((year) => (
                <TabsTrigger
                  key={year.id}
                  value={year.id}
                  className="rounded-full text-base font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                  {year.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {years.map((year) => (
            <TabsContent
              key={year.id}
              value={year.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <Card className="border-none shadow-xl overflow-hidden">
                <div
                  className={`h-3 w-full ${year.color.replace("text-", "bg-").replace("bg-", "bg-opacity-100 ")}`}
                />
                <CardHeader className="text-center pt-8 pb-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${year.color}`}
                  >
                    <year.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl font-bold">
                    {year.title}
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {year.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 gap-8 grid md:grid-cols-2">
                  {/* Subjects */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" /> Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {year.subjects.map((sub, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-3 py-1 text-sm font-medium"
                        >
                          {sub}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />{" "}
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {year.outcomes.map((outcome, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
