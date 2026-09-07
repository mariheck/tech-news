---
title: "Firefox 155 inaugure sa cadence bimensuelle"
excerpt: "Mozilla aligne sa fréquence de releases sur Chrome et Edge"
summary: "Firefox 155 sort le 1er septembre, deux semaines avant la date habituelle, inaugurant la nouvelle cadence bimensuelle de Mozilla. Au programme : QUIC v2, Happy Eyeballs v3, un panneau d'émulation des media queries dans les DevTools, et Smart Window disponible en France."
date: 2026-08-31T00:00:00Z
reading_time: 5
sources:
  [
    { label: "MDN Firefox 155", url: "https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/155" },
    { label: "Firefox 155 Release Notes", url: "https://www.firefox.com/en-US/firefox/155.0/releasenotes/" },
    { label: "9to5Linux", url: "https://9to5linux.com/mozilla-firefox-155-is-now-available-for-download-heres-whats-new" },
    { label: "gHacks", url: "https://www.ghacks.net/2026/07/14/firefox-switches-to-two-week-release-cycle-starting-september-2026/" },
    { label: "Web and IT News", url: "https://www.webanditnews.com/2026/09/01/firefox-155-ships-faster-connections-and-ai-browsing-option-as-mozilla-tests-two-week-release-cycle/" }
  ]
category: 'frontend'
---

# Firefox 155 inaugure sa cadence bimensuelle

Le 1er septembre 2026, Mozilla publie **Firefox 155** — deux semaines avant la date initialement prévue (15 septembre). Ce glissement n'est pas une exception : c'est le début d'une nouvelle cadence de release **toutes les deux semaines**, que Mozilla adopte pour s'aligner sur Google Chrome (depuis mars 2026) et Microsoft Edge (depuis le 27 août 2026, avec Edge 152).

Firefox 156 est attendu le 11 septembre, confirmant le passage au rythme bimensuel.

## Pourquoi ce changement de cadence ?

Livrer plus souvent permet à Mozilla de pousser des correctifs de sécurité et des nouvelles fonctionnalités plus régulièrement, sans attendre des cycles de 4 semaines. Le processus de release se standardise également, réduisant les aléas qui retardaient parfois les déploiements. Pour les développeurs, cela signifie un suivi plus régulier des release notes — et des chances plus élevées que les features attendues arrivent plus vite en stable.

## Nouveautés réseau : QUIC v2 et Happy Eyeballs v3

Deux améliorations de connectivité notables dans Firefox 155 :

**QUIC version 2** : Firefox négocie désormais QUIC v2 pour les connexions HTTP/3 lorsque le serveur le sélectionne via compatible version negotiation. QUIC v2 apporte des améliorations de performance et de robustesse, notamment pour les connexions instables.

**Happy Eyeballs v3** : Ce mécanisme réduit la latence de connexion en tentant IPv4 et IPv6 simultanément, en retenant la première réponse. La v3 affine l'algorithme de délai et le rend plus efficace sur les réseaux modernes. En pratique, les pages se chargent plus vite sur des connexions mixtes ou dégradées.

## DevTools : panneau d'émulation des media queries

Pour les développeurs, la nouveauté la plus pratique concerne les **outils de développement**. Les boutons d'émulation des media features, auparavant dispersés dans la vue Rules, sont maintenant regroupés dans un **panneau d'émulation dédié**, accessible via le bouton `@`.

Ce panneau ajoute également l'émulation de la media feature **`prefers-reduced-motion`** — un ajout bienvenu pour tester les comportements d'accessibilité liés aux animations sans avoir à modifier les préférences système. Pour les développeurs qui travaillent sur des animations CSS et vérifient leur conformité aux préférences de mouvement réduit, c'est un gain de workflow quotidien concret.

Autre ajout DevTools : le JSON Viewer ouvre désormais les documents **JSON Lines (NDJSON)**, parsant chaque ligne séparément dans une entrée repliable labellisée par son numéro de ligne.

## Smart Window disponible en France

Firefox 155 étend **Smart Window** — la fenêtre d'assistance IA contextuelle de Firefox — aux utilisateurs en France (en plus des États-Unis et du Canada). Smart Window propose notamment des suggestions de reprise de conversation personnalisées pour retourner rapidement sur des sujets précédents, et une réponse de l'assistant enrichie de citations de sources web via Exa.

## Le contexte de la course aux cadences

Avec Firefox 155, les trois grands navigateurs (Chrome, Edge, Firefox) partagent désormais un cycle bimensuel. Pour les développeurs frontend, cela signifie que les nouvelles fonctionnalités web arrivent en stable plus vite — mais aussi que la veille des release notes devient un exercice bimensuel pour chaque navigateur plutôt que mensuel.
