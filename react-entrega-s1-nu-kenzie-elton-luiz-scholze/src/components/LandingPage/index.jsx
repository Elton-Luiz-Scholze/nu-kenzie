import NuKenzieWhite from "../../assets/NuKenzieWhite.svg";
import illustration from "../../assets/illustration.svg";
import "./style.css";
export function LandingPage({ setLogin }) {
  return (
    <main className="container__LandingPage">
      <section className="container__section__LandingPage">
        <img src={NuKenzieWhite} alt="Logo NuKenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <button onClick={() => setLogin(true)}>Iniciar</button>
      </section>
      <aside className="container__aside__LandingPage">
        <img src={illustration} alt="" />
      </aside>
    </main>
  );
}
