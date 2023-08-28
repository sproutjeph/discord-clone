"use client";

import { FC } from "react";
import { ActionTooltip } from "../base-ui/action-tooltip";
import { Plus } from "lucide-react";

interface NavigationActionProps {}

const NavigationAction: FC<NavigationActionProps> = ({}) => {
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button onClick={() => {}} className="flex items-center group">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="transition group-hover:text-white text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
