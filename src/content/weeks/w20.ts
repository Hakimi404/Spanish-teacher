import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 20,
  title: 'The subjunctive III — time, purpose & people',
  es: 'Cuando llegues…',
  cando: [
    'I can use cuando + subjunctive to talk about the future',
    'I can use hasta que, en cuanto and antes de que',
    'I can express purpose with para + infinitive and para que + subjunctive',
    'I can describe what I’m looking for: busco un piso que tenga…',
    'I can use aunque with the indicative or the subjunctive',
    'I can recognise all the main subjunctive triggers',
  ],
  lessons: [
    {
      t: 'Cuando + subjunctive',
      k: 'grammar',
      goal: 'Use cuando + subjunctive for future events',
      body: `
## cuando: future vs habit
| future → subjunctive | habit or past → indicative |
|---|---|
| {Cuando llegue a casa, te llamo.} | {Cuando llego a casa, siempre ceno.} |
| When I get home, I'll call you. | When I get home, I always have dinner. |
| {Cuando tenga dinero, viajaré.} | {Cuando tenía dinero, viajaba.} |
| When I have money, I'll travel. | When I had money, I used to travel. |

!warn: English uses the present for the future here ("when I get home"); Spanish uses the **subjunctive**. Never the future after cuando: {cuando llegue}, not "cuando llegaré".
!tip: Questions keep the future: {¿Cuándo llegarás?} (with an accent). Only **cuando** in a time clause needs the subjunctive.

> Cuando termine la carrera, buscaré trabajo. = When I finish my degree, I'll look for a job.
> Llámame cuando puedas. = Call me when you can.
> Cuando seas mayor, lo entenderás. = When you're older, you'll understand.

!de: "Wenn ich nach Hause komme, rufe ich dich an" — present in German, **subjunctive** in Spanish: {Cuando llegue a casa…}
!ar: Like عندما for the future: عندما أصلُ سأتصل بك ≈ {Cuando llegue, te llamo} — Spanish marks it with the subjunctive.
`,
      words: `
cuando llegue = when I get there
cuando tenga = when I have
cuando puedas = when you can
cuando seas mayor = when you're older
llámame = call me
terminar la carrera = to finish one's degree
la jubilación = retirement
el sueldo = salary
ahorrar = to save (money)
mayor de edad = of age, adult
`,
      phrases: `
Cuando llegue a casa, te llamo. = When I get home, I'll call you.
Cuando termine la carrera, buscaré trabajo. = When I finish my degree, I'll look for a job.
Llámame cuando puedas. = Call me when you can.
Cuando tenga dinero, me compraré un coche. = When I have money, I'll buy myself a car.
Cuando seas mayor, lo entenderás. = When you're older, you'll understand.
Cuando llego a casa, siempre me ducho. = When I get home, I always have a shower.
`,
      drills: `
Cuando ___ a Madrid, te llamaré. (llegar, yo) => llegue | llego | llegaré | llegar # When I arrive in Madrid, I'll call you.
Cuando ___ a casa, siempre ceno. (habit: llegar, yo) => llego | llegue | llegaré | llegar # When I get home, I always have dinner.
Llámame cuando ___. (poder, tú) => puedas | puedes | podrás | poder # Call me when you can.
Cuando ___ mayor, seré médico. (ser, yo) => sea | soy | seré | era # When I grow up, I'll be a doctor.
¿Cuándo ___ las vacaciones? (empezar) => empiezan | empiecen | empezar | empiece # When do the holidays start?
Cuando ___ dinero, viajaré por el mundo. (tener, yo) => tenga | tengo | tendré | tener # When I have money, I'll travel the world.
`,
    },
    {
      t: 'Until, as soon as, before…',
      k: 'grammar',
      goal: 'Use hasta que, en cuanto, antes de que and después de que',
      body: `
## Time conjunctions
| | future → subjunctive | habit / past → indicative |
|---|---|---|
| {hasta que} (until) | {Espera hasta que vuelva.} | {Esperé hasta que volvió.} |
| {en cuanto} (as soon as) | {En cuanto llegue, te aviso.} | {En cuanto llegó, me avisó.} |
| {después de que} (after) | {Después de que se vayan, limpiamos.} | {Después de que se fueron, limpiamos.} |
| {mientras} (while / as long as) | {Mientras estés aquí, no pasa nada.} | {Mientras cocinaba, escuchaba música.} |

## antes de que — always subjunctive
> Llámame antes de que salgas. = Call me before you leave.
> Antes de que te vayas, dame tu número. = Before you go, give me your number.

## Same subject → infinitive
> Antes de salir, cierro la ventana. = Before going out, I close the window.
> Después de comer, descanso. = After eating, I rest.

!tip: {antes de que} takes the subjunctive in **every** tense, because the action hasn't happened yet at that point.
!de: {bis} = {hasta que}, {sobald} = {en cuanto}, {bevor} = {antes de que}.
`,
      words: `
hasta que = until
en cuanto = as soon as
tan pronto como = as soon as
antes de que = before (someone does)
después de que = after (someone does)
avisar = to let (someone) know, to warn
el aviso = notice, warning
apagar = to turn off
irse = to leave, to go away
quedarse = to stay
`,
      phrases: `
Espera aquí hasta que vuelva. = Wait here until I come back.
En cuanto llegue, te aviso. = As soon as I arrive, I'll let you know.
Llámame antes de que salgas. = Call me before you leave.
Después de que se vayan los invitados, limpiamos. = After the guests leave, we'll clean up.
No me voy hasta que termines. = I'm not leaving until you finish.
Apaga la luz antes de salir. = Turn off the light before you go out.
`,
      drills: `
Espera aquí hasta que ___. (volver, yo) => vuelva | vuelvo | volveré | volver # Wait here until I come back.
En cuanto ___ algo, te llamo. (saber, yo) => sepa | sé | sabré | saber # As soon as I know anything, I'll call you.
Llámame antes de que ___ de casa. (salir, tú) => salgas | sales | saldrás | salir # Call me before you leave home.
Antes de ___, cierra la puerta. (same subject: salir) => salir | que salgas | sales | salgas # Before going out, close the door.
Ayer esperé hasta que ___ el autobús. (past: llegar) => llegó | llegue | llegará | llega # Yesterday I waited until the bus came.
No me iré hasta que me ___ la verdad. (decir, tú) => digas | dices | dirás | decir # I won't leave until you tell me the truth.
`,
    },
    {
      t: 'Para que: so that',
      k: 'grammar',
      goal: 'Express purpose with para + infinitive and para que + subjunctive',
      body: `
## Purpose
| same subject → infinitive | different subject → que + subjunctive |
|---|---|
| {Estudio para aprobar.} | {Te explico la lección para que la entiendas.} |
| I study (in order) to pass. | I'll explain the lesson so that you understand it. |
| {Ahorro para comprar un piso.} | {Ahorro para que mis hijos puedan estudiar.} |

> Te dejo mi coche para que vayas al aeropuerto. = I'm lending you my car so you can get to the airport.
> Hablo despacio para que me entiendan. = I speak slowly so that they understand me.
> ¿Para qué estudias español? — Para trabajar en España. = What are you studying Spanish for? — To work in Spain.

## Other purpose expressions
{a fin de que} (formal: so that), {con el fin de} (with the aim of), {para que no} (so that … not): {Te lo digo para que no te preocupes.}

!tip: {para que} **always** takes the subjunctive.
!de: {damit} = {para que}: "Ich erkläre es, damit du es verstehst" = {Te lo explico para que lo entiendas}.
!ar: {para que} ≈ لكي / كي + المنصوب: كي تفهمَ ≈ {para que entiendas} — exactly the same logic!
`,
      words: `
para que = so that
¿para qué? = what for?
a fin de que = so that (formal)
con el fin de = with the aim of
dejar = to lend; to let; to leave
el objetivo = aim, objective
el motivo = reason
la meta = goal
el propósito = purpose
`,
      phrases: `
Te lo explico para que lo entiendas. = I'm explaining it so that you understand it.
Ahorro para comprarme un piso. = I'm saving to buy myself a flat.
Hablo despacio para que me entiendan. = I speak slowly so that they understand me.
Te dejo mi coche para que vayas al aeropuerto. = I'm lending you my car so you can get to the airport.
¿Para qué estudias español? = What are you studying Spanish for?
Te lo digo para que no te preocupes. = I'm telling you so that you don't worry.
`,
      drills: `
Estudio para ___ el examen. (same subject: aprobar) => aprobar | que apruebe | apruebo | apruebe # I'm studying to pass the exam.
Te lo explico para que lo ___. (entender, tú) => entiendas | entiendes | entender | entenderás # I'm explaining it so that you understand it.
Hablo alto para que todos me ___. (oír) => oigan | oyen | oír | oirán # I speak loudly so that everyone can hear me.
Mis padres trabajan para que yo ___ estudiar. (poder) => pueda | puedo | poder | podré # My parents work so that I can study.
¿Para ___ quieres el dinero? => qué | que | quién | cuál # What do you want the money for?
`,
    },
    {
      t: 'Busco un piso que tenga…',
      k: 'grammar',
      goal: 'Describe known things with the indicative and unknown ones with the subjunctive',
      body: `
## Known or unknown?
| known, real → indicative | unknown, hypothetical → subjunctive |
|---|---|
| {Tengo un piso que tiene terraza.} | {Busco un piso que tenga terraza.} |
| I have a flat that has a terrace. | I'm looking for a flat with a terrace (does one exist?). |
| {Conozco a alguien que habla ruso.} | {¿Conoces a alguien que hable ruso?} |
| {Hay un bar que abre los lunes.} | {No hay ningún bar que abra los lunes.} |

> Necesito un compañero de piso que sea ordenado. = I need a flatmate who's tidy.
> Quiero un trabajo que me guste. = I want a job I like.
> No hay nadie que sepa la respuesta. = There's nobody who knows the answer.

!tip: Ask yourself: do I know this thing exists? Yes → indicative. Not sure, or it doesn't exist → subjunctive.
!de: German makes no difference ("eine Wohnung, die eine Terrasse hat"); Spanish marks the unknown flat: {que tenga}.

## Flat-hunting words
{el anuncio} (advert), {el alquiler} (rent), {la fianza} (deposit), {amueblado} (furnished), {luminoso} (bright), {exterior} (facing the street), {la zona} (area).
`,
      words: `
el compañero de piso = flatmate
ordenado, ordenada = tidy
desordenado, desordenada = messy
el anuncio = advert
amueblado, amueblada = furnished
luminoso, luminosa = bright, full of light
exterior = outward-facing, facing the street
el alquiler = rent
la fianza = deposit
la zona = area
`,
      phrases: `
Busco un piso que tenga terraza. = I'm looking for a flat with a terrace.
Necesito un compañero de piso que sea ordenado. = I need a flatmate who's tidy.
¿Conoces a alguien que hable ruso? = Do you know anyone who speaks Russian?
Tengo un amigo que habla ruso. = I have a friend who speaks Russian.
No hay ningún restaurante que abra a las seis. = There's no restaurant that opens at six.
Quiero un piso luminoso que no sea muy caro. = I want a bright flat that isn't too expensive.
`,
      drills: `
Busco un piso que ___ dos dormitorios. (tener) => tenga | tiene | tendrá | tener # I'm looking for a flat with two bedrooms.
Vivo en un piso que ___ dos dormitorios. (tener) => tiene | tenga | tendrá | tener # I live in a flat that has two bedrooms.
¿Hay alguien aquí que ___ alemán? (hablar) => hable | habla | hablará | hablar # Is there anyone here who speaks German?
No hay nadie que ___ la respuesta. (saber) => sepa | sabe | sabrá | saber # There's nobody who knows the answer.
Quiero un trabajo que me ___. (gustar) => guste | gusta | gustará | gustar # I want a job I like.
Tengo un jefe que ___ muy simpático. (ser) => es | sea | será | ser # I have a boss who is very nice.
`,
    },
    {
      t: 'Aunque: although or even if',
      k: 'grammar',
      goal: 'Use aunque with the indicative or the subjunctive, and other contrast words',
      body: `
## aunque
| a fact → indicative | a possibility, or it doesn't matter → subjunctive |
|---|---|
| {Aunque llueve, vamos a salir.} | {Aunque llueva, vamos a salir.} |
| Although it's raining (it is), we're going out. | Even if it rains (it might), we're going out. |
| {Aunque es caro, lo compro.} | {Aunque sea caro, lo compro.} |
| Although it's expensive (I know), I'll buy it. | Even if it's expensive (I don't care), I'll buy it. |

> Aunque estoy cansado, voy a terminar el trabajo. = Although I'm tired, I'm going to finish the work.
> Aunque me lo pidas de rodillas, no voy. = Even if you beg me on your knees, I'm not going.

## Other contrast words
{a pesar de que} (despite the fact that), {a pesar de} + noun (despite), {sin embargo} (however), {pero} (but), {sino} (but rather): {No es rojo, sino naranja.}

!de: {aunque} + indicative = obwohl; {aunque} + subjunctive = auch wenn / selbst wenn.
!ar: {aunque} + indicative ≈ مع أنّ؛ {aunque} + subjunctive ≈ حتى لو.
`,
      words: `
aunque = although; even if
a pesar de que = despite the fact that
a pesar de = despite
sin embargo = however
sino = but rather
de rodillas = on one's knees
el esfuerzo = effort
merecer la pena = to be worth it
de todas formas = anyway
`,
      phrases: `
Aunque llueve, vamos a la playa. = Although it's raining, we're going to the beach.
Aunque llueva mañana, iremos a la playa. = Even if it rains tomorrow, we'll go to the beach.
Aunque es caro, merece la pena. = Although it's expensive, it's worth it.
No es mi hermano, sino mi primo. = He's not my brother, but my cousin.
A pesar del frío, salimos a pasear. = Despite the cold, we went out for a walk.
Estaba cansado; sin embargo, terminó el trabajo. = He was tired; however, he finished the work.
`,
      drills: `
Aunque ___ cansado, voy a salir. (estar — I am tired) => estoy | esté | estaré | estar # Although I'm tired, I'm going out.
Aunque mañana ___, iremos de excursión. (llover — maybe) => llueva | llueve | lloverá | llover # Even if it rains tomorrow, we'll go on the trip.
No es azul, ___ verde. => sino | pero | aunque | sin embargo # It's not blue, but green.
A pesar ___ frío, fuimos a la playa. => del | de | que | de el # Despite the cold, we went to the beach.
Es caro; sin ___, lo voy a comprar. => embargo | duda | razón | problema # It's expensive; however, I'm going to buy it.
`,
    },
    {
      t: 'Subjunctive triggers: the big picture',
      k: 'grammar',
      goal: 'Know when to use the subjunctive — at a glance',
      body: `
## When do I need the subjunctive?
A handy mnemonic is **WEIRDO**:
| | trigger | example |
|---|---|---|
| **W** | Wishes, wants | {Quiero que vengas.} |
| **E** | Emotions | {Me alegra que estés aquí.} |
| **I** | Impersonal expressions | {Es importante que descanses.} |
| **R** | Recommendations, requests | {Te recomiendo que lo leas.} |
| **D** | Doubt, denial | {No creo que sea verdad.} |
| **O** | Ojalá | {Ojalá llueva.} |

Plus: future time clauses ({cuando llegues}), purpose ({para que}), unknown things ({busco a alguien que sepa…}), {antes de que} and {aunque} (= even if).

## More triggers — always subjunctive
{con tal de que} (provided that), {sin que} (without someone…), {a no ser que} (unless), {es imprescindible que} (it's essential that), {insistir en que} (to insist that), {no es que} (it's not that).

## Quick check
1. Is there a **new subject** after {que}? If not → infinitive.
2. Is the first part a wish, emotion, doubt, request or judgement? → subjunctive.
3. Is it a fact, a certainty, or an opinion stated as true? → indicative.

!de: German speakers tend to overuse the indicative ("es importante que vienes" ✗). Remember: {Es importante que vengas}.
!ar: Trust your Arabic instinct: wherever Arabic uses أنْ / لكي + المنصوب (أريد أنْ، يجب أنْ، من المهم أنْ، لكي), Spanish probably wants {que} + subjunctive.
`,
      words: `
con tal de que = provided that
sin que = without (someone doing)
a no ser que = unless
es imprescindible que = it's essential that
insistir en que = to insist that
no es que = it's not that
conviene que = it's advisable that
me extraña que = it surprises me that
la condición = condition
el requisito = requirement
`,
      phrases: `
Te lo presto con tal de que me lo devuelvas. = I'll lend it to you provided you give it back.
Me voy sin que nadie se dé cuenta. = I'm leaving without anyone noticing.
Iremos a la playa, a no ser que llueva. = We'll go to the beach unless it rains.
Es imprescindible que traigas el pasaporte. = It's essential that you bring your passport.
Me extraña que no conteste. = It's strange that she isn't answering.
Mi madre insiste en que coma más. = My mother insists that I eat more.
`,
      drills: `
Iremos a la playa a no ser que ___. (llover) => llueva | llueve | lloverá | llover # We'll go to the beach unless it rains.
Es imprescindible que ___ el pasaporte. (traer, tú) => traigas | traes | traerás | traer # It's essential that you bring your passport.
Te lo presto con tal de que me lo ___. (devolver, tú) => devuelvas | devuelves | devolverás | devolver # I'll lend it to you provided you give it back.
Sé que ___ razón. (tener, tú) => tienes | tengas | tener | tuvieras # I know you're right.
No es que no me ___, es que no tengo tiempo. (gustar) => guste | gusta | gustará | gustar # It's not that I don't like it, it's that I don't have time.
Mi madre insiste en que ___ más. (comer, yo) => coma | como | comer | comeré # My mother insists that I eat more.
`,
    },
  ],
  story: {
    title: 'Buscando piso en Barcelona',
    text: `
Anna y Omar han decidido mudarse a Barcelona en septiembre. Ahora están buscando un piso que no sea demasiado caro.
= Anna and Omar have decided to move to Barcelona in September. Now they're looking for a flat that isn't too expensive.

—Quiero un piso que tenga mucha luz y que esté cerca del mar —dice Anna. —Y yo necesito uno con buena conexión a internet, para que pueda trabajar desde casa —dice Omar.
= "I want a flat with lots of light and close to the sea," says Anna. "And I need one with a good internet connection so that I can work from home," says Omar.

Encuentran un anuncio: piso luminoso, dos dormitorios, amueblado, en el barrio de Gràcia. Llaman a la agencia.
= They find an advert: bright flat, two bedrooms, furnished, in the Gràcia neighbourhood. They call the agency.

—Buenos días. ¿Está disponible el piso de Gràcia? —Sí, pero hay muchas personas interesadas. Les aconsejo que vengan a verlo cuanto antes.
= "Good morning. Is the flat in Gràcia available?" "Yes, but lots of people are interested. I advise you to come and see it as soon as possible."

—Llegaremos el sábado. ¿Podría esperarnos hasta que lo veamos? —No puedo prometérselo: en cuanto alguien me haga una oferta, lo alquilaré.
= "We'll arrive on Saturday. Could you wait until we've seen it?" "I can't promise that: as soon as someone makes me an offer, I'll rent it out."

El sábado van a verlo. Aunque es pequeño, es precioso y tiene una terraza con vistas. —¡Nos lo quedamos! —dice Anna antes de que Omar pueda decir nada.
= On Saturday they go to see it. Although it's small, it's lovely and has a terrace with a view. "We'll take it!" says Anna before Omar can say a word.

—Perfecto. Cuando firmen el contrato, tendrán que pagar dos meses de fianza. —Vale. ¡Y cuando nos den las llaves, haremos una fiesta!
= "Perfect. When you sign the contract, you'll have to pay two months' deposit." "OK. And when they give us the keys, we'll have a party!"
`,
    questions: `
¿Qué tipo de piso quiere Anna? => Con mucha luz y cerca del mar | Grande y barato | En el centro de Madrid # What kind of flat does Anna want?
¿Para qué necesita Omar internet? => Para trabajar desde casa | Para ver películas | Para llamar a su familia # Why does Omar need internet?
¿Cómo es el piso de Gràcia? => Pequeño pero precioso | Grande y oscuro | Caro y feo # What's the flat in Gràcia like?
¿Qué tienen que pagar al firmar el contrato? => Dos meses de fianza | Un año de alquiler | Nada # What do they have to pay when they sign the contract?
`,
  },
}

export default w
