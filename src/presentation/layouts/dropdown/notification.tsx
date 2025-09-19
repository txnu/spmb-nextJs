/** @format */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertTriangle, Bell, Calendar, Check, Mail, User } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  avatar?: string;
  icon: any;
}

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "message",
      title: "Pesan Baru dari John Doe",
      description: "Halo, bagaimana kabar proyek yang sedang dikerjakan?",
      time: "2 menit yang lalu",
      isRead: false,
      avatar: "/images/avatar1.jpg",
      icon: Mail,
    },
    {
      id: 2,
      type: "system",
      title: "Update Sistem",
      description: "Sistem akan maintenance pada pukul 02:00 WIB",
      time: "1 jam yang lalu",
      isRead: false,
      icon: AlertTriangle,
    },
    {
      id: 3,
      type: "reminder",
      title: "Meeting Reminder",
      description: "Meeting dengan tim development dalam 30 menit",
      time: "3 jam yang lalu",
      isRead: true,
      icon: Calendar,
    },
    {
      id: 4,
      type: "user",
      title: "Sarah mengundang Anda",
      description: 'Bergabung dalam workspace "Design System"',
      time: "1 hari yang lalu",
      isRead: true,
      avatar: "/images/avatar2.jpg",
      icon: User,
    },
  ]);

  const unreadNotifications = notifications.filter((n) => !n.isRead).length;

  const markNotificationAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const NotificationItem = ({
    notification,
  }: {
    notification: Notification;
  }) => {
    const IconComponent = notification.icon;
    return (
      <div
        className={`flex items-start space-x-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 ${
          !notification.isRead ? "bg-blue-50" : ""
        }`}
        onClick={() => markNotificationAsRead(notification.id)}>
        <div className='flex-shrink-0'>
          {notification.avatar ? (
            <Avatar className='h-8 w-8'>
              <AvatarImage src={notification.avatar} />
              <AvatarFallback>
                <IconComponent className='h-4 w-4' />
              </AvatarFallback>
            </Avatar>
          ) : (
            <div className='h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center'>
              <IconComponent className='h-4 w-4 text-gray-600' />
            </div>
          )}
        </div>
        <div className='flex-1 min-w-0'>
          <div className='flex items-center justify-between'>
            <p
              className={`text-sm font-medium ${
                !notification.isRead ? "text-gray-900" : "text-gray-700"
              }`}>
              {notification.title}
            </p>
            {!notification.isRead && (
              <div className='h-2 w-2 bg-blue-500 rounded-full ml-2'></div>
            )}
          </div>
          <p className='text-xs text-gray-500 mt-1 line-clamp-2'>
            {notification.description}
          </p>
          <p className='text-xs text-gray-400 mt-1'>{notification.time}</p>
        </div>
      </div>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='relative cursor-pointer rounded-full p-2 hover:bg-white/10 border-none outline-0'>
          <Bell
            size={20}
            className='hover:text-white'
          />
          {unreadNotifications > 0 && (
            <Badge
              variant='destructive'
              className='absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center rounded-full bg-red-500 text-white border-2 border-blue-800'>
              {unreadNotifications}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-80 p-0 mr-4 mt-2'>
        <div className='flex items-center justify-between p-3 border-b'>
          <h3 className='font-semibold text-sm'>Notifikasi</h3>
          {unreadNotifications > 0 && (
            <Button
              variant='ghost'
              size='sm'
              onClick={markAllNotificationsAsRead}
              className='text-xs text-blue-600 hover:text-blue-700 h-auto p-1'>
              <Check className='h-3 w-3 mr-1' />
              Tandai semua dibaca
            </Button>
          )}
        </div>
        <div className='max-h-80 overflow-y-auto'>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))
          ) : (
            <div className='p-4 text-center text-gray-500 text-sm'>
              Tidak ada notifikasi
            </div>
          )}
        </div>
        <div className='border-t bg-gray-50'>
          <Button
            variant='ghost'
            size='sm'
            className='w-full text-sm h-auto py-3 cursor-pointer'>
            Lihat Semua Notifikasi
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
