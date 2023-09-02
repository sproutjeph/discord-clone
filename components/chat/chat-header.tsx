import { Hash } from "lucide-react";

import { ChatVideoButton } from "./chat-video-button";
import { UserAvatar } from "../base-ui/user-avatar";
import { SocketIndicator } from "../base-ui/socket-indicator";
import { MobileToggle } from "../base-ui/mobile-toggle";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="flex items-center h-12 px-3 font-semibold border-b-2 text-md border-neutral-200 dark:border-neutral-800">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 mr-2 text-zinc-500 dark:text-zinc-400" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="w-8 h-8 mr-2 md:h-8 md:w-8" />
      )}
      <p className="font-semibold text-black text-md dark:text-white">{name}</p>
      <div className="flex items-center ml-auto">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};
