import NormalServerComponent from '../components/NormalServerComponent'
import { fetchTimestamp } from '../fetchers/fetchTimestamp'

export default async function Page() {
  const timestamp = await fetchTimestamp()
  return (
    <>
      <h1>{timestamp}</h1>
      {/* @ts-expect-error Async Server Component */}
      <NormalServerComponent />
    </>
  )
}
