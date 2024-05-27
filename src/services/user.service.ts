import APIUrl from "@/constants/apiUrl"
import { UserRes } from "@/lib/user.dto"

export default function UserService() {
    const useUserListQuery = async () => {
        const response = await fetch(`${APIUrl.base}${APIUrl.users}`)

        if (!response.ok) {
            throw new Error("Network response was not ok")
        }

        const users = await response.json() as UserRes[]
        return users
    }

    return { useUserListQuery }
}