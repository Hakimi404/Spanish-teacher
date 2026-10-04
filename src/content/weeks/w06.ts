import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 6,
  title: 'Food & likes',
  es: '¡Me encanta!',
  cando: [
    'I can name common foods and drinks',
    'I can say what I like, love and dislike with gustar and encantar',
    'I can order in a café or bar and ask for the bill',
    'I can use querer and preferir',
    'I can count to a million and talk about prices',
  ],
  lessons: [
    {
      t: 'Food — la comida',
      k: 'vocab',
      goal: 'Name basic foods and some Spanish classics',
      body: `
## Basic food
| | |
|---|---|
| {el pan} | bread |
| {el arroz} | rice |
| {la carne} | meat |
| {el pollo} | chicken |
| {el pescado} | fish (food) |
| {los huevos} | eggs |
| {el queso} | cheese |
| {la fruta} | fruit |
| {la verdura} | vegetables |
| {la ensalada} | salad |
| {las patatas} | potatoes (Spain) |
| {el tomate} | tomato |

!tip: {el pescado} is fish on your plate; a live fish is {el pez}.

## Spanish classics
{la tortilla de patatas} (potato omelette), {la paella} (rice dish from Valencia), {el gazpacho} (cold tomato soup), {las tapas} (small dishes shared in bars), {el jamón} (cured ham), {los churros} (fried dough, eaten with hot chocolate).

!ar: Al-Andalus left many Arabic food words: {el arroz} (الرز), {el azúcar} (السكر), {el aceite} (الزيت), {la naranja} (نارنج), {la berenjena} (باذنجان), {la albóndiga} (البندقة → meatball).
!de: {tomar} works like German "nehmen" for food and drink: {Tomo un café} = Ich nehme einen Kaffee.

> ¿Comes pescado? = Do you eat fish?
> De postre, fruta. = For dessert, fruit.
`,
      words: `
la comida = food; lunch
el pan = bread
el arroz = rice
el pollo = chicken
el pescado = fish (food)
los huevos = eggs
el queso = cheese
la fruta = fruit
la verdura = vegetables
la ensalada = salad
las patatas = potatoes (Spain)
el tomate = tomato
la tortilla = Spanish omelette
el jamón = cured ham
`,
      phrases: `
¿Comes pescado? = Do you eat fish?
Para comer hay pollo con patatas. = For lunch there's chicken and potatoes.
Una tortilla de patatas, por favor. = A potato omelette, please.
De postre, fruta. = For dessert, fruit.
Compro pan todos los días. = I buy bread every day.
No como jamón, gracias. = I don't eat ham, thank you.
`,
      drills: `
Para desayunar tomo café con ___. => pan | pescado | arroz | ensalada # For breakfast I have coffee with bread.
La tortilla española lleva huevos y ___. => patatas | pollo | queso | pescado # Spanish omelette has eggs and potatoes.
El ___ es muy típico en Valencia: la paella. => arroz | pan | queso | jamón # Rice is very typical in Valencia: paella.
No como carne, pero sí como ___. (fish) => pescado | pez | pollo | jamón # I don't eat meat, but I do eat fish.
De postre quiero ___. => fruta | ensalada | pollo | arroz # For dessert I want fruit.
`,
    },
    {
      t: 'Gustar — I like it',
      k: 'grammar',
      goal: 'Say what you like, love and dislike',
      body: `
## How gustar works
**Gustar** really means "to please". The thing you like is the subject:
> Me gusta el café. = I like coffee. (literally: coffee pleases me)
> Me gustan las patatas. = I like potatoes. (potatoes please me)

- One thing, or a verb → **gusta**: {Me gusta el té.} {Me gusta bailar.}
- Several things → **gustan**: {Me gustan los perros.}

| | |
|---|---|
| {me gusta} | I like |
| {te gusta} | you like |
| {le gusta} | he / she likes, you (usted) like |
| {nos gusta} | we like |
| {os gusta} | you (all) like |
| {les gusta} | they / you (ustedes) like |

!de: Exactly like German "gefallen": "Mir gefällt der Kaffee" = {Me gusta el café}; "Mir gefallen die Hunde" = {Me gustan los perros}.
!ar: Just like يعجبني: the liked thing is the subject — يعجبني الفيلم = {Me gusta la película}.

## Encantar & disliking
> Me encanta la música. = I love music.
> No me gusta nada el café. = I don't like coffee at all.
> ¿Te gusta el fútbol? = Do you like football?

!warn: {encantar} is already strong — don't add {mucho}. Say {Me encanta}, but {Me gusta mucho}.
`,
      words: `
gustar = to like (to please)
me gusta = I like (one thing)
me gustan = I like (several things)
te gusta = you like
encantar = to love (things)
me encanta = I love
no me gusta nada = I don't like it at all
el té = tea
el fútbol = football
el chocolate = chocolate
el deporte = sport
la película = film
`,
      phrases: `
Me gusta mucho el chocolate. = I like chocolate a lot.
¿Te gustan los perros? = Do you like dogs?
Me encanta bailar. = I love dancing.
No me gusta nada el fútbol. = I don't like football at all.
A mi madre le gusta el té. = My mother likes tea.
Nos encantan las películas españolas. = We love Spanish films.
`,
      drills: `
Me ___ el café. => gusta | gustan | gusto | gustas # I like coffee.
Me ___ los perros. => gustan | gusta | gusto | gustamos # I like dogs.
¿Te ___ bailar? => gusta | gustan | gustas | gusto # Do you like dancing?
A Pedro ___ gusta el fútbol. => le | les | me | te # Pedro likes football.
___ encanta la música. (nosotros) => Nos | Os | Les | Me # We love music.
No me gusta ___ el pescado. (at all) => nada | algo | ningún | nadie # I don't like fish at all.
`,
    },
    {
      t: 'At the café — ordering',
      k: 'talk',
      goal: 'Order drinks and food in a bar and pay the bill',
      body: `
## Ordering
> ¿Qué le pongo? = What can I get you? (waiter, Spain)
> Un café con leche, por favor. = A white coffee, please.
> Para mí, un zumo de naranja. = For me, an orange juice.
> ¿Me pone una caña? = Could I have a small beer? (Spain)
> ¿Tienen tortilla? = Do you have Spanish omelette?
> ¿Me trae la cuenta, por favor? = Could you bring me the bill, please?
> ¿Cuánto es? = How much is it?

!tip: {¿Me pone…?} (literally "will you put me…?") is the most typical way to order in Spain — friendly and polite.
!es: In Spanish bars you usually pay at the end. Coffee culture: {un café solo} (espresso), {un cortado} (espresso with a dash of milk), {un café con leche} (half coffee, half milk). Tips are small: round up or leave a few coins.
!ar: Alcohol-free options: {un zumo}, {un refresco} (soft drink), {agua con gas / sin gas}, {una cerveza sin alcohol}.

## Drinks — las bebidas
{el café}, {el té}, {el agua}, {el zumo} (juice), {la leche}, {el refresco} (soft drink), {la cerveza} (beer), {el vino}, {la caña} (small draught beer).
`,
      words: `
la bebida = drink
el zumo = juice (Spain)
el café con leche = white coffee
el café solo = black coffee, espresso
el refresco = soft drink
la cerveza = beer
la cuenta = bill
¿me pone…? = could I have…? (Spain)
para mí = for me
¿cuánto es? = how much is it?
la tapa = tapa (small dish)
con gas = sparkling
sin gas = still
`,
      phrases: `
Un café con leche, por favor. = A white coffee, please.
Para mí, un zumo de naranja. = For me, an orange juice.
¿Me pone un agua sin gas? = Could I have a still water?
¿Tienen tapas? = Do you have tapas?
La cuenta, por favor. = The bill, please.
¿Cuánto es? — Son seis euros. = How much is it? — It's six euros.
`,
      drills: `
Un café ___ leche, por favor. => con | sin | de | y # A white coffee, please.
¿Me ___ un zumo, por favor? => pone | pones | pongo | pon # Could I have a juice, please?
___ mí, una cerveza sin alcohol. => Para | Por | A | De # For me, an alcohol-free beer.
¿Me trae la ___, por favor? => cuenta | carta | cuento | caña # Could you bring me the bill, please?
¿Cuánto ___? — Son cinco euros. => es | está | hay | tiene # How much is it? — It's five euros.
Un agua ___ gas, por favor. (still) => sin | con | de | por # A still water, please.
`,
    },
    {
      t: 'Querer & preferir (e → ie)',
      k: 'grammar',
      goal: 'Say what you want and prefer with stem-changing verbs',
      body: `
## Stem-changing verbs: e → ie
Some verbs change their stem vowel when it's stressed. **querer** and **preferir** change **e → ie** — except with nosotros and vosotros:
| | querer (to want) | preferir (to prefer) |
|---|---|---|
| {yo} | {qu[ie]ro} | {pref[ie]ro} |
| {tú} | {qu[ie]res} | {pref[ie]res} |
| {él / ella / usted} | {qu[ie]re} | {pref[ie]re} |
| {nosotros} | {queremos} | {preferimos} |
| {vosotros} | {queréis} | {preferís} |
| {ellos / ellas / ustedes} | {qu[ie]ren} | {pref[ie]ren} |

!tip: Picture a **boot**: the four forms inside the boot (yo, tú, él, ellos) change; nosotros and vosotros stay outside.

## Querer + noun or infinitive
> Quiero un café. = I want a coffee.
> ¿Quieres venir? = Do you want to come?
> Prefiero el té. = I prefer tea.
> ¿Qué prefieres, carne o pescado? = What do you prefer, meat or fish?

!warn: {Te quiero} = I love you (to a person). To order politely, {Quiero…, por favor} is fine for now; in week 17 you'll learn the softer {quería} and {me gustaría}.
!de: {querer} + infinitive works like "wollen": {Quiero aprender español} = Ich will Spanisch lernen.
`,
      words: `
querer = to want; to love (a person)
quiero = I want
quieres = you want
preferir = to prefer
prefiero = I prefer
o = or
te quiero = I love you
el postre = dessert
la sopa = soup
el helado = ice cream
la naranja = orange
`,
      phrases: `
Quiero un helado de chocolate. = I want a chocolate ice cream.
¿Quieres ir al cine? = Do you want to go to the cinema?
Prefiero el pescado. = I prefer fish.
¿Qué prefieres, té o café? = What do you prefer, tea or coffee?
Mis hijos quieren pizza. = My children want pizza.
Te quiero mucho. = I love you very much.
`,
      drills: `
Yo ___ un café. (querer) => quiero | quero | quieres | queremos # I want a coffee.
¿Tú ___ té o café? (preferir) => prefieres | preferes | prefiero | preferís # Do you prefer tea or coffee?
Nosotros ___ aprender español. (querer) => queremos | quieremos | quieren | queréis # We want to learn Spanish.
Mi hermana ___ el pescado. (preferir) => prefiere | prefere | prefieren | preferimos # My sister prefers fish.
Ellos ___ una mesa para cuatro. (querer) => quieren | queren | quiere | queremos # They want a table for four.
¿Vosotros ___ postre? (querer) => queréis | quieréis | quieren | queremos # Do you (all) want dessert?
`,
    },
    {
      t: 'Big numbers & prices',
      k: 'vocab',
      goal: 'Count to a million, say years and ask how much things cost',
      body: `
## Hundreds
| | | |
|---|---|---|
| 100 {cien} | 200 {doscientos} | 300 {trescientos} |
| 400 {cuatrocientos} | 500 {quinientos} | 600 {seiscientos} |
| 700 {setecientos} | 800 {ochocientos} | 900 {novecientos} |

- **100** on its own is {cien}; 101–199 use {ciento}: {ciento uno}, {ciento cincuenta}.
- Hundreds agree with feminine nouns: {doscientas personas}.
- Watch the irregular ones: {quinientos} (500), {setecientos} (700), {novecientos} (900).

## Thousands & millions
{mil} (1 000), {dos mil} (2 000), {diez mil} (10 000), {cien mil} (100 000), {un millón} (1 000 000), {dos millones}.
- {mil} never takes "un" and doesn't change: {tres mil euros}.
- Years: 1998 = {mil novecientos noventa y ocho}, 2026 = {dos mil veintiséis}.

## Prices
> ¿Cuánto cuesta? = How much does it cost?
> ¿Cuánto cuestan? = How much do they cost?
> Cuesta tres euros con cincuenta. = It costs €3.50.
> Son doce euros. = That's twelve euros.

!es: Spain writes decimals with a comma and thousands with a dot: {3,50 €}, {1.500 €}. Prices are read {tres euros con cincuenta} or just {tres cincuenta}.
!de: Same as German: comma for decimals ({3,50}), dot for thousands ({1.500}).
!ar: Like ألف and مليون: {mil} = 1000 (never "un mil"), {un millón} = مليون.
`,
      words: `
doscientos = two hundred
trescientos = three hundred
quinientos = five hundred
setecientos = seven hundred
novecientos = nine hundred
mil = one thousand
un millón = one million
el euro = euro
el precio = price
¿cuánto cuesta? = how much does it cost?
barato, barata = cheap
`,
      phrases: `
¿Cuánto cuesta este libro? = How much does this book cost?
Cuesta quince euros. = It costs fifteen euros.
Las gafas cuestan doscientos euros. = The glasses cost two hundred euros.
¡Qué caro! = How expensive!
Es muy barato. = It's very cheap.
El piso cuesta doscientos mil euros. = The flat costs two hundred thousand euros.
`,
      drills: `
500 = ___ => quinientos | cincocientos | quinientas | cinco cientos # five hundred
100 euros = ___ euros => cien | ciento | cientos | un cien # one hundred euros
700 = ___ => setecientos | sietecientos | setentos | siete cientos # seven hundred
¿Cuánto ___ los zapatos? => cuestan | cuesta | costan | cuestas # How much do the shoes cost?
2.000 = dos ___ => mil | miles | millones | cientos # two thousand
1.000.000 = un ___ => millón | mil | millones | millar # one million
`,
    },
    {
      t: 'Me too! También & tampoco',
      k: 'talk',
      goal: 'Say who likes what and agree or disagree',
      body: `
## Making it clear who likes it
Add **a + person** to say who likes something:
| | |
|---|---|
| {A mí me gusta} | I like |
| {A ti te gusta} | you like |
| {A él / A ella / A usted le gusta} | he / she / you like(s) |
| {A nosotros nos gusta} | we like |
| {A vosotros os gusta} | you all like |
| {A ellos / A ellas / A ustedes les gusta} | they / you all like |

> A mi hermano le gusta el fútbol, pero a mí no. = My brother likes football, but I don't.
> ¿A vosotros os gusta la paella? = Do you (all) like paella?

## Agreeing and disagreeing
| They say… | You agree | You disagree |
|---|---|---|
| {Me gusta el té.} | {A mí también.} | {A mí no.} |
| {No me gusta el té.} | {A mí tampoco.} | {A mí sí.} |

!tip: With normal verbs it's {yo también} / {yo tampoco}: {Hablo inglés.} — {Yo también.}
!de: {también} = auch, {tampoco} = auch nicht: {A mí tampoco} = Mir auch nicht.
!ar: {también} ≈ أيضًا، {tampoco} ≈ ولا أنا: {A mí tampoco} ≈ ولا أنا كمان.

## Verbs like gustar
{encantar} (to love), {interesar} (to interest), {doler} (to hurt): {Me interesa la historia.} (I'm interested in history.)
`,
      words: `
también = also, too
tampoco = neither, not either
a mí también = me too
a mí tampoco = me neither
a mí sí = I do
a mí no = I don't
interesar = to interest
la historia = history; story
el arte = art
el cine = cinema
la playa = beach
la montaña = mountain(s)
`,
      phrases: `
Me encanta la playa. — ¡A mí también! = I love the beach. — Me too!
No me gusta el frío. — A mí tampoco. = I don't like the cold. — Me neither.
A mi novia le interesa mucho el arte. = My girlfriend is very interested in art.
¿A vosotros os gusta la montaña? = Do you (all) like the mountains?
A ellos les gusta el cine, pero a mí no. = They like the cinema, but I don't.
Hablo un poco de francés. — Yo también. = I speak a little French. — Me too.
`,
      drills: `
Me gusta el cine. — A mí ___. (me too) => también | tampoco | sí | no # I like the cinema. — Me too.
No me gusta el café. — A mí ___. (me neither) => tampoco | también | sí | nada # I don't like coffee. — Me neither.
A mis padres ___ gusta viajar. => les | le | los | se # My parents like travelling.
¿A ti ___ gusta el arte? => te | ti | tu | le # Do you like art?
Me gusta la playa. — A mí ___. Prefiero la montaña. => no | sí | también | tampoco # I like the beach. — I don't. I prefer the mountains.
A nosotros ___ interesa la historia. => nos | os | les | me # We're interested in history.
`,
    },
  ],
  story: {
    title: 'En el bar de tapas',
    text: `
Es viernes por la tarde. Omar y Anna están en un bar de tapas en el centro.
= It's Friday evening. Omar and Anna are in a tapas bar in the centre.

El camarero llega a la mesa: —¡Hola, chicos! ¿Qué os pongo?
= The waiter comes to the table: "Hi, guys! What can I get you?"

—Para mí, una caña, por favor —dice Anna—. Me encanta la cerveza española.
= "For me, a small beer, please," says Anna. "I love Spanish beer."

—Yo prefiero un zumo de naranja. No bebo alcohol —dice Omar—. ¿Tienen tortilla de patatas?
= "I'd prefer an orange juice. I don't drink alcohol," says Omar. "Do you have potato omelette?"

—Sí, claro. Y también tenemos croquetas, patatas bravas y calamares.
= "Yes, of course. And we also have croquettes, patatas bravas and squid."

—¡Me encantan las patatas bravas! —dice Anna. —A mí también. Una ración de bravas y una tortilla, por favor.
= "I love patatas bravas!" says Anna. "Me too. A portion of bravas and a tortilla, please."

Después, Omar pide la cuenta. —¿Cuánto es? —Son catorce euros con cincuenta. —Aquí tiene. ¡Gracias!
= Afterwards, Omar asks for the bill. "How much is it?" "It's fourteen euros fifty." "Here you are. Thanks!"
`,
    questions: `
¿Dónde están Omar y Anna? => En un bar de tapas | En casa | En un supermercado # Where are Omar and Anna?
¿Qué bebe Omar? => Un zumo de naranja | Una caña | Un vino # What does Omar drink?
¿Qué le encanta a Anna? => Las patatas bravas | Los calamares | El zumo # What does Anna love?
¿Cuánto es la cuenta? => 14,50 € | 4,50 € | 40,50 € # How much is the bill?
`,
  },
}

export default w
