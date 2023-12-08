'use server';

import Image from 'next/image';
 
type Props = {
  params: {},
  searchParams: {
    i: string;
  }
}
export default async function Page({ params, searchParams }: Props) {

  


  return <img src={searchParams.i} alt="" width="100%"/>
}