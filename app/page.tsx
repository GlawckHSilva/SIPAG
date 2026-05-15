import { supabase} from '@/lib/supabase'


export default function Cad() {

    return (
        <main>
          <section>           
            <button>voltar</button>

            <img src="/logo.png" alt="Logo" />

            <h1> Crie sua conta</h1>
            <p>É rápido, seguro e gratuito!</p>
          </section>

          <section>
            <form>
              <input type="text" placeholder="Nome Completo" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />
              <button type="submit">Criar Conta</button>  
            </form>
          </section>

        </main>
    );

};