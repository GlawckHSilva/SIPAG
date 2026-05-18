'use client'

import Image from 'next/image'
/*import { supabase } from '@/lib/supabase'*/
import React, { useState} from 'react'


export default function Cad() {
  const [ nome, setNome] = useState('')
  const [ email, setEmail] = useState('')
  const [ senha, setSenha] = useState('')
  const [confSenha, setConfSenha] =useState('')
  const especiais = /[!@#$%^&*(),.?":{}|<>]/.test(senha)


  function envioInfo(e: React.FormEvent){
    e.preventDefault()

    console.log(nome) 
    console.log(email)
    console.log(senha)
    console.log(confSenha)

    if(senha.length < 8){
      alert(' A senha deve conter no minimo 8 caracteres')
    }

    if(!especiais) {
      alert(' A senha deve conter no minimo um caractere especial')

    }

    if(senha !==confSenha){
      alert(' As senhas não coincidem')
    }
  };



    return (
        <main>
          <section>           
            <button>voltar</button>

            <Image src="/Logo_L.svg" alt="Logo" width={100} height={100} />

            <h1> Crie sua conta</h1>
            <p>É rápido, seguro e gratuito!</p>
          </section>

          <section>
            <form onSubmit={envioInfo}>
              <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
              <p>Confirme sua senha</p>
              <input type="password" placeholder="Confirmação da Senha" value={confSenha} onChange={(e) => setConfSenha(e.target.value)} required />
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Eu aceito os <a href='/terms'>Termos de Uso</a> e a <a href='/privacy'>Política de Privacidade</a></label>
              <button type="submit">Criar Conta</button>  
            </form>
          </section>

          <section>
              <button><Image src="/google-logo.svg" alt="Google" width={20} height={20} /> Continuar com Google</button>
              <button><Image src="/apple-logo.svg" alt="Apple" width={20} height={20} /> Continuar com Apple</button>

              <p>Já tem uma conta?<a href="/login"> Entrar</a></p>
          </section>

        </main>
    );

};