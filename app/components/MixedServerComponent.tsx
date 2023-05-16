import { cookies } from 'next/headers'

export default async function MixedServerComponent() {
  return (
    <>
      {JSON.stringify(cookies().getAll())}
      {JSON.stringify(
        await fetch('https://nextjs.org').then((res) => res.text())
      )}
    </>
  )
}
