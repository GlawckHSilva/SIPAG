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
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Eu aceito os <a href='/terms'>Termos de Uso</a> e a <a href='/privacy'>Política de Privacidade</a></label>
              <button type="submit">Criar Conta</button>  
            </form>
          </section>

          <section>
              <button> Continuar com Google</button>
              <button> Continuar com Apple</button>

              <p>Já tem uma conta?<a href="/login"> Entrar</a></p>
          </section>

        </main>
    );

};