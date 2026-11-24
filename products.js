// Base de données des produits (hauteurs approximatives en cm).
// Pour ajouter un produit : ajouter une ligne { name, heightCm } dans la bonne catégorie.
// Chargé via <script> (et non fetch) pour que le site marche aussi en ouvrant index.html directement.
window.PRODUCT_CATEGORIES = [
    {
        category: "Burgers",
        products: [
            { name: "Big Mac", heightCm: 8 },
            { name: "Big Tasty", heightCm: 7 },
            { name: "Royal Cheese", heightCm: 6 },
            { name: "Royal Deluxe", heightCm: 7 },
            { name: "Double Cheeseburger", heightCm: 5.5 },
            { name: "Cheeseburger", heightCm: 4 },
            { name: "Hamburger", heightCm: 3.5 }
        ]
    },
    {
        category: "Poulet & Poisson",
        products: [
            { name: "McChicken", heightCm: 7 },
            { name: "McCrispy", heightCm: 7 },
            { name: "Filet-O-Fish", heightCm: 6 },
            { name: "Chicken McNuggets (boîte de 6)", heightCm: 5 },
            { name: "McWrap Chicken Bacon", heightCm: 5 },
            { name: "Petit Wrap Ranch", heightCm: 4 }
        ]
    },
    {
        category: "Accompagnements",
        products: [
            { name: "Frites (moyenne)", heightCm: 13 },
            { name: "Potatoes (moyenne)", heightCm: 12 },
            { name: "Happy Meal (boîte)", heightCm: 12 }
        ]
    },
    {
        category: "Desserts",
        products: [
            { name: "McFlurry", heightCm: 13 },
            { name: "Sundae", heightCm: 9 },
            { name: "Cookie", heightCm: 1.5 }
        ]
    },
    {
        category: "Boissons",
        products: [
            { name: "Soda (gobelet moyen 40 cl)", heightCm: 15 },
            { name: "McCafé (gobelet café)", heightCm: 8 }
        ]
    }
];
