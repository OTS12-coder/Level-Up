import { useState } from "react";
import Card from "../../components/common/Card";
import { Bookmark } from "lucide-react";

export default function SavedJobsCard({ items = [] }) {
  const [savedIds, setSavedIds] = useState(
    items.map((item) => item.id)
  );

  const toggleSaved = (id) => {
    setSavedIds((prev) =>
      prev.includes(id)
        ? prev.filter((savedId) => savedId !== id)
        : [...prev, id]
    );
  };

  return (
    <Card>
      {/* Header */}
      <h3 className="text-base font-bold text-on-surface mb-4">
        Saved for Later
      </h3>

      {/* List */}
      <div className="space-y-3">
        {items.map((item) => {
          const isSaved = savedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 p-3 rounded-xl bg-surface-container-high hover:bg-surface-container-high/70 transition-colors"
            >
              {/* Text */}
              <div className="min-w-0">
                <p className="text-sm font-bold text-on-surface truncate">
                  {item.company}
                </p>
                <p className="text-xs text-on-surface-variant truncate">
                  {item.role}
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => toggleSaved(item.id)}
                className={`shrink-0 transition-colors ${
                  isSaved
                    ? "text-primary-container"
                    : "text-on-surface-variant hover:text-primary-container"
                }`}
                aria-label="Toggle saved"
              >
                <Bookmark
                  size={16}
                  fill={isSaved ? "currentColor" : "none"}
                />
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
}