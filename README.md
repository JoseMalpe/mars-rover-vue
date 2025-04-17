# Mars Rover Mission (Vue 3)

Aquesta aplicació simula una missió d'exploració a Marte, un **rover** es controlat desde la Terra per comandaments remots. Desenvolupada com a prova técnica amb **Vue 3 + Vite**.

---

# Regles

- El rover s'inicia en una posició (x, y) i direcció (N, S, E, W).
- El rover rep les instruccions (ej: FFRFFLF).
- Instruccions vàlides:
  - F → Avança endevant.
  - L / R → Gira a l'esquerre / dreta.
- El planeta és una graella de 200x200 amb un comportament cirtular (si surt per un cantó, apareix per l'altre).
- Tenim obstacles: si el rover intenta moure's cap a una posició ocupada, s'atura i reporta l'obstacle.

---

## Tecnologies

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ESLint](https://eslint.org/) + configuración estándar de Vue

---

## Posar en marcha el projecte

bash
# Clonar el repo
git clone https://github.com/tu-usuario/mars-rover-mission.git
cd mars-rover-mission

# Instal·lar dependencias (amb compatibilidad)
npm install --legacy-peer-deps

# Executar servidor
npm run dev

---

## Estructura del projecte

src/
├── components/
│   ├── Grid.vue             # Mostra la graella de 200x200
│   └── RoverDisplay.vue     # Muestra el rover en pantalla
├── App.vue                  # Llògica principal i entrada de comandaments
├── roverEngine.js           # Llògica del moviment del rover

---

## Exemple d'ús

1. Introdueix posició inicial: (5,10) y direcció: N

2. Comandaments: (FFRFFLF)

3. Resultat: mostra la posició final o l'obstacle si és el cas

---

## Obstacles
Definits com a coordenades en App.vue. Exemple:

const obstacles = ref([
  { x: 3, y: 4 },
  { x: 1, y: 1 },
  { x: 7, y: 2 }
])


### Autor

Fet per Jose Maria Alcaraz per Housfy