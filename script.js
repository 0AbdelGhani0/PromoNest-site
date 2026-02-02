// Gestion du formulaire d'inscription
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscriptionForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi réel du formulaire

            // Validation simple
            const interet = document.getElementById('interet').value;
            if (interet.length < 20) {
                alert('Veuillez écrire au moins 20 caractères pour expliquer votre intérêt.');
                return;
            }

            // Animation du bouton
            const submitButton = form.querySelector('.submit-btn');
            const btnText = submitButton.querySelector('.btn-text');
            const originalText = btnText.textContent;
            
            btnText.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';

            // Simule un délai d'envoi
            setTimeout(function() {
                // Cache le formulaire avec animation
                form.style.opacity = '0';
                form.style.transform = 'translateY(-20px)';
                
                setTimeout(function() {
                    form.style.display = 'none';
                    
                    // Affiche le message de confirmation
                    confirmationMessage.style.display = 'block';
                    
                    // Scroll vers le haut pour voir le message
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 300);

                // Reset du formulaire (au cas où l'utilisateur revienne)
                setTimeout(function() {
                    form.reset();
                    btnText.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.opacity = '1';
                    form.style.opacity = '1';
                    form.style.transform = 'translateY(0)';
                }, 1000);
            }, 1500);
        });

        // Validation en temps réel pour le champ "intérêt"
        const interetField = document.getElementById('interet');
        const helperText = interetField.parentElement.querySelector('.helper-text');
        
        if (interetField && helperText) {
            interetField.addEventListener('input', function() {
                const length = this.value.length;
                if (length < 20) {
                    helperText.textContent = `${length}/20 caractères minimum`;
                    helperText.style.color = '#ef4444';
                } else {
                    helperText.textContent = `✓ ${length} caractères`;
                    helperText.style.color = '#10b981';
                }
            });
        }
    }
});
