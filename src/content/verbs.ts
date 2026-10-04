/* Verb list for the conjugator, the verb trainer and tap-to-translate.
   Format: infinitive | English | flags | level
   flags: ie / ue / i / u>ue (stem changes), í / ú (written accent, envío), =base (compound: mantener → =tener).
   Spelling changes (-car, -gar, -zar, -ger, -guir, -cer, -uir …) and the big irregulars are detected automatically. */
import { setFlagLookup } from '../lib/conjugate'
import type { Level } from './types'

const DATA = `
ser|to be (identity, origin, time)||A1
estar|to be (location, condition)||A1
tener|to have||A1
haber|to have (auxiliary) · hay = there is/are||A1
hacer|to do, to make||A1
ir|to go||A1
venir|to come||A1
poder|can, to be able to||A1
querer|to want; to love (a person)||A1
decir|to say, to tell||A1
ver|to see, to watch||A1
dar|to give||A1
saber|to know (facts), to know how to||A1
conocer|to know (people, places), to meet||A1
hablar|to speak, to talk||A1
llamarse|to be called (name)||A1
llamar|to call||A1
vivir|to live||A1
trabajar|to work||A1
estudiar|to study||A1
comer|to eat; to have lunch||A1
beber|to drink||A1
leer|to read||A1
escribir|to write||A1
escuchar|to listen (to)||A1
mirar|to look (at), to watch||A1
aprender|to learn||A1
comprender|to understand||A1
entender|to understand|ie|A1
abrir|to open||A1
cerrar|to close|ie|A1
comprar|to buy||A1
pagar|to pay||A1
tomar|to take; to have (food/drink)||A1
necesitar|to need||A1
gustar|to like (lit. to please)||A1
encantar|to love (things), to delight||A1
preferir|to prefer|ie|A1
pensar|to think|ie|A1
empezar|to start, to begin|ie|A1
jugar|to play (games, sports)|u>ue|A1
dormir|to sleep|ue|A1
volver|to return, to come back|ue|A1
salir|to go out, to leave||A1
llegar|to arrive||A1
poner|to put||A1
traer|to bring||A1
pedir|to ask for, to order|i|A1
repetir|to repeat|i|A1
servir|to serve|i|A1
costar|to cost|ue|A1
levantarse|to get up||A1
ducharse|to have a shower||A1
acostarse|to go to bed|ue|A1
despertarse|to wake up|ie|A1
vestirse|to get dressed|i|A1
lavarse|to wash (oneself)||A1
peinarse|to comb one's hair||A1
afeitarse|to shave||A1
desayunar|to have breakfast||A1
almorzar|to have lunch / a mid-morning snack|ue|A1
cenar|to have dinner||A1
cocinar|to cook||A1
limpiar|to clean||A1
lavar|to wash||A1
viajar|to travel||A1
caminar|to walk||A1
pasear|to go for a walk||A1
correr|to run||A1
nadar|to swim||A1
bailar|to dance||A1
cantar|to sing||A1
tocar|to touch; to play (an instrument)||A1
llevar|to carry, to take; to wear||A1
buscar|to look for||A1
encontrar|to find|ue|A1
esperar|to wait; to hope||A1
ayudar|to help||A1
usar|to use||A1
preguntar|to ask (a question)||A1
contestar|to answer||A1
responder|to answer, to reply||A1
vender|to sell||A1
recibir|to receive||A1
subir|to go up; to upload||A1
bajar|to go down; to download||A1
entrar|to enter, to go in||A1
descansar|to rest||A1
practicar|to practise||A1
llover|to rain|ue|A1
nevar|to snow|ie|A1
doler|to hurt, to ache|ue|A1
visitar|to visit||A1
terminar|to finish||A1
deber|must, should; to owe||A1
creer|to believe, to think||A1
coger|to take, to catch (Spain)||A1
conducir|to drive (Spain)||A1
saludar|to greet||A1
presentar|to introduce, to present||A1
girar|to turn||A1
cruzar|to cross||A1
celebrar|to celebrate||A1
cumplir|to turn (age), to fulfil||A1
quedar|to meet up; to be left; to be located||A1
apetecer|to fancy, to feel like (Spain)||A2
recordar|to remember|ue|A2
olvidar|to forget||A2
perder|to lose; to miss (a bus)|ie|A2
ganar|to win; to earn||A2
cambiar|to change||A2
mandar|to send; to order||A2
enviar|to send|í|A2
contar|to count; to tell (a story)|ue|A2
mostrar|to show|ue|A2
enseñar|to teach; to show||A2
explicar|to explain||A2
alquilar|to rent||A2
reservar|to book, to reserve||A2
mudarse|to move (house)||A2
nacer|to be born||A2
morir|to die|ue|A2
casarse|to get married||A2
crecer|to grow (up)||A2
parecer|to seem, to look like||A2
ofrecer|to offer||A2
seguir|to follow; to continue|i|A2
conseguir|to get, to manage to|i|A2
elegir|to choose|i|A2
escoger|to choose||A2
sentir|to feel; to be sorry|ie|A2
sentirse|to feel (well, sad…)|ie|A2
divertirse|to have fun|ie|A2
quedarse|to stay||A2
dejar|to leave (something); to let||A2
pasar|to pass; to happen; to spend (time)||A2
romper|to break||A2
caer|to fall||A2
caerse|to fall over||A2
oír|to hear||A2
reír|to laugh||A2
reírse|to laugh (at)||A2
sonreír|to smile|=reír|A2
construir|to build||A2
traducir|to translate||A2
andar|to walk||A2
devolver|to give back, to return|=volver|A2
describir|to describe||A2
ponerse|to put on (clothes); to become||A2
irse|to leave, to go away||A2
dormirse|to fall asleep|ue|A2
sentarse|to sit down|ie|A2
preocuparse|to worry||A2
enfadarse|to get angry (Spain)||A2
aburrirse|to get bored||A2
equivocarse|to make a mistake||A2
acordarse|to remember|ue|A2
maquillarse|to put on make-up||A2
quitarse|to take off (clothes)||A2
probar|to try, to taste|ue|A2
probarse|to try on|ue|A2
planchar|to iron||A2
fregar|to wash up, to mop|ie|A2
barrer|to sweep||A2
ordenar|to tidy (up)||A2
sacar|to take out||A2
arreglar|to fix; to tidy||A2
cortar|to cut||A2
calentar|to heat (up)|ie|A2
mezclar|to mix||A2
añadir|to add||A2
pesar|to weigh||A2
medir|to measure|i|A2
despedirse|to say goodbye|i|A2
ahorrar|to save (money)||A2
gastar|to spend (money)||A2
cobrar|to charge; to get paid||A2
soler|to usually (do)|ue|A2
acabar|to finish; acabar de = to have just||A2
intentar|to try||A2
esquiar|to ski|í|A2
guardar|to keep, to save||A2
odiar|to hate||A2
invitar|to invite||A2
importar|to matter, to mind||A2
interesar|to interest||A2
cuidar|to look after||A2
apagar|to turn off||A2
encender|to turn on, to light|ie|A2
funcionar|to work (machines)||A2
compartir|to share||A2
tirar|to throw (away); to pull||A2
recoger|to pick up, to collect||A2
fumar|to smoke||A2
toser|to cough||A2
romperse|to break (a bone…)||A2
aparcar|to park (Spain)||A2
parar|to stop||A2
tardar|to take (time)||A2
volar|to fly|ue|A2
facturar|to check in (luggage)||A2
alojarse|to stay (hotel)||A2
disfrutar|to enjoy||A2
relajarse|to relax||A2
cansarse|to get tired||A2
montar|to ride||A2
pintar|to paint||A2
dibujar|to draw||A2
entrenar|to train||A2
organizar|to organise||A2
preparar|to prepare||A2
decidir|to decide||A2
mover|to move|ue|A2
comenzar|to begin|ie|A2
meter|to put in||A2
prestar|to lend||A2
regalar|to give (as a present)||A2
llenar|to fill||A2
secar|to dry||A2
quitar|to remove, to take away||A2
llorar|to cry||A2
charlar|to chat||A2
perdonar|to forgive||A2
cambiarse|to get changed||A2
enfermar|to get ill||A2
nacer|to be born||A2
resolver|to solve, to resolve|ue|B1
destruir|to destroy||B1
incluir|to include||B1
huir|to flee||B1
disminuir|to decrease||B1
contribuir|to contribute||B1
producir|to produce||B1
reducir|to reduce||B1
caber|to fit||B1
valer|to be worth; ¡vale! = OK||B1
cubrir|to cover||B1
descubrir|to discover|=cubrir|B1
mantener|to maintain, to keep|=tener|B1
obtener|to obtain|=tener|B1
detener|to stop, to arrest|=tener|B1
contener|to contain|=tener|B1
sostener|to hold, to support|=tener|B1
componer|to compose|=poner|B1
proponer|to propose|=poner|B1
suponer|to suppose|=poner|B1
deshacer|to undo; to unpack|=hacer|B1
prever|to foresee|=ver|B1
convenir|to suit; to agree|=venir|B1
atraer|to attract|=traer|B1
distraer|to distract|=traer|B1
envolver|to wrap|=volver|B1
quejarse|to complain||B1
reparar|to repair||B1
hervir|to boil|ie|B1
contratar|to hire||B1
despedir|to dismiss, to fire; to see off|i|B1
jubilarse|to retire||B1
invertir|to invest|ie|B1
tratar|to treat; tratar de = to try to||B1
lograr|to achieve||B1
evitar|to avoid||B1
permitir|to allow||B1
prohibir|to forbid|í|B1
reunirse|to meet, to get together|ú|B1
continuar|to continue|ú|B1
actuar|to act||B1
graduarse|to graduate|ú|B1
confiar|to trust|í|B1
amar|to love||B1
besar|to kiss||B1
abrazar|to hug||B1
aceptar|to accept||B1
rechazar|to reject||B1
discutir|to argue; to discuss||B1
opinar|to think, to have an opinion||B1
dudar|to doubt||B1
negar|to deny|ie|B1
afirmar|to state, to claim||B1
sugerir|to suggest|ie|B1
recomendar|to recommend|ie|B1
aconsejar|to advise||B1
exigir|to demand||B1
alegrarse|to be glad||B1
molestar|to bother||B1
preocupar|to worry (someone)||B1
faltar|to be missing, to lack||B1
sobrar|to be left over||B1
ocurrir|to happen, to occur||B1
suceder|to happen||B1
envejecer|to grow old||B1
mejorar|to improve||B1
empeorar|to get worse||B1
aumentar|to increase||B1
reciclar|to recycle||B1
contaminar|to pollute||B1
proteger|to protect||B1
salvar|to save, to rescue||B1
navegar|to sail; to browse (the web)||B1
descargar|to download||B1
grabar|to record||B1
publicar|to publish, to post||B1
informar|to inform||B1
anunciar|to announce; to advertise||B1
comunicar|to communicate||B1
imaginar|to imagine||B1
soñar|to dream|ue|B1
desear|to wish||B1
lamentar|to regret, to be sorry||B1
echar|to throw; to pour; echar de menos = to miss||B1
empujar|to push||B1
dirigir|to direct, to manage||B1
corregir|to correct|i|B1
convertirse|to become (turn into)|ie|B1
hacerse|to become (by effort)||B1
volverse|to become (sudden change)|ue|B1
llevarse|to get on (bien/mal)||B1
enamorarse|to fall in love||B1
separarse|to separate||B1
divorciarse|to get divorced||B1
pelearse|to fight, to fall out||B1
acostumbrarse|to get used to||B1
atreverse|to dare||B1
arrepentirse|to regret|ie|B1
sufrir|to suffer||B1
curar|to cure, to heal||B1
respirar|to breathe||B1
aterrizar|to land||B1
despegar|to take off||B1
competir|to compete|i|B1
participar|to take part||B1
apoyar|to support||B1
votar|to vote||B1
luchar|to fight, to struggle||B1
defender|to defend|ie|B1
gobernar|to govern|ie|B1
consumir|to consume||B1
desarrollar|to develop||B1
investigar|to research, to investigate||B1
inventar|to invent||B1
crear|to create||B1
diseñar|to design||B1
solucionar|to solve||B1
existir|to exist||B1
depender|to depend||B1
pertenecer|to belong||B1
merecer|to deserve||B1
agradecer|to thank, to be grateful for||B1
obedecer|to obey||B1
aparecer|to appear||B1
desaparecer|to disappear||B1
establecer|to establish||B1
reconocer|to recognise; to admit||B1
convencer|to convince||B1
mentir|to lie|ie|B1
advertir|to warn|ie|B1
colgar|to hang (up)|ue|B1
temer|to fear||B1
callarse|to keep quiet||B1
gritar|to shout||B1
prometer|to promise||B1
disculparse|to apologise||B1
extrañar|to miss (someone); to surprise||B1
vaciar|to empty|í|B1
brillar|to shine||B1
fascinar|to fascinate||B1
comprometerse|to commit (oneself)||B1
imprimir|to print||B1
`

export interface VerbInfo {
  inf: string
  en: string
  flags: string
  level: Level
}

export const VERBS: VerbInfo[] = []
const byInf = new Map<string, VerbInfo>()
for (const line of DATA.split('\n')) {
  const t = line.trim()
  if (!t) continue
  const [inf, en, flags, level] = t.split('|')
  if (byInf.has(inf)) continue
  const v: VerbInfo = { inf, en, flags: flags ?? '', level: (level as Level) || 'B1' }
  VERBS.push(v)
  byInf.set(inf, v)
}

setFlagLookup((inf) => byInf.get(inf)?.flags ?? '')

export function verbInfo(inf: string): VerbInfo | undefined {
  return byInf.get(inf)
}

/** short labels describing why a verb is irregular */
export function verbTags(v: VerbInfo): string[] {
  const tags: string[] = []
  const f = v.flags
  if (f.includes('u>ue')) tags.push('u → ue')
  else if (/(^|,)ie($|,)/.test(f)) tags.push(/[ií]r(se)?$/.test(v.inf) ? 'e → ie / i' : 'e → ie')
  else if (/(^|,)ue($|,)/.test(f)) tags.push(/[ií]r(se)?$/.test(v.inf) ? 'o → ue / u' : 'o → ue')
  else if (/(^|,)i($|,)/.test(f)) tags.push('e → i')
  if (f.includes('í') || f.includes('ú')) tags.push('written accent')
  const base = /=(\S+)/.exec(f)?.[1]
  if (base) tags.push(`like ${base}`)
  const inf = v.inf.replace(/se$/, '')
  if (IRREGULAR.has(inf)) tags.push('irregular')
  else if (/[aeiou]c[eií]r$/.test(inf) && inf !== 'hacer' && inf !== 'decir') tags.push('-zc-')
  if (/ducir$/.test(inf)) tags.push('-uj- past')
  if (/[^gq]uir$/.test(inf)) tags.push('-y-')
  if (/(car|gar|zar)$/.test(inf)) tags.push('spelling change')
  if (/(ger|gir)$/.test(inf)) tags.push('g → j')
  if (/se$/.test(v.inf)) tags.push('reflexive')
  return tags
}

const IRREGULAR = new Set(['ser', 'estar', 'ir', 'haber', 'tener', 'venir', 'poner', 'salir', 'hacer', 'decir', 'traer', 'caer', 'oír', 'ver', 'dar', 'saber', 'caber', 'poder', 'querer', 'andar', 'valer', 'reír', 'morir', 'volver', 'resolver', 'abrir', 'cubrir', 'escribir', 'describir', 'romper', 'imprimir'])
