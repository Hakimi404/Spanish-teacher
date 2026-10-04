import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 3,
  title: 'Family & descriptions',
  es: 'Mi familia',
  cando: [
    'I can say my age and count to 100',
    'I can talk about the members of my family',
    'I can use possessives: mi, tu, su, nuestro…',
    'I can describe what people look like and what they are like',
    'I can ask questions with qué, quién, cómo, dónde, cuántos…',
  ],
  lessons: [
    {
      t: 'Tener & numbers 21–100',
      k: 'grammar',
      goal: 'Use tener to say what you have and how old you are; count to 100',
      body: `
## The verb tener (to have)
| | tener |
|---|---|
| {yo} | {tengo} |
| {tú} | {tienes} |
| {él / ella / usted} | {tiene} |
| {nosotros} | {tenemos} |
| {vosotros} | {tenéis} |
| {ellos / ellas / ustedes} | {tienen} |

Notice the irregular {tengo} and the **e → ie** change in {tienes}, {tiene}, {tienen}.

## Age: tener + años
In Spanish you *have* years — you don't *be* them:
> ¿Cuántos años tienes? = How old are you?
> Tengo veinticinco años. = I'm 25 (years old).
> Mi abuela tiene ochenta años. = My grandmother is 80.

!de: German says "Ich bin 25", Spanish says "I have 25 years": {Tengo 25 años}. Never "soy 25".
!ar: Arabic says عمري ٢٥ سنة ("my age is 25"); Spanish uses tener: {Tengo 25 años}.

## Numbers 21–100
| | | |
|---|---|---|
| 21 {veintiuno} | 22 {veintidós} | 23 {veintitrés} |
| 30 {treinta} | 31 {treinta y uno} | 40 {cuarenta} |
| 50 {cincuenta} | 60 {sesenta} | 70 {setenta} |
| 80 {ochenta} | 90 {noventa} | 100 {cien} |

- 21–29 are one word: {veinticuatro}, {veintinueve}.
- From 31: tens **y** units: {treinta y dos}, {cuarenta y cinco}, {noventa y nueve}.
- **uno → un** before a masculine noun: {veintiún años}, {treinta y un libros}; and **una** before a feminine one: {veintiuna personas}.

!de: Spanish says the tens first, like English: {treinta y cinco} = 30 + 5 — not "fünfunddreißig"!
!ar: Arabic says the units first (خمسة وثلاثون); Spanish says the tens first: {treinta y cinco}.
`,
      words: `
tener = to have
el año = year
¿cuántos años tienes? = how old are you?
veintiuno = twenty-one
treinta = thirty
cuarenta = forty
cincuenta = fifty
sesenta = sixty
setenta = seventy
ochenta = eighty
noventa = ninety
cien = one hundred
`,
      phrases: `
¿Cuántos años tienes? = How old are you?
Tengo treinta y dos años. = I'm thirty-two.
Mi hermano tiene veintiún años. = My brother is twenty-one.
¿Tienes hermanos? = Do you have any brothers or sisters?
Tenemos un perro y dos gatos. = We have a dog and two cats.
Mi abuelo tiene noventa años. = My grandfather is ninety.
`,
      drills: `
Yo ___ veinte años. => tengo | tiene | tienes | soy # I'm twenty.
¿Cuántos años ___ (tú)? => tienes | tiene | tengo | tenéis # How old are you?
Nosotros ___ un perro. => tenemos | tienen | tenéis | tengo # We have a dog.
Ellos ___ tres hijos. => tienen | tiene | tenemos | tienes # They have three children.
Tengo ___ años. (21) => veintiún | veintiuno | veinte y uno | veintiuna # I'm twenty-one.
Mi abuela tiene ___ años. (80) => ochenta | ocho | dieciocho | setenta # My grandmother is eighty.
`,
    },
    {
      t: 'Family — la familia',
      k: 'vocab',
      goal: 'Talk about the people in your family',
      body: `
## Mi familia
| Male | Female | |
|---|---|---|
| {el padre} | {la madre} | father / mother |
| {el hermano} | {la hermana} | brother / sister |
| {el hijo} | {la hija} | son / daughter |
| {el abuelo} | {la abuela} | grandfather / grandmother |
| {el tío} | {la tía} | uncle / aunt |
| {el primo} | {la prima} | cousin |
| {el marido} | {la mujer} | husband / wife |
| {el novio} | {la novia} | boyfriend / girlfriend |

!tip: The masculine plural covers both sexes: {los padres} = parents, {los hermanos} = brothers and sisters, {los hijos} = children, {los abuelos} = grandparents.
!de: {los padres} = die Eltern, {los hermanos} = die Geschwister — Spanish uses the masculine plural for mixed groups.
!ar: Spanish has one word for uncle: {tío} = عم and خال; {tía} = عمة and خالة. And {primo} covers every cousin: ابن العم، ابن الخال…

> Tengo dos hermanos y una hermana. = I have two brothers and a sister.
> Soy hijo único. = I'm an only child (said by a man).
> Mi hermana mayor se llama Salma. = My older sister is called Salma.

!es: You call your parents {papá} and {mamá}; you talk *about* them as {mi padre} and {mi madre}. Spaniards have two surnames — the father's first surname, then the mother's: {Pedro García López}.
`,
      words: `
la familia = family
el padre = father
la madre = mother
los padres = parents
el hermano = brother
la hermana = sister
el hijo = son
la hija = daughter
los hijos = children (sons and daughters)
el abuelo = grandfather
la abuela = grandmother
el tío = uncle
la tía = aunt
el primo, la prima = cousin
el marido = husband
la mujer = wife; woman
`,
      phrases: `
¿Tienes hermanos? = Do you have brothers or sisters?
Tengo una hermana mayor. = I have an older sister.
Mis padres viven en Rabat. = My parents live in Rabat.
Soy hijo único. = I'm an only child.
Mi tía tiene tres hijos. = My aunt has three children.
Esta es mi familia. = This is my family.
`,
      drills: `
El padre de mi padre es mi ___. => abuelo | tío | primo | hermano # My father's father is my grandfather.
La hermana de mi madre es mi ___. => tía | prima | abuela | hija # My mother's sister is my aunt.
El hijo de mi tío es mi ___. => primo | hermano | sobrino | abuelo # My uncle's son is my cousin.
Mis ___ se llaman Ana y Pedro: mi madre y mi padre. => padres | parientes | hijos | abuelos # My parents are called Ana and Pedro.
Tengo un ___ y una hermana. => hermano | hermana | hermanos | hermanas # I have a brother and a sister.
`,
    },
    {
      t: 'My, your, his… possessives',
      k: 'grammar',
      goal: 'Say whose something is with mi, tu, su, nuestro and de',
      body: `
## Possessive adjectives
| | one thing | several things |
|---|---|---|
| my | {mi casa} | {mis casas} |
| your (tú) | {tu casa} | {tus casas} |
| his / her / your (usted) | {su casa} | {sus casas} |
| our | {nuestro piso} · {nuestra casa} | {nuestros} · {nuestras} |
| your (vosotros) | {vuestro piso} · {vuestra casa} | {vuestros} · {vuestras} |
| their / your (ustedes) | {su casa} | {sus casas} |

- They agree with the **thing owned**, not with the owner: {mis padres}, {nuestra madre}.
- Only {nuestro} and {vuestro} have a feminine form.
- {tu} (your) has no accent; {tú} (you) does.
- {su} can mean his, her, its, their or your. Use **de** to be clear: {la casa de Ana}, {el coche de ellos}.

!de: Like German "sein / ihr" — but Spanish {su} doesn't care whether the owner is male or female: {su padre} = sein Vater *or* ihr Vater.
!ar: Arabic adds a suffix (بيتي، بيتك، بيته); Spanish puts a word in front: {mi casa}, {tu casa}, {su casa}.

## Whose? — ¿De quién?
> ¿De quién es este libro? = Whose book is this?
> Es de mi hermano. = It's my brother's.
> Es el coche de Laura. = It's Laura's car.

!tip: Spanish has no **'s**. "Laura's car" = {el coche de Laura} — literally "the car of Laura".
`,
      words: `
mi, mis = my
tu, tus = your (informal)
su, sus = his, her, their, your (formal)
nuestro, nuestra = our
vuestro, vuestra = your (you all, informal)
¿de quién? = whose?
el coche = car (Spain)
el piso = flat, apartment; floor (Spain)
la llave = key
el móvil = mobile phone (Spain)
`,
      phrases: `
¿De quién es este móvil? = Whose mobile is this?
Es de mi hermana. = It's my sister's.
Nuestra casa es pequeña. = Our house is small.
¿Dónde están tus llaves? = Where are your keys?
Su padre es médico. = His / her father is a doctor.
Vuestro piso es muy bonito. = Your flat is very nice.
`,
      drills: `
(yo) ___ padres son de Egipto. => Mis | Mi | Tus | Sus # My parents are from Egypt.
(tú) ¿Es ___ coche? => tu | tú | tus | su # Is it your car?
(nosotros) ___ casa es grande. => Nuestra | Nuestro | Nuestras | Vuestra # Our house is big.
(ella) ___ hermanos viven en Madrid. => Sus | Su | Mis | Tus # Her brothers live in Madrid.
(vosotros) ¿Dónde está ___ piso? => vuestro | vuestra | nuestro | vuestros # Where is your flat?
Es el libro ___ Ana. => de | del | a | su # It's Ana's book.
`,
    },
    {
      t: 'Describing people',
      k: 'grammar',
      goal: 'Describe what people look like and what they are like',
      body: `
## Adjectives agree
Adjectives match the noun in **gender** and **number**, and usually come **after** it:
| | masculine | feminine |
|---|---|---|
| singular | {un chico alto} | {una chica alta} |
| plural | {unos chicos altos} | {unas chicas altas} |

- Adjectives in **-o** have four forms: {alto, alta, altos, altas}.
- Adjectives in **-e** and most in a consonant have two: {inteligente / inteligentes}, {joven / jóvenes}.
- {ser} + adjective describes what someone **is like**: {Mi madre es simpática.}

!de: In German the ending depends on the article (ein großer Mann / der große Mann). In Spanish it only depends on gender and number: {alto, alta, altos, altas}.
!ar: Like Arabic, the adjective follows the noun and agrees with it: {una casa grande} ≈ بيت كبير.

## Appearance
> Es alto y delgado. = He's tall and slim.
> Tiene el pelo largo y los ojos verdes. = She has long hair and green eyes.
> Es morena y lleva gafas. = She's dark-haired and wears glasses.

## Character
> Es muy simpático. = He's very nice.
> Mi hermano es un poco tímido. = My brother is a bit shy.
> Mi amiga es muy divertida. = My friend is really fun.

!warn: {simpático} = nice, friendly — not "sympathetic". And {sensible} = sensitive, not "sensible" (that's {sensato}).
!tip: For hair and eyes use **tener**: {Tengo el pelo corto}, {Tiene los ojos marrones}.
`,
      words: `
alto, alta = tall
bajo, baja = short (height)
delgado, delgada = slim
guapo, guapa = good-looking
joven = young
mayor = older; elderly
simpático, simpática = nice, friendly
antipático, antipática = unfriendly
inteligente = intelligent
tímido, tímida = shy
divertido, divertida = fun, funny
el pelo = hair
los ojos = eyes
las gafas = glasses (Spain)
`,
      phrases: `
Mi hermana es alta y morena. = My sister is tall and dark-haired.
Tiene el pelo largo y los ojos azules. = She has long hair and blue eyes.
Mis primos son muy simpáticos. = My cousins are very nice.
Mi padre lleva gafas. = My father wears glasses.
¿Cómo es tu novia? = What's your girlfriend like?
Es inteligente y un poco tímida. = She's intelligent and a little shy.
`,
      drills: `
Mi madre es muy ___. => simpática | simpático | simpáticas | simpáticos # My mother is very nice.
Mis hermanos son ___. => altos | alto | altas | alta # My brothers are tall.
Las chicas son muy ___. => inteligentes | inteligente | inteligentas | inteligentos # The girls are very intelligent.
Pedro ___ los ojos verdes. => tiene | es | está | son # Pedro has green eyes.
¿Cómo ___ tu profesor? => es | tiene | está | son # What is your teacher like?
Ana es ___ y simpática. => guapa | guapo | guapas | guapos # Ana is pretty and nice.
`,
    },
    {
      t: 'Colours & clothes',
      k: 'vocab',
      goal: 'Name colours and clothes, and say what you are wearing',
      body: `
## Los colores
| | | |
|---|---|---|
| {rojo} red | {azul} blue | {verde} green |
| {amarillo} yellow | {negro} black | {blanco} white |
| {gris} grey | {marrón} brown | {naranja} orange |
| {rosa} pink | {morado} purple | |

- Colours in **-o** agree: {una camisa roja}, {unos zapatos negros}.
- Colours in **-e** or a consonant only add a plural: {verde / verdes}, {azul / azules}, {gris / grises}, {marrón / marrones}.
- {naranja} and {rosa} usually don't change at all.
- The colour comes **after** the noun: {el coche blanco}.

!de: The opposite order to German: "ein rotes Auto" = {un coche rojo}.
!ar: Same order as Arabic: {un coche rojo} ≈ سيارة حمراء.

> ¿De qué color es? = What colour is it?
> Mi color favorito es el verde. = My favourite colour is green.

## Clothes — la ropa
{la camisa} (shirt), {la camiseta} (T-shirt), {los pantalones} (trousers), {los vaqueros} (jeans), {la falda} (skirt), {el vestido} (dress), {los zapatos} (shoes), {el abrigo} (coat), {el jersey} (jumper).

> Llevo una camiseta blanca y unos vaqueros. = I'm wearing a white T-shirt and jeans.

!tip: **llevar** = to wear (and to carry): {¿Qué llevas hoy?}
`,
      words: `
el color = colour
rojo, roja = red
azul = blue
verde = green
amarillo, amarilla = yellow
negro, negra = black
blanco, blanca = white
gris = grey
marrón = brown
la ropa = clothes
la camiseta = T-shirt
los pantalones = trousers
los zapatos = shoes
llevar = to wear; to carry
`,
      phrases: `
¿De qué color es tu coche? = What colour is your car?
Mi coche es gris. = My car is grey.
Llevo una camiseta azul. = I'm wearing a blue T-shirt.
Tiene los ojos marrones. = He has brown eyes.
Los zapatos negros son de Pedro. = The black shoes are Pedro's.
Mi color favorito es el verde. = My favourite colour is green.
`,
      drills: `
una camisa ___ (white) => blanca | blanco | blancas | blancos # a white shirt
unos zapatos ___ (black) => negros | negro | negras | negra # some black shoes
dos coches ___ (grey) => grises | gris | grisas | grisos # two grey cars
la falda ___ (red) => roja | rojo | rojas | rojos # the red skirt
Hoy ___ una camiseta verde. => llevo | tengo | soy | es # Today I'm wearing a green T-shirt.
`,
    },
    {
      t: 'Asking questions',
      k: 'grammar',
      goal: 'Ask questions with qué, quién, cómo, dónde, cuándo, cuánto, cuál and por qué',
      body: `
## Question words
| | |
|---|---|
| {¿Qué?} | What? — {¿Qué es esto?} |
| {¿Quién? / ¿Quiénes?} | Who? — {¿Quién es ella?} |
| {¿Cómo?} | How? / What … like? — {¿Cómo es tu casa?} |
| {¿Dónde?} | Where? — {¿Dónde vives?} |
| {¿De dónde?} | Where from? — {¿De dónde eres?} |
| {¿Cuándo?} | When? — {¿Cuándo es tu cumpleaños?} |
| {¿Cuánto? / ¿Cuánta?} | How much? — {¿Cuánto cuesta?} |
| {¿Cuántos? / ¿Cuántas?} | How many? — {¿Cuántos hermanos tienes?} |
| {¿Cuál? / ¿Cuáles?} | Which (one)? — {¿Cuál es tu número?} |
| {¿Por qué?} | Why? — {¿Por qué estudias español?} |

- Question words **always** carry an accent: {¿dónde?}, {¿cómo?}, {¿qué?}.
- The answer to {¿por qué?} is {porque} (because) — one word, no accent.
- {¿Cuántos?} agrees with the noun: {¿Cuántas hermanas tienes?}
- The subject often goes **after** the verb: {¿Dónde vive tu hermano?}

!tip: "What is…?" asking for one item of a set = {¿Cuál es…?}: {¿Cuál es tu nombre?}, {¿Cuál es tu teléfono?}. Asking for a definition = {¿Qué es…?}: {¿Qué es un piso?}
!de: {¿qué?} = was, {¿quién?} = wer, {¿dónde?} = wo, {¿cuándo?} = wann, {¿por qué?} = warum, {¿cuánto?} = wie viel.
!ar: {¿qué?} ≈ ماذا / ما، {¿quién?} ≈ مَن، {¿dónde?} ≈ أين، {¿cuándo?} ≈ متى، {¿cómo?} ≈ كيف، {¿cuánto?} ≈ كم، {¿por qué?} ≈ لماذا.
`,
      words: `
¿qué? = what?
¿quién? = who?
¿cómo? = how?
¿dónde? = where?
¿cuándo? = when?
¿cuánto? = how much?
¿cuántos? = how many?
¿cuál? = which? what?
¿por qué? = why?
porque = because
el cumpleaños = birthday
el número = number
`,
      phrases: `
¿Quién es esa chica? = Who's that girl?
¿Cuándo es tu cumpleaños? = When is your birthday?
¿Cuántos hermanos tienes? = How many brothers and sisters do you have?
¿Por qué estudias español? = Why are you studying Spanish?
Porque me gusta mucho. = Because I like it a lot.
¿Cuál es tu número de teléfono? = What's your phone number?
`,
      drills: `
¿___ te llamas? => Cómo | Qué | Cuál | Quién # What's your name?
¿___ vives? — En Madrid. => Dónde | Cuándo | Cómo | Qué # Where do you live? — In Madrid.
¿___ hermanos tienes? => Cuántos | Cuántas | Cuánto | Qué # How many brothers and sisters do you have?
¿___ es ese chico? — Es mi primo. => Quién | Qué | Cuál | Dónde # Who is that boy? — He's my cousin.
¿___ estudias español? — Porque vivo en España. => Por qué | Porque | Qué | Cuándo # Why are you studying Spanish?
¿___ es tu cumpleaños? — El 3 de mayo. => Cuándo | Dónde | Cuánto | Quién # When is your birthday? — On 3 May.
`,
    },
  ],
  story: {
    title: 'La familia de Omar',
    text: `
Omar enseña unas fotos a Laura. —Mira, esta es mi familia.
= Omar shows Laura some photos. "Look, this is my family."

—Este es mi padre. Se llama Ahmed y tiene cincuenta y ocho años. Es profesor de matemáticas.
= "This is my father. His name is Ahmed and he's fifty-eight. He's a maths teacher."

—¿Y esta mujer tan guapa? —Es mi madre, Fátima. Es muy simpática y divertida.
= "And this beautiful woman?" "She's my mother, Fátima. She's very nice and fun."

—¿Tienes hermanos? —Sí, una hermana y un hermano. Mi hermana se llama Salma: tiene veintiséis años y es médica. Mi hermano Karim es el pequeño: tiene dieciocho años y es estudiante.
= "Do you have brothers and sisters?" "Yes, a sister and a brother. My sister is called Salma: she's twenty-six and she's a doctor. My brother Karim is the youngest: he's eighteen and a student."

—¿Y quién es este señor mayor? —Es mi abuelo. Tiene ochenta y cuatro años, pero es muy activo.
= "And who's this older gentleman?" "He's my grandfather. He's eighty-four, but he's very active."

—Tu familia es grande. Yo soy hija única —dice Laura—. Pero tengo muchos primos: ¡quince!
= "Your family is big. I'm an only child," says Laura. "But I have lots of cousins: fifteen!"

—¿Quince primos? ¡Qué familia tan grande!
= "Fifteen cousins? What a big family!"
`,
    questions: `
¿Cuántos años tiene el padre de Omar? => Cincuenta y ocho | Ochenta y cuatro | Veintiséis # How old is Omar's father?
¿Qué es Salma? => Médica | Profesora | Estudiante # What does Salma do?
¿Quién es el pequeño de la familia? => Karim | Salma | Ahmed # Who is the youngest in the family?
¿Cuántos primos tiene Laura? => Quince | Cinco | Cincuenta # How many cousins does Laura have?
`,
  },
}

export default w
