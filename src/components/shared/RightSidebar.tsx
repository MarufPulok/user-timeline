import UserList from "../UserList";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start p-6">
        <h3 className="text-heading4-medium text-light-1">All Users</h3>
        <UserList />
      </div>
    </section>
  );
};

export default RightSidebar;
