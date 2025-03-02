export const dealers = [
    {
        name: "MP Auto Hub",
        address: "101 Main Road, Bhopal, MP 462001",
        state: "Madhya Pradesh",
        district: "Bhopal",
        brand: "Maruti Suzuki"
    },
    {
        name: "Indore Wheels",
        address: "202 MG Road, Indore, MP 452001",
        state: "Madhya Pradesh",
        district: "Indore",
        brand: "Hyundai"
    },
    {
        name: "Gwalior Motors",
        address: "303 City Center, Gwalior, MP 474001",
        state: "Madhya Pradesh",
        district: "Gwalior",
        brand: "Honda"
    },
    {
        name: "Jabalpur Auto World",
        address: "404 Napier Town, Jabalpur, MP 482002",
        state: "Madhya Pradesh",
        district: "Jabalpur",
        brand: "Toyota"
    },
    {
        name: "Ujjain Car Mart",
        address: "505 Freeganj, Ujjain, MP 456001",
        state: "Madhya Pradesh",
        district: "Ujjain",
        brand: "Tata"
    },
    {
        name: "Satna Speed Motors",
        address: "606 Civil Lines, Satna, MP 485001",
        state: "Madhya Pradesh",
        district: "Satna",
        brand: "Mahindra"
    },
    {
        name: "Rewa Car Junction",
        address: "707 College Road, Rewa, MP 486001",
        state: "Madhya Pradesh",
        district: "Rewa",
        brand: "Ford"
    },
    {
        name: "Dewas Auto Hub",
        address: "808 AB Road, Dewas, MP 455001",
        state: "Madhya Pradesh",
        district: "Dewas",
        brand: "Chevrolet"
    },
    {
        name: "Sagar Car Palace",
        address: "909 Bus Stand Road, Sagar, MP 470001",
        state: "Madhya Pradesh",
        district: "Sagar",
        brand: "Renault"
    },
    {
        name: "Ratlam Auto Center",
        address: "1010 Railway Colony, Ratlam, MP 457001",
        state: "Madhya Pradesh",
        district: "Ratlam",
        brand: "Nissan"
    },
    {
        name: "Chhindwara Auto Plaza",
        address: "1111 Mall Road, Chhindwara, MP 480001",
        state: "Madhya Pradesh",
        district: "Chhindwara",
        brand: "Volkswagen"
    },
    {
        name: "Khargone Car Bazaar",
        address: "1212 MG Road, Khargone, MP 451001",
        state: "Madhya Pradesh",
        district: "Khargone",
        brand: "Kia"
    },
    {
        name: "Neemuch Auto Galaxy",
        address: "1313 Station Road, Neemuch, MP 458441",
        state: "Madhya Pradesh",
        district: "Neemuch",
        brand: "Skoda"
    },
    {
        name: "Shivpuri Car Plaza",
        address: "1414 Civil Lines, Shivpuri, MP 473551",
        state: "Madhya Pradesh",
        district: "Shivpuri",
        brand: "MG"
    },
    {
        name: "Vidisha Auto Mart",
        address: "1515 Main Market, Vidisha, MP 464001",
        state: "Madhya Pradesh",
        district: "Vidisha",
        brand: "Fiat"
    },
    {
        name: "Betul Car Point",
        address: "1616 Highway Road, Betul, MP 460001",
        state: "Madhya Pradesh",
        district: "Betul",
        brand: "Jeep"
    },
    {
        name: "Mandsaur Auto Hub",
        address: "1717 City Square, Mandsaur, MP 458001",
        state: "Madhya Pradesh",
        district: "Mandsaur",
        brand: "Datsun"
    },
    {
        name: "Sehore Car World",
        address: "1818 Bus Stand Road, Sehore, MP 466001",
        state: "Madhya Pradesh",
        district: "Sehore",
        brand: "Force Motors"
    },
    {
        name: "Hoshangabad Motors",
        address: "1919 GT Road, Hoshangabad, MP 461001",
        state: "Madhya Pradesh",
        district: "Hoshangabad",
        brand: "Opel"
    },
    {
        name: "Morena Car Experts",
        address: "2020 MG Road, Morena, MP 476001",
        state: "Madhya Pradesh",
        district: "Morena",
        brand: "Isuzu"
    },
    // Additional 30 dealers added in the same pattern
    ...Array.from({ length: 30 }, (_, i) => ({
        name: `MP Dealer ${i + 21}`,
        address: `${i + 21} Random Road, City ${i + 21}, MP 460000 + ${i}`,
        state: "Madhya Pradesh",
        district: `City ${i + 21}`,
        brand: ["Maruti Suzuki", "Hyundai", "Honda", "Toyota", "Tata", "Mahindra", "Ford", "Chevrolet", "Renault", "Nissan"][i % 10]
    }))
];
