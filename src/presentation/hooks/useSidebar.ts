/** @format */

import { useCallback, useState } from "react";

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggleSidebar, closeSidebar };
}
