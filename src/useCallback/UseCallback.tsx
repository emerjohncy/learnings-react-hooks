import { useCallback, useState } from "react";
import { shuffle } from "./utils";
import Search from "./Search";

const allUsers = [
    'alice',
    'bob',
    'charlie',
    'david',
    'eve',
]

export default function UseCallback() {
    const [users, setUsers] = useState<string[]>(allUsers);

      const handleShuffle = () => {
        const shuffled = shuffle(allUsers); // Call the external shuffle function
        setUsers(shuffled); // Update state with the shuffled array
      };

    // Problem 1: Search component re-renders even if (i) we are just shuffling the users and (ii) Search component is memoized
    //   const handleSearch = (text: string) => {
    //     const filteredUsers = allUsers.filter((user) => user.includes(text));
    //     setUsers(filteredUsers);
    //   }

    // Solution to Problem 1: use useCallback
    // const handleSearch = useCallback((text: string) => {
    //         const filteredUsers = allUsers.filter((user) => user.includes(text));
    //         setUsers(filteredUsers);
    //       }, [])

    // Now, I want to log the first user in the list in our console before doing any filtering
    // Solution: add users to the dependency array
    const handleSearch = useCallback((text: string) => {
        console.log(users[0]);
            const filteredUsers = allUsers.filter((user) => user.includes(text));
            setUsers(filteredUsers);
          }, [users])

  return (
    <div>
        <h1>UseCallback Demo</h1>
        <div>
            <button onClick={handleShuffle}>
                Shuffle
            </button>
            <Search onChange={handleSearch}/>
        </div>
        <div>
            <ul style={{ listStyleType: 'none' }}>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
