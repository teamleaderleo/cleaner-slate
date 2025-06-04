'use client'

import React from 'react'
import Form from 'next/form'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function TestFormPage() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    alert(`Form submitted with name: ${name}`)
    router.push('/')
  }

  return (
    <div>
      <h1>Test <code>&lt;Form&gt;</code> from <code>next/form-data</code></h1>
      <h2>Form with Client-Side Handler (preventDefault)</h2>
      <Form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Submit (Client Handler)</button>
      </Form>

      <hr style={{ margin: '20px 0' }} />

      <h2>Form with Server Action (requires setup)</h2>
      <p>
        Note: For this to fully work, you&#39;d need a server action defined.
        This example primarily tests if the Form component mounts and
        attempts navigation.
      </p>
      <Form action="/api/form-handler"> {/* Example action path */}
        <label htmlFor="serverActionName">Server Action Name:</label>
        <input type="text" id="serverActionName" name="serverActionName" />
        <button type="submit">Submit (to Server Action)</button>
      </Form>
      <p>
        (If <code>/api/form-handler</code> doesn&#39;t exist, this will navigate
        and likely 404, which tests the navigation aspect)
      </p>

      <br />
      <Link href="/">Go to Home</Link>
    </div>
  )
}