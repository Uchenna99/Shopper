import { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import { apiRequest } from "../../lib/api";
import { HOST } from "../../utils/Host";



const UserSettings = () => {
    const { user } = useAppContext();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [saving, setSaving] = useState(false);
    const userPayload = { id: user!.id, phoneNumber: phoneNumber}

    const handleSaveChanges = async()=>{
        setSaving(true);

        apiRequest("POST", `${HOST}/api/v1/user/update-user`, userPayload)
        .then((response)=>{
            console.log(response.data);
        })
        .finally(()=> setSaving(false))
    };
    
  return (
    <div className="space-y-6">
        <div className="rounded-lg border border-gray-300 bg-white text-black-text font-monts-medium shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-lg font-monts-semi-bold">Profile Information</h2>
            <p className="text-sm">Update your account details</p>
        </div>
        <div className="p-6 pt-0">
            <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label className="block text-sm mb-2">
                    First Name
                </label>
                <input
                    type="text"
                    value={user?.firstName}
                    onChange={()=>{}}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                </div>
                <div>
                <label className="block text-sm mb-2">
                    Last Name
                </label>
                <input
                    type="text"
                    value={user?.lastName}
                    onChange={()=>{}}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                </div>
            </div>
            <div>
                <label className="block text-sm mb-2">
                Email Address
                </label>
                <input
                type="email"
                value={user?.email}
                onChange={()=>{}}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <div>
                <label className="block text-sm mb-2">
                Phone Number
                </label>
                <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                defaultValue={user?.phone}
                onChange={(e)=> setPhoneNumber(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <button 
                onClick={handleSaveChanges}
                disabled={saving}
                className="inline-flex items-center justify-center rounded-4xl text-sm font-medium transition-all duration-200 outline-none 
                disabled:pointer-events-none disabled:opacity-50 bg-orange-400 text-white hover:bg-orange-500 shadow-sm active:scale-[0.98] 
                h-10 px-4 cursor-pointer">
                Save Changes
            </button>
            </form>
        </div>
        </div>


        <div className="rounded-lg border border-gray-300 bg-white text-black-text font-monts-medium shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-lg font-monts-semi-bold">Change Password</h2>
            <p className="text-sm">Update your password</p>
        </div>
        <div className="p-6 pt-0">
            <form className="space-y-4">
            <div>
                <label className="block text-sm mb-2">
                Current Password
                </label>
                <input
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <div>
                <label className="block text-sm mb-2">
                New Password
                </label>
                <input
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <div>
                <label className="block text-sm mb-2">
                Confirm New Password
                </label>
                <input
                type="password"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>
            <button 
                onClick={(e)=>{e.preventDefault()}}
                className="inline-flex items-center justify-center rounded-4xl text-sm font-medium transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50 bg-orange-400 text-white hover:bg-orange-500 shadow-sm active:scale-[0.98] h-10 px-4">
                Update Password
            </button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default UserSettings;