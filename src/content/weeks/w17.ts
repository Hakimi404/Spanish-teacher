import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 17,
  title: 'Polite requests & A2 wrap-up',
  es: '¿Podría…?',
  cando: [
    'I can make polite requests with the conditional: ¿podría…?, me gustaría…',
    'I can order a full meal in a restaurant',
    'I can join sentences with que, donde and lo que',
    'I can form adverbs with -mente',
    'I can use acabar de, volver a, dejar de, seguir + gerund',
    'I can say how long something has been happening: desde hace, llevar…',
  ],
  lessons: [
    {
      t: 'Polite requests: the conditional',
      k: 'grammar',
      goal: 'Ask politely and give advice with the conditional',
      body: `
## Conditional = infinitive + -ía endings
| | hablar | poder (podr-) |
|---|---|---|
| {yo} | {hablar[ía]} | {podr[ía]} |
| {tú} | {hablar[ías]} | {podr[ías]} |
| {él / ella / usted} | {hablar[ía]} | {podr[ía]} |
| {nosotros} | {hablar[íamos]} | {podr[íamos]} |
| {vosotros} | {hablar[íais]} | {podr[íais]} |
| {ellos / ellas / ustedes} | {hablar[ían]} | {podr[ían]} |

The conditional uses the **same irregular stems** as the future: {tendría}, {haría}, {diría}, {querría}, {saldría}, {vendría}, {sabría}…

## Being polite
> ¿Podría ayudarme? = Could you help me?
> Me gustaría reservar una mesa. = I'd like to book a table.
> ¿Le importaría cerrar la ventana? = Would you mind closing the window?
> ¿Sería posible cambiar la fecha? = Would it be possible to change the date?
> Yo que tú, iría al médico. = If I were you, I'd go to the doctor's.

!tip: In Spain the imperfect {quería} is just as polite: {Quería un café} = I'd like a coffee.
!de: The conditional is the Konjunktiv II: {¿Podría…?} = Könnten Sie…? {Me gustaría} = Ich würde gern / Ich hätte gern.
!ar: {¿Podría…?} ≈ هل يمكنك من فضلك…؟ / لو سمحت.
`,
      words: `
¿podría…? = could you…? (formal)
¿podrías…? = could you…? (informal)
me gustaría = I would like
¿le importaría…? = would you mind…?
sería = it would be
posible = possible
yo que tú = if I were you
iría = I would go
tendría = I would have
haría = I would do
la fecha = date
amable = kind
`,
      phrases: `
¿Podría hablar más despacio? = Could you speak more slowly?
Me gustaría reservar una mesa para dos. = I'd like to book a table for two.
¿Le importaría cerrar la puerta? = Would you mind closing the door?
¿Sería posible cambiar la fecha? = Would it be possible to change the date?
Yo que tú, no iría. = If I were you, I wouldn't go.
Muchas gracias, es usted muy amable. = Thank you very much, you're very kind.
`,
      drills: `
¿___ ayudarme, por favor? (poder, usted) => Podría | Podré | Poderé | Podríamos # Could you help me, please?
Me ___ viajar a Japón. (gustar) => gustaría | gustará | gustarías | gustaré # I'd like to travel to Japan.
Yo que tú, ___ más. (estudiar) => estudiaría | estudiaré | estudiaba | estudio # If I were you, I'd study more.
¿Te ___ venir conmigo? (importar) => importaría | importarías | importaré | importamos # Would you mind coming with me?
Yo no ___ eso. (hacer) => haría | hacería | haciera | hacia # I wouldn't do that.
`,
    },
    {
      t: 'At the restaurant',
      k: 'talk',
      goal: 'Book a table, order a three-course menu and ask about ingredients',
      body: `
## Booking & arriving
> Quería reservar una mesa para cuatro a las nueve. = I'd like to book a table for four at nine.
> ¿Tienen mesa para dos? = Do you have a table for two?
> ¿Nos trae la carta, por favor? = Could you bring us the menu, please?

## The menú del día
Spain's great lunch deal: a fixed price for a {primer plato} (starter), a {segundo plato} (main course), {postre} (dessert), bread and a drink.
> De primero, quiero la sopa. = For the first course, I'll have the soup.
> De segundo, el pescado a la plancha. = For the main course, the grilled fish.
> De postre, flan. = For dessert, crème caramel.
> Para beber, agua mineral. = To drink, mineral water.

## During the meal
> ¿Qué nos recomienda? = What do you recommend?
> ¿Este plato lleva cerdo? = Does this dish contain pork?
> Soy vegetariano. = I'm vegetarian.
> ¿Me trae otra servilleta? = Could you bring me another napkin?
> La cuenta, por favor. = The bill, please.

!es: Spaniards say {¡Que aproveche!} to anyone eating — even strangers at the next table. Tips aren't compulsory; 5–10 % is generous.
!ar: Asking about ingredients is completely normal: {¿Lleva cerdo?}, {¿Lleva alcohol?}, {¿Es halal?} Big cities have halal butchers and restaurants.
`,
      words: `
la carta = menu
el menú del día = set lunch menu
el primer plato = first course
el segundo plato = main course
a la plancha = grilled
asado, asada = roast
frito, frita = fried
el flan = crème caramel
¿qué nos recomienda? = what do you recommend?
¿lleva…? = does it contain…?
vegetariano, vegetariana = vegetarian
la servilleta = napkin
¡que aproveche! = enjoy your meal!
`,
      phrases: `
Quería reservar una mesa para cuatro. = I'd like to book a table for four.
¿Qué nos recomienda? = What do you recommend?
De primero, la ensalada; de segundo, el pollo asado. = For the first course, the salad; for the main course, the roast chicken.
¿Este plato lleva cerdo? = Does this dish contain pork?
Soy vegetariana. = I'm vegetarian.
¡Que aproveche! = Enjoy your meal!
`,
      drills: `
¿Nos trae la ___, por favor? (the menu) => carta | cuenta | mesa | plato # Could you bring us the menu, please?
De ___ plato, quiero la sopa. => primer | primero | primera | uno # For the first course, I'll have the soup.
Quiero el pescado a la ___. => plancha | plana | placa | planta # I'd like the grilled fish.
¿Este plato ___ cerdo? => lleva | llevas | lleve | llevan # Does this dish contain pork?
¡Que ___! (enjoy your meal) => aproveche | aprovecha | aproveches | aprovechar # Enjoy your meal!
`,
    },
    {
      t: 'Who, which, where: que & donde',
      k: 'grammar',
      goal: 'Join sentences with que, donde and lo que',
      body: `
## que = who, which, that
**que** works for people and things:
> La chica que vive aquí es médica. = The girl who lives here is a doctor.
> El libro que me regalaste es buenísimo. = The book (that) you gave me is great.
> Tengo un amigo que habla seis idiomas. = I have a friend who speaks six languages.

!warn: English can drop "that"; Spanish **never** drops {que}: {el libro que leo} = the book I'm reading.

## donde = where
> Esta es la ciudad donde nací. = This is the city where I was born.
> El restaurante donde cenamos estaba lleno. = The restaurant where we had dinner was full.

## lo que = what (the thing that)
> No entiendo lo que dices. = I don't understand what you're saying.
> Lo que más me gusta es la comida. = What I like most is the food.

!de: {que} is like German der / die / das as a relative pronoun — but it never changes: {el chico que…}, {la chica que…}, {los libros que…}.
!ar: {que} ≈ الذي / التي / الذين: {la chica que vive aquí} ≈ الفتاة التي تسكن هنا.
`,
      words: `
que = who, which, that
donde = where (in relative clauses)
lo que = what, the thing that
el que, la que = the one that / who
la persona = person
el sitio = place, spot
el compañero, la compañera = colleague, classmate, flatmate
el objeto = object
describir = to describe
`,
      phrases: `
La chica que vive aquí es médica. = The girl who lives here is a doctor.
El libro que me regalaste es buenísimo. = The book you gave me is great.
Esta es la ciudad donde nací. = This is the city where I was born.
No entiendo lo que dices. = I don't understand what you're saying.
Tengo un compañero que habla seis idiomas. = I have a colleague who speaks six languages.
Es un sitio donde se come muy bien. = It's a place where you can eat really well.
`,
      drills: `
El chico ___ trabaja conmigo es alemán. => que | quien | donde | lo que # The boy who works with me is German.
La casa ___ vivo es pequeña. => donde | que | lo que | cuando # The house where I live is small.
No sé ___ quieres. => lo que | que | el que | donde # I don't know what you want.
La película ___ vimos ayer fue horrible. => que | donde | lo que | quien # The film we saw yesterday was horrible.
___ más me gusta de España es la gente. => Lo que | Que | El que | Donde # What I like most about Spain is the people.
`,
    },
    {
      t: 'Adverbs in -mente',
      k: 'grammar',
      goal: 'Turn adjectives into adverbs and use common adverbs',
      body: `
## Making adverbs
Take the **feminine** form of the adjective and add **-mente**:
| adjective | adverb |
|---|---|
| {rápido / rápida} | {rápidamente} (quickly) |
| {lento / lenta} | {lentamente} (slowly) |
| {tranquilo / tranquila} | {tranquilamente} (calmly) |
| {fácil} | {fácilmente} (easily) |
| {normal} | {normalmente} (normally) |
| {feliz} | {felizmente} (happily) |
| {reciente} | {recientemente} (recently) |

!tip: The adjective keeps its accent: {rápido} → {rápidamente}, {fácil} → {fácilmente}.
!tip: Two adverbs in a row? Only the last one takes -mente: {clara y lentamente}.

## Common adverbs without -mente
{bien} (well), {mal} (badly), {despacio} (slowly), {deprisa} (quickly), {pronto} (soon, early), {tarde} (late), {todavía} (still), {ya} (already), {casi} (almost), {solo} (only).

> Habla español perfectamente. = He speaks Spanish perfectly.
> Conduce despacio, por favor. = Drive slowly, please.
> Llegamos pronto. = We arrived early.

!de: -mente ≈ -lich / -weise: {normalmente} = normalerweise, {finalmente} = schließlich.
!ar: Arabic often uses بـ + noun: {rápidamente} ≈ بسرعة.
`,
      words: `
rápidamente = quickly
lentamente = slowly
tranquilamente = calmly
fácilmente = easily
perfectamente = perfectly
claramente = clearly
recientemente = recently
finalmente = finally
realmente = really
despacio = slowly
deprisa = quickly
pronto = soon; early
`,
      phrases: `
Habla español perfectamente. = He speaks Spanish perfectly.
Conduce despacio, por favor. = Drive slowly, please.
Recientemente me he mudado a Valencia. = I've recently moved to Valencia.
Explícamelo clara y lentamente. = Explain it to me clearly and slowly.
Finalmente encontramos el hotel. = We finally found the hotel.
¡Ven pronto! = Come soon!
`,
      drills: `
rápido → ___ => rápidamente | rapidamente | rápidomente | rápidamento # quickly
fácil → ___ => fácilmente | facilmente | fácilamente | fácilmento # easily
Habla ___. (perfectly) => perfectamente | perfectomente | perfecto mente | perfectamento # He speaks perfectly.
Por favor, habla más ___. (slowly) => despacio | rápido | pronto | tarde # Please speak more slowly.
___ llegamos al hotel a las doce. (finally) => Finalmente | Finalamente | Final | Finalmento # We finally arrived at the hotel at twelve.
`,
    },
    {
      t: 'Acabar de, volver a, seguir…',
      k: 'grammar',
      goal: 'Use common verb phrases with infinitives and gerunds',
      body: `
## Verb + infinitive / gerund combinations
| | | |
|---|---|---|
| {acabar de} + inf. | to have just (done) | {Acabo de llegar.} — I've just arrived. |
| {volver a} + inf. | to (do) again | {Vuelve a llover.} — It's raining again. |
| {empezar a} + inf. | to start (doing) | {Empecé a estudiar.} |
| {dejar de} + inf. | to stop (doing) | {He dejado de fumar.} — I've stopped smoking. |
| {estar a punto de} + inf. | to be about to | {Está a punto de llover.} |
| {seguir} + gerund | to keep (doing), still | {Sigo estudiando español.} |
| {llevar} + time + gerund | to have been (doing) for | {Llevo dos años viviendo aquí.} |

!tip: {Acabo de comer} is the natural way to say "I've just eaten" — don't translate word for word.
!de: {acabar de} = gerade (eben) etwas getan haben: {Acabo de llegar} = Ich bin gerade angekommen. {volver a} = wieder: {Vuelvo a empezar} = Ich fange wieder an.
!ar: {acabo de} ≈ للتوّ: {Acabo de llegar} ≈ وصلتُ للتوّ. {dejar de} ≈ توقّف عن.
`,
      words: `
acabar de = to have just (done)
volver a = to (do) again
dejar de = to stop (doing)
estar a punto de = to be about to
acabo de llegar = I've just arrived
sigo estudiando = I'm still studying
llevo dos años = I've been … for two years
dejar de fumar = to give up smoking
otra vez = again
el tabaco = tobacco, cigarettes
`,
      phrases: `
Acabo de llegar a casa. = I've just got home.
Vuelve a llover. = It's raining again.
He dejado de fumar. = I've stopped smoking.
El tren está a punto de salir. = The train is about to leave.
Sigo viviendo en el mismo piso. = I'm still living in the same flat.
Llevo un año estudiando español. = I've been learning Spanish for a year.
`,
      drills: `
Acabo ___ comer. => de | a | que | en # I've just eaten.
Mañana vuelvo ___ trabajar. => a | de | que | en # Tomorrow I'm going back to work.
Mi padre dejó ___ fumar hace diez años. => de | a | que | por # My father stopped smoking ten years ago.
El concierto está a punto ___ empezar. => de | a | que | para # The concert is about to start.
Sigo ___ en el mismo trabajo. (trabajar) => trabajando | trabajar | trabajado | trabajo # I'm still working in the same job.
___ tres años viviendo en Madrid. (llevar, yo) => Llevo | Llevas | Lleva | Llevé # I've been living in Madrid for three years.
`,
    },
    {
      t: 'How long? Hace, desde, desde hace',
      k: 'grammar',
      goal: 'Say how long something has been going on',
      body: `
## Asking how long
> ¿Cuánto tiempo hace que vives aquí? = How long have you been living here?
> ¿Desde cuándo estudias español? = Since when have you been studying Spanish?

## Ways to answer
| | |
|---|---|
| {Hace} + time + {que} + present | {Hace dos años que vivo aquí.} |
| present + {desde hace} + time | {Vivo aquí desde hace dos años.} |
| present + {desde} + point in time | {Vivo aquí desde 2024.} / {desde enero} |
| {llevar} + time + gerund | {Llevo dos años viviendo aquí.} |

!warn: Spanish uses the **present** where English uses "have been": {Estudio español desde hace un mes} = I've been studying Spanish for a month.
!de: Exactly like German: "Ich wohne seit zwei Jahren hier" = {Vivo aquí desde hace dos años} — in the present!
!ar: Like منذ: أسكن هنا منذ سنتين = {Vivo aquí desde hace dos años}.

## Compare: hace = ago (with the past)
> Llegué hace dos años. = I arrived two years ago.
> Vivo aquí desde hace dos años. = I've been living here for two years.
`,
      words: `
¿cuánto tiempo hace que…? = how long have you been…?
¿desde cuándo? = since when?
desde = since, from
desde hace = for (a period up to now)
hace … que = it's been … since
la temporada = season, period
el principio = beginning
el siglo = century
la década = decade
la época = time, era, period
`,
      phrases: `
¿Cuánto tiempo hace que vives en España? = How long have you been living in Spain?
Hace tres meses que estudio español. = I've been studying Spanish for three months.
Trabajo aquí desde hace un año. = I've been working here for a year.
Vivo en Madrid desde 2025. = I've been living in Madrid since 2025.
¿Desde cuándo os conocéis? = How long have you (all) known each other?
Nos conocemos desde el colegio. = We've known each other since school.
`,
      drills: `
Vivo en España ___ hace dos años. => desde | hace | durante | por # I've been living in Spain for two years.
___ dos años que trabajo aquí. => Hace | Desde | Lleva | Durante # I've been working here for two years.
Estudio español ___ enero. => desde | desde hace | hace | durante # I've been studying Spanish since January.
¿Desde ___ vives aquí? => cuándo | cuando | cuánto | qué # Since when have you been living here?
Llegué a Madrid ___ tres meses. => hace | desde | desde hace | durante # I arrived in Madrid three months ago.
Te espero ___ las cinco. => desde | hace | desde hace | durante # I've been waiting for you since five.
`,
    },
  ],
  story: {
    title: 'Una cena especial',
    text: `
Omar y Anna se conocen desde hace un año. Esta noche van a cenar a un restaurante muy especial porque Omar tiene una noticia importante.
= Omar and Anna have known each other for a year. Tonight they're having dinner at a very special restaurant because Omar has some important news.

—Buenas noches. ¿Tienen reserva? —Sí, a nombre de Benali, una mesa para dos. —Perfecto, síganme, por favor.
= "Good evening. Do you have a reservation?" "Yes, in the name of Benali, a table for two." "Perfect, follow me, please."

El camarero les trae la carta. —¿Qué nos recomienda? —El cordero asado es la especialidad de la casa, y el pescado a la plancha está buenísimo.
= The waiter brings them the menu. "What do you recommend?" "The roast lamb is the house speciality, and the grilled fish is delicious."

—Para mí, el pescado, por favor. —Y yo querría el cordero. ¿La salsa lleva vino? —No, señor, solo hierbas y limón.
= "For me, the fish, please." "And I'd like the lamb. Does the sauce contain wine?" "No, sir, just herbs and lemon."

Mientras esperan, Anna pregunta: —Bueno, ¿cuál es esa noticia? —Acabo de recibir una oferta de trabajo… ¡en Barcelona!
= While they wait, Anna asks: "So, what's this news?" "I've just received a job offer… in Barcelona!"

—¡Enhorabuena! Pero… ¿te irías de Madrid? —Me gustaría aceptarla, pero no quiero dejar de verte. ¿Vendrías conmigo?
= "Congratulations! But… would you leave Madrid?" "I'd like to accept it, but I don't want to stop seeing you. Would you come with me?"

Anna sonríe. —Llevo meses pensando en cambiar de ciudad… ¡Barcelona me encantaría! —¡Que aproveche, entonces! —dice el camarero, que lo ha oído todo.
= Anna smiles. "I've been thinking about moving to another city for months… I'd love Barcelona!" "Enjoy your meal, then!" says the waiter, who has heard everything.
`,
    questions: `
¿Desde cuándo se conocen Omar y Anna? => Desde hace un año | Desde hace un mes | Desde el colegio # How long have Omar and Anna known each other?
¿Qué pide Anna? => El pescado | El cordero | La ensalada # What does Anna order?
¿Cuál es la noticia de Omar? => Una oferta de trabajo en Barcelona | Se va a Marruecos | Ha aprobado un examen # What is Omar's news?
¿Qué piensa Anna de ir a Barcelona? => Le encantaría | No quiere ir | No lo sabe # What does Anna think about going to Barcelona?
`,
  },
}

export default w
