/** @format */
"use client";

import { useSidebar } from "@/components/context/sidebarContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import ChatDropdown from "./dropdown/chat";
import { NotificationDropdown } from "./dropdown/notification";

export default function Header() {
  const { toggle } = useSidebar();

  return (
    <header className='sticky w-full z-50 top-0 flex flex-row justify-between items-center bg-blue-800 border-b px-4 sm:px-8 py-3'>
      <div className='flex items-center gap-4'>
        <div>
          <button
            className='md:hidden p-2 border border-white rounded-lg text-white'
            onClick={toggle}>
            <Menu size={20} />
          </button>
        </div>
        <div>
          <h3 className='font-bold text-white text-2xl hidden md:block'>
            Dashboard
          </h3>
        </div>
      </div>

      <div className='flex items-center gap-2 rounded-full text-white'>
        <NotificationDropdown />
        {/* Chat Dropdown */}
        <ChatDropdown />

        <div>
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger
              className='flex items-center'
              asChild>
              <Button
                variant='ghost'
                className='p-3 rounded-full hover:bg-transparent focus-visible:ring-0 cursor-pointer'>
                <Image
                  src='/images/vector.jpg'
                  width={36}
                  height={36}
                  alt='profile'
                  className='rounded-full object-cover'
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-56 mr-4 mt-2'
              align='start'>
              <DropdownMenuLabel className='font-bold'>
                Akun Saya
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profil <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Pengaturan
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
