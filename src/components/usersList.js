import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import  Button  from "./Button"
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import React from "react";


function UsersList() {
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const [loadingUsersError, setLoadingUsersError] = useState(null);
    
   const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)

    // const [creatingUsers, setCreatingUsers] = useState(false)
    // const [creatingUsersError, setCreatingUsersError]= useState(null)
    const [ doCreateUsers, creatingUsers, creatingUsersError] = useThunk(addUser)
   // const dispatch = useDispatch();
    const {  data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        // setIsLoadingUsers(true);
        // dispatch(fetchUsers())
        //     .unwrap()
        // //     .then(() => {
        // //    setIsLoadingUsers(false)
        // //     })
        //     .catch((err) => {
        //         setLoadingUsersError(err)
        //        // setIsLoadingUsers(false)
        //     })
        //     .finally(() => {
        //         setIsLoadingUsers(false)
        // })

        doFetchUsers()
    }, [doFetchUsers])

    const handleUserAdd = () => {
        // setCreatingUsers(true)
        // dispatch(addUser())
        //     .unwrap()
        //     // .then(() => {
        //     // creatingUsers(true)
        //     // })
        //     .catch((err) => {
        //         setCreatingUsersError(err)
        //     })
        //     .finally(() => {
        //         setCreatingUsers(false)
        //     })
        doCreateUsers()
    }

    let content;
   if(isLoadingUsers){
       content = <Skeleton times={6} className="h-10 w-full"/>
   } else if
       (loadingUsersError) {
       content = <div>
             error fetching data.....
         </div>
   } else {
   content = data.map( (user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>
    })

    }
   
    // const renderedUsers = data.map( (user) => {
    //     return <div key={user.id} className="mb-2 border rounded">
    //         <div className="flex p-2 justify-between items-center cursor-pointer">
    //             {user.name}
    //         </div>
    //     </div>
    // })

    
    
    return (<div> 
        <div  className="flex flex-row justify-between m-3">  
            <h1 className="m-2 text-xl">Users</h1>
            {/* {
                creatingUsers
                    ? "CreatingUsers..."
                    : <Button onClick={handleUserAdd}>Add User++</Button>
            
            } */}

            <Button loading={creatingUsers} onClick={handleUserAdd}> Add User +++</Button>
            {creatingUsersError && "Error creating User ..."}
        </div>
       {content}
    </div>) 
   
   
}

export default UsersList;
