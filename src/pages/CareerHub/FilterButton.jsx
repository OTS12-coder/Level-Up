import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Filter Button (Pill Dropdown)
 */
export default function FilterButton({
  icon: Icon,
  label,
  options,
  selected,
  onSelect,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2 px-4 py-2.5 rounded-xl
          border border-outline-variant/30
          bg-surface-container-low
          text-on-surface-variant text-xs font-semibold
          hover:bg-surface-container-high
          hover:text-on-surface
          hover:border-outline-variant
          transition-all
        "
      >
        {Icon ? <Icon size={16} /> : null}

        <span>{label}</span>

        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
          absolute right-0 mt-2 w-48
          max-h-20 overflow-y-auto
          rounded-xl border border-outline-variant/20
          bg-surface-container
          shadow-lg z-50 custom-scrollbar"
         >
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                setOpen(false);
              }}
              className={`
                w-full text-left px-4 py-2.5 text-xs font-medium
                transition-all hover:bg-surface-container-high
                ${selected === option.value
                  ? "text-tertiary font-semibold"
                  : "text-on-surface-variant"
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      {/* Scrollbar styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </div>
  );
}