import { Suspense } from 'react'
import CookiesServerComponent from './components/CookiesServerComponent'
import { fetchTimestamp } from './fetchers/fetchTimestamp'

export default async function Page() {
  const timestamp = await fetchTimestamp()
  return (
    <>
      <h1>{timestamp}</h1>
      <Suspense>
        <CookiesServerComponent />
      </Suspense>
    </>
  )
}
