# 🦅 PromoNest - Site Web v2

Site web moderne pour PromoNest avec design inspiré d'Ibotta.

## 📁 Structure des fichiers

```
promonest-v2/
├── index.html          # Page d'accueil moderne
├── inscription.html    # Page de formulaire
├── styles.css          # Styles principaux
├── form-styles.css     # Styles du formulaire
├── script.js           # JavaScript pour le formulaire
├── logo.png            # Votre logo PromoNest
└── README.md          # Ce fichier
```

## ✨ Nouveautés v2

### Design moderne inspiré d'Ibotta
- ✅ Fond dégradé coloré avec les couleurs du logo
- ✅ Logo PromoNest intégré dans la navigation
- ✅ Animations fluides sur les cards de produits
- ✅ Hero section dynamique avec statistiques
- ✅ Formulaire stylé avec validation en temps réel
- ✅ Message de confirmation animé
- ✅ Design 100% responsive (mobile, tablette, desktop)

### Fonctionnalités
- Page d'accueil attrayante
- Section "Comment ça marche" avec 3 étapes
- Exemple concret de surplus cashback
- Liste des plateformes surveillées
- Formulaire d'inscription complet
- Validation côté client
- Aucun backend requis (purement visuel)

## 🚀 Déploiement sur Netlify

### Méthode 1 : Drag & Drop (la plus simple)

1. **Allez sur Netlify**
   - Ouvrez [netlify.com](https://netlify.com)
   - Créez un compte gratuit (ou connectez-vous)

2. **Déployez votre site**
   - Cliquez sur "Add new site" > "Deploy manually"
   - Glissez-déposez **tout le dossier `promonest-v2`**
   - Votre site sera en ligne en quelques secondes !
   - Netlify vous donnera une URL temporaire (ex: `random-name-123.netlify.app`)

3. **Connectez votre domaine promonest.eu**
   - Dans Netlify : "Domain settings" > "Add custom domain"
   - Entrez `promonest.eu`
   - Netlify vous donnera des enregistrements DNS à configurer

4. **Configurez les DNS sur OVH**
   - Connectez-vous à votre espace client OVH
   - Allez dans la gestion de `promonest.eu`
   - Section "Zone DNS"
   - Ajoutez les enregistrements fournis par Netlify :
     * Type A : `185.199.108.153`
     * Type A : `185.199.109.153`
     * Type A : `185.199.110.153`
     * Type A : `185.199.111.153`
     * Ou suivez exactement les instructions de Netlify
   - Attendez 1-2h pour la propagation DNS

5. **C'est terminé ! 🎉**
   - Votre site sera accessible sur `https://promonest.eu`
   - Certificat SSL automatique (HTTPS)
   - Hébergement gratuit à vie

### Méthode 2 : Via GitHub (pour les développeurs)

1. **Créez un repository GitHub**
   - Créez un nouveau repo sur github.com
   - Uploadez tous les fichiers de `promonest-v2`

2. **Connectez à Netlify**
   - Sur Netlify : "Add new site" > "Import from Git"
   - Connectez votre compte GitHub
   - Sélectionnez le repo
   - Netlify déploiera automatiquement à chaque commit

3. **Configurez le domaine** (même méthode que ci-dessus)

## 🎨 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `styles.css` (lignes 8-17) :
```css
:root {
    --primary: #5B8DBE;        /* Bleu principal */
    --accent: #D4A574;          /* Accent doré */
    --success: #10b981;         /* Vert cashback */
    /* ... */
}
```

### Modifier les textes
Éditez directement dans `index.html` et `inscription.html`

### Ajouter des sections
Copiez/collez une section existante et modifiez le contenu

## 📱 Compatibilité

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablette (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🔧 Technologies utilisées

- HTML5
- CSS3 (animations, gradients, flexbox, grid)
- JavaScript vanilla (pas de framework)
- Design responsive natif

## ⚠️ Important

Ce site est **purement visuel** pour l'instant :
- Le formulaire ne stocke aucune donnée
- Aucun email n'est envoyé
- Le message de confirmation est simulé

Pour collecter réellement les données, vous devrez ajouter :
- Un backend (Node.js, PHP, Python)
- Une base de données (PostgreSQL, MongoDB)
- Ou un service tiers (Formspree, EmailJS, Google Sheets API)

## 💰 Coûts

- **Domaine promonest.eu** : ~10-15€/an (OVH)
- **Hébergement Netlify** : 0€ (gratuit à vie)
- **Total** : 10-15€/an

## 🆘 Besoin d'aide ?

Si vous rencontrez un problème :
1. Vérifiez que tous les fichiers sont bien dans le même dossier
2. Assurez-vous que `logo.png` est présent
3. Ouvrez la console du navigateur (F12) pour voir les erreurs
4. Vérifiez que les DNS sont bien configurés

---

**PromoNest** - Transformez vos achats en profits 🦅
