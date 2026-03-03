import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

interface HobbyCardProps {
  title: string;
  icon: IconProp;
  description: ReactNode;
}

export function HobbyCard({ title, icon, description }: HobbyCardProps) {
  return (
    <details
      className="
        group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        open:shadow-xl
      "
    >
      <summary className="list-none cursor-pointer p-5 md:p-6">
        <span className="hidden" />

        <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
          <div className="transition-transform duration-300 group-hover:scale-105 group-open:scale-105">
            <FontAwesomeIcon
              icon={icon}
              className="w-16 h-16 md:w-20 md:h-20 text-slate-800 transition-transform duration-300"
            />
          </div>

          <p className="text-center text-base md:text-lg font-semibold text-slate-900 tracking-tight">
            {title}
          </p>

          <div className="mt-1 transition-transform duration-200 group-open:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </summary>

      <div className="px-6 pb-6">
        <div className="relative">
          {/* glass card */}
          <div
            className="
              rounded-2xl border border-white/40 bg-white/70
              backdrop-blur-md shadow-lg
              p-4 md:p-5 text-sm md:text-base text-slate-700 leading-relaxed
              transition-all duration-300
            "
          >
            {description}
          </div>

          {/* subtle fade overlay hint (only visible when closed) */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-b from-white/40 via-white/30 to-white/90
              opacity-100 transition-opacity duration-300
              group-open:opacity-0
            "
          />
        </div>
      </div>
    </details>
  );
}
