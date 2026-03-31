import React from 'react'
import check from "./assets/check.png"

function Home() {
  return (
    <section className='home'>
      <div className="notr">
        <h1>Notre mission :</h1>
        <p>Accompagner les hôteliers et restaurateurs indépendants dans la construction et la gestion quotidienne de leur politique RH tout en favorisant le progrès social.
          Faites de votre équipe une force.</p>
      </div>
      <div className="nos">
        <h1>Nos domaines d’intervention :</h1>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Recrutement</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Gestion des carrières, formation, fidélisation des équipes</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Marque employeur, communication interne</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Audit social, managérial et accompagnement opérationnel</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Organisation temps de travail, plannings</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Gestion administrative, application de la règlementation</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Politique de rémunération</h3>
          </div>
        </div>
        <div className="nos-cards">
          <div className="nos-card">
           <img src={check} alt="bu yerda check bor" />
            <h3>Relations sociales et gestion des conflits</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home