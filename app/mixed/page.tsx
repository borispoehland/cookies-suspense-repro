import { Suspense } from 'react'
import MixedServerComponent from '../components/MixedServerComponent'
import { fetchTimestamp } from '../fetchers/fetchTimestamp'

export default async function Page() {
  const timestamp = await fetchTimestamp()
  return (
    <>
      <h1>{timestamp}</h1>
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <MixedServerComponent />
      </Suspense>
    </>
  )
}
