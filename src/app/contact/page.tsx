import { ContactDetails } from "@/components/modules/contact/ContactDetails";
import { ContactMap } from "@/components/modules/contact/ContactMap";
import { EnquiryForm } from "@/components/modules/home/EnquiryForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Get in touch today!
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Get in Touch
              </h2>
              <ContactDetails />
            </div>

            {/* Right Column: Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-lg border border-border/50 overflow-hidden sticky top-24">
                <EnquiryForm compact={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <ContactMap />
    </div>
  );
}
