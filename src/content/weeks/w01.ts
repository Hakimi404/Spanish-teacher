import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 1,
  title: 'Sounds & first words',
  es: '¡Hola!',
  cando: [
    'I can pronounce the 5 Spanish vowels clearly',
    'I can greet people and say goodbye at any time of day',
    'I can say my name and ask someone theirs',
    'I can count from 0 to 20',
    'I can read any word aloud using the stress rules',
    'I can ask someone to repeat or speak more slowly',
  ],
  lessons: [
    {
      t: 'The 5 vowels & ¡Hola!',
      k: 'pron',
      goal: 'Pronounce the five Spanish vowels and say hello, goodbye and thank you',
      body: `
## Welcome! 👋
Spanish is one of the most **phonetic** languages in the world: you say what you see. Learn the sounds once and you can read any word aloud. **Tap any Spanish word** in this app to hear it — tap it again on the word card to hear it slowly.

## Five pure vowels
Spanish has only **5 vowel sounds** and they never change. Keep them short and pure — no gliding like English "go" (go-u) or "day" (de-i).

| Vowel | Sounds like | Examples |
|---|---|---|
| {a} | a in "father", but short | {casa}, {mapa}, {hola} |
| {e} | e in "pet" | {mesa}, {leche}, {tres} |
| {i} | ee in "see", but short | {sí}, {vino}, {libro} |
| {o} | o in "for" — no "u" at the end | {no}, {foto}, {todo} |
| {u} | oo in "food" | {uno}, {mucho}, {luna} |

!de: Great news: Spanish vowels are almost exactly German short vowels — {a} as in "Mann", {e} as in "Bett", {i} as in "Kind", {o} as in "Sonne", {u} as in "Mutter". Just never make them long like "See" or "Boot".
!ar: Arabic has three vowels (a, i, u). Spanish adds **e** and **o** as separate sounds that change meaning: {mesa} (table) ≠ {misa} (mass), {oso} (bear) ≠ {uso} (use). Keep e/i and o/u apart!
!tip: Unstressed vowels keep their full sound. English turns them into "uh" (b**a**n**a**na → buh-NAN-uh); Spanish never does: {banana} is ba-na-na.

## Your first words
> ¡Hola! = Hi! / Hello!
> ¡Adiós! = Goodbye!
> Sí. = Yes.
> No. = No.
> Gracias. = Thank you.
> De nada. = You're welcome.
> Por favor. = Please.

!es: Spanish opens exclamations with **¡** and questions with **¿**: {¡Hola!} {¿Qué tal?} You will see them everywhere.
`,
      words: `
hola = hello, hi
adiós = goodbye
sí = yes
no = no
gracias = thank you
de nada = you're welcome
por favor = please
la casa = house, home
el mapa = map
la mesa = table
el vino = wine
la luna = moon
uno = one
`,
      phrases: `
¡Hola! ¿Qué tal? = Hi! How's it going?
Sí, gracias. = Yes, thank you.
No, gracias. = No, thank you.
¡Adiós! = Goodbye!
Gracias. — De nada. = Thank you. — You're welcome.
Un vino, por favor. = A wine, please.
`,
      drills: `
¡___! ¿Qué tal? => Hola | Adiós | Gracias | Sí # Hi! How's it going?
Gracias. — De ___. => nada | favor | hola | adiós # Thank you. — You're welcome.
Por ___. => favor | nada | gracias | sí # Please.
___, gracias. => No | Hola | Adiós | Nada # No, thank you.
Un vino, por ___. => favor | nada | gracias | hola # A wine, please.
`,
    },
    {
      t: 'Buenos días! Greetings',
      k: 'talk',
      goal: 'Greet people at any time of day and ask how they are',
      body: `
## Greetings in Spain
> Buenos días. = Good morning. (until lunch, about 2 pm)
> Buenas tardes. = Good afternoon / evening. (until about 9 pm)
> Buenas noches. = Good evening / good night.
> ¿Qué tal? = How are you? / How's it going?
> ¿Cómo estás? = How are you? (informal)
> ¿Cómo está usted? = How are you? (formal)
> Bien, gracias. ¿Y tú? = Fine, thanks. And you?
> Muy bien. = Very well.
> Regular. = So-so.
> Hasta luego. = See you later. / Bye.
> Hasta mañana. = See you tomorrow.

!es: In Spain friends — and often new acquaintances — greet with **dos besos**, two kisses on the cheeks (right, then left). Men usually shake hands with each other. People say {¡Hasta luego!} even when leaving a shop they'll never see again.

## New sounds
- **H** is always silent: {hola} sounds like "ola", {hasta} like "asta".
- **J** (and **G** before e/i) is a strong throaty sound: {Juan}, {jamón}, {gente}.
- **LL** and **Y** sound like the "y" in "yes": {llamo}, {calle}, {yo}.
- **Ñ** sounds like "ny" in "canyon": {España}, {mañana}, {niño}.
- **CH** sounds like in "church": {noche}, {mucho}.

!ar: Spanish **j** = Arabic **خ**: {Juan} ≈ خوان. Spanish **ll** / **y** = Arabic **ي**: {yo} ≈ يو. And **ñ** ≈ نْي.
!de: Spanish **j** = German **ch** in "Bach": {Juan}, {jamón}. Spanish **ch** = German **tsch** (Deutsch). The Spanish **h** is always silent — never like in "Haus"!
`,
      words: `
buenos días = good morning
buenas tardes = good afternoon, good evening
buenas noches = good evening, good night
¿qué tal? = how are you? how's it going?
bien = well, fine
muy bien = very well
regular = so-so
mal = badly, bad
hasta luego = see you later, bye
hasta mañana = see you tomorrow
mañana = tomorrow; morning
y = and
¿y tú? = and you?
`,
      phrases: `
Buenos días, ¿qué tal? = Good morning, how are you?
Muy bien, gracias. ¿Y tú? = Very well, thanks. And you?
Bien, gracias. = Fine, thanks.
¿Cómo estás? = How are you?
Hasta mañana. = See you tomorrow.
Buenas noches. = Good night.
`,
      drills: `
Buenos ___. (morning) => días | tardes | noches | luego # Good morning.
Buenas ___. (afternoon) => tardes | días | luego | bien # Good afternoon.
Hasta ___. (tomorrow) => mañana | luego | noches | tal # See you tomorrow.
Muy ___, gracias. => bien | mal | tal | luego # Very well, thanks.
Bien, gracias. ¿Y ___? => tú | yo | hola | bien # Fine, thanks. And you?
¿Qué ___? => tal | bien | días | luego # How are you?
`,
    },
    {
      t: 'Me llamo… & the rolled R',
      k: 'talk',
      goal: 'Say your name, ask someone’s name and react politely',
      body: `
## Introducing yourself
> ¿Cómo te llamas? = What's your name? (informal)
> Me llamo Omar. = My name is Omar. (literally: I call myself Omar)
> Soy Ana. = I'm Ana.
> ¿Y tú? = And you?
> Encantado. = Nice to meet you. (a man speaking)
> Encantada. = Nice to meet you. (a woman speaking)
> Mucho gusto. = Nice to meet you. (anyone)
> ¿Cómo se llama usted? = What's your name? (formal)

!tip: **Encantado / encantada** matches the speaker: a man says {encantado}, a woman says {encantada}. Your first taste of Spanish gender!

## R and RR
- One **r** between vowels is one quick tap of the tongue, like the "tt" in American "better": {pero} (but), {caro} (expensive), {para} (for).
- **rr**, and **r** at the start of a word, is a rolled trill: {perro} (dog), {Roma}, {rojo} (red).
- They change meaning: {pero} – {perro}, {caro} – {carro}, {para} – {parra}.

!ar: The Spanish tap **r** is exactly Arabic **ر**: {pero} ≈ بيرو. For **rr**, roll the ر for longer: {perro}.
!de: Don't use the German throat-r of "rot"! Spanish r is made with the tip of the tongue — like a Bavarian or Swiss rolled r.
`,
      words: `
¿cómo te llamas? = what's your name? (informal)
me llamo… = my name is…
soy… = I am…
encantado = nice to meet you (said by a man)
encantada = nice to meet you (said by a woman)
mucho gusto = nice to meet you
el nombre = name, first name
el apellido = surname
pero = but
el perro = dog
caro = expensive
rojo = red
`,
      phrases: `
¡Hola! ¿Cómo te llamas? = Hi! What's your name?
Me llamo Omar. ¿Y tú? = My name is Omar. And you?
Soy Laura. Encantada. = I'm Laura. Nice to meet you.
Mucho gusto. = Nice to meet you.
¿Cómo se llama usted? = What's your name? (formal)
Me llamo Carlos García. = My name is Carlos García.
`,
      drills: `
¿Cómo te ___? => llamas | llamo | llama | soy # What's your name?
Me ___ Omar. => llamo | llamas | soy | es # My name is Omar.
___ Laura. => Soy | Llamo | Eres | Encantado # I'm Laura.
(Laura says:) Encantad___. => a | o | e | os # Nice to meet you.
Mucho ___. => gusto | gracias | bien | nombre # Nice to meet you.
`,
    },
    {
      t: 'Numbers 0–20 · C, Z, S, B, V',
      k: 'vocab',
      goal: 'Count from 0 to 20 and pronounce c/z/s and b/v the Spanish way',
      body: `
## Counting 0–20
| | | | |
|---|---|---|---|
| 0 {cero} | 1 {uno} | 2 {dos} | 3 {tres} |
| 4 {cuatro} | 5 {cinco} | 6 {seis} | 7 {siete} |
| 8 {ocho} | 9 {nueve} | 10 {diez} | 11 {once} |
| 12 {doce} | 13 {trece} | 14 {catorce} | 15 {quince} |
| 16 {dieciséis} | 17 {diecisiete} | 18 {dieciocho} | 19 {diecinueve} |
| 20 {veinte} | | | |

!tip: 16–19 are "ten and six" etc. written as one word: {dieciséis}, {diecisiete}.

## C, Z and S (Spain)
- **z**, and **c** before **e / i**, sound like English **th** in "think": {cero}, {cinco}, {once}, {doce}, {gracias}, {zapato}.
- **c** before a / o / u, and **qu**, sound like **k**: {casa}, {cuatro}, {qué}, {quince}.
- **s** is always a soft, hissing **s** — never a buzzing "z": {seis}, {siete}, {casa}.

!ar: Spain's **z / ce / ci** is Arabic **ث**: {cero} ≈ ثيرو, {gracias} ≈ غراثياس.
!de: Spanish **z** is never "ts" as in "Zeit", and **s** is never voiced as in "Sonne": {seis} sounds like "ßeiß".
!es: In Latin America and the Canary Islands, z / ce / ci are pronounced like **s** ("seseo"). Both are correct — this course uses Spain's pronunciation.

## B and V
**B** and **V** are the same sound in Spanish: {vino} and {bien} start alike. Between vowels it's softer, the lips almost touching: {nueve}, {Cuba}.

!de: Spanish **v** is never "f" (Vater) or "w": {vino} sounds like "bino".
!ar: Spanish **p** and **b** are different sounds: {peso} (weight) ≠ {beso} (kiss). Arabic has no native "p" — practise {papá}, {pan}, {perro}.
`,
      words: `
cero = zero
uno = one
dos = two
tres = three
cuatro = four
cinco = five
seis = six
siete = seven
ocho = eight
nueve = nine
diez = ten
once = eleven
doce = twelve
trece = thirteen
catorce = fourteen
quince = fifteen
dieciséis = sixteen
diecisiete = seventeen
dieciocho = eighteen
diecinueve = nineteen
veinte = twenty
`,
      phrases: `
Uno, dos, tres. = One, two, three.
Dos más dos son cuatro. = Two plus two is four.
Cinco más cinco son diez. = Five plus five is ten.
¿Qué número? = Which number?
Mi número es el siete. = My number is seven.
Diez menos tres son siete. = Ten minus three is seven.
`,
      drills: `
Dos más dos son ___. => cuatro | tres | cinco | seis # Two plus two is four.
Cinco más cinco son ___. => diez | doce | quince | nueve # Five plus five is ten.
Diez más ___ son quince. => cinco | seis | cuatro | tres # Ten plus five is fifteen.
Diez más diez son ___. => veinte | doce | diecinueve | dos # Ten plus ten is twenty.
Seis más ___ son trece. => siete | ocho | seis | nueve # Six plus seven is thirteen.
Diez menos tres son ___. => siete | seis | ocho | trece # Ten minus three is seven.
`,
    },
    {
      t: 'Word stress & ¿De dónde eres?',
      k: 'pron',
      goal: 'Find the stressed syllable of any word and say where you are from',
      body: `
## Which syllable is stressed?
Three simple rules let you pronounce any Spanish word:
1. Word ends in a **vowel**, **n** or **s** → stress the **second-to-last** syllable: {casa} (**CA**-sa), {hablan} (**HA**-blan), {lunes} (**LU**-nes).
2. Word ends in any **other consonant** → stress the **last** syllable: {hablar} (ha-**BLAR**), {ciudad} (ciu-**DAD**), {español} (es-pa-**ÑOL**).
3. A written **accent** (á é í ó ú) overrides the rules: {café}, {teléfono}, {árbol}, {inglés}.

!tip: Tap any word in the app: the word card shows its syllables with the stressed one highlighted.

Accents also tell words apart: {esta} (this) – {está} (is); {si} (if) – {sí} (yes); {tu} (your) – {tú} (you); {hablo} (I speak) – {habló} (he spoke).

## Where are you from?
> ¿De dónde eres? = Where are you from? (informal)
> Soy de Marruecos. = I'm from Morocco.
> Soy de Alemania, de Berlín. = I'm from Germany, from Berlin.
> ¿De dónde es usted? = Where are you from? (formal)
> Vivo en Madrid. = I live in Madrid.

!ar: Thousands of Spanish words come from Arabic, thanks to 800 years of al-Andalus: {el aceite} (الزيت, oil), {el azúcar} (السكر, sugar), {el arroz} (الرز, rice), {ojalá} (لو شاء الله, "hopefully"). Watch for words starting with **al-** or **a-**: {la almohada} (pillow), {el alcalde} (mayor), {la aldea} (village).
`,
      words: `
¿de dónde eres? = where are you from?
soy de… = I'm from…
vivo en… = I live in…
España = Spain
Alemania = Germany
Marruecos = Morocco
Egipto = Egypt
Inglaterra = England
el café = coffee, café
el teléfono = telephone
el aceite = oil
el azúcar = sugar
el arroz = rice
ojalá = hopefully, I wish
`,
      phrases: `
¿De dónde eres? = Where are you from?
Soy de Egipto. = I'm from Egypt.
Soy de Alemania. = I'm from Germany.
Vivo en España. = I live in Spain.
¿De dónde es usted? = Where are you from? (formal)
Un café con azúcar, por favor. = A coffee with sugar, please.
`,
      drills: `
¿De ___ eres? => dónde | cómo | qué | cuál # Where are you from?
Soy ___ Marruecos. => de | en | y | a # I'm from Morocco.
Vivo ___ Madrid. => en | de | y | a # I live in Madrid.
Soy de ___. (Germany) => Alemania | España | Egipto | Marruecos # I'm from Germany.
Un café con ___, por favor. => azúcar | arroz | aceite | mesa # A coffee with sugar, please.
`,
    },
    {
      t: 'Survival phrases & the alphabet',
      k: 'talk',
      goal: 'Ask for help in class, spell words and say you speak a little Spanish',
      body: `
## Your survival kit
> No entiendo. = I don't understand.
> ¿Puedes repetir, por favor? = Can you repeat, please?
> Más despacio, por favor. = More slowly, please.
> ¿Cómo se dice "apple" en español? = How do you say "apple" in Spanish?
> ¿Qué significa "perro"? = What does "perro" mean?
> ¿Cómo se escribe? = How do you spell it?
> Hablo un poco de español. = I speak a little Spanish.
> Perdón. / Lo siento. = Excuse me. / I'm sorry.

## The alphabet — el abecedario
| Letter | Name | Letter | Name |
|---|---|---|---|
| A | {a} | N | {ene} |
| B | {be} | Ñ | {eñe} |
| C | {ce} | O | {o} |
| D | {de} | P | {pe} |
| E | {e} | Q | {cu} |
| F | {efe} | R | {erre} |
| G | {ge} | S | {ese} |
| H | {hache} | T | {te} |
| I | {i} | U | {u} |
| J | {jota} | V | {uve} |
| K | {ka} | W | {uve doble} |
| L | {ele} | X | {equis} |
| M | {eme} | Y | {i griega} |
| | | Z | {zeta} |

!tip: Spell your name: Omar = {o, eme, a, erre}. On the phone, Spaniards say {be de Barcelona} or {uve de Valencia} to make b/v clear.
`,
      words: `
no entiendo = I don't understand
¿puedes repetir? = can you repeat?
más despacio = more slowly
¿cómo se dice…? = how do you say…?
¿qué significa…? = what does … mean?
¿cómo se escribe? = how do you spell it?
un poco = a little
el español = Spanish (language)
perdón = sorry, excuse me
lo siento = I'm sorry
la palabra = word
la letra = letter
`,
      phrases: `
No entiendo. ¿Puedes repetir, por favor? = I don't understand. Can you repeat, please?
Más despacio, por favor. = More slowly, please.
¿Cómo se dice "thank you" en español? = How do you say "thank you" in Spanish?
¿Qué significa "perro"? = What does "perro" mean?
Hablo un poco de español. = I speak a little Spanish.
Lo siento, no entiendo. = I'm sorry, I don't understand.
`,
      drills: `
No ___. => entiendo | entiendes | repetir | despacio # I don't understand.
Más ___, por favor. => despacio | poco | gracias | bien # More slowly, please.
¿Cómo se ___ "dog" en español? => dice | llama | escribe | significa # How do you say "dog" in Spanish?
¿Qué ___ "gato"? => significa | dice | escribe | entiendo # What does "gato" mean?
Hablo un ___ de español. => poco | mucho | bien | más # I speak a little Spanish.
`,
    },
  ],
  story: {
    title: 'Un café en Madrid',
    text: `
¡Hola! Me llamo Laura. Soy de Sevilla, en España, pero vivo en Madrid.
= Hi! My name is Laura. I'm from Seville, in Spain, but I live in Madrid.

En un café, un chico dice: —¡Hola! ¿Qué tal?
= In a café, a young man says: "Hi! How's it going?"

—Muy bien, gracias. ¿Y tú? ¿Cómo te llamas?
= "Very well, thanks. And you? What's your name?"

—Me llamo Omar. Soy de Marruecos, de Tánger.
= "My name is Omar. I'm from Morocco, from Tangier."

—¡Encantada, Omar! —Mucho gusto, Laura.
= "Nice to meet you, Omar!" "Nice to meet you, Laura."

Omar habla un poco de español. —Más despacio, por favor —dice Omar. Laura habla más despacio.
= Omar speaks a little Spanish. "More slowly, please," says Omar. Laura speaks more slowly.

—¿Un café? —Sí, por favor. —¡Dos cafés, por favor! —Gracias. —De nada.
= "A coffee?" "Yes, please." "Two coffees, please!" "Thank you." "You're welcome."

—¡Adiós, Laura! ¡Hasta mañana! —¡Hasta mañana, Omar!
= "Bye, Laura! See you tomorrow!" "See you tomorrow, Omar!"
`,
    questions: `
¿De dónde es Laura? => De Sevilla | De Madrid | De Tánger # Where is Laura from?
¿Dónde vive Laura? => En Madrid | En Sevilla | En Tánger # Where does Laura live?
¿De dónde es Omar? => De Marruecos | De España | De Alemania # Where is Omar from?
¿Qué toman Laura y Omar? => Dos cafés | Dos vinos | Un café # What do Laura and Omar have?
`,
  },
}

export default w
