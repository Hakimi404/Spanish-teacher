import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 7,
  title: 'My day — stem changes & routine',
  es: 'Un día normal',
  cando: [
    'I can use o→ue, e→ie and e→i stem-changing verbs',
    'I can describe my daily routine with reflexive verbs',
    'I can put events in order with primero, después, luego…',
    'I can use the irregular yo forms: hago, pongo, salgo, sé…',
  ],
  lessons: [
    {
      t: 'o → ue: poder, dormir, volver',
      k: 'grammar',
      goal: 'Conjugate o→ue verbs and say what you can and can’t do',
      body: `
## o → ue
| | poder (can) | dormir (to sleep) |
|---|---|---|
| {yo} | {p[ue]do} | {d[ue]rmo} |
| {tú} | {p[ue]des} | {d[ue]rmes} |
| {él / ella / usted} | {p[ue]de} | {d[ue]rme} |
| {nosotros} | {podemos} | {dormimos} |
| {vosotros} | {podéis} | {dormís} |
| {ellos / ellas / ustedes} | {p[ue]den} | {d[ue]rmen} |

The same **boot** as {querer}: only nosotros and vosotros keep the **o**.

More o → ue verbs: {volver} (come back), {costar} (cost), {encontrar} (find), {recordar} (remember), {contar} (count, tell), {almorzar} (have lunch), {llover} (rain), {soñar} (dream).

## poder + infinitive
> ¿Puedes ayudarme? = Can you help me?
> No puedo dormir. = I can't sleep.
> ¿Se puede pagar con tarjeta? = Can you pay by card?

!de: {poder} + infinitive = können: {Puedo nadar} = Ich kann schwimmen (physically able).
!tip: {jugar} is the only **u → ue** verb: {juego}, {juegas}, {juega}, {jugamos}, {jugáis}, {juegan}. More on day 3!
`,
      words: `
poder = can, to be able to
puedo = I can
dormir = to sleep
volver = to come back, to return
costar = to cost
encontrar = to find
recordar = to remember
contar = to count; to tell
almorzar = to have lunch; to have a mid-morning snack (Spain)
llover = to rain
la tarjeta = card
temprano = early
`,
      phrases: `
¿Puedes ayudarme? = Can you help me?
No puedo dormir. = I can't sleep.
¿Se puede pagar con tarjeta? = Can you pay by card?
Vuelvo a casa a las siete. = I come back home at seven.
¿Cuánto cuesta el billete? = How much is the ticket?
No encuentro mis llaves. = I can't find my keys.
`,
      drills: `
Yo no ___ dormir. (poder) => puedo | podo | puede | podemos # I can't sleep.
¿A qué hora ___ a casa? (volver, tú) => vuelves | volves | vuelve | volvéis # What time do you come back home?
Nosotros ___ ocho horas. (dormir) => dormimos | duermimos | duermen | dormís # We sleep eight hours.
¿Cuánto ___ las entradas? (costar) => cuestan | costan | cuesta | costáis # How much do the tickets cost?
Mi hijo no ___ sus zapatos. (encontrar) => encuentra | encontra | encuentras | encontramos # My son can't find his shoes.
¿___ abrir la ventana? (poder, usted) => Puede | Pode | Puedes | Podemos # Can you open the window?
`,
    },
    {
      t: 'e → ie: pensar, empezar, cerrar…',
      k: 'grammar',
      goal: 'Use more e→ie verbs to talk about times and opinions',
      body: `
## e → ie
You already know {querer} and {preferir}. Many everyday verbs follow the same boot:
| | pensar (to think) | empezar (to begin) |
|---|---|---|
| {yo} | {p[ie]nso} | {emp[ie]zo} |
| {tú} | {p[ie]nsas} | {emp[ie]zas} |
| {él / ella / usted} | {p[ie]nsa} | {emp[ie]za} |
| {nosotros} | {pensamos} | {empezamos} |
| {vosotros} | {pensáis} | {empezáis} |
| {ellos / ellas / ustedes} | {p[ie]nsan} | {emp[ie]zan} |

More: {cerrar} (close), {entender} (understand), {perder} (lose, miss), {comenzar} (begin), {despertarse} (wake up), {sentir} (feel), {nevar} (snow).

> ¿Qué piensas? = What do you think?
> La película empieza a las nueve. = The film starts at nine.
> Las tiendas cierran a las dos. = The shops close at two.
> No entiendo. = I don't understand.

!tip: {pensar en} = to think about: {Pienso en ti.} {pensar} + infinitive = to plan to: {Pienso viajar en verano.}
!de: {entender} = verstehen; {perder} = verlieren *and* verpassen: {Pierdo el autobús} = Ich verpasse den Bus.
`,
      words: `
pensar = to think
empezar = to start, to begin
cerrar = to close
entender = to understand
perder = to lose; to miss (a bus)
comenzar = to begin
nevar = to snow
el autobús = bus
el examen = exam
la puerta = door
cerrado, cerrada = closed
`,
      phrases: `
¿Qué piensas de Madrid? = What do you think of Madrid?
La clase empieza a las nueve. = The class starts at nine.
¿A qué hora cierra el supermercado? = What time does the supermarket close?
No entiendo esta palabra. = I don't understand this word.
Siempre pierdo el autobús. = I always miss the bus.
En invierno nieva en la sierra. = In winter it snows in the mountains.
`,
      drills: `
¿Qué ___ tú? (pensar) => piensas | pensas | pienso | pensamos # What do you think?
La película ___ a las diez. (empezar) => empieza | empeza | empiezan | empezamos # The film starts at ten.
Nosotros no ___ el examen. (entender) => entendemos | entiendemos | entienden | entendéis # We don't understand the exam.
Las tiendas ___ a las dos. (cerrar) => cierran | cerran | cierra | cerramos # The shops close at two.
Yo siempre ___ las llaves. (perder) => pierdo | perdo | pierde | perdemos # I always lose my keys.
¿Vosotros ___ ir a la playa? (pensar) => pensáis | piensáis | piensan | pensamos # Are you (all) planning to go to the beach?
`,
    },
    {
      t: 'e → i & jugar: pedir, servir…',
      k: 'grammar',
      goal: 'Use e→i verbs, jugar vs tocar, and pedir vs preguntar',
      body: `
## e → i (only -ir verbs)
| | pedir (to ask for, to order) | repetir (to repeat) |
|---|---|---|
| {yo} | {p[i]do} | {rep[i]to} |
| {tú} | {p[i]des} | {rep[i]tes} |
| {él / ella / usted} | {p[i]de} | {rep[i]te} |
| {nosotros} | {pedimos} | {repetimos} |
| {vosotros} | {pedís} | {repetís} |
| {ellos / ellas / ustedes} | {p[i]den} | {rep[i]ten} |

More e → i verbs: {servir} (serve), {seguir} (follow — {sigo}), {vestirse} (get dressed), {elegir} (choose — {elijo}), {medir} (measure).

!warn: **pedir** = to ask **for** something (order, request); **preguntar** = to ask a question: {Pido un café} vs {Pregunto la hora}.
!de: The same split as German: {pedir} = bitten / bestellen, {preguntar} = fragen.

## Jugar: u → ue
| | jugar |
|---|---|
| {yo} | {j[ue]go} |
| {tú} | {j[ue]gas} |
| {él / ella / usted} | {j[ue]ga} |
| {nosotros} | {jugamos} |
| {vosotros} | {jugáis} |
| {ellos / ellas / ustedes} | {j[ue]gan} |

{jugar a} + game or sport: {Juego al fútbol}, {Jugamos a las cartas}. For instruments use **tocar**: {Toco la guitarra}.

!de: German "spielen" covers both; Spanish splits them: {jugar al tenis} but {tocar el piano}.
!ar: Like لعب vs عزف: {jugar} = لعب، {tocar} (an instrument) = عزف. And {el ajedrez} (chess) comes from الشطرنج!
`,
      words: `
pedir = to ask for, to order
servir = to serve
repetir = to repeat
seguir = to follow; to continue
preguntar = to ask (a question)
jugar = to play (games, sports)
tocar = to touch; to play (an instrument)
la guitarra = guitar
el tenis = tennis
las cartas = cards (game)
el menú = menu
el ajedrez = chess
`,
      phrases: `
Siempre pido una paella. = I always order a paella.
¿Puede repetir, por favor? = Could you repeat, please?
Los domingos juego al fútbol. = On Sundays I play football.
Mi hermana toca la guitarra. = My sister plays the guitar.
¿Qué sirven en este restaurante? = What do they serve in this restaurant?
Jugamos al ajedrez con mi abuelo. = We play chess with my grandfather.
`,
      drills: `
Yo siempre ___ pescado. (pedir) => pido | pedo | pide | pedimos # I always order fish.
El profesor ___ la pregunta. (repetir) => repite | repete | repiten | repetimos # The teacher repeats the question.
Mis hijos ___ al fútbol. (jugar) => juegan | jugan | juega | jugamos # My children play football.
Nosotros ___ al tenis los sábados. (jugar) => jugamos | juegamos | juegan | jugáis # We play tennis on Saturdays.
Ana ___ el piano. => toca | juega | pide | sirve # Ana plays the piano.
Le ___ la hora a un señor. (ask) => pregunto | pido | repito | sirvo # I ask a man the time.
`,
    },
    {
      t: 'Reflexive verbs: my routine',
      k: 'grammar',
      goal: 'Describe your daily routine with reflexive verbs',
      body: `
## Reflexive verbs
Verbs ending in **-se** describe things you do to yourself. The pronoun changes with the person and goes **before** the verb:
| | levantarse (to get up) |
|---|---|
| {yo} | {[me] levanto} |
| {tú} | {[te] levantas} |
| {él / ella / usted} | {[se] levanta} |
| {nosotros} | {[nos] levantamos} |
| {vosotros} | {[os] levantáis} |
| {ellos / ellas / ustedes} | {[se] levantan} |

## Daily routine verbs
{despertarse} (wake up — {me despierto}), {levantarse} (get up), {ducharse} (have a shower), {lavarse} (wash), {peinarse} (comb your hair), {afeitarse} (shave), {vestirse} (get dressed — {me visto}), {acostarse} (go to bed — {me acuesto}).

> Me levanto a las siete. = I get up at seven.
> Mi hermano se ducha por la noche. = My brother showers at night.
> ¿A qué hora te acuestas? = What time do you go to bed?

!tip: With an infinitive the pronoun can go at the end: {Quiero levantarme temprano} = {Me quiero levantar temprano}.
!de: Just like German reflexives: "ich wasche mich" = {me lavo}, "du ziehst dich an" = {te vistes}. Spanish has even more: {me ducho} = ich dusche (mich).
!ar: Similar to Arabic forms that act on oneself: اغتسل ≈ {lavarse}، تمشّط ≈ {peinarse}.
`,
      words: `
levantarse = to get up
despertarse = to wake up
ducharse = to have a shower
lavarse = to wash (oneself)
vestirse = to get dressed
acostarse = to go to bed
peinarse = to comb one's hair
afeitarse = to shave
los dientes = teeth
la ducha = shower
el despertador = alarm clock
tarde = late
`,
      phrases: `
Me levanto a las siete. = I get up at seven.
Me ducho y me visto. = I have a shower and get dressed.
Mi hermano se afeita todos los días. = My brother shaves every day.
¿A qué hora te acuestas? = What time do you go to bed?
Nos despertamos muy temprano. = We wake up very early.
Me lavo los dientes. = I brush my teeth.
`,
      drills: `
Yo ___ levanto a las siete. => me | te | se | nos # I get up at seven.
¿A qué hora te ___? (acostarse) => acuestas | acostas | acuesto | acostáis # What time do you go to bed?
Mi padre ___ afeita por la mañana. => se | me | te | le # My father shaves in the morning.
Nosotros ___ duchamos por la noche. => nos | os | se | me # We shower at night.
Ellos se ___ muy tarde. (despertarse) => despiertan | despertan | despierta | despertamos # They wake up very late.
Yo me ___ rápido. (vestirse) => visto | vesto | viste | vestimos # I get dressed quickly.
`,
    },
    {
      t: 'First, then… my day in order',
      k: 'talk',
      goal: 'Tell the story of your day in order, with meals and times',
      body: `
## Putting events in order
| | |
|---|---|
| {primero} | first |
| {después} | afterwards, then |
| {luego} | then, later |
| {más tarde} | later |
| {antes de} + infinitive | before …ing |
| {después de} + infinitive | after …ing |
| {al final} | in the end |

> Primero me ducho, después desayuno y luego voy al trabajo. = First I shower, then I have breakfast and then I go to work.
> Antes de dormir, leo un poco. = Before going to sleep, I read a little.
> Después de comer, descanso. = After lunch, I rest.

!tip: After {antes de} and {después de} use the **infinitive**: {después de cenar} (after having dinner).
!de: {después de + Infinitiv} = nach dem …: {después de comer} = nach dem Essen.

## Meals in Spain
{el desayuno} / {desayunar} (breakfast), {la comida} / {comer} (lunch), {la merienda} / {merendar} (afternoon snack), {la cena} / {cenar} (dinner).

!es: A typical day: a light breakfast, a mid-morning {bocadillo}, lunch at 2 pm, {merienda} around 6 pm and dinner after 9. The famous {siesta}? Most people don't have time for it on workdays!
`,
      words: `
primero = first
después = afterwards, then
luego = then, later
más tarde = later
antes de = before
después de = after
al final = in the end
el desayuno = breakfast
desayunar = to have breakfast
la cena = dinner
cenar = to have dinner
la merienda = afternoon snack
`,
      phrases: `
Primero me ducho y después desayuno. = First I shower and then I have breakfast.
Después de comer, descanso un poco. = After lunch, I rest a little.
Antes de dormir, leo un libro. = Before going to sleep, I read a book.
Ceno a las nueve y luego veo la tele. = I have dinner at nine and then I watch TV.
A las seis meriendo un bocadillo. = At six I have a sandwich as a snack.
Al final del día estoy muy cansado. = At the end of the day I'm very tired.
`,
      drills: `
___ me levanto y después me ducho. => Primero | Después | Antes | Final # First I get up and then I shower.
Después de ___, me lavo los dientes. => comer | como | comemos | comida # After eating, I brush my teeth.
Antes ___ salir, cierro la ventana. => de | a | que | en # Before going out, I close the window.
Desayuno a las ocho y ___ a las diez de la noche. => ceno | cena | desayuno | meriendo # I have breakfast at eight and dinner at ten at night.
Por la mañana tomo el ___. => desayuno | cena | merienda | comida # In the morning I have breakfast.
`,
    },
    {
      t: 'Irregular yo: hago, pongo, salgo…',
      k: 'grammar',
      goal: 'Use verbs that are only irregular in the yo form',
      body: `
## Verbs with an irregular "yo"
These verbs are regular **except** for the yo form:
| infinitive | yo | tú | meaning |
|---|---|---|---|
| {hacer} | {hago} | {haces} | to do, to make |
| {poner} | {pongo} | {pones} | to put |
| {salir} | {salgo} | {sales} | to go out, to leave |
| {traer} | {traigo} | {traes} | to bring |
| {ver} | {veo} | {ves} | to see, to watch |
| {saber} | {sé} | {sabes} | to know |
| {conocer} | {conozco} | {conoces} | to know (people, places) |
| {dar} | {doy} | {das} | to give |
| {conducir} | {conduzco} | {conduces} | to drive |

!tip: Learn the **-go** family together: {hago}, {pongo}, {salgo}, {traigo}, {tengo}, {vengo}, {digo}.

> Los sábados salgo con mis amigos. = On Saturdays I go out with my friends.
> ¿Qué haces? — Hago los deberes. = What are you doing? — I'm doing my homework.
> Pongo la mesa. = I set the table.
> No sé. = I don't know.

!de: {hacer} covers both "machen" and "tun": {¿Qué haces?} = Was machst du?
!ar: {¿Qué haces?} ≈ ماذا تفعل؟ — {hacer} ≈ فعل / عمل.
`,
      words: `
hacer = to do, to make
hago = I do, I make
poner = to put
pongo = I put
salir = to go out, to leave
salgo = I go out
traer = to bring
ver = to see, to watch
saber = to know (facts)
no sé = I don't know
conducir = to drive (Spain)
los deberes = homework
la tele = TV
`,
      phrases: `
¿Qué haces esta noche? = What are you doing tonight?
Salgo de casa a las ocho. = I leave home at eight.
Pongo la mesa para la cena. = I set the table for dinner.
No sé dónde está. = I don't know where it is.
Veo una película. = I'm watching a film.
Conduzco al trabajo. = I drive to work.
`,
      drills: `
Yo ___ los deberes por la tarde. (hacer) => hago | hace | haco | hacemos # I do my homework in the afternoon.
Los viernes ___ con mis amigos. (salir, yo) => salgo | salo | sale | salimos # On Fridays I go out with my friends.
Yo no ___ la respuesta. (saber) => sé | sabo | sabe | se # I don't know the answer.
___ la mesa, mamá. (poner, yo) => Pongo | Pono | Pone | Ponemos # I'll set the table, Mum.
Yo ___ la tele por la noche. (ver) => veo | vo | ve | vemos # I watch TV at night.
Yo ___ Madrid muy bien. (conocer) => conozco | conoco | conoce | conocemos # I know Madrid very well.
`,
    },
  ],
  story: {
    title: 'Un día normal de Javier',
    text: `
Javier es profesor de español. Se despierta a las siete menos cuarto, pero no se levanta hasta las siete.
= Javier is a Spanish teacher. He wakes up at quarter to seven, but he doesn't get up until seven.

Primero se ducha y se viste. Después desayuna un café con tostadas y lee las noticias en el móvil.
= First he showers and gets dressed. Then he has coffee and toast for breakfast and reads the news on his phone.

Sale de casa a las ocho y cuarto. No conduce: va a la escuela en bicicleta porque vive cerca.
= He leaves home at quarter past eight. He doesn't drive: he goes to school by bike because he lives nearby.

Las clases empiezan a las nueve. Javier repite mucho las palabras difíciles y sus estudiantes repiten con él.
= Classes start at nine. Javier repeats the difficult words a lot and his students repeat them with him.

A las dos vuelve a casa y come con su mujer. Después de comer, juega un poco con su hija Lucía.
= At two he comes back home and has lunch with his wife. After lunch, he plays a little with his daughter Lucía.

Por la tarde prepara las clases. A veces no puede terminar y trabaja hasta las ocho.
= In the afternoon he prepares his classes. Sometimes he can't finish and works until eight.

Cenan a las nueve y media. Antes de dormir, Javier lee una novela. Se acuesta a las once y media y duerme como un niño.
= They have dinner at half past nine. Before going to sleep, Javier reads a novel. He goes to bed at half past eleven and sleeps like a baby.
`,
    questions: `
¿A qué hora se levanta Javier? => A las siete | A las siete menos cuarto | A las ocho # What time does Javier get up?
¿Cómo va a la escuela? => En bicicleta | En coche | En autobús # How does he get to school?
¿Qué hace después de comer? => Juega con su hija | Prepara las clases | Lee una novela # What does he do after lunch?
¿Qué hace antes de dormir? => Lee una novela | Ve la tele | Juega al fútbol # What does he do before going to sleep?
`,
  },
}

export default w
