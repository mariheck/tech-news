---
title: "npm 12 désactive les scripts d'installation par défaut"
excerpt: "La plus grosse refonte sécurité des 16 ans de npm"
summary: "npm 12.0.0 désactive par défaut les lifecycle scripts, bloque les dépendances git/URL distantes et dépréciе les tokens qui contournaient le 2FA, en réponse à une année d'attaques de la chaîne d'approvisionnement npm."
date: 2026-07-06T00:00:00Z
reading_time: 6
sources:
  [
    { label: "The Hacker News", url: "https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html" },
    { label: "Socket.dev", url: "https://socket.dev/blog/npm-12" },
    { label: "GitHub Changelog", url: "https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/" }
  ]
category: 'frontend'
---

# npm 12 désactive les scripts d'installation par défaut

npm 12.0.0 est sorti le 8 juillet 2026 (suivi d'un correctif 12.0.1 deux jours plus tard), et constitue selon Socket.dev la plus grosse refonte sécurité des seize ans d'histoire de l'outil. Le changement central : les lifecycle scripts (`preinstall`, `install`, `postinstall`) ainsi que les builds implicites via node-gyp ne s'exécutent plus automatiquement à l'installation — `allowScripts` passe à `off` par défaut.

## Dépendances git et distantes bloquées par défaut

Deuxième changement majeur, les flags `--allow-git` et `--allow-remote` passent également à "none" par défaut : npm refuse désormais d'installer des dépendances pointant vers un dépôt git ou une URL distante sans autorisation explicite. Les tokens d'accès granulaires (GATs) qui permettaient de contourner l'authentification à deux facteurs sont par ailleurs mis en dépréciation.

## Une réponse directe à une année d'attaques

Ces changements font suite à une série d'attaques de la chaîne d'approvisionnement npm documentées ces derniers mois, notamment sur des paquets comme Axios et sur l'écosystème Mastra AI. En coupant l'exécution automatique de code arbitraire à l'installation, npm ferme le vecteur d'attaque le plus exploité par les paquets malveillants — celui qui exfiltre des identifiants ou installe des malwares dès `npm install`, sans action de l'utilisateur.

## Un breaking change à anticiper

Pour toute équipe frontend, la mise à jour vers npm 12 est un changement à tester avant adoption : les projets qui dépendent de lifecycle scripts légitimes (compilation de binaires natifs, génération de fichiers de config) devront explicitement réactiver `allowScripts`, sous peine de builds cassés en CI. C'est le prix à payer pour fermer une classe entière de vulnérabilités — et un rappel que la chaîne d'approvisionnement JavaScript reste une cible de choix, comme l'illustre l'attaque jscrambler survenue trois jours plus tard (voir notre article dédié).
