
// Grille de la cafétéria
let grid_cafet = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur","mur"],
    ["mur", "mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "mur","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "table", "sol", "sol","mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "sol","mur"],
    ["mur", "portecent","sol","sol", "sol", "sol", "table", "table","sol", "sol", "sol", "sol", "portecui","mur"],
    ["mur", "portecent","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "portecui","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "sol","mur"],
    ["mur", "sol","sol", "table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "sol","mur"],
    ["mur", "mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur","mur"],
    ["mur", "mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "portemed", "portemed","mur", "mur", "mur", "mur", "mur","mur"],
]
// Grille de la centrale
let grid_central = [
    ["mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "sol", "sol","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur", "mur","sol", "sol", "sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","sol","sol", "pierre", "pierre", "pierre", "sol","sol", "sol", "sol", "sol", "mur"],
    ["mur","sol","sol", "pierre", "pierre", "pierre", "sol","sol", "sol", "sol", "sol", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "portecent_caf"],
    ["mur","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "portecent_caf"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur"],
    ["mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
]
// Grille de la cuisine
let grid_kitchen = [
    ["mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["portetroll","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["portetroll","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["portetroll", "sol","sol", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "table", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["portecui_caf","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "portecui-nav", "portecui-nav"],
    ["portecui_caf","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "portecui-nav", "portecui-nav"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
]
// Grille de MedBay
let grid_medbay = [
    ["mur","mur","mur", "portemed-caf", "portemed_caf", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "porte", "porte", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur", "sol","sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur", "mur", "mur"],
    ["lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["mur","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur"],
    ["mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur"],
]
// Grille de navigation
let grid_navigation = [
    ["mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "mur", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "mur", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur", "mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["portenav_cui","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["portenav_cui","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur", "mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "sol", "sol"],
    ["mur","mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
]