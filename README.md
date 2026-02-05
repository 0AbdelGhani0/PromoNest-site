# 🦅 PromoNest - Site Web v3 (Version finale)

Site web moderne pour PromoNest avec design inspiré d'Ibotta.

## 📁 Structure des fichiers

```
promonest-v2/
├── index.html          # Page d'accueil
├── inscription.html    # Formulaire d'inscription
├── a-propos.html       # Page À propos (nouvelle)
├── styles.css          # Styles principaux
├── form-styles.css     # Styles formulaire
├── about-styles.css    # Styles page À propos (nouveau)
├── script.js           # JavaScript
├── logo.png            # Logo PromoNest
├── cgu.pdf             # ⚠️ À AJOUTER : Vos CGU en PDF
└── README.md           # Ce fichier
```

## ✨ Nouveautés v3

### Statistiques mises à jour
- ✅ **68% cashback moyen** (conservé)
- ✅ **100+ marques partenaires** (nouveau)
- ✅ **Sous 30 jours** pour le remboursement (nouveau)

### Section marques
- ✅ Affichage des **marques de produits** (Ariel, Lenor, Oral-B, etc.)
- ✅ Plus de mention des plateformes de cashback

### Nouvelle page "À propos"
- ✅ Présentation vendeuse de PromoNest
- ✅ Mission et promesses
- ✅ Coordonnées de contact :
  - Email : **achahed111@gmail.com**
  - Téléphone : **+33 7 55 99 32 87**

### Lien CGU
- ✅ Lien dans la navigation vers un PDF
- ⚠️ **ACTION REQUISE** : Ajoutez votre fichier `cgu.pdf` dans le dossier

## 🚀 Déploiement sur Netlify + promonest.eu

### Étape 1 : Préparer les fichiers
1. Téléchargez tous les fichiers
2. **IMPORTANT** : Ajoutez votre fichier `cgu.pdf` dans le dossier
   - Si vous n'avez pas encore de CGU, vous pouvez :
     * Renommer temporairement le lien en "Mentions légales"
     * Ou créer un PDF simple en attendant

### Étape 2 : Déployer sur Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec votre compte
3. Cliquez sur "Add new site" > "Deploy manually"
4. Glissez-déposez **tout le dossier `promonest-v2`**
5. Votre site sera en ligne en quelques secondes !

### Étape 3 : Connecter votre domaine promonest.eu

**Dans Netlify :**
1. Allez dans "Domain settings"
2. Cliquez sur "Add custom domain"
3. Entrez : `promonest.eu`
4. Netlify vous donnera des enregistrements DNS à configurer

**Dans votre espace client OVH :**
1. Connectez-vous sur ovh.com
2. Allez dans la gestion de `promonest.eu`
3. Section "Zone DNS"
4. Ajoutez ces enregistrements A (fournis par Netlify) :
   ```
   Type A : 75.2.60.5
   ```
   Ou suivez exactement les instructions DNS données par Netlify

5. **Attendez 1-2h** pour la propagation DNS

### Étape 4 : Vérification
- Votre site sera accessible sur `https://promonest.eu`
- Certificat SSL automatique (HTTPS sécurisé)
- Hébergement gratuit illimité

## 📝 Si vous n'avez pas encore de CGU

**Option 1 - Temporaire** : Renommer le lien

Dans `index.html`, `a-propos.html` et `inscription.html`, changez :
```html
<li><a href="cgu.pdf" target="_blank">CGU</a></li>
```
en :
```html
<li><a href="a-propos.html#contact">Contact</a></li>
```

**Option 2 - Créer un CGU simple** :
Utilisez un générateur en ligne comme :
- [legalplace.fr](https://www.legalplace.fr/outils-juridiques/cgu/)
- [rocket-lawyer.com](https://www.rocketlawyer.com/)

Exportez en PDF et nommez-le `cgu.pdf`

## 🎨 Personnalisation

### Changer les couleurs
Fichier `styles.css`, lignes 8-17 :
```css
:root {
    --primary: #5B8DBE;
    --accent: #D4A574;
    --success: #10b981;
}
```

### Modifier les textes
Éditez directement dans les fichiers HTML

### Changer les marques affichées
Dans `index.html`, section "Vos marques préférées"

## 📱 Compatibilité

- ✅ Desktop, Laptop, Tablette, Mobile
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Responsive design natif

## 📧 Contact

Des questions sur le déploiement ?
- Email : achahed111@gmail.com
- Téléphone : +33 7 55 99 32 87

## 💰 Coûts récapitulatifs

- **Domaine promonest.eu** : ~10-15€/an (OVH)
- **Hébergement Netlify** : 0€ (gratuit à vie)
- **Total** : 10-15€/an

---

**PromoNest** - Vos courses, presque gratuites 🦅
