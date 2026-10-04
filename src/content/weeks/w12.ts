import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 12,
  title: 'Last weekend — the preterite',
  es: '¿Qué hiciste ayer?',
  cando: [
    'I can form the preterite of regular -ar, -er and -ir verbs',
    'I can use spelling changes: busqué, llegué, empecé, leyó',
    'I can use the key irregular preterites: fui, hice, tuve, estuve, dije…',
    'I can say when things happened: ayer, anoche, hace dos años…',
    'I can tell someone what I did last weekend',
  ],
  lessons: [
    {
      t: 'Preterite: -ar verbs',
      k: 'grammar',
      goal: 'Talk about finished past actions with -ar verbs',
      body: `
## The simple past (pretérito indefinido)
Use it for **finished actions** at a specific time in the past: yesterday, last week, in 2015.
| | hablar | trabajar |
|---|---|---|
| {yo} | {habl[é]} | {trabaj[é]} |
| {tú} | {habl[aste]} | {trabaj[aste]} |
| {él / ella / usted} | {habl[ó]} | {trabaj[ó]} |
| {nosotros} | {habl[amos]} | {trabaj[amos]} |
| {vosotros} | {habl[asteis]} | {trabaj[asteis]} |
| {ellos / ellas / ustedes} | {habl[aron]} | {trabaj[aron]} |

> Ayer hablé con mi madre. = Yesterday I spoke to my mother.
> ¿Trabajaste el sábado? = Did you work on Saturday?
> El verano pasado viajamos a Italia. = Last summer we travelled to Italy.

!warn: Accents change the meaning: {hablo} (I speak) ≠ {habló} (he spoke).
!tip: The nosotros form is the same as in the present: {hablamos} = we speak / we spoke. The context tells you which.
!es: In Spain: **today, this week** → perfect ({he hablado}); **yesterday, last week, in 2010** → preterite ({hablé}).
!de: Like the German Präteritum ("ich sprach") — but Spanish uses it all the time in everyday speech.
!ar: This is the Spanish الماضي: {hablé} ≈ تكلّمتُ.
`,
      words: `
hablé = I spoke
hablaste = you spoke
habló = he / she spoke
ayer = yesterday
anoche = last night
anteayer = the day before yesterday
el fin de semana pasado = last weekend
la semana pasada = last week
el verano pasado = last summer
llegar = to arrive
esperar = to wait; to hope
ganar = to win; to earn
`,
      phrases: `
Ayer hablé con mi madre. = Yesterday I spoke to my mother.
¿A qué hora llegaste anoche? = What time did you arrive last night?
El verano pasado viajamos a Italia. = Last summer we travelled to Italy.
Mis amigos bailaron toda la noche. = My friends danced all night.
¿Ganó tu equipo el sábado? = Did your team win on Saturday?
Te esperé una hora. = I waited for you for an hour.
`,
      drills: `
Ayer ___ con Ana. (hablar, yo) => hablé | hablo | habló | hable # Yesterday I spoke to Ana.
¿A qué hora ___ anoche? (llegar, tú) => llegaste | llegastes | llegó | llegas # What time did you arrive last night?
Mi padre ___ en un banco treinta años. (trabajar) => trabajó | trabajo | trabajé | trabajaron # My father worked in a bank for thirty years.
Nosotros ___ a Portugal el año pasado. (viajar) => viajamos | viajemos | viajaron | viajasteis # We travelled to Portugal last year.
¿Vosotros ___ la cena? (cocinar) => cocinasteis | cocinastes | cocinaron | cocinamos # Did you (all) cook dinner?
Ellos ___ toda la noche. (bailar) => bailaron | bailó | bailamos | bailasteis # They danced all night.
`,
    },
    {
      t: 'Preterite: -er & -ir verbs',
      k: 'grammar',
      goal: 'Talk about finished past actions with -er and -ir verbs',
      body: `
## -er and -ir share the same endings
| | comer | vivir |
|---|---|---|
| {yo} | {com[í]} | {viv[í]} |
| {tú} | {com[iste]} | {viv[iste]} |
| {él / ella / usted} | {com[ió]} | {viv[ió]} |
| {nosotros} | {com[imos]} | {viv[imos]} |
| {vosotros} | {com[isteis]} | {viv[isteis]} |
| {ellos / ellas / ustedes} | {com[ieron]} | {viv[ieron]} |

> Anoche comí en casa de mis padres. = Last night I ate at my parents'.
> ¿Recibiste mi mensaje? = Did you get my message?
> Vivieron en París tres años. = They lived in Paris for three years.
> ¿Qué aprendisteis en clase? = What did you (all) learn in class?

!tip: {vivimos} = we live / we lived — the same as the present, like -ar verbs.
!tip: Duration needs no preposition: {Vivieron tres años en París} = They lived in Paris for three years.
!de: The same: {Vivieron tres años en París} = Sie lebten drei Jahre in Paris.
`,
      words: `
comí = I ate
comiste = you ate
comió = he / she ate
vivió = he / she lived
aprendí = I learnt
escribió = he / she wrote
conocí = I met
salió = he / she went out
nació = he / she was born
durante = during, for
el año pasado = last year
`,
      phrases: `
Anoche comí en casa de mis padres. = Last night I ate at my parents'.
¿Recibiste mi mensaje? = Did you get my message?
Vivieron en París tres años. = They lived in Paris for three years.
Conocí a mi mujer en 2018. = I met my wife in 2018.
Mi abuelo nació en 1945. = My grandfather was born in 1945.
¿A qué hora salisteis de la fiesta? = What time did you (all) leave the party?
`,
      drills: `
Anoche ___ pescado. (comer, yo) => comí | como | comió | comía # Last night I ate fish.
¿___ mi correo? (recibir, tú) => Recibiste | Recibistes | Recibió | Recibes # Did you get my email?
Mi abuela ___ en un pueblo. (nacer) => nació | nací | nacía | nace # My grandmother was born in a village.
Nosotros ___ en Berlín dos años. (vivir) => vivimos | vivemos | vivieron | vivisteis # We lived in Berlin for two years.
¿A qué hora ___ de casa? (salir, vosotros) => salisteis | salieron | salimos | salistes # What time did you (all) leave home?
Ellos ___ una carta al alcalde. (escribir) => escribieron | escribió | escribimos | escribiron # They wrote a letter to the mayor.
`,
    },
    {
      t: 'Spelling changes: busqué, leyó',
      k: 'grammar',
      goal: 'Spell preterite forms correctly: -car, -gar, -zar and i→y',
      body: `
## Yo forms that change spelling
To keep the sound, -ar verbs ending in **-car, -gar, -zar** change spelling in the **yo** form:
| ending | change | example |
|---|---|---|
| -car | c → qu | {buscar} → {busqué} |
| -gar | g → gu | {llegar} → {llegué} |
| -zar | z → c | {empezar} → {empecé} |

Others: {tocar} → {toqué}, {sacar} → {saqué}, {practicar} → {practiqué}, {pagar} → {pagué}, {jugar} → {jugué}, {cruzar} → {crucé}, {almorzar} → {almorcé}.

!tip: Only the **yo** form changes: {busqué}, but {buscaste}, {buscó}…

## i → y in the 3rd person
-er / -ir verbs with a vowel before the ending change **i → y** in the 3rd person:
| | leer | oír | construir |
|---|---|---|---|
| {él / ella} | {le[y]ó} | {o[y]ó} | {constru[y]ó} |
| {ellos / ellas} | {le[y]eron} | {o[y]eron} | {constru[y]eron} |

Also {leí}, {leíste}, {leímos}, {leísteis} carry an accent. The same happens with {creer} ({creyó}) and {caer} ({cayó}).

!de: It's all about the sound: "c" before "e" would sound like θ, so Spanish writes {qué}: {busqué}.
`,
      words: `
busqué = I looked for
llegué = I arrived
empecé = I started
pagué = I paid
jugué = I played
toqué = I touched; I played (an instrument)
practiqué = I practised
leyó = he / she read
oyó = he / she heard
creyó = he / she believed
cayó = he / she fell
construyó = he / she built
`,
      phrases: `
Llegué a casa a las diez. = I got home at ten.
Ayer empecé un curso de español. = Yesterday I started a Spanish course.
Pagué la cena con tarjeta. = I paid for dinner by card.
Mi hijo leyó el libro en dos días. = My son read the book in two days.
Busqué mis llaves por todas partes. = I looked for my keys everywhere.
¿Oíste la noticia? = Did you hear the news?
`,
      drills: `
Ayer ___ a las ocho. (llegar, yo) => llegué | llegé | llegó | llegue # Yesterday I arrived at eight.
___ la cuenta con tarjeta. (pagar, yo) => Pagué | Pagé | Pagó | Pague # I paid the bill by card.
El lunes ___ a trabajar. (empezar, yo) => empecé | empezé | empezó | empiezo # On Monday I started work.
Mi hermana ___ el periódico. (leer) => leyó | leió | leó | lee # My sister read the newspaper.
Ayer ___ al tenis. (jugar, yo) => jugué | jugé | juegué | jugó # Yesterday I played tennis.
Mis abuelos ___ esta casa en 1960. (construir) => construyeron | construieron | construyó | construían # My grandparents built this house in 1960.
`,
    },
    {
      t: 'Irregulars I: fui, hice, tuve',
      k: 'grammar',
      goal: 'Use the most frequent irregular preterites: ser, ir, hacer, tener, estar',
      body: `
## ser and ir: identical!
| | ser / ir |
|---|---|
| {yo} | {fui} |
| {tú} | {fuiste} |
| {él / ella / usted} | {fue} |
| {nosotros} | {fuimos} |
| {vosotros} | {fuisteis} |
| {ellos / ellas / ustedes} | {fueron} |

Context tells you which: {Fui al cine} (I went to the cinema) vs {Fue increíble} (it was incredible).

## Strong stems
New stem + endings **-e, -iste, -o, -imos, -isteis, -ieron**, with **no accents**:
| | hacer | tener | estar |
|---|---|---|---|
| {yo} | {hice} | {tuve} | {estuve} |
| {tú} | {hiciste} | {tuviste} | {estuviste} |
| {él / ella / usted} | {hizo} | {tuvo} | {estuvo} |
| {nosotros} | {hicimos} | {tuvimos} | {estuvimos} |
| {vosotros} | {hicisteis} | {tuvisteis} | {estuvisteis} |
| {ellos / ellas / ustedes} | {hicieron} | {tuvieron} | {estuvieron} |

!tip: {hizo} is written with **z** to keep the sound.

> ¿Qué hiciste el fin de semana? = What did you do at the weekend?
> Fuimos a la playa. = We went to the beach.
> Estuve en Sevilla en 2022. = I was in Seville in 2022.
> Tuve que trabajar. = I had to work.

!de: Like German strong verbs (ging, war, hatte) — just learn them by heart.
`,
      words: `
fui = I went; I was
fuiste = you went; you were
fue = he / she went; it was
fueron = they went; they were
hice = I did, I made
hizo = he / she did
tuve = I had
tuvo = he / she had
estuve = I was (somewhere)
estuvo = he / she was
tuve que = I had to
increíble = incredible
`,
      phrases: `
¿Qué hiciste el fin de semana? = What did you do at the weekend?
Fuimos a la playa con unos amigos. = We went to the beach with some friends.
La fiesta fue increíble. = The party was incredible.
Estuve en Sevilla en 2022. = I was in Seville in 2022.
Tuve que trabajar el domingo. = I had to work on Sunday.
¿Dónde estuvisteis ayer? = Where were you (all) yesterday?
`,
      drills: `
El sábado ___ al cine. (ir, yo) => fui | fue | iba | fuí # On Saturday I went to the cinema.
¿Qué ___ ayer? (hacer, tú) => hiciste | haciste | hizo | hacías # What did you do yesterday?
El concierto ___ fantástico. (ser) => fue | fui | fueron | fuimos # The concert was fantastic.
Mi hermano ___ un accidente. (tener) => tuvo | tenió | tuve | tenía # My brother had an accident.
Nosotros ___ en Granada en abril. (estar) => estuvimos | estuvieron | estuvisteis | estuve # We were in Granada in April.
Ellos ___ los deberes. (hacer) => hicieron | hacieron | hizieron | hicimos # They did their homework.
`,
    },
    {
      t: 'Irregulars II: dije, pude, vine',
      k: 'grammar',
      goal: 'Use more irregular preterites: decir, poder, poner, venir, traer, dar, ver',
      body: `
## More strong stems (-e, -iste, -o, -imos, -isteis, -ieron)
| infinitive | stem | yo | él |
|---|---|---|---|
| {poder} | pud- | {pude} | {pudo} |
| {poner} | pus- | {puse} | {puso} |
| {saber} | sup- | {supe} | {supo} |
| {querer} | quis- | {quise} | {quiso} |
| {venir} | vin- | {vine} | {vino} |
| {andar} | anduv- | {anduve} | {anduvo} |

## j-stems: ellos ends in -eron
| infinitive | yo | él | ellos |
|---|---|---|---|
| {decir} | {dije} | {dijo} | {dijeron} |
| {traer} | {traje} | {trajo} | {trajeron} |
| {conducir} | {conduje} | {condujo} | {condujeron} |

## dar and ver
{dar}: {di}, {diste}, {dio}, {dimos}, {disteis}, {dieron} — no accents.
{ver}: {vi}, {viste}, {vio}, {vimos}, {visteis}, {vieron}.

> ¿Qué te dijo? = What did he tell you?
> No pude ir a la fiesta. = I couldn't go to the party.
> Mis padres vinieron a verme. = My parents came to see me.
> ¿Viste el partido? = Did you see the match?

!tip: Some verbs change meaning in the preterite: {supe} = I found out; {conocí} = I met (for the first time); {no quise} = I refused.
!de: {Supe la noticia} = Ich erfuhr die Nachricht — "found out", not "knew".
`,
      words: `
pude = I could, I managed to
puse = I put
supe = I found out
quise = I wanted
vine = I came
vino = he / she came
dije = I said
dijo = he / she said
traje = I brought
di = I gave
vi = I saw
el partido = match, game
`,
      phrases: `
¿Qué te dijo tu jefe? = What did your boss tell you?
No pude ir a la fiesta. = I couldn't go to the party.
Mis padres vinieron a verme. = My parents came to see me.
¿Viste el partido anoche? = Did you watch the match last night?
Le di un regalo a mi madre. = I gave my mother a present.
Traje vino y postre. = I brought wine and dessert.
`,
      drills: `
¿Qué te ___ Ana? (decir) => dijo | dició | dijó | dijeron # What did Ana tell you?
Ayer no ___ dormir. (poder, yo) => pude | podí | pudo | puedo # Yesterday I couldn't sleep.
Mis tíos ___ a la boda. (venir) => vinieron | venieron | vinó | vinimos # My aunt and uncle came to the wedding.
¿Dónde ___ las llaves? (poner, tú) => pusiste | ponaste | pusite | puso # Where did you put the keys?
Ellos ___ un pastel. (traer) => trajeron | trajieron | traieron | trajo # They brought a cake.
Anoche ___ una película muy buena. (ver, yo) => vi | ví | veí | vio # Last night I saw a very good film.
`,
    },
    {
      t: 'When? Ayer, hace dos años…',
      k: 'talk',
      goal: 'Say when things happened and tell someone about your weekend',
      body: `
## Time expressions for the preterite
| | |
|---|---|
| {ayer} | yesterday |
| {anteayer} | the day before yesterday |
| {anoche} | last night |
| {el lunes pasado} | last Monday |
| {la semana pasada} | last week |
| {el mes pasado} | last month |
| {el año pasado} | last year |
| {hace dos días} | two days ago |
| {hace un año} | a year ago |
| {en 2015} | in 2015 |
| {el 3 de mayo} | on 3 May |

## hace + time = ago
> Llegué a España hace tres meses. = I arrived in Spain three months ago.
> ¿Cuándo empezaste a estudiar español? — Hace dos semanas. = When did you start learning Spanish? — Two weeks ago.

!de: {hace} + time = "vor": {hace dos años} = vor zwei Jahren.
!ar: {hace} + time ≈ قبل: {hace dos años} ≈ قبل سنتين.

## Last weekend
> El sábado me levanté tarde, fui al mercado y por la tarde vi una película con unos amigos. = On Saturday I got up late, went to the market and in the afternoon watched a film with some friends.
> El domingo comí con mi familia y después di un paseo. = On Sunday I had lunch with my family and then went for a walk.
`,
      words: `
el lunes pasado = last Monday
el mes pasado = last month
hace dos días = two days ago
hace un año = a year ago
hace mucho tiempo = a long time ago
la boda = wedding
nacer = to be born
mudarse = to move (house)
casarse = to get married
empezar a = to start (doing)
dar un paseo = to go for a walk
`,
      phrases: `
Llegué a España hace tres meses. = I arrived in Spain three months ago.
El año pasado me mudé a Madrid. = Last year I moved to Madrid.
Mis padres se casaron en 1990. = My parents got married in 1990.
Empecé a estudiar español hace dos semanas. = I started learning Spanish two weeks ago.
La boda fue el sábado pasado. = The wedding was last Saturday.
El domingo dimos un paseo por el parque. = On Sunday we went for a walk in the park.
`,
      drills: `
Llegué a Madrid ___ dos años. => hace | desde | hacía | antes # I arrived in Madrid two years ago.
El año ___ fui a Japón. => pasado | pasada | que viene | próximo # Last year I went to Japan.
___ me acosté muy tarde. (last night) => Anoche | Mañana | Hoy | Esta noche # Last night I went to bed very late.
Mis padres se ___ en 1990. (casarse) => casaron | casó | casaste | casan # My parents got married in 1990.
La semana ___ estuve enfermo. => pasada | pasado | que viene | próxima # Last week I was ill.
`,
    },
  ],
  story: {
    title: 'Un fin de semana en Sevilla',
    text: `
El lunes por la mañana Laura le pregunta a Anna: —¿Qué tal el fin de semana? ¿Qué hiciste?
= On Monday morning Laura asks Anna: "How was the weekend? What did you do?"

—¡Fui a Sevilla con Omar! Salimos el viernes por la tarde en el AVE, el tren de alta velocidad. Llegamos en dos horas y media.
= "I went to Seville with Omar! We left on Friday afternoon on the AVE, the high-speed train. We got there in two and a half hours."

—¡Qué bien! ¿Y qué visitasteis? —El sábado por la mañana vimos la catedral y subimos a la Giralda. Omar me explicó que antes fue el minarete de una mezquita.
= "Great! And what did you visit?" "On Saturday morning we saw the cathedral and climbed the Giralda. Omar explained to me that it used to be the minaret of a mosque."

—Por la tarde paseamos por el barrio de Santa Cruz y comimos unas tapas buenísimas. Por la noche fuimos a un espectáculo de flamenco. ¡Fue increíble!
= "In the afternoon we walked around the Santa Cruz neighbourhood and ate some amazing tapas. At night we went to a flamenco show. It was incredible!"

—¿Y el domingo? —El domingo hizo muchísimo calor: ¡treinta y cinco grados en octubre! Visitamos el Real Alcázar y descansamos en el parque de María Luisa.
= "And on Sunday?" "On Sunday it was really hot: thirty-five degrees in October! We visited the Royal Alcázar and rested in María Luisa Park."

—¿Cuándo volvisteis? —Volvimos el domingo por la noche. Llegué a casa muy cansada, pero muy contenta.
= "When did you come back?" "We came back on Sunday night. I got home very tired, but very happy."

—¡Qué envidia! Yo estuve todo el fin de semana en casa estudiando.
= "I'm so jealous! I spent the whole weekend at home studying."
`,
    questions: `
¿Cómo fueron a Sevilla? => En tren | En coche | En avión # How did they get to Seville?
¿Qué fue antes la Giralda? => El minarete de una mezquita | Un palacio | Una estación # What was the Giralda before?
¿Qué vieron el sábado por la noche? => Un espectáculo de flamenco | Un partido de fútbol | Una película # What did they see on Saturday night?
¿Qué tiempo hizo el domingo? => Mucho calor | Mucho frío | Llovió # What was the weather like on Sunday?
¿Qué hizo Laura el fin de semana? => Estudió en casa | Fue a la playa | Viajó a Toledo # What did Laura do at the weekend?
`,
  },
}

export default w
