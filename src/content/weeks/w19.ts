import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 19,
  title: 'The subjunctive II — feelings & opinions',
  es: 'No creo que…',
  cando: [
    'I can express feelings about other people’s actions: me alegra que…',
    'I can give opinions: creo que + indicative, no creo que + subjunctive',
    'I can express doubt and possibility: dudo que, es posible que, quizás',
    'I can use impersonal expressions: es importante que, es mejor que…',
    'I can give negative commands: no hables, no vayas…',
    'I can place pronouns in commands: dímelo / no me lo digas',
  ],
  lessons: [
    {
      t: 'Emotions: me alegra que…',
      k: 'grammar',
      goal: 'Express feelings about what others do',
      body: `
## Feelings about someone else → subjunctive
| | |
|---|---|
| {Me alegra que…} / {Me alegro de que…} | I'm glad that… |
| {Me encanta que…} | I love it that… |
| {Me molesta que…} | It bothers me that… |
| {Me preocupa que…} | It worries me that… |
| {Me da pena que…} | It's a shame that… / I'm sad that… |
| {Siento que…} | I'm sorry that… |
| {Tengo miedo de que…} | I'm afraid that… |
| {Me sorprende que…} | It surprises me that… |

> Me alegra que estés aquí. = I'm glad you're here.
> Me molesta que llegues tarde. = It bothers me that you're late.
> Siento que no puedas venir. = I'm sorry you can't come.
> Me preocupa que no coma. = It worries me that he isn't eating.

!tip: Same subject → infinitive: {Me alegra verte} (I'm glad to see you).
!de: German keeps the indicative ("Ich freue mich, dass du da bist"); Spanish needs the subjunctive: {Me alegro de que estés aquí}.
!ar: Arabic uses أنّ here (يسعدني أنّك هنا), but Spanish switches mood: {Me alegra que estés aquí}.
`,
      words: `
me alegra que = I'm glad that
alegrarse de = to be glad about
me molesta que = it bothers me that
me preocupa que = it worries me that
me da pena que = it's a shame that, I'm sad that
siento que = I'm sorry that
tengo miedo de que = I'm afraid that
me sorprende que = it surprises me that
el sentimiento = feeling
la pena = sorrow, pity
el miedo = fear
`,
      phrases: `
Me alegra que estés aquí. = I'm glad you're here.
Me molesta que no me escuches. = It bothers me that you don't listen to me.
Siento que no puedas venir. = I'm sorry you can't come.
Me preocupa que trabajes tanto. = It worries me that you work so much.
Me da pena que te vayas. = I'm sad you're leaving.
Me sorprende que no sepas nadar. = It surprises me that you can't swim.
`,
      drills: `
Me alegra que ___ aquí. (estar, tú) => estés | estás | estar | estarás # I'm glad you're here.
Me molesta que ___ tarde. (llegar, tú) => llegues | llegas | llegar | legues # It bothers me that you arrive late.
Siento que no ___ venir. (poder, vosotros) => podáis | podéis | puedáis | podréis # I'm sorry you (all) can't come.
Me alegra ___ a mis amigos. (same subject: ver) => ver | que vea | veo | vea # I'm glad to see my friends.
Tengo miedo de que ___ a llover. (empezar) => empiece | empieza | empezar | empezará # I'm afraid it's going to start raining.
`,
    },
    {
      t: 'Creo que vs no creo que',
      k: 'grammar',
      goal: 'Give opinions and switch mood when you deny or doubt',
      body: `
## Affirming → indicative · Denying → subjunctive
| indicative (stated as true) | subjunctive (denied or doubted) |
|---|---|
| {Creo que es verdad.} | {No creo que sea verdad.} |
| {Pienso que tienes razón.} | {No pienso que tengas razón.} |
| {Me parece que va a llover.} | {No me parece que vaya a llover.} |
| {Estoy seguro de que viene.} | {No estoy seguro de que venga.} |
| {Es verdad que habla bien.} | {No es verdad que hable bien.} |

## Giving your opinion
> En mi opinión, el transporte público es caro. = In my opinion, public transport is expensive.
> Para mí, lo más importante es la salud. = For me, the most important thing is health.
> Creo que tienes razón. = I think you're right.
> No creo que sea una buena idea. = I don't think it's a good idea.

!tip: {Creo que} takes the **indicative** — even though "I think" sounds unsure in English, Spanish treats it as a statement.
!de: German doesn't change mood: "Ich glaube nicht, dass es stimmt" = {No creo que sea verdad}.
`,
      words: `
no creo que = I don't think that
pienso que = I think that
me parece que = it seems to me that
en mi opinión = in my opinion
tener razón = to be right
está claro que = it's clear that
es verdad que = it's true that
estar seguro de = to be sure of
la opinión = opinion
la idea = idea
`,
      phrases: `
Creo que tienes razón. = I think you're right.
No creo que sea una buena idea. = I don't think it's a good idea.
Me parece que va a llover. = It looks like it's going to rain.
No estoy seguro de que venga. = I'm not sure he's coming.
En mi opinión, es demasiado caro. = In my opinion, it's too expensive.
Es verdad que Madrid es muy bonita. = It's true that Madrid is very beautiful.
`,
      drills: `
Creo que ___ razón. (tener, tú) => tienes | tengas | tener | tenga # I think you're right.
No creo que ___ verdad. (ser) => sea | es | será | ser # I don't think it's true.
Me parece que ___ a llover. (ir) => va | vaya | ir | vayan # It looks like it's going to rain.
No pienso que ___ tan difícil. (ser) => sea | es | ser | era # I don't think it's that difficult.
Es verdad que ___ muy bien. (cocinar, él) => cocina | cocine | cocinar | cocinara # It's true that he cooks very well.
No está claro que ___ mañana. (venir, ellos) => vengan | vienen | venir | vendrán # It's not clear that they'll come tomorrow.
`,
    },
    {
      t: 'Doubt & possibility',
      k: 'grammar',
      goal: 'Express doubt and possibility with the subjunctive',
      body: `
## Doubt and possibility → subjunctive
| | |
|---|---|
| {Dudo que…} | I doubt that… |
| {Es posible que…} / {Puede que…} | It's possible that… / Maybe… |
| {Es probable que…} | It's likely that… |
| {Es imposible que…} | It's impossible that… |
| {Quizás / Tal vez} + subjunctive | Perhaps… |

> Dudo que lleguen a tiempo. = I doubt they'll arrive on time.
> Es posible que llueva. = It might rain.
> Puede que tengas razón. = You might be right.
> Quizás vaya a la fiesta. = Perhaps I'll go to the party.

!tip: {quizás} and {tal vez} take the subjunctive when you're unsure (and the indicative when you're fairly sure). But {a lo mejor} always takes the **indicative**: {A lo mejor voy}.
!de: {Es posible que} = Es kann sein, dass…; {Dudo que} = Ich bezweifle, dass… — German keeps the indicative, Spanish doesn't.
!ar: {Es posible que} ≈ من الممكن أنْ + المنصوب — once again أنْ ≈ {que} + subjunctive!
`,
      words: `
dudo que = I doubt that
es posible que = it's possible that
puede que = maybe, it may be that
es probable que = it's likely that
es imposible que = it's impossible that
quizás = maybe, perhaps
tal vez = perhaps
la posibilidad = possibility
la probabilidad = probability
`,
      phrases: `
Dudo que lleguen a tiempo. = I doubt they'll arrive on time.
Es posible que llueva esta tarde. = It might rain this afternoon.
Puede que tengas razón. = You might be right.
Quizás vaya a la fiesta. = Perhaps I'll go to the party.
Es imposible que lo sepa. = There's no way he knows.
A lo mejor voy mañana. = Maybe I'll go tomorrow.
`,
      drills: `
Dudo que ___ a tiempo. (llegar, ellos) => lleguen | llegan | llegarán | llegar # I doubt they'll arrive on time.
Es posible que ___ mañana. (nevar) => nieve | nieva | nevar | nevará # It might snow tomorrow.
Puede que ___ razón. (tener, tú) => tengas | tienes | tener | tengo # You might be right.
A lo mejor ___ al cine. (ir, nosotros) => vamos | vayamos | ir | fuéramos # Maybe we'll go to the cinema.
Es imposible que ___ tan tarde. (ser) => sea | es | será | ser # It can't be that late.
`,
    },
    {
      t: 'Es importante que…',
      k: 'grammar',
      goal: 'Use impersonal expressions with the subjunctive or the infinitive',
      body: `
## Impersonal expressions + que + subjunctive
| | |
|---|---|
| {Es importante que…} | It's important that… |
| {Es necesario que…} | It's necessary that… |
| {Es mejor que…} | It's better if… |
| {Es normal que…} | It's normal that… |
| {Es raro que…} | It's strange that… |
| {Es una pena que…} | It's a shame that… |
| {Hace falta que…} | It's necessary that… |

> Es importante que descanses. = It's important that you rest.
> Es mejor que vayamos en tren. = It's better if we go by train.
> Es normal que estés nervioso. = It's normal for you to be nervous.

## No specific person? → infinitive
> Es importante descansar. = It's important to rest.
> Es mejor ir en tren. = It's better to go by train.

## Facts → indicative
{Es verdad que…}, {Es cierto que…}, {Es evidente que…}, {Está claro que…} state facts, so they take the indicative: {Es cierto que es caro.}

!de: German: "Es ist wichtig, dass du dich ausruhst" — Spanish: {Es importante que descanses} (subjunctive!).
`,
      words: `
es importante que = it's important that
es necesario que = it's necessary that
es mejor que = it's better that
es normal que = it's normal that
es raro que = it's strange that
es una pena que = it's a shame that
hace falta = it's necessary; is needed
es cierto que = it's true that
evidente = obvious
raro, rara = strange; rare
`,
      phrases: `
Es importante que descanses. = It's important that you rest.
Es mejor que vayamos en tren. = It's better if we go by train.
Es normal que estés nervioso. = It's normal for you to be nervous.
Es una pena que no puedas venir. = It's a shame you can't come.
Hace falta que alguien me ayude. = I need someone to help me.
Es cierto que el español es fácil de pronunciar. = It's true that Spanish is easy to pronounce.
`,
      drills: `
Es importante que ___ mucha agua. (beber, tú) => bebas | bebes | beber | bebe # It's important that you drink a lot of water.
Es mejor que ___ un taxi. (coger, nosotros) => cojamos | cogemos | cogamos | coger # It's better if we take a taxi.
Es importante ___ bien. (no specific person: dormir) => dormir | que duerma | duerma | dormimos # It's important to sleep well.
Es una pena que no ___ venir. (poder, ellos) => puedan | pueden | poder | podrán # It's a shame they can't come.
Es verdad que ___ mucho calor en Sevilla. (hacer) => hace | haga | hacer | hiciera # It's true that it's very hot in Seville.
Es raro que Ana no ___. (contestar) => conteste | contesta | contestar | contestará # It's strange that Ana isn't answering.
`,
    },
    {
      t: 'Negative commands',
      k: 'grammar',
      goal: 'Tell people what not to do',
      body: `
## no + subjunctive
All negative commands use the **present subjunctive**:
| | tú | usted | nosotros | vosotros | ustedes |
|---|---|---|---|---|---|
| {hablar} | {no hables} | {no hable} | {no hablemos} | {no habléis} | {no hablen} |
| {comer} | {no comas} | {no coma} | {no comamos} | {no comáis} | {no coman} |
| {ir} | {no vayas} | {no vaya} | {no vayamos} | {no vayáis} | {no vayan} |
| {hacer} | {no hagas} | {no haga} | {no hagamos} | {no hagáis} | {no hagan} |
| {decir} | {no digas} | {no diga} | {no digamos} | {no digáis} | {no digan} |

> ¡No toques eso! = Don't touch that!
> No llegues tarde. = Don't be late.
> No os preocupéis. = Don't worry. (vosotros)
> No hagan ruido, por favor. = Please don't make any noise. (ustedes)

!tip: Compare: {¡Habla!} / {¡No hables!}, {¡Ven!} / {¡No vengas!}, {¡Id!} / {¡No vayáis!}
!de: German just adds "nicht" to the imperative; Spanish switches to the subjunctive form.
`,
      words: `
¡no hables! = don't talk!
¡no toques! = don't touch!
¡no vayas! = don't go!
¡no hagas eso! = don't do that!
¡no digas nada! = don't say anything!
¡no llegues tarde! = don't be late!
no te preocupes = don't worry
no os preocupéis = don't worry (you all)
¡no corras! = don't run!
el peligro = danger
peligroso, peligrosa = dangerous
`,
      phrases: `
¡No toques eso, que quema! = Don't touch that, it's hot!
No llegues tarde mañana. = Don't be late tomorrow.
No te preocupes, todo saldrá bien. = Don't worry, everything will be fine.
No vayáis solos por la noche. = Don't go out alone at night.
No hagan fotos, por favor. = Please don't take photos.
¡No digas eso! = Don't say that!
`,
      drills: `
¡No ___ eso! (tocar, tú) => toques | tocas | toca | toque # Don't touch that!
No ___ tarde. (llegar, tú) => llegues | llegas | llega | legues # Don't be late.
No ___ ruido, por favor. (hacer, ustedes) => hagan | hacen | haced | hagáis # Please don't make any noise.
No os ___. (preocuparse) => preocupéis | preocupáis | preocupad | preocupen # Don't worry. (vosotros)
¡No ___ nada a nadie! (decir, tú) => digas | dices | di | diga # Don't tell anyone anything!
No ___ por esa calle, es peligrosa. (ir, tú) => vayas | vas | ve | vaya # Don't go down that street, it's dangerous.
`,
    },
    {
      t: 'Commands with pronouns',
      k: 'grammar',
      goal: 'Place pronouns correctly in positive and negative commands',
      body: `
## Affirmative: pronouns attached
> Dímelo. = Tell me.
> Cómpralo. = Buy it.
> Siéntese. = Sit down. (usted)
> Dáselo a Ana. = Give it to Ana.
> Levantaos. = Get up. (vosotros)

## Negative: pronouns before the verb
> No me lo digas. = Don't tell me.
> No lo compres. = Don't buy it.
> No se siente ahí. = Don't sit there. (usted)
> No se lo des. = Don't give it to him.
> No os levantéis. = Don't get up. (vosotros)

| affirmative | negative |
|---|---|
| {¡Hazlo!} | {¡No lo hagas!} |
| {¡Cómetelo!} | {¡No te lo comas!} |
| {¡Díselo!} | {¡No se lo digas!} |
| {¡Vete!} | {¡No te vayas!} |

!tip: Attaching pronouns adds a written accent when the stress would move: {compra} → {cómpralo}, {di} → {dímelo}, {da} → {dáselo}.
!de: German keeps the pronoun after the verb both times ("Sag es mir! / Sag es mir nicht!"); Spanish moves it to the front in the negative.
`,
      words: `
dímelo = tell me (it)
cómpralo = buy it
dáselo = give it to him / her
hazlo = do it
vete = go away
no te vayas = don't go
no me lo digas = don't tell me
no lo hagas = don't do it
cuéntamelo = tell me about it
pruébalo = try it
`,
      phrases: `
¡Dímelo ya! = Tell me now!
Es muy caro, no lo compres. = It's very expensive, don't buy it.
Pruébalo, está buenísimo. = Try it, it's delicious.
No te vayas todavía. = Don't go yet.
Es un secreto: no se lo digas a nadie. = It's a secret: don't tell anyone.
¿Qué pasó? Cuéntamelo todo. = What happened? Tell me everything.
`,
      drills: `
El libro… ¡___! (buy it) => cómpralo | cómprolo | compralo | lo compra # The book… buy it!
El libro… no ___ compres. => lo | le | la | se # The book… don't buy it.
¡No te ___ todavía! (irse, tú) => vayas | vas | vete | vaya # Don't go yet!
El secreto… no se ___ digas a nadie. => lo | le | la | te # The secret… don't tell anyone.
¡___ todo! (contar, tú + me + lo) => Cuéntamelo | Cuentamelo | Cuéntalome | Me lo cuenta # Tell me everything!
`,
    },
  ],
  story: {
    title: '¿Barcelona o Madrid?',
    text: `
Anna y Laura toman un café en la Plaza Mayor. Anna le cuenta que Omar quiere que se muden juntos a Barcelona.
= Anna and Laura are having coffee in the Plaza Mayor. Anna tells her that Omar wants them to move to Barcelona together.

—¡Qué noticia! Me alegra mucho que estéis tan bien juntos —dice Laura—. Pero me da pena que te vayas de Madrid.
= "What news! I'm so glad you're so happy together," says Laura. "But I'm sad you're leaving Madrid."

—Todavía no es seguro. No creo que encuentre trabajo tan rápido allí, y es posible que los pisos sean carísimos.
= "It's not certain yet. I don't think I'll find a job that quickly there, and the flats may be really expensive."

—Mira, yo creo que tienes muchas oportunidades. Hablas alemán, inglés y ahora español. Es normal que tengas miedo, pero no pienses solo en los problemas.
= "Look, I think you have lots of opportunities. You speak German, English and now Spanish. It's normal to be scared, but don't think only about the problems."

—Tienes razón. Además, en Barcelona hay muchas empresas alemanas. Quizás alguna necesite a alguien como yo.
= "You're right. Besides, there are lots of German companies in Barcelona. Perhaps one of them needs someone like me."

—¡Claro que sí! Mi consejo: no lo decidas hoy. Habla con Omar, haz una lista y no te preocupes tanto.
= "Of course! My advice: don't decide today. Talk to Omar, make a list and don't worry so much."

—Gracias, Laura. Eres la mejor. Pero prométeme una cosa: que vendrás a visitarnos. —¡Por supuesto! Es imposible que no vaya: ¡me encanta Barcelona!
= "Thanks, Laura. You're the best. But promise me one thing: that you'll come and visit us." "Of course! There's no way I won't come: I love Barcelona!"
`,
    questions: `
¿Qué quiere Omar? => Que se muden a Barcelona | Que vuelvan a Marruecos | Que se queden en Madrid # What does Omar want?
¿Qué le da pena a Laura? => Que Anna se vaya de Madrid | Que Anna esté con Omar | Que Anna hable alemán # What makes Laura sad?
¿Qué le preocupa a Anna? => Encontrar trabajo y piso | Aprender catalán | Dejar a Omar # What worries Anna?
¿Qué le aconseja Laura? => No decidirlo hoy | Decidirlo hoy | No hablar con Omar # What does Laura advise?
`,
  },
}

export default w
