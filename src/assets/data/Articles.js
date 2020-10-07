import FMI from "../images/articles/FMI.jpg";
import Vaca1 from "../images/articles/Vaca1.jpg";
import Roms from "../images/articles/roms.jpg";
import Mayotte from "../images/articles/Mayotte1.jpg";
// import Grevistes from "../images/articles/Grevistes.jpg";
import SansPapiers from "../images/articles/SansPapiers.jpg";
import desk from "../images/articles/desk.jpg";
import gonzalo from "../images/articles/gonzalo.jpeg";
import euros from "../images/articles/euros.jpg";
import naufrage from "../images/articles/naufrage.jpg";

const articles = [
  {
    title: "La Patagonie est le nouvel Eldorado du gaz de schiste",
    link:
      "https://reporterre.net/En-Argentine-la-Patagonie-est-le-nouvel-eldorado-du-gaz-de-schiste",
    p:
      "Depuis deux ans, l'exploitation de gaz et d'huile de schiste explose en Patagonie argentine.",
    image: Vaca1,
    category: "societe",
  },
  {
    title: "L'Europe verrouille les frontières de l'Afrique",
    link: "http://www.millebabords.org/spip.php?article16089",
    p:
      "Après avoir fermé ses portes aux migrants, l’Europe cherche depuis quelques années à maîtriser les voies d’accès. Elle exerce de nombreuses pressions pour imposer ses politiques migratoires jusqu’aux frontières africaines et de plus en plus de pays les mettent en place.",
    image: undefined,
    category: "societe",
  },
  {
    title:
      "De La Courneuve à Saint-Denis, l'errance des Roms, citoyens européens",
    link:
      "https://www.lemonde.fr/societe/article/2009/06/27/de-la-courneuve-a-saint-denis-l-errance-des-roms-citoyens-europeens_1212035_3224.html",
    p: undefined,
    image: Roms,
    category: "societe",
  },
  {
    title:
      "A Mayotte, la chasse aux sans-papiers aggrave leur situation sanitaire",
    link:
      "https://www.lemonde.fr/societe/article/2009/10/14/a-mayotte-la-chasse-aux-clandestins-aggrave-leur-situation-sanitaire_1253537_3224.html",
    p: undefined,
    image: Mayotte,
    category: "societe",
  },
  {
    title: "Les couples mixtes se heurtent aux entraves des préfectures",
    link:
      "https://www.lemonde.fr/societe/article/2009/12/22/les-couples-mixtes-se-heurtent-aux-entraves-des-prefectures_1282848_3224.html",
    p:
      "L'association Les Amoureux au ban public dénonce les entraves opposées aux couples mixtes, quand le conjoint de Français a pourtant le droit de faire sa demande de visa en France.",
    image: undefined,
    category: "societe",
  },
  {
    title: "Quelle politique de relance pour contrer la crise?",
    link:
      "https://lexpansion.lexpress.fr/actualite-economique/quelle-politique-de-relance-pour-contrer-la-crise_1372831.html",
    p:
      " Pour éviter que la récession ne dégénère en dépression, il reste l'arme d'un plan de relance. C'est une des résolutions adoptée lors du G20, réclamée avec insistance par les industriels.",
    image: FMI,
    category: "eco",
  },

  {
    title: "Quand les patrons soutiennent les travailleurs sans-papiers",
    link:
      "https://www.lemonde.fr/societe/article/2010/06/07/le-soutien-de-chefs-d-entreprises-aux-travailleurs-sans-papiers_1368052_3224.html",
    p: undefined,
    image: SansPapiers,
    category: "societe",
  },
  {
    title: "Ce qu'on ne vous dit jamais sur la dette de la France",
    link:
      "https://lexpansion.lexpress.fr/actualite-economique/ce-qu-on-ne-vous-dit-jamais-sur-la-dette-de-la-france_1428192.html",
    p: undefined,
    image: undefined,
    category: "eco",
  },
  {
    title: "L'externalisation a dopé la tertiarisation de l'économie française",
    link:
      "https://lexpansion.lexpress.fr/actualite-economique/l-externalisation-a-dope-la-tertiarisation-de-l-economie-francaise_1370437.html",
    p: undefined,
    image: desk,
    category: "eco",
  },
  {
    title: "Le débat sur la déflation rebondit",
    link:
      "https://lexpansion.lexpress.fr/actualite-economique/le-debat-sur-la-deflation-rebondit_1407565.html",
    p:
      "Depuis quelques mois, à la faveur du repli des cours du pétrole, l'économie vit sous la menace de la déflation. Loin d'être une réjouissance, une baisse généralisée des prix serait au contraire une catastrophe.",
    image: euros,
    category: "eco",
  },
  {
    title: "L'Espoir et le Soleil font vivre",
    link: "http://ruedutheatre.eu/article/809/les-naufrages-du-fol-espoir/",
    p:
      "Dans son nouveau spectacle, le Théâtre du Soleil adapte Jules Verne et ressuscite une époque gorgée d’espoirs où l’homme avait une soif inépuisable d’aventures.",
    image: naufrage,
    category: "cult",
  },
  {
    title: "Antoine et Cléopâtre aux prises avec l'histoire",
    link: "https://www.humanite.fr/node/337309",
    p: undefined,
    image: undefined,
    category: "cult",
  },
  {
    title:
      "Cyclone Gonzalo aux Antilles: une personne retrouvée: deux autres restent portées disparues",
    link:
      "https://www.lemonde.fr/planete/article/2014/10/14/trois-disparus-dans-les-antilles-apres-le-passage-du-cyclone-gonzalo_4505553_3244.html?xtmc=saint_barthelemy&xtcr=92",
    p: undefined,

    image: gonzalo,
    category: "afp",
  },
  {
    title: "Antilles: premier décès indirectement lié au chikungunya",
    link:
      "https://www.lemonde.fr/sante/article/2014/01/18/antilles-premier-deces-indirectement-lie-au-chikungunya_4350350_1651302.html?xtmc=saint_barthelemy&xtcr=102",
    p: undefined,
    image: undefined,
    category: "afp",
  },
  {
    title:
      "A Saint-Barth, Hollande prône un compromis sur le contentieux fiscal",
    link:
      "https://www.lepoint.fr/economie/a-saint-barth-hollande-prone-un-compromis-sur-le-contentieux-fiscal-09-05-2015-1927309_28.php",
    p: undefined,
    image: undefined,
    category: "afp",
  },
  {
    title:
      "Législatives/Saint-Martin et Saint-Barth : la candidate LR Claire Javois élue",
    link:
      "https://www.lepoint.fr/politique/legislatives-saint-martin-et-saint-barth-la-candidate-lr-claire-javois-elue-18-06-2017-2136169_20.php",
    p: undefined,
    image: undefined,
    category: "afp",
  },
  {
    title: "Saint-Martin : la taxe sur le RSA validée",
    link:
      "http://www.lefigaro.fr/flash-eco/2015/12/01/97002-20151201FILWWW00400-saint-martin-taxe-sur-le-rsa-validee.php",
    p: undefined,
    image: undefined,
    category: "afp",
  },
  {
    title: "Outre-mer : Saint-Martin autorisée à modifier les règles du RSA",
    link:
      "https://www.20minutes.fr/societe/1656659-20150723-outre-mer-saint-martin-autorisee-modifier-regles-rs",
    p: undefined,
    image: undefined,
    category: "afp",
  },
  {
    title:
      "Saint-Barth: Augmentation de la taxe sur les plus-values immobilières pour stopper la spéculation",
    link:
      "https://la1ere.francetvinfo.fr/saint-barth-augmentation-taxe-plus-values-immobilieres-stopper-speculation-478745.html",
    p: undefined,
    image: undefined,
    category: "afp",
  },
  {
    title:
      "Saint-Martin : le Quai d'Orsay appelé à arbitrer un différend sur la frontière",
    link:
      "https://la1ere.francetvinfo.fr/saint-martin-quai-orsay-appele-arbitrer-differend-frontiere-417083.html",
    p: undefined,
    image: undefined,
    category: "afp",
  },

  {
    title: "Double homicide sur l'île de Saint-Martin: deux hommes interpellés",
    link:
      "https://www.europe1.fr/faits-divers/double-homicide-sur-lile-de-saint-martin-deux-hommes-interpelles-2863588",
    p: undefined,
    image: undefined,
    category: "afp",
  },

  {
    title: "Double homicide dans un bar sur l'île de Saint-Martin",
    link:
      "https://la1ere.francetvinfo.fr/double-homicide-dans-un-bar-sur-l-ile-de-saint-martin-402883.html",
    p: undefined,
    image: undefined,
    category: "afp",
  },

  {
    title:
      "La piste criminelle privilégiée après la mort d'une jeune Belge à Saint-Martin",
    link:
      "http://www.leparisien.fr/faits-divers/la-piste-criminelle-privilegiee-apres-la-mort-d-une-jeune-belge-a-saint-martin-11-07-2016-5959781.php",
    p: undefined,
    image: undefined,
    category: "afp",
  },
];

export default articles;
