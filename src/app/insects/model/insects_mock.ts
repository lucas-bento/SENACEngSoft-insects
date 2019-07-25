import {Insect} from './insect';

export const INSECTS: Insect[] = [
    {
      id: 0,
      scientificName: "brabus letus maximus",
      popularName: "Brabuleta",
      description:"Borboleta é um inseto voador, que possui dois pares de asas. São todos os insetos alados da família dos lepidópteros diurnos. São encontrada na natureza com diversas cores e tamanhos. As borboletas se alimentam basicamente do nectar das flores e sumo em decomposição dos frutos.",
      image: "https://conteudo.imguol.com.br/c/noticias/7d/2017/11/16/o-macho-da-borboleta-azul-possui-um-azul-vivido-no-interior-das-asas-1510835574152_615x470.jpg",
      habitats: ["floresta", "campo"],
      locomotion: {
          walking: false,
          flying: true,
          swimming: false,
      }
    },
    {
      id: 1,
      scientificName: "wolkswagen",
      popularName: "Besouro",
      description:"Besouro é o nome que se dá a várias espécies de insetos que têm um par de asas duras. Elas cobrem e protegem um segundo par de asas, usadas por alguns besouros para voar. Antigamente, todos os besouros podiam voar. Com o tempo, porém, muitas espécies perderam essa habilidade.",
      image: "https://www.japaoemfoco.com/wp-content/uploads/2009/05/Kabuto-mushi.jpg",
      habitats: ["gramado", "lama"],
      locomotion: {
          walking: true,
          flying: true,
          swimming: false,
      }
    },
    {
      id: 2,
      scientificName: "scholopendra chei di perna",
      popularName: "Lacraia",
      description:"Lacraias, também chamadas de centopeias ou escolopenderas, são animais que apresentam um par de patas em cada um dos vários segmentos de seu corpo comprido e de formato achatado. Possuem, na cabeça, um par de antenas articuladas, alguns pares de olhos, um par de mandíbulas, dois pares de maxilares, além de um par de forcípulas e o aguilhão, utilizados para a inoculação do veneno. Este contém histamina, dentre diversos outros componentes, intensificando a possibilidade de surgirem reações alérgicas no indivíduo inoculado. ",
      image: "https://animais.culturamix.com/blog/wp-content/gallery/Inseto---As-Temidas-Lacraias-1/Inseto-As-Temidas-Lacraias-1.jpg",
      habitats: ["banheiro", "sapato"],
      locomotion: {
          walking: true,
          flying: false,
          swimming: true,
      }
    },
  ];
