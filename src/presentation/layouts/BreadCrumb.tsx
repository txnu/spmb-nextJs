/** @format */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
  isClickable?: boolean;
}

// Mapping untuk menerjemahkan pathname ke label yang sesuai
const pathToLabelMap: Record<string, string> = {
  dashboard: "Dashboard",
  spmb: "SPMB",
  siswa: "Siswa",
  "menu-siswa": "Menu Siswa",
  absensi: "Absensi",
  nilai: "Nilai",
  pegawai: "Pegawai",
  "menu-pegawai": "Menu Pegawai",
  jadwal: "Jadwal",
  "spp-pembayaran": "SPP dan Pembayaran",
  "tagihan-siswa": "Tagihan Siswa",
  "riwayat-pembayaran": "Riwayat Pembayaran",
  tunggakan: "Tunggakan",
};

const dropdownOnlyPaths = new Set([
  "menu-siswa",
  "menu-pegawai",
  "spp-pembayaran",
  "inventaris",
  "perpustakaan",
]);

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  breadcrumbs.push({
    label: "Dashboard",
    href: "/dashboard",
    isActive: pathname === "/dashboard",
    isClickable: true,
  });

  if (pathname !== "/dashboard") {
    let currentPath = "";

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathToLabelMap[segment] || segment;
      const isLast = index === segments.length - 1;
      const isDropdownOnly = dropdownOnlyPaths.has(segment);

      breadcrumbs.push({
        label,
        href: currentPath,
        isActive: isLast,
        isClickable: !isDropdownOnly,
      });
    });
  }

  return breadcrumbs;
}

export function BreadCrumbUI() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <Breadcrumb className='py-4 px-3'>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = breadcrumb.isActive;

          return (
            <div
              key={breadcrumb.href}
              className='flex items-center'>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                ) : breadcrumb.isClickable ? (
                  <BreadcrumbLink asChild>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <span className='text-muted-foreground cursor-default'>
                    {breadcrumb.label}
                  </span>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
