import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="Logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          User Timeline
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <Button>
            <div className="flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="Logout"
                width={24}
                height={24}
              />
            </div>
          </Button>
        </div>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="/assets/user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-light-1">Leanne Graham</p>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
