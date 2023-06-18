import React from "react";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
function UsersListItems ( { user}) {
    const [ doRemoveUser, isLoading, error ] = useThunk(removeUser)
    const handleClick = () => {
        doRemoveUser(user)
    }

    const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
    </Button>
       { error && <div>Error deleting User.......</div>}
       {user.name}
       </>
   return  (
    <ExpandablePanel header={header}>
        content!!!!!!!!!!!
    </ExpandablePanel>
   )
        
    


}

export default UsersListItems