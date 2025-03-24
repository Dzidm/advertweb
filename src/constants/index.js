import {FileIcon, Home, PlusIcon, Settings, User} from "lucide-react"

export default {
    NAVLINKS: [
{
    name: "Overview",
    path: "/dashboard",
    icon: Home,
},         
{
    name: "CreateAd",
    path: "/dashboard/createad",
    icon: PlusIcon,
},         
{
    name: "Vendor Ads",
    path: "/dashboard/vendorads",
    icon: FileIcon,
},         
{
    name: "Profile",
    path: "/dashboard",
    icon: User,
},         
{
    name: "Settings",
    path: "/dashboard",
    icon: Settings,
},              
    ]
}