import Image from "next/image";
import { Quote } from "lucide-react";

export function PrincipalMessage() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Principal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Mrs. Sarah Jenkins</h3>
                <p className="opacity-90">Principal, Kinder School</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-6">
            <Quote className="h-12 w-12 text-primary/20 rotate-180" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              A Message from the Principal
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                "Welcome to Kinder School. It is my privilege to lead this
                vibrant community of learners. We believe that education is not
                just about filling a bucket, but lighting a fire. Our goal is to
                kindle curiosity and a lifelong love for learning in every
                child."
              </p>
              <p>
                "Our dedicated faculty ensures that each student receives
                personal attention and care. We are committed to partnering with
                parents to provide the strong foundation your child needs to
                succeed in an ever-changing world."
              </p>
            </div>
            <div className="pt-4">
              <p className="font-handwriting text-3xl text-primary font-bold">
                Sarah Jenkins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
