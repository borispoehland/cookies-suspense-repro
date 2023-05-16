import { cookies } from 'next/headers'
import { Suspense } from 'react'
import CookiesServerComponent from './CookiesServerComponent'

export default async function NormalServerComponent() {
  return (
    <>
      {JSON.stringify(
        await fetch('https://nextjs.org').then((res) => res.text())
      )}
    </>
  )
}
