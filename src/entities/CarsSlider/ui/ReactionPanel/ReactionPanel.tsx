import { HeartIcon } from "./assets/HeartIcon";
import { XIcon } from "./assets/XIcon";

interface ReactionPanelProps {
  onDecline: () => void;
  onLike: () => void;
}

export function ReactionPanel({ onDecline, onLike }: ReactionPanelProps) {
  const buttons = [
    {
      icon: <XIcon className="w-7 h-7 md:w-8 md:h-8" />,
      color: "text-gray-500",
      onClick: onDecline,
      label: "Nope",
    },
    {
      icon: <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      color: "text-rose-500",
      onClick: onLike,
      label: "Like",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 py-4">
      {buttons.map((button) => (
        <button
          key={button.label}
          onClick={button.onClick}
          className="group flex flex-col items-center gap-2 transition-transform hover:scale-110 active:scale-95"
          aria-label={button.label}
        >
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center hover:bg-slate-50 transition-colors ${button.color}`}
          >
            {button.icon}
          </div>

          <span className="hidden md:block text-sm font-medium text-slate-700">
            {button.label}
          </span>
        </button>
      ))}
    </div>
  );
}
