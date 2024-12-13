import { useState } from "react"
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

export interface User {
    isSubscribed: boolean;
    name: string
}

export default function UseContext() {
    const [user] = useState<User>({
        isSubscribed: true,
        name: 'John'
    })
  return (
    <div>
        <h1>UseContext Demo</h1>
        <div>
            {/* Goal is to prevent prop drilling the user to Dashboard to Profile & Sidebar */}
            {/* <Dashboard user={user} /> */} 
            <DashboardContext.Provider value={user} >
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    </div>
  )
}
