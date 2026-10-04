import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 13,
  title: 'When I was a child — the imperfect',
  es: 'Cuando era niño',
  cando: [
    'I can form the imperfect of regular verbs and of ser, ir and ver',
    'I can talk about past habits: de niño…, solía…, antes…',
    'I can describe people, places and situations in the past',
    'I can use -ir stem changes in the preterite: pidió, durmió',
    'I can set a scene with había and estaba + gerund',
  ],
  lessons: [
    {
      t: 'The imperfect: regular verbs',
      k: 'grammar',
      goal: 'Form the imperfect and use it for past habits',
      body: `
## Pretérito imperfecto
The imperfect shows the past as **ongoing**: habits, descriptions and background — without focusing on a beginning or an end.
| | hablar | comer | vivir |
|---|---|---|---|
| {yo} | {habl[aba]} | {com[ía]} | {viv[ía]} |
| {tú} | {habl[abas]} | {com[ías]} | {viv[ías]} |
| {él / ella / usted} | {habl[aba]} | {com[ía]} | {viv[ía]} |
| {nosotros} | {habl[ábamos]} | {com[íamos]} | {viv[íamos]} |
| {vosotros} | {habl[abais]} | {com[íais]} | {viv[íais]} |
| {ellos / ellas / ustedes} | {habl[aban]} | {com[ían]} | {viv[ían]} |

!tip: Yo and él / ella look the same — add the subject when needed: {Yo trabajaba y ella estudiaba}.
!tip: No stem changes and no spelling changes: {pensaba}, {dormía}, {pedía}, {jugaba}.

> De niño vivía en un pueblo. = As a child I lived in a village.
> Mi abuela cocinaba muy bien. = My grandmother used to cook very well.
> Antes trabajábamos los sábados. = We used to work on Saturdays.

!de: Think "used to …" or "was …ing". German uses Präteritum or "früher": {Antes jugaba al fútbol} = Früher spielte ich Fußball.
!ar: Like كان + المضارع: {Jugaba al fútbol} ≈ كنتُ ألعب كرة القدم.
`,
      words: `
hablaba = I / he used to speak
comía = I / he used to eat
vivía = I / he used to live
jugaba = I / he used to play
trabajaba = I / he used to work
antes = before, in the past
de niño, de niña = as a child
de pequeño, de pequeña = when I was little
todos los veranos = every summer
la infancia = childhood
los dibujos animados = cartoons
`,
      phrases: `
De niño vivía en un pueblo pequeño. = As a child I lived in a small village.
Mi abuela cocinaba muy bien. = My grandmother used to cook very well.
Antes trabajábamos los sábados. = We used to work on Saturdays.
Todos los veranos íbamos a la playa. = Every summer we used to go to the beach.
¿Qué hacías los domingos? = What did you use to do on Sundays?
Veía dibujos animados todas las mañanas. = I used to watch cartoons every morning.
`,
      drills: `
De niño ___ al fútbol todos los días. (jugar, yo) => jugaba | jugué | juego | jugó # As a child I used to play football every day.
Mi abuelo siempre ___ historias. (contar) => contaba | contó | cuenta | contaron # My grandfather always used to tell stories.
Antes nosotros ___ pescado los viernes. (comer) => comíamos | comimos | comemos | comían # We used to eat fish on Fridays.
¿Qué ___ en tu tiempo libre de pequeño? (hacer, tú) => hacías | hiciste | haces | hacía # What did you use to do in your free time as a kid?
Mis padres ___ a las diez todas las noches. (cenar) => cenaban | cenaron | cenan | cenaba # My parents used to have dinner at ten every night.
Vosotros ___ mucho cuando erais niños. (jugar) => jugabais | jugasteis | jugáis | jugaban # You (all) used to play a lot when you were children.
`,
    },
    {
      t: 'Ser, ir, ver — and describing',
      k: 'grammar',
      goal: 'Use the three irregular imperfects and describe the past',
      body: `
## Only three irregular verbs!
| | ser | ir | ver |
|---|---|---|---|
| {yo} | {era} | {iba} | {veía} |
| {tú} | {eras} | {ibas} | {veías} |
| {él / ella / usted} | {era} | {iba} | {veía} |
| {nosotros} | {éramos} | {íbamos} | {veíamos} |
| {vosotros} | {erais} | {ibais} | {veíais} |
| {ellos / ellas / ustedes} | {eran} | {iban} | {veían} |

> Cuando era pequeño, era muy tímido. = When I was little, I was very shy.
> Íbamos al colegio a pie. = We used to walk to school.
> Veíamos la tele con mis abuelos. = We used to watch TV with my grandparents.

## Describing the past: era, había, hacía, tenía
> Era una casa grande con jardín. = It was a big house with a garden.
> Había muchos niños en mi calle. = There were lots of children in my street.
> Hacía mucho frío en invierno. = It was very cold in winter.
> Tenía el pelo largo. = I had long hair.

!tip: {había} (there was / there were) is the imperfect of {hay} — always singular: {Había dos parques.}
!de: {había} = es gab: {Había un cine} = Es gab ein Kino.
!ar: {había} ≈ كان هناك / كان في.
`,
      words: `
era = I was, he / she / it was
éramos = we were
iba = I used to go
íbamos = we used to go
veía = I used to see, to watch
había = there was, there were
hacía calor = it was hot
tenía = I had, he / she had
cuando era pequeño = when I was little
el vecino, la vecina = neighbour
tranquilo, tranquila = quiet, calm
`,
      phrases: `
Cuando era pequeña, era muy tímida. = When I was little, I was very shy.
Íbamos al colegio a pie. = We used to walk to school.
Había un cine en mi barrio. = There was a cinema in my neighbourhood.
Mi pueblo era muy tranquilo. = My village was very quiet.
En verano hacía mucho calor. = In summer it was very hot.
Mis vecinos tenían un perro enorme. = My neighbours had a huge dog.
`,
      drills: `
Cuando ___ niño, vivía en el campo. (ser, yo) => era | fui | soy | estaba # When I was a child, I lived in the countryside.
Todos los domingos ___ a casa de mis abuelos. (ir, nosotros) => íbamos | fuimos | vamos | ibamos # Every Sunday we used to go to my grandparents'.
___ mucha gente en la plaza. (there used to be) => Había | Habían | Hubo | Hay # There used to be lots of people in the square.
Mi casa ___ muy grande. (ser) => era | fue | estaba | es # My house was very big.
Antes ___ la tele todas las noches. (ver, yo) => veía | vi | vía | veo # I used to watch TV every night.
Mi abuela ___ el pelo blanco. (tener) => tenía | tuvo | tiene | teniá # My grandmother had white hair.
`,
    },
    {
      t: 'Then & now: soler, ya no',
      k: 'talk',
      goal: 'Compare how things used to be with how they are now',
      body: `
## Talking about how things used to be
| | |
|---|---|
| {antes} | before, in the past |
| {de niño / de pequeño} | as a child |
| {cuando era joven} | when I was young |
| {siempre} | always |
| {todos los días / veranos} | every day / summer |
| {a menudo} | often |

## soler + infinitive
**soler** (o → ue) expresses habits — in the present ({suelo}) and the past ({solía}):
> Suelo levantarme a las siete. = I usually get up at seven.
> De niño solía jugar en la calle. = As a child I used to play in the street.
> ¿Qué solías hacer en verano? = What did you use to do in summer?

## Then and now
> Antes vivía en Rabat; ahora vivo en Madrid. = I used to live in Rabat; now I live in Madrid.
> Antes no me gustaba el café, pero ahora me encanta. = I didn't use to like coffee, but now I love it.
> Ya no fumo. = I don't smoke any more.

!de: {solía} = pflegte zu / früher immer: {Solía leer mucho} = Früher habe ich viel gelesen. And {ya no} = nicht mehr.
!ar: {solía} ≈ اعتدتُ أن، {ya no} ≈ لم أعد.
`,
      words: `
soler = to usually (do)
suelo = I usually
solía = I used to
cuando era joven = when I was young
ya no = not any more
el campo = countryside; field
el juguete = toy
la bicicleta = bicycle
el recuerdo = memory
echar de menos = to miss (Spain)
`,
      phrases: `
Suelo levantarme a las siete. = I usually get up at seven.
De niño solía jugar en la calle. = As a child I used to play in the street.
Antes vivía en el campo; ahora vivo en la ciudad. = I used to live in the countryside; now I live in the city.
Ya no fumo. = I don't smoke any more.
Echo de menos a mi familia. = I miss my family.
Tengo muy buenos recuerdos de mi infancia. = I have very good memories of my childhood.
`,
      drills: `
De niño ___ jugar al fútbol en la calle. (soler, yo) => solía | suelo | solí | sueles # As a child I used to play football in the street.
Normalmente ___ cenar a las nueve. (soler, nosotros) => solemos | suelemos | suelen | soléis # We usually have dinner at nine.
Antes fumaba, pero ___ no fumo. => ya | todavía | aún | nunca # I used to smoke, but I don't any more.
___ de menos a mis padres. (echar, yo) => Echo | Hecho | Echar | Echa # I miss my parents.
Antes ___ en Marruecos; ahora vivo en España. (vivir, yo) => vivía | vivo | viviré | vivíamos # I used to live in Morocco; now I live in Spain.
`,
    },
    {
      t: 'Describing the past',
      k: 'vocab',
      goal: 'Describe people, places and situations in the past',
      body: `
## People, places and situations
Use the imperfect to set the scene — what things **were like**:
> Mi abuelo era alto y tenía bigote. = My grandfather was tall and had a moustache.
> La casa tenía tres dormitorios y un patio con naranjos. = The house had three bedrooms and a courtyard with orange trees.
> Las calles eran estrechas y no había coches. = The streets were narrow and there were no cars.
> Era primavera y hacía buen tiempo. = It was spring and the weather was nice.
> Estábamos muy contentos. = We were very happy.

## Useful adjectives
{antiguo} (old, ancient), {moderno}, {estrecho} (narrow), {ancho} (wide), {ruidoso} (noisy), {tranquilo} (quiet), {limpio} (clean), {sucio} (dirty), {precioso} (beautiful), {feo} (ugly), {lleno} (full), {vacío} (empty).

!es: Traditional Andalusian houses have a {patio} with plants and a fountain — a design inherited from al-Andalus.
!ar: The Andalusian {patio}, the {azulejos} (tiles — from الزليج) and the courtyard fountain all echo Arab architecture.
`,
      words: `
antiguo, antigua = old, ancient
moderno, moderna = modern
estrecho, estrecha = narrow
ancho, ancha = wide
ruidoso, ruidosa = noisy
limpio, limpia = clean
sucio, sucia = dirty
lleno, llena = full
vacío, vacía = empty
el patio = courtyard
los azulejos = (glazed) tiles
el bigote = moustache
la barba = beard
`,
      phrases: `
Mi abuelo era alto y tenía barba. = My grandfather was tall and had a beard.
La casa tenía un patio con naranjos. = The house had a courtyard with orange trees.
Las calles eran estrechas y antiguas. = The streets were narrow and old.
Era primavera y hacía buen tiempo. = It was spring and the weather was good.
El tren estaba lleno de gente. = The train was full of people.
El barrio era tranquilo pero un poco sucio. = The neighbourhood was quiet but a bit dirty.
`,
      drills: `
La calle ___ muy estrecha. => era | fue | estuvo | eran # The street was very narrow.
Mi abuelo ___ bigote. => tenía | tuvo | era | había # My grandfather had a moustache.
___ mucha gente en el mercado. => Había | Era | Estaba | Tenía # There were lots of people at the market.
El restaurante estaba ___. No había nadie. => vacío | lleno | limpio | ancho # The restaurant was empty. There was nobody there.
La ciudad era muy ___: había mucho tráfico. => ruidosa | tranquila | vacía | limpia # The city was very noisy: there was a lot of traffic.
`,
    },
    {
      t: 'Preterite stem changes: pidió, durmió',
      k: 'grammar',
      goal: 'Use -ir stem-changing verbs in the preterite',
      body: `
## Stem changes in the past
-ir verbs that change their stem in the present **also** change in the preterite — but only in the **3rd person** (él / ellos), and only **e → i** or **o → u**:
| | pedir | dormir | sentir |
|---|---|---|---|
| {yo} | {pedí} | {dormí} | {sentí} |
| {tú} | {pediste} | {dormiste} | {sentiste} |
| {él / ella / usted} | {p[i]dió} | {d[u]rmió} | {s[i]ntió} |
| {nosotros} | {pedimos} | {dormimos} | {sentimos} |
| {vosotros} | {pedisteis} | {dormisteis} | {sentisteis} |
| {ellos / ellas / ustedes} | {p[i]dieron} | {d[u]rmieron} | {s[i]ntieron} |

More: {servir} → {sirvió}, {repetir} → {repitió}, {seguir} → {siguió}, {preferir} → {prefirió}, {divertirse} → {se divirtió}, {morir} → {murió}, {vestirse} → {se vistió}.

!tip: -ar and -er stem changers do **not** change in the preterite: {pensé}, {pensó}; {volví}, {volvió}.

> Mi hijo durmió diez horas. = My son slept ten hours.
> ¿Qué pidieron tus amigos? = What did your friends order?
> Nos divertimos mucho, y ellos se divirtieron también. = We had a lot of fun, and so did they.

!de: Think of the gerund as a reminder: {pidiendo} → {pidió}, {durmiendo} → {durmió}.
`,
      words: `
pidió = he / she asked for, ordered
pidieron = they asked for, ordered
durmió = he / she slept
durmieron = they slept
sintió = he / she felt
sirvió = he / she served
repitió = he / she repeated
siguió = he / she followed, continued
prefirió = he / she preferred
se divirtió = he / she had fun
murió = he / she died
`,
      phrases: `
Mi hijo durmió diez horas. = My son slept ten hours.
¿Qué pidieron tus amigos? = What did your friends order?
El camarero nos sirvió muy rápido. = The waiter served us very quickly.
Se divirtieron mucho en la fiesta. = They had a lot of fun at the party.
Mi abuelo murió en 2010. = My grandfather died in 2010.
El profesor repitió la pregunta. = The teacher repeated the question.
`,
      drills: `
Anoche mi hermano ___ muy mal. (dormir) => durmió | dormió | duermió | durmieron # Last night my brother slept very badly.
Ella ___ una paella. (pedir) => pidió | pedió | pidío | pido # She ordered a paella.
Los niños ___ mucho en el parque. (divertirse) => se divirtieron | se divertieron | se divirtió | se divierten # The children had a lot of fun in the park.
Yo ___ la cena a las nueve. (servir) => serví | sirví | sirvió | servió # I served dinner at nine.
Ellos ___ el camino del río. (seguir) => siguieron | seguieron | siguió | seguimos # They followed the river path.
¿Qué ___ tú? (pedir) => pediste | pidiste | pidió | pedía # What did you order?
`,
    },
    {
      t: 'Había & estaba + gerund',
      k: 'grammar',
      goal: 'Set the scene of a story with había, hubo and estaba + gerund',
      body: `
## Setting the scene
Two imperfect tools for background:
- **había** = there was / there were (imperfect of hay): {Había mucha gente.}
- **estaba + gerund** = was …ing (an action in progress): {Estaba lloviendo.}

> Cuando llegué, estaban cenando. = When I arrived, they were having dinner.
> Estábamos viendo la tele. = We were watching TV.
> ¿Qué estabas haciendo a las diez? = What were you doing at ten?

## había or hubo?
| había (imperfect) | hubo (preterite) |
|---|---|
| background, description: {Había un parque.} | an event that happened: {Hubo un accidente.} |

!tip: Both are always singular: {Había muchas personas}, {Hubo dos accidentes}.
!de: {estaba + Gerundio} = "war gerade dabei zu …": {Estaba comiendo} = Ich aß gerade.
!ar: {estaba + gerund} ≈ كنتُ + المضارع: {Estaba comiendo} ≈ كنتُ آكل.
`,
      words: `
estaba comiendo = I was eating
estábamos viendo = we were watching
había = there was, there were
hubo = there was (an event)
el accidente = accident
la tormenta = storm
de repente = suddenly
mientras = while
sonar = to ring, to sound
el timbre = doorbell
`,
      phrases: `
Cuando llegué, estaban cenando. = When I arrived, they were having dinner.
¿Qué estabas haciendo a las diez? = What were you doing at ten?
Estaba lloviendo y hacía frío. = It was raining and it was cold.
Ayer hubo un accidente en la autopista. = Yesterday there was an accident on the motorway.
Mientras cocinaba, sonó el timbre. = While I was cooking, the doorbell rang.
Había una tormenta terrible. = There was a terrible storm.
`,
      drills: `
Cuando me llamaste, ___ durmiendo. (estar, yo) => estaba | estuve | estoy | era # When you called me, I was sleeping.
Los niños estaban ___ en el jardín. (jugar) => jugando | jugado | juegando | jugaban # The children were playing in the garden.
Ayer ___ un accidente en mi calle. => hubo | hubieron | habían | hay # Yesterday there was an accident in my street.
En mi pueblo ___ una plaza muy bonita. => había | hubo | habían | estaba # In my village there was a very pretty square.
___ veía la tele, mi madre cocinaba. => Mientras | Durante | Entre | Luego # While I was watching TV, my mother was cooking.
`,
    },
  ],
  story: {
    title: 'La abuela Carmen',
    text: `
La abuela de Laura se llama Carmen y tiene ochenta y dos años. Un domingo, Laura le pregunta: —Abuela, ¿cómo era tu vida cuando eras niña?
= Laura's grandmother is called Carmen and she's eighty-two. One Sunday Laura asks her: "Grandma, what was your life like when you were a girl?"

—Ay, hija, era muy diferente. Vivíamos en un pueblo pequeño de Jaén, en Andalucía. No había agua en las casas: mi madre iba a la fuente todas las mañanas.
= "Oh, my dear, it was very different. We lived in a small village in Jaén, in Andalusia. There was no water in the houses: my mother went to the fountain every morning."

—¿Y tú ibas al colegio? —Sí, pero solo hasta los doce años. Después ayudaba a mi padre en el campo. Recogíamos aceitunas en invierno.
= "And did you go to school?" "Yes, but only until I was twelve. After that I helped my father in the fields. We picked olives in winter."

—¿Qué hacíais para divertiros? —Los niños jugábamos en la plaza hasta la noche. No teníamos televisión, pero éramos muy felices.
= "What did you do for fun?" "We children played in the square until night. We didn't have television, but we were very happy."

—En verano hacía muchísimo calor, y por las noches los vecinos sacaban las sillas a la calle y hablaban hasta muy tarde.
= "In summer it was terribly hot, and at night the neighbours brought their chairs out into the street and talked until very late."

—Un día llegó al pueblo el primer coche. ¡Todos salimos a verlo! Fue un día inolvidable.
= "One day the first car arrived in the village. We all went out to see it! It was an unforgettable day."

Laura escucha con atención. —Abuela, tus historias son preciosas. —Ay, hija, ¡qué tiempos aquellos!
= Laura listens carefully. "Grandma, your stories are lovely." "Oh, my dear — those were the days!"
`,
    questions: `
¿Dónde vivía la abuela Carmen? => En un pueblo de Jaén | En Madrid | En Sevilla # Where did Grandma Carmen live?
¿Por qué iba su madre a la fuente? => No había agua en las casas | Le gustaba pasear | Trabajaba allí # Why did her mother go to the fountain?
¿Qué recogían en invierno? => Aceitunas | Naranjas | Uvas # What did they pick in winter?
¿Qué pasó un día en el pueblo? => Llegó el primer coche | Hubo una tormenta | Abrieron un cine # What happened one day in the village?
`,
  },
}

export default w
