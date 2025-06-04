'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MyTestPage() {
  const routerFromHook = useRouter()
  const [isSameInstance, setIsSameInstance] = useState<string>('Checking direct import...')

  useEffect(() => {
    console.log('Router from useRouter() hook:', routerFromHook)

    // Attempt to access the global instance for comparison
    // `window.next.router` is set up for debugging in app-router-instance.ts
    // This is how to access the publicAppRouterInstance on the client
    const globalRouterInstance = (window as unknown as { next?: { router?: unknown } }).next?.router;
    console.log('Global publicAppRouterInstance (via window.next.router):', globalRouterInstance);


    if (routerFromHook && globalRouterInstance) {
      // In JavaScript, comparing two distinct objects, even if they have the same properties,
      // with `===` will be false. We are checking if they are the *exact same object instance in memory*.
      if (routerFromHook === globalRouterInstance) {
        setIsSameInstance('Yes, routerFromHook === window.next.router (it IS the singleton)')
      } else {
        // This case would be surprising in an App Router context even before our change,
        // as the provider should be providing the singleton.
        setIsSameInstance('No, routerFromHook !== window.next.router (this is unexpected in App Router)')
      }
    } else if (!globalRouterInstance) {
        setIsSameInstance('window.next.router is not available for comparison.')
    } else {
        setIsSameInstance('routerFromHook is null or undefined.')
    }

  }, [routerFromHook])

  return (
    <div>
      <h1>Router Instance Test</h1>
      <p>
        Is <code>useRouter()</code> returning the global singleton (<code>publicAppRouterInstance</code> accessed via <code>window.next.router</code>)?
      </p>
      <pre>{isSameInstance}</pre>
      <button onClick={() => routerFromHook.push('/')}>Go Home</button>
    </div>
  )
}