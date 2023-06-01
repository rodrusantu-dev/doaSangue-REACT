import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="tituloHome">TESTE PROJETO</h1>
      <p>CONTEÚDO DO SITE</p>
      <p>Lorem</p>
     
      <h1 class="typewriter">#doaSANGUE - Salve vidas!</h1>
      
      <section id="sobre">
      <h2>Sobre a Doação de Sangue</h2>
      <p>A doação de sangue é um ato voluntário que pode salvar vidas. Ao doar sangue, você está ajudando
         pessoas em situações de emergência, pacientes que precisam de transfusões, e indivíduos com
         doenças crônicas. Nosso objetivo na <span class="red-text">doaSANGUE</span> é lhe dar INFORMAÇÃO.</p>
      </section>

      <section id="beneficios">
      <h2>Benefícios da Doação de Sangue</h2>
      <ul>
        <li>Ajuda a identificar problemas de saúde</li>
        <li>Estimula a produção de células sanguíneas</li>
        <li>Reduz o risco de doenças cardíacas</li>
        <li>Promove um senso de bem-estar</li>
      </ul>
    </section>

    
      <section id="requisitos">
        <h2>Requisitos para Doar Sangue</h2>
        <p>Para doar sangue, você precisa atender aos seguintes requisitos:</p>
        <ul>
          <li>Estar em boas condições de saúde</li>
          <li>Ter entre 18 e 65 anos de idade</li>
          <li>Pesar mais de 50 kg</li>
          <li>Não ter feito tatuagem ou piercing nos últimos 6 meses</li>
          <li>Não estar grávida ou amamentando</li>
          <li>Não ter tido hepatite após os 11 anos de idade</li>
        </ul>
      </section>

    </div>
  );
}

export default App;
