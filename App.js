import React from "react";
import { FaSearch, FaUserCircle, FaBell, FaChevronDown } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <h1 className="logo">SinaLibras</h1>
        <div className="search-bar">
          <FaSearch />
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="icons">
          <FaUserCircle size={24} />
          <FaBell size={24} />
          <FaChevronDown size={24} />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="banner">
          <h2>TÍTULO JSNKDJHSB JBDCHCBHKd</h2>
          <p>Descrição do título com texto de exemplo.</p>
          <div className="buttons">
            <button className="register-button">Cadastrar-se</button>
            <button className="learn-more">Saiba Mais</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">Estude sem sair de casa</div>
          <div className="feature-card">Conecte-se à língua de Sinais</div>
          <div className="feature-card">Tenha contato direto com professores</div>
        </section>

        <section className="donate">
          <button className="donate-button">Doar</button>
        </section>

        <section className="event">
          <h3>26 de setembro</h3>
          <p>Dia Nacional da Pessoa com Deficiência Auditiva</p>
        </section>

        <footer className="footer">
          <p>Conectando pessoas</p>
          <p>Transformando Sinais</p>
        </footer>
      </main>
    </div>
  );
}

export default Home;