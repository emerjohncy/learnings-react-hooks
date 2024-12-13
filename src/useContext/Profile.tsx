// import { User } from "./UseContext"

import { useUserContext } from "./context"

// import { useContext } from "react"
// import { DashboardContext } from "./context"

// interface ProfileProps {
//     user: User
// }

// export default function Profile({ user }: ProfileProps) {
//   return (
//     <div>
//         <h3>Profile</h3>
//         <h4>{user.name}</h4>
//     </div>
//   )
// }


// export default function Profile() {
//     const user = useContext(DashboardContext)

//     return (
//       <div>
//           <h3>Profile</h3>
//           <h4>{user.name}</h4>
//       </div>
//     )
//   }

export default function Profile() {
    const user = useUserContext();

    return (
      <div>
          <h3>Profile</h3>
          <h4>{user.name}</h4>
      </div>
    )
  }