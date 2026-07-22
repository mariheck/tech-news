---
title: "Le paquet npm jscrambler compromis diffuse un malware"
excerpt: "Un voleur d'identifiants ciblant Claude Desktop et Cursor"
summary: "Le paquet npm jscrambler a été compromis le 11 juillet et a diffusé cinq versions malveillantes en trois heures, avec un infostealer Rust ciblant identifiants cloud, tokens CI et configurations de Claude Desktop et Cursor."
date: 2026-07-06T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Socket.dev", url: "https://socket.dev/blog/jscrambler-supply-chain-attack" },
    { label: "The Hacker News", url: "https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html" }
  ]
category: 'frontend'
---

# Le paquet npm jscrambler compromis diffuse un malware

Le 11 juillet 2026, un attaquant ayant obtenu un identifiant de publication compromis a publié une version malveillante du paquet npm `jscrambler` (8.14.0), suivie de quatre autres versions piégées (8.16.0, 8.17.0, 8.18.0, 8.20.0) en l'espace d'environ trois heures. Socket.dev a détecté l'attaque six minutes après la première publication ; la version saine du paquet est la 8.22.0.

## Un infostealer qui vise spécifiquement les outils IA de développement

La charge malveillante est un infostealer écrit en Rust, livré initialement via un hook `preinstall`. Face à la généralisation des scans d'`--ignore-scripts`, les versions suivantes ont déplacé le code malveillant directement dans le code principal et le CLI du paquet, rendant ce garde-fou inefficace. Le malware cible les identifiants cloud, les tokens CI, les sessions de navigateur, les coffres-forts Bitwarden et les portefeuilles crypto — mais surtout, il vise explicitement les fichiers de configuration d'outils IA de développement, dont Claude Desktop et Cursor.

## Trois jours après npm 12, un rappel de la fenêtre de vulnérabilité

Cette attaque survient trois jours seulement après la sortie de npm 12.0.0, qui désactive par défaut l'exécution automatique des lifecycle scripts (voir notre article dédié). Elle illustre la longue traîne des clients npm plus anciens, non encore mis à jour, pour lesquels ce garde-fou n'est pas encore actif — et confirme que les attaquants ciblent désormais en priorité les postes des développeurs qui utilisent des agents de code IA, potentiellement porteurs d'identifiants à privilèges élevés.

Pour toute équipe frontend utilisant Claude Desktop, Cursor ou un outil équivalent, la recommandation immédiate est de vérifier l'absence de `jscrambler` en version 8.14.0 à 8.20.0 dans les lockfiles, de faire tourner ses identifiants cloud et CI par précaution, et de maintenir npm à jour vers la ligne 12.x pour bénéficier des nouveaux garde-fous par défaut.
