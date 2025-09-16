/** @format */
"use client";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

const Loading = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='flex justify-center items-center'>
        <Spinner
          variant='infinite'
          size={50}
        />
      </div>
    </div>
  );
};
export default Loading;
