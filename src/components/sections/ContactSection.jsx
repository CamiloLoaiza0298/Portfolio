import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-headline-lg font-bold text-center text-on-surface mb-12 font-headline-lg">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center p-6">
            <Mail className="mx-auto text-primary mb-4" size={32} />
            <h3 className="text-headline-md font-semibold text-on-surface mb-2 font-headline-md">
              Email
            </h3>
            <p className="text-body-md text-on-surface-variant font-body-md">email@example.com</p>
          </div>
          <div className="text-center p-6">
            <Phone className="mx-auto text-primary mb-4" size={32} />
            <h3 className="text-headline-md font-semibold text-on-surface mb-2 font-headline-md">
              Phone
            </h3>
            <p className="text-body-md text-on-surface-variant font-body-md">+1 234 567 890</p>
          </div>
          <div className="text-center p-6">
            <MapPin className="mx-auto text-primary mb-4" size={32} />
            <h3 className="text-headline-md font-semibold text-on-surface mb-2 font-headline-md">
              Location
            </h3>
            <p className="text-body-md text-on-surface-variant font-body-md">City, Country</p>
          </div>
        </div>

        <form className="max-w-xl mx-auto space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-label-md font-medium text-on-surface-variant mb-1 font-label-md"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface-container text-on-surface"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-label-md font-medium text-on-surface-variant mb-1 font-label-md"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface-container text-on-surface"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-label-md font-medium text-on-surface-variant mb-1 font-label-md"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface-container text-on-surface"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-on-primary rounded-lg hover:bg-primary-container transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}