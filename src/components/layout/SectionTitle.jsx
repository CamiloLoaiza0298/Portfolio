export default function SectionTitle(props) {
  return (
    <div className="flex items-center gap-4 mb-16"> {/* Container for title and line */ }
      <h2 className="text-2xl font-headline-lg text-headline-lg text-on-surface">
        {props.children}
      </h2>
      {/* Decorative Line with Dot */}
      <div className="h-px grow bg-white/10 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-container rounded-sm"></div>
      </div>
    </div>
  );
}