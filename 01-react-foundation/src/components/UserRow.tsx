import { memo } from "react"
import type { User } from "../interfaces"

interface Props {
  user: User
}

export const UserRow = memo(function UserRow({user}: Props) {
  const { avatar, email, first_name, last_name } = user

  return (
    <tr>
      <td><img style={{ width: "50px" }} src={avatar} alt="user avatar" /></td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  )
})