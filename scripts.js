document.addEventListener('DOMContentLoaded', function() {
    // Arrays of options
    const cities = [
        'Agadir', 'Al Hoceima', 'Azrou', 'Beni Mellal', 'Casablanca', 'El Jadida', 
        'El Kelaa des Sraghna', 'Errachidia', 'Fès', 'Ifrane', 'Kénitra', 
        'Khemisset', 'Khouribga', 'Marrakech', 'Meknès', 'Nador', 'Ouarzazate', 
        'Oujda', 'Rabat', 'Settat', 'Sidi Kacem', 'Sidi Slimane', 'Tangier', 
        'Taroudant', 'Temara', 'Tétouan'
    ];
    
    const nationalities = [
        'Marocain', 'Algérien', 'Tunisien', 'Libyen', 'Égyptien', 'Saoudien', 
        'Jordanie', 'Palestinien', 'Yéménite', 'Omanien', 'Émirati', 'Koweïtien', 
        'Qatari', 'Bahrainien', 'Sudanais', 'Somalien', 'Mauritanien', 'Comorien', 
        'Malgache', 'Réunionnais', 'Français', 'Espagnol', 'Italien', 'Allemand', 
        'Anglais', 'Américain', 'Canadien', 'Australien', 'Autre'
    ];
    
    const baccalaureatSeries = [
        'Sciences Mathématiques A', 'Sciences Mathématiques B', 'Sciences Expérimentales', 
        'Sciences Economiques', 'Sciences Sociales', 'Arts Plastiques', 
        'Langues Etrangères', 'Génie Electrique', 'Génie Mécanique', 'Génie Civil'
    ];

    // Function to populate a dropdown
    function populateDropdown(elementId, options) {
        const dropdown = document.getElementById(elementId);
        options.sort(); // Sort options alphabetically
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
        });
    }

    // Populate the dropdowns
    populateDropdown('city', cities);
    populateDropdown('nationality', nationalities);
    populateDropdown('baccalaureat', baccalaureatSeries);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var city = document.getElementById('city').value;
    var nationality = document.getElementById('nationality').value;
    var baccalaureat = document.getElementById('baccalaureat').value;
    var comment = document.getElementById('comment').value;
    
    var message = `Nom et prénom: ${name}\nTéléphone: ${phone}\nE-mail: ${email}\nDate de naissance: ${dob}\nVille/Pays de résidence: ${city}\nNationalité: ${nationality}\nSérie du baccalauréat: ${baccalaureat}\nCommentaire: ${comment}`;
    
    var whatsappUrl = `https://wa.me/212695944954?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});
