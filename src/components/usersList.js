import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";

function UsersList() {
    const dispatch = useDispatch();
    const { data , isLoading, error } = useSelector( (state) => {
        return state.users
    })
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error fetching data...</div>;
      }
    
      return <div>{data.length}</div>;
    }
    
    export default UsersList;