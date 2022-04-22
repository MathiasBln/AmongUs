
// Grille de la cafétéria
let grid_cafet = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","sol", "mur", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur","mur"],
    ["mur", "mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "mur","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "table", "sol", "sol","mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "sol","mur"],
    ["mur", "portecent","sol","sol", "sol", "sol", "table", "table","sol", "sol", "sol", "sol", "portekitch","mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "sol","mur"],
    ["mur", "sol","sol","table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "sol","mur"],
    ["mur", "sol","sol", "table", "table", "sol", "sol", "sol","table", "table", "sol", "sol", "sol","mur"],
    ["mur", "mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur","mur"],
    ["mur", "mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "portemed", "portemed","mur", "mur", "mur", "mur", "mur","mur"],
]
// Grille de la centrale
let grid_central = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "sol", "mur", "sol","sol", "mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","sol", "sol", "sol", "mur", "sol","sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","mur", "sol","sol", "sol", "pierre", "sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","sol","sol", "pierre", "pierre", "sol", "sol","sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","sol","mur", "pierre", "pierre", "sol", "sol","sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","sol","mur", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "portecent_cafet", "mur"],
    ["mur","mur","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "portecent_cafet", "mur"],
    ["mur","mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
]
// Grille de la cuisine
let grid_kitchen = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur", "mur"],
    ["mur", "mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","portedeath","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","portedeath","sol","sol", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","sol", "sol","sol", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "mur", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "sol", "sol", "sol", "mur","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol", "sol","sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur","portekitch_cafet","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "portenav", "portenav", "mur"],
    ["mur","portekitch_cafet","sol","sol", "sol", "mur", "mur", "mur","sol", "sol", "sol", "portenav", "portenav", "mur"],
    ["mur","sol","sol","sol", "sol", "mur", "mur", "mur","sol", "sol", "sol", "mur", "mur", "mur"],
]
// Grille de MedBay
let grid_medbay = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur", "mur","mur","mur", "portemed_cafet", "portemed_cafet", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur", "mur","mur","mur", "portemed_cafet", "portemed_cafet", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["mur", "lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur", "sol", "sol","sol", "sol", "sol", "sol", "sol", "sol", "mur", "mur", "mur", "mur"],
    ["mur", "lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur","lit","lit","sol", "sol", "sol", "sol", "lit","lit", "mur", "mur", "mur", "mur"],
    ["mur", "sol","sol","sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol", "sol", "sol", "sol", "sol", "sol","sol", "mur", "mur", "mur", "mur"],
    ["mur","sol","sol","sol", "sol", "sol", "sol", "sol", "sol", "mur", "sol", "mur", "mur"],
    ["mur","mur","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
]
// Grille de navigation
let grid_navigation = [
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol", "sol", "mur", "sol", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","sol", "mur", "sol", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "mur", "mur", "mur"],
    ["mur","mur", "mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "mur", "mur", "mur"],
    ["mur","portenav_kitch","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","portenav_kitch","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","portenav_kitch","sol","sol", "sol", "sol", "sol", "sol","sol", "sol", "sol", "sol", "sol"],
    ["mur","mur","mur", "mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "sol", "sol"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol", "sol", "sol", "sol", "mur", "sol"],
    ["mur","mur","mur","mur", "mur", "mur", "sol", "sol","sol", "sol", "sol", "mur", "mur"],
    ["mur","mur","mur","mur", "mur", "mur", "mur", "mur","mur", "mur", "mur", "mur", "mur","mur"],
]