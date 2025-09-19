/** @format */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: string;
  isOnline: boolean;
}

export default function ChatDropdown() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Bagaimana progres project?",
      time: "2m",
      unreadCount: 3,
      avatar: "/images/avatar1.jpg",
      isOnline: true,
    },
    {
      id: 2,
      name: "Sarah Wilson",
      lastMessage: "Design sudah selesai, silakan dicek",
      time: "15m",
      unreadCount: 1,
      avatar: "/images/avatar2.jpg",
      isOnline: true,
    },
    {
      id: 3,
      name: "Tim Development",
      lastMessage: "Meeting besok jam 9 pagi",
      time: "1h",
      unreadCount: 0,
      avatar: "/images/avatar3.jpg",
      isOnline: false,
    },
    {
      id: 4,
      name: "Alex Johnson",
      lastMessage: "Terima kasih atas bantuannya!",
      time: "2h",
      unreadCount: 2,
      avatar: "/images/avatar4.jpg",
      isOnline: false,
    },
  ]);

  const unreadChats = chats.reduce((sum, chat) => sum + chat.unreadCount, 0);

  const clearChatUnread = (id: number) => {
    setChats((prev) =>
      prev.map((chat) => (chat.id === id ? { ...chat, unreadCount: 0 } : chat))
    );
  };

  const ChatItem = ({ chat }: { chat: Chat }) => (
    <div
      className='flex items-center space-x-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0'
      onClick={() => clearChatUnread(chat.id)}>
      <div className='relative flex-shrink-0'>
        <Avatar className='h-10 w-10'>
          <AvatarImage src={chat.avatar} />
          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
        </Avatar>
        {chat.isOnline && (
          <div className='absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full'></div>
        )}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center justify-between'>
          <p className='text-sm font-medium text-gray-900 truncate'>
            {chat.name}
          </p>
          <div className='flex items-center space-x-2'>
            <span className='text-xs text-gray-500'>{chat.time}</span>
            {chat.unreadCount > 0 && (
              <Badge
                variant='secondary'
                className='bg-blue-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center'>
                {chat.unreadCount}
              </Badge>
            )}
          </div>
        </div>
        <p className='text-sm text-gray-500 truncate mt-1'>
          {chat.lastMessage}
        </p>
      </div>
    </div>
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='relative cursor-pointer rounded-full p-3 hover:bg-white/10 text-white'>
          <MessageCircle size={20} />
          {unreadChats > 0 && (
            <Badge
              variant='destructive'
              className='absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center rounded-full bg-red-500 text-white border-2 border-blue-800'>
              {unreadChats}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-80 p-0 mr-4 mt-2'>
        <div className='flex items-center justify-between p-3 border-b'>
          <h3 className='font-semibold text-sm'>Pesan</h3>
          <Button
            variant='ghost'
            size='sm'
            className='text-xs text-blue-600 hover:text-blue-700 h-auto p-1'>
            Pesan Baru
          </Button>
        </div>
        <div className='max-h-80 overflow-y-auto'>
          {chats.length > 0 ? (
            chats.map((chat) => (
              <ChatItem
                key={chat.id}
                chat={chat}
              />
            ))
          ) : (
            <div className='p-4 text-center text-gray-500 text-sm'>
              Tidak ada pesan
            </div>
          )}
        </div>
        <div className='border-t bg-gray-50'>
          <Button
            variant='ghost'
            size='sm'
            className='w-full text-sm h-auto py-3 rounded-none cursor-pointer'>
            Buka Semua Chat
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
