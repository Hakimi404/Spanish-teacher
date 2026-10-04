import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 16,
  title: 'The future & travel',
  es: '¡Buen viaje!',
  cando: [
    'I can form the future tense, including the irregular stems',
    'I can make predictions and promises',
    'I can book a hotel room and solve problems there',
    'I can travel by plane and train: tickets, platforms, delays',
    'I can use por and para in common situations',
    'I can guess about the present with the future of probability',
  ],
  lessons: [
    {
      t: 'The future: hablaré',
      k: 'grammar',
      goal: 'Form the future tense and use it for predictions and promises',
      body: `
## The future tense
Add the endings to the **whole infinitive** — the same endings for -ar, -er and -ir:
| | hablar | comer | vivir |
|---|---|---|---|
| {yo} | {hablar[é]} | {comer[é]} | {vivir[é]} |
| {tú} | {hablar[ás]} | {comer[ás]} | {vivir[ás]} |
| {él / ella / usted} | {hablar[á]} | {comer[á]} | {vivir[á]} |
| {nosotros} | {hablar[emos]} | {comer[emos]} | {vivir[emos]} |
| {vosotros} | {hablar[éis]} | {comer[éis]} | {vivir[éis]} |
| {ellos / ellas / ustedes} | {hablar[án]} | {comer[án]} | {vivir[án]} |

> Mañana lloverá en el norte. = Tomorrow it will rain in the north.
> Te llamaré esta noche. = I'll call you tonight.
> Dentro de diez años viviré en el campo. = In ten years I'll live in the countryside.

## ir a or the future?
- **ir a + infinitive**: plans, things about to happen: {Voy a comprar un coche.}
- **future**: predictions, promises, the more distant future: {En 2050 habrá más coches eléctricos.} {Te lo prometo: estudiaré más.}

!de: The Spanish future is "werden" + infinitive in one word: {hablaré} = ich werde sprechen.
!ar: Like سـ / سوف + المضارع: {hablaré} ≈ سأتكلّم.
`,
      words: `
hablaré = I will speak
comerás = you will eat
vivirá = he / she will live
lloverá = it will rain
el futuro = future
prometer = to promise
te lo prometo = I promise (you)
dentro de = in (time from now)
el próximo año = next year
el pronóstico = (weather) forecast
el robot = robot
`,
      phrases: `
Mañana lloverá en el norte. = Tomorrow it will rain in the north.
Te llamaré esta noche. = I'll call you tonight.
Dentro de diez años viviré en el campo. = In ten years I'll live in the countryside.
Te lo prometo: estudiaré más. = I promise: I'll study more.
¿Qué tiempo hará mañana? = What will the weather be like tomorrow?
En el futuro los robots trabajarán por nosotros. = In the future robots will work for us.
`,
      drills: `
Mañana ___ a mis padres. (llamar, yo) => llamaré | llamará | llamo | llamaría # Tomorrow I'll call my parents.
¿___ en la fiesta? (bailar, tú) => Bailarás | Bailaras | Bailará | Bailarías # Will you dance at the party?
El año que viene ___ en Madrid. (vivir, nosotros) => viviremos | vivimos | vivirán | viviríamos # Next year we'll live in Madrid.
Según el pronóstico, mañana ___. (llover) => lloverá | llueva | llovía | llovió # According to the forecast, it will rain tomorrow.
Te lo prometo: no ___ nunca más. (fumar, yo) => fumaré | fumo | fumé | fumará # I promise: I'll never smoke again.
___ de dos años terminaré la carrera. => Dentro | En | A | Por # In two years I'll finish my degree.
`,
    },
    {
      t: 'Irregular futures',
      k: 'grammar',
      goal: 'Use the twelve irregular future stems',
      body: `
## Twelve irregular stems (same endings)
| infinitive | stem | yo |
|---|---|---|
| {tener} | tendr- | {tendré} |
| {poner} | pondr- | {pondré} |
| {salir} | saldr- | {saldré} |
| {venir} | vendr- | {vendré} |
| {valer} | valdr- | {valdré} |
| {poder} | podr- | {podré} |
| {saber} | sabr- | {sabré} |
| {haber} | habr- | {habrá} (there will be) |
| {caber} | cabr- | {cabré} |
| {querer} | querr- | {querré} |
| {hacer} | har- | {haré} |
| {decir} | dir- | {diré} |

!tip: Three groups: **-dr-** ({tendré}, {pondré}, {saldré}, {vendré}), **lost vowel** ({podré}, {sabré}, {habrá}, {querré}), and the two rebels {haré} and {diré}.

> ¿Qué harás este verano? = What will you do this summer?
> No podré ir. = I won't be able to go.
> Saldremos a las ocho. = We'll leave at eight.
> Habrá mucha gente. = There will be lots of people.

!de: Learn the 12 stems once and you get two tenses: the future and the conditional ({tendría}, {haría}…).
`,
      words: `
tendré = I will have
pondré = I will put
saldré = I will leave, go out
vendré = I will come
podré = I will be able to
sabré = I will know
habrá = there will be
querré = I will want
haré = I will do, make
diré = I will say
el verano que viene = next summer
`,
      phrases: `
¿Qué harás este verano? = What will you do this summer?
No podré ir a tu fiesta. = I won't be able to come to your party.
Saldremos a las ocho en punto. = We'll leave at eight o'clock sharp.
Mañana habrá mucho tráfico. = There will be a lot of traffic tomorrow.
Te diré la verdad. = I'll tell you the truth.
¿Vendréis a vernos en verano? = Will you (all) come and see us in summer?
`,
      drills: `
Mañana ___ mucho trabajo. (tener, yo) => tendré | teneré | tendría | tengo # Tomorrow I'll have a lot of work.
¿Qué ___ el fin de semana? (hacer, tú) => harás | hacerás | harías | haces # What will you do at the weekend?
No ___ ir a la reunión. (poder, nosotros) => podremos | poderemos | podríamos | podemos # We won't be able to go to the meeting.
El tren ___ a las nueve. (salir) => saldrá | salirá | saldría | salgrá # The train will leave at nine.
Mañana ___ mucha gente en la playa. (haber) => habrá | haberá | habrán | habría # There will be lots of people on the beach tomorrow.
Te ___ el secreto mañana. (decir, yo) => diré | deciré | diría | digo # I'll tell you the secret tomorrow.
`,
    },
    {
      t: 'At the hotel',
      k: 'talk',
      goal: 'Book a room and sort out problems at a hotel',
      body: `
## Booking a room
> Quería reservar una habitación. = I'd like to book a room.
> ¿Tienen habitaciones libres? = Do you have any rooms available?
> Una habitación doble / individual. = A double / single room.
> ¿Para cuántas noches? — Para tres noches. = For how many nights? — For three nights.
> ¿Está incluido el desayuno? = Is breakfast included?
> ¿A qué hora hay que dejar la habitación? = What time is check-out?
> ¿Hay wifi? ¿Cuál es la contraseña? = Is there wifi? What's the password?

## Solving problems
> El aire acondicionado no funciona. = The air conditioning doesn't work.
> No hay agua caliente. = There's no hot water.
> La habitación es muy ruidosa. ¿Me la puede cambiar? = The room is very noisy. Can you change it?

!tip: {Quería} (imperfect) is a very polite way to ask for something in Spain: {Quería una habitación} = I'd like a room.
!es: Places to stay: {el hotel}, {el hostal} (simple, often family-run), {el parador} (state-run hotels in castles and monasteries), {el apartamento turístico} and {el albergue} (hostel — e.g. on the Camino de Santiago).
`,
      words: `
reservar = to book, to reserve
la habitación = room; bedroom
doble = double
individual = single
incluido, incluida = included
la recepción = reception
el aire acondicionado = air conditioning
el agua caliente = hot water
funcionar = to work (machines)
la reserva = booking, reservation
el ascensor = lift, elevator
quería = I'd like (polite)
`,
      phrases: `
Quería reservar una habitación doble. = I'd like to book a double room.
¿Para cuántas noches? — Para dos. = For how many nights? — For two.
¿Está incluido el desayuno? = Is breakfast included?
El aire acondicionado no funciona. = The air conditioning doesn't work.
¿Me puede cambiar de habitación? = Can you move me to another room?
Tengo una reserva a nombre de Omar Benali. = I have a booking in the name of Omar Benali.
`,
      drills: `
Quería ___ una habitación. => reservar | reserva | reservo | reservado # I'd like to book a room.
Una habitación ___ para dos personas. => doble | individual | simple | dos # A double room for two people.
¿Está ___ el desayuno? => incluido | incluida | incluye | incluir # Is breakfast included?
La ducha no ___. => funciona | funcionan | trabaja | trabajan # The shower doesn't work.
Tengo una reserva a ___ de García. => nombre | número | apellido | cargo # I have a booking in the name of García.
`,
    },
    {
      t: 'Airport & train station',
      k: 'talk',
      goal: 'Buy tickets, find your platform and handle delays',
      body: `
## At the airport — el aeropuerto
> ¿Dónde se factura el equipaje? = Where do I check in my luggage?
> ¿Me enseña su pasaporte y la tarjeta de embarque? = Can you show me your passport and boarding pass?
> ¿Ventanilla o pasillo? = Window or aisle?
> El vuelo tiene un retraso de una hora. = The flight is delayed by an hour.
> La puerta de embarque es la B12. = The boarding gate is B12.
> He perdido mi maleta. = I've lost my suitcase.

## At the station — la estación
> Un billete de ida y vuelta a Valencia, por favor. = A return ticket to Valencia, please.
> Solo de ida. = Just one way.
> ¿De qué andén sale el tren? = Which platform does the train leave from?
> ¿A qué hora llega a Barcelona? = What time does it arrive in Barcelona?
> ¿Hay que hacer transbordo? = Do I have to change trains?

!es: Spain has one of the largest high-speed networks in the world: {el AVE} links Madrid with Barcelona, Seville, Valencia and Málaga in around two and a half hours. There's a security check, so arrive a little early.
!tip: {perder} = to miss ({He perdido el tren}) *and* to lose ({He perdido la maleta}).
`,
      words: `
el aeropuerto = airport
el vuelo = flight
facturar = to check in (luggage)
el equipaje = luggage
la tarjeta de embarque = boarding pass
la puerta de embarque = boarding gate
el retraso = delay
el andén = platform
el billete de ida y vuelta = return ticket
solo de ida = one way
el transbordo = change (of trains)
la ventanilla = window (seat); ticket window
el pasillo = aisle; corridor
`,
      phrases: `
Un billete de ida y vuelta a Sevilla, por favor. = A return ticket to Seville, please.
¿De qué andén sale el tren? = Which platform does the train leave from?
El vuelo tiene una hora de retraso. = The flight is an hour late.
¿Dónde se factura el equipaje? = Where do I check in my luggage?
¿Prefiere ventanilla o pasillo? = Would you prefer a window or an aisle seat?
He perdido el tren de las diez. = I've missed the ten o'clock train.
`,
      drills: `
Un billete de ida y ___, por favor. => vuelta | volver | vuelo | venida # A return ticket, please.
El tren sale del ___ 5. => andén | puerta | pasillo | vuelo # The train leaves from platform 5.
El vuelo tiene un ___ de dos horas. => retraso | tarde | retrasado | lento # The flight is two hours late.
¿Dónde se ___ las maletas? => facturan | factura | facturo | facturas # Where are suitcases checked in?
¿Prefiere ventanilla o ___? => pasillo | puerta | andén | asiento # Would you prefer window or aisle?
`,
    },
    {
      t: 'Por or para? The basics',
      k: 'grammar',
      goal: 'Use para for purpose and destination, por for cause, route and means',
      body: `
## para — purpose, destination, deadline, recipient
| use | example |
|---|---|
| purpose (in order to) | {Estudio para aprender.} |
| destination | {Salgo para Madrid.} |
| deadline | {Lo necesito para el lunes.} |
| recipient | {Este regalo es para ti.} |
| opinion | {Para mí, es fácil.} |

## por — cause, route, means, exchange, time of day
| use | example |
|---|---|
| cause, reason | {Lo hago por ti.} {Gracias por todo.} |
| through, around | {Paseamos por el parque.} |
| means | {Hablo por teléfono.} |
| exchange, price | {Lo compré por diez euros.} |
| part of the day | {por la mañana}, {por la tarde} |
| per | {cien kilómetros por hora} |

!tip: A quick test: **para** points forward to a goal (→); **por** looks back at a cause or moves through something.
!de: {para} ≈ für / um … zu (purpose); {por} ≈ wegen / durch / pro.
!ar: {para} ≈ لـ / لكي (الهدف)، {por} ≈ بسبب / عبر / مقابل.
`,
      words: `
para = for, in order to
por = by, through, because of, per
para mí = for me; in my opinion
gracias por… = thanks for…
por teléfono = on the phone
por la mañana = in the morning
por ciento = per cent
por hora = per hour
para siempre = forever
el kilómetro = kilometre
`,
      phrases: `
Este regalo es para ti. = This present is for you.
Gracias por tu ayuda. = Thanks for your help.
Estudio español para trabajar en España. = I'm studying Spanish in order to work in Spain.
Paseamos por el centro. = We walked around the centre.
Necesito el informe para el viernes. = I need the report by Friday.
Lo compré por veinte euros. = I bought it for twenty euros.
`,
      drills: `
Este libro es ___ mi hermana. => para | por | a | de # This book is for my sister.
Gracias ___ todo. => por | para | de | a # Thanks for everything.
Estudio ___ aprobar el examen. => para | por | a | de # I'm studying (in order) to pass the exam.
Hablamos ___ teléfono cada día. => por | para | en | de # We talk on the phone every day.
Necesito el informe ___ el lunes. => para | por | a | en # I need the report by Monday.
Caminamos ___ la playa. => por | para | de | sin # We walked along the beach.
`,
    },
    {
      t: 'Predictions & probability',
      k: 'talk',
      goal: 'Make predictions and guess about the present with the future',
      body: `
## Making predictions
> Creo que mañana hará sol. = I think it'll be sunny tomorrow.
> Seguramente llegaremos tarde. = We'll probably arrive late.
> Estoy seguro de que aprobarás. = I'm sure you'll pass.
> Quizás iré a Marruecos en verano. = Maybe I'll go to Morocco in the summer.
> Dentro de cincuenta años, todos los coches serán eléctricos. = In fifty years, all cars will be electric.

## The future of probability
The future can also express a **guess about the present**:
> ¿Dónde está Ana? — Estará en casa. = Where's Ana? — She's probably at home.
> ¿Qué hora es? — Serán las diez. = What time is it? — It must be about ten.
> Tendrá unos treinta años. = He must be about thirty.

!tip: This "guessing future" is very common in Spain: {¿Quién será?} = I wonder who that is.
!de: Like German "Er wird wohl zu Hause sein" = {Estará en casa}.
!ar: Like لعلّ / ربما: {Estará en casa} ≈ لعلّها في البيت.
`,
      words: `
creo que = I think (that)
seguramente = probably, surely
estoy seguro de que = I'm sure (that)
quizás = maybe, perhaps
a lo mejor = maybe (Spain, colloquial)
probablemente = probably
eléctrico, eléctrica = electric
estará = he / she will be; is probably
serán las diez = it must be about ten
¿quién será? = I wonder who it is
la predicción = prediction
el planeta = planet
`,
      phrases: `
Creo que mañana hará sol. = I think it'll be sunny tomorrow.
Seguramente llegaremos tarde. = We'll probably arrive late.
Estoy seguro de que aprobarás. = I'm sure you'll pass.
¿Dónde está Ana? — Estará en casa. = Where's Ana? — She's probably at home.
Llaman a la puerta. ¿Quién será? = Someone's at the door. I wonder who it is.
A lo mejor vamos a la playa. = Maybe we'll go to the beach.
`,
      drills: `
¿Qué hora es? — No sé, ___ las nueve. => serán | seré | será | serás # What time is it? — I don't know, it must be about nine.
Creo que mañana ___ frío. (hacer) => hará | hace | hacerá | haga # I think it'll be cold tomorrow.
Estoy ___ de que te gustará. => seguro | seguramente | segurado | asegurado # I'm sure you'll like it.
¿Dónde está Pedro? — ___ en el trabajo. => Estará | Estaré | Estarás | Estarán # Where's Pedro? — He's probably at work.
A lo ___ vamos al cine. => mejor | bueno | peor | más # Maybe we'll go to the cinema.
`,
    },
  ],
  story: {
    title: 'Vacaciones en Marruecos',
    text: `
Es junio y Omar y Anna están planeando sus vacaciones. Este verano irán a Marruecos.
= It's June and Omar and Anna are planning their holidays. This summer they'll go to Morocco.

—¿Cómo iremos? —pregunta Anna. —Primero tomaremos el AVE de Madrid a Málaga. Después iremos en autobús hasta Tarifa, y allí cogeremos el ferry a Tánger.
= "How will we get there?" asks Anna. "First we'll take the AVE from Madrid to Málaga. Then we'll go by bus to Tarifa, and there we'll catch the ferry to Tangier."

—¿Cuánto tarda el ferry? —Solo una hora. ¡Desde Tarifa se ve África!
= "How long does the ferry take?" "Only an hour. You can see Africa from Tarifa!"

—¿Y dónde dormiremos? —La primera noche, en un hotel de Tánger. Ya he reservado una habitación doble con vistas al mar. El desayuno está incluido.
= "And where will we sleep?" "The first night, in a hotel in Tangier. I've already booked a double room with a sea view. Breakfast is included."

—Después iremos a Rabat a ver a mi familia. Mi madre preparará un cuscús enorme y mis hermanos te harán mil preguntas.
= "Then we'll go to Rabat to see my family. My mother will make an enormous couscous and my brother and sister will ask you a thousand questions."

—¡Qué nervios! ¿Hablarán español? —Mi hermana, un poco. Pero no te preocupes: yo traduciré. Y seguramente aprenderás algunas palabras de árabe.
= "I'm so nervous! Will they speak Spanish?" "My sister speaks a little. But don't worry: I'll translate. And you'll probably learn some words of Arabic."

—Hará mucho calor, ¿verdad? —Sí, en agosto estaremos a cuarenta grados. ¡Tendrás que llevar crema solar!
= "It'll be very hot, won't it?" "Yes, in August it'll be forty degrees. You'll have to bring sun cream!"
`,
    questions: `
¿Adónde irán de vacaciones? => A Marruecos | A Italia | A Alemania # Where will they go on holiday?
¿Cómo cruzarán el mar? => En ferry | En avión | En tren # How will they cross the sea?
¿Qué preparará la madre de Omar? => Un cuscús | Una paella | Un tajín # What will Omar's mother make?
¿Quién traducirá? => Omar | La hermana de Omar | Anna # Who will translate?
`,
  },
}

export default w
