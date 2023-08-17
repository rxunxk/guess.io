import { useEffect } from "react";
import { useStore } from "../store/store";

const UserList = () => {
  const { usersArray } = useStore();

  useEffect(() => {
    console.log(usersArray);
  }, []);

  return (
    <div className="w-1/3 max-sm:w-full max-md:w-16 max-sm:h-[180px] max-sm:mb-4  bg-neutral-200 rounded-md">
      <div className="flex flex-col m-2 rounded-md h-max overflow-auto">
        {usersArray?.map((user, index) => {
          return (
            <div
              key={index}
              className="flex flex-row bg-white rounded-md p-2 mb-2 "
            >
              <div className="flex flex-row flex-center items-center gap-2">
                <img
                  src={`https://api.multiavatar.com/${[index]}.png`}
                  alt="avatar"
                  width="45px"
                  height="45px"
                />
                {user?.username}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
