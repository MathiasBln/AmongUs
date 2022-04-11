
// Grille de la cafétéria
let grid_cafet = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur","mur"],
    ["mur", "mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "mur","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "table", "sol", "sol","mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "sol","mur"],
    ["mur", "porte","sol","sol", "sol", "sol", "table", "table","sol", "sol", "sol", "sol", "porte","mur"],
    ["mur", "porte","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "porte","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "sol","mur"],
    ["mur", "sol","sol", "table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "sol","mur"],
    ["mur", "mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur","mur"],
    ["mur", "mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "porte", "porte","mur", "mur", "mur", "mur", "mur","mur"],
]
// Grille de la cenrale
let grid_central = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","mur", "sol","sol", "sol", "pierre", "sol", "sol", "sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","mur","sol","sol", "pierre", "pierre", "pierre", "sol","sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","sol","sol", "pierre", "pierre", "pierre", "sol","sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "porte", "mur"],
    ["mur","mur","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "porte", "mur"],
    ["mur","mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
]
// Grille de la cuisine
let grid_kitchen = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur", "mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","porte","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","porte","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","porte", "sol","sol", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "table", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","porte","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "porte", "porte", "mur"],
    ["mur","porte","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "porte", "porte", "mur"],
    ["mur","sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur", "mur"],
]
// Grille de MedBay
let grid_medbay = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "porte", "porte", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur", "mur","mur","mur", "porte", "porte", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["mur", "lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur", "sol", "sol","sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur", "lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur","lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "sol", "sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
]
// Grille de navigation
let grid_navigation = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur","mur", "mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","porte","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","porte","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","porte","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "sol"],
    ["mur","mur","mur", "mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "sol", "sol"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "sol", "mur", "sol"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
]