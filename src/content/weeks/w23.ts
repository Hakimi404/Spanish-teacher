import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 23,
  title: 'Reported speech & the news',
  es: 'Me dijo que…',
  cando: [
    'I can report what someone says: dice que…',
    'I can report past speech with tense changes: dijo que…',
    'I can report questions and requests: me preguntó si…, me pidió que…',
    'I can use el que, quien, lo que and cuyo',
    'I can use lo + adjective: lo bueno, lo mejor…',
    'I can talk about the news and the media',
  ],
  lessons: [
    {
      t: 'Dice que…: reporting the present',
      k: 'grammar',
      goal: 'Report what someone says right now',
      body: `
## Reporting what someone says now
When the reporting verb is in the **present**, tenses don't change — only pronouns and possessives do:
> «Estoy cansado.» → Dice que está cansado. = He says he's tired.
> «Mañana voy a Madrid.» → Dice que mañana va a Madrid. = She says she's going to Madrid tomorrow.
> «Mi hermano vive en Rabat.» → Dice que su hermano vive en Rabat. = He says his brother lives in Rabat.
> «¿Tienes hambre?» → Pregunta si tengo hambre. = He's asking if I'm hungry.
> «¿Dónde vives?» → Pregunta dónde vivo. = She's asking where I live.

## Reporting verbs
{decir} (say), {comentar} (mention), {explicar} (explain), {contar} (tell), {preguntar} (ask), {responder} (answer), {asegurar} (assure), {añadir} (add).

!tip: Yes / no questions → **si**; question-word questions keep the word, with its accent: {Me pregunta cuándo llegas.}
!de: Like "Er sagt, dass er müde ist" — but Spanish never drops {que}: {Dice que está cansado}.
!ar: Like يقول إنّ: {Dice que está cansado} ≈ يقول إنّه متعب.
`,
      words: `
dice que = he / she says (that)
pregunta si = he / she asks if
comentar = to mention, to comment
asegurar = to assure; to insure
añadir = to add
responder = to answer
el mensaje de voz = voice message
el estilo indirecto = reported speech
textualmente = word for word
según = according to
`,
      phrases: `
Dice que está muy cansado. = He says he's very tired.
Mi madre dice que la comida está lista. = My mother says the food is ready.
Pregunta si quieres venir. = He's asking if you want to come.
Me pregunta dónde está la estación. = She's asking me where the station is.
Según Ana, el examen es fácil. = According to Ana, the exam is easy.
Te ha dejado un mensaje de voz. = She's left you a voice message.
`,
      drills: `
«Tengo hambre.» → Dice que ___ hambre. => tiene | tengo | tenga | tuvo # "I'm hungry." → He says he's hungry.
«¿Vienes?» → Pregunta ___ vienes. => si | que | cuando | sí # "Are you coming?" → He's asking if you're coming.
«¿Dónde vives?» → Me pregunta ___ vivo. => dónde | donde | si | que # "Where do you live?" → She's asking me where I live.
«Mi coche es rojo.» → Dice que ___ coche es rojo. => su | mi | tu | sus # "My car is red." → He says his car is red.
___ el periódico, mañana lloverá. => Según | Como | Dice | Para # According to the newspaper, it will rain tomorrow.
`,
    },
    {
      t: 'Dijo que…: reporting the past',
      k: 'grammar',
      goal: 'Report past speech with the right tense changes',
      body: `
## Tenses shift back after a past reporting verb
When the reporting verb is in the **past** ({dijo}, {comentó}, {explicó}), the tenses shift back:
| what they said | reported |
|---|---|
| present: «Estoy cansado.» | imperfect: {Dijo que estaba cansado.} |
| preterite / perfect: «He comido.» | pluperfect: {Dijo que había comido.} |
| future: «Iré mañana.» | conditional: {Dijo que iría al día siguiente.} |
| ir a: «Voy a llamar.» | iba a: {Dijo que iba a llamar.} |
| imperfect: «Vivía en Rabat.» | no change: {Dijo que vivía en Rabat.} |

## Time and place words change too
{hoy} → {aquel día}, {mañana} → {al día siguiente}, {ayer} → {el día anterior}, {aquí} → {allí}, {este} → {ese / aquel}.

!tip: In everyday speech people often keep the present if it's still true: {Me dijo que es alemán} (he still is).
!de: German uses the Konjunktiv I ("Er sagte, er sei müde"); Spanish just shifts the indicative: {Dijo que estaba cansado}.
!ar: Like قال إنّه كان: {Dijo que estaba cansado} ≈ قال إنّه كان متعبًا.
`,
      words: `
dijo que = he / she said (that)
explicó que = he / she explained that
contó que = he / she told (that)
al día siguiente = the next day
el día anterior = the day before
aquel día = that day
añadió que = he / she added that
prometió que = he / she promised that
aseguró que = he / she assured that
`,
      phrases: `
Me dijo que estaba cansado. = He told me he was tired.
Ana dijo que había comido en casa. = Ana said she had eaten at home.
Prometió que vendría a la fiesta. = He promised he'd come to the party.
Dijo que iba a llamar más tarde. = She said she was going to call later.
Me contó que de niño vivía en Rabat. = He told me he lived in Rabat as a child.
Explicó que el tren había salido con retraso. = She explained that the train had left late.
`,
      drills: `
«Estoy enfermo.» → Dijo que ___ enfermo. => estaba | está | estuvo | esté # "I'm ill." → He said he was ill.
«He perdido las llaves.» → Dijo que ___ perdido las llaves. => había | ha | habría | hubo # "I've lost the keys." → She said she had lost the keys.
«Llegaré tarde.» → Dijo que ___ tarde. => llegaría | llegará | llega | llegaba # "I'll be late." → He said he'd be late.
«Voy a estudiar.» → Dijo que ___ a estudiar. => iba | va | fue | iría # "I'm going to study." → She said she was going to study.
«Mañana te llamo.» → Dijo que me llamaría ___. => al día siguiente | mañana | ayer | el día anterior # "I'll call you tomorrow." → He said he'd call me the next day.
`,
    },
    {
      t: 'Reported questions & requests',
      k: 'grammar',
      goal: 'Report questions and requests, including que + subjunctive',
      body: `
## Questions
> «¿Estás bien?» → Me preguntó si estaba bien. = She asked me if I was OK.
> «¿Cuándo vuelves?» → Me preguntó cuándo volvía. = He asked me when I was coming back.
> «¿Qué has hecho?» → Me preguntó qué había hecho. = She asked me what I had done.

## Requests and orders → que + subjunctive
| reporting verb | example | mood |
|---|---|---|
| present | «Ven pronto.» → {Me dice que venga pronto.} | present subjunctive |
| past | «Ven pronto.» → {Me dijo que viniera pronto.} | imperfect subjunctive |

> «Llámame.» → Me pidió que la llamara. = She asked me to call her.
> «No hagáis ruido.» → Nos dijo que no hiciéramos ruido. = He told us not to make any noise.

!tip: {decir que} + indicative reports information; {decir que} + subjunctive reports an order.
!de: "Sie bat mich, sie anzurufen" = {Me pidió que la llamara}.
!ar: طلبت منّي أنْ أتصل بها ≈ {Me pidió que la llamara}.
`,
      words: `
me preguntó si = he / she asked me if
me pidió que = he / she asked me to
me dijo que viniera = he / she told me to come
ordenar = to order
rogar = to beg, to ask
la petición = request
el favor = favour
hacer un favor = to do a favour
la orden = order, command
el recado = message; errand
`,
      phrases: `
Me preguntó si estaba bien. = She asked me if I was OK.
Me preguntó cuándo volvía. = He asked me when I was coming back.
Me pidió que la llamara. = She asked me to call her.
Nos dijo que no hiciéramos ruido. = He told us not to make any noise.
Mi jefe me pidió que terminara el informe. = My boss asked me to finish the report.
¿Me haces un favor? = Will you do me a favour?
`,
      drills: `
«¿Tienes frío?» → Me preguntó ___ tenía frío. => si | que | cuando | qué # "Are you cold?" → He asked me if I was cold.
«¿Dónde vives?» → Me preguntó dónde ___. => vivía | vivo | viva | viviera # "Where do you live?" → She asked me where I lived.
«Llámame.» → Me pidió que la ___. => llamara | llame | llamaba | llamaría # "Call me." → She asked me to call her.
«Llámame.» → Me pide que la ___. => llame | llamara | llamo | llamaría # "Call me." → She's asking me to call her.
«No fuméis aquí.» → Nos dijo que no ___ allí. => fumáramos | fumemos | fumábamos | fumaríamos # "Don't smoke here." → He told us not to smoke there.
`,
    },
    {
      t: 'El que, quien, cuyo…',
      k: 'grammar',
      goal: 'Use relative pronouns after prepositions, and cuyo',
      body: `
## Beyond que
| | use | example |
|---|---|---|
| {el que / la que / los que / las que} | after prepositions; "the one(s) who" | {La empresa para la que trabajo es alemana.} |
| {quien / quienes} | people, after prepositions or commas | {La chica con quien hablé es médica.} |
| {lo que} | "what", an idea | {No entiendo lo que dices.} |
| {cuyo / cuya / cuyos / cuyas} | whose (agrees with the thing owned) | {Es el escritor cuyos libros leo.} |
| {donde} | where | {El pueblo donde nací.} |

> El amigo del que te hablé vive en Sevilla. = The friend I told you about lives in Seville.
> Los que lleguen tarde no podrán entrar. = Those who arrive late won't be able to get in.
> Es una ciudad cuya historia es fascinante. = It's a city whose history is fascinating.

!tip: Spanish puts the preposition **before** the relative, never at the end: {la persona con la que hablo} (the person I talk *with*).
!de: {cuyo} = dessen / deren: {el escritor cuyos libros leo} = der Schriftsteller, dessen Bücher ich lese.
!ar: {cuyo} ≈ الذي … ـه: الكاتب الذي أقرأ كتبه ≈ {el escritor cuyos libros leo}.
`,
      words: `
el que, la que = the one that / who
los que = those who
quien = who (person)
cuyo, cuya = whose
del que = about which, about whom
con quien = with whom
para la que = for which
el refrán = saying, proverb
fascinante = fascinating
`,
      phrases: `
La empresa para la que trabajo es alemana. = The company I work for is German.
La chica con quien hablé es médica. = The girl I spoke to is a doctor.
El amigo del que te hablé vive en Sevilla. = The friend I told you about lives in Seville.
Los que lleguen tarde no podrán entrar. = Those who arrive late won't be able to get in.
Es una ciudad cuya historia es fascinante. = It's a city whose history is fascinating.
Quien mucho abarca, poco aprieta. = Grasp all, lose all. (proverb)
`,
      drills: `
La casa en ___ vivo es antigua. => la que | que | quien | lo que # The house I live in is old.
El chico con ___ salgo es alemán. => quien | que | cuyo | lo que # The boy I'm going out with is German.
Es la escritora ___ libros me encantan. => cuyos | cuyas | cuya | quien # She's the writer whose books I love.
No entiendo ___ quieres decir. => lo que | el que | que | cual # I don't understand what you mean.
___ quieran venir, que me avisen. => Los que | Lo que | Quien | Cuyos # Those who want to come, let me know.
`,
    },
    {
      t: 'Lo bueno, lo mejor…',
      k: 'grammar',
      goal: 'Talk about "the good thing", "the best part" with lo',
      body: `
## lo + adjective = "the … thing / part"
> Lo bueno de Madrid es la gente. = The good thing about Madrid is the people.
> Lo malo es que hace mucho calor. = The bad thing is that it's very hot.
> Lo mejor del viaje fue la comida. = The best part of the trip was the food.
> Lo peor es el tráfico. = The worst thing is the traffic.
> Lo importante es participar. = The important thing is to take part.
> Lo más difícil del español es el subjuntivo. = The hardest thing about Spanish is the subjunctive.

## lo que + verb = what
> Lo que más me gusta es pasear. = What I like most is walking.
> Haz lo que quieras. = Do whatever you want.

## lo + adjective + que = how
> No sabes lo difícil que es. = You don't know how difficult it is.

!de: {lo bueno} = das Gute (daran); {lo mejor} = das Beste.
!ar: {lo mejor} ≈ أفضل ما في / الأفضل.
`,
      words: `
lo bueno = the good thing
lo malo = the bad thing
lo mejor = the best thing
lo peor = the worst thing
lo importante = the important thing
lo más difícil = the hardest thing
lo raro = the strange thing
lo curioso = the funny / curious thing
lo que más me gusta = what I like most
haz lo que quieras = do whatever you want
`,
      phrases: `
Lo bueno de Madrid es la gente. = The good thing about Madrid is the people.
Lo malo es que hace mucho calor en verano. = The bad thing is that it's very hot in summer.
Lo mejor del viaje fue la comida. = The best part of the trip was the food.
Lo importante es que estás bien. = The important thing is that you're OK.
Lo que más me gusta es pasear por el centro. = What I like most is walking around the centre.
No sabes lo difícil que es. = You don't know how difficult it is.
`,
      drills: `
___ bueno de vivir aquí es el clima. => Lo | El | La | Los # The good thing about living here is the climate.
Lo ___ del viaje fue el hotel. (worst) => peor | malo | peores | más malo # The worst thing about the trip was the hotel.
___ que más me gusta es cocinar. => Lo | El | La | Que # What I like most is cooking.
Haz ___ que quieras. => lo | el | la | que # Do whatever you want.
No sabes lo cansado ___ estoy. => que | como | lo | cual # You don't know how tired I am.
`,
    },
    {
      t: 'News & media',
      k: 'vocab',
      goal: 'Talk about the news, the press and social media',
      body: `
## Los medios de comunicación
| | |
|---|---|
| {las noticias} | the news |
| {el periódico} | newspaper |
| {la revista} | magazine |
| {el titular} | headline |
| {el artículo} | article |
| {el / la periodista} | journalist |
| {la radio} | radio |
| {el telediario} | TV news (Spain) |
| {las redes sociales} | social media |
| {la publicidad} | advertising |
| {la encuesta} | survey |
| {el bulo} | hoax, fake news (Spain) |

> Según las noticias, el Gobierno subirá los impuestos. = According to the news, the government will raise taxes.
> Lo leí en un artículo de El País. = I read it in an article in El País.
> Ese titular es un bulo: no te lo creas. = That headline is a hoax: don't believe it.

!es: Spain's main newspapers are {El País}, {El Mundo}, {ABC} and {La Vanguardia}; the public broadcaster is {RTVE}. A daily podcast or {Radio Nacional} is a great B1 habit.
!tip: The news is full of reported speech: {El ministro dijo que…}, {Según fuentes oficiales…}, {La policía informó de que…}
`,
      words: `
las noticias = the news
la revista = magazine
el titular = headline
el artículo = article
el telediario = TV news (Spain)
las redes sociales = social media
la publicidad = advertising
la encuesta = survey
el bulo = hoax, fake news (Spain)
el Gobierno = the government
los impuestos = taxes
`,
      phrases: `
¿Has visto las noticias hoy? = Have you seen the news today?
Según el telediario, mañana nevará en Madrid. = According to the TV news, it will snow in Madrid tomorrow.
Lo leí en un artículo de El País. = I read it in an article in El País.
Ese titular es un bulo. = That headline is a hoax.
Paso demasiado tiempo en las redes sociales. = I spend too much time on social media.
El Gobierno va a bajar los impuestos. = The government is going to lower taxes.
`,
      drills: `
Leo las ___ en el móvil cada mañana. => noticias | notas | novelas | nóminas # I read the news on my phone every morning.
Vimos el ___ de las nueve. (TV news) => telediario | periódico | titular | artículo # We watched the nine o'clock news.
No te creas eso, es un ___. => bulo | bolo | bulto | blog # Don't believe that, it's a hoax.
Paso mucho tiempo en las redes ___. => sociales | sociedades | sociables | social # I spend a lot of time on social media.
Según una ___, el 60 % de los jóvenes lee poco. => encuesta | entrevista | revista | apuesta # According to a survey, 60% of young people read little.
`,
    },
  ],
  story: {
    title: 'Noticias de Madrid',
    text: `
Ya es octubre. Anna y Omar viven en Barcelona desde hace un mes. Un domingo, Laura llama a Anna por videollamada.
= It's October already. Anna and Omar have been living in Barcelona for a month. One Sunday, Laura video-calls Anna.

—¡Hola, guapa! Tengo muchas noticias. Ayer vi a Javier, el profesor. Me dijo que te echaba mucho de menos y me preguntó si estabas contenta en Barcelona.
= "Hi, lovely! I've got loads of news. Yesterday I saw Javier, the teacher. He told me he missed you a lot and asked me if you were happy in Barcelona."

—¡Qué majo! Dile que sí, que estoy encantada. ¿Qué más te contó? —Me contó que su hija había empezado el colegio y que el próximo verano iría con su familia a Marruecos.
= "How sweet! Tell him yes, I'm delighted. What else did he tell you?" "He told me his daughter had started school and that next summer he'd go to Morocco with his family."

—¡Qué bien! Omar se pondrá muy contento. —¡Ya lo sabe! Javier me dijo que Omar le había escrito con una lista de restaurantes de Rabat.
= "Great! Omar will be thrilled." "He already knows! Javier told me Omar had written to him with a list of restaurants in Rabat."

—Y lo mejor: ¿te acuerdas de la abuela Carmen? Me pidió que te diera un beso y que te dijera que te mandaría su receta de croquetas.
= "And the best part: do you remember Grandma Carmen? She asked me to give you a kiss and to tell you she'd send you her croquette recipe."

—¡Ay, qué ilusión! Lo malo es que aquí no tengo una cocina tan grande como la suya… —Lo importante es que lo intentes. ¡Y que me invites!
= "Oh, how exciting! The bad thing is that I don't have a kitchen as big as hers here…" "The important thing is that you try. And that you invite me!"

—¡Claro! Por cierto, según el telediario, este fin de semana va a hacer muy buen tiempo en Barcelona. ¿Por qué no vienes? —¡Me has convencido! Compro el billete ahora mismo.
= "Of course! By the way, according to the TV news, the weather in Barcelona is going to be lovely this weekend. Why don't you come?" "You've convinced me! I'm buying the ticket right now."
`,
    questions: `
¿Qué le preguntó Javier a Laura? => Si Anna estaba contenta en Barcelona | Dónde vivía Omar | Cuándo volvería Anna # What did Javier ask Laura?
¿Adónde iría Javier el próximo verano? => A Marruecos | A Barcelona | A Alemania # Where would Javier go next summer?
¿Qué le pidió la abuela Carmen a Laura? => Que le diera un beso a Anna | Que la llamara | Que comprara croquetas # What did Grandma Carmen ask Laura?
¿Qué decide hacer Laura al final? => Ir a Barcelona | Quedarse en Madrid | Llamar a Javier # What does Laura decide to do in the end?
`,
  },
}

export default w
