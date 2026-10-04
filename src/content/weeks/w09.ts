import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 9,
  title: 'Shopping, body & A1 wrap-up',
  es: 'De compras',
  cando: [
    'I can say what is happening right now with estar + gerund',
    'I can point at things with este, ese and aquel',
    'I can buy clothes: sizes, colours and trying things on',
    'I can use muy, mucho, poco, bastante and demasiado',
    'I can say what hurts with doler',
    'I can write a short text about myself with connectors',
  ],
  lessons: [
    {
      t: 'Estar + gerund: right now',
      k: 'grammar',
      goal: 'Say what is happening right now',
      body: `
## What are you doing right now?
**estar + gerund** = an action in progress at this moment:
> Estoy estudiando. = I'm studying (right now).
> ¿Qué estás haciendo? = What are you doing?
> Está lloviendo. = It's raining.

## Forming the gerund
| verb | gerund |
|---|---|
| {hablar} | {habl[ando]} |
| {comer} | {com[iendo]} |
| {vivir} | {viv[iendo]} |
| {leer} | {le[yendo]} |
| {dormir} | {d[u]rmiendo} |
| {pedir} | {p[i]diendo} |

- -ar → **-ando**; -er / -ir → **-iendo**.
- Vowel + -er / -ir → **-yendo**: {leyendo}, {oyendo}, {trayendo}.
- -ir stem changers: e → i, o → u: {diciendo}, {pidiendo}, {durmiendo}.

!tip: Spanish uses this form less than English. Habits use the simple present: {Trabajo en un banco} (I work in a bank) — but {Estoy trabajando} (I'm working right now).
!de: German has no continuous tense: "Ich lerne gerade" = {Estoy estudiando}.
!ar: Like Levantine عم: عم أدرس ≈ {Estoy estudiando}.
`,
      words: `
hablando = speaking
comiendo = eating
haciendo = doing
leyendo = reading
durmiendo = sleeping
escribiendo = writing
esperando = waiting
trabajando = working
ahora = now
ahora mismo = right now
en este momento = at the moment
¿qué estás haciendo? = what are you doing?
`,
      phrases: `
¿Qué estás haciendo? — Estoy cocinando. = What are you doing? — I'm cooking.
Los niños están durmiendo. = The children are sleeping.
Está lloviendo mucho. = It's raining a lot.
Estamos esperando el autobús. = We're waiting for the bus.
Ahora mismo estoy trabajando. = Right now I'm working.
Mi madre está hablando por teléfono. = My mother is talking on the phone.
`,
      drills: `
Ahora ___ estudiando. (yo) => estoy | soy | está | estás # Right now I'm studying.
Los niños están ___. (dormir) => durmiendo | dormiendo | duermiendo | dormando # The children are sleeping.
¿Qué estás ___? (hacer) => haciendo | hacendo | haciando | hecho # What are you doing?
Mi padre está ___ el periódico. (leer) => leyendo | leiendo | leendo | leído # My father is reading the newspaper.
Está ___ mucho. (llover) => lloviendo | lluviendo | llovendo | llueve # It's raining a lot.
Estamos ___ la cena. (preparar) => preparando | preparendo | preparado | preparamos # We're making dinner.
`,
    },
    {
      t: 'This, that & more clothes',
      k: 'grammar',
      goal: 'Point at things with este, ese and aquel',
      body: `
## Demonstratives
| | near me | near you | over there |
|---|---|---|---|
| masc. singular | {este} | {ese} | {aquel} |
| fem. singular | {esta} | {esa} | {aquella} |
| masc. plural | {estos} | {esos} | {aquellos} |
| fem. plural | {estas} | {esas} | {aquellas} |
| neutral (an idea, an unknown thing) | {esto} | {eso} | {aquello} |

> Este jersey es bonito. = This jumper is nice.
> ¿Cuánto cuesta esa camisa? = How much is that shirt?
> Aquellas botas son muy caras. = Those boots over there are very expensive.
> ¿Qué es esto? = What's this?

!tip: {esto}, {eso} and {aquello} never go before a noun — they point at things you don't name: {¿Qué es eso?}
!de: {este} ≈ dieser, {ese} ≈ der da, {aquel} ≈ jener (dort drüben). Spanish uses all three every day.
!ar: {este / esta} ≈ هذا / هذه، {ese / esa} ≈ ذلك / تلك (near you)، {aquel} ≈ ذاك (far away).

## More clothes
{la chaqueta} (jacket), {el abrigo} (coat), {las botas} (boots), {el bolso} (handbag), {el cinturón} (belt), {la bufanda} (scarf), {el gorro} (woolly hat), {los calcetines} (socks), {el traje} (suit).
`,
      words: `
este, esta = this
ese, esa = that
aquel, aquella = that (over there)
esto = this (thing)
eso = that (thing)
la chaqueta = jacket
el abrigo = coat
las botas = boots
el bolso = handbag
la bufanda = scarf
los calcetines = socks
el traje = suit
`,
      phrases: `
Me gusta mucho este abrigo. = I really like this coat.
¿Cuánto cuestan esas botas? = How much are those boots?
Aquella chaqueta es muy bonita. = That jacket over there is very nice.
¿Qué es esto? = What's this?
Estos calcetines son de mi hermano. = These socks are my brother's.
Eso es muy caro. = That's very expensive.
`,
      drills: `
___ camisa es muy bonita. (this) => Esta | Este | Esto | Estas # This shirt is very pretty.
¿Cuánto cuestan ___ zapatos? (those, near you) => esos | esas | eso | ese # How much are those shoes?
___ montañas de allí son muy altas. => Aquellas | Aquellos | Aquella | Aquel # Those mountains over there are very high.
¿Qué es ___? (this thing) => esto | este | esta | estos # What's this?
Me gusta ___ abrigo. (this) => este | esta | esto | estos # I like this coat.
`,
    },
    {
      t: 'In a clothes shop',
      k: 'talk',
      goal: 'Buy clothes: ask for sizes and colours, try things on and pay',
      body: `
## Useful phrases
> ¿Puedo ayudarle? = Can I help you? (shop assistant)
> Solo estoy mirando, gracias. = I'm just looking, thanks.
> Busco una chaqueta negra. = I'm looking for a black jacket.
> ¿Qué talla tiene? = What size are you?
> Tengo la talla M. = I'm a size M.
> ¿Me lo puedo probar? = Can I try it on?
> ¿Dónde están los probadores? = Where are the fitting rooms?
> Me queda grande. = It's too big for me.
> Me queda bien. = It fits me well.
> ¿La tiene en azul? = Do you have it in blue?
> Me lo llevo. = I'll take it.

!tip: **quedar** (to fit, to suit) works like gustar: {Me queda bien} (it fits me), {Me quedan pequeños} (they're too small for me).
!es: Spain has two big sale seasons — {las rebajas} — from early January and from July. Shoe sizes are European ({el 42}); clothes sizes go 36, 38, 40…
!de: Sizes work just as in Germany, and {Me lo pruebo} = Ich probiere es an.
`,
      words: `
la talla = size (clothes)
probarse = to try on
el probador = fitting room
me queda bien = it fits me well
me queda grande = it's too big for me
me lo llevo = I'll take it
las rebajas = the sales
solo estoy mirando = I'm just looking
el dependiente, la dependienta = shop assistant
el efectivo = cash
`,
      phrases: `
Solo estoy mirando, gracias. = I'm just looking, thanks.
¿Tiene esta camiseta en la talla M? = Do you have this T-shirt in size M?
¿Me la puedo probar? = Can I try it on?
Me queda un poco pequeña. = It's a bit small for me.
Me queda muy bien. Me la llevo. = It fits me really well. I'll take it.
¿Se puede pagar en efectivo? = Can you pay in cash?
`,
      drills: `
¿Qué ___ tiene? — La 40. => talla | tamaño | número | medida # What size are you? — 40.
¿Me lo puedo ___? => probar | probarse | pruebo | prueba # Can I try it on?
Los pantalones me ___ grandes. => quedan | queda | quedo | quedamos # The trousers are too big for me.
Esta falda me ___ muy bien. => queda | quedan | gusta | está # This skirt fits me really well.
El jersey me gusta. Me ___ llevo. => lo | la | le | los # I like the jumper. I'll take it.
Solo estoy ___, gracias. => mirando | mirar | miro | mirado # I'm just looking, thanks.
`,
    },
    {
      t: 'Muy, mucho, poco, demasiado',
      k: 'grammar',
      goal: 'Talk about quantities with muy, mucho, poco, bastante and demasiado',
      body: `
## Muy or mucho?
- **muy** + adjective or adverb (never changes): {muy grande}, {muy bien}, {muy tarde}.
- **mucho** after a verb (doesn't change): {Trabajo mucho.} {Me gusta mucho.}
- **mucho / mucha / muchos / muchas** + noun (agrees): {mucho dinero}, {mucha gente}, {muchos libros}, {muchas casas}.

!warn: Never say "muy mucho" — say {muchísimo}: {Te quiero muchísimo}.

## Quantity words
| | + noun (agrees) | after a verb |
|---|---|---|
| little, few | {poco pan}, {pocas personas} | {Como poco.} |
| quite, enough | {bastante dinero}, {bastantes amigos} | {Estudio bastante.} |
| a lot, many | {mucha agua}, {muchos amigos} | {Leo mucho.} |
| too much, too many | {demasiado ruido}, {demasiadas cosas} | {Hablas demasiado.} |

!tip: {un poco} = a bit (positive): {Hablo un poco de español}. {poco} = not much (negative): {Hablo poco} (I don't talk much).
!de: {muy} = sehr, {mucho} = viel, {demasiado} = zu viel, {bastante} = ziemlich / genug.
!ar: {muy} ≈ جدًا، {mucho} ≈ كثير، {poco} ≈ قليل، {demasiado} ≈ أكثر من اللازم.
`,
      words: `
muy = very
mucho = a lot
mucha gente = a lot of people
poco = little, not much
un poco = a bit
bastante = quite; enough
demasiado = too, too much
muchísimo = very much
la gente = people
el dinero = money
el ruido = noise
la cosa = thing
`,
      phrases: `
Este restaurante es muy bueno. = This restaurant is very good.
Hay mucha gente en la calle. = There are a lot of people in the street.
Trabajo demasiado. = I work too much.
Tengo poco dinero este mes. = I don't have much money this month.
Hablo bastante bien español. = I speak Spanish quite well.
Te quiero muchísimo. = I love you very much.
`,
      drills: `
Madrid es una ciudad ___ grande. => muy | mucho | mucha | muchos # Madrid is a very big city.
Tengo ___ amigos en Sevilla. => muchos | muy | mucho | muchas # I have a lot of friends in Seville.
Hay ___ gente en la playa. => mucha | mucho | muy | muchas # There are a lot of people on the beach.
Me gusta ___ el chocolate. => mucho | muy | mucha | muchos # I like chocolate a lot.
Hay ___ ruido. No puedo dormir. (too much) => demasiado | demasiada | bastante | poco # There's too much noise. I can't sleep.
Hablo ___ de alemán. (a bit) => un poco | poco | pocos | una poca # I speak a bit of German.
`,
    },
    {
      t: 'My body & what hurts',
      k: 'vocab',
      goal: 'Name parts of the body and say what hurts',
      body: `
## El cuerpo
{la cabeza} (head), {la cara} (face), {los ojos} (eyes), {la nariz} (nose), {la boca} (mouth), {los dientes} (teeth), {la oreja} (ear), {el cuello} (neck), {la espalda} (back), {el brazo} (arm), {la mano} (hand), {el dedo} (finger), {el estómago} (stomach), {la pierna} (leg), {la rodilla} (knee), {el pie} (foot).

## Doler — to hurt
**doler** (o → ue) works like gustar:
> Me duele la cabeza. = I have a headache. (my head hurts me)
> Me duelen los pies. = My feet hurt.
> ¿Te duele algo? = Does anything hurt?
> A mi hijo le duele el estómago. = My son has a stomach ache.

!tip: Spanish uses **the**, not "my", with body parts: {Me duele la espalda} — {me} already says whose back it is.
!de: Like German "Mir tut der Kopf weh" = {Me duele la cabeza} — German uses the article too!
!ar: Like Arabic: راسي يوجعني ≈ {Me duele la cabeza} — the body part is the subject.

> Estoy resfriado. = I've got a cold.
> Tengo fiebre. = I have a temperature.
> Tengo tos. = I have a cough.
`,
      words: `
el cuerpo = body
la cabeza = head
la cara = face
la nariz = nose
la boca = mouth
la espalda = back
el brazo = arm
la pierna = leg
el pie = foot
el estómago = stomach
doler = to hurt
me duele = it hurts me
la fiebre = fever, temperature
resfriado, resfriada = with a cold
`,
      phrases: `
Me duele la cabeza. = I have a headache.
Me duelen los pies. = My feet hurt.
¿Te duele algo? = Does anything hurt?
A Pedro le duele la espalda. = Pedro's back hurts.
Estoy resfriado y tengo fiebre. = I have a cold and a temperature.
Me duele el estómago. = I have a stomach ache.
`,
      drills: `
Me ___ la cabeza. => duele | duelen | dolo | dolor # I have a headache.
Me ___ los ojos. => duelen | duele | dolen | duelo # My eyes hurt.
¿Te duele ___ espalda? => la | tu | su | mi # Does your back hurt?
A mi madre ___ duele la pierna. => le | la | me | se # My mother's leg hurts.
Tengo ___. Estoy a 38 grados. => fiebre | frío | calor | tos # I have a temperature. It's 38 degrees.
`,
    },
    {
      t: 'All about me: linking ideas',
      k: 'talk',
      goal: 'Write and say a short text about yourself using connectors',
      body: `
## Linking your ideas
| | |
|---|---|
| {y} ({e} before i- / hi-) | and |
| {o} ({u} before o- / ho-) | or |
| {pero} | but |
| {porque} | because |
| {también} | also |
| {además} | besides, what's more |
| {por eso} | that's why |
| {entonces} | so, then |

!tip: {y} → {e} before an "i" sound: {padres e hijos}. {o} → {u} before an "o" sound: {siete u ocho}.

## A model text
> Me llamo Omar y tengo veintiocho años. = My name is Omar and I'm 28.
> Soy marroquí, pero vivo en Madrid porque trabajo aquí. = I'm Moroccan, but I live in Madrid because I work here.
> Soy ingeniero en una empresa de energía solar. = I'm an engineer at a solar energy company.
> Hablo árabe, francés e inglés, y ahora estoy aprendiendo español. = I speak Arabic, French and English, and now I'm learning Spanish.
> En mi tiempo libre juego al fútbol y cocino. Además, me encanta viajar. = In my free time I play football and cook. What's more, I love travelling.
> Mi familia vive en Rabat, por eso hablo con ellos por teléfono todos los días. = My family lives in Rabat, that's why I talk to them on the phone every day.

!tip: Now write your own! Name, age, origin, where you live, job or studies, languages, hobbies, family. Then read it aloud and record yourself in the Pronunciation lab.
`,
      words: `
y = and
e = and (before i-, hi-)
o = or
u = or (before o-, ho-)
pero = but
además = besides, what's more
por eso = that's why
entonces = so, then
el texto = text
la vida = life
el sueño = dream; sleep
`,
      phrases: `
Me llamo Omar y soy de Marruecos. = My name is Omar and I'm from Morocco.
Vivo en Madrid porque trabajo aquí. = I live in Madrid because I work here.
Hablo francés e inglés. = I speak French and English.
Tengo siete u ocho primos. = I have seven or eight cousins.
Me gusta leer. Además, me encanta el cine. = I like reading. What's more, I love the cinema.
Estoy cansado, por eso no salgo hoy. = I'm tired, that's why I'm not going out today.
`,
      drills: `
Hablo árabe ___ inglés. => e | y | o | u # I speak Arabic and English.
¿Quieres té ___ café? => o | u | e | pero # Do you want tea or coffee?
Tengo siete ___ ocho años de experiencia. => u | o | y | e # I have seven or eight years of experience.
Estoy cansado, ___ no voy a la fiesta. => por eso | porque | pero | además # I'm tired, that's why I'm not going to the party.
No voy a la fiesta ___ estoy cansado. => porque | por eso | por qué | además # I'm not going to the party because I'm tired.
Me gusta Madrid, ___ es muy cara. => pero | porque | y | o # I like Madrid, but it's very expensive.
`,
    },
  ],
  story: {
    title: 'De compras en el Rastro',
    text: `
Es domingo y Anna está en el Rastro, el mercado más famoso de Madrid. Hay muchísima gente.
= It's Sunday and Anna is at the Rastro, Madrid's most famous market. There are loads of people.

Anna está buscando una chaqueta para el invierno. Mira en una tienda pequeña.
= Anna is looking for a jacket for the winter. She looks in a small shop.

—Hola, ¿puedo ayudarle? —Sí, gracias. ¿Cuánto cuesta esa chaqueta negra? —Esta cuesta cuarenta euros.
= "Hello, can I help you?" "Yes, thanks. How much is that black jacket?" "This one costs forty euros."

—¿Me la puedo probar? —Claro. ¿Qué talla tiene? —La treinta y ocho.
= "Can I try it on?" "Of course. What size are you?" "Thirty-eight."

La chaqueta le queda un poco grande. —¿La tiene en una talla más pequeña? —Sí, aquí tiene la treinta y seis.
= The jacket is a bit big for her. "Do you have it in a smaller size?" "Yes, here's the thirty-six."

—¡Esta me queda perfecta! Me la llevo. ¿Puedo pagar con tarjeta? —Lo siento, aquí solo efectivo.
= "This one fits me perfectly! I'll take it. Can I pay by card?" "Sorry, cash only here."

Después de dos horas, a Anna le duelen los pies y tiene mucha hambre. Entonces va a un bar y pide un bocadillo de tortilla. ¡Qué buen domingo!
= After two hours, Anna's feet hurt and she's very hungry. So she goes to a bar and orders a tortilla sandwich. What a good Sunday!
`,
    questions: `
¿Qué es el Rastro? => Un mercado | Un museo | Un restaurante # What is the Rastro?
¿Cuánto cuesta la chaqueta? => Cuarenta euros | Catorce euros | Cuatrocientos euros # How much is the jacket?
¿Qué talla compra Anna? => La treinta y seis | La treinta y ocho | La cuarenta # Which size does Anna buy?
¿Por qué no paga con tarjeta? => Solo aceptan efectivo | No tiene tarjeta | Es muy caro # Why doesn't she pay by card?
¿Qué le duele a Anna? => Los pies | La cabeza | La espalda # What hurts?
`,
  },
}

export default w
