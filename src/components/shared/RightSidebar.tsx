import { UserRes } from "@/lib/user.dto";
import useUserAction from "@/services/user.service";
import React, { useEffect, useState } from "react";
import UserList from "../UserList";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start p-6">
        <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
        <UserList />
      </div>
    </section>
  );
};

export default RightSidebar;
