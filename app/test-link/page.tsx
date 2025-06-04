'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function TestLinkPage() {
  const router = useRouter()

  return (
    <div>
      <h1>Test <code>&lt;Link&gt;</code> from <code>next/link</code></h1>
      <p>These links use the App Router&#39;s Link component.</p>
      <ul>
        <li>
          <Link href="/">Go to Home</Link>
        </li>
        <li>
          <Link href="/test-use-router">Go to Test useRouter Page</Link>
        </li>
        <li>
          <Link href="/test-form">Go to Test Form Page</Link>
        </li>
        {/* <li>
          <Link href="/test-link?query=abc" scroll={false}>
            Link with query & no scroll
          </Link>
        </li> */}
        <li>
          <Link href="/test-link" replace>
            Link with replace
          </Link>
        </li>
      </ul>
      <button onClick={() => router.back()}>Go Back (useRouter)</button>
    </div>
  )
}