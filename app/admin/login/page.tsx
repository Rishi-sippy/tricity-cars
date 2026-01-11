'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })

    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        <input type="password" placeholder="Admin Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-lg bg-black border border-white/10 mb-4" />

        {error && <p className="text-red-400 mb-3">{error}</p>}

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-lg p-3 font-semibold">Login</button>
      </form>
    </div>
  )
}
