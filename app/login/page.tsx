'use client'

import Image from 'next/image'
/*import { supabase } from '@/lib/supabase'*/

export default function Login() {


return (
    <main>
        <section>           
            <button><a href="/app/page.tsx">voltar</a></button>

            <Image src="/Logo_L.svg" alt="Logo" width={50} height={50} priority loading="eager"/>

            <h1> Faça seu login</h1>
            <p>Entre com suas credenciais</p>
        </section>
    </main>
)

}