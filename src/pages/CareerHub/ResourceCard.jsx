const TAG_STYLES = {
  GUIDES: "bg-blue-500/20 text-blue-300",
  NETWORKING: "bg-emerald-500/20 text-emerald-300",
};

export default function ResourceCard({ resource }) {
  return (
    <button
      type="button"
      className="relative h-56 w-full rounded-2xl overflow-hidden border border-outline-variant/20 text-left group">

      {/* Background Image */}
      <img
        src={resource.image}
        alt={resource.title}
        className="absolute inset-0 w-full h-full object-contain bg-white"
      />

      {/* Overlay (soft instead of black) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">

        {/* Category badge */}
        <span
          className={`self-start px-3 py-1 rounded-full text-[11px] font-bold ${TAG_STYLES[resource.category] ||
            "bg-surface-container-high text-on-surface"
            }`}
        >
          {resource.category}
        </span>

        {/* Title */}
        <h4 className=" mt-2 text-white font-bold text-xl leading-7">
          {resource.title}
        </h4>
      </div>
    </button>
  );
}
