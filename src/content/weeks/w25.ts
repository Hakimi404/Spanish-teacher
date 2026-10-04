import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 25,
  title: 'Culture, feelings & real Spanish',
  es: '¡Qué guay!',
  cando: [
    'I can choose between por and para in all common uses',
    'I can talk about relationships and feelings',
    'I can understand and use diminutives and augmentatives',
    'I can understand and use common idioms',
    'I can talk about Spanish festivals and traditions',
    'I can understand colloquial Spanish from Spain',
  ],
  lessons: [
    {
      t: 'Por or para? The complete picture',
      k: 'grammar',
      goal: 'Master all the common uses of por and para',
      body: `
## para →
| use | example |
|---|---|
| purpose | {Estudio para ser médico.} |
| destination | {Salimos para Sevilla.} |
| deadline | {Para el lunes.} |
| recipient | {Es para ti.} |
| opinion | {Para mí, es lo mejor.} |
| "for a …" (comparison) | {Para ser extranjero, habla muy bien.} |
| use of an object | {una taza para café} |

## por ←
| use | example |
|---|---|
| cause, reason | {Lo hice por amor.} {Cerrado por vacaciones.} |
| route, through | {Pasamos por Toledo.} |
| approximate place or time | {Vive por aquí.} {por la mañana} |
| means | {por teléfono}, {por correo} |
| exchange, price | {Lo vendí por cien euros.} |
| instead of | {Hoy trabajo por mi compañero.} |
| per | {tres veces por semana}, {diez por ciento} |
| agent of a passive | {Escrito por Cervantes.} |

## Fixed expressions with por
{por fin} (at last), {por supuesto} (of course), {por cierto} (by the way), {por si acaso} (just in case), {por lo menos} (at least), {por ejemplo}, {por eso}, {por favor}.

!tip: "in order to", "for (a person, a deadline)", "towards" → **para**. "because of", "through", "per", "in exchange for" → **por**.
!de: {por} ≈ wegen, durch, pro, für (exchange); {para} ≈ für (goal, recipient), um … zu.
`,
      words: `
para ser = for a… (considering that)
por amor = for love
cerrado por vacaciones = closed for holidays
pasar por = to go through; to drop by
escrito por = written by
por supuesto = of course
por cierto = by the way
por si acaso = just in case
por lo menos = at least
por ejemplo = for example
la taza = cup
`,
      phrases: `
Para ser extranjero, hablas muy bien. = For a foreigner, you speak very well.
El Quijote fue escrito por Cervantes. = Don Quixote was written by Cervantes.
Coge un paraguas, por si acaso. = Take an umbrella, just in case.
Por cierto, ¿has visto a Ana? = By the way, have you seen Ana?
Trabajo tres días por semana. = I work three days a week.
Hoy trabajo por mi compañera, que está enferma. = Today I'm working instead of my colleague, who's ill.
`,
      drills: `
Lo hice ___ ti. (for your sake) => por | para | de | a # I did it for your sake.
Este regalo es ___ ti. (recipient) => para | por | de | a # This present is for you.
El libro fue escrito ___ García Márquez. => por | para | de | con # The book was written by García Márquez.
Coge el abrigo, por si ___. => acaso | caso | casos | acasa # Take your coat, just in case.
___ ser tan joven, sabe mucho. => Para | Por | A | De # For someone so young, he knows a lot.
Voy al gimnasio tres veces ___ semana. => por | para | de | en # I go to the gym three times a week.
`,
    },
    {
      t: 'Relationships & feelings',
      k: 'vocab',
      goal: 'Talk about relationships, friendships and emotions',
      body: `
## Relationships
| | |
|---|---|
| {llevarse bien / mal con} | to get on well / badly with |
| {caer bien / mal} | to like / dislike (a person) |
| {enamorarse de} | to fall in love with |
| {salir con} | to go out with |
| {romper con} | to break up with |
| {pelearse / discutir} | to fight / to argue |
| {hacer las paces} | to make up |
| {echar de menos} | to miss |
| {tener celos} | to be jealous |

> Me llevo muy bien con mi suegra. = I get on very well with my mother-in-law.
> Tu primo me cae muy bien. = I really like your cousin.
> Rompieron después de cinco años. = They broke up after five years.
> Te echo mucho de menos. = I miss you a lot.

## Feelings
{la alegría} (joy), {la tristeza} (sadness), {la vergüenza} (embarrassment), {los celos} (jealousy), {el orgullo} (pride), {la soledad} (loneliness), {la esperanza} (hope).

!warn: {embarazada} means **pregnant**, not embarrassed! Embarrassed = {me da vergüenza}.
!tip: {caer bien} works like gustar: {Me cae bien tu hermano} (I like your brother — as a person).
!de: "Er ist mir sympathisch" = {Me cae bien}; "Ich vermisse dich" = {Te echo de menos}.
`,
      words: `
llevarse bien con = to get on well with
caer bien = to like (a person)
caer mal = to dislike (a person)
salir con = to go out with
romper con = to break up with
hacer las paces = to make up
tener celos = to be jealous
la vergüenza = embarrassment, shame
me da vergüenza = I'm embarrassed
la soledad = loneliness
el suegro, la suegra = father-in-law, mother-in-law
embarazada = pregnant
`,
      phrases: `
Me llevo muy bien con mis compañeros. = I get on very well with my colleagues.
Tu hermano me cae genial. = I really like your brother.
Rompieron después de cinco años juntos. = They broke up after five years together.
Discutieron, pero ya han hecho las paces. = They argued, but they've already made up.
Me da vergüenza hablar en público. = I'm embarrassed to speak in public.
Mi hermana está embarazada. = My sister is pregnant.
`,
      drills: `
Me ___ muy bien con mi jefe. => llevo | caigo | pongo | quedo # I get on very well with my boss.
Tu amiga me ___ muy bien. => cae | lleva | pone | queda # I really like your friend.
Discutimos, pero ya hemos hecho las ___. => paces | pazes | pases | paz # We argued, but we've already made up.
Me da ___ hablar en público. => vergüenza | embarazada | vergonzoso | orgullo # I'm embarrassed to speak in public.
Rompió ___ su novio la semana pasada. => con | de | a | en # She broke up with her boyfriend last week.
`,
    },
    {
      t: 'Diminutives & augmentatives',
      k: 'grammar',
      goal: 'Understand and use -ito, -illo, -ón, -azo',
      body: `
## Diminutives: small, cute, affectionate
| suffix | example |
|---|---|
| {-ito / -ita} | {casa} → {casita}, {perro} → {perrito}, {abuela} → {abuelita} |
| {-cito / -cita} | {café} → {cafecito}, {joven} → {jovencito} |
| {-illo / -illa} (Andalusia) | {chico} → {chiquillo}, {pan} → {panecillo} |
| {-ín / -ina} (north-west Spain) | {pequeño} → {pequeñín} |

> Espera un momentito. = Wait just a moment.
> ¿Quieres un poquito de pan? = Would you like a little bit of bread?
> ¡Qué perrito tan bonito! = What a lovely little dog!

!tip: Diminutives add warmth, not just smallness: {un cafecito} sounds friendlier than {un café}. Spelling keeps the sound: {poco} → {poquito}, {amigo} → {amiguito}.

## Augmentatives: big — or a bit negative
| suffix | example |
|---|---|
| {-ón / -ona} | {casa} → {casona} (big house) |
| {-azo / -aza} | {coche} → {cochazo} (amazing car) |
| {-ote / -ota} | {grande} → {grandote} |

!tip: {-azo} can also mean a blow: {un portazo} (a door slam), {un codazo} (a nudge with the elbow).
!de: Like -chen / -lein (Häuschen, Hündchen): {casita}, {perrito} — but Spanish uses them much more, even on adverbs: {cerquita} (really close).
!ar: Like the Arabic تصغير (كُتَيِّب، بُيَيْت): {casita} ≈ بُيَيْت, {librito} ≈ كُتَيِّب.
`,
      words: `
la casita = little house
el perrito = little dog, puppy
un momentito = just a moment
un poquito = a little bit
el cafecito = (nice little) coffee
la abuelita = granny
el chiquillo, la chiquilla = kid (Andalusia)
la casona = big house
el cochazo = amazing car
el portazo = door slam
el golpe = blow, knock
cerquita = really close
`,
      phrases: `
Espera un momentito, por favor. = Wait just a moment, please.
¿Me das un poquito de agua? = Could you give me a little water?
¡Qué perrito tan bonito! = What a lovely little dog!
Vivimos en una casita junto al mar. = We live in a little house by the sea.
El supermercado está cerquita. = The supermarket is really close.
Se fue y dio un portazo. = He left and slammed the door.
`,
      drills: `
casa → ___ (small) => casita | casota | casona | casaza # little house
perro → ___ (small) => perrito | perrón | perrazo | perrote # little dog
poco → ___ => poquito | pocito | poquete | pocazo # a little bit
café → ___ => cafecito | cafeíto | cafito | cafezazo # nice little coffee
coche → ___ (big, impressive) => cochazo | cochito | cochón | cochota # amazing car
`,
    },
    {
      t: 'Idioms — modismos',
      k: 'vocab',
      goal: 'Understand and use everyday Spanish idioms',
      body: `
## Everyday idioms
| idiom | literally | meaning |
|---|---|---|
| {estar en las nubes} | to be in the clouds | to daydream |
| {tomar el pelo} | to take the hair | to pull someone's leg |
| {costar un ojo de la cara} | to cost an eye of the face | to cost an arm and a leg |
| {ser pan comido} | to be eaten bread | to be a piece of cake |
| {meter la pata} | to put the paw in | to put your foot in it |
| {estar como una cabra} | to be like a goat | to be crazy |
| {no tener pelos en la lengua} | to have no hairs on the tongue | to be outspoken |
| {ponerse las pilas} | to put your batteries in | to get your act together |
| {estar hecho polvo} | to be made dust | to be exhausted |
| {dar en el clavo} | to hit the nail | to hit the nail on the head |
| {echar una mano} | to throw a hand | to give a hand |
| {ser uña y carne} | to be nail and flesh | to be inseparable |

> ¿Me echas una mano con la mudanza? = Can you give me a hand with the move?
> Este examen es pan comido. = This exam is a piece of cake.
> ¡Me estás tomando el pelo! = You're pulling my leg!
> Estoy hecho polvo. = I'm shattered.

!de: Some have German twins: {dar en el clavo} = den Nagel auf den Kopf treffen; {estar en las nubes} = in den Wolken schweben.
!ar: {ser uña y carne} ≈ زي الظفر واللحم — inseparable.
`,
      words: `
estar en las nubes = to daydream
tomar el pelo = to pull someone's leg
costar un ojo de la cara = to cost an arm and a leg
ser pan comido = to be a piece of cake
meter la pata = to put your foot in it
estar como una cabra = to be crazy
ponerse las pilas = to get your act together
estar hecho polvo = to be exhausted
dar en el clavo = to hit the nail on the head
echar una mano = to give a hand
ser uña y carne = to be inseparable
no tener pelos en la lengua = to be outspoken
`,
      phrases: `
¿Me echas una mano con la mudanza? = Can you give me a hand with the move?
Este examen es pan comido. = This exam is a piece of cake.
¡Me estás tomando el pelo! = You're pulling my leg!
Estoy hecho polvo después del viaje. = I'm shattered after the trip.
Ese coche cuesta un ojo de la cara. = That car costs an arm and a leg.
Metí la pata con su novia. = I put my foot in it with his girlfriend.
`,
      drills: `
Este ejercicio es pan ___. => comido | comer | comida | caliente # This exercise is a piece of cake.
¡No me tomes el ___! => pelo | pie | brazo | dedo # Don't pull my leg!
El hotel cuesta un ojo de la ___. => cara | cabeza | mano | boca # The hotel costs an arm and a leg.
¿Me echas una ___? => mano | pierna | cara | pata # Can you give me a hand?
Tienes que ponerte las ___ si quieres aprobar. => pilas | pelas | pistas | patas # You need to get your act together if you want to pass.
Siempre está en las ___. => nubes | estrellas | montañas | olas # He's always daydreaming.
`,
    },
    {
      t: 'Festivals & traditions',
      k: 'culture',
      goal: 'Talk about Spain’s main festivals and everyday customs',
      body: `
## Spain's year of celebrations
| | |
|---|---|
| {la Nochevieja} (31 Dec) | New Year's Eve — eat **12 grapes** at midnight, one per chime! |
| {los Reyes Magos} (6 Jan) | The Three Kings bring children presents; people eat {el roscón de Reyes} |
| {los Carnavales} (Feb) | Carnival — famous in Cádiz and Tenerife |
| {las Fallas} (March, Valencia) | Giant figures are burnt in the streets |
| {la Semana Santa} (Easter) | Holy Week processions, especially in Seville |
| {la Feria de Abril} (Seville) | Flamenco dresses, sevillanas and dancing |
| {San Fermín} (July, Pamplona) | The famous running of the bulls |
| {la Tomatina} (August, Buñol) | A giant tomato fight |
| {las fiestas del pueblo} (summer) | Every village has its own festival |
| {la Nochebuena} (24 Dec) | Christmas Eve family dinner |

## Everyday customs
{la siesta}, {el tapeo} (bar-hopping for tapas), {la sobremesa} (chatting at the table after a meal), {el paseo} (the evening stroll), {los dos besos}.

> En Nochevieja se comen doce uvas. = On New Year's Eve, people eat twelve grapes.
> Los niños esperan a los Reyes Magos. = The children wait for the Three Kings.

!ar: Spain's three cultures live on in festivals like {Moros y Cristianos} in Alcoy, which re-enacts medieval battles with spectacular costumes.
!de: The big present day for Spanish children is traditionally 6 January — {el Día de Reyes} — not 24 December.
`,
      words: `
la Nochevieja = New Year's Eve
las uvas = grapes
los Reyes Magos = the Three Wise Men
el roscón de Reyes = Three Kings' cake
las Fallas = Fallas (Valencia festival)
la Semana Santa = Holy Week, Easter
la procesión = procession
la feria = fair, festival
la Nochebuena = Christmas Eve
la sobremesa = after-meal chat at the table
el tapeo = going out for tapas
el desfile = parade
`,
      phrases: `
En Nochevieja comemos doce uvas. = On New Year's Eve we eat twelve grapes.
Los Reyes Magos traen regalos a los niños. = The Three Kings bring presents to the children.
En Semana Santa hay procesiones en Sevilla. = During Holy Week there are processions in Seville.
La sobremesa puede durar horas. = The after-lunch chat can last for hours.
¿Vamos de tapeo esta noche? = Shall we go for tapas tonight?
En las Fallas se queman figuras gigantes. = During Fallas giant figures are burnt.
`,
      drills: `
En Nochevieja se comen doce ___. => uvas | naranjas | aceitunas | manzanas # On New Year's Eve, twelve grapes are eaten.
Los niños españoles reciben regalos de los Reyes ___. => Magos | Magios | Mágicos | Mayos # Spanish children get presents from the Three Kings.
En Valencia se celebran las ___ en marzo. => Fallas | Fiestas | Ferias | Faldas # Fallas is celebrated in Valencia in March.
Después de comer, nos quedamos de ___ dos horas. => sobremesa | siesta | tapeo | mesa # After lunch we stayed chatting at the table for two hours.
La cena de ___ es el 24 de diciembre. => Nochebuena | Nochevieja | Navidad | Reyes # Christmas Eve dinner is on 24 December.
`,
    },
    {
      t: 'Colloquial Spanish (Spain)',
      k: 'talk',
      goal: 'Understand and use everyday informal Spanish from Spain',
      body: `
## Words you'll hear every day
| | |
|---|---|
| {¡Vale!} | OK! |
| {¡Venga!} | Come on! / OK, bye! |
| {¡Guay!} | Cool! |
| {¡Mola!} / {Me mola} | It's cool! / I like it |
| {¡Qué pasada!} | That's amazing! |
| {¡Qué fuerte!} | Wow! / No way! |
| {tío / tía} | mate, dude (also uncle / aunt) |
| {majo / maja} | nice, friendly |
| {currar / el curro} | to work / job |
| {la pasta} | money (also pasta!) |
| {flipar} | to be amazed |
| {estar hasta las narices} | to be fed up |
| {¡Ostras!} | Wow! / Blimey! |

> ¿Quedamos a las ocho? — ¡Vale, venga! = Shall we meet at eight? — OK, great!
> Tío, ¡qué pasada de concierto! = Man, what an amazing concert!
> Estoy hasta las narices del curro. = I'm fed up with work.
> Me mola mucho tu chaqueta. = I really like your jacket.

!warn: These are informal — perfect with friends, not in a job interview!
!es: Spaniards use fillers constantly: {pues} (well), {bueno} (well…), {o sea} (I mean), {¿sabes?} (you know?), {en plan} (like…). A few of them make you sound natural.
!de: {¡Vale!} is as frequent as German "OK" or "passt"; {tío / tía} ≈ "Alter" — but friendlier.
`,
      words: `
¡vale! = OK!
¡venga! = come on! OK!
¡guay! = cool!
mola = it's cool
¡qué pasada! = that's amazing!
el tío, la tía = mate, dude (colloquial)
majo, maja = nice, friendly
currar = to work (colloquial)
el curro = job (colloquial)
la pasta = money (colloquial); pasta
flipar = to be amazed
o sea = I mean
¡ostras! = wow! blimey!
`,
      phrases: `
¿Quedamos a las ocho? — ¡Vale, venga! = Shall we meet at eight? — OK, great!
Tío, ¡qué pasada de concierto! = Man, what an amazing concert!
Estoy hasta las narices del curro. = I'm fed up with work.
Me mola mucho tu chaqueta. = I really like your jacket.
Tu amiga es muy maja. = Your friend is really nice.
¡Ostras! Se me ha olvidado la cartera. = Blimey! I've forgotten my wallet.
`,
      drills: `
¿Vamos al cine? — ¡___! => Vale | Valor | Valle | Bale # Shall we go to the cinema? — OK!
¡Qué ___ de fiesta! Fue increíble. => pasada | pasado | pasta | pasear # What an amazing party! It was incredible.
Tu novio es muy ___. Me cae genial. => majo | maja | mago | mayo # Your boyfriend is really nice. I really like him.
No tengo ___: estoy a final de mes. (money, colloquial) => pasta | pasada | paso | pata # I've got no money: it's the end of the month.
Me ___ esta canción. (I like it, colloquial) => mola | molo | moles | muela # I really like this song.
`,
    },
  ],
  story: {
    title: 'Nochevieja en la Puerta del Sol',
    text: `
Es 31 de diciembre. Anna, Omar, Laura y Javier han quedado en la Puerta del Sol, en Madrid, para tomar las uvas.
= It's 31 December. Anna, Omar, Laura and Javier have met up in the Puerta del Sol in Madrid to eat the grapes.

—¡Tíos, qué pasada! —dice Laura—. ¡Hay miles de personas! —Sí, y hace un frío que pela —contesta Omar, que lleva gorro, bufanda y dos jerséis.
= "Guys, this is amazing!" says Laura. "There are thousands of people!" "Yes, and it's freezing," answers Omar, who's wearing a hat, a scarf and two jumpers.

Javier le explica a Omar la tradición: —A las doce, el reloj da doce campanadas. Con cada campanada hay que comer una uva. Si te las comes todas, tendrás un año de buena suerte.
= Javier explains the tradition to Omar: "At twelve, the clock strikes twelve chimes. With each chime you have to eat a grape. If you eat them all, you'll have a year of good luck."

—¿Doce uvas en doce segundos? ¡Eso no es pan comido! —Por eso las uvas de Nochevieja son pequeñitas y sin pepitas —se ríe Anna.
= "Twelve grapes in twelve seconds? That's no piece of cake!" "That's why New Year's Eve grapes are tiny and seedless," laughs Anna.

Empiezan las campanadas. Todos comen deprisa… pero a Omar se le caen dos uvas al suelo. —¡Ostras! —grita con la boca llena.
= The chimes begin. Everyone eats fast… but Omar drops two grapes on the ground. "Blimey!" he shouts with his mouth full.

—¡Feliz Año Nuevo! —gritan todos, y se dan besos y abrazos. Laura llora un poquito de emoción: echa de menos a su abuela, pero está feliz con sus amigos.
= "Happy New Year!" they all shout, and they kiss and hug. Laura cries a little with emotion: she misses her grandmother, but she's happy with her friends.

—¿Y ahora qué? —pregunta Omar. —¡Ahora, chocolate con churros hasta las seis de la mañana! —dice Javier—. ¡Venga, vamos!
= "And now what?" asks Omar. "Now, hot chocolate and churros until six in the morning!" says Javier. "Come on, let's go!"
`,
    questions: `
¿Dónde están los amigos? => En la Puerta del Sol | En la Plaza Mayor | En Barcelona # Where are the friends?
¿Qué hay que hacer con cada campanada? => Comer una uva | Dar un beso | Beber agua # What do you have to do with each chime?
¿Qué le pasa a Omar? => Se le caen dos uvas | Se le olvida el gorro | Llega tarde # What happens to Omar?
¿Qué van a hacer después? => Tomar chocolate con churros | Dormir | Volver a Barcelona # What are they going to do afterwards?
`,
  },
}

export default w
