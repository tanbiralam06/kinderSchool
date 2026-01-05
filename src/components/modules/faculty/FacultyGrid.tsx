"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Mail } from "lucide-react";

// Mock Data - Malda/West Bengal specific names
const facultyData = [
  {
    id: 1,
    name: "Dr. Anirban Roy",
    designation: "Principal",
    qualification: "PhD in Child Psychology",
    experience: "25+ Years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2144&auto=format&fit=crop",
    bio: "Dedicated to fostering a nurturing environment for holistic growth in Malda.",
  },
  {
    id: 2,
    name: "Mrs. Paramita Sen",
    designation: "Vice Principal",
    qualification: "M.A. in English, B.Ed",
    experience: "18 Years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop",
    bio: "Believes in the power of storytelling and creative expression in early education.",
  },
  {
    id: 3,
    name: "Ms. Sampa Das",
    designation: "Senior Teacher (Maths)",
    qualification: "M.Sc Mathematics",
    experience: "12 Years",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
    bio: "Making numbers fun and accessible for every child.",
  },
  {
    id: 4,
    name: "Mr. Rajat Ghosh",
    designation: "Science Educator",
    qualification: "B.Sc Physics",
    experience: "8 Years",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2134&auto=format&fit=crop",
    bio: "Passionate about igniting scientific curiosity through hands-on experiments.",
  },
  {
    id: 5,
    name: "Mrs. Priya Mondal",
    designation: "Art & Craft Teacher",
    qualification: "B.F.A",
    experience: "10 Years",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop",
    bio: "Guiding little hands to create beautiful masterpieces.",
  },
  {
    id: 6,
    name: "Mr. Amitava Banerjee",
    designation: "Music Teacher",
    qualification: "M.Mus (Rabindra Sangeet)",
    experience: "15 Years",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop",
    bio: "Keeping the cultural heritage of Bengal alive through music and rhythm.",
  },
  {
    id: 7,
    name: "Ms. Anjali Saha",
    designation: "Kindergarten Coordinator",
    qualification: "B.Ed, Child Development",
    experience: "6 Years",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2070&auto=format&fit=crop",
    bio: "Specializes in play-way methodology for our youngest learners.",
  },
  {
    id: 8,
    name: "Mr. Rahul Chatterjee",
    designation: "P.E. Instructor",
    qualification: "B.P.Ed",
    experience: "9 Years",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070&auto=format&fit=crop",
    bio: "Promoting physical fitness and team spirit through sports and yoga.",
  },
];

export function FacultyGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/20 bg-primary/5"
          >
            Our Mentors
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Meet Our <span className="text-primary">Teachers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our dedicated faculty members from Malda and beyond are committed to
            nurturing your child's potential with love, care, and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((faculty) => (
            <Card
              key={faculty.id}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-2">
                    <span className="bg-white/90 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="bg-white/90 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {faculty.name}
                </CardTitle>
                <p className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                  {faculty.designation}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "{faculty.bio}"
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/80 bg-secondary/20 py-1 px-3 rounded-full mx-auto w-fit">
                  <GraduationCap className="h-3 w-3" />
                  {faculty.qualification}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
