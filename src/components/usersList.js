import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import React from "react";

function UsersList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const { data, isLoading, error } = useSelector((state) => {
        return state.users
    });
   if(isLoading){
        return <div>
            Loading.....
        </div>
    } 
    if(error){
       return <div>
            error fetching data.....
        </div>
    }

    return (<div> 
       usersList
    </div>) 
   
   
}
export default UsersList;