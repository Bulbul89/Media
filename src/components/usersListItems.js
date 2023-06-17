import React from "react";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
function UsersListItems ( { user}) {
    const [ doRemoveUser, isLoading, error ] = useThunk(removeUser)
    const handleClick = () => {
        doRemoveUser(user)
    }
   return   <div className="mb-2 border rounded">
<div className="flex p-2 justify-between items-center cursor-pointer">
    <div className="flex flex-row items-center jus">
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
    </Button>
       { error && <div>Error deleting User.......</div>}
       {user.name}
    </div>
</div>
</div>
}

export default UsersListItems