import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 11,
  title: 'What have you done? — perfect tense',
  es: '¿Qué has hecho hoy?',
  cando: [
    'I can form the present perfect: he hablado, has comido…',
    'I can use the irregular participles: hecho, dicho, visto…',
    'I can say what I have done today or this week',
    'I can talk about life experiences: ¿Has estado alguna vez…?',
    'I can use ya, todavía no, alguna vez and nunca',
    'I can give news and react to news',
  ],
  lessons: [
    {
      t: 'He hablado: the present perfect',
      k: 'grammar',
      goal: 'Form the present perfect with haber + participle',
      body: `
## haber + participle
| | haber | + participle |
|---|---|---|
| {yo} | {he} | {hablado} |
| {tú} | {has} | {comido} |
| {él / ella / usted} | {ha} | {vivido} |
| {nosotros} | {hemos} | |
| {vosotros} | {habéis} | |
| {ellos / ellas / ustedes} | {han} | |

**Participle:** -ar → **-ado** ({hablado}); -er / -ir → **-ido** ({comido}, {vivido}).

> Hoy he trabajado mucho. = I've worked a lot today.
> ¿Has comido? = Have you eaten?
> Hemos vivido en Londres. = We've lived in London.

!tip: The participle never changes here (always -o), and nothing goes between haber and the participle: {No lo he visto} (I haven't seen it).
!es: In **Spain** this tense is used for anything that happened **today** or in a time period that isn't over: {Esta mañana he desayunado tarde.} Latin America prefers the simple past.
!de: Like the German Perfekt, but always with **haber** — never "ser": "Ich bin gegangen" = {He ido}.
!ar: Close to قد + past for recent events: {He comido} ≈ قد أكلتُ.
`,
      words: `
haber = to have (auxiliary)
he = I have (done)
has = you have (done)
ha = he / she has (done)
hemos = we have (done)
han = they have (done)
hablado = spoken
comido = eaten
vivido = lived
estado = been
ido = gone
trabajado = worked
`,
      phrases: `
Hoy he trabajado mucho. = I've worked a lot today.
¿Has comido ya? = Have you eaten yet?
Esta mañana hemos ido al mercado. = This morning we went to the market.
Mis padres han llegado a Madrid. = My parents have arrived in Madrid.
¿Habéis estado en Sevilla? = Have you (all) been to Seville?
No he dormido bien. = I haven't slept well.
`,
      drills: `
Hoy ___ trabajado diez horas. (yo) => he | ha | has | hemos # Today I've worked ten hours.
¿___ comido ya? (tú) => Has | Ha | He | Habéis # Have you eaten yet?
Nosotros ___ vivido en Alemania. => hemos | habemos | han | habéis # We've lived in Germany.
Mis amigos han ___ a la fiesta. (ir) => ido | iendo | yendo | idos # My friends have gone to the party.
Esta mañana he ___ con mi madre. (hablar) => hablado | hablando | hablada | hablé # This morning I've spoken to my mother.
¿Vosotros ___ estado en Granada? => habéis | hemos | han | has # Have you (all) been to Granada?
`,
    },
    {
      t: 'Irregular participles',
      k: 'grammar',
      goal: 'Use the most common irregular participles',
      body: `
## Learn these by heart
| infinitive | participle | |
|---|---|---|
| {hacer} | {hecho} | done, made |
| {decir} | {dicho} | said |
| {ver} | {visto} | seen |
| {escribir} | {escrito} | written |
| {poner} | {puesto} | put |
| {volver} | {vuelto} | come back |
| {abrir} | {abierto} | opened |
| {romper} | {roto} | broken |
| {morir} | {muerto} | died |
| {descubrir} | {descubierto} | discovered |
| {resolver} | {resuelto} | solved |

!tip: Compounds keep the irregularity: {devolver} → {devuelto}, {deshacer} → {deshecho}, {describir} → {descrito}.
!tip: {leer}, {traer}, {caer} and {oír} add an accent: {leído}, {traído}, {caído}, {oído}.

> ¿Qué has hecho hoy? = What have you done today?
> No he visto la película. = I haven't seen the film.
> Se ha roto el móvil. = The mobile has broken.
> ¿Quién ha abierto la ventana? = Who has opened the window?

!de: Just like German strong verbs — learn them: {hecho} = gemacht, {visto} = gesehen, {dicho} = gesagt.
`,
      words: `
hecho = done, made
dicho = said
visto = seen
escrito = written
puesto = put
vuelto = come back, returned
abierto = opened
roto = broken
muerto = died, dead
leído = read
oído = heard
descubierto = discovered
`,
      phrases: `
¿Qué has hecho hoy? = What have you done today?
No he visto esa película. = I haven't seen that film.
¿Quién ha dicho eso? = Who said that?
He escrito un correo a mi jefe. = I've written an email to my boss.
Mi hermano ha roto la ventana. = My brother has broken the window.
¿Has leído el libro? = Have you read the book?
`,
      drills: `
¿Qué has ___ hoy? (hacer) => hecho | hacido | hacho | haciendo # What have you done today?
No he ___ esa película. (ver) => visto | vido | veído | vista # I haven't seen that film.
¿Quién ha ___ la puerta? (abrir) => abierto | abrido | abrito | abierta # Who has opened the door?
Mi madre ha ___ una carta. (escribir) => escrito | escribido | escrita | escribito # My mother has written a letter.
¿Dónde has ___ las llaves? (poner) => puesto | ponido | ponto | pusto # Where have you put the keys?
Ya hemos ___ de vacaciones. (volver) => vuelto | volvido | vuelvido | volto # We've already come back from holiday.
`,
    },
    {
      t: 'Ya, todavía no, alguna vez',
      k: 'grammar',
      goal: 'Use time markers with the present perfect',
      body: `
## Time markers for the perfect
| | |
|---|---|
| {hoy} | today |
| {esta mañana / tarde / semana} | this morning / afternoon / week |
| {este mes / año} | this month / year |
| {ya} | already; yet (in questions) |
| {todavía no} / {aún no} | not yet |
| {alguna vez} | ever |
| {nunca} | never |
| {últimamente} | lately |
| {hace un rato} | a little while ago |

> ¿Has terminado ya? — Sí, ya he terminado. = Have you finished yet? — Yes, I've already finished.
> Todavía no he comido. = I haven't eaten yet.
> ¿Has estado alguna vez en México? = Have you ever been to Mexico?
> Nunca he probado el pulpo. = I've never tried octopus.

!tip: {ya} goes before haber or at the end: {Ya lo he hecho} = {Lo he hecho ya}.
!de: {ya} = schon, {todavía no} = noch nicht, {alguna vez} = schon mal / jemals.
!ar: {ya} ≈ قد / خلاص، {todavía no} ≈ ليس بعد / لسّا.
`,
      words: `
ya = already; yet
todavía no = not yet
aún no = not yet
alguna vez = ever
últimamente = lately
hace un rato = a little while ago
esta semana = this week
este año = this year
terminar = to finish
el pulpo = octopus
`,
      phrases: `
¿Has terminado ya? — Sí, ya he terminado. = Have you finished yet? — Yes, I've already finished.
Todavía no he comido. = I haven't eaten yet.
¿Has estado alguna vez en Barcelona? = Have you ever been to Barcelona?
Nunca he probado el pulpo. = I've never tried octopus.
Esta semana he trabajado mucho. = This week I've worked a lot.
He llamado a Ana hace un rato. = I called Ana a little while ago.
`,
      drills: `
¿Has hecho ___ los deberes? (yet) => ya | todavía | nunca | aún # Have you done your homework yet?
___ no he terminado. (not yet) => Todavía | Ya | Nunca | Alguna # I haven't finished yet.
¿Has estado ___ en Cuba? (ever) => alguna vez | nunca | todavía | ya no # Have you ever been to Cuba?
___ he visto un fantasma. (never) => Nunca | Alguna vez | Todavía | Ya # I've never seen a ghost.
Esta ___ he ido dos veces al cine. => semana | mes | año | días # This week I've been to the cinema twice.
`,
    },
    {
      t: 'Have you ever…? Experiences',
      k: 'talk',
      goal: 'Talk about travel and life experiences',
      body: `
## Talking about experiences
> ¿Has estado alguna vez en España? = Have you ever been to Spain?
> Sí, he estado dos veces. = Yes, I've been twice.
> No, no he estado nunca, pero me gustaría. = No, I've never been, but I'd like to.
> He viajado por toda Europa. = I've travelled all over Europe.
> ¿Has probado la paella? = Have you tried paella?
> He visto la Alhambra. ¡Es preciosa! = I've seen the Alhambra. It's beautiful!

## Countries
{Francia}, {Portugal}, {Italia}, {Grecia}, {Turquía}, {Túnez}, {Argelia}, {Jordania}, {Arabia Saudí}, {los Emiratos}, {Suiza}, {Austria}, {los Países Bajos}, {Japón}, {China}, {la India}, {México}, {Argentina}, {Colombia}.

!es: Must-sees in Spain: {la Alhambra} in Granada, {la Mezquita} in Córdoba (a mosque that became a cathedral), {la Sagrada Familia} in Barcelona, {el Museo del Prado} in Madrid and {el Camino de Santiago}.
!ar: Andalusia will feel familiar: {la Alhambra} (الحمراء, "the red one"), the {Giralda} in Seville (once a minaret) and the {Mezquita de Córdoba} are treasures of al-Andalus.
`,
      words: `
la experiencia = experience
el viaje = trip, journey
el país = country
el extranjero = abroad
el mundo = world
precioso, preciosa = beautiful, lovely
probar = to try, to taste
me gustaría = I would like (to)
Portugal = Portugal
Grecia = Greece
Turquía = Turkey
Túnez = Tunisia
Suiza = Switzerland
`,
      phrases: `
¿Has estado alguna vez en Granada? = Have you ever been to Granada?
He estado en Portugal dos veces. = I've been to Portugal twice.
Nunca he viajado al extranjero. = I've never travelled abroad.
Me gustaría ver la Alhambra. = I'd like to see the Alhambra.
¿Has probado el gazpacho? = Have you tried gazpacho?
Este viaje ha sido increíble. = This trip has been incredible.
`,
      drills: `
¿Has estado ___ vez en Italia? => alguna | algún | ningún | nunca # Have you ever been to Italy?
He estado en Grecia dos ___. => veces | vez | días | viajes # I've been to Greece twice.
Nunca he ___ el pulpo. (probar) => probado | probando | probé | prueba # I've never tried octopus.
Mis padres nunca han viajado al ___. => extranjero | extraño | exterior | estranjero # My parents have never travelled abroad.
Me ___ visitar Japón. (I'd like) => gustaría | gusta | gustan | gusto # I'd like to visit Japan.
`,
    },
    {
      t: 'Reflexives & pronouns in the perfect',
      k: 'grammar',
      goal: 'Tell someone about your day using pronouns with the perfect',
      body: `
## Pronoun + haber + participle
All pronouns — reflexive, direct and indirect — go **before haber**:
> Me he levantado tarde. = I got up late.
> ¿Te has duchado? = Have you showered?
> Lo he comprado esta mañana. = I bought it this morning.
> Se lo he dicho a Ana. = I've told Ana. (I've said it to her)
> No nos hemos visto. = We haven't seen each other.

!warn: Never split haber and the participle: {Lo he visto} — never "he lo visto".

## Your day so far
> ¿Qué has hecho hoy? = What have you done today?
> Me he despertado a las siete, me he duchado y he desayunado. = I woke up at seven, showered and had breakfast.
> Después he ido a clase y he comido con unos amigos. = Then I went to class and had lunch with some friends.

!tip: In Spain this tense is the most natural way to tell someone about **today**.
!de: German puts the participle at the end ("Ich habe mich geduscht"); Spanish keeps the group together: {Me he duchado}.
`,
      words: `
me he levantado = I've got up
te has duchado = you've showered
se ha ido = he / she has left
nos hemos visto = we've seen each other
lo he comprado = I've bought it
se lo he dicho = I've told him / her
quedarse dormido = to oversleep; to fall asleep
el jefe, la jefa = boss
la reunión = meeting
llegar tarde = to be late
`,
      phrases: `
Hoy me he levantado muy temprano. = Today I got up very early.
¿Te has duchado ya? = Have you showered yet?
Me he quedado dormido y he llegado tarde. = I overslept and I was late.
¿Se lo has dicho a tu jefe? = Have you told your boss?
Lo he comprado en el mercado. = I bought it at the market.
Nos hemos visto en la reunión. = We saw each other at the meeting.
`,
      drills: `
Hoy ___ he levantado tarde. => me | te | se | lo # Today I got up late.
¿___ has duchado? (tú) => Te | Me | Se | Tú # Have you showered?
Ana ___ ha ido a casa. => se | le | la | me # Ana has gone home.
El libro… ya ___ he leído. => lo | la | le | los # The book… I've already read it.
¿Se lo ___ dicho a tus padres? (tú) => has | he | ha | habéis # Have you told your parents?
Nosotros ___ hemos despertado a las seis. => nos | os | se | me # We woke up at six.
`,
    },
    {
      t: 'Giving news & reacting',
      k: 'talk',
      goal: 'Share news and react with the right expression',
      body: `
## Giving news
> ¿Sabes qué? = Guess what?
> ¡Me han dado el trabajo! = I've got the job! (they've given me the job)
> He aprobado el examen. = I've passed the exam.
> He suspendido el examen. = I've failed the exam.
> Mi hermana ha tenido un bebé. = My sister has had a baby.
> Hemos comprado un piso. = We've bought a flat.

## Reacting
| | |
|---|---|
| {¡Qué bien!} | Great! |
| {¡Enhorabuena!} / {¡Felicidades!} | Congratulations! |
| {¡Qué suerte!} | How lucky! |
| {¡No me digas!} | No way! / You don't say! |
| {¿De verdad?} | Really? |
| {¡Qué pena!} / {¡Qué lástima!} | What a shame! |
| {¡Qué mala suerte!} | What bad luck! |
| {¡Ánimo!} | Cheer up! / Keep going! |

!es: {¡Enhorabuena!} is for achievements (exams, jobs, babies); {¡Felicidades!} also means "happy birthday". When someone sneezes, say {¡Jesús!} or {¡Salud!}
!ar: {¡Enhorabuena!} ≈ مبروك, and {¡Qué pena!} ≈ يا خسارة.
`,
      words: `
aprobar = to pass (an exam)
suspender = to fail (an exam)
¡enhorabuena! = congratulations!
¡felicidades! = congratulations! happy birthday!
¡qué suerte! = how lucky!
¡qué pena! = what a shame!
¡no me digas! = no way! you don't say!
¿de verdad? = really?
¡ánimo! = cheer up! keep going!
el bebé = baby
la suerte = luck
`,
      phrases: `
¡He aprobado el examen! — ¡Enhorabuena! = I've passed the exam! — Congratulations!
Me han dado el trabajo. — ¡Qué bien! = I've got the job. — Great!
He suspendido. — ¡Qué pena! ¡Ánimo! = I've failed. — What a shame! Keep going!
Mi hermana ha tenido un bebé. — ¿De verdad? ¡Felicidades! = My sister has had a baby. — Really? Congratulations!
Hemos ganado la lotería. — ¡No me digas! = We've won the lottery. — No way!
Tengo una buena noticia. = I've got some good news.
`,
      drills: `
He aprobado el examen. — ¡___! => Enhorabuena | Qué pena | Lo siento | Ánimo # I've passed the exam. — Congratulations!
He perdido el tren. — ¡Qué ___! => pena | bien | suerte | bonito # I've missed the train. — What a shame!
Hemos ganado un viaje a Japón. — ¡Qué ___! => suerte | pena | lástima | mal # We've won a trip to Japan. — How lucky!
Lucía ha ___ el examen de conducir. ¡Tiene que repetirlo! => suspendido | aprobado | ganado | pasado # Lucía has failed her driving test. She has to retake it!
Tengo una buena ___: ¡me caso! => noticia | noticias | nota | novela # I've got some good news: I'm getting married!
`,
    },
  ],
  story: {
    title: 'Un día de mala suerte',
    text: `
Hoy ha sido un día horrible para Omar. Esta mañana no ha sonado el despertador y se ha quedado dormido.
= Today has been a horrible day for Omar. This morning his alarm didn't go off and he overslept.

Se ha levantado a las nueve, no se ha duchado y ha salido de casa sin desayunar.
= He got up at nine, didn't shower and left home without breakfast.

Ha perdido el autobús y ha llegado tarde a una reunión muy importante. Su jefa no le ha dicho nada, pero no está contenta.
= He missed the bus and arrived late to a very important meeting. His boss hasn't said anything to him, but she isn't happy.

Al mediodía se ha manchado la camisa de café, y por la tarde ha roto la pantalla del móvil.
= At midday he spilled coffee on his shirt, and in the afternoon he broke his phone screen.

Por la noche llama a Laura. —¿Qué tal tu día? —Fatal. Todo ha salido mal. —¡Qué mala suerte! Pero tengo una buena noticia.
= In the evening he calls Laura. "How was your day?" "Terrible. Everything went wrong." "What bad luck! But I've got some good news."

—¿Ah, sí? ¿Qué ha pasado? —¡He aprobado el examen de inglés! —¿De verdad? ¡Enhorabuena!
= "Oh yes? What's happened?" "I've passed my English exam!" "Really? Congratulations!"

—¿Y sabes qué? Nunca he estado en Marruecos y en verano quiero ir. ¿Me enseñas tu país? —¡Claro que sí! Ahora mi día es mucho mejor.
= "And guess what? I've never been to Morocco and I want to go this summer. Will you show me your country?" "Of course! Now my day is much better."
`,
    questions: `
¿Por qué se ha quedado dormido Omar? => No ha sonado el despertador | Está enfermo | Ha trabajado mucho # Why did Omar oversleep?
¿Por qué ha llegado tarde a la reunión? => Ha perdido el autobús | Ha ido a pie | Ha desayunado mucho # Why was he late for the meeting?
¿Qué le ha pasado al móvil? => Ha roto la pantalla | Lo ha perdido | No tiene batería # What happened to his mobile?
¿Qué buena noticia tiene Laura? => Ha aprobado el examen de inglés | Tiene un trabajo nuevo | Se va a casar # What good news does Laura have?
`,
  },
}

export default w
