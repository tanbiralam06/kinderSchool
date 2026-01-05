import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactDetails() {
  const info = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Learn Avenue, Education City,",
        "New Knowledge Park, City - 560001",
      ],
      color: "text-red-500 bg-red-50",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 12345 67890"],
      color: "text-blue-500 bg-blue-50",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["admissions@kinderschool.com", "info@kinderschool.com"],
      color: "text-green-500 bg-green-50",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday: 8:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "text-purple-500 bg-purple-50",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {info.map((item, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                {item.details.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
