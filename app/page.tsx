'use client'

import { supabase } from '@/lib/supabase'

export default function Home() {

  async function testConnection() {
    const { data, error } = await supabase
      .from('expenses')
      .select('*')

    console.log(data)
    console.log(error)
  }

  return (
    <main>
      <button onClick={testConnection}>
        Testar conexão
      </button>
    </main>
  )
}