export function ContactMap() {
  return (
    <div className="w-full h-[400px] lg:h-[500px] bg-muted relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0410799818817!2d77.63216091482205!3d12.969223190857324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a6c9688461%3A0xc4ce76d9e0394203!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="School Location"
        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </div>
  );
}
