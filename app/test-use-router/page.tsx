'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function TestUseRouterPage() {
  const router = useRouter()

  useEffect(() => {
    console.log('useRouter instance on /test-use-router:', router)
  }, [router])

  const handlePush = () => {
    router.push('/')
  }

  const handleReplace = () => {
    router.replace('/test-link')
  }

  const handleRefresh = () => {
    router.refresh()
  }

  return (
    <div>
      <h1>Test <code>useRouter</code> from <code>next/navigation</code></h1>
      <p>Check the browser console for the logged router instance.</p>
      <button onClick={handlePush}>router.push(&#39;/&#39;)</button>
      <button onClick={handleReplace}>router.replace(&#39;/test-link&#39;)</button>
      <button onClick={handleRefresh}>router.refresh()</button>
      <br />
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/test-link">Go to Test Link Page</Link>
    </div>
  )
}