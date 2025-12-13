import { HeartIcon } from "./assets/HeartIcon";
import { XIcon } from "./assets/XIcon";

interface ReactionPanelProps {
  onDecline: () => void;
  onLike: () => void;
}

export function ReactionPanel({ onDecline, onLike }: ReactionPanelProps) {
  const buttons = [
    {
      icon: <XIcon className="w-8 h-8" />,
      color: "text-gray-500",
      onClick: onDecline,
      label: "Nope",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      color: "text-rose-500",
      onClick: onLike,
      label: "Like",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6 pt-6">
      {buttons.map((button) => (
        <button
          key={button.label}
          onClick={button.onClick}
          className="group flex flex-col items-center gap-2 transition-transform hover:scale-110 active:scale-95"
          aria-label={button.label}
        >
          <div
            className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors ${button.color}`}
          >
            {button.icon}
          </div>

          <span className="text-sm font-medium text-slate-700">
            {button.label}
          </span>
        </button>
      ))}
    </div>
  );
}
