import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 18,
  title: 'The subjunctive I — wishes',
  es: '¡Ojalá!',
  cando: [
    'I understand what the subjunctive is and when Spanish uses it',
    'I can form the present subjunctive of regular verbs',
    'I can form irregular subjunctives: sea, esté, vaya, haya, sepa, dé, tenga…',
    'I can use stem-changing verbs in the subjunctive',
    'I can express wishes with quiero que, espero que and ojalá',
    'I can make requests and recommendations: te pido que, te recomiendo que…',
  ],
  lessons: [
    {
      t: 'What is the subjunctive?',
      k: 'grammar',
      goal: 'Understand when Spanish switches to the subjunctive',
      body: `
## Two moods
Spanish verbs have **moods**:
- **Indicative** — facts, what *is*: {Ana viene.} (Ana is coming.)
- **Subjunctive** — wishes, emotions, doubts, what *might be*: {Quiero que Ana venga.} (I want Ana to come.)

The subjunctive usually appears after **que**, when the first part of the sentence expresses a wish, an emotion, a doubt or an influence — **and the subject changes**:
> Quiero ir. = I want to go. (same subject → infinitive)
> Quiero que vayas. = I want you to go. (new subject → que + subjunctive)

!tip: The formula: **[wish / emotion / doubt] + que + [new subject] + subjunctive**.
!ar: A perfect match: Arabic أنْ + المضارع المنصوب. أريد أنْ تذهبَ = {Quiero que vayas}. The particle أنْ ≈ {que}, and the verb changes its mood (منصوب ≈ subjunctive)!
!de: Similar in spirit to the German Konjunktiv ("Ich wünschte, er käme") — but Spanish uses it all the time, in simple everyday sentences: {Espero que te guste} = Ich hoffe, es gefällt dir.

## Meet the forms
> Espero que estés bien. = I hope you're well.
> Quiero que me ayudes. = I want you to help me.
> Ojalá haga sol mañana. = I hope it's sunny tomorrow.
`,
      words: `
el subjuntivo = subjunctive
el indicativo = indicative
quiero que = I want (someone) to
espero que = I hope (that)
ojalá = hopefully, I really hope
el deseo = wish
la duda = doubt
la emoción = emotion
el modo = mood (grammar); way
`,
      phrases: `
Quiero que vengas a mi fiesta. = I want you to come to my party.
Espero que estés bien. = I hope you're well.
Ojalá haga buen tiempo mañana. = I hope the weather is good tomorrow.
Mis padres quieren que estudie Medicina. = My parents want me to study Medicine.
Quiero ir, pero quiero que vengas tú también. = I want to go, but I want you to come too.
Espero que te guste el regalo. = I hope you like the present.
`,
      drills: `
Quiero ___ al cine. (same subject: ir) => ir | que vaya | que voy | vaya # I want to go to the cinema.
Quiero que tú ___ al cine. (ir) => vayas | vas | ir | irás # I want you to go to the cinema.
Espero que ___ bien. (estar, tú) => estés | estás | estar | estuviste # I hope you're well.
___ haga sol mañana. => Ojalá | Quiero | Espero | Creo # I really hope it's sunny tomorrow.
Mis padres quieren ___ estudie más. => que | de | a | si # My parents want me to study more.
`,
    },
    {
      t: 'Present subjunctive: regular verbs',
      k: 'grammar',
      goal: 'Form the present subjunctive of regular verbs',
      body: `
## The "opposite vowel"
Take the **yo** form of the present, drop the **-o** and add the opposite vowel: -ar verbs take **-e**, -er / -ir verbs take **-a**:
| | hablar → habl- | comer → com- | vivir → viv- |
|---|---|---|---|
| {yo} | {habl[e]} | {com[a]} | {viv[a]} |
| {tú} | {habl[es]} | {com[as]} | {viv[as]} |
| {él / ella / usted} | {habl[e]} | {com[a]} | {viv[a]} |
| {nosotros} | {habl[emos]} | {com[amos]} | {viv[amos]} |
| {vosotros} | {habl[éis]} | {com[áis]} | {viv[áis]} |
| {ellos / ellas / ustedes} | {habl[en]} | {com[an]} | {viv[an]} |

!tip: You already know these forms — they're the **usted commands**: {hable}, {coma}, {viva}!
!tip: Spelling keeps the sound: {buscar} → {busque}, {llegar} → {llegue}, {empezar} → {empiece}, {coger} → {coja}.

> Quiero que hables con él. = I want you to talk to him.
> Espero que comáis bien. = I hope you (all) eat well.
> Es importante que lleguemos pronto. = It's important that we arrive early.

!de: Because the vowel swaps, {hable} looks like an -er verb — read carefully: {que hable} = dass er spricht (Konjunktiv).
`,
      words: `
hable = (that) I / he speak(s)
hables = (that) you speak
coma = (that) I / he eat(s)
comas = (that) you eat
viva = (that) I / he live(s)
escriba = (that) I / he write(s)
lleguemos = (that) we arrive
busque = (that) I / he look(s) for
trabajen = (that) they work
pague = (that) I / he pay(s)
`,
      phrases: `
Quiero que hables con tu jefe. = I want you to talk to your boss.
Espero que comáis bien en el viaje. = I hope you (all) eat well on the trip.
Necesito que me escribas un correo. = I need you to write me an email.
Prefiero que paguemos con tarjeta. = I'd prefer us to pay by card.
Mi madre quiere que viva cerca de ella. = My mother wants me to live near her.
Espero que encuentres trabajo pronto. = I hope you find a job soon.
`,
      drills: `
Quiero que ___ más despacio. (hablar, tú) => hables | hablas | hable | hablarás # I want you to speak more slowly.
Espero que ___ bien. (comer, vosotros) => comáis | coméis | comas | comen # I hope you (all) eat well.
Necesito que me ___ pronto. (escribir, tú) => escribas | escribes | escriba | escribirás # I need you to write to me soon.
Es importante que ___ a tiempo. (llegar, nosotros) => lleguemos | llegamos | llegemos | llegaremos # It's important that we arrive on time.
Mi jefe quiere que ___ el sábado. (trabajar, yo) => trabaje | trabajo | trabaja | trabajar # My boss wants me to work on Saturday.
Prefiero que ___ tú. (pagar) => pagues | pagas | pages | pagarás # I'd prefer you to pay.
`,
    },
    {
      t: 'Irregular subjunctives',
      k: 'grammar',
      goal: 'Form the irregular subjunctives, including the six DISHES verbs',
      body: `
## Irregular yo forms carry over
Because the subjunctive is built on the **yo** form, its irregularities carry over:
| infinitive | yo (present) | subjunctive |
|---|---|---|
| {tener} | {tengo} | {tenga, tengas, tenga…} |
| {hacer} | {hago} | {haga} |
| {decir} | {digo} | {diga} |
| {poner} | {pongo} | {ponga} |
| {salir} | {salgo} | {salga} |
| {venir} | {vengo} | {venga} |
| {traer} | {traigo} | {traiga} |
| {conocer} | {conozco} | {conozca} |
| {ver} | {veo} | {vea} |

## Six truly irregular verbs
| | | |
|---|---|---|
| {dar} → {dé, des, dé, demos, deis, den} | {ir} → {vaya, vayas…} | {ser} → {sea, seas…} |
| {haber} → {haya, hayas…} | {estar} → {esté, estés…} | {saber} → {sepa, sepas…} |

!tip: Memory trick: **D-I-S-H-E-S** = dar, ir, ser, haber, estar, saber.

> Espero que tengas un buen viaje. = I hope you have a good trip.
> Quiero que seas feliz. = I want you to be happy.
> Ojalá haya entradas. = I hope there are tickets.
> No quiero que vayas solo. = I don't want you to go alone.
`,
      words: `
tenga = (that) I / he have / has
haga = (that) I / he do(es)
diga = (that) I / he say(s)
salga = (that) I / he go(es) out
venga = (that) I / he come(s)
sea = (that) I / he be / is
esté = (that) I / he be (location, state)
vaya = (that) I / he go(es)
haya = (that) there is / are
sepa = (that) I / he know(s)
dé = (that) I / he give(s)
conozca = (that) I / he know(s) (a person)
`,
      phrases: `
Espero que tengas un buen viaje. = I hope you have a good trip.
Quiero que seas feliz. = I want you to be happy.
Ojalá haya entradas para el concierto. = I hope there are tickets for the concert.
No quiero que vayas solo. = I don't want you to go alone.
Espero que estéis bien. = I hope you're (all) well.
Quiero que me digas la verdad. = I want you to tell me the truth.
`,
      drills: `
Espero que ___ un buen fin de semana. (tener, tú) => tengas | tienes | tenes | tendrás # I hope you have a good weekend.
Ojalá ___ sol mañana. (hacer) => haga | hace | hará | haya # I hope it's sunny tomorrow.
Quiero que ___ feliz. (ser, tú) => seas | eres | estés | serás # I want you to be happy.
No queremos que ___ solos. (ir, vosotros) => vayáis | vais | vayas | iréis # We don't want you (all) to go alone.
Ojalá ___ entradas. (haber) => haya | hay | hayan | habrá # I hope there are tickets.
Espero que ___ la respuesta. (saber, él) => sepa | sabe | sabrá | saba # I hope he knows the answer.
`,
    },
    {
      t: 'Stem changers in the subjunctive',
      k: 'grammar',
      goal: 'Use stem-changing verbs in the subjunctive',
      body: `
## -ar / -er: the same boot as the present
| | pensar | volver |
|---|---|---|
| {yo} | {p[ie]nse} | {v[ue]lva} |
| {tú} | {p[ie]nses} | {v[ue]lvas} |
| {él / ella / usted} | {p[ie]nse} | {v[ue]lva} |
| {nosotros} | {pensemos} | {volvamos} |
| {vosotros} | {penséis} | {volváis} |
| {ellos / ellas / ustedes} | {p[ie]nsen} | {v[ue]lvan} |

## -ir: an extra change in nosotros / vosotros
-ir stem changers also change **e → i** or **o → u** in nosotros and vosotros:
| | sentir | dormir | pedir |
|---|---|---|---|
| {yo} | {s[ie]nta} | {d[ue]rma} | {p[i]da} |
| {nosotros} | {s[i]ntamos} | {d[u]rmamos} | {p[i]damos} |
| {vosotros} | {s[i]ntáis} | {d[u]rmáis} | {p[i]dáis} |
| {ellos} | {s[ie]ntan} | {d[ue]rman} | {p[i]dan} |

> Espero que duermas bien. = I hope you sleep well.
> Quiero que volváis pronto. = I want you (all) to come back soon.
> Es mejor que pidamos la cuenta. = We'd better ask for the bill.
> Ojalá se diviertan. = I hope they have fun.

!tip: It's the same vowel as in the gerund and in the 3rd-person preterite: {durmiendo}, {durmió}, {durmamos}.
`,
      words: `
piense = (that) I / he think(s)
vuelva = (that) I / he come(s) back
pueda = (that) I / he can
quiera = (that) I / he want(s)
duermas = (that) you sleep
durmamos = (that) we sleep
pida = (that) I / he ask(s) for
pidamos = (that) we ask for
sienta = (that) I / he feel(s)
se diviertan = (that) they have fun
juegue = (that) I / he play(s)
empiece = (that) I / he start(s)
`,
      phrases: `
Espero que duermas bien. = I hope you sleep well.
Quiero que volváis pronto. = I want you (all) to come back soon.
Es mejor que pidamos la cuenta. = We'd better ask for the bill.
Ojalá se diviertan en la fiesta. = I hope they have fun at the party.
No quiero que pienses eso. = I don't want you to think that.
Espero que puedas venir. = I hope you can come.
`,
      drills: `
Espero que ___ bien. (dormir, tú) => duermas | dormas | durmas | duermes # I hope you sleep well.
Ojalá ___ venir mañana. (poder, ella) => pueda | puede | poda | podrá # I hope she can come tomorrow.
Es mejor que ___ un taxi. (pedir, nosotros) => pidamos | pedamos | pedimos | pidemos # We'd better order a taxi.
Quiero que ___ a casa temprano. (volver, vosotros) => volváis | vuelváis | volvéis | vuelvan # I want you (all) to come home early.
Espero que los niños se ___. (divertirse) => diviertan | divierten | divertan | divirtieron # I hope the children have fun.
No quiero que el partido ___ sin mí. (empezar) => empiece | empieza | empece | empezará # I don't want the match to start without me.
`,
    },
    {
      t: 'Wishes: ojalá & que…',
      k: 'talk',
      goal: 'Express wishes and use everyday good-wish phrases',
      body: `
## Expressing wishes
| | |
|---|---|
| {Quiero que…} | I want (someone) to… |
| {Espero que…} | I hope that… |
| {Deseo que…} | I wish that… (formal) |
| {Ojalá (que)…} | Hopefully… / I really hope… |
| {Prefiero que…} | I'd rather (someone)… |
| {Necesito que…} | I need (someone) to… |

## Good wishes with que
Spanish uses **que + subjunctive** on its own for wishes:
> ¡Que tengas un buen día! = Have a good day!
> ¡Que te vaya bien! = All the best! / Good luck!
> ¡Que descanses! = Sleep well! / Get some rest!
> ¡Que te mejores! = Get well soon!
> ¡Que lo pases bien! = Have a good time!
> ¡Que cumplas muchos más! = Many happy returns!

!ar: {ojalá} comes from Arabic لو شاء الله — "if God wills". Like إن شاء الله, people use it for any hope, religious or not: {Ojalá apruebe el examen}.
!de: {¡Que te vaya bien!} = Mach's gut! / Alles Gute! — and {¡Que te mejores!} = Gute Besserung!
`,
      words: `
ojalá (que) = hopefully, I really hope
desear = to wish
¡que tengas un buen día! = have a good day!
¡que te vaya bien! = all the best!
¡que descanses! = sleep well! rest well!
¡que te mejores! = get well soon!
¡que lo pases bien! = have a good time!
¡que cumplas muchos más! = many happy returns!
la esperanza = hope
el éxito = success
`,
      phrases: `
¡Que tengas un buen día! = Have a good day!
¡Que te mejores pronto! = Get well soon!
Ojalá me den el trabajo. = I really hope they give me the job.
Espero que todo salga bien. = I hope everything goes well.
Te deseo mucho éxito. = I wish you lots of success.
¡Que lo paséis bien en la boda! = Have a great time at the wedding!
`,
      drills: `
¡Que ___ un buen viaje! (tener, tú) => tengas | tienes | tendrás | tuviste # Have a good trip!
Ojalá ___ el examen. (aprobar, yo) => apruebe | apruebo | aprobé | aprobaré # I really hope I pass the exam.
Espero que todo ___ bien. (salir) => salga | sale | salirá | salió # I hope everything goes well.
¡Que te ___! Estás muy enfermo. (mejorar) => mejores | mejoras | mejore | mejorarás # Get well soon! You're very ill.
Te deseo mucho ___. => éxito | exitoso | salida | suceso # I wish you lots of success.
`,
    },
    {
      t: 'Requests & recommendations',
      k: 'grammar',
      goal: 'Ask, advise, allow and forbid with que + subjunctive',
      body: `
## Influencing others
Verbs of request, advice, permission and prohibition trigger the subjunctive:
| | |
|---|---|
| {pedir que} | to ask (someone) to |
| {recomendar que} | to recommend that |
| {aconsejar que} | to advise (someone) to |
| {sugerir que} | to suggest that |
| {decir que} (= an order) | to tell (someone) to |
| {permitir que} | to allow (someone) to |
| {prohibir que} | to forbid (someone) to |

> Te pido que me ayudes. = I'm asking you to help me.
> El médico me recomienda que haga ejercicio. = The doctor recommends that I exercise.
> Te aconsejo que reserves con tiempo. = I advise you to book in advance.
> Mi madre me dice que llame más. = My mother tells me to call more often.

!warn: {decir que} + **indicative** reports information: {Dice que viene} (he says he's coming). {decir que} + **subjunctive** gives an order: {Dice que vengas} (he says you should come).
!de: Like "Er sagt, ich soll kommen" = {Dice que venga}.
!ar: Like طلب منه أنْ + المنصوب: {Te pido que me ayudes} ≈ أطلب منك أنْ تساعدني.
`,
      words: `
pedir que = to ask (someone) to
recomendar = to recommend
aconsejar = to advise
sugerir = to suggest
permitir = to allow
prohibir = to forbid
la recomendación = recommendation
con tiempo = in advance, in good time
el permiso = permission
la norma = rule
`,
      phrases: `
Te pido que me ayudes. = I'm asking you to help me.
El médico me recomienda que duerma más. = The doctor recommends that I sleep more.
Te aconsejo que reserves con tiempo. = I advise you to book in advance.
Mi madre me dice que llame más. = My mother tells me to call more often.
Mis padres no permiten que salga hasta tarde. = My parents don't let me stay out late.
Os sugiero que visitéis Granada. = I suggest you (all) visit Granada.
`,
      drills: `
Te pido que ___ más despacio. (conducir) => conduzcas | conduces | conduzca | conducirás # I'm asking you to drive more slowly.
El médico me recomienda que ___ menos sal. (comer, yo) => coma | como | comer | comeré # The doctor recommends that I eat less salt.
Os aconsejo que ___ el museo del Prado. (visitar) => visitéis | visitáis | visiten | visitad # I advise you (all) to visit the Prado.
Dice que ___ mañana. (information: he's coming) => viene | venga | vengas | viniera # He says he's coming tomorrow.
Dice que ___ mañana. (order: you should come) => vengas | vienes | vendrás | venir # He says you should come tomorrow.
`,
    },
  ],
  story: {
    title: 'Querida Anna',
    text: `
Querida Anna: ¿Qué tal estás? Espero que estés bien y que no trabajes demasiado. Aquí en Hamburgo todos te echamos mucho de menos.
= Dear Anna, how are you? I hope you're well and not working too hard. Here in Hamburg we all miss you very much.

Tu padre dice que te ha llamado tres veces esta semana y que no contestas. ¡Ojalá tengas un momento para llamarlo este fin de semana!
= Your father says he has called you three times this week and you don't answer. I hope you find a moment to call him this weekend!

Me cuentas que Omar quiere que vayas a Marruecos este verano. ¡Qué bien! Te recomiendo que lleves ropa ligera y mucha crema solar.
= You tell me that Omar wants you to go to Morocco this summer. How lovely! I recommend that you take light clothes and plenty of sun cream.

Tu abuela te pide que le traigas un pañuelo de seda de Marrakech. Ya sabes que le encantan.
= Your grandmother asks you to bring her a silk scarf from Marrakech. You know she loves them.

Y sobre Barcelona: tu padre y yo queremos que seas feliz. Si quieres ir con Omar, es tu decisión. Solo te pido que lo pienses bien.
= And about Barcelona: your father and I want you to be happy. If you want to go with Omar, it's your decision. I only ask that you think it over carefully.

Te aconsejo que busques piso con tiempo, porque en Barcelona es muy difícil encontrar uno barato.
= I advise you to look for a flat in good time, because in Barcelona it's very hard to find a cheap one.

Un beso muy fuerte. ¡Que tengas una semana estupenda! Tu madre, que te quiere.
= Lots of love. Have a wonderful week! Your mother, who loves you.
`,
    questions: `
¿Qué espera la madre de Anna? => Que Anna esté bien | Que Anna vuelva a Hamburgo | Que Anna trabaje más # What does Anna's mother hope?
¿Qué le pide la abuela? => Un pañuelo de seda | Crema solar | Una carta # What does the grandmother ask for?
¿Qué quieren los padres de Anna? => Que sea feliz | Que no vaya a Barcelona | Que estudie más # What do Anna's parents want?
¿Por qué tiene que buscar piso con tiempo? => Es difícil encontrar uno barato | No le gusta Barcelona | Omar no tiene casa # Why should she look for a flat early?
`,
  },
}

export default w
