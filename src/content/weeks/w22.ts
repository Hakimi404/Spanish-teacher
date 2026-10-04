import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 22,
  title: 'Hypotheses — if I had…',
  es: 'Si tuviera tiempo…',
  cando: [
    'I can form the conditional of regular and irregular verbs',
    'I can give advice and guess about the past with the conditional',
    'I can make real conditions: si + present',
    'I can form the imperfect subjunctive',
    'I can talk about imaginary situations: si tuviera…, iría…',
    'I can use como si and ojalá + imperfect subjunctive',
  ],
  lessons: [
    {
      t: 'The conditional: would',
      k: 'grammar',
      goal: 'Form the conditional of regular and irregular verbs',
      body: `
## Conditional = would
Infinitive + **-ía, -ías, -ía, -íamos, -íais, -ían** — with the same 12 irregular stems as the future:
| regular | irregular |
|---|---|
| {hablaría}, {comería}, {viviría} | {tendría}, {pondría}, {saldría}, {vendría} |
| | {podría}, {sabría}, {habría}, {querría} |
| | {haría}, {diría}, {cabría}, {valdría} |

> Me gustaría vivir en el campo. = I'd like to live in the countryside.
> Con más tiempo, aprendería japonés. = With more time, I'd learn Japanese.
> ¿Qué harías tú? = What would you do?
> Yo no diría eso. = I wouldn't say that.

!tip: Don't mix it up with the imperfect: {comía} (I used to eat) vs {comería} (I would eat). The conditional always keeps the infinitive (or irregular stem) before -ía.
!de: {hablaría} = ich würde sprechen (Konjunktiv II with "würde").
!ar: Like the answer of لو: لذهبتُ ≈ {iría}.
`,
      words: `
hablaría = I would speak
comería = I would eat
viviría = I would live
saldría = I would go out, leave
vendría = I would come
pondría = I would put
sabría = I would know
querría = I would want, like
diría = I would say
habría = there would be
`,
      phrases: `
Me gustaría vivir en el campo. = I'd like to live in the countryside.
Con más tiempo, aprendería japonés. = With more time, I'd learn Japanese.
¿Qué harías tú en mi lugar? = What would you do in my place?
Yo no diría eso. = I wouldn't say that.
Sería genial ir juntos. = It would be great to go together.
¿Vendrías conmigo a Marruecos? = Would you come to Morocco with me?
`,
      drills: `
Me ___ ir a Japón. (gustar) => gustaría | gustará | gustaba | gustó # I'd like to go to Japan.
¿Qué ___ tú en mi lugar? (hacer) => harías | hacerías | harás | hacías # What would you do in my place?
Yo no ___ eso nunca. (decir) => diría | deciría | diré | decía # I would never say that.
Con más dinero, ___ una casa más grande. (tener, nosotros) => tendríamos | teneríamos | tendremos | teníamos # With more money, we'd have a bigger house.
¿___ conmigo al cine? (venir, tú) => Vendrías | Venirías | Vendrás | Venías # Would you come to the cinema with me?
`,
    },
    {
      t: 'Advice & guesses about the past',
      k: 'talk',
      goal: 'Give advice and express probability in the past with the conditional',
      body: `
## Giving advice
| | |
|---|---|
| {Yo que tú…} | If I were you… |
| {Yo en tu lugar…} | In your place… |
| {Deberías…} | You should… |
| {Podrías…} | You could… |
| {Sería mejor…} | It would be better to… |
| {Te convendría…} | It would be good for you to… |

> Yo que tú, hablaría con ella. = If I were you, I'd talk to her.
> Deberías descansar más. = You should rest more.
> Podrías preguntar en información. = You could ask at the information desk.

## Guessing about the past
The conditional also expresses **probability in the past**:
> ¿Qué hora era cuando llegaste? — Serían las once. = What time was it when you arrived? — It must have been about eleven.
> Tendría unos veinte años cuando se casó. = She must have been about twenty when she got married.

!tip: Guess about now → future ({Serán las diez}); guess about the past → conditional ({Serían las diez}).
!de: {Yo que tú…} = An deiner Stelle würde ich…; {Deberías} = Du solltest.
`,
      words: `
yo en tu lugar = in your place
yo que tú = if I were you
deberías = you should
podrías = you could
sería mejor = it would be better
te convendría = it would be good for you
serían las once = it must have been about eleven
tendría unos veinte años = he / she must have been about twenty
la sugerencia = suggestion
recomendaría = I would recommend
`,
      phrases: `
Yo que tú, hablaría con ella. = If I were you, I'd talk to her.
Deberías descansar más. = You should rest more.
Podrías preguntar en información. = You could ask at the information desk.
Sería mejor salir temprano. = It would be better to leave early.
Serían las once cuando llegamos. = It must have been about eleven when we arrived.
Yo en tu lugar, aceptaría el trabajo. = In your place, I'd accept the job.
`,
      drills: `
Yo que tú, ___ con tu jefe. (hablar) => hablaría | hablaré | hablaba | hablé # If I were you, I'd talk to your boss.
___ dormir más. Estás muy cansado. (deber, tú) => Deberías | Deberás | Deberéis | Deberían # You should sleep more. You're very tired.
Sería ___ coger un taxi. => mejor | bueno | bien | mejores # It would be better to take a taxi.
¿Qué hora era? — No sé, ___ las tres. => serían | serán | seré | sería # What time was it? — I don't know, it must have been about three.
Yo en tu ___, no lo compraría. => lugar | sitio | caso | lado # In your place, I wouldn't buy it.
`,
    },
    {
      t: 'Si + present: real conditions',
      k: 'grammar',
      goal: 'Talk about real and likely conditions with si',
      body: `
## Real or likely conditions
**si + present → present / future / command**
> Si tengo tiempo, te llamo. = If I have time, I'll call you.
> Si llueve, no iremos a la playa. = If it rains, we won't go to the beach.
> Si ves a Ana, dile que la espero. = If you see Ana, tell her I'm waiting for her.
> Si quieres, puedo ayudarte. = If you like, I can help you.

!warn: Never the future or the present subjunctive after **si** (if): {si llueve} — not "si lloverá" or "si llueva".
!tip: {si} (if) has no accent; {sí} (yes) does.

## si = whether
> No sé si viene. = I don't know whether he's coming.
> Pregúntale si quiere café. = Ask him if he wants coffee.

!de: {si} = wenn / falls / ob: {Si tengo tiempo} = Wenn ich Zeit habe; {No sé si viene} = Ich weiß nicht, ob er kommt.
!ar: {si} + present ≈ إذا: إذا كان عندي وقت سأتصل بك ≈ {Si tengo tiempo, te llamo}.
`,
      words: `
si = if; whether
si tengo tiempo = if I have time
si quieres = if you like
si llueve = if it rains
dile = tell him / her
la excursión = trip, outing
cancelar = to cancel
no sé si = I don't know whether
pregúntale = ask him / her
en ese caso = in that case
`,
      phrases: `
Si tengo tiempo, te llamo. = If I have time, I'll call you.
Si llueve, cancelaremos la excursión. = If it rains, we'll cancel the trip.
Si ves a Ana, dile que la espero. = If you see Ana, tell her I'm waiting for her.
Si quieres, te ayudo. = If you like, I'll help you.
No sé si mi hermano viene a la cena. = I don't know whether my brother is coming to dinner.
Pregúntale si quiere un café. = Ask him if he wants a coffee.
`,
      drills: `
Si ___ tiempo, iré al gimnasio. (tener, yo) => tengo | tenga | tendré | tuviera # If I have time, I'll go to the gym.
Si llueve, no ___ a la playa. (ir, nosotros) => iremos | iríamos | fuéramos | vayamos # If it rains, we won't go to the beach.
Si ___ a Pedro, dile hola. (ver, tú) => ves | veas | verás | vieras # If you see Pedro, say hello.
No sé ___ viene mañana. => si | sí | que | cuando # I don't know whether he's coming tomorrow.
Si ___, te ayudo con los deberes. (querer, tú) => quieres | quieras | querrás | quisieras # If you want, I'll help you with your homework.
`,
    },
    {
      t: 'The imperfect subjunctive',
      k: 'grammar',
      goal: 'Form the imperfect subjunctive and use it after past triggers',
      body: `
## Forming it
Take the **ellos** form of the preterite, drop **-ron** and add **-ra, -ras, -ra, -ramos, -rais, -ran**:
| infinitive | ellos (preterite) | imperfect subjunctive |
|---|---|---|
| {hablar} | {hablaron} | {hablara, hablaras, hablara, habláramos, hablarais, hablaran} |
| {comer} | {comieron} | {comiera, comieras…} |
| {vivir} | {vivieron} | {viviera, vivieras…} |
| {tener} | {tuvieron} | {tuviera} |
| {ser / ir} | {fueron} | {fuera} |
| {hacer} | {hicieron} | {hiciera} |
| {decir} | {dijeron} | {dijera} |
| {poder} | {pudieron} | {pudiera} |
| {estar} | {estuvieron} | {estuviera} |
| {pedir} | {pidieron} | {pidiera} |

!tip: The nosotros form always has an accent: {habláramos}, {tuviéramos}, {fuéramos}.
!tip: There's an alternative ending in **-se** ({hablase}, {tuviese}) with the same meaning — you just need to recognise it.

## When is it used?
When the trigger is in the **past** or the **conditional**:
> Quería que vinieras. = I wanted you to come.
> Me pidió que le ayudara. = She asked me to help her.
> Sería mejor que te quedaras. = It would be better if you stayed.

!de: It's the Konjunktiv II of the past: "Ich wollte, dass du kämest".
!ar: Again أنْ + المنصوب — after a past verb: أردتُ أنْ تأتيَ ≈ {Quería que vinieras}.
`,
      words: `
hablara = (that) I / he spoke
comiera = (that) I / he ate
viviera = (that) I / he lived
tuviera = (that) I / he had
fuera = (that) I / he were; went
hiciera = (that) I / he did
dijera = (that) I / he said
pudiera = (that) I / he could
estuviera = (that) I / he were (state, place)
quisiera = I would like (very polite)
`,
      phrases: `
Quería que vinieras a la fiesta. = I wanted you to come to the party.
Me pidió que le ayudara. = She asked me to help her.
Sería mejor que te quedaras en casa. = It would be better if you stayed at home.
Mis padres no querían que viviera solo. = My parents didn't want me to live alone.
Quisiera hablar con el director. = I would like to speak to the director.
Le dije que hiciera los deberes. = I told him to do his homework.
`,
      drills: `
Quería que ___ conmigo. (venir, tú) => vinieras | vengas | venías | vendrías # I wanted you to come with me.
Me pidió que le ___. (ayudar, yo) => ayudara | ayude | ayudaba | ayudaría # She asked me to help her.
Sería mejor que ___ en casa. (quedarse, tú) => te quedaras | te quedes | te quedabas | te quedarías # It would be better if you stayed at home.
No querían que ___ tan tarde. (salir, nosotros) => saliéramos | salgamos | salíamos | saldríamos # They didn't want us to go out so late.
Le dije que ___ la verdad. (decir, él) => dijera | diga | decía | diría # I told him to tell the truth.
___ un café, por favor. (very polite: querer, yo) => Quisiera | Quiera | Querré | Quiere # I'd like a coffee, please.
`,
    },
    {
      t: 'Si tuviera…, iría…',
      k: 'grammar',
      goal: 'Talk about imaginary or unlikely situations',
      body: `
## si + imperfect subjunctive → conditional
| condition (unreal or unlikely) | result |
|---|---|
| {Si tuviera dinero,} | {viajaría por todo el mundo.} |
| If I had money, | I'd travel all over the world. |
| {Si fuera tú,} | {no lo haría.} |
| If I were you, | I wouldn't do it. |
| {Si viviera en España,} | {hablaría español todos los días.} |
| If I lived in Spain, | I'd speak Spanish every day. |

> ¿Qué harías si te tocara la lotería? = What would you do if you won the lottery?
> Si pudiera, cambiaría de trabajo. = If I could, I'd change jobs.
> Si no lloviera, iríamos a la playa. = If it weren't raining, we'd go to the beach.

!tip: The halves can swap: {Viajaría por el mundo si tuviera dinero.}
!warn: Never the conditional after **si**: {si tuviera} — not "si tendría".

## Real vs unreal
- {Si tengo tiempo, te llamaré.} — possible.
- {Si tuviera tiempo, te llamaría.} — I don't have time (or it's unlikely).

!de: Exactly "Wenn ich Geld hätte, würde ich reisen" = {Si tuviera dinero, viajaría}.
!ar: Like لو + الماضي … لـَ: لو كان عندي مال لسافرتُ ≈ {Si tuviera dinero, viajaría}.
`,
      words: `
si tuviera = if I had
si fuera = if I were
si pudiera = if I could
si viviera = if I lived
tocar la lotería = to win the lottery
la lotería = lottery
imaginar = to imagine
millonario, millonaria = millionaire
dar la vuelta al mundo = to travel around the world
la isla = island
desierto, desierta = deserted
`,
      phrases: `
Si tuviera dinero, viajaría por todo el mundo. = If I had money, I'd travel all over the world.
¿Qué harías si te tocara la lotería? = What would you do if you won the lottery?
Si pudiera, cambiaría de trabajo. = If I could, I'd change jobs.
Si fuera tú, no lo haría. = If I were you, I wouldn't do it.
Si viviera en Granada, visitaría la Alhambra cada mes. = If I lived in Granada, I'd visit the Alhambra every month.
¿Qué te llevarías a una isla desierta? = What would you take to a desert island?
`,
      drills: `
Si ___ dinero, compraría una casa. (tener, yo) => tuviera | tendría | tenía | tenga # If I had money, I'd buy a house.
Si fuera tú, no lo ___. (hacer) => haría | hiciera | haga | hacía # If I were you, I wouldn't do it.
¿Qué harías si te ___ la lotería? (tocar) => tocara | tocaría | toca | toque # What would you do if you won the lottery?
Si ___, iría a tu fiesta. (poder, yo) => pudiera | podría | puedo | pueda # If I could, I'd go to your party.
Si no ___ tanto, saldríamos. (llover) => lloviera | llovería | llueve | llueva # If it weren't raining so much, we'd go out.
Si tengo tiempo mañana, te ___. (real: llamar) => llamaré | llamaría | llamara | llamé # If I have time tomorrow, I'll call you.
`,
    },
    {
      t: 'Como si & ojalá + past subjunctive',
      k: 'grammar',
      goal: 'Say "as if" and wish for unlikely or impossible things',
      body: `
## como si = as if (always imperfect subjunctive)
> Habla como si fuera el jefe. = He talks as if he were the boss.
> Me miró como si no me conociera. = She looked at me as if she didn't know me.
> Gasta dinero como si fuera millonario. = He spends money as if he were a millionaire.

## ojalá + imperfect subjunctive = an unlikely or impossible wish
| ojalá + present subjunctive (possible) | ojalá + imperfect subjunctive (unlikely, impossible) |
|---|---|
| {Ojalá haga sol mañana.} | {Ojalá hiciera sol.} (but it's raining) |
| I hope it's sunny tomorrow. | I wish it were sunny. |
| {Ojalá puedas venir.} | {Ojalá pudieras venir.} (but you can't) |

> Ojalá tuviera más tiempo. = I wish I had more time.
> Ojalá estuvieras aquí. = I wish you were here.
> Ojalá supiera tocar la guitarra. = I wish I could play the guitar.

!de: {Ojalá tuviera…} = Ich wünschte, ich hätte…; {como si} = als ob: {como si fuera el jefe} = als ob er der Chef wäre.
!ar: {Ojalá estuvieras aquí} ≈ ليتك كنتَ هنا — just like ليت for impossible wishes, while {ojalá} + present ≈ عسى / إن شاء الله.
`,
      words: `
como si = as if
ojalá tuviera = I wish I had
ojalá estuvieras aquí = I wish you were here
ojalá supiera = I wish I knew
gastar = to spend (money)
la nostalgia = nostalgia, homesickness
la ilusión = excitement, hope (Spain)
fingir = to pretend
`,
      phrases: `
Habla como si fuera el jefe. = He talks as if he were the boss.
Me miró como si no me conociera. = She looked at me as if she didn't know me.
Ojalá tuviera más tiempo libre. = I wish I had more free time.
Ojalá estuvieras aquí conmigo. = I wish you were here with me.
Ojalá supiera tocar la guitarra. = I wish I could play the guitar.
Tengo mucha ilusión por el viaje. = I'm really excited about the trip.
`,
      drills: `
Habla como si ___ el jefe. (ser) => fuera | sea | es | sería # He talks as if he were the boss.
Ojalá ___ más tiempo. (tener, yo — but I don't) => tuviera | tenga | tengo | tendría # I wish I had more time.
Me trata como si ___ un niño. (ser, yo) => fuera | sea | soy | era # He treats me as if I were a child.
Ojalá ___ hablar japonés. (saber, yo — but I can't) => supiera | sepa | sé | sabría # I wish I could speak Japanese.
Ojalá ___ sol mañana. (possible: hacer) => haga | hiciera | hace | hará # I hope it's sunny tomorrow.
`,
    },
  ],
  story: {
    title: 'Si nos tocara el Gordo…',
    text: `
Es diciembre y en España todo el mundo habla de la Lotería de Navidad, «el Gordo». Laura, Omar y Anna están en un bar y cada uno tiene un décimo.
= It's December and everyone in Spain is talking about the Christmas Lottery, "El Gordo". Laura, Omar and Anna are in a bar and each of them has a ticket.

—¿Qué haríais si os tocara el Gordo? —pregunta Laura.
= "What would you do if you won El Gordo?" asks Laura.

—Yo dejaría de trabajar y daría la vuelta al mundo —dice Anna—. Primero iría a Japón, después a Argentina… y viviría como si fuera millonaria.
= "I'd stop working and travel around the world," says Anna. "First I'd go to Japan, then Argentina… and I'd live as if I were a millionaire."

—Pues yo no dejaría mi trabajo, porque me gusta mucho —dice Omar—. Pero compraría una casa grande para mis padres en Rabat y ayudaría a mis hermanos a estudiar.
= "Well, I wouldn't quit my job, because I like it a lot," says Omar. "But I'd buy a big house for my parents in Rabat and help my brother and sister with their studies."

—¡Qué bonito! Y tú, Laura, ¿qué harías? —Yo abriría una librería con cafetería en Sevilla, mi ciudad. Y si tuviera tiempo, escribiría una novela.
= "That's lovely! And you, Laura, what would you do?" "I'd open a bookshop-café in Seville, my city. And if I had time, I'd write a novel."

—Ojalá nos tocara a los tres —dice Anna—. Pero si no nos toca, ¡al menos tenemos salud! —¡Eso es lo más importante! —responden los otros.
= "I wish all three of us would win," says Anna. "But if we don't, at least we've got our health!" "That's the most important thing!" the others reply.

El 22 de diciembre, los niños de San Ildefonso cantan los números en la tele. No les toca nada… pero se ríen mucho y deciden hacer el viaje a Japón juntos de todas formas, aunque sea sin el Gordo.
= On 22 December the children of San Ildefonso sing the winning numbers on TV. They win nothing… but they laugh a lot and decide to take the trip to Japan together anyway, even without El Gordo.
`,
    questions: `
¿Qué haría Anna si le tocara la lotería? => Daría la vuelta al mundo | Abriría una librería | Compraría una casa # What would Anna do if she won the lottery?
¿Para quién compraría Omar una casa? => Para sus padres | Para Anna | Para él # Who would Omar buy a house for?
¿Qué abriría Laura? => Una librería con cafetería | Un restaurante | Una tienda de ropa # What would Laura open?
¿Les toca la lotería? => No | Sí, el Gordo | Sí, a Laura # Do they win the lottery?
`,
  },
}

export default w
