/* Pronunciation lab content: sound guide, minimal pairs, tongue twisters. Castilian (Spain) pronunciation. */

export interface Sound {
  id: string
  letters: string
  ipa: string
  like: string
  examples: string[]
  tip?: string
  de?: string
  ar?: string
}

export const SOUNDS: Sound[] = [
  { id: 'a', letters: 'a', ipa: '[a]', like: 'a in "father", but short', examples: ['casa', 'mapa', 'hablar', 'patata'], de: 'Like the a in "Mann".', ar: 'Like فَتحة (a) — keep it open even next to emphatic sounds.' },
  { id: 'e', letters: 'e', ipa: '[e]', like: 'e in "pet" — never "ay"', examples: ['mesa', 'leche', 'verde', 'tres'], de: 'Like the e in "Bett", never long like "See".', ar: 'Arabic has no separate e: don\'t turn {mesa} into "misa".' },
  { id: 'i', letters: 'i, y', ipa: '[i]', like: 'ee in "see", but short', examples: ['sí', 'vino', 'libro', 'y'], de: 'Like the i in "Kind".', ar: 'Like كسرة (i), short and bright.' },
  { id: 'o', letters: 'o', ipa: '[o]', like: 'o in "for" — no "u" glide at the end', examples: ['no', 'foto', 'ocho', 'todo'], de: 'Like the o in "Sonne", never long like "Boot".', ar: 'Arabic has no separate o: keep {oso} (bear) different from {uso} (use).' },
  { id: 'u', letters: 'u', ipa: '[u]', like: 'oo in "food"', examples: ['uno', 'mucho', 'luna', 'azul'], de: 'Like the u in "Mutter".', ar: 'Like ضمّة (u).' },
  { id: 'bv', letters: 'b, v', ipa: '[b] [β]', like: 'b; softer between vowels (lips almost touching)', examples: ['bien', 'vino', 'Cuba', 'nueve', 'beber'], tip: 'B and V are exactly the same sound.', de: 'Never "f" or "w": {vino} = "bino".', ar: 'Like ب. Keep **p** separate: {peso} (weight) ≠ {beso} (kiss).' },
  { id: 'k', letters: 'c (a/o/u), qu, k', ipa: '[k]', like: 'k, without a puff of air', examples: ['casa', 'cuatro', 'queso', 'kilo', 'aquí'], tip: 'In qu the u is silent: {queso} = "keso".', de: 'Unaspirated, softer than German k: {casa}.', ar: 'Like ك.' },
  { id: 'th', letters: 'z, c (e/i)', ipa: '[θ]', like: 'th in "think" (Spain)', examples: ['cero', 'cinco', 'zapato', 'gracias', 'hacer'], tip: 'In Latin America this is pronounced like s.', de: 'Never "ts" as in "Zeit": tongue between the teeth.', ar: 'Exactly Arabic ث: {cero} ≈ ثيرو.' },
  { id: 'd', letters: 'd', ipa: '[d] [ð]', like: 'd with the tongue on the teeth; soft "th" (this) between vowels', examples: ['dos', 'nada', 'cansado', 'Madrid', 'verdad'], tip: 'At the end of a word it is very soft or almost silent: {Madrid}.', de: 'Between vowels much softer than German d.', ar: 'Between vowels it sounds like ذ: {nada} ≈ ناذا.' },
  { id: 'g', letters: 'g (a/o/u), gu (e/i)', ipa: '[g] [ɣ]', like: 'g in "go"; softer between vowels', examples: ['gato', 'amigo', 'guitarra', 'guerra', 'lago'], tip: 'In gue / gui the u is silent; with ü it is heard: {pingüino}.', de: 'Like German g, softer between vowels.', ar: 'Like Egyptian ج (g). Between vowels it gets close to a soft غ.' },
  { id: 'j', letters: 'j, g (e/i)', ipa: '[x]', like: 'throaty h, like Scottish "loch"', examples: ['jamón', 'gente', 'rojo', 'mujer', 'Juan'], de: 'Exactly German ch in "Bach" or "lachen".', ar: 'Exactly Arabic خ: {Juan} ≈ خوان.' },
  { id: 'h', letters: 'h', ipa: '—', like: 'always silent', examples: ['hola', 'hasta', 'ahora', 'hotel', 'hijo'], de: 'Never pronounced, unlike "Haus".', ar: 'Silent — not like هـ or ح.' },
  { id: 'll', letters: 'll, y', ipa: '[ʝ]', like: 'y in "yes"', examples: ['llamo', 'calle', 'yo', 'playa', 'llave'], de: 'Like German j in "ja".', ar: 'Like ي: {yo} ≈ يو.' },
  { id: 'ny', letters: 'ñ', ipa: '[ɲ]', like: 'ny in "canyon"', examples: ['España', 'mañana', 'niño', 'año', 'pequeño'], tip: 'Never drop the tilde: {año} (year) is a very different word from "ano".', de: 'Like "nj" in "Champagner".', ar: 'Like نْيـ in one sound.' },
  { id: 'ch', letters: 'ch', ipa: '[tʃ]', like: 'ch in "church"', examples: ['noche', 'mucho', 'chocolate', 'leche'], de: 'Like "tsch" in "Deutsch".', ar: 'Like تش.' },
  { id: 'r', letters: 'r (between vowels, end)', ipa: '[ɾ]', like: 'one quick tap, like American "better"', examples: ['pero', 'caro', 'hablar', 'para', 'tres'], de: 'Tip of the tongue, never the throat-r of "rot".', ar: 'Exactly Arabic ر.' },
  { id: 'rr', letters: 'rr, r- (start), r after n/l/s', ipa: '[r]', like: 'a rolled trill', examples: ['perro', 'rojo', 'Roma', 'Enrique', 'arroz'], tip: 'Practise with "tr" and "dr": {tres}, {drama}, then roll longer.', de: 'Like a strongly rolled Bavarian r.', ar: 'A long, rolled ر (رّ).' },
  { id: 's', letters: 's', ipa: '[s]', like: 'always a hissing s, never "z"', examples: ['seis', 'casa', 'mesa', 'eso'], de: 'Always voiceless like ß: {casa}, never like "Sonne".', ar: 'Like س.' },
  { id: 'x', letters: 'x', ipa: '[ks]', like: '"ks" — but in México and Texas it\'s a j sound', examples: ['taxi', 'examen', 'éxito', 'México'], de: 'Like German x.', ar: 'Like كس.' },
  { id: 'diph', letters: 'ai, ei, au, ia, ie, ue, ui…', ipa: 'diphthongs', like: 'two vowels glide together in one syllable', examples: ['seis', 'aire', 'bueno', 'ciudad', 'Europa', 'tiene'], tip: 'An accent breaks the diphthong: {día} = dí·a.', de: '{ei} = "ey" (never "ai" as in "ein"), {ie} = "ye" (never long i as in "Liebe"), {eu} = e+u (never "oi" as in "Euro").', ar: 'Like ياء / واو gliding: {bueno} ≈ بوينو.' },
]

export interface PairSet {
  id: string
  title: string
  focus: string
  pairs: [string, string, string, string][]
}

export const PAIR_SETS: PairSet[] = [
  {
    id: 'r',
    title: 'r vs rr',
    focus: 'tap vs rolled trill',
    pairs: [
      ['pero', 'but', 'perro', 'dog'],
      ['caro', 'expensive', 'carro', 'cart'],
      ['para', 'for', 'parra', 'grapevine'],
      ['coro', 'choir', 'corro', 'I run'],
      ['cero', 'zero', 'cerro', 'hill'],
    ],
  },
  {
    id: 'th',
    title: 's vs z / c',
    focus: 's vs th (Spain)',
    pairs: [
      ['casa', 'house', 'caza', 'hunting'],
      ['sien', 'temple (head)', 'cien', 'a hundred'],
      ['coser', 'to sew', 'cocer', 'to boil'],
      ['masa', 'dough', 'maza', 'club, mace'],
      ['poso', 'sediment', 'pozo', 'well'],
      ['seta', 'mushroom', 'zeta', 'letter Z'],
    ],
  },
  {
    id: 'ei',
    title: 'e vs i',
    focus: 'two different vowels',
    pairs: [
      ['mesa', 'table', 'misa', 'mass (church)'],
      ['peso', 'weight', 'piso', 'flat, floor'],
      ['pela', 'peels', 'pila', 'battery'],
      ['lema', 'motto', 'lima', 'lime'],
      ['pecar', 'to sin', 'picar', 'to sting, to snack'],
    ],
  },
  {
    id: 'ou',
    title: 'o vs u',
    focus: 'two different vowels',
    pairs: [
      ['oso', 'bear', 'uso', 'use'],
      ['lona', 'canvas', 'luna', 'moon'],
      ['poro', 'pore', 'puro', 'pure'],
      ['rosa', 'rose', 'rusa', 'Russian (f.)'],
    ],
  },
  {
    id: 'pb',
    title: 'p vs b',
    focus: 'voiceless vs voiced',
    pairs: [
      ['peso', 'weight', 'beso', 'kiss'],
      ['pata', 'paw, leg', 'bata', 'dressing gown'],
      ['pala', 'shovel', 'bala', 'bullet'],
      ['pino', 'pine', 'vino', 'wine'],
      ['pan', 'bread', 'van', 'they go'],
    ],
  },
  {
    id: 'n',
    title: 'n vs ñ',
    focus: 'n vs ny',
    pairs: [
      ['pena', 'sorrow', 'peña', 'rock; group of friends'],
      ['cana', 'grey hair', 'caña', 'small beer; cane'],
      ['mono', 'monkey; cute', 'moño', 'hair bun'],
      ['una', 'one (f.)', 'uña', 'nail'],
    ],
  },
  {
    id: 'stress',
    title: 'Stress & accents',
    focus: 'same letters, different stress',
    pairs: [
      ['hablo', 'I speak', 'habló', 'he / she spoke'],
      ['esta', 'this (f.)', 'está', 'is (estar)'],
      ['papa', 'the Pope', 'papá', 'dad'],
      ['sabana', 'savannah', 'sábana', 'bed sheet'],
      ['practico', 'I practise', 'practicó', 'he / she practised'],
    ],
  },
  {
    id: 'l',
    title: 'l vs ll',
    focus: 'l vs y-sound',
    pairs: [
      ['polo', 'pole', 'pollo', 'chicken'],
      ['tala', 'felling (trees)', 'talla', 'size (clothes)'],
      ['ala', 'wing', 'halla', 'finds'],
    ],
  },
]

export interface Twister {
  es: string
  en: string
  focus: string
}

export const TWISTERS: Twister[] = [
  { es: 'Tres tristes tigres tragaban trigo en un trigal.', en: 'Three sad tigers were swallowing wheat in a wheat field.', focus: 'tr' },
  { es: 'Erre con erre cigarro, erre con erre barril, rápido corren los carros cargados de azúcar del ferrocarril.', en: 'R with R cigar, R with R barrel, fast run the cars loaded with sugar on the railway.', focus: 'rr' },
  { es: 'El perro de San Roque no tiene rabo, porque Ramón Rodríguez se lo ha cortado.', en: "San Roque's dog has no tail, because Ramón Rodríguez has cut it off.", focus: 'r / rr' },
  { es: 'Pablito clavó un clavito. ¿Qué clavito clavó Pablito?', en: 'Little Pablo nailed a little nail. Which little nail did little Pablo nail?', focus: 'cl, stress' },
  { es: 'Como poco coco como, poco coco compro.', en: 'As I eat little coconut, I buy little coconut.', focus: 'c / k, o' },
  { es: 'Cuando cuentes cuentos, cuenta cuántos cuentos cuentas.', en: 'When you tell stories, count how many stories you tell.', focus: 'cu, ue' },
  { es: 'Si Sansón no sazona su salsa con sal, le sale sosa.', en: "If Samson doesn't season his sauce with salt, it turns out bland.", focus: 's vs z' },
  { es: 'Ñoño Yáñez come ñame en las mañanas con el niño.', en: 'Ñoño Yáñez eats yam in the mornings with the boy.', focus: 'ñ' },
  { es: 'El cielo está enladrillado, ¿quién lo desenladrillará? El desenladrillador que lo desenladrille, buen desenladrillador será.', en: 'The sky is bricked up; who will un-brick it? The un-bricker who un-bricks it will be a good un-bricker.', focus: 'll, dr' },
  { es: 'Juan juega en el jardín con Julia, Jorge y Jaime.', en: 'Juan plays in the garden with Julia, Jorge and Jaime.', focus: 'j' },
]

/** Words for the "where's the stress?" game, by difficulty */
export const STRESS_WORDS = [
  'casa', 'hablar', 'teléfono', 'ciudad', 'español', 'lunes', 'árbol', 'examen', 'música', 'trabajo', 'joven', 'difícil', 'café', 'amigo', 'sábado', 'universidad', 'canción', 'mañana', 'hospital', 'lápiz', 'ordenador', 'pájaro', 'estudiante', 'Madrid', 'feliz', 'azúcar', 'problema', 'película', 'importante', 'reloj', 'jamón', 'zapato', 'semana', 'cumpleaños', 'fácil', 'verdad', 'médico', 'hablaron', 'comeremos', 'nación',
]
