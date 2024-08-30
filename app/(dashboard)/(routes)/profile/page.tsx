import { FormProfile } from '@/components/Dashboard/FormProfile'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className='pb-16 lg:pb-32'>
        <div className='flex flex-col gap-8 items-center'>
            <div className='flex justify-between gap-3 md:gap-0 items-center bg-card w-full lg:w-[700px] py-3 px-4 md:py-4 md:px-5 border-border border-2 rounded-2xl'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-base md:text-xl text-foreground'>Produk yang Anda Jual</p>
                    <span className='text-sm md:text-base text-muted-foreground'>2 Produk Aktif</span>
                </div>
                <div className='w-fit h-fit flex items-center justify-center'>
                     <Button size={"basic"} className='text-xs md:text-sm px-3 md:px-6 py-2 rounded-2xl font-normal'>Lihat Produk</Button>
                </div>
            </div>

            <div className='w-full lg:w-[700px] flex flex-col '>
                <h1 className='text-foreground md:text-xl font-semibold'>Informasi Akun</h1>
                <div className='flex justify-center'>
                 <Image width={100} height={100} src={'/images/pfp-profile.png'} alt='profil' className='w-36 h-36 rounded-full bg-center bg-cover my-9'></Image> 
                </div>
                <FormProfile/>
            </div>
        </div>
    </section>
  )
}
