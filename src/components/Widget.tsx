import { Rocket, X, Check } from "lucide-react";
import { Notification } from "./Notification";

export function Widget(){
  return(
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

{/*       Recent Section */}
      <div>
        <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification 
            text="Você recebeu um convite para fazer parte da empresa Rocketseat."
            icon={Rocket}
            hasActions
          />
          <Notification 
            text="Você recebeu um convite para fazer parte da empresa Rocketseat."
            icon={Rocket}
          />
        </div>
      </div>

      <div>
        <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification 
            text="Você recebeu um convite para fazer parte da empresa Rocketseat."
            icon={Rocket}
          />
        </div>
      </div>
    </div>
  )
}