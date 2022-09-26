import NuKenzie from "../../assets/NuKenzie.svg";

import illustration from "../../assets/illustration.svg";

export function LandingPage({ setLogin }) {
  return (
    <main>
      <section>
        <img src={NuKenzie} alt="Logo NuKenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <button onClick={() => setLogin(true)}>Iniciar</button>
      </section>
      <aside>
        <img src={illustration} alt="" />
      </aside>
    </main>
  );
}
