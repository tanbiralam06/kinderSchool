import { facilities } from "./FacilitiesData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FacilitiesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Card
              key={facility.id}
              className="hover:shadow-lg transition-all duration-300 border-muted group"
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <facility.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {facility.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
