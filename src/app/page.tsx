
import menu from "@/data/menu";
import Image from 'next/image';

import { MenuList } from "@/components/menu/MenuList";

export default function Home() {
  return (
    <>
      <MenuList menu={menu} />
      
    </>
  )
}