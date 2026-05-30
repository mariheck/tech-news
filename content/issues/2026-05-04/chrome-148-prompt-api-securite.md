---
title: "Chrome 148 : Prompt API, CSS et 127 failles"
excerpt: "Chrome 148 livre la Prompt API et corrige 3 failles critiques."
summary: "Chrome 148 passe stable avec la Prompt API (Gemini Nano embarqué), les container queries par nom, le lazy loading audio/vidéo et plusieurs nouvelles API CSS. Une mise à jour de sécurité le 8 mai corrige 127 failles dont 3 critiques."
date: 2026-05-04T00:00:00Z
reading_time: 5
sources:
  - { label: "New in Chrome 148", url: "https://developer.chrome.com/blog/new-in-chrome-148" }
  - { label: "Chrome 148 release notes", url: "https://developer.chrome.com/release-notes/148" }
  - { label: "Chrome 149 Beta", url: "https://developer.chrome.com/blog/chrome-149-beta" }
  - { label: "Chrome 148 Security", url: "https://cybersecuritynews.com/chrome148-vulnerabilities-patched/" }
  - { label: "Gemini Nano téléchargement", url: "https://gigazine.net/gsc_news/en/20260506-google-chrome-148/" }
  - { label: "WebMCP origin trial", url: "https://scriptwalker.app/blog/webmcp-chrome-149-origin-trial-agentic-web-may-2026" }
category: frontend
---

# Chrome 148 : Prompt API, CSS et 127 failles

Chrome 148 est passé en version stable le 5 mai 2026, apportant un lot de nouveautés developer significatif. Trois jours plus tard, une mise à jour de sécurité (148.0.7778.96/97) corrigeait 127 vulnérabilités. Une semaine chargée pour le premier navigateur du web.

## Prompt API : Gemini Nano directement dans le navigateur

La fonctionnalité la plus attendue de Chrome 148 est la **Prompt API**, désormais disponible en stable. Elle expose un accès programmatique direct au modèle Gemini Nano embarqué dans Chrome, sans passer par un serveur externe. L'API accepte des entrées texte, image et audio, et permet de contraindre les sorties via un schéma JSON ou une expression régulière.

Cette API ouvre la voie à des expériences d'IA entièrement on-device dans le navigateur : correction grammaticale, résumé, classification, génération de contenu — le tout sans latence réseau ni coût d'inférence côté serveur.

**Un lancement controversé.** Dans les jours suivant la sortie stable, Chrome 148 a été observé en train de télécharger silencieusement environ 4 Go de poids de modèle Gemini Nano sur les machines des utilisateurs, sans consentement explicite. Ce comportement a déclenché des réactions dans la communauté des développeurs et des défenseurs de la vie privée.

## Nouveautés CSS et API web

### Container queries par nom seul

La directive `@container` peut désormais cibler un conteneur en utilisant uniquement son `container-name`, sans exiger que `container-type` soit défini. Cela simplifie les cas d'usage où le type du conteneur est implicite dans le contexte.

```css
.child {
  @container sidebar (min-width: 300px) {
    font-size: 1.125rem;
  }
}
```

### Lazy loading pour `<video>` et `<audio>`

L'attribut `loading="lazy"` est désormais supporté sur les éléments `<video>` et `<audio>`, reportant le chargement de la ressource jusqu'à ce que l'élément approche du viewport. Cette fonctionnalité, déjà disponible pour `<img>` et `<iframe>`, améliore les performances de chargement initial sans effort supplémentaire.

### CSS divers

- **`text-decoration-skip-ink: all`** — applique l'évitement de l'encre de soulignement à tous les glyphes, y compris les caractères CJK
- **`revert-rule`** — nouveau mot-clé permettant d'annuler le style appliqué par la règle CSS précédente dans la cascade, en revenant à l'état avant cette règle spécifique

### Web Authentication Immediate UI Mode

`navigator.credentials.get()` dispose d'un nouveau mode qui n'affiche l'interface de connexion passkey/password que si des identifiants correspondants existent pour le site. En l'absence de match, la promesse rejette avec `NotAllowedError`. Cela évite d'afficher une interface vide et déconcertante pour l'utilisateur.

### Web Serial API sur Android

La Web Serial API, qui permet aux pages web de communiquer avec des périphériques série (Arduino, microcontrôleurs…), est désormais disponible sur Android.

## 127 failles corrigées le 8 mai

La mise à jour de sécurité du 8 mai a patché **127 vulnérabilités** dans Chrome 148 :

- **3 critiques** : CVE-2026-7896, CVE-2026-7897 et CVE-2026-7898 (integer overflow dans le moteur Blink, pouvant mener à une corruption du tas)
- **31 élevées**
- Environ **138 000 dollars** de primes versées aux chercheurs de sécurité externes

Aucune exploitation active n'était confirmée au moment de la publication.

## En approche : Chrome 149 (bêta depuis le 6 mai)

La bêta de Chrome 149, ouverte le 6 mai, contient plusieurs fonctionnalités à surveiller pour les développeurs frontend :

**CSS Gap Decorations** — une longue attente de la communauté CSS : cette propriété permet de styler visuellement les gouttières dans les layouts CSS Grid et Flexbox, sans recourir à des pseudo-éléments. Elle sera disponible simultanément dans Chrome 149 et Edge 149.

**WebMCP** (origin trial) — un standard expérimental ouvert qui expose des fonctions JavaScript structurées et des formulaires HTML aux agents IA basés dans le navigateur. Une première étape vers un web nativement agentique.

**BFCache + WebSocket** — les pages ayant des connexions WebSocket actives peuvent désormais entrer dans le cache de navigation avant/arrière ; les connexions se ferment proprement à l'entrée dans le cache plutôt que de bloquer la mise en cache de la page.

La version stable de Chrome 149 est attendue début juin 2026.
