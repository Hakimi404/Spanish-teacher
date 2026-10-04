import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 21,
  title: 'Work & formal Spanish',
  es: 'El mundo laboral',
  cando: [
    'I can use the pluperfect: había hecho',
    'I can talk about jobs, contracts and working conditions',
    'I can write a formal email',
    'I can handle a job interview in Spanish',
    'I can link ideas with sin embargo, por lo tanto, así que, ya que…',
    'I can use adjectives that change meaning with ser and estar',
  ],
  lessons: [
    {
      t: 'Pluperfect: había hecho',
      k: 'grammar',
      goal: 'Talk about what had happened before another past event',
      body: `
## The past before the past
**había / habías / había / habíamos / habíais / habían + participle**
| | |
|---|---|
| {yo} | {había comido} |
| {tú} | {habías comido} |
| {él / ella / usted} | {había comido} |
| {nosotros} | {habíamos comido} |
| {vosotros} | {habíais comido} |
| {ellos / ellas / ustedes} | {habían comido} |

Use it for an action that happened **before** another past action:
> Cuando llegué, la película ya había empezado. = When I arrived, the film had already started.
> No fui a la fiesta porque había trabajado todo el día. = I didn't go to the party because I'd worked all day.
> Nunca había visto el mar. = I had never seen the sea.

!tip: {ya} (already) and {nunca} (never) love this tense: {Cuando llamaste, ya me había acostado.}
!de: Exactly the German Plusquamperfekt: "Ich hatte gegessen" = {Había comido}.
!ar: Like كان قد + الماضي: {Había comido} ≈ كنتُ قد أكلتُ.
`,
      words: `
había comido = I had eaten
habías visto = you had seen
habíamos llegado = we had arrived
ya había = had already
nunca había = had never
el pluscuamperfecto = pluperfect
olvidarse de = to forget
`,
      phrases: `
Cuando llegué, la película ya había empezado. = When I arrived, the film had already started.
Nunca había visto el mar. = I had never seen the sea.
Estaba cansado porque había trabajado mucho. = I was tired because I'd worked a lot.
¿Ya habías estado en España antes? = Had you been to Spain before?
Me di cuenta de que me había olvidado las llaves. = I realised I'd forgotten my keys.
Cuando llamaste, ya nos habíamos acostado. = When you called, we'd already gone to bed.
`,
      drills: `
Cuando llegué, el tren ya ___ salido. => había | ha | habrá | hubo # When I arrived, the train had already left.
Nunca ___ comido sushi antes de ese día. (yo) => había | he | habré | hubiera # I had never eaten sushi before that day.
¿___ estado en Granada antes? (tú) => Habías | Has | Habrás | Habéis # Had you been to Granada before?
Cuando volvimos, alguien ___ entrado en casa. => había | ha | habían | hemos # When we got back, someone had got into the house.
Los niños ya se habían ___ cuando llegamos. (dormir) => dormido | dormidos | durmiendo | dormían # The children had already fallen asleep when we arrived.
`,
    },
    {
      t: 'The world of work',
      k: 'vocab',
      goal: 'Talk about jobs, contracts and working conditions',
      body: `
## Work vocabulary
| | |
|---|---|
| {el trabajo / el empleo} | job, employment |
| {la empresa} | company |
| {el jefe / la jefa} | boss |
| {el compañero / la compañera} | colleague |
| {el sueldo / el salario} | salary |
| {el contrato} | contract |
| {indefinido / temporal} | permanent / temporary |
| {la jornada completa / la media jornada} | full-time / part-time |
| {el horario} | working hours |
| {el paro} | unemployment (Spain) |
| {estar en paro} | to be unemployed |
| {contratar / despedir} | to hire / to fire |
| {la entrevista} | interview |
| {el currículum} | CV |

> Trabajo a jornada completa en una empresa de software. = I work full-time for a software company.
> Tengo un contrato indefinido. = I have a permanent contract.
> Mi hermano está en paro desde marzo. = My brother has been unemployed since March.

!es: Spanish work culture: the {jornada intensiva} (about 8 am to 3 pm, without a lunch break) is common in summer; people usually get 22 working days of holiday plus about 14 public holidays ({festivos}). Many offices go quiet in August.
!de: {el paro} = die Arbeitslosigkeit, {un contrato indefinido} = ein unbefristeter Vertrag.
`,
      words: `
el empleo = employment, job
el sueldo = salary
el contrato = contract
indefinido, indefinida = permanent (contract)
temporal = temporary
la jornada completa = full-time
la media jornada = part-time
el horario = working hours, timetable
el paro = unemployment (Spain)
estar en paro = to be unemployed
la entrevista = interview
el currículum = CV
contratar = to hire
`,
      phrases: `
Trabajo a jornada completa en una empresa de software. = I work full-time for a software company.
Tengo un contrato indefinido. = I have a permanent contract.
Mi hermano está en paro desde marzo. = My brother has been unemployed since March.
¿Cuál es el horario de trabajo? = What are the working hours?
Me han ofrecido un contrato temporal de seis meses. = They've offered me a six-month temporary contract.
La empresa va a contratar a diez personas. = The company is going to hire ten people.
`,
      drills: `
Trabajo ocho horas al día: tengo jornada ___. => completa | media | entera | total # I work eight hours a day: I work full-time.
No tengo trabajo: estoy en ___. => paro | pausa | parado | baja # I don't have a job: I'm unemployed.
Mi contrato es ___: termina en diciembre. => temporal | indefinido | completo | fijo # My contract is temporary: it ends in December.
Mañana tengo una ___ de trabajo. => entrevista | entrada | encuesta | vista # Tomorrow I have a job interview.
La empresa va a ___ a dos ingenieros. => contratar | contrato | contraer | contar # The company is going to hire two engineers.
`,
    },
    {
      t: 'Writing a formal email',
      k: 'talk',
      goal: 'Write a formal email with the right greetings and formulas',
      body: `
## Structure
| part | example |
|---|---|
| greeting | {Estimado señor García:} / {Estimada señora López:} / {Estimados señores:} |
| reason for writing | {Le escribo para solicitar información sobre…} |
| | {Me pongo en contacto con usted en relación con…} |
| body | {Me gustaría saber si…} / {Le agradecería que me enviara…} |
| attachments | {Le adjunto mi currículum.} |
| closing | {Quedo a la espera de su respuesta.} |
| sign-off | {Atentamente,} / {Un cordial saludo,} |

!tip: After the greeting Spanish uses a **colon**, not a comma: {Estimada señora López:}
!tip: Formal emails use **usted**: {le escribo}, {su empresa}, {le adjunto}.

## Informal emails
{Hola, Ana:} / {Querida Ana:} … {Un abrazo,} / {Besos,} / {Hasta pronto,}

!de: {Estimado señor García:} = Sehr geehrter Herr García, — and {Atentamente} = Mit freundlichen Grüßen.
!ar: Like تحية طيبة وبعد and مع خالص التحية — Spanish formal letters also use fixed formulas.
`,
      words: `
estimado, estimada = dear (formal)
le escribo para… = I'm writing to…
solicitar = to request; to apply for
adjuntar = to attach
el archivo adjunto = attachment
quedo a la espera de… = I look forward to…
atentamente = yours sincerely
un cordial saludo = kind regards
un abrazo = a hug; best wishes (informal)
el asunto = subject (of an email); matter
la solicitud = application, request
el correo electrónico = email
`,
      phrases: `
Estimada señora López: = Dear Mrs López,
Le escribo para solicitar información sobre el curso. = I'm writing to request information about the course.
Le adjunto mi currículum. = Please find my CV attached.
Quedo a la espera de su respuesta. = I look forward to your reply.
Atentamente, Anna Weber. = Yours sincerely, Anna Weber.
Un abrazo y hasta pronto. = Best wishes and see you soon.
`,
      drills: `
___ señor García: => Estimado | Estimada | Estimados | Estimadas # Dear Mr García,
Le escribo ___ solicitar el puesto. => para | por | a | de # I'm writing to apply for the position.
Le ___ mi currículum. => adjunto | adjunta | junto | ajunto # I'm attaching my CV.
Quedo a la ___ de su respuesta. => espera | esperanza | esperando | esperar # I look forward to your reply.
___, Omar Benali => Atentamente | Atento | Atención | Atentos # Yours sincerely, Omar Benali
`,
    },
    {
      t: 'The job interview',
      k: 'talk',
      goal: 'Answer typical interview questions about yourself',
      body: `
## Typical questions
> ¿Por qué quiere trabajar en nuestra empresa? = Why do you want to work for our company?
> Hábleme de su experiencia. = Tell me about your experience.
> ¿Cuáles son sus puntos fuertes y débiles? = What are your strengths and weaknesses?
> ¿Dónde se ve dentro de cinco años? = Where do you see yourself in five years?
> ¿Cuándo podría empezar? = When could you start?

## Useful answers
> Tengo cinco años de experiencia en el sector. = I have five years' experience in the industry.
> Soy una persona responsable, organizada y con capacidad de trabajo en equipo. = I'm responsible, organised and good at teamwork.
> Hablo cuatro idiomas: árabe, inglés, alemán y español. = I speak four languages: Arabic, English, German and Spanish.
> Me interesa mucho este puesto porque… = I'm very interested in this position because…
> Podría empezar el mes que viene. = I could start next month.

!tip: Use **usted** in interviews unless the interviewer switches to {tú} — many young companies do!
!es: List your languages with levels on a Spanish CV: {alemán — C1}, {español — B1}. A photo used to be standard; today it's optional.
`,
      words: `
el puesto = position, post
la experiencia laboral = work experience
los puntos fuertes = strengths
los puntos débiles = weaknesses
responsable = responsible
organizado, organizada = organised
el trabajo en equipo = teamwork
el sector = sector, industry
la formación = training, education
el candidato, la candidata = candidate
el mes que viene = next month
`,
      phrases: `
¿Por qué quiere trabajar en nuestra empresa? = Why do you want to work for our company?
Tengo cinco años de experiencia en el sector. = I have five years' experience in the industry.
Soy una persona responsable y organizada. = I'm a responsible and organised person.
Me interesa mucho este puesto. = I'm very interested in this position.
¿Cuándo podría empezar? — El mes que viene. = When could you start? — Next month.
Me encanta el trabajo en equipo. = I love teamwork.
`,
      drills: `
Me interesa mucho este ___. => puesto | puerto | puesta | punto # I'm very interested in this position.
Tengo tres años de ___ en marketing. => experiencia | experimento | expediente | esperanza # I have three years' experience in marketing.
Uno de mis puntos ___ es la paciencia. => fuertes | fuerte | fortes | forzados # One of my strengths is patience.
¿Dónde se ___ dentro de cinco años? (ver, usted) => ve | vea | verá | ves # Where do you see yourself in five years?
Hablo cuatro ___. => idiomas | idiomes | lenguajes | dialectos # I speak four languages.
`,
    },
    {
      t: 'Connectors: sin embargo, así que…',
      k: 'vocab',
      goal: 'Link your ideas with B1 connectors',
      body: `
## Connecting ideas
| function | connectors |
|---|---|
| adding | {además}, {también}, {incluso} (even), {es más} (what's more) |
| contrast | {pero}, {sin embargo} (however), {en cambio} (on the other hand), {aunque} |
| cause | {porque}, {ya que} (since), {como} (as — at the start), {debido a} (due to) |
| consequence | {así que} (so), {por lo tanto} (therefore), {por eso}, {de modo que} |
| ordering | {en primer lugar}, {en segundo lugar}, {por último} |
| conclusion | {en resumen}, {en conclusión}, {al fin y al cabo} (after all) |

> Como no tenía dinero, no fui al viaje. = As I didn't have any money, I didn't go on the trip.
> El piso es pequeño; sin embargo, es muy luminoso. = The flat is small; however, it's very bright.
> Ya que estás aquí, ¿me ayudas? = Since you're here, will you help me?
> Llovía mucho, así que nos quedamos en casa. = It was raining hard, so we stayed at home.

!tip: {como} meaning "as / since" goes at the **beginning** of the sentence: {Como hace frío, me quedo en casa.}
!de: {sin embargo} = jedoch, {por lo tanto} = deshalb / daher, {en cambio} = dagegen, {ya que} = da.
`,
      words: `
sin embargo = however
en cambio = on the other hand
por lo tanto = therefore
así que = so
ya que = since, as
como = as, since (at the start of a sentence)
debido a = due to
incluso = even
en primer lugar = first of all
por último = finally, lastly
en resumen = in short
al fin y al cabo = after all
`,
      phrases: `
Como no tenía dinero, no fui al viaje. = As I didn't have any money, I didn't go on the trip.
El piso es pequeño; sin embargo, es muy luminoso. = The flat is small; however, it's very bright.
Ya que estás aquí, ¿me ayudas? = Since you're here, will you help me?
Llovía mucho, así que nos quedamos en casa. = It was raining hard, so we stayed at home.
Yo prefiero la montaña; mi hermana, en cambio, prefiere la playa. = I prefer the mountains; my sister, on the other hand, prefers the beach.
En resumen, fue un viaje fantástico. = In short, it was a fantastic trip.
`,
      drills: `
Estaba enfermo; ___, fue a trabajar. => sin embargo | por lo tanto | así que | ya que # He was ill; however, he went to work.
No tengo coche, ___ voy en metro. => así que | sin embargo | aunque | en cambio # I don't have a car, so I go by metro.
___ hace frío, me quedo en casa. => Como | Así que | Sin embargo | Por lo tanto # As it's cold, I'm staying at home.
A mí me gusta el café; a mi marido, en ___, le gusta el té. => cambio | cambiar | vez | lugar # I like coffee; my husband, on the other hand, likes tea.
En ___ lugar, quiero darles las gracias. => primer | primero | primera | uno # First of all, I'd like to thank you.
`,
    },
    {
      t: 'Ser or estar: meaning changes',
      k: 'grammar',
      goal: 'Use adjectives whose meaning changes with ser and estar',
      body: `
## Same adjective, different meaning
| adjective | with ser | with estar |
|---|---|---|
| {listo} | clever: {Es muy listo.} | ready: {Estoy listo.} |
| {aburrido} | boring: {La película es aburrida.} | bored: {Estoy aburrido.} |
| {malo} | bad (character): {Es malo.} | ill: {Está malo.} |
| {bueno} | good: {Es bueno.} | tasty; attractive: {La paella está buena.} |
| {rico} | rich: {Es muy rico.} | delicious: {¡Está rico!} |
| {verde} | green: {La manzana es verde.} | unripe: {El plátano está verde.} |
| {orgulloso} | arrogant: {Es orgulloso.} | proud: {Estoy orgulloso de ti.} |
| {despierto} | sharp, alert: {Es despierto.} | awake: {Está despierto.} |
| {abierto} | open-minded: {Es abierto.} | open: {La tienda está abierta.} |

!tip: General rule: **ser** = what something *is* (its nature); **estar** = the state it's *in* right now.
!warn: {Está buena} about a person comments on their looks — careful! About food it just means "tasty".
!de: {Estoy aburrido} = mir ist langweilig; {Soy aburrido} = ich bin langweilig!
`,
      words: `
ser listo = to be clever
estar listo = to be ready
ser aburrido = to be boring
estar aburrido = to be bored
estar malo = to be ill
ser rico = to be rich
estar rico = to be delicious
estar verde = to be unripe
estar orgulloso de = to be proud of
estar despierto = to be awake
`,
      phrases: `
¿Estás listo? Nos vamos. = Are you ready? We're going.
Tu hermano es muy listo. = Your brother is very clever.
Esta película es muy aburrida. = This film is really boring.
Hoy no voy a clase porque estoy malo. = I'm not going to class today because I'm ill.
¡Esta paella está riquísima! = This paella is delicious!
Estoy muy orgullosa de ti. = I'm very proud of you.
`,
      drills: `
¿___ listo? El taxi ha llegado. => Estás | Eres | Sois | Ser # Are you ready? The taxi is here.
Mi hija ___ muy lista: siempre saca buenas notas. => es | está | son | estar # My daughter is very clever: she always gets good marks.
No hay nada que hacer, ___ aburrido. (bored, yo) => estoy | soy | es | está # There's nothing to do, I'm bored.
Este plátano no se puede comer, ___ verde. => está | es | son | estar # You can't eat this banana, it's unripe.
Mmm, la sopa ___ muy rica. => está | es | son | hay # Mmm, the soup is delicious.
`,
    },
  ],
  story: {
    title: 'La entrevista de Anna',
    text: `
Anna había enviado su currículum a varias empresas de Barcelona. Una semana después, recibió un correo: «Estimada señora Weber: Nos gustaría invitarla a una entrevista…»
= Anna had sent her CV to several companies in Barcelona. A week later she received an email: "Dear Ms Weber, We would like to invite you to an interview…"

Era una empresa alemana de energías renovables que buscaba a alguien que hablara alemán y español.
= It was a German renewable energy company that was looking for someone who spoke German and Spanish.

El día de la entrevista, Anna estaba muy nerviosa. Nunca había hecho una entrevista en español. Sin embargo, se había preparado muy bien.
= On the day of the interview Anna was very nervous. She had never done an interview in Spanish. However, she had prepared very well.

—Buenos días, señora Weber. Siéntese, por favor. Hábleme de su experiencia. —Bueno, en primer lugar, trabajé cuatro años en una empresa de Hamburgo. Además, llevo un año viviendo en Madrid.
= "Good morning, Ms Weber. Please sit down. Tell me about your experience." "Well, first of all, I worked for four years at a company in Hamburg. What's more, I've been living in Madrid for a year."

—¿Cuáles son sus puntos fuertes? —Soy organizada y me encanta el trabajo en equipo. Y como hablo tres idiomas, puedo trabajar con clientes de muchos países.
= "What are your strengths?" "I'm organised and I love teamwork. And as I speak three languages, I can work with clients from many countries."

—Muy bien. El puesto es a jornada completa, con un contrato indefinido. ¿Cuándo podría empezar? —A principios de septiembre.
= "Very good. The position is full-time, with a permanent contract. When could you start?" "At the beginning of September."

Dos días después, la llamaron: ¡le habían dado el trabajo! Anna llamó a Omar enseguida: —¡Ya tengo trabajo en Barcelona! Estoy muy orgullosa de mí misma.
= Two days later they called her: they had given her the job! Anna called Omar straight away: "I've got a job in Barcelona! I'm really proud of myself."
`,
    questions: `
¿Qué buscaba la empresa? => Alguien que hablara alemán y español | Un ingeniero | Una persona de Barcelona # What was the company looking for?
¿Por qué estaba nerviosa Anna? => Nunca había hecho una entrevista en español | No se había preparado | Llegó tarde # Why was Anna nervous?
¿Qué tipo de contrato le ofrecen? => Indefinido, a jornada completa | Temporal, de media jornada | De seis meses # What contract do they offer her?
¿Cuándo podría empezar Anna? => A principios de septiembre | Mañana | En enero # When could Anna start?
`,
  },
}

export default w
