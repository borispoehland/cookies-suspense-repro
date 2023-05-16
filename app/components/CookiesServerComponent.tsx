import { cookies } from 'next/headers'

export default function CookiesServerComponent() {
  return <>{JSON.stringify(cookies().getAll())}</>
}
