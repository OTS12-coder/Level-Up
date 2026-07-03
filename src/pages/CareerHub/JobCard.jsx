import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { CheckCircle2 } from "lucide-react";

function formatSalary(job) {
  if (job.salaryPeriod === "hour") {
    return `$${job.salaryMin} - $${job.salaryMax}/hr`;
  }
  return `$${job.salaryMin}k - $${job.salaryMax}k/year`;
}

function LogoBadge({ logo, company }) {
  return (
    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
      <img
        src={logo}
        alt={company}
        className="w-10 h-10 object-contain"
      />
    </div>
  );
}

export default function JobCard({ job, variant = "compact" }) {
  return (
    <Card>
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <LogoBadge logo={job.logo} company={job.company} />

          <div>
            <h3 className="font-bold text-on-surface">
              {job.title}
            </h3>

            <p className="text-xs text-on-surface-variant">
              {job.company} • {job.location}
            </p>
          </div>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-tertiary/10 text-tertiary flex items-center gap-1">
          <CheckCircle2 size={14} />
          {variant === "featured"
            ? `${job.matchPercent}% Skill Match`
            : `${job.matchPercent}% Match`}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-lg bg-surface-container-high text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-5">
        <span className="font-bold text-on-surface">
          {formatSalary(job)}
        </span>

        <Button variant="primary">
          {variant === "featured" ? "Apply Now" : "Quick Apply"}
        </Button>
      </div>
    </Card>
  );
}