/** @format */
"use client";

import { useSiswa } from "@/presentation/hooks/useSiswa";
import { ChartAreaInteractive } from "@/presentation/layouts/ChartAreaInteractive";
import { ChartLineInteractive } from "@/presentation/layouts/ChartLineInteractive";
import { ChartPieDonutText } from "@/presentation/layouts/PieChart";
import { DollarSign, User, Users, Wallet } from "lucide-react";

export default function Home() {
  const { siswa } = useSiswa();
  return (
    <div className='flex flex-col w-full px-4'>
      {/* Content */}
      <div className='flex-1 py-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
          {/* Total Pegawai */}
          <div className='border-l-4 border-green-300 bg-white rounded-lg  overflow-hidden'>
            <div className='flex flex-row items-center justify-between px-4 py-6'>
              <div>
                <h5 className='font-bold text-sm uppercase'>Total pegawai</h5>
                <p className='text-xl text-gray-400 font-bold'>85</p>
              </div>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <Users />
              </div>
            </div>
          </div>

          {/* Total Siswa */}
          <div className='border-l-4 border-blue-600 bg-white rounded-lg  overflow-hidden'>
            <div className='flex flex-row items-center justify-between px-4 py-6'>
              <div className='flex flex-col'>
                <div>
                  <h5 className='font-bold text-sm uppercase'>Total Siswa</h5>
                </div>
                <div>
                  <p className='text-xl text-gray-400 font-bold'>
                    {siswa.length}
                  </p>
                </div>
              </div>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <User />
              </div>
            </div>
          </div>

          {/* Tabungan siswa */}
          <div className='border-l-4 border-purple-500 bg-white rounded-lg  overflow-hidden'>
            <div className='flex flex-row items-center justify-between px-4 py-6'>
              <div className='flex flex-col'>
                <div>
                  <h5 className='font-bold text-sm uppercase'>
                    Tabungan Siswa
                  </h5>
                </div>
                <div>
                  <p className='text-xl text-gray-400 font-bold'>523</p>
                </div>
              </div>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <Wallet />
              </div>
            </div>
          </div>

          {/* Keuangan */}
          <div className='border-l-4 border-red-600 bg-white rounded-lg overflow-hidden'>
            <div className='flex flex-row items-center justify-between px-4 py-6'>
              <div className='flex flex-col'>
                <div>
                  <h5 className='font-bold text-sm uppercase'>Keuangan</h5>
                </div>
                <div>
                  <p className='text-xl text-gray-400 font-bold'>
                    Rp10.245.000
                  </p>
                </div>
              </div>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <DollarSign />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Statistik */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-8'>
        <div className='grid grid-cols-1 gap-4'>
          <div>
            <ChartAreaInteractive />
          </div>
          <div>
            <ChartLineInteractive />
          </div>
        </div>

        <div className='max-h-[500px]'>
          {" "}
          <ChartPieDonutText />
        </div>
      </div>
    </div>
  );
}
