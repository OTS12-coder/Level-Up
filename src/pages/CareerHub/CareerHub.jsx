// export default function CareerHub() {
//   return (
//     <div className="text-on-surface">
//       📚 CareerHub Page (Under Construction)
//     </div>
//   );
// }
import { useState, useMemo } from "react";
import JobCard from "./JobCard";
import ResourceCard from "./ResourceCard";
import FilterButton from "./FilterButton";
import ProfileReadinessCard from "./ProfileReadinessCard";
import ApplicationStatusCard from "./ApplicationStatusCard";
import SavedJobsCard from "./SavedJobsCard";

import { SlidersHorizontal, MapPin } from "lucide-react";

import {
  jobs,
  resources,
  applicationStatus,
  savedJobs,
  profileReadiness,
} from "./dummyData";

/* FILTER OPTIONS */
const LOCATION_OPTIONS = [
  { value: "all", label: "All Locations" },
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

const MATCH_OPTIONS = [
  { value: "best", label: "Best Match" },
  { value: "newest", label: "Newest First" },
];

export default function CareerHub() {
  const [locationFilter, setLocationFilter] = useState("all");
  const [matchSort, setMatchSort] = useState("best");

  const visibleJobs = useMemo(() => {
    let list = [...jobs];

    if (locationFilter !== "all") {
      list = list.filter((job) => job.locationType === locationFilter);
    }

    if (matchSort === "best") {
      list = list.sort((a, b) => b.matchPercent - a.matchPercent);
    }

    return list;
  }, [locationFilter, matchSort]);

  const featuredJob = visibleJobs.find((job) => job.featured) || visibleJobs[0];
  const otherJobs = visibleJobs.filter((job) => job.id !== featuredJob?.id);

  return (
    <div className="space-y-10">
      
      {/* HEADER */}
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-xl">
          <span className="block text-xs font-bold tracking-[0.15em] text-tertiary uppercase mb-2">
            Opportunity Awaits
          </span>

          <h1 className="text-4xl font-black text-on-surface mb-3">
            Career Hub
          </h1>

          <p className="text-sm text-on-surface-variant leading-relaxed">
            Accelerate your trajectory. Discover roles that match your skills and goals.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3">
          <FilterButton
            icon={SlidersHorizontal}
            label="Match"
            options={MATCH_OPTIONS}
            selected={matchSort}
            onSelect={setMatchSort}
          />

          <FilterButton
            icon={MapPin}
            label="Location"
            options={LOCATION_OPTIONS}
            selected={locationFilter}
            onSelect={setLocationFilter}
          />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* JOBS */}
          <div className="space-y-4">
            {featuredJob && (
              <JobCard job={featuredJob} variant="featured" />
            )}

            {otherJobs.length > 0 ? (
              otherJobs.map((job) => (
                <JobCard key={job.id} job={job} variant="compact" />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-sm text-on-surface-variant">
                  No roles match this filter yet
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Try changing location or match level
                </p>
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div>
            <h2 className="text-2xl font-bold text-on-surface mb-5">
              Career Mastery Resources
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <ProfileReadinessCard
            percent={profileReadiness.percent}
            message={profileReadiness.message}
          />

          <ApplicationStatusCard items={applicationStatus} />

          <SavedJobsCard items={savedJobs} />
        </div>
      </div>
    </div>
  );
}