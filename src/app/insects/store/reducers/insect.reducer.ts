import {Insect} from '../../model/insect.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createBugView, deleteBugView, selectBugView, unselectBugView, updateBugView} from '../actions/insect.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export const bugViewAdapter = createEntityAdapter<Insect>({
  sortComparer: (a: Insect, b: Insect) => a.popularName.localeCompare(b.popularName)
});

export interface BugViewState extends EntityState<Insect> {
  insect?: Insect;
}

const pog = [
  {
    id: 0,
    scientificName: 'brabus letus maximus',
    popularName: 'Brabuleta',
    description: 'Borboleta é um inseto voador, que possui dois pares de asas. São todos os insetos alados da família dos lepidópteros diurnos. São encontrada na natureza com diversas cores e tamanhos. As borboletas se alimentam basicamente do nectar das flores e sumo em decomposição dos frutos.',
    image: 'https://conteudo.imguol.com.br/c/noticias/7d/2017/11/16/o-macho-da-borboleta-azul-possui-um-azul-vivido-no-interior-das-asas-1510835574152_615x470.jpg',
    habitats: ['floresta', 'campo'],
    locomotion: {
      walking: false,
      flying: true,
      swimming: false,
    }
  },
  {
    id: 1,
    scientificName: 'wolkswagen',
    popularName: 'Besouro',
    description: 'Besouro é o nome que se dá a várias espécies de insetos que têm um par de asas duras. Elas cobrem e protegem um segundo par de asas, usadas por alguns besouros para voar. Antigamente, todos os besouros podiam voar. Com o tempo, porém, muitas espécies perderam essa habilidade.',
    image: 'https://www.japaoemfoco.com/wp-content/uploads/2009/05/Kabuto-mushi.jpg',
    habitats: ['gramado', 'lama'],
    locomotion: {
      walking: true,
      flying: true,
      swimming: false,
    }
  },
  {
    id: 2,
    scientificName: 'scholopendra chei di perna',
    popularName: 'Lacraia',
    description: 'Lacraias, também chamadas de centopeias ou escolopenderas, são animais que apresentam um par de patas em segmento de seu corpo comprido e de formato achatado. Possuem, na cabeça, um par de antenas articuladas, alguns pares de olhos, um par de mandíbulas, dois pares de maxilares, além de um par de forcípulas e o aguilhão, utilizados para a inoculação do veneno. Este contém histamina, dentre diversos outros componentes, intensificando a possibilidade de surgirem reações alérgicas no indivíduo inoculado. ',
    image: 'https://animais.culturamix.com/blog/wp-content/gallery/Inseto---As-Temidas-Lacraias-1/Inseto-As-Temidas-Lacraias-1.jpg',
    habitats: ['banheiro', 'sapato'],
    locomotion: {
      walking: true,
      flying: false,
      swimming: true,
    }
  },
  {
    id: 3,
    scientificName: 'zum zum zum',
    popularName: 'Abeia',
    description: 'Abeia mata um',
    image: null,
    habitats: ['colméia'],
    locomotion: {
      walking: true,
      flying: false,
      swimming: true,
    }
  },
];



const initialState = bugViewAdapter.addAll(pog, bugViewAdapter.getInitialState());

const reducer = createReducer(
  initialState,
  on(selectBugView, (state, {insect}) => ({...state, insect})),
  on(unselectBugView, (state: BugViewState) => {
    const {insect,  ...rest} = state;
    return rest;
  }),
  on(createBugView, (state, {insect}) => bugViewAdapter.addOne(insect, state)),
  on(updateBugView, (state, {insect}) => bugViewAdapter.updateOne({id: insect.id, changes: insect}, state)),
  on(deleteBugView, (state, {id}) => bugViewAdapter.removeOne(id, state)),
);

export function bugViewReducer(state: BugViewState, action: Action) {
  return reducer(state, action);
}
