import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 26,
  title: 'B1 finale — putting it all together',
  es: '¡Lo has conseguido!',
  cando: [
    'I can use the future perfect and the perfect subjunctive',
    'I can write a structured opinion text',
    'I can keep a conversation going with natural fillers and rescue strategies',
    'I can switch between formal and informal registers',
    'I can use all the main tenses from A1 to B1 in context',
    'I can describe my experiences, hopes and plans in Spanish',
  ],
  lessons: [
    {
      t: 'Future perfect: habré terminado',
      k: 'grammar',
      goal: 'Say what will have happened and guess about the recent past',
      body: `
## habré / habrás / habrá / habremos / habréis / habrán + participle
1. Something **finished before a moment in the future**:
> Para junio habré terminado el curso. = By June I'll have finished the course.
> Cuando llegues, ya habremos cenado. = When you arrive, we'll already have had dinner.

2. A **guess about the recent past**:
> ¿Dónde está Ana? — Habrá perdido el tren. = Where's Ana? — She must have missed the train.
> No contesta. Se habrá dormido. = He's not answering. He must have fallen asleep.

!tip: Guess about now → future ({Estará en casa}); about something that has just happened → future perfect ({Habrá salido}); about the more distant past → conditional ({Serían las diez}).
!de: Exactly the German Futur II: "Er wird den Zug verpasst haben" = {Habrá perdido el tren}.
!ar: {Habrá perdido el tren} ≈ لا بدّ أنّه فاته القطار.
`,
      words: `
habré terminado = I'll have finished
habremos cenado = we'll have had dinner
habrá perdido = he / she must have missed
se habrá dormido = he / she must have fallen asleep
para junio = by June
para entonces = by then
el futuro perfecto = future perfect
el plazo = deadline; period
`,
      phrases: `
Para junio habré terminado el curso. = By June I'll have finished the course.
Cuando llegues, ya habremos cenado. = When you arrive, we'll already have had dinner.
¿Dónde está Ana? — Habrá perdido el tren. = Where's Ana? — She must have missed the train.
No contesta. Se habrá dormido. = He's not answering. He must have fallen asleep.
Para entonces ya habré aprendido mucho español. = By then I'll have learnt a lot of Spanish.
El plazo termina el viernes. = The deadline is on Friday.
`,
      drills: `
Para diciembre ___ terminado la carrera. (yo) => habré | habría | he | había # By December I'll have finished my degree.
Cuando vuelvas, ya ___ comido. (nosotros) => habremos | habríamos | hemos | habíamos # When you get back, we'll already have eaten.
Pedro no ha llegado. ___ perdido el autobús. => Habrá | Habría | Ha | Había # Pedro hasn't arrived. He must have missed the bus.
No contesta: se habrá ___. (dormir) => dormido | durmiendo | dormida | duerme # He's not answering: he must have fallen asleep.
Para ___ ya habré terminado. (by then) => entonces | ahora | luego | antes # By then I'll have finished.
`,
    },
    {
      t: 'Perfect subjunctive: que hayas…',
      k: 'grammar',
      goal: 'Use haya + participle after subjunctive triggers',
      body: `
## haya / hayas / haya / hayamos / hayáis / hayan + participle
Use it with the usual subjunctive triggers when the action is **already done**:
> Espero que hayas dormido bien. = I hope you slept well.
> Me alegro de que hayáis venido. = I'm glad you've (all) come.
> No creo que haya terminado todavía. = I don't think he's finished yet.
> Es posible que se haya perdido. = Maybe he's got lost.
> Ojalá haya aprobado. = I hope I've passed.

## Compare
| present subjunctive | perfect subjunctive |
|---|---|
| {Espero que llegues bien.} | {Espero que hayas llegado bien.} |
| I hope you arrive safely. (you're still travelling) | I hope you've arrived safely. (you should be there by now) |

!tip: It's simply the subjunctive version of {he hablado}: {he} → {haya}.
!de: "Ich hoffe, du bist gut angekommen" = {Espero que hayas llegado bien} — German indicative, Spanish subjunctive.
!ar: {Ojalá haya aprobado} ≈ إن شاء الله أكون قد نجحت.
`,
      words: `
haya llegado = (that) he / she has arrived
hayas dormido = (that) you have slept
hayamos terminado = (that) we have finished
hayan visto = (that) they have seen
espero que hayas… = I hope you have…
me alegro de que hayáis venido = I'm glad you've come
ojalá haya aprobado = I hope I've passed
llegar bien = to arrive safely
el resultado = result
`,
      phrases: `
Espero que hayas dormido bien. = I hope you slept well.
Me alegro de que hayáis venido. = I'm glad you've (all) come.
No creo que haya terminado todavía. = I don't think he's finished yet.
Es posible que se haya perdido. = Maybe he's got lost.
Ojalá haya aprobado el examen. = I hope I've passed the exam.
Espero que hayáis llegado bien a casa. = I hope you've (all) got home safely.
`,
      drills: `
Espero que ___ dormido bien. (tú) => hayas | has | habías | habrás # I hope you slept well.
Me alegro de que ___ venido. (vosotros) => hayáis | habéis | hayan | hubierais # I'm glad you've (all) come.
No creo que Ana ___ terminado. => haya | ha | había | habrá # I don't think Ana has finished.
Ojalá ___ aprobado. (yo) => haya | he | había | habré # I hope I've passed.
Es posible que se ___ perdido. (ellos) => hayan | han | habían | habrán # Maybe they've got lost.
`,
    },
    {
      t: 'Writing an opinion text',
      k: 'talk',
      goal: 'Write a structured opinion text like in the DELE B1 exam',
      body: `
## Structure (DELE B1 style)
1. **Introduction** — present the topic: {Hoy en día, cada vez más personas…} / {Se habla mucho de…}
2. **Your opinion** — {En mi opinión…} / {Desde mi punto de vista…} / {Considero que…}
3. **Arguments** — {En primer lugar…} {En segundo lugar…} {Además…} {Por otra parte…}
4. **Counter-argument** — {Es cierto que…, pero…} / {Sin embargo…} / {Aunque…}
5. **Conclusion** — {En conclusión…} / {En resumen…} / {Por todo ello, creo que…}

## A model text
> Hoy en día, cada vez más personas trabajan desde casa. = Nowadays, more and more people work from home.
> En mi opinión, el teletrabajo tiene muchas ventajas. = In my opinion, working from home has many advantages.
> En primer lugar, ahorramos tiempo y dinero en transporte. = First of all, we save time and money on transport.
> Además, podemos organizar mejor nuestro horario. = What's more, we can organise our time better.
> Es cierto que a veces nos sentimos solos; sin embargo, podemos quedar con los compañeros. = It's true that we sometimes feel lonely; however, we can meet up with colleagues.
> Por todo ello, creo que el teletrabajo es el futuro. = For all these reasons, I believe remote work is the future.

!tip: Mix your tenses and include at least one subjunctive ({Es importante que las empresas…}) — examiners love it!
!es: The official Spanish exam is the **DELE**, run by the Instituto Cervantes. DELE B1 has reading, listening, writing and speaking parts. After this course, you're ready to prepare for it!
`,
      words: `
hoy en día = nowadays
cada vez más = more and more
considerar = to consider
la ventaja = advantage
la desventaja = disadvantage
por otra parte = on the other hand; furthermore
por todo ello = for all these reasons
el teletrabajo = working from home
la redacción = essay, composition
el DELE = official Spanish diploma
`,
      phrases: `
Hoy en día, cada vez más personas trabajan desde casa. = Nowadays, more and more people work from home.
Considero que el teletrabajo tiene muchas ventajas. = I believe working from home has many advantages.
En primer lugar, ahorramos tiempo en transporte. = First of all, we save time on transport.
Es cierto que tiene desventajas; sin embargo, merece la pena. = It's true that it has disadvantages; however, it's worth it.
Por todo ello, creo que es el futuro. = For all these reasons, I think it's the future.
Quiero presentarme al DELE B1. = I want to take the DELE B1 exam.
`,
      drills: `
Hoy en ___, todo el mundo tiene móvil. => día | días | diario | dia # Nowadays everyone has a mobile.
Cada ___ más personas trabajan desde casa. => vez | día | año | momento # More and more people work from home.
Una ___ del teletrabajo es que ahorras tiempo. => ventaja | ventana | ventilación | venta # One advantage of working from home is that you save time.
Por ___ ello, creo que es una buena idea. => todo | toda | todos | tanto # For all these reasons, I think it's a good idea.
Es importante que las empresas ___ en sus trabajadores. (pensar) => piensen | piensan | pensar | pensarán # It's important that companies think about their workers.
`,
    },
    {
      t: 'Keeping the conversation going',
      k: 'talk',
      goal: 'Sound natural with fillers and get out of trouble when you’re stuck',
      body: `
## Fillers — sound natural
| | |
|---|---|
| {Pues…} | Well… |
| {Bueno…} | Well… / OK… |
| {A ver…} | Let's see… |
| {O sea…} | I mean… |
| {Es que…} | The thing is… |
| {¿Sabes?} | You know? |
| {Es decir…} | That is… |
| {Vamos, que…} | Basically… |

## Showing you're listening
{¿En serio?} (Seriously?), {¡No me digas!} (No way!), {Ya…} (Right…), {Claro, claro} (Of course), {¡Qué interesante!}, {¿Y luego?} (And then?), {Entiendo} (I see).

## Rescue strategies
> Perdona, no te he entendido. ¿Puedes repetirlo? = Sorry, I didn't understand. Can you repeat it?
> ¿Qué quiere decir "currar"? = What does "currar" mean?
> No sé cómo se dice, pero es una cosa que sirve para… = I don't know how to say it, but it's a thing you use for…
> ¿Lo he dicho bien? = Did I say that right?

!tip: Don't know a word? **Describe it**: {Es una cosa que…}, {Es una persona que…}, {Es un sitio donde…} — the relative clauses from weeks 17 and 23 to the rescue!
!de: {Es que…} ≈ "Die Sache ist die…"; {o sea} ≈ "also / das heißt".
`,
      words: `
pues = well…
bueno = well…; OK
a ver = let's see
es que = the thing is
es decir = that is
¿en serio? = seriously?
ya = right… (I see)
¿y luego? = and then?
¿qué quiere decir…? = what does … mean?
¿lo he dicho bien? = did I say it right?
entiendo = I see, I understand
`,
      phrases: `
Pues… no sé qué decirte. = Well… I don't know what to tell you.
Es que hoy no puedo, tengo mucho trabajo. = The thing is, I can't today — I have a lot of work.
A ver, ¿qué quieres decir exactamente? = Let's see, what exactly do you mean?
¿En serio? ¡No me lo puedo creer! = Seriously? I can't believe it!
No sé cómo se dice, pero es una cosa que sirve para abrir latas. = I don't know what it's called, but it's a thing for opening tins.
Perdona, ¿lo he dicho bien? = Sorry, did I say that right?
`,
      drills: `
¿Vienes esta noche? — ___ que no puedo, tengo que trabajar. => Es | Pues | Bueno | Ya # Are you coming tonight? — The thing is, I can't, I have to work.
A ___, ¿dónde he dejado las llaves? => ver | mirar | saber | buscar # Let's see, where did I leave my keys?
¿Qué quiere ___ "majo"? => decir | hablar | contar | significar # What does "majo" mean?
Es una cosa ___ sirve para cortar papel. => que | donde | quien | cual # It's a thing you use to cut paper.
¿En ___? ¡No me lo puedo creer! => serio | serie | seria | sério # Seriously? I can't believe it!
`,
    },
    {
      t: 'Formal or informal?',
      k: 'talk',
      goal: 'Choose between tú and usted and adapt your register',
      body: `
## Tú or usted?
| informal (tú / vosotros) | formal (usted / ustedes) |
|---|---|
| friends, family, colleagues, people your age | older people, officials, formal letters, some customers |
| {¿Cómo estás?} | {¿Cómo está usted?} |
| {¿Puedes ayudarme?} | {¿Podría ayudarme?} |
| {Siéntate.} | {Siéntese.} |
| {Te llamo mañana.} | {Le llamo mañana.} |
| {Hola, ¿qué tal?} | {Buenos días, ¿en qué puedo ayudarle?} |
| {Un abrazo} | {Atentamente} |

!tip: In Spain {tú} is very common — with strangers your age, waiters, colleagues. When in doubt, start with {usted}; people will tell you {Puedes tutearme} (you can use tú with me).

## The same message, two registers
> Oye, ¿me pasas el informe cuando puedas? ¡Gracias, eres un crack! = Hey, can you send me the report when you can? Thanks, you're a star!
> Disculpe, ¿podría enviarme el informe cuando le sea posible? Muchas gracias. = Excuse me, could you send me the report when convenient? Many thanks.

!de: Spain's {tú} is much more widespread than German "du"; {usted} feels like a very polite "Sie".
!ar: Arabic shows respect with حضرتك or titles (أستاذ، يا عمّ); Spanish uses {usted} with the 3rd-person verb.
`,
      words: `
tutear = to address someone as tú
hablar de usted = to address someone as usted
¿te importa si te tuteo? = do you mind if I call you tú?
disculpe = excuse me (formal)
oye = hey, listen (informal)
cuando le sea posible = when convenient (formal)
el registro = register (of language)
formal = formal
informal = informal
eres un crack = you're a star (colloquial)
`,
      phrases: `
¿Te importa si te tuteo? = Do you mind if I call you "tú"?
Puedes tutearme. = You can call me "tú".
Disculpe, ¿podría ayudarme? = Excuse me, could you help me?
Oye, ¿me ayudas un momento? = Hey, can you help me for a second?
Le llamo mañana sin falta. = I'll call you tomorrow without fail. (formal)
¡Gracias, eres un crack! = Thanks, you're a star!
`,
      drills: `
(to your boss, formal) ¿___ ayudarme, por favor? => Podría | Podrías | Puedes | Podéis # Could you help me, please?
(to a friend) ¿___ ayudarme? => Puedes | Podría | Pueda | Puede # Can you help me?
(formal) ___, ¿sabe dónde está la estación? => Disculpe | Disculpa | Oye | Mira # Excuse me, do you know where the station is?
Puedes ___: no soy tan mayor. => tutearme | tutearte | ustedearme | hablarme # You can call me "tú": I'm not that old.
(formal) ___ llamo mañana. => Le | Te | Lo | Os # I'll call you tomorrow.
`,
    },
    {
      t: 'The big tense review',
      k: 'grammar',
      goal: 'Use all the main tenses from A1 to B1 together',
      body: `
## Every tense you've learned
| tense | example | use |
|---|---|---|
| Presente | {Hablo español.} | now, habits |
| Estar + gerundio | {Estoy hablando.} | right now |
| Pretérito perfecto | {He hablado hoy.} | today, this week, experiences |
| Pretérito indefinido | {Hablé ayer.} | finished past events |
| Pretérito imperfecto | {De niño hablaba mucho.} | past habits, descriptions |
| Pluscuamperfecto | {Ya había hablado.} | the past before the past |
| Futuro | {Hablaré mañana.} | future, predictions, guesses |
| Ir a + infinitivo | {Voy a hablar.} | plans |
| Futuro perfecto | {Habré hablado.} | done by a future moment |
| Condicional | {Hablaría.} | would, politeness, advice |
| Imperativo | {¡Habla!} / {¡No hables!} | commands |
| Presente de subjuntivo | {Quiero que hables.} | wishes, doubts, emotions… |
| Perfecto de subjuntivo | {Espero que hayas hablado.} | the same, already done |
| Imperfecto de subjuntivo | {Si hablara…} / {Quería que hablaras.} | hypotheses, past triggers |

## One story, many tenses
> Cuando era niño, vivía en Rabat. = When I was a child, I lived in Rabat.
> Hace cinco años me mudé a Alemania, y este año he empezado a aprender español. = Five years ago I moved to Germany, and this year I've started learning Spanish.
> Ahora estoy estudiando el subjuntivo. = Now I'm studying the subjunctive.
> Si tuviera más tiempo, viviría un año en España. = If I had more time, I'd live in Spain for a year.
> Espero que dentro de un año ya haya aprobado el DELE B1. = I hope that in a year I'll have passed the DELE B1.

!tip: Your final challenge: write your own life story using at least eight different tenses — then read it aloud and record yourself in the Pronunciation lab. ¡Enhorabuena!
`,
      words: `
el tiempo verbal = (verb) tense
el repaso = review, revision
repasar = to review, to revise
el progreso = progress
mejorar = to improve
la fluidez = fluency
el nivel = level
dominar = to master
`,
      phrases: `
Cuando era niño, vivía en Rabat. = When I was a child, I lived in Rabat.
Este año he empezado a aprender español. = This year I've started learning Spanish.
Ahora estoy repasando todos los tiempos verbales. = Now I'm reviewing all the tenses.
Si tuviera más tiempo, viviría un año en España. = If I had more time, I'd live in Spain for a year.
Espero que dentro de un año haya mejorado mucho. = I hope that in a year I'll have improved a lot.
¡He llegado al nivel B1! = I've reached level B1!
`,
      drills: `
Ayer ___ al cine con mis amigos. (ir, yo) => fui | iba | he ido | iré # Yesterday I went to the cinema with my friends.
De niño ___ al fútbol todos los días. (jugar, yo) => jugaba | jugué | juego | jugaría # As a child I played football every day.
Hoy ___ mucho. (estudiar, yo) => he estudiado | estudié | estudiaba | estudiara # Today I've studied a lot.
Si ___ dinero, compraría una casa. (tener, yo) => tuviera | tengo | tendría | tenga # If I had money, I'd buy a house.
Quiero que ___ a mi fiesta. (venir, tú) => vengas | vienes | vendrás | vinieras # I want you to come to my party.
Cuando llegué, ya ___ empezado la película. => había | ha | habrá | haya # When I arrived, the film had already started.
`,
    },
  ],
  story: {
    title: 'Un año después',
    text: `
Barcelona, 4 de octubre. Hoy hace exactamente un año que empecé a estudiar español en serio. No me lo puedo creer.
= Barcelona, 4 October. Today it's exactly a year since I started studying Spanish seriously. I can't believe it.

Cuando llegué a Madrid, no entendía casi nada. Me ponía nerviosa cada vez que alguien me hablaba rápido, y siempre decía «más despacio, por favor».
= When I arrived in Madrid, I understood almost nothing. I got nervous every time someone spoke to me quickly, and I was always saying "more slowly, please".

Este año han pasado muchas cosas: conocí a gente maravillosa, me mudé a Barcelona con Omar y conseguí un trabajo en el que hablo español todos los días.
= A lot has happened this year: I met wonderful people, moved to Barcelona with Omar and got a job where I speak Spanish every day.

Lo más difícil fue el subjuntivo, ¡claro! Pero ahora, cuando Omar me dice «espero que tengas un buen día», ya no tengo que pensarlo: lo entiendo sin traducir.
= The hardest thing was the subjunctive, of course! But now, when Omar says "I hope you have a good day", I don't have to think about it any more: I understand it without translating.

Hace un año no creía que pudiera escribir un diario en español. ¡Y aquí estoy!
= A year ago I didn't think I'd be able to write a diary in Spanish. And here I am!

Mi próximo objetivo es el DELE B1. Me examinaré en mayo. Ojalá apruebe, pero aunque no lo consiga a la primera, seguiré estudiando.
= My next goal is the DELE B1. I'll take the exam in May. I hope I pass — but even if I don't manage it the first time, I'll keep studying.

Quiero darle las gracias a toda la gente que me ha ayudado. Y a ti, que estás leyendo esto: ¡ánimo! Si yo lo he conseguido, tú también puedes. ¡Hasta pronto!
= I want to thank everyone who has helped me. And to you, reading this: keep going! If I've managed it, so can you. See you soon!
`,
    questions: `
¿Cuánto tiempo hace que Anna estudia español en serio? => Un año | Dos años | Seis meses # How long has Anna been studying Spanish seriously?
¿Qué le pasaba cuando llegó a Madrid? => Se ponía nerviosa | Lo entendía todo | Hablaba muy rápido # What used to happen to her when she arrived in Madrid?
¿Qué fue lo más difícil para Anna? => El subjuntivo | La pronunciación | Los números # What was the hardest thing for Anna?
¿Cuál es su próximo objetivo? => Aprobar el DELE B1 | Mudarse a Madrid | Aprender árabe # What is her next goal?
`,
  },
}

export default w
