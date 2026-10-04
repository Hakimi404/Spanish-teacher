import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 4,
  title: 'Daily life — the present tense',
  es: 'Mi día a día',
  cando: [
    'I can conjugate regular -ar, -er and -ir verbs in the present',
    'I can make sentences negative with no',
    'I can say the days of the week, the months and the seasons',
    'I can tell the time and ask when things happen',
    'I can say how often I do things',
  ],
  lessons: [
    {
      t: 'Present tense: -ar verbs',
      k: 'grammar',
      goal: 'Conjugate regular -ar verbs and talk about what you do',
      body: `
## Regular -ar verbs
Take off **-ar** and add the endings:
| | hablar (to speak) | trabajar (to work) |
|---|---|---|
| {yo} | {habl[o]} | {trabaj[o]} |
| {tú} | {habl[as]} | {trabaj[as]} |
| {él / ella / usted} | {habl[a]} | {trabaj[a]} |
| {nosotros} | {habl[amos]} | {trabaj[amos]} |
| {vosotros} | {habl[áis]} | {trabaj[áis]} |
| {ellos / ellas / ustedes} | {habl[an]} | {trabaj[an]} |

The present covers "I speak", "I'm speaking" and "I do speak": {Hablo español} = I speak / I'm speaking Spanish.

!de: Just like German, the ending tells you who: ich arbeit**e** = {trabaj[o]}, du arbeit**est** = {trabaj[as]}.
!ar: Arabic marks the person mostly with prefixes (أعمل، نعمل), Spanish with endings ({trabajo}, {trabajamos}) — but the idea is the same.

## Common -ar verbs
{hablar} (speak), {trabajar} (work), {estudiar} (study), {escuchar} (listen), {mirar} (look), {cocinar} (cook), {comprar} (buy), {tomar} (take, have), {necesitar} (need), {viajar} (travel), {bailar} (dance).

> Trabajo en una oficina. = I work in an office.
> ¿Hablas inglés? = Do you speak English?
> Estudiamos español todos los días. = We study Spanish every day.
`,
      words: `
hablar = to speak
trabajar = to work
estudiar = to study
escuchar = to listen (to)
mirar = to look (at), to watch
cocinar = to cook
comprar = to buy
tomar = to take; to have (food, drink)
necesitar = to need
viajar = to travel
la oficina = office
la música = music
`,
      phrases: `
Trabajo en una oficina en el centro. = I work in an office in the centre.
¿Hablas inglés? = Do you speak English?
Estudiamos español todos los días. = We study Spanish every day.
Mi madre cocina muy bien. = My mother cooks very well.
¿Qué música escucháis? = What music do you (all) listen to?
Necesito un café. = I need a coffee.
`,
      drills: `
Yo ___ en un hospital. (trabajar) => trabajo | trabaja | trabajas | trabajamos # I work in a hospital.
¿Tú ___ alemán? (hablar) => hablas | habla | hablo | habláis # Do you speak German?
Mi hermana ___ medicina. (estudiar) => estudia | estudias | estudio | estudian # My sister studies medicine.
Nosotros ___ música. (escuchar) => escuchamos | escucháis | escuchan | escucho # We listen to music.
Vosotros ___ mucho. (viajar) => viajáis | viajamos | viajan | viajas # You (all) travel a lot.
Ellos ___ un taxi. (necesitar) => necesitan | necesita | necesitamos | necesitáis # They need a taxi.
`,
    },
    {
      t: 'Negatives & the days of the week',
      k: 'vocab',
      goal: 'Say what you don’t do and talk about the days of the week',
      body: `
## Saying no
Put **no** right before the verb: {No trabajo los sábados.} (I don't work on Saturdays.)
> ¿Hablas francés? — No, no hablo francés. = Do you speak French? — No, I don't speak French.

!de: No "nicht" at the end — Spanish puts {no} before the verb: {No trabajo} = Ich arbeite nicht.

## Days of the week
| | |
|---|---|
| {lunes} | Monday |
| {martes} | Tuesday |
| {miércoles} | Wednesday |
| {jueves} | Thursday |
| {viernes} | Friday |
| {sábado} | Saturday |
| {domingo} | Sunday |

- Days are **masculine** and written in **lowercase**.
- "On Monday" = {el lunes}; "on Mondays" = {los lunes} — no preposition!
- {el fin de semana} = the weekend.

> ¿Qué día es hoy? = What day is it today?
> Hoy es martes. = Today is Tuesday.
> Los domingos como con mi familia. = On Sundays I have lunch with my family.

!tip: Spanish weeks start on Monday — that's why calendars read L M X J V S D (X for {miércoles}, so it isn't confused with {martes}).
!ar: In many Arab countries the week starts on Sunday or Saturday; in Spain it starts on {lunes}, and the weekend is {sábado} and {domingo}.
`,
      words: `
el lunes = Monday
el martes = Tuesday
el miércoles = Wednesday
el jueves = Thursday
el viernes = Friday
el sábado = Saturday
el domingo = Sunday
la semana = week
el fin de semana = weekend
hoy = today
mañana = tomorrow
¿qué día es hoy? = what day is it today?
`,
      phrases: `
Hoy es lunes. = Today is Monday.
No trabajo los sábados. = I don't work on Saturdays.
El viernes ceno con mis amigos. = On Friday I'm having dinner with my friends.
¿Qué haces el fin de semana? = What are you doing at the weekend?
Mañana es domingo. = Tomorrow is Sunday.
No, no necesito nada. = No, I don't need anything.
`,
      drills: `
Hoy es lunes, mañana es ___. => martes | domingo | miércoles | jueves # Today is Monday, tomorrow is Tuesday.
___ sábados no trabajo. => Los | El | En | Las # On Saturdays I don't work.
No ___ francés. (hablar, yo) => hablo | habla | hablas | hablar # I don't speak French.
El día después del jueves es el ___. => viernes | miércoles | sábado | martes # The day after Thursday is Friday.
Mis padres ___ trabajan los domingos. => no | ni | sin | nada # My parents don't work on Sundays.
`,
    },
    {
      t: 'What time is it?',
      k: 'talk',
      goal: 'Tell the time and say when things happen',
      body: `
## Telling the time
> ¿Qué hora es? = What time is it?
> Es la una. = It's one o'clock.
> Son las dos. = It's two o'clock.
> Son las tres y cuarto. = It's quarter past three.
> Son las cuatro y media. = It's half past four.
> Son las cinco menos cuarto. = It's quarter to five.
> Son las seis y diez. = It's ten past six.
> Son las siete menos veinte. = It's twenty to seven.

- **Es la una** (singular) — every other hour uses **son las**.
- After the hour: **y** + minutes. Before the next hour: **menos** + minutes.
- {de la mañana} (in the morning), {de la tarde} (in the afternoon / evening), {de la noche} (at night): {Son las diez de la noche.}

## At what time?
> ¿A qué hora empieza la clase? = What time does the class start?
> A las nueve. = At nine.
> Al mediodía. = At midday.

!es: Spain runs late: lunch ({la comida}) at 2–3 pm, dinner ({la cena}) at 9–10 pm. Many small shops close from 2 to 5 pm. Timetables use the 24-hour clock: {las 20:30} = {las ocho y media de la tarde}.
!de: Careful: German "halb fünf" is 4:30 = {las cuatro y media}. Spanish counts the half **after** the hour, not before!
!ar: Very close to Arabic: الساعة الرابعة والنصف = {las cuatro y media}; والربع = {y cuarto}; إلا ربعًا = {menos cuarto}.
`,
      words: `
la hora = hour; time (on the clock)
¿qué hora es? = what time is it?
es la una = it's one o'clock
son las dos = it's two o'clock
y cuarto = quarter past
y media = half past
menos cuarto = quarter to
¿a qué hora? = at what time?
la mañana = morning
la tarde = afternoon, evening
la noche = night
el mediodía = midday
`,
      phrases: `
¿Qué hora es? — Son las once y cuarto. = What time is it? — It's quarter past eleven.
La clase empieza a las nueve. = The class starts at nine.
Trabajo de ocho a tres. = I work from eight to three.
Ceno a las nueve y media. = I have dinner at half past nine.
Es la una menos diez. = It's ten to one.
¿A qué hora llegas? = What time are you arriving?
`,
      drills: `
Son las tres y ___. (3:30) => media | cuarto | menos | medio # It's half past three.
___ la una. => Es | Son | Está | Están # It's one o'clock.
Son las cinco ___ cuarto. (4:45) => menos | y | de | a # It's quarter to five.
¿A qué ___ es la clase? => hora | tiempo | vez | día # What time is the class?
Ceno a las diez de la ___. (10 pm) => noche | mañana | tarde | día # I have dinner at ten at night.
`,
    },
    {
      t: 'Present tense: -er verbs',
      k: 'grammar',
      goal: 'Conjugate regular -er verbs: comer, beber, leer, aprender…',
      body: `
## Regular -er verbs
| | comer (to eat) | beber (to drink) |
|---|---|---|
| {yo} | {com[o]} | {beb[o]} |
| {tú} | {com[es]} | {beb[es]} |
| {él / ella / usted} | {com[e]} | {beb[e]} |
| {nosotros} | {com[emos]} | {beb[emos]} |
| {vosotros} | {com[éis]} | {beb[éis]} |
| {ellos / ellas / ustedes} | {com[en]} | {beb[en]} |

Common -er verbs: {comer} (eat), {beber} (drink), {leer} (read), {aprender} (learn), {comprender} (understand), {vender} (sell), {correr} (run), {deber} (must, should), {creer} (believe).

> Leo el periódico por la mañana. = I read the newspaper in the morning.
> ¿Comes carne? = Do you eat meat?
> Aprendemos mucho en clase. = We learn a lot in class.

!tip: In Spain {comer} also means **to have lunch** — the main meal of the day: {¿A qué hora coméis?}
!ar: Pork is everywhere in Spain ({el cerdo}, {el jamón}). If you don't eat it, just say {No como cerdo}, or {No bebo alcohol} — restaurants are used to it.
!de: {creer} = glauben, {deber} = sollen / müssen: {Debo estudiar} = Ich muss lernen.
`,
      words: `
comer = to eat; to have lunch
beber = to drink
leer = to read
aprender = to learn
comprender = to understand
vender = to sell
correr = to run
deber = must, should
el periódico = newspaper
la carne = meat
el agua = water // feminine, but takes "el"
el cerdo = pig; pork
`,
      phrases: `
¿Comes carne? = Do you eat meat?
No como cerdo. = I don't eat pork.
Bebemos agua con la comida. = We drink water with lunch.
Leo un libro en español. = I'm reading a book in Spanish.
Debes descansar. = You should rest.
¿Aprendéis mucho en clase? = Do you learn a lot in class?
`,
      drills: `
Yo no ___ carne. (comer) => como | come | comes | comemos # I don't eat meat.
¿Tú ___ café? (beber) => bebes | bebe | bebo | bebéis # Do you drink coffee?
Mi padre ___ el periódico. (leer) => lee | lees | leo | leen # My father reads the newspaper.
Nosotros ___ español. (aprender) => aprendemos | aprendéis | aprenden | aprendo # We are learning Spanish.
Ellos ___ fruta en el mercado. (vender) => venden | vende | vendemos | vendéis # They sell fruit at the market.
Vosotros ___ mucho. (correr) => corréis | corremos | corren | corres # You (all) run a lot.
`,
    },
    {
      t: 'Present tense: -ir verbs',
      k: 'grammar',
      goal: 'Conjugate regular -ir verbs and compare all three groups',
      body: `
## Regular -ir verbs
| | vivir (to live) | escribir (to write) |
|---|---|---|
| {yo} | {viv[o]} | {escrib[o]} |
| {tú} | {viv[es]} | {escrib[es]} |
| {él / ella / usted} | {viv[e]} | {escrib[e]} |
| {nosotros} | {viv[imos]} | {escrib[imos]} |
| {vosotros} | {viv[ís]} | {escrib[ís]} |
| {ellos / ellas / ustedes} | {viv[en]} | {escrib[en]} |

-ir verbs are just like -er verbs, except **nosotros** (-imos) and **vosotros** (-ís).

Common -ir verbs: {vivir} (live), {escribir} (write), {abrir} (open), {recibir} (receive), {subir} (go up), {decidir} (decide), {compartir} (share), {asistir} (attend).

## All three groups at a glance
| | -ar | -er | -ir |
|---|---|---|---|
| {yo} | -o | -o | -o |
| {tú} | -as | -es | -es |
| {él} | -a | -e | -e |
| {nosotros} | -amos | -emos | -imos |
| {vosotros} | -áis | -éis | -ís |
| {ellos} | -an | -en | -en |

!warn: {asistir} = to attend (a class, a meeting) — not "to assist" ({ayudar}).

> Vivo en un piso en el centro. = I live in a flat in the centre.
> ¿Escribes muchos correos? = Do you write a lot of emails?
> Abrimos a las diez. = We open at ten.
`,
      words: `
vivir = to live
escribir = to write
abrir = to open
recibir = to receive
subir = to go up; to upload
decidir = to decide
compartir = to share
asistir = to attend
el correo = email; post
la carta = letter
el centro = centre
la ventana = window
`,
      phrases: `
Vivo en un piso en el centro. = I live in a flat in the centre.
¿Dónde vivís? = Where do you (all) live?
Escribo muchos correos en el trabajo. = I write a lot of emails at work.
La tienda abre a las diez. = The shop opens at ten.
Compartimos piso. = We share a flat.
Recibo una carta de mi abuela. = I'm getting a letter from my grandmother.
`,
      drills: `
Nosotros ___ en Madrid. (vivir) => vivimos | vivemos | vivís | viven # We live in Madrid.
¿Vosotros ___ en un piso? (vivir) => vivís | vivéis | vivimos | viven # Do you (all) live in a flat?
Ella ___ una carta. (escribir) => escribe | escribes | escribo | escriben # She writes a letter.
El banco ___ a las ocho y media. (abrir) => abre | abren | abro | abrimos # The bank opens at half past eight.
Yo ___ muchos correos. (recibir) => recibo | recibe | recibes | recibimos # I receive a lot of emails.
Mis amigos ___ piso. (compartir) => comparten | comparte | compartimos | compartís # My friends share a flat.
`,
    },
    {
      t: 'How often? Months & seasons',
      k: 'vocab',
      goal: 'Say how often you do things and talk about months, seasons and dates',
      body: `
## How often?
| | |
|---|---|
| {siempre} | always |
| {normalmente} | usually |
| {a menudo} | often |
| {a veces} | sometimes |
| {casi nunca} | hardly ever |
| {nunca} | never |
| {todos los días} | every day |
| {una vez a la semana} | once a week |
| {dos veces al mes} | twice a month |

!tip: {nunca} goes before the verb ({Nunca bebo café}) or after it together with {no} ({No bebo café nunca}). Spanish loves double negatives!

## Months & seasons
{enero}, {febrero}, {marzo}, {abril}, {mayo}, {junio}, {julio}, {agosto}, {septiembre}, {octubre}, {noviembre}, {diciembre} — lowercase, like the days.

| Season | |
|---|---|
| {la primavera} | spring |
| {el verano} | summer |
| {el otoño} | autumn |
| {el invierno} | winter |

> Mi cumpleaños es en marzo. = My birthday is in March.
> Hoy es el cinco de octubre. = Today is the fifth of October.
> En agosto mucha gente está de vacaciones. = In August lots of people are on holiday.

!es: Dates go day + **de** + month: {el 12 de octubre}. In Spain August is the big holiday month — many offices and family shops close.
`,
      words: `
siempre = always
normalmente = usually
a menudo = often
a veces = sometimes
nunca = never
todos los días = every day
el mes = month
enero = January
mayo = May
agosto = August
diciembre = December
la primavera = spring
el verano = summer
el otoño = autumn
el invierno = winter
`,
      phrases: `
Siempre desayuno en casa. = I always have breakfast at home.
A veces como en un restaurante. = Sometimes I eat in a restaurant.
Nunca bebo café por la noche. = I never drink coffee at night.
Estudio español dos veces a la semana. = I study Spanish twice a week.
Mi cumpleaños es el doce de mayo. = My birthday is on the twelfth of May.
En invierno hace frío. = It's cold in winter.
`,
      drills: `
Después de marzo viene ___. => abril | mayo | febrero | junio # After March comes April.
En ___ hace mucho calor. (summer) => verano | invierno | otoño | primavera # It's very hot in summer.
Mi cumpleaños es el cinco ___ junio. => de | en | a | del # My birthday is on the fifth of June.
No como carne ___. (never) => nunca | siempre | a veces | a menudo # I never eat meat.
Estudio dos ___ a la semana. => veces | vez | días | horas # I study twice a week.
Diciembre, enero y febrero son los meses de ___. => invierno | verano | primavera | otoño # December, January and February are the winter months.
`,
    },
  ],
  story: {
    title: 'Un día de Laura',
    text: `
Laura trabaja en una oficina en el centro de Madrid. Trabaja de lunes a viernes, de nueve a seis.
= Laura works in an office in the centre of Madrid. She works Monday to Friday, from nine to six.

Por la mañana desayuna un café con leche y una tostada. Lee el periódico en el metro.
= In the morning she has a white coffee and a slice of toast. She reads the newspaper on the metro.

A las dos come con sus compañeros en un restaurante pequeño. Normalmente toman el menú del día.
= At two she has lunch with her colleagues in a small restaurant. They usually have the set menu of the day.

Por la tarde, Laura estudia inglés dos veces a la semana. Los martes y los jueves asiste a una clase en una academia.
= In the afternoon Laura studies English twice a week. On Tuesdays and Thursdays she attends a class at a language school.

Los viernes por la noche cena con sus amigos. Hablan, escuchan música y a veces bailan hasta las dos de la mañana.
= On Friday nights she has dinner with her friends. They talk, listen to music and sometimes dance until two in the morning.

Los sábados no trabaja. Limpia su piso, compra fruta en el mercado y escribe correos a su familia de Sevilla.
= On Saturdays she doesn't work. She cleans her flat, buys fruit at the market and writes emails to her family in Seville.

¿Y los domingos? Los domingos Laura descansa. ¡Nunca trabaja los domingos!
= And on Sundays? On Sundays Laura rests. She never works on Sundays!
`,
    questions: `
¿Cuándo trabaja Laura? => De lunes a viernes | Los fines de semana | Los domingos # When does Laura work?
¿Dónde lee el periódico? => En el metro | En la oficina | En casa # Where does she read the newspaper?
¿Qué estudia Laura? => Inglés | Francés | Alemán # What does Laura study?
¿Qué hace los domingos? => Descansa | Trabaja | Estudia # What does she do on Sundays?
`,
  },
}

export default w
