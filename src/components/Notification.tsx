import { X, Check } from "lucide-react";
import { ElementType } from "react";

interface NotificationProps {
  icon: ElementType;
  text: string;
  hasActions?: boolean;
  onCancelAction?: ()=> void;
  onSubmitAction?: ()=> void;
}

export function Notification({text, icon: Icon, hasActions = false, onCancelAction, onSubmitAction}: NotificationProps){
  return(
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
      <Icon className="w-6 h-6 text-violet-500 mt-3"  />
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
          {text}
        </p>
        <div className=" text-xs text-zinc-400 flex items-center gap-1">
          <span>Convite</span>
          <span>Há 3 min</span>
        </div>
      </div>

      {hasActions && (
        <div className="flex gap-2 self-center">
          <button 
            onClick={onCancelAction}
            className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800"
          >
            <X className="w-3 h-3 text-zinc-50" />
          </button>
          <button 
            onClick={onSubmitAction}
            className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600"
          >
            <Check />
          </button>
        </div>
      )}
    </div>
  )
}