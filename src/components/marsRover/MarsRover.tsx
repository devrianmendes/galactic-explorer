import MainTitle from "../MainTitle";
import Paragraph from "../Paragraph";
import curiosity from "../../assets/curiosity.jpg";
import opportunitySpirit from "../../assets/opportunity.jpg";
import perseverance from "../../assets/perseverance.jpeg";
import EachRover from "./EachRover";
import { useState } from "react";

type BaseInfo = {};

const MarsRover = () => {
  const getRoverInfo = async () => {



  };

  getRoverInfo();

  return (
    <section>
      <MainTitle
        title="Fotos dos rovers em Marte"
        subtitle="Imagens capturadas pelos rovers Curiosity, Opportunity, Perseverance e Spirit da NASA!"
      />
      <Paragraph>
        Sabia que Marte é o único planeta do universo (que conhecemos) habitado
        exclusivamente por robôs? Pois é!
      </Paragraph>
      <Paragraph>
        Neste serviço, você encontra informações sobre os rovers da nasa que
        atualmente estão andando (ou já andaram) sobre a superficie do planeta
        vermelho, e também consegue buscar as imagens capturadas por eles!!
      </Paragraph>

      <Paragraph>
        Clique em um dos rovers para ver mais informações sobre cada um deles e suas missões, assim como ver fotos de Marte tiradas por eles! 
      </Paragraph>

      <EachRover name="Curiosity" image={curiosity}>
        Curiosity é um rover espacial projetado para explorar a cratera Gale em
        Marte como parte da missão Mars Science Laboratory (MSL), operada pela
        NASA. A sonda espacial foi lançada em 26 de novembro de 2011, às,
        aterrissando na região Aeolis Palus, localizada dentro de Gale, em
        Marte, no dia 6 de agosto de 2012, após uma viagem de 560 milhões de
        quilômetros, pousando a 2,4km do local originalmente planejado para o
        pouso. Os objetivos da sonda incluem uma investigação do clima e da
        geologia marciana; avaliação de se o local selecionado dentro de Gale já
        ofereceu condições ambientais favoráveis ​​à vida microbiana, incluindo
        a investigação da influência da água no local; e estudos de
        habitabilidade planetária em preparação para a exploração humana.
        Inicialmente planejada para ter uma duração de dois anos, foi prorrogada
        indefinidamente, o veículo espacial ainda está operacional.
      </EachRover>

      <EachRover name="Opportunity" image={opportunitySpirit}>
        Opportunity foi o segundo dos dois veículos exploradores geológicos da
        NASA, que aterraram em Marte em 2004. Lançado em 7 de julho de 2003, o
        Opportunity aterrissou em Marte em 25 de janeiro de 2004 no Meridiani
        Planum , três semanas depois que a sonda Spirit (MER-A), que também
        fazia da parte da missão da NASA Veículos Exploradores de Marte, tocou a
        superfície do outro lado do planeta.Enquanto o Spirit ficou imóvel em
        2009 e encerrou suas comunicações em 2010, o Opportunity permaneceu
        ativo por mais de 15 anos, ultrapassando o objetivo planejado de duração
        da missão que era de 90 dias marcianos.O Opportunity continuou em
        movimento, coletando informações científicas e as enviando à Terra até
        2018. Uma tempestade de poeira cercando o planeta apagou o sol sobre o
        Opportunity por vários meses, retirando-o da energia solar e drenando
        suas baterias. Desde junho de 2018, o Jet Propulsion Laboratory (JPL,
        "Laboratório de Propulsão a "Jato" em Português) enviou mais de 800
        comandos para revivê-lo.Depois de semanas tentando reviver o veículo no
        final da tempestade de poeira, a NASA desistiu de voltar a ouvi-lo.
        Depois de uma última tentativa fracassada de conectar o Opportunity em
        12 de fevereiro, as autoridades da Nasa anunciaram o fim em 13 de
        fevereiro de 2019.Os destaques da missão incluem o estudo de meteoritos,
        como Heat Shield Rock, encontrado em Meridiani Planum e os dois anos que
        permaneceu estudando a Cratera Victoria. Após passar por algumas
        tempestades de poeira chegou à Createra Endeavour em 2011.
      </EachRover>
      <EachRover name="Spirit" image={opportunitySpirit}>
        Spirit (MER-A) foi um veículo de exploração espacial não tripulado, cuja
        missão era estudar o planeta Marte, permanecendo ativo de 2004 a 2010.
        Foi um dos veículos projetados pela NASA para o Programa Mars
        Exploration Rovers. Pousou com sucesso em Marte em 3 de janeiro de 2004,
        três semanas antes do outro veículo, Opportunity (MER-B). Seu nome foi
        escolhido em uma competição estudantil promovida pela NASA. O robô ficou
        preso durante o seu trajeto em 2009 e perdeu contato com o Centro de
        Controle da missão em 22 de março de 2010. O robô atingiu o tempo
        planejado para a missão, mas continuou em atividade por mais de vinte
        vezes o tempo inicial, devido ao excelente condicionamento de seus
        sistemas. Além disso, o robô percorreu cerca de 7,7 km, ao invés do 1 km
        que era esperado no início da missão, permitindo uma investigação
        geológica mais extensa e completa que o previsto. O Spirit continuou a
        realizar suas tarefas até 22 de março de 2010, quando a comunicação foi
        interrompida. O JPL tentou restabelecer a comunicação até 24 de maio de
        2011, quando a NASA anunciou que os esforços para se comunicar com o
        rover sem resposta tinham terminado. A despedida formal foi planejada na
        sede da NASA após o feriado do Memorial Day e foi televisionada pela
        NASA TV.
      </EachRover>
      <EachRover name="Perseverance" image={perseverance}>
        Também referido como Percy, é um rover planetário baseado nas
        configurações do rover Curiosity do Mars Science Laboratory.
        Desenvolvido pela NASA, foi lançado em 30 de julho de 2020 com destino a
        Marte. Investigará a astrobiologia, geologia e história de Marte,
        incluindo a possibilidade do planeta ter sido habitável no passado. Foi
        anunciado pela agência americana em 4 de dezembro de 2012, na União de
        Geofísica dos Estados Unidos, em São Francisco.O rover é do tamanho de
        um carro, com cerca de 3 metros de comprimento (sem incluir o braço),
        2,7 metros de largura, 2,2 metros de altura e 1 050 kg. O veículo era
        conhecido pelo nome genérico do veículo da missão Mars 2020, mas, em 5
        de março de 2020, a NASA revelou o nome escolhido para o veículo
        espacial. O veículo espacial foi renomeado como Perseverance (lit.
        Perseverança).Perseverance possui uma broca capaz de perfurar o solo
        marciano para recolher amostras e deixá-las na superfície de Marte. Uma
        missão futura poderia recolher essas amostras e trazer de volta para a
        Terra para serem estudadas. O lançamento ocorreu em 30 de Julho de 2020,
        na base de lançamentos Cabo Canaveral, num foguete Atlas V.Àquela data,
        Terra e Marte estavam em boas posições em relação um ao outro. Para
        manter os custos e riscos da missão mais baixos possíveis, o projeto foi
        baseado na missão do Mars Science Laboratory, que pôs Curiosity em
        Marte. A missão também oferece oportunidade de adquirir informações e
        desenvolvimento das tecnologias que poderão ser usadas futuramente para
        expedições humanas no planeta vermelho.
      </EachRover>
    </section>
  );
};

export default MarsRover;
