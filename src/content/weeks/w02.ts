import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 2,
  title: 'Who are you? — ser & gender',
  es: '¿Quién eres?',
  cando: [
    'I can use subject pronouns and choose between tú, usted and vosotros',
    'I can say who I am, where I am from and what I do with ser',
    'I can say my nationality and which languages I speak',
    'I can talk about jobs in the masculine and feminine',
    'I can use el / la / un / una and make nouns plural',
  ],
  lessons: [
    {
      t: 'I, you, he, she… pronouns',
      k: 'grammar',
      goal: 'Use the subject pronouns and know when to use tú, usted and vosotros',
      body: `
## Subject pronouns
| | Singular | Plural |
|---|---|---|
| 1st | {yo} — I | {nosotros} / {nosotras} — we |
| 2nd informal | {tú} — you | {vosotros} / {vosotras} — you all |
| 2nd formal | {usted} — you | {ustedes} — you all |
| 3rd | {él} — he · {ella} — she | {ellos} / {ellas} — they |

- The **-as** forms are for all-female groups: {nosotras}, {vosotras}, {ellas}. Mixed groups use the masculine form.
- {usted} (formal "you") takes the same verb form as {él} / {ella}. It's often written **Ud.**
- {vosotros} is the friendly "you all" used in **Spain**. {ustedes} is the polite plural — and the only plural "you" in Latin America.

!de: {tú} ≈ du, {usted} ≈ Sie (singular), {vosotros} ≈ ihr, {ustedes} ≈ Sie (plural). Spain uses {tú} far more than Germany uses "du" — with shop staff, colleagues and people your age.
!ar: Like Arabic, Spanish separates masculine and feminine "they": {ellos} / {ellas} ≈ هم / هنّ. But there is no dual, and "you" singular has no gender: {tú} = أنتَ and أنتِ.

## Spanish drops the pronoun
The verb ending already shows who is acting, so pronouns are usually left out: {Hablo español} = I speak Spanish. Use the pronoun only for emphasis or contrast: {Yo soy de Rabat y él es de Berlín.}

!ar: Exactly like Arabic: {Hablo español} ≈ أتكلّم الإسبانية — no separate "I" needed.
!de: In German "ich" is obligatory; in Spanish {Hablo español} is a complete sentence.
`,
      words: `
yo = I
tú = you (informal)
él = he
ella = she
usted = you (formal)
nosotros = we (masc. / mixed)
nosotras = we (fem.)
vosotros = you all (informal, masc. / mixed)
vosotras = you all (informal, fem.)
ellos = they (masc. / mixed)
ellas = they (fem.)
ustedes = you all (formal)
`,
      phrases: `
Yo soy Omar y él es Carlos. = I'm Omar and he's Carlos.
Ella es Ana. = She is Ana.
¿Y usted? = And you? (formal)
Nosotros somos de Marruecos. = We're from Morocco.
¿Vosotros sois de Madrid? = Are you (all) from Madrid?
Ellas son de Alemania. = They (f.) are from Germany.
`,
      drills: `
(To a friend:) ¿Y ___? => tú | usted | él | yo # And you?
(To an older stranger:) ¿Y ___? => usted | tú | vosotros | ella # And you? (formal)
(Ana and María:) ___ son de Sevilla. => Ellas | Ellos | Nosotras | Vosotras # They are from Seville.
(To your friends, in Spain:) ¿___ sois de aquí? => Vosotros | Ustedes | Ellos | Nosotros # Are you all from here?
(Me and my brother:) ___ somos de Egipto. => Nosotros | Nosotras | Ellos | Vosotros # We're from Egypt.
`,
    },
    {
      t: 'Ser — to be (who & what)',
      k: 'grammar',
      goal: 'Conjugate ser and use it for identity, origin and profession',
      body: `
## The verb ser
| Person | ser | |
|---|---|---|
| {yo} | {soy} | I am |
| {tú} | {eres} | you are |
| {él / ella / usted} | {es} | he / she is, you are |
| {nosotros} | {somos} | we are |
| {vosotros} | {sois} | you all are |
| {ellos / ellas / ustedes} | {son} | they are, you all are |

Use **ser** for what something **is** — its identity:
- name & identity: {Soy Omar.}
- origin: {Soy de Marruecos.}
- nationality: {Soy marroquí.}
- profession: {Soy ingeniero.}
- description & character: {Es simpática.}
- time & dates: {Hoy es lunes.}

!tip: Spanish has a **second** verb for "to be": **estar** (where something is, how someone feels). You'll meet it in week 5. For now: who / what / where from → **ser**.
!de: No article with professions: {Soy profesor} = "Ich bin Lehrer" — just like German (English needs "a teacher").
!ar: Arabic usually has no verb "to be" in the present (أنا طالب). Spanish always needs it: {Soy estudiante}.

## Negatives & questions
Put **no** before the verb: {No soy de Madrid.} Questions just change the intonation (and add ¿?):
> ¿Eres de Madrid? = Are you from Madrid?
> Sí, soy de Madrid. = Yes, I'm from Madrid.
> No, no soy de Madrid. = No, I'm not from Madrid.
`,
      words: `
ser = to be (identity, origin)
soy = I am
eres = you are
es = he / she is, you (formal) are
somos = we are
sois = you all are
son = they are, you all are
el estudiante, la estudiante = student
el amigo, la amiga = friend
aquí = here
`,
      phrases: `
¿Eres de aquí? = Are you from here?
No, no soy de aquí. Soy de Egipto. = No, I'm not from here. I'm from Egypt.
Somos estudiantes. = We're students.
¿Sois amigos? = Are you friends?
Ellos son de Berlín. = They're from Berlin.
Usted es el profesor, ¿no? = You're the teacher, aren't you?
`,
      drills: `
Yo ___ de Marruecos. => soy | es | eres | somos # I'm from Morocco.
¿Tú ___ estudiante? => eres | es | soy | sois # Are you a student?
Ella ___ mi amiga. => es | eres | son | soy # She is my friend.
Nosotros ___ de Alemania. => somos | sois | son | es # We are from Germany.
¿Vosotros ___ de Madrid? => sois | somos | son | eres # Are you all from Madrid?
Ellos no ___ profesores. => son | es | somos | sois # They aren't teachers.
`,
    },
    {
      t: 'Nationalities & languages',
      k: 'vocab',
      goal: 'Say your nationality and the languages you speak',
      body: `
## Nationalities have gender
Most change **-o → -a** for women, and add **-a** after a consonant:
| Country | Man | Woman | Language |
|---|---|---|---|
| {España} | {español} | {española} | {el español} |
| {Alemania} | {alemán} | {alemana} | {el alemán} |
| {Marruecos} | {marroquí} | {marroquí} | {el árabe} |
| {Egipto} | {egipcio} | {egipcia} | {el árabe} |
| {Inglaterra} | {inglés} | {inglesa} | {el inglés} |
| {Francia} | {francés} | {francesa} | {el francés} |
| {Italia} | {italiano} | {italiana} | {el italiano} |
| {Estados Unidos} | {estadounidense} | {estadounidense} | {el inglés} |

- Endings in **-í** or **-e** don't change: {marroquí}, {estadounidense}.
- The accent disappears in the feminine: {alemán} → {alemana}, {inglés} → {inglesa} — the stress rules do the job.
- Nationalities and languages are written in **lowercase**: {español}, {alemán}.

> Hablo árabe, inglés y alemán. = I speak Arabic, English and German.
> ¿Hablas español? = Do you speak Spanish?
> ¿Qué idiomas hablas? = What languages do you speak?

!tip: **y → e** before a word starting with an "i" sound: {español e inglés}.
!de: German capitalises "Deutsch" as a noun, but Spanish always writes {alemán} in lowercase — even the language.
`,
      words: `
español, española = Spanish
alemán, alemana = German
marroquí = Moroccan
egipcio, egipcia = Egyptian
inglés, inglesa = English
francés, francesa = French
italiano, italiana = Italian
árabe = Arabic, Arab
el idioma = language
hablar = to speak
Francia = France
Italia = Italy
`,
      phrases: `
Soy alemán, pero vivo en España. = I'm German, but I live in Spain.
Ella es egipcia. = She's Egyptian.
Hablo árabe, inglés y alemán. = I speak Arabic, English and German.
¿Hablas francés? = Do you speak French?
Laura es española e Ian es inglés. = Laura is Spanish and Ian is English.
¿Qué idiomas hablas? = What languages do you speak?
`,
      drills: `
Ana es de Italia. Es ___. => italiana | italiano | Italia | italianas # Ana is from Italy. She's Italian.
Peter es de Alemania. Es ___. => alemán | alemana | alemanes | Alemania # Peter is from Germany. He's German.
Sara es de Inglaterra. Es ___. => inglesa | inglés | ingleses | Inglaterra # Sara is from England. She's English.
Youssef es de Marruecos. Es ___. => marroquí | marroquía | marroquino | Marruecos # Youssef is from Morocco. He's Moroccan.
Hablo español ___ inglés. => e | y | o | de # I speak Spanish and English.
`,
    },
    {
      t: 'What do you do? Jobs',
      k: 'vocab',
      goal: 'Ask and say what people do for a living',
      body: `
## ¿A qué te dedicas?
> ¿A qué te dedicas? = What do you do (for a living)?
> ¿En qué trabajas? = What's your job?
> Soy ingeniero. = I'm an engineer.
> Trabajo en un hospital. = I work in a hospital.
> Estudio informática. = I study computer science.

Most jobs have a masculine and a feminine form:
| Man | Woman | |
|---|---|---|
| {el médico} | {la médica} | doctor |
| {el profesor} | {la profesora} | teacher |
| {el ingeniero} | {la ingeniera} | engineer |
| {el camarero} | {la camarera} | waiter / waitress |
| {el abogado} | {la abogada} | lawyer |
| {el enfermero} | {la enfermera} | nurse |
| {el estudiante} | {la estudiante} | student |
| {el periodista} | {la periodista} | journalist |

- **-o → -a**: {médico} → {médica}
- **consonant + a**: {profesor} → {profesora}
- **-e** and **-ista** usually stay the same: {el / la estudiante}, {el / la periodista}.

!tip: No "a / an" before jobs after ser: {Soy médica} = I'm a doctor.
`,
      words: `
el médico, la médica = doctor
el profesor, la profesora = teacher
el ingeniero, la ingeniera = engineer
el camarero, la camarera = waiter, waitress
el abogado, la abogada = lawyer
el enfermero, la enfermera = nurse
el periodista, la periodista = journalist
el trabajo = job, work
trabajar = to work
el hospital = hospital
la empresa = company
¿a qué te dedicas? = what do you do (for a living)?
`,
      phrases: `
¿A qué te dedicas? = What do you do?
Soy enfermera y trabajo en un hospital. = I'm a nurse and I work in a hospital.
Mi amigo es camarero. = My friend is a waiter.
Ella es abogada. = She's a lawyer.
No soy médico, soy estudiante. = I'm not a doctor, I'm a student.
Trabajo en una empresa alemana. = I work for a German company.
`,
      drills: `
María es ___. (teacher) => profesora | profesor | profesores | profesión # María is a teacher.
Pedro es ___. (doctor) => médico | médica | médicos | medicina # Pedro is a doctor.
Lucía es ___. (engineer) => ingeniera | ingeniero | ingenieras | ingeniería # Lucía is an engineer.
Trabajo ___ un hospital. => en | de | a | y # I work in a hospital.
¿A qué te ___? => dedicas | llamas | eres | trabajas # What do you do?
`,
    },
    {
      t: 'Nouns: gender & plural',
      k: 'grammar',
      goal: 'Guess the gender of a noun and make it plural',
      body: `
## Every noun has a gender
| Usually masculine | Usually feminine |
|---|---|
| ends in **-o**: {el libro}, {el vaso} | ends in **-a**: {la casa}, {la mesa} |
| ends in **-or**: {el ordenador} | ends in **-ción / -sión**: {la canción}, {la televisión} |
| ends in **-aje**: {el viaje} | ends in **-dad / -tad**: {la ciudad}, {la libertad} |

**Learn every noun with its article!** Common exceptions: {el día} (day), {el mapa}, {el problema}, {el idioma} are masculine; {la mano} (hand), {la foto}, {la radio} are feminine.

!de: Good news: only 2 genders — no neuter! But they often differ from German: {la leche} (die Milch) matches, but {el sol} (die Sonne) and {la luna} (der Mond) are swapped.
!ar: Like Arabic, -a is often feminine, a bit like **ة**: {la casa}, {la mesa}. But genders don't always match: {el sol} is masculine while الشمس is feminine.

## Plural
- After a vowel add **-s**: {libro} → {libros}, {casa} → {casas}
- After a consonant add **-es**: {ciudad} → {ciudades}, {profesor} → {profesores}
- **-z** becomes **-ces**: {lápiz} → {lápices}, {luz} → {luces}
- Accents may come or go: {canción} → {canciones}, {joven} → {jóvenes}
`,
      words: `
el libro = book
el vaso = glass (for drinking)
el ordenador = computer (Spain)
la canción = song
la ciudad = city
el día = day
el problema = problem
la mano = hand
la foto = photo
el lápiz = pencil
la luz = light
el sol = sun
la leche = milk
`,
      phrases: `
Los libros y las mesas. = The books and the tables.
Es un problema. = It's a problem.
Las ciudades de España. = The cities of Spain.
Tengo dos lápices. = I have two pencils.
Buenos días a todos. = Good morning, everyone.
Una foto, por favor. = A photo, please.
`,
      drills: `
___ problema => el | la | los | las # the problem
___ mano => la | el | los | las # the hand
___ ciudad => la | el | los | un # the city
dos ___ (pencil) => lápices | lápizs | lápiz | lápizes # two pencils
tres ___ (song) => canciones | canciónes | cancions | canción # three songs
cuatro ___ (city) => ciudades | ciudads | ciudadas | ciudad # four cities
`,
    },
    {
      t: 'Articles: el, la, un, una',
      k: 'grammar',
      goal: 'Use definite and indefinite articles, plus al and del',
      body: `
## "The" — definite articles
| | Singular | Plural |
|---|---|---|
| masculine | {el libro} | {los libros} |
| feminine | {la casa} | {las casas} |

## "A / some" — indefinite articles
| | Singular | Plural |
|---|---|---|
| masculine | {un libro} | {unos libros} |
| feminine | {una casa} | {unas casas} |

- {el} (the) has no accent; {él} (he) has one.
- **a + el = al** and **de + el = del**: {Voy al banco.} (I'm going to the bank.) {La casa del profesor.} (The teacher's house.)
- Feminine nouns that start with a stressed **a-** take {el} in the singular: {el agua} (water), {el aula} (classroom) — but {las aguas}.

!de: Easier than German: no cases! {el} is always {el} — no der / den / dem.
!ar: {el} / {la} work like الـ: {el libro} = الكتاب. Spanish also has "a / an" — {un} / {una} — where Arabic uses tanwīn (كتابٌ).

> Es un libro de español. = It's a Spanish book.
> El libro es de Ana. = The book is Ana's.
> Son unas fotos de Sevilla. = They're some photos of Seville.
`,
      words: `
el = the (masc.)
la = the (fem.)
los = the (masc. plural)
las = the (fem. plural)
un = a, an (masc.)
una = a, an (fem.)
unos = some (masc.)
unas = some (fem.)
al = to the (a + el)
del = of the, from the (de + el)
el agua = water // feminine, but takes "el"
el aula = classroom // feminine, but takes "el"
el banco = bank; bench
`,
      phrases: `
Es un libro de español. = It's a Spanish book.
La casa del profesor. = The teacher's house.
Un vaso de agua, por favor. = A glass of water, please.
Son unas fotos de Sevilla. = They're some photos of Seville.
El ordenador es de Omar. = The computer is Omar's.
Las amigas de Laura son de Cádiz. = Laura's friends are from Cádiz.
`,
      drills: `
___ casa => una | un | unos | uno # a house
___ libros => los | las | el | la # the books
___ fotos => unas | unos | una | un # some photos
Un vaso ___ agua. => de | del | al | el # A glass of water.
La casa ___ profesor. => del | de el | al | de la # The teacher's house.
___ agua => el | la | los | lo # the water
`,
    },
  ],
  story: {
    title: 'La clase de español',
    text: `
Es lunes. Es la primera clase de español en una escuela de Madrid.
= It's Monday. It's the first Spanish class at a school in Madrid.

El profesor se llama Javier. Es de Salamanca y es muy simpático.
= The teacher is called Javier. He's from Salamanca and he's very nice.

—¡Buenos días a todos! Yo soy Javier, vuestro profesor. ¿Y vosotros?
= "Good morning, everyone! I'm Javier, your teacher. And you?"

—Hola, me llamo Anna. Soy alemana, de Hamburgo. Soy estudiante de medicina.
= "Hi, my name is Anna. I'm German, from Hamburg. I'm a medical student."

—Yo soy Omar. Soy marroquí, de Rabat. Soy ingeniero y trabajo en una empresa española.
= "I'm Omar. I'm Moroccan, from Rabat. I'm an engineer and I work for a Spanish company."

—Y nosotras somos Kate y Emma. Somos inglesas, de Londres. Somos camareras en un hotel.
= "And we're Kate and Emma. We're English, from London. We're waitresses in a hotel."

—¡Muy bien! Sois de cuatro ciudades diferentes. ¡Bienvenidos a la clase!
= "Very good! You're from four different cities. Welcome to the class!"
`,
    questions: `
¿Cómo se llama el profesor? => Javier | Omar | Anna # What is the teacher called?
¿De dónde es Anna? => De Alemania | De Inglaterra | De Marruecos # Where is Anna from?
¿Qué es Omar? => Ingeniero | Médico | Camarero # What is Omar's job?
¿De dónde son Kate y Emma? => De Londres | De Madrid | De Hamburgo # Where are Kate and Emma from?
`,
  },
}

export default w
