import { Outlet } from "react-router-dom"

export default function TinAggregation() {
    return (
        <div style={{background:'#fff',minHeight:'650px'}}>
            <Outlet />
        </div>
    )
}