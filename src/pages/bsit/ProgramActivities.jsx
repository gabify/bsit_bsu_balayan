import React from "react";

// Tailwind classes per delivery mode
const MODE_STYLES = {
  Zoom: "bg-blue-100 text-blue-800",
  "Google Meet": "bg-emerald-100 text-emerald-800",
  Hybrid: "bg-violet-100 text-violet-800",
};

const activities = [
  {
    day: 1,
    date: "2025-11-24",
    mode: "Zoom",
    title: "Opening Program",
    sessions: [{ time: "9:00 AM" }],
    links: [
      {
        label: "Join Zoom Meeting",
        href: "https://us06web.zoom.us/j/82654946389?pwd=6Z8iEgbT9z2bcPItaItbniURru0bCy.1",
      },
    ],
    details: ["Meeting ID: 826 5494 6389", "Passcode: 926964"],
  },
  {
    day: 2,
    date: "2025-11-25",
    mode: "Google Meet",
    title: "Class Observation & Interview",
    sessions: [
      {
        name: "Class observation",
        time: "1:00 PM",
        participants: "Faculty members and students",
      },
      {
        name: "Interview",
        time: "2:00 PM",
        participants:
          "Students, faculty members, alumni, and extension beneficiaries",
      },
    ],
  },
  {
    day: 3,
    date: "2025-11-26",
    mode: "Google Meet",
    title: "Virtual Campus Tour & Interview",
    sessions: [{ time: "8:30 AM" }],
    // TODO: replace '#' with the real Google Meet URL
    links: [{ label: "Join Google Meet (Link 1)", href: "#" }],
    details: [
      "Campus facilities and infrastructure showcase",
      "Student testimonials and interviews",
    ],
  },
  {
    day: 4,
    date: "2025-11-27",
    title: "Document Verification",
    sessions: [{ time: "9:00 AM" }],
    details: [
      "Review of academic records",
      "Compliance documentation",
      "Quality assurance materials",
    ],
    location: "Accreditation Room",
  },
  {
    day: 5,
    date: "2025-11-28",
    mode: "Hybrid",
    title: "Faculty Presentation",
    sessions: [{ time: "10:00 AM" }],
    details: [
      "Research and extension programs",
      "Teaching methodologies",
      "Innovation showcases",
      "Q&A session",
    ],
  },
];

const parseDate = (iso) => new Date(`${iso}T00:00:00`);

const DateBlock = ({ iso, day }) => {
  const d = parseDate(iso);
  return (
    <div className="w-20 shrink-0 text-center sm:w-28">
      <p className="text-sm font-medium text-slate-500">
        {d.toLocaleDateString("en-US", { weekday: "long" })}
      </p>
      <p className="text-5xl font-bold leading-none text-slate-900 sm:text-6xl">
        {d.getDate()}
      </p>
      <p className="mt-1 text-sm text-slate-600">
        {d.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </p>
      <p className="mt-2 inline-block rounded-full bg-yellow-900 px-3 py-0.5 text-xs font-semibold text-yellow-50">
        Day {day}
      </p>
    </div>
  );
};

const ActivityCard = ({ item }) => {
  const multi = item.sessions.length > 1;

  return (
    <article className="flex-1 rounded-lg border border-slate-200 border-t-4 border-t-yellow-900 bg-white p-5 shadow-sm sm:p-6">
      <header className="flex flex-wrap items-start justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          {item.title}
        </h2>
        {item.mode && (
          <span
            className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
              MODE_STYLES[item.mode] ?? "bg-slate-100 text-slate-700"
            }`}
          >
            {item.mode}
          </span>
        )}
      </header>

      {/* Time(s) */}
      {multi ? (
        <ul className="mt-4 space-y-3">
          {item.sessions.map((s) => (
            <li
              key={s.name}
              className="rounded-md border-l-4 border-yellow-900 bg-yellow-50 px-4 py-3"
            >
              <p className="font-medium text-slate-900">
                {s.name}
                <span className="ml-2 font-normal text-slate-600">
                  {s.time}
                </span>
              </p>
              {s.participants && (
                <p className="mt-1 text-sm text-slate-600">
                  Participants: {s.participants}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm font-medium text-slate-600">
          {item.sessions[0].time}
        </p>
      )}

      {/* Details */}
      {item.details && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 marker:text-yellow-900">
          {item.details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}

      {item.location && (
        <p className="mt-4 text-sm text-slate-700">
          <span className="font-medium">Location:</span> {item.location}
        </p>
      )}

      {/* Links */}
      {item.links && (
        <div className="mt-5 flex flex-wrap gap-3">
          {item.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-yellow-900 px-4 py-2 text-sm font-semibold text-yellow-50 hover:bg-yellow-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-900 focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

const ProgramActivities = () => {
  return (
    <section className="bg-slate-100 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="inline-block border-b-4 border-yellow-900 pb-1 text-3xl font-bold text-slate-900">
          Program Activities
        </h1>
        <p className="mt-2 text-slate-600">24 – 28 November 2025</p>

        <ol className="mt-10 space-y-8">
          {activities.map((item) => (
            <li key={item.day} className="flex gap-4 sm:gap-6">
              <DateBlock iso={item.date} day={item.day} />
              <ActivityCard item={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProgramActivities;
