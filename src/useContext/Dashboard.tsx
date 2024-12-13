import Profile from "./Profile";
import Sidebar from "./Sidebar";
// import { User } from "./UseContext";

// interface DashboardProps {
//     user: User
// }

// export default function Dashboard({ user }: DashboardProps) {
//   return (
//     <div>
//         <Sidebar user={user} />
//         <Profile user={user} />
//     </div>
//   )
// }


// We want user to be accessible anywhere from the tree by creating a context and have it hold our user
// And then wrap everything in dashboard with that context

export default function Dashboard() {
  return (
    <div>
        <Sidebar />
        <Profile />
    </div>
  )
}