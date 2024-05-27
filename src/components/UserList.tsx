import { default as UserService } from "@/services/user.service";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const UserList = async (props: Props) => {
  const users = await UserService().useUserListQuery();

  return (
    <div>
      <div className="flex flex-col justify-center space-y-4 p-6">
        {users.map((user) => (
          <Link
            href={`/profile/${user.id}`}
            className="cursor-pointer"
            key={user.id}
          >
            <div
              className="
                flex items-center justify-between p-4
                hover:bg-light-3
                transition-colors
                rounded-lg
            "
            >
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="assets/user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-heading5-bold text-light-1">{user.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
