/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Link from "next/link";

const FormSchema = z.object({
  nik_nisn: z.string().min(2, { message: "NIK / NISN minimal 2 karakter." }),
  email: z.string().email({ message: "Email tidak valid." }),
  nama_siswa: z.string().min(2, { message: "Nama siswa minimal 2 karakter." }),
  jenis_kelamin: z.enum(["Laki-laki", "Perempuan"], {
    message: "Jenis kelamin harus dipilih.",
  }),
  ttl: z.string().min(2, { message: "Tempat, tanggal lahir wajib diisi." }),
  alamat: z.string().min(2, { message: "Alamat wajib diisi." }),
  no_hp: z.string().min(2, { message: "Nomor HP wajib diisi." }),
  kelas: z.string().min(1, { message: "Kelas wajib dipilih." }),
  orang_tua: z.string().min(2, { message: "Nama orang tua wajib diisi." }),
  status: z.enum(["Aktif", "Lulus"]).refine((val) => !!val, {
    message: "Status harus dipilih.",
  }),
});

export default function TambahPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nik_nisn: "",
      email: "",
      nama_siswa: "",
      jenis_kelamin: "Laki-laki",
      ttl: "",
      alamat: "",
      no_hp: "",
      kelas: "",
      orang_tua: "",
      status: "Aktif",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("Data siswa berhasil disubmit", {
      description: (
        <pre className='mt-2 w-[320px] rounded-md bg-neutral-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className='w-full overflow-hidden bg-white/75 px-8 py-6 rounded-lg'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Kolom kiri */}
          <div className='space-y-6'>
            <FormField
              control={form.control}
              name='nik_nisn'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIK / NISN</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='NIK / NISN'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='nama_siswa'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Siswa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Nama siswa'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Email'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='orang_tua'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Orang Tua</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Nama orang tua / wali'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Kolom kanan */}
          <div className='space-y-6'>
            <FormField
              control={form.control}
              name='ttl'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempat, Tanggal Lahir</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Contoh: Jakarta, 1 Jan 2005'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='alamat'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Alamat lengkap'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='no_hp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No HP</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='08xxxxxxxxxx'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col lg:flex-row justify-center items-start md:justify-start gap-4 md:gap-6'>
              <FormField
                control={form.control}
                name='jenis_kelamin'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className='flex gap-4'>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem
                            value='Laki-laki'
                            id='lk'
                          />
                          <label htmlFor='lk'>Laki-laki</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem
                            value='Perempuan'
                            id='pr'
                          />
                          <label htmlFor='pr'>Perempuan</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='kelas'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kelas</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih kelas' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='X A'>X A</SelectItem>
                        <SelectItem value='X B'>X B</SelectItem>
                        <SelectItem value='XI A'>XI A</SelectItem>
                        <SelectItem value='XI B'>XI B</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih status' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Aktif'>Aktif</SelectItem>
                        <SelectItem value='Lulus'>Lulus</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='col-span-1 md:col-span-2 flex justify-end items-center'>
            <div className='flex items-center gap-4'>
              <Link href='/siswa'>
                <Button
                  type='button'
                  className='w-full bg-white hover:bg-gray-100 text-black border cursor-pointer'>
                  Batal
                </Button>
              </Link>
              <Link href='#'>
                <Button
                  type='submit'
                  className='w-full cursor-pointer'>
                  Submit
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
