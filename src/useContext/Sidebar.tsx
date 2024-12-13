// import { User } from "./UseContext"

import { useUserContext } from "./context"

// import { useContext } from "react"
// import { DashboardContext } from "./context"

// interface SidebarProps {
//     user: User
// }

// export default function Sidebar({ user }: SidebarProps) {
//   return (
//     <div>
//         <h3>Sidebar</h3>
//         <div>Name: {user.name}</div>
//         <div>Subscription Status: {user.isSubscribed ? 'Yes' : 'No'}</div>
//     </div>
//   )
// }


// export default function Sidebar() {
//     const user = useContext(DashboardContext)
//   return (
//     <div>
//         <h3>Sidebar</h3>
//         <div>Name: {user.name}</div>
//         <div>Subscription Status: {user.isSubscribed ? 'Yes' : 'No'}</div>
//     </div>
//   )
// }

export default function Sidebar() {
    const user = useUserContext()
  return (
    <div>
        <h3>Sidebar</h3>
        <div>Name: {user.name}</div>
        <div>Subscription Status: {user.isSubscribed ? 'Yes' : 'No'}</div>
    </div>
  )
}