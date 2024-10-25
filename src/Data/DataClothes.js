const dataClothes = [
    {   
        id: 1,
        name: "Green Midi Dress",
        img: "green-midi",
        image: "https://www.lulus.com/images/product/xlarge/8041161_1591096.jpg?w=560&hdpi=1",
        description: "Dark Green Off-the-Shoulder Midi Dress",
        price: "30",
        category: "Dresses"
    },
    {   
        id: 2,
        name: "Black Bodysuit",
        img: "notched-strapless",
        image: "https://www.lulus.com/images/product/xlarge/7824341_613052.jpg?w=560&hdpi=1",
        description: "Dark Green Off-the-Shoulder Midi Dress",
        price: "28",
        category: "Tops"
    },
    {
        id: 3,
        name: "Denim Mini Skirt",
        img: "denim-mini",
        image: "https://www.lulus.com/images/product/xlarge/12011321_2485651.jpg?w=560&hdpi=1",
        description: "Denim Mini Skirt",
        price: "42",
        category: "Bottoms"
    },
    {
        id: 4,
        name: "Ankle Strap Heels",
        img: "ankle-strap",
        image: " https://www.lulus.com/images/product/xlarge/10735921_388672.jpg?w=560&hdpi=1",
        description: "Ankle Strap Heels",
        price: "29",
        category: "Shoes"
    },
    {
        id: 5,
        name: "White Lace Off-the-Shoulder",
        img: "white-lace",
        image: "https://www.lulus.com/images/product/xlarge/11134801_980302.jpg?w=560&hdpi=1",
        description: "White Lace Off-the-Shoulder Maxi Dress",
        price: "260",
        category: "Weddings"
    },
    {
        id: 6,
        name: "Pleated Midi Dress",
        img: "pleated-lace",
        image: "https://www.lulus.com/images/product/xlarge/4715490_888902.jpg?w=560&hdpi=1",
        description: "Emerald Green Tie-Strap Pleated Midi Dress",
        price: "39",
        category: "Dresses"
    },
    {
        id: 7,
        name: "Satin Asymmetrical",
        img: "satin-asymmetrical",
        image: "https://www.lulus.com/images/product/xlarge/10587881_2182536.jpg?w=560&hdpi=1",
        description: "Olive Green Satin Asymmetrical Midi Dress",
        price: "79",
        category: "Bestsellers"
    },
    {
        id: 8,
        name: "Ruffled Mini Dress",
        img: "ruffled-mini",
        image: "https://www.lulus.com/images/product/xlarge/10771301_2208356.jpg?w=560&hdpi=1",
        description: "Black Tulle Tiered Ruffled Mini Dress",
        price: "88",
        category: "Dresses"
    },
    {
        id: 9,
        name: "Trendy Finesse Top",
        img: "trendy-finesse",
        image: "https://www.lulus.com/images/product/xlarge/11825141_2452531.jpg?w=560&hdpi=1",
        description: "Trendy Finesse Taupe Abstract Mesh Ruched Off-the-Shoulder Top",
        price: "40",
        category: "Tops"
    },
    {
        id: 10,
        name: "Brown Crocodile Slides",
        img: "crocodile-pointed",
        image: "https://www.lulus.com/images/product/xlarge/4826450_907982.jpg?w=560&hdpi=1",
        description: "Brown Crocodile Embossed Pointed-Toe Slides",
        price: "32",
        category: "Shoes"
    },
    {
        id: 11,
        name: "Satin Wrap Dress",
        img: "satin-wrap",
        image: "https://www.lulus.com/images/product/xlarge/11164261_667762.jpg?w=560&hdpi=1",
        description: "Navy Blue Floral Print Satin Wrap Dress",
        price: "12",
        category: "Dresses" 
    },
    {
        id: 12,
        name: "Long Sleeve Mermaid",
        img: "mermaid",
        image: "https://www.lulus.com/images/product/xlarge/11981201_1949936.jpg?w=560&hdpi=1",
        description: "White Long Sleeve Mermaid Maxi Dress",
        price: "230",
        category: "Weddings"
    },
    {
        id: 13,
        name: "Bustier Midi Dress",
        img: "bustier-midi",
        image: "https://www.lulus.com/images/product/xlarge/11881721_2434991.jpg?w=560&hdpi=1",
        description: "White Sequin Pearl Bustier Midi Dress",
        price: "30",
        category: "Dresses"
    },
    { 
        id: 14,
        name: "Lace-Up Dress",
        img: "lace-updress",
        image: "https://www.lulus.com/images/product/xlarge/11828201_2411411.jpg?w=560&hdpi=1",
        description: "Satin Floral Lace-Up Midi Dress",
        price: "21",
        category: "Dresses"
    },
    {
        id: 15,
        name: "Beige Button Skirt",
        img: "beige-buttonskirt",
        image: "https://www.lulus.com/images/product/xlarge/8421561_1732916.jpg?w=560&hdpi=1",
        description: "Beige High-Waisted Side Button Midi Skirt",
        price: "47",
        category: "Bottoms"
    },
    {
        id: 16,
        name: "Romance White Dress",
        img: "romance-lace",
        image: "https://www.lulus.com/images/product/xlarge/7055976_1410376.jpg?w=560&hdpi=1",
        description: "Romance White Lace Sleeveless Mermaid Maxi Dress",
        price: "189",
        category: "Weddings"
    },
    {
        id: 17,
        name: "Red Mini Dress",
        img: "tie-strapmini",
        image: "https://www.lulus.com/images/product/xlarge/9186101_1844796.jpg?w=560&hdpi=1",
        description: "Red Tie-Strap Mini Dress",
        price: "59",
        category: "Dresses"
    },
    {
        id: 18,
        name: "Bow High Heel Sandals",
        img: "highheel-sandals",
        image: "https://www.lulus.com/images/product/xlarge/10929501_2246816.jpg?w=560&hdpi=1",
        description: "Bow Ankle Strap High Heel Sandals",
        price: "50",
        category: "Shoes"
    },

    {
        id: 19,
        name: "Light Nude Platform",
        img: "light-nude",
        image: "https://www.lulus.com/images/product/xlarge/8477661_1631396.jpg?w=560&hdpi=1",
        description: "Light Nude Suede Platform Wedges",
        price: "27",
        category: "Shoes"
    },
    {
        id: 20,
        name: "Tie-Strap Maxi Dress",
        img: "tiestrap-maxi",
        image: "https://www.lulus.com/images/product/xlarge/10284061_2072276.jpg?w=560&hdpi=1",
        description: "Floral Embroidered Tie-Strap Maxi Dress",
        price: "118",
        category: "Dresses"
    },
    {
        id: 21,
        name: "Pink Linen Top",
        img: "pink-linen",
        image: "https://www.lulus.com/images/product/xlarge/10431741_2137216.jpg?w=560&hdpi=1",
        description: "Pink Linen Long Sleeve Collared Button-Up Top",
        price: "30",
        category: "Tops"
    },

    {
        id: 22,
        name: "Lace-Up Mini Dress",
        img: "bodycon-mini",
        image: "https://www.lulus.com/images/product/xlarge/10843341_2223476.jpg?w=560&hdpi=1",
        description: "Light Pink Ruched Lace-Up Bodycon Mini Dress",
        price: "59",
        category: "Bestsellers"
    },
    {
        id: 23,
        name: "Jacquard Dress",
        img: "floral-jacquard",
        image: "https://www.lulus.com/images/product/xlarge/8504961_1706536.jpg?w=560&hdpi=1",
        description: "Simply Dreamy Emerald Green Satin Floral Jacquard Maxi Dress",
        price: "79",
        category: "Bestsellers"
    },
    {
        id: 24,
        name: "Blue Satin Dress",
        img: "bluesatin-one",
       image: "https://www.lulus.com/images/product/xlarge/9305861_1885936.jpg?w=560&hdpi=1",
       description: "Love Me Tonight Navy Blue Satin One-Shoulder Mini Dress",
       price: "69",
       category: "Bestsellers"
    },
{
    id: 25,
    name: "Ivory Lace Dress",
    img: "ivory-sleeveless",
    image: "https://www.lulus.com/images/product/xlarge/11147341_2302411.jpg?w=560&hdpi=1",
    description: "Ivory Lace Sleeveless Backless Trumpet Maxi Dress",
    price: "200",
    category: "Weddings"
},
    {
        id: 26,
        name: "Embroidered Dress",
        img: "embroidered-midi",
        image: "https://www.lulus.com/images/product/xlarge/10762961_2217376.jpg?w=560&hdpi=1",
        description: "Impressive Blossom Black 3D Floral Embroidered Midi Dress",
        price: "118",
        category: "Bestsellers"
    },
    {
        id: 27,
        name: "Blush Maxi Dress",
        img: "blush-maxi",
        image: "https://www.lulus.com/images/product/xlarge/11592541_304822.jpg?w=560&hdpi=1",
        description: "Heavenly Hues Blush Maxi Dress",
        price: "58",
        category: "Bestsellers"
    },
    {
        id: 28,
        name: "Champagne Dress",
        img: "champahne-sequin",
        image: "https://www.lulus.com/images/product/xlarge/11412661_857962.jpg?w=560&hdpi=1",
        description: "Get in the Groove Champagne Sequin Fringe Bodycon Dress",
        price: "78",
        category: "Bestsellers"
    },
    {
        id: 29,
        name: "Denim Skirt",
        img: "denimmini-skirt",
        image: "https://www.lulus.com/images/product/xlarge/7281336_1481656.jpg?w=560&hdpi=1",
        description: "Asymmetrical Denim Mini Skirt",
        price: "42",
        category: "Bottoms"
    },
    {
        id: 30,
        name: "Applique Bustier",
        img: "applique-bustier",
        image: "https://www.lulus.com/images/product/xlarge/11018561_2255216.jpg?w=560&hdpi=1",
        description: "Notable Elegance Black Mesh Floral Applique Bustier Midi Dress",
        price: "70",
        category: "Bestsellers"
    },
    {
        id: 31,
        name: "Ivory Linen Skirt",
        img: "ivory-linenskirt",
        image: "https://www.lulus.com/images/product/xlarge/11230881_2287691.jpg?w=560&hdpi=1",
        description: "Ivory Linen Button-Front Midi Skirt",
        price: "42",
        category: "Bottoms"
    },
    {
        id: 32,
        name: "Sequin Tank Top",
        img: "tank-top",
        image: "https://www.lulus.com/images/product/xlarge/12011021_2498111.jpg?w=560&hdpi=1",
        description: "White Sequin Backless Tank Top",
        price: "39",
        category: "Tops"
    },
    {
        id: 33,
        name: "Favorite Day",
        img: "favorite-navy",
        image: "https://www.lulus.com/images/product/xlarge/11669241_2406371.jpg?w=560&hdpi=1",
        description: "Favorite Day",
        price: "47",
        category: "Dresses"
    },
]
 export default dataClothes;