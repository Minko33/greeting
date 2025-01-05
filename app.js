if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service Worker registered:', registration);
    }).catch(error => {
        console.error('Service Worker registration failed:', error);
    });
}

const greetings = [
    { language: "French", greeting: "Bonjour", country: "France, Canada, several African countries", pronunciation: "Bon-zhoor" },
    { language: "German", greeting: "Hallo", country: "Germany, Austria, Switzerland", pronunciation: "Hah-loh" },
    { language: "Hindi", greeting: "नमस्ते (Namaste)", country: "India", pronunciation: "Nah-mah-stay" },
    { language: "Portuguese", greeting: "Olá", country: "Brazil, Portugal, Angola, Mozambique", pronunciation: "Oh-lah" },
    { language: "Spanish", greeting: "Hola", country: "Spain, Mexico, Argentina, many others", pronunciation: "Oh-lah" },
    { language: "Swedish", greeting: "Hej", country: "Sweden", pronunciation: "Hey" },
    { language: "Danish", greeting: "Hej", country: "Denmark", pronunciation: "Hey" },
    { language: "Norwegian", greeting: "Hallo", country: "Norway", pronunciation: "Hah-loh" },
    { language: "Finnish", greeting: "Hei", country: "Finland", pronunciation: "Hey" },
    { language: "Czech", greeting: "Ahoj", country: "Czech Republic", pronunciation: "Ah-hoy" },
    { language: "Turkish", greeting: "Merhaba", country: "Turkey", pronunciation: "Mehr-hah-bah" },
    { language: "Arabic", greeting: "السلام عليكم (As-salāmu ʿalaykum)", country: "Many Middle Eastern and North African countries", pronunciation: "As-sah-lahm ah-lay-koom" },
    { language: "Bengali", greeting: "হ্যালো (Hyālō)", country: "Bangladesh, India", pronunciation: "Hah-lo" },
    { language: "Russian", greeting: "Здравствуйте (Zdravstvuyte)", country: "Russia, Belarus, Kazakhstan, Kyrgyzstan", pronunciation: "Zdrah-stvooy-tyeh" },
    { language: "Indonesian", greeting: "Halo", country: "Indonesia", pronunciation: "Hah-lo" },
    { language: "Punjabi", greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akaal)", country: "India, Pakistan", pronunciation: "Saht Sree Ah-kahl" },
    { language: "Tamil", greeting: "வணக்கம் (Vaṇakkam)", country: "India, Sri Lanka, Singapore", pronunciation: "Vah-nah-kahm" },
    { language: "Vietnamese", greeting: "Xin chào", country: "Vietnam", pronunciation: "Sin chow" },
    { language: "Italian", greeting: "Ciao", country: "Italy, Switzerland", pronunciation: "Chow" },
    { language: "Sinhala", greeting: "ආයුබෝවන් (Āyubōvan)", country: "Sri Lanka", pronunciation: "Ah-yoo-boh-wahn" },
    { language: "Polish", greeting: "Cześć", country: "Poland", pronunciation: "Cheshch" },
    { language: "Persian", greeting: "سلام (Salām)", country: "Iran, Afghanistan, Tajikistan", pronunciation: "Sah-lahm" },
    { language: "Burmese", greeting: "မင်္ဂလာပါ (Mingalaba)", country: "Myanmar", pronunciation: "Min-gah-lah-bah" }
];

document.getElementById("generate-btn").addEventListener("click", () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("output").innerHTML = `
        <strong>Greeting:</strong> ${randomGreeting.greeting}<br>
        <strong>Language:</strong> ${randomGreeting.language}<br>
        <strong>Country:</strong> ${randomGreeting.country}<br>
        <strong>Pronunciation:</strong> ${randomGreeting.pronunciation}
    `;
});
