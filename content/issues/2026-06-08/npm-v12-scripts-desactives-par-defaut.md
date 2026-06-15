---
title: 'npm v12 : les scripts désactivés par défaut en juillet'
excerpt: "npm v12 bloque l'exécution des scripts d'installation par défaut."
summary: "Annoncé le 9 juin via le GitHub Changelog, npm v12 introduira en juillet 2026 trois changements radicaux : désactivation des scripts d'install, blocage des dépendances Git et des URLs distantes par défaut, pour contrer les attaques supply-chain."
date: 2026-06-08T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'GitHub Changelog',
      url: 'https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/'
    },
    {
      label: 'TechTimes',
      url: 'https://www.techtimes.com/articles/318328/20260613/npm-v12-security-overhaul-blocks-install-scripts-default-july-deadline-ci-migration.htm'
    },
    {
      label: 'DevOps.com',
      url: 'https://devops.com/npm-v12-is-coming-in-july-heres-what-developers-need-to-do-now/'
    },
    {
      label: 'byteiota',
      url: 'https://byteiota.com/npm-v12-breaking-changes-what-breaks-in-july-2026/'
    }
  ]
category: frontend
---

# npm v12 : les scripts désactivés par défaut en juillet

Le 9 juin 2026, le GitHub Changelog a publié le détail des **breaking changes prévus pour npm v12**, attendu pour juillet 2026. Ces changements portent principalement sur la sécurité lors de l'installation des dépendances et ont un impact direct sur la plupart des projets Node.js en production.

## Contexte : les attaques supply-chain dans l'écosystème npm

Depuis plusieurs années, les attaques via la chaîne d'approvisionnement npm (packages malveillants, typosquatting, dépendances Git vérolées) sont en augmentation. npm v12 est la réponse structurelle de GitHub/npm à ces vecteurs d'attaque, en basculant sur un modèle **opt-in explicite** pour les comportements les plus risqués.

## Les trois breaking changes principaux

### 1. Scripts désactivés par défaut

`npm install` ne sera plus en mesure d'exécuter les scripts `preinstall`, `install` et `postinstall` des dépendances **à moins d'une autorisation explicite**. Cela inclut :

- Les builds natifs Node.js (packages avec un fichier `binding.gyp` — `node-gyp` est bloqué par défaut)
- Les scripts `prepare` des dépendances Git, fichier et symlink

**Impact concret :** tout projet utilisant des paquets natifs (SQLite, canvas, sharp, argon2, etc.) devra configurer une liste d'autorisation.

### 2. Dépendances Git bloquées par défaut

`npm install` refusera de résoudre des dépendances Git (directes ou transitives) sauf si le flag `--allow-git` est passé explicitement. Ce changement ferme un vecteur d'attaque où le `.npmrc` d'une dépendance Git pouvait redéfinir l'exécutable Git utilisé, même avec `--ignore-scripts` actif.

### 3. URLs distantes bloquées par défaut

Les dépendances spécifiées via URL HTTPS (tarballs distants) seront également bloquées par défaut. Elles nécessiteront `--allow-remote` pour être résolues.

## Comment se préparer dès maintenant

Bonne nouvelle : ces changements sont disponibles **dès aujourd'hui sous forme d'avertissements** dans npm 11.16.0+. Vous pouvez anticiper sans attendre juillet :

1. **Mettre à jour npm** vers 11.16.0 ou supérieur
2. **Lancer un install** et observer les warnings : npm signale les scripts qui seront bloqués
3. **Approuver explicitement** les scripts de confiance :
   ```bash
   npm approve-scripts --allow-scripts-pending
   ```
4. **Committer l'allowlist** générée dans votre `package.json`

Le flag `--allow-scripts-pending` liste les packages ayant des scripts en attente d'approbation, ce qui permet une revue manuelle et une validation progressive.

## Ce qui ne change pas

- L'exécution des scripts du projet racine lui-même (vos propres `scripts` dans `package.json`) n'est pas affectée
- pnpm et Yarn ont des comportements similaires mais leurs délais et implémentations diffèrent

## Impact sur les pipelines CI/CD

Les équipes qui utilisent des images Docker ou des runners CI sans gestion explicite de npm devront mettre à jour leurs workflows avant juillet. Les projets comportant des dépendances natives (bindings C/C++) seront les plus impactés. GitHub Actions proposera une migration guidée via la documentation de l'action `setup-node`.
