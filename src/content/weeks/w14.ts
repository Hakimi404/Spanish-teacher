import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 14,
  title: 'Telling stories',
  es: 'Érase una vez…',
  cando: [
    'I can choose between the preterite and the imperfect',
    'I can narrate an interrupted action: estaba… cuando…',
    'I can link a story with al principio, entonces, de repente, al final…',
    'I can use verbs that change meaning: conocí / conocía, supe / sabía',
    'I can choose between he comido and comí the way people do in Spain',
    'I can tell a short biography',
  ],
  lessons: [
    {
      t: 'Preterite or imperfect?',
      k: 'grammar',
      goal: 'Choose the right past tense for events and for background',
      body: `
## Two past tenses, two jobs
| Preterite — the events | Imperfect — the background |
|---|---|
| completed actions: {Fui a Sevilla.} | descriptions: {Hacía sol.} |
| a sequence of events: {Llegué, comí y salí.} | habits: {Iba todos los días.} |
| a fixed number of times, a closed period: {Estuve dos horas.} | actions in progress: {Estaba lloviendo.} |
| markers: {ayer, en 2010, una vez} | markers: {siempre, antes, todos los días, de niño} |

> Ayer fui al cine. Hacía frío y había mucha gente. = Yesterday I went to the cinema. It was cold and there were lots of people.
> Cuando era niño, iba a la playa todos los veranos. Un verano fuimos a Mallorca. = When I was a child, I went to the beach every summer. One summer we went to Majorca.

!tip: Think of a film: the **imperfect** is the scenery and the music; the **preterite** is what the actors do.
!de: German Präteritum covers both — Spanish makes you choose: "Es regnete" (background) = {Llovía}; "Es regnete zwei Stunden" (closed period) = {Llovió dos horas}.
!ar: Roughly: preterite ≈ الماضي (أكلتُ), imperfect ≈ كان + المضارع (كنتُ آكل).
`,
      words: `
el cuento = (short) story, tale
érase una vez = once upon a time
una vez = once
un día = one day
el personaje = character
el final = ending
el lugar = place
mientras tanto = meanwhile
durar = to last
el castillo = castle
`,
      phrases: `
Ayer fui al cine. Hacía frío y había mucha gente. = Yesterday I went to the cinema. It was cold and there were lots of people.
De niño iba a la playa todos los veranos. = As a child I went to the beach every summer.
Un verano fuimos a Mallorca. = One summer we went to Majorca.
Estuve dos horas en el médico. = I spent two hours at the doctor's.
Érase una vez una princesa que vivía en un castillo. = Once upon a time there was a princess who lived in a castle.
Llovió todo el día. = It rained all day.
`,
      drills: `
Ayer ___ al médico. (ir, yo) => fui | iba | voy | iré # Yesterday I went to the doctor's.
Cuando era pequeño, ___ al colegio en autobús. (ir, yo) => iba | fui | voy | vaya # When I was little, I went to school by bus.
___ sol y hacía calor. (description) => Hacía | Hizo | Hace | Había # It was sunny and hot.
El año pasado ___ a Japón. (viajar, nosotros) => viajamos | viajábamos | viajaremos | viajemos # Last year we travelled to Japan.
La película ___ tres horas. (durar) => duró | duraba | dura | durará # The film lasted three hours.
Mis abuelos siempre ___ con nosotros en Navidad. (cenar) => cenaban | cenaron | cenan | cenarán # My grandparents always used to have dinner with us at Christmas.
`,
    },
    {
      t: 'Interrupted actions',
      k: 'grammar',
      goal: 'Narrate an action in progress interrupted by an event',
      body: `
## Estaba… cuando…
An ongoing action (**imperfect**) is interrupted by a new event (**preterite**):
> Estaba durmiendo cuando sonó el teléfono. = I was sleeping when the phone rang.
> Cuando salía de casa, empezó a llover. = As I was leaving home, it started to rain.
> Mientras cocinaba, me corté el dedo. = While I was cooking, I cut my finger.
> Iba por la calle y de repente vi a Ana. = I was walking down the street and suddenly I saw Ana.

!tip: **mientras** (while) usually goes with the imperfect; **cuando** + preterite brings in the interruption.
!tip: Two actions happening at the same time → both imperfect: {Mientras yo cocinaba, él leía.}
!de: "Ich schlief, als das Telefon klingelte" = {Dormía cuando sonó el teléfono}.
!ar: {Estaba durmiendo cuando sonó el teléfono} ≈ كنتُ نائمًا عندما رنّ الهاتف.
`,
      words: `
cuando = when
cortarse = to cut oneself
caerse = to fall over
romperse = to break (a bone, an object)
empezar a llover = to start raining
encontrarse con = to bump into
el ladrón, la ladrona = thief
robar = to steal, to rob
la policía = police
de pronto = suddenly
el susto = fright, scare
`,
      phrases: `
Estaba durmiendo cuando sonó el teléfono. = I was sleeping when the phone rang.
Cuando salía de casa, empezó a llover. = As I was leaving home, it started to rain.
Mientras cocinaba, me corté el dedo. = While I was cooking, I cut my finger.
Iba por la calle y me encontré con Ana. = I was walking down the street and bumped into Ana.
Mi hijo se cayó cuando jugaba al fútbol. = My son fell over while he was playing football.
¡Qué susto! = What a fright!
`,
      drills: `
Estaba en la ducha cuando ___ el timbre. (sonar) => sonó | sonaba | suena | sonará # I was in the shower when the doorbell rang.
Mientras yo ___, mi hermano veía la tele. (estudiar) => estudiaba | estudié | estudio | estudiaré # While I was studying, my brother was watching TV.
___ por el parque cuando vi a Pedro. (pasear, yo) => Paseaba | Paseé | Paseo | Pasearé # I was walking in the park when I saw Pedro.
Cuando ___ de casa, empezó a llover. (as I was leaving) => salía | saldré | salgo | saliendo # As I was leaving home, it started to rain.
Mi hija se ___ mientras jugaba. (caer) => cayó | caía | cae | caerá # My daughter fell over while she was playing.
Unos ladrones ___ mi bicicleta anoche. (robar) => robaron | robaban | roban | robarán # Some thieves stole my bike last night.
`,
    },
    {
      t: 'Story connectors',
      k: 'talk',
      goal: 'Tell a story in order and react to other people’s stories',
      body: `
## Telling a story
| | |
|---|---|
| {Un día…} | One day… |
| {Al principio…} | At first… |
| {Primero…} | First… |
| {Entonces…} | Then… / So… |
| {Después / Luego…} | Afterwards / Then… |
| {De repente / De pronto…} | Suddenly… |
| {Al cabo de un rato…} | After a while… |
| {Por fin…} | At last… |
| {Al final…} | In the end… |
| {Al + infinitive} | When / On …ing |

> Al llegar a casa, vi que la puerta estaba abierta. = When I got home, I saw that the door was open.
> Al principio no entendía nada, pero al final aprendí mucho. = At first I didn't understand anything, but in the end I learnt a lot.

!tip: {Al + infinitive} sounds natural and elegant: {Al salir del cine, nos encontramos con Luis.}

## Reacting to a story
{¿Y qué pasó?} (And what happened?), {¿Y entonces?} (And then?), {¡Qué fuerte!} (Wow! — colloquial, Spain), {¡Qué miedo!} (How scary!), {¡No me lo puedo creer!} (I can't believe it!)
`,
      words: `
al principio = at first
entonces = then; so
al cabo de un rato = after a while
por fin = at last
al final = in the end
al llegar = on arriving, when … arrived
¿y qué pasó? = and what happened?
¡qué fuerte! = wow! (Spain, colloquial)
¡qué miedo! = how scary!
no me lo puedo creer = I can't believe it
pasar = to happen; to pass
`,
      phrases: `
Al principio no entendía nada. = At first I didn't understand anything.
Al llegar a casa, vi que la puerta estaba abierta. = When I got home, I saw that the door was open.
Esperamos dos horas y por fin llegó el tren. = We waited two hours and at last the train arrived.
¿Y qué pasó después? = And what happened next?
Al final todo salió bien. = In the end everything turned out fine.
¡Qué fuerte! No me lo puedo creer. = Wow! I can't believe it.
`,
      drills: `
Al ___ a casa, me duché. => llegar | llegué | llegando | llego # When I got home, I showered.
Esperamos mucho y por ___ llegó el autobús. => fin | final | fines | último # We waited a long time and at last the bus arrived.
Al ___ no me gustaba, pero ahora me encanta. => principio | primero | principal | inicio # At first I didn't like it, but now I love it.
Estábamos cenando y de ___ se fue la luz. => repente | rápido | prisa | lejos # We were having dinner and suddenly the power went off.
¿Y qué ___ después? => pasó | pasaba | pasa | pasará # And what happened next?
`,
    },
    {
      t: 'Verbs that change meaning',
      k: 'grammar',
      goal: 'Understand how conocer, saber, querer and poder change in the past',
      body: `
## The tense changes the meaning
| verb | imperfect | preterite |
|---|---|---|
| {conocer} | {conocía} = I knew (someone) | {conocí} = I met (for the first time) |
| {saber} | {sabía} = I knew (a fact) | {supe} = I found out |
| {querer} | {quería} = I wanted | {quise} = I tried; {no quise} = I refused |
| {poder} | {podía} = I could (in general) | {pude} = I managed to; {no pude} = I failed to |
| {tener} | {tenía} = I had | {tuve} = I got, I received |

> Conocí a mi mujer en Granada. = I met my wife in Granada.
> Ya conocía a Pedro. = I already knew Pedro.
> Supe la verdad ayer. = I found out the truth yesterday.
> No sabía que estabas aquí. = I didn't know you were here.
> No quiso venir. = He refused to come.
> Por fin pude abrir la puerta. = At last I managed to open the door.

!de: {conocí} = ich lernte kennen; {supe} = ich erfuhr; {no quiso} = er weigerte sich.
!ar: {conocí} ≈ تعرّفتُ على، {supe} ≈ عرفتُ (اكتشفتُ)، {no quiso} ≈ رفض.
`,
      words: `
conocí = I met (for the first time)
conocía = I knew (someone)
supe = I found out
sabía = I knew
no quiso = he / she refused
quería = I wanted
pude = I managed to
podía = I could (in general)
enterarse = to find out
darse cuenta = to realise
`,
      phrases: `
Conocí a mi mujer en Granada. = I met my wife in Granada.
Ya conocía a tu hermano. = I already knew your brother.
Supe la noticia ayer. = I found out the news yesterday.
No sabía que estabas aquí. = I didn't know you were here.
Mi hijo no quiso comer. = My son refused to eat.
Por fin pude abrir la puerta. = At last I managed to open the door.
`,
      drills: `
___ a mi novio en una fiesta en 2020. (conocer, yo) => Conocí | Conocía | Conozco | Conoceré # I met my boyfriend at a party in 2020.
Yo no ___ que tenías hermanos. (saber) => sabía | supe | sé | sabré # I didn't know you had brothers and sisters.
Ayer ___ que estaba embarazada. (found out) => supe | sabía | sé | sepa # Yesterday I found out she was pregnant.
Intenté llamarte, pero no ___. (poder) => pude | podía | puedo | podré # I tried to call you, but I couldn't get through.
Le pedí ayuda, pero no ___ ayudarme. (refused) => quiso | quería | quiere | querrá # I asked him for help, but he refused to help me.
`,
    },
    {
      t: 'He comido or comí? (Spain)',
      k: 'grammar',
      goal: 'Choose between the perfect and the preterite like people in Spain',
      body: `
## The Spanish way
In Spain, the choice depends on whether the time period is **finished** for the speaker:
| Pretérito perfecto (he comido) | Pretérito indefinido (comí) |
|---|---|
| today: {hoy, esta mañana, esta tarde} | yesterday and before: {ayer, anoche, anteayer} |
| unfinished periods: {esta semana, este mes, este año} | finished periods: {la semana pasada, el mes pasado, en 2019} |
| experiences without a date: {He estado en Perú.} | with a date: {Estuve en Perú en 2019.} |
| {ya, todavía no, alguna vez, nunca} | {hace dos años, el lunes, una vez} |

> Esta mañana he desayunado tarde, pero ayer desayuné temprano. = This morning I had a late breakfast, but yesterday I had an early one.
> Este año he viajado mucho; el año pasado no viajé nada. = This year I've travelled a lot; last year I didn't travel at all.
> ¿Has estado alguna vez en Perú? — Sí, estuve en 2019. = Have you ever been to Peru? — Yes, I went in 2019.

!es: In Latin America and the Canary Islands people mostly use {comí} even for today ({Hoy comí paella}). In Madrid you'll hear {Hoy he comido paella}.
!de: It feels like German "heute habe ich…", but stricter: with {ayer} always use the preterite.
`,
      words: `
esta mañana = this morning
este mes = this month
hasta ahora = until now, so far
en toda mi vida = in my whole life
la diferencia = difference
el pasado = the past
el presente = the present
terminado, terminada = finished
reciente = recent
`,
      phrases: `
Esta mañana he desayunado tarde. = This morning I had breakfast late.
Ayer desayuné muy temprano. = Yesterday I had breakfast very early.
Este mes he trabajado mucho. = This month I've worked a lot.
El mes pasado trabajé poco. = Last month I didn't work much.
¿Has estado en Perú? — Sí, estuve en 2019. = Have you been to Peru? — Yes, I went in 2019.
Hasta ahora todo ha ido bien. = So far everything has gone well.
`,
      drills: `
Hoy ___ mucho. (trabajar, yo) => he trabajado | trabajé | trabajaba | trabajo # Today I've worked a lot.
Ayer ___ mucho. (trabajar, yo) => trabajé | he trabajado | trabajaba | trabajo # Yesterday I worked a lot.
Esta semana ___ dos veces al cine. (ir, nosotros) => hemos ido | fuimos | íbamos | vamos # This week we've been to the cinema twice.
En 2018 ___ a Berlín. (mudarse, yo) => me mudé | me he mudado | me mudaba | me mudo # In 2018 I moved to Berlin.
¿___ alguna vez en México? (estar, tú) => Has estado | Estuviste | Estabas | Estás # Have you ever been to Mexico?
`,
    },
    {
      t: 'A life story: biographies',
      k: 'culture',
      goal: 'Tell the story of someone’s life',
      body: `
## Life events
| | |
|---|---|
| {nacer} | to be born |
| {crecer} | to grow up |
| {ir a la universidad} | to go to university |
| {estudiar una carrera} | to study for a degree |
| {graduarse} | to graduate |
| {conseguir un trabajo} | to get a job |
| {enamorarse} | to fall in love |
| {casarse} | to get married |
| {tener hijos} | to have children |
| {mudarse} | to move (house) |
| {jubilarse} | to retire |
| {morir} | to die |

## A famous life: Federico García Lorca
> Federico García Lorca nació en 1898 en Fuente Vaqueros, cerca de Granada. = Federico García Lorca was born in 1898 in Fuente Vaqueros, near Granada.
> Desde niño le encantaban la música y el teatro. = From childhood he loved music and theatre.
> Estudió en Granada y en Madrid, donde conoció a Dalí y a Buñuel. = He studied in Granada and Madrid, where he met Dalí and Buñuel.
> Escribió poemas y obras de teatro muy famosas, como Bodas de sangre. = He wrote very famous poems and plays, such as Blood Wedding.
> Murió en 1936, al principio de la Guerra Civil. = He died in 1936, at the beginning of the Civil War.

!tip: Biographies use the **preterite** for events ({nació}, {estudió}) and the **imperfect** for descriptions and habits ({le encantaba}, {era}).
!ar: Lorca loved Andalusia's Arab heritage: his book {Diván del Tamarit} uses the {casida} (قصيدة) and the {gacela} (غزل) — forms taken from Arabic poetry.
`,
      words: `
nacer = to be born
crecer = to grow (up)
la universidad = university
la carrera = degree (course); race
graduarse = to graduate
conseguir = to get, to achieve
enamorarse = to fall in love
jubilarse = to retire
la obra de teatro = play
el poema = poem
el escritor, la escritora = writer
la guerra = war
`,
      phrases: `
Mi padre nació en 1960 en Casablanca. = My father was born in 1960 in Casablanca.
Estudió Medicina en la universidad. = He studied Medicine at university.
Se conocieron en un viaje y se enamoraron. = They met on a trip and fell in love.
Se casaron dos años después. = They got married two years later.
Mi abuelo se jubiló a los sesenta y cinco años. = My grandfather retired at sixty-five.
Lorca escribió poemas y obras de teatro. = Lorca wrote poems and plays.
`,
      drills: `
Lorca ___ en 1898. (nacer) => nació | nacía | nace | nacido # Lorca was born in 1898.
De niño le ___ la música. (encantar) => encantaba | encantó | encanta | encantará # As a child he loved music.
En Madrid ___ a Dalí. (conocer, él) => conoció | conocía | conoce | conocerá # In Madrid he met Dalí.
Mis padres se ___ en 1995. (casarse) => casaron | casaban | casan | casarán # My parents got married in 1995.
Mi abuela ___ a los sesenta años. (jubilarse) => se jubiló | se jubilaba | se jubila | se jubilará # My grandmother retired at sixty.
`,
    },
  ],
  story: {
    title: 'El susto',
    text: `
Era una noche de invierno. Llovía mucho y hacía frío. Anna estaba sola en casa porque su compañera de piso estaba de viaje.
= It was a winter night. It was raining hard and it was cold. Anna was alone at home because her flatmate was away.

Eran las doce y Anna estaba leyendo una novela de misterio en el sofá. De repente, oyó un ruido en la cocina.
= It was twelve o'clock and Anna was reading a mystery novel on the sofa. Suddenly, she heard a noise in the kitchen.

Anna dejó el libro y escuchó con atención. No había nadie más en el piso… ¿o sí? Tenía mucho miedo.
= Anna put the book down and listened carefully. There was nobody else in the flat… or was there? She was very scared.

Cogió el móvil y fue despacio hacia la cocina. La puerta estaba cerrada, pero se veía luz por debajo.
= She grabbed her phone and walked slowly towards the kitchen. The door was closed, but there was light under it.

Al abrir la puerta, vio dos ojos verdes que la miraban desde la ventana. Gritó tan fuerte que los vecinos se despertaron.
= When she opened the door, she saw two green eyes looking at her from the window. She screamed so loudly that the neighbours woke up.

¡Era Misi, el gato de la vecina! La ventana estaba abierta y el gato entró para escapar de la lluvia.
= It was Misi, the neighbour's cat! The window was open and the cat had come in to escape the rain.

Al final, Anna se rio mucho, le dio un poco de leche al gato y lo devolvió a su casa. Pero esa noche durmió con la luz encendida.
= In the end Anna laughed a lot, gave the cat some milk and took it back home. But that night she slept with the light on.
`,
    questions: `
¿Qué tiempo hacía? => Llovía y hacía frío | Hacía sol | Nevaba # What was the weather like?
¿Qué estaba haciendo Anna? => Estaba leyendo una novela | Estaba durmiendo | Estaba cocinando # What was Anna doing?
¿Qué oyó Anna? => Un ruido en la cocina | El timbre | Su móvil # What did Anna hear?
¿Quién estaba en la cocina? => El gato de la vecina | Un ladrón | Su compañera de piso # Who was in the kitchen?
`,
  },
}

export default w
