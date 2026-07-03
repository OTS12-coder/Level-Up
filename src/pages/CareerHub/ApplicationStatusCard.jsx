import Card from "../../components/common/Card";
import { FileText, Send } from "lucide-react";

const STATUS_ICON = {
  Interviewing: FileText,
  Applied: Send,
};

const STATUS_ICON_STYLE = {
  Interviewing: "bg-tertiary/10 text-tertiary",
  Applied: "bg-tertiary/15 text-tertiary",
};

const STATUS_BADGE_STYLE = {
  Interviewing: "bg-surface-container-high text-on-surface",
  Applied: "bg-tertiary/10 text-tertiary",
};

export default function ApplicationStatusCard({ items = [] }) {
  return (
    <Card>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-on-surface">
          Application Status
        </h3>

        <button
          type="button"
          className="text-xs font-semibold text-tertiary hover:underline"
        >
          View All
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {items.map((item) => {
          const Icon = STATUS_ICON[item.status] || FileText;

          return (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-surface-container-high/40"
            >
              {/* Icon */}
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  STATUS_ICON_STYLE[item.status] ||
                  "bg-surface-container-high text-on-surface-variant"
                }`}
              >
                <Icon size={16} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface truncate">
                  {item.company}
                </p>
                <p className="text-xs text-on-surface-variant truncate">
                  {item.role}
                </p>
              </div>

              {/* Badge */}
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                  STATUS_BADGE_STYLE[item.status] ||
                  "bg-surface-container-high text-on-surface-variant"
                }`}
              >
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}