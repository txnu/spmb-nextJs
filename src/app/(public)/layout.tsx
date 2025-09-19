/** @format */

import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='min-h-screen flex items-center'>{children}</div>;
}
