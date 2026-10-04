import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 10,
  title: 'Pronouns & the market',
  es: 'En el mercado',
  cando: [
    'I can replace objects with lo, la, los and las',
    'I can say to whom with le and les',
    'I can combine two pronouns: te lo, se lo…',
    'I can buy food at the market using quantities',
    'I can use possessive pronouns: el mío, la tuya…',
    'I can use algo, nada, alguien, nadie and double negatives',
  ],
  lessons: [
    {
      t: 'Direct objects: lo, la, los, las',
      k: 'grammar',
      goal: 'Replace things and people with direct object pronouns',
      body: `
## Who or what?
Direct object pronouns replace the thing or person that receives the action:
| | |
|---|---|
| {me} | me |
| {te} | you |
| {lo} | him, it (masc.), you (usted, masc.) |
| {la} | her, it (fem.), you (usted, fem.) |
| {nos} | us |
| {os} | you all |
| {los} | them (masc. / mixed) |
| {las} | them (fem.) |

> ¿Tienes el pasaporte? — Sí, lo tengo. = Have you got the passport? — Yes, I've got it.
> ¿Compras la fruta? — Sí, la compro. = Are you buying the fruit? — Yes, I'm buying it.
> ¿Ves a tus padres? — Los veo los domingos. = Do you see your parents? — I see them on Sundays.
> Te quiero. = I love you.

## Where does it go?
- **Before** a conjugated verb: {Lo compro.} {No la conozco.}
- **Attached** to an infinitive or gerund — or before the whole group: {Voy a comprarlo} = {Lo voy a comprar}; {Estoy leyéndolo} = {Lo estoy leyendo}.

!tip: Attaching to a gerund needs an accent to keep the stress: {leyendo} → {leyéndolo}.
!es: In much of Spain people say {le} instead of {lo} for a man: {Le veo} = I see him (*leísmo*). Both are accepted for male people.
!de: The pronoun goes *before* the verb: "Ich kaufe es" = {Lo compro}.
!ar: Arabic attaches the object to the verb (أشتريه، أراها); Spanish puts it in front: {Lo compro}, {La veo}.
`,
      words: `
lo = him, it (masc.)
la = her, it (fem.)
los = them (masc.)
las = them (fem.)
me = me
te = you
nos = us
el pasaporte = passport
el billete = ticket
la maleta = suitcase
las gafas de sol = sunglasses
olvidar = to forget
`,
      phrases: `
¿Dónde está mi móvil? No lo encuentro. = Where's my mobile? I can't find it.
¿La conoces? — Sí, la conozco del trabajo. = Do you know her? — Yes, I know her from work.
Los billetes los tengo yo. = I've got the tickets.
Te llamo esta noche. = I'll call you tonight.
¿Me ayudas? = Will you help me?
Voy a comprarlas mañana. = I'm going to buy them tomorrow.
`,
      drills: `
¿Tienes las llaves? — Sí, ___ tengo. => las | los | la | les # Have you got the keys? — Yes, I've got them.
¿Compras el pan? — Sí, ___ compro. => lo | la | le | los # Are you buying the bread? — Yes, I'm buying it.
¿Ves a María? — No, no ___ veo. => la | lo | le | las # Do you see María? — No, I don't see her.
¿Conoces a mis hermanos? — Sí, ___ conozco. => los | las | les | lo # Do you know my brothers? — Yes, I know them.
La maleta… voy a hacer___ ahora. => la | lo | le | las # The suitcase… I'm going to pack it now.
¿___ quieres? — Sí, te quiero mucho. => Me | Te | Lo | Nos # Do you love me? — Yes, I love you very much.
`,
    },
    {
      t: 'Indirect objects: le, les',
      k: 'grammar',
      goal: 'Say to whom or for whom you do something',
      body: `
## To whom?
Indirect objects say **to whom** or **for whom** something is done:
| | |
|---|---|
| {me} | to me |
| {te} | to you |
| {le} | to him, to her, to you (usted) |
| {nos} | to us |
| {os} | to you all |
| {les} | to them, to you (ustedes) |

> Le doy el libro a Ana. = I give the book to Ana.
> ¿Me pasas la sal? = Can you pass me the salt?
> Les escribo a mis padres. = I write to my parents.
> Te compro un helado. = I'll buy you an ice cream.

!tip: Spanish usually keeps **both** the pronoun and the person: {Le doy el libro a Ana.} Without {le} it sounds incomplete!
!tip: You already know these pronouns from gustar: {A Ana le gusta…}

## Verbs that often take an indirect object
{dar} (give), {decir} (say, tell), {escribir} (write), {enviar} / {mandar} (send), {regalar} (give as a present), {prestar} (lend), {explicar} (explain), {preguntar} (ask), {contestar} (answer).

!de: {le} / {les} ≈ ihm / ihr / ihnen — the dative: {Le doy el libro} = Ich gebe ihm das Buch.
!ar: {le} ≈ لَهُ / لَها: {Le escribo} ≈ أكتب له.
`,
      words: `
le = (to) him, (to) her, (to) you (formal)
les = (to) them, (to) you all (formal)
dar = to give
decir = to say, to tell
regalar = to give (as a present)
prestar = to lend
explicar = to explain
mandar = to send
el regalo = present, gift
la sal = salt
el mensaje = message
contestar = to answer
`,
      phrases: `
Le doy el regalo a mi madre. = I give the present to my mother.
¿Me prestas tu bolígrafo? = Will you lend me your pen?
Les mando un mensaje a mis amigos. = I send a message to my friends.
¿Qué le regalas a tu novia? = What are you giving your girlfriend?
El profesor nos explica la gramática. = The teacher explains the grammar to us.
¿Me pasas la sal, por favor? = Could you pass me the salt, please?
`,
      drills: `
___ doy el libro a Pedro. => Le | Lo | Les | La # I give the book to Pedro.
___ escribo a mis padres cada semana. => Les | Le | Los | Las # I write to my parents every week.
¿___ prestas tu coche? (to me) => Me | Te | Le | Mi # Will you lend me your car?
La profesora ___ explica la lección. (to us) => nos | os | les | nuestro # The teacher explains the lesson to us.
¿Qué ___ vas a regalar a tu hermano? => le | lo | les | la # What are you going to give your brother?
`,
    },
    {
      t: 'Two pronouns: te lo, se lo',
      k: 'grammar',
      goal: 'Combine indirect and direct pronouns correctly',
      body: `
## Indirect + direct
With two pronouns, the **indirect** (person) comes first, then the **direct** (thing):
> ¿Me das el libro? — Sí, te lo doy. = Will you give me the book? — Yes, I'll give it to you.
> Nos la explica. = He explains it to us.

## le / les + lo / la → se
**le** and **les** become **se** before {lo}, {la}, {los}, {las}:
> ¿Le das el regalo a Ana? — Sí, se lo doy. = Are you giving Ana the present? — Yes, I'm giving it to her.
> ¿Les mandas las fotos? — Sí, se las mando. = Are you sending them the photos? — Yes, I'm sending them.

!warn: Never "le lo" — it's always {se lo}.

## With infinitives and commands
Both pronouns attach to the end, with an accent: {Voy a dártelo.} (I'm going to give it to you.) {¡Dímelo!} (Tell me!)

!de: The opposite order to German: "Ich gebe es dir" = {Te lo doy} (to-you it I-give).
!ar: Like أعطيتُكَ إيّاه — the person first, then the thing: {te lo doy}.
`,
      words: `
me lo = it to me
te lo = it to you
se lo = it to him / her / them
nos lo = it to us
dímelo = tell me (it)
el secreto = secret
la noticia = piece of news
la contraseña = password
la receta = recipe; prescription
devolver = to give back
enseñar = to show; to teach
`,
      phrases: `
¿Me das tu número? — Sí, te lo doy. = Will you give me your number? — Yes, I'll give it to you.
¿Le cuentas el secreto a Ana? — No, no se lo cuento. = Are you telling Ana the secret? — No, I'm not telling her.
Te la enseño mañana. = I'll show it to you tomorrow.
¿Me devuelves el libro? — Sí, te lo devuelvo hoy. = Will you give me back the book? — Yes, I'll give it back today.
Mi abuela nos lo explica todo. = My grandmother explains everything to us.
¡Dímelo! = Tell me!
`,
      drills: `
¿Me das el libro? — Sí, te ___ doy. => lo | la | le | se # Will you give me the book? — Yes, I'll give it to you.
¿Le das la carta a Juan? — Sí, ___ la doy. => se | le | lo | te # Are you giving the letter to Juan? — Yes, I'm giving it to him.
¿Nos explicas el problema? — Sí, ___ lo explico. => os | nos | les | se # Will you explain the problem to us? — Yes, I'll explain it to you.
¿Les mandas las fotos? — Sí, se ___ mando. => las | los | les | la # Are you sending them the photos? — Yes, I'm sending them.
Es un secreto, pero quiero ___. => decírtelo | decirtelo | decírlote | telodecir # It's a secret, but I want to tell you.
`,
    },
    {
      t: 'At the market: quantities',
      k: 'talk',
      goal: 'Buy fruit, vegetables and other food with quantities',
      body: `
## Buying food
> ¿Qué le pongo? = What can I get you?
> Póngame un kilo de tomates, por favor. = A kilo of tomatoes, please.
> Medio kilo de fresas. = Half a kilo of strawberries.
> Una docena de huevos. = A dozen eggs.
> Cien gramos de queso. = A hundred grams of cheese.
> ¿Algo más? — No, nada más, gracias. = Anything else? — No, nothing else, thanks.
> ¿Cuánto es todo? = How much is it altogether?

## Quantities & containers
| | |
|---|---|
| {un kilo de} | a kilo of |
| {medio kilo de} | half a kilo of |
| {cien gramos de} | 100 grams of |
| {un litro de} | a litre of |
| {una docena de} | a dozen |
| {una botella de} | a bottle of |
| {un paquete de} | a packet of |
| {una lata de} | a tin / can of |
| {una barra de pan} | a baguette |
| {un trozo de} | a piece of |

## Fruit & veg
{las manzanas} (apples), {los plátanos} (bananas), {las naranjas} (oranges), {las fresas} (strawberries), {las uvas} (grapes), {las cebollas} (onions), {los pimientos} (peppers), {las zanahorias} (carrots), {el ajo} (garlic), {la lechuga} (lettuce).

!es: When you arrive at a market stall, ask {¿Quién es el último?} — "Who's last in the queue?" — and you'll know when it's your turn.
!ar: Arabic gave Spanish {la zanahoria}, {la naranja}, {la aceituna} (الزيتونة) and {el aceite} (الزيت)!
`,
      words: `
el kilo = kilo
medio, media = half
la docena = dozen
el gramo = gram
el litro = litre
la botella = bottle
el paquete = packet
la lata = tin, can
la manzana = apple
el plátano = banana
las fresas = strawberries
la cebolla = onion
el ajo = garlic
¿algo más? = anything else?
`,
      phrases: `
Un kilo de manzanas, por favor. = A kilo of apples, please.
Póngame medio kilo de fresas. = Give me half a kilo of strawberries.
¿Me da una docena de huevos? = Could I have a dozen eggs?
¿Algo más? — No, nada más, gracias. = Anything else? — No, nothing else, thanks.
¿Cuánto es todo? = How much is it altogether?
¿Quién es el último? = Who's last in the queue?
`,
      drills: `
Un ___ de leche, por favor. => litro | kilo | docena | gramo # A litre of milk, please.
Una ___ de huevos. => docena | botella | lata | barra # A dozen eggs.
Medio ___ de tomates. => kilo | litro | botella | docena # Half a kilo of tomatoes.
Una ___ de agua. => botella | barra | docena | kilo # A bottle of water.
¿Algo ___? — No, nada más. => más | menos | mucho | poco # Anything else? — No, nothing else.
Una ___ de pan. => barra | lata | docena | botella # A baguette.
`,
    },
    {
      t: 'Mine, yours: possessive pronouns',
      k: 'grammar',
      goal: 'Say whose things are with el mío, la tuya, los suyos…',
      body: `
## Possessive pronouns
| | masc. | fem. |
|---|---|---|
| mine | {el mío / los míos} | {la mía / las mías} |
| yours (tú) | {el tuyo / los tuyos} | {la tuya / las tuyas} |
| his, hers, yours (usted) | {el suyo / los suyos} | {la suya / las suyas} |
| ours | {el nuestro / los nuestros} | {la nuestra / las nuestras} |
| yours (vosotros) | {el vuestro / los vuestros} | {la vuestra / las vuestras} |
| theirs, yours (ustedes) | {el suyo / los suyos} | {la suya / las suyas} |

> Mi coche es blanco. ¿Y el tuyo? = My car is white. And yours?
> Esta maleta es la mía. = This suitcase is mine.
> ¿Es tuyo este bolígrafo? — Sí, es mío. = Is this pen yours? — Yes, it's mine.

!tip: After **ser** you can drop the article: {Es mío.} {¿Es tuya?}
!tip: They also follow nouns: {un amigo mío} = a friend of mine.
!de: Like German "meiner / meine / meins": {la mía} = meine.
!ar: {Es mío} ≈ هو لي / تبعي.
`,
      words: `
mío, mía = mine
tuyo, tuya = yours (informal)
suyo, suya = his, hers, theirs, yours (formal)
nuestro, nuestra = ours
un amigo mío = a friend of mine
el bolígrafo = pen
el paraguas = umbrella
la mochila = backpack
el asiento = seat
la cartera = wallet
`,
      phrases: `
¿De quién es este paraguas? — Es mío. = Whose umbrella is this? — It's mine.
Mi mochila es azul. ¿Y la tuya? = My backpack is blue. And yours?
Estos asientos son los nuestros. = These seats are ours.
Mi piso es pequeño, pero el suyo es enorme. = My flat is small, but his is huge.
Carlos es un amigo mío. = Carlos is a friend of mine.
¿Es tuya esta cartera? = Is this wallet yours?
`,
      drills: `
Este bolígrafo es ___. (mine) => mío | mía | mi | míos # This pen is mine.
Mi casa es grande. ¿Y la ___? (yours, tú) => tuya | tuyo | tu | tuyas # My house is big. And yours?
Estas maletas son las ___. (ours) => nuestras | nuestros | nuestra | vuestras # These suitcases are ours.
¿Es ___ esta mochila, señora? (yours, usted) => suya | suyo | tuya | su # Is this backpack yours, madam?
Mis zapatos son negros y los ___ son marrones. (yours, vosotros) => vuestros | vuestras | nuestros | suyos # My shoes are black and yours are brown.
`,
    },
    {
      t: 'Something, nothing, someone, no one',
      k: 'grammar',
      goal: 'Use positive and negative words, including double negatives',
      body: `
## Positive & negative words
| positive | negative |
|---|---|
| {algo} — something | {nada} — nothing |
| {alguien} — someone | {nadie} — no one |
| {algún / alguna} — some, any | {ningún / ninguna} — no, not any |
| {siempre} — always | {nunca} — never |
| {también} — also | {tampoco} — neither |

> ¿Quieres algo? — No, no quiero nada. = Do you want something? — No, I don't want anything.
> ¿Hay alguien en casa? — No, no hay nadie. = Is anyone at home? — No, there's no one.
> ¿Tienes algún libro en español? — No, no tengo ninguno. = Do you have any books in Spanish? — No, I don't have any.

## Double negatives are correct!
If the negative word comes **after** the verb, you need **no** before the verb: {No veo nada.} {No viene nadie.} {No voy nunca.}
If it comes first, no {no}: {Nadie viene.} {Nunca voy.}

!tip: {alguno} / {ninguno} shorten before a masculine noun: {algún día}, {ningún problema}. {ninguno} is almost always singular.
!de: German forbids double negatives ("Ich sehe nichts"); Spanish requires them: {No veo nada}.
!ar: Like Arabic, the negation stays on the verb: لا أرى شيئًا ≈ {No veo nada}.
`,
      words: `
algo = something
nada = nothing
alguien = someone
nadie = no one, nobody
algún, alguna = some, any
ningún, ninguna = no, not any
ninguno = none
algún día = some day
ningún problema = no problem
nada más = nothing else
`,
      phrases: `
¿Quieres algo de beber? = Would you like something to drink?
No quiero nada, gracias. = I don't want anything, thanks.
¿Hay alguien aquí? — No, no hay nadie. = Is anyone here? — No, there's no one.
Nunca como carne. = I never eat meat.
No tengo ningún problema. = I don't have any problem.
Nadie habla alemán aquí. = Nobody speaks German here.
`,
      drills: `
No veo ___. => nada | algo | alguien | ningún # I can't see anything.
¿Hay ___ en la puerta? — No, no hay nadie. => alguien | nadie | algo | nada # Is there someone at the door? — No, there's no one.
No tengo ___ libro en español. => ningún | ninguno | algún | ninguna # I don't have any book in Spanish.
___ viene a la fiesta. ¡Qué desastre! => Nadie | Alguien | Nada | Nunca # Nobody is coming to the party. What a disaster!
¿Quieres ___? — No, gracias. => algo | nada | nadie | ningún # Do you want something? — No, thanks.
No voy ___ al gimnasio. => nunca | siempre | algo | nadie # I never go to the gym.
`,
    },
  ],
  story: {
    title: 'El tajín de Omar',
    text: `
Esta noche Omar va a cocinar para sus amigos: va a hacer un tajín marroquí. Por la mañana va al mercado del barrio.
= Tonight Omar is going to cook for his friends: he's going to make a Moroccan tagine. In the morning he goes to the neighbourhood market.

En la frutería pregunta: —¿Quién es el último? —Soy yo —contesta una señora mayor.
= At the greengrocer's he asks: "Who's last in the queue?" "I am," answers an elderly lady.

—¿Qué le pongo? —Un kilo de tomates, medio kilo de cebollas y unas zanahorias, por favor. —¿Algo más? —Sí, una cabeza de ajo y un limón.
= "What can I get you?" "A kilo of tomatoes, half a kilo of onions and some carrots, please." "Anything else?" "Yes, a head of garlic and a lemon."

Después compra pollo y aceitunas, pero no encuentra ras el hanut, su mezcla de especias favorita. No la venden en ninguna tienda.
= Then he buys chicken and olives, but he can't find ras el hanout, his favourite spice mix. No shop sells it.

Por la tarde llama a su madre: —Mamá, no tengo ras el hanut. ¿Qué hago? —Tranquilo, hijo. Usa comino, canela y pimienta. ¡Te va a quedar muy rico!
= In the afternoon he calls his mother: "Mum, I don't have ras el hanout. What do I do?" "Don't worry, son. Use cumin, cinnamon and pepper. It'll turn out really tasty!"

Omar no tiene una cazuela grande, así que Laura le presta la suya. —¿Me la devuelves mañana? —¡Claro, te la devuelvo mañana!
= Omar doesn't have a big pot, so Laura lends him hers. "Will you give it back to me tomorrow?" "Of course, I'll give it back tomorrow!"

A las nueve llegan los amigos. Nadie conoce el tajín, pero a todos les encanta. —¡Está buenísimo, Omar! ¿Nos das la receta? —Os la doy, ¡pero es un secreto de mi madre!
= At nine the friends arrive. Nobody knows tagine, but they all love it. "It's delicious, Omar! Will you give us the recipe?" "I'll give it to you — but it's my mother's secret!"
`,
    questions: `
¿Qué va a cocinar Omar? => Un tajín | Una paella | Una tortilla # What is Omar going to cook?
¿Qué no encuentra Omar? => Ras el hanut | Tomates | Pollo # What can't Omar find?
¿Qué le presta Laura? => Una cazuela | Un cuchillo | Dinero # What does Laura lend him?
¿Qué piden los amigos? => La receta | Más comida | La cuenta # What do the friends ask for?
`,
  },
}

export default w
