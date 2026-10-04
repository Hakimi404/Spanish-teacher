import type { WeekSrc } from '../types'

const w: WeekSrc = {
  n: 5,
  title: 'Places & estar',
  es: '¿Dónde está?',
  cando: [
    'I can say where people and things are with estar',
    'I can say how I feel: tired, happy, ill…',
    'I can choose between ser and estar in simple sentences',
    'I can say what there is in a place with hay',
    'I can describe my home and ask for directions',
  ],
  lessons: [
    {
      t: 'Estar: where is it?',
      k: 'grammar',
      goal: 'Use estar to say where people and things are',
      body: `
## The verb estar
| | estar |
|---|---|
| {yo} | {estoy} |
| {tú} | {estás} |
| {él / ella / usted} | {está} |
| {nosotros} | {estamos} |
| {vosotros} | {estáis} |
| {ellos / ellas / ustedes} | {están} |

Use **estar** for **location** — where someone or something is:
> ¿Dónde está el baño? = Where is the toilet?
> Estoy en casa. = I'm at home.
> Madrid está en el centro de España. = Madrid is in the centre of Spain.
> Mis padres están en Marruecos. = My parents are in Morocco.

!tip: Even permanent locations use estar: {Sevilla está en Andalucía.} **Ser** says *what* something is; **estar** says *where* it is.
!warn: Watch the accent: {esta} (this) ≠ {está} (is). {¿Dónde está esta calle?} uses both!
!de: Location is "sein" in German ("Ich bin zu Hause") — in Spanish it's always {estar}, never {ser}: {Estoy en casa}.
!ar: Arabic often needs no verb (أنا في البيت). Spanish always needs {estar}: {Estoy en casa}.
`,
      words: `
estar = to be (location, condition)
estoy = I am
¿dónde está? = where is it?
el baño = bathroom, toilet
la calle = street
el barrio = neighbourhood
la plaza = square
el pueblo = village, small town
allí = there
cerca = near, nearby
lejos = far (away)
en casa = at home
`,
      phrases: `
¿Dónde está la estación? = Where is the station?
Estoy en casa. = I'm at home.
Sevilla está en el sur de España. = Seville is in the south of Spain.
¿Estáis en Madrid? = Are you (all) in Madrid?
El baño está allí. = The toilet is over there.
Mi casa está cerca del centro. = My house is near the centre.
`,
      drills: `
¿Dónde ___ el baño? => está | es | esta | están # Where is the toilet?
Yo ___ en la oficina. => estoy | soy | está | estás # I'm at the office.
Mis padres ___ en Egipto. => están | son | estamos | está # My parents are in Egypt.
Toledo ___ cerca de Madrid. => está | es | esta | hay # Toledo is near Madrid.
¿Vosotros ___ en casa? => estáis | estamos | están | sois # Are you (all) at home?
Madrid ___ la capital de España. => es | está | esta | están # Madrid is the capital of Spain.
`,
    },
    {
      t: 'Feelings · ser or estar?',
      k: 'grammar',
      goal: 'Say how you feel and choose between ser and estar',
      body: `
## Estar for states and feelings
Use **estar** for how someone or something **is right now**:
> Estoy cansado. = I'm tired.
> ¿Estás bien? = Are you OK?
> María está enferma. = María is ill.
> Estamos muy contentos. = We're very happy.
> El café está frío. = The coffee is cold.

| Feeling | |
|---|---|
| {cansado / cansada} | tired |
| {contento / contenta} | happy, pleased |
| {triste} | sad |
| {enfermo / enferma} | ill |
| {nervioso / nerviosa} | nervous |
| {enfadado / enfadada} | angry (Spain) |
| {ocupado / ocupada} | busy |
| {aburrido / aburrida} | bored |

## Ser or estar?
| ser — what something IS | estar — how / where it IS |
|---|---|
| identity, origin, job: {Soy médico.} | location: {Estoy en Madrid.} |
| character, description: {Es simpática.} | feelings, states: {Está contenta.} |
| time and dates: {Son las tres.} | results of a change: {La puerta está abierta.} |

!tip: Some adjectives change meaning: {Es aburrido} = he's boring, {Está aburrido} = he's bored. {Es listo} = he's clever, {Está listo} = he's ready.
!de: German has one "sein"; Spanish splits it. Think: ser ≈ das Wesen (what it is), estar ≈ der Zustand (how or where it is now).
!ar: A handy rule: if it's a حال — a state like tired, happy, ill — Spanish uses {estar}.
`,
      words: `
cansado, cansada = tired
contento, contenta = happy, pleased
triste = sad
enfermo, enferma = ill
nervioso, nerviosa = nervous
enfadado, enfadada = angry (Spain)
ocupado, ocupada = busy
aburrido, aburrida = bored; boring (with ser)
listo, lista = ready; clever (with ser)
frío, fría = cold
abierto, abierta = open
¿qué te pasa? = what's wrong?
`,
      phrases: `
¿Cómo estás? — Estoy un poco cansado. = How are you? — I'm a bit tired.
¿Qué te pasa? ¿Estás triste? = What's wrong? Are you sad?
Mi hermana está enferma hoy. = My sister is ill today.
Estamos muy contentos con el piso. = We're very happy with the flat.
¿Estás listo? — ¡Sí, vamos! = Are you ready? — Yes, let's go!
La sopa está fría. = The soup is cold.
`,
      drills: `
Hoy ___ muy cansada. => estoy | soy | es | está # Today I'm very tired.
Mi novio ___ ingeniero. => es | está | están | son # My boyfriend is an engineer.
Los niños ___ aburridos. => están | son | está | es # The children are bored.
¿Por qué ___ triste, Ana? => estás | eres | está | es # Why are you sad, Ana?
Mi profesora ___ muy simpática. => es | está | son | esta # My teacher is very nice.
La puerta ___ abierta. => está | es | hay | son # The door is open.
`,
    },
    {
      t: 'Hay — there is, there are',
      k: 'grammar',
      goal: 'Say what there is in a place and tell hay and está apart',
      body: `
## Hay
**Hay** means "there is" *and* "there are" — one form for everything:
> Hay un banco en la plaza. = There's a bank in the square.
> Hay muchos bares en mi calle. = There are lots of bars in my street.
> ¿Hay una farmacia por aquí? = Is there a chemist's around here?
> No hay leche. = There's no milk.

## Hay or está?
| hay | está / están |
|---|---|
| says that something exists | says where a specific thing is |
| {Hay un supermercado cerca.} | {El supermercado está cerca.} |
| + {un, una, unos, muchos, dos…} or nothing | + {el, la, los, mi, tu…} |

!tip: Never put {el} or {la} after hay: {Hay un hospital}, not "hay el hospital".
!de: {hay} = "es gibt" — one invariable form, just like German.
!ar: {hay} ≈ يوجد / هناك: {Hay un banco} ≈ يوجد بنك.

## Places in town
{el supermercado}, {la farmacia}, {el banco}, {el hospital}, {la estación}, {el restaurante}, {el bar}, {la tienda}, {el museo}, {la mezquita} (mosque), {la iglesia} (church), {el parque}.
`,
      words: `
hay = there is, there are
el supermercado = supermarket
la farmacia = chemist's, pharmacy
la estación = station
el restaurante = restaurant
el bar = bar, café
la tienda = shop
el museo = museum
la iglesia = church
la mezquita = mosque
el parque = park
por aquí = around here
`,
      phrases: `
¿Hay un supermercado por aquí? = Is there a supermarket around here?
Hay dos farmacias en mi calle. = There are two chemist's in my street.
En mi barrio hay muchos parques. = There are lots of parks in my neighbourhood.
El museo está en la plaza. = The museum is in the square.
No hay pan. = There's no bread.
¿Qué hay en tu ciudad? = What is there in your city?
`,
      drills: `
___ un banco en la plaza. => Hay | Está | Es | Son # There's a bank in the square.
El banco ___ en la plaza. => está | hay | es | están # The bank is in the square.
¿___ una farmacia por aquí? => Hay | Está | Es | Tiene # Is there a chemist's around here?
En Madrid ___ muchos museos. => hay | están | son | tiene # There are lots of museums in Madrid.
¿Dónde ___ los baños? => están | hay | son | está # Where are the toilets?
No ___ leche en la nevera. => hay | está | es | son # There's no milk in the fridge.
`,
    },
    {
      t: 'Next to, behind, opposite…',
      k: 'vocab',
      goal: 'Say exactly where things are with prepositions of place',
      body: `
## Prepositions of place
| | |
|---|---|
| {al lado de} | next to |
| {cerca de} | near |
| {lejos de} | far from |
| {delante de} | in front of |
| {detrás de} | behind |
| {enfrente de} | opposite |
| {encima de} | on top of |
| {debajo de} | under |
| {entre … y …} | between … and … |
| {a la derecha de} | to the right of |
| {a la izquierda de} | to the left of |
| {dentro de} | inside |

!tip: **de + el = del**: {al lado del banco}, {cerca del parque} — but {cerca de la estación}.

> La farmacia está al lado del banco. = The chemist's is next to the bank.
> El gato está debajo de la mesa. = The cat is under the table.
> Mi casa está entre el parque y el colegio. = My house is between the park and the school.

!de: No cases to worry about: {delante de la casa} = vor dem Haus — always {de}.
!ar: {encima de} ≈ فوق، {debajo de} ≈ تحت، {al lado de} ≈ بجانب، {delante de} ≈ أمام، {detrás de} ≈ وراء.
`,
      words: `
al lado de = next to
cerca de = near
lejos de = far from
delante de = in front of
detrás de = behind
enfrente de = opposite
encima de = on top of
debajo de = under
entre = between, among
a la derecha = on the right
a la izquierda = on the left
el colegio = school
el gato = cat
`,
      phrases: `
La farmacia está al lado del banco. = The chemist's is next to the bank.
El gato está debajo de la mesa. = The cat is under the table.
Mi casa está enfrente del parque. = My house is opposite the park.
Las llaves están encima de la mesa. = The keys are on the table.
El baño está a la derecha. = The toilet is on the right.
El colegio está lejos de mi casa. = The school is far from my house.
`,
      drills: `
El gato está ___ la mesa. (under) => debajo de | encima de | delante de | al lado de # The cat is under the table.
La farmacia está al lado ___ banco. => del | de el | de | al # The chemist's is next to the bank.
El parque está ___ la estación. (opposite) => enfrente de | detrás de | dentro de | entre # The park is opposite the station.
Mi casa está ___ el bar y la farmacia. => entre | al lado | cerca | debajo # My house is between the bar and the chemist's.
El baño está a la ___. (left) => izquierda | derecha | lado | delante # The toilet is on the left.
`,
    },
    {
      t: 'My home — mi casa',
      k: 'vocab',
      goal: 'Describe your home: rooms and furniture',
      body: `
## Rooms
{el salón} (living room), {la cocina} (kitchen), {el dormitorio} (bedroom), {el baño} (bathroom), {el comedor} (dining room), {el pasillo} (hallway), {la terraza} (terrace, balcony), {el jardín} (garden).

## Furniture & things
{la cama} (bed), {el sofá} (sofa), {la mesa} (table), {la silla} (chair), {el armario} (wardrobe, cupboard), {la nevera} (fridge), {la lavadora} (washing machine), {la estantería} (shelves), {la lámpara} (lamp).

> Vivo en un piso de dos dormitorios. = I live in a two-bedroom flat.
> El piso tiene un salón grande y una cocina pequeña. = The flat has a big living room and a small kitchen.
> En mi dormitorio hay una cama, un armario y una mesa. = In my bedroom there's a bed, a wardrobe and a desk.

!es: Most city dwellers in Spain live in **pisos** (flats) in apartment blocks, often with a {terraza} or {balcón}. Floors are counted {primero}, {segundo}… and the ground floor is {la planta baja}.
!tip: Asking about a flat: {¿Cuántos dormitorios tiene?} {¿Tiene terraza?} {¿Está amueblado?} (Is it furnished?)
`,
      words: `
el salón = living room
la cocina = kitchen
el dormitorio = bedroom
el comedor = dining room
la terraza = terrace, balcony
el jardín = garden
la cama = bed
el sofá = sofa
la silla = chair
el armario = wardrobe, cupboard
la nevera = fridge
la lavadora = washing machine
la planta baja = ground floor
`,
      phrases: `
Vivo en un piso de dos dormitorios. = I live in a two-bedroom flat.
La cocina es pequeña pero muy bonita. = The kitchen is small but very nice.
En el salón hay un sofá y una televisión. = In the living room there's a sofa and a TV.
¿El piso tiene terraza? = Does the flat have a terrace?
Mi dormitorio está al lado del baño. = My bedroom is next to the bathroom.
Vivimos en la planta baja. = We live on the ground floor.
`,
      drills: `
Duermo en el ___. => dormitorio | salón | comedor | jardín # I sleep in the bedroom.
Cocinamos en la ___. => cocina | cama | terraza | silla # We cook in the kitchen.
La leche está en la ___. => nevera | lavadora | cama | silla # The milk is in the fridge.
En el salón ___ un sofá muy grande. => hay | está | es | son # There's a very big sofa in the living room.
La ropa está en el ___. => armario | sofá | jardín | comedor # The clothes are in the wardrobe.
`,
    },
    {
      t: 'Asking the way',
      k: 'talk',
      goal: 'Ask for directions and understand the answer',
      body: `
## Asking for directions
> Perdone, ¿dónde está la estación? = Excuse me, where's the station? (formal)
> Perdona, ¿hay un banco por aquí? = Excuse me, is there a bank around here? (informal)
> ¿Está lejos? = Is it far?
> ¿Cómo llego al museo? = How do I get to the museum?

## Understanding the answer
> Sigue todo recto. = Go straight on.
> Gira a la derecha. = Turn right.
> Gira a la izquierda. = Turn left.
> Toma la segunda calle a la izquierda. = Take the second street on the left.
> Cruza la plaza. = Cross the square.
> Está a cinco minutos andando. = It's five minutes on foot.
> Está al final de la calle. = It's at the end of the street.

!tip: Directions use the **command** form. {Sigue}, {gira}, {toma}, {cruza} talk to {tú}; to {usted} people say {siga}, {gire}, {tome}, {cruce}. You'll learn commands properly in week 15 — for now just recognise them.
!es: Spaniards love landmarks: {Pasa el bar y después del semáforo, a la izquierda.} (Go past the bar, and after the traffic lights turn left.)
!ar: {todo recto} ≈ على طول، {a la derecha} ≈ على اليمين، {a la izquierda} ≈ على اليسار.
`,
      words: `
perdone = excuse me (formal)
perdona = excuse me (informal)
todo recto = straight on
girar = to turn
seguir = to continue, to follow
cruzar = to cross
la esquina = corner
el semáforo = traffic lights
primero, primera = first
segundo, segunda = second
el minuto = minute
andando = on foot
`,
      phrases: `
Perdone, ¿dónde está la estación? = Excuse me, where is the station?
¿Está lejos? — No, está a cinco minutos. = Is it far? — No, it's five minutes away.
Sigue todo recto y gira a la derecha. = Go straight on and turn right.
Toma la primera calle a la izquierda. = Take the first street on the left.
Cruza la plaza y está en la esquina. = Cross the square and it's on the corner.
Muchas gracias. — De nada. = Thank you very much. — You're welcome.
`,
      drills: `
Perdone, ¿___ está el museo? => dónde | qué | cómo | cuándo # Excuse me, where is the museum?
Sigue todo ___. => recto | derecha | izquierda | cerca # Go straight on.
Gira a la ___. (right) => derecha | izquierda | esquina | recta # Turn right.
Toma la ___ calle a la izquierda. (second) => segunda | segundo | dos | doble # Take the second street on the left.
Está ___ cinco minutos andando. => a | en | de | por # It's five minutes on foot.
`,
    },
  ],
  story: {
    title: '¿Dónde está la farmacia?',
    text: `
Anna está en Madrid desde el lunes. Vive en un piso pequeño en el barrio de Lavapiés.
= Anna has been in Madrid since Monday. She lives in a small flat in the Lavapiés neighbourhood.

Hoy Anna no está bien: está cansada y un poco enferma. Necesita una farmacia.
= Today Anna isn't well: she's tired and a bit ill. She needs a chemist's.

En la calle, Anna habla con una señora mayor. —Perdone, ¿hay una farmacia por aquí?
= In the street, Anna talks to an elderly lady. "Excuse me, is there a chemist's around here?"

—Sí, hay una muy cerca. Sigue todo recto, toma la segunda calle a la derecha y la farmacia está enfrente del parque.
= "Yes, there's one very close. Go straight on, take the second street on the right, and the chemist's is opposite the park."

—¿Está lejos? —No, no. Está a cinco minutos andando.
= "Is it far?" "No, no. It's five minutes on foot."

Anna encuentra la farmacia sin problemas. Al lado hay un supermercado, y Anna compra fruta, leche y pan.
= Anna finds the chemist's without any trouble. Next door there's a supermarket, and Anna buys fruit, milk and bread.

Por la tarde está en casa, en el sofá del salón. Ya está mucho mejor y está contenta: ¡su barrio es perfecto!
= In the afternoon she's at home, on the living-room sofa. She's already much better and she's happy: her neighbourhood is perfect!
`,
    questions: `
¿Dónde vive Anna? => En Lavapiés | En Sevilla | En Hamburgo # Where does Anna live?
¿Cómo está Anna hoy? => Cansada y un poco enferma | Muy contenta | Aburrida # How is Anna today?
¿Dónde está la farmacia? => Enfrente del parque | Al lado de la estación | Lejos del centro # Where is the chemist's?
¿Qué hay al lado de la farmacia? => Un supermercado | Un museo | Un bar # What is next to the chemist's?
`,
  },
}

export default w
