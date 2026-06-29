---
title: 'Firefox 152 : field-sizing en Baseline et Project Nova'
excerpt: 'field-sizing cross-browser et le plus grand redesign de Firefox en 6 ans.'
summary: "Firefox 152 (16 juin) rend field-sizing disponible dans les trois moteurs majeurs, propulsant la propriété au rang Baseline Newly Available. Mozilla lève simultanément le voile sur Project Nova, son plus grand redesign depuis 2019, avec un accès anticipé déjà activable."
date: 2026-06-15T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'Mozilla Blog – Firefox 152 roadmap',
      url: 'https://blog.mozilla.org/en/firefox/firefox-roadmap-152/'
    },
    {
      label: 'MDN – Firefox 152 release notes',
      url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/152'
    },
    {
      label: 'Neowin – Firefox Nova redesign',
      url: 'https://www.neowin.net/news/mozilla-highlights-firefox-nova-2026-redesign-and-more-upcoming-features-with-new-roadmap/'
    },
    {
      label: 'gHacks – Roadmap Nova VPN HDR',
      url: 'https://www.ghacks.net/2026/06/18/mozilla-publishes-firefox-roadmap-with-nova-redesign-mobile-vpn-and-hdr-support-as-browser-loses-market-share/'
    },
    {
      label: 'MDN – field-sizing',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing'
    }
  ]
category: design
---

# Firefox 152 : field-sizing en Baseline et Project Nova

La version 152 de Firefox, publiée le 16 juin 2026, apporte deux actualités majeures : la propriété CSS `field-sizing` atteint l'interopérabilité cross-browser en devenant **Baseline Newly Available**, et Mozilla dévoile officiellement **Project Nova**, son plus grand redesign de navigateur depuis 2019.

## field-sizing : enfin dans les trois moteurs

La propriété CSS `field-sizing` permet aux éléments de formulaire — `<textarea>`, `<input>` — d'adapter automatiquement leur taille à leur contenu sans JavaScript. Deux valeurs : `content` (la taille suit le texte) et `fixed` (comportement classique).

```css
textarea {
  field-sizing: content; /* s'étire avec le texte */
}

input[type="search"] {
  field-sizing: content; /* largeur dynamique */
}
```

Déjà disponible dans Chrome et Safari, `field-sizing` était le dernier blocage pour atteindre l'interopérabilité complète. Avec Firefox 152, la propriété est désormais supportée par les trois moteurs principaux (Blink, WebKit, Gecko) et peut être utilisée en production sans fallback complexe.

Concrètement, cela élimine le pattern `addEventListener('input', () => { textarea.style.height = ... })` que tout le monde a écrit au moins une fois pour faire grossir un textarea. Un attribut CSS remplace désormais ce bout de JavaScript.

## Project Nova : le redesign qui s'active déjà

Mozilla a profité du lancement de Firefox 152 pour publier une feuille de route complète autour de **Project Nova**, présenté comme le plus grand redesign de Firefox en six ans.

Les contours de Nova : une interface modernisée avec un Compact mode restauré, une meilleure personnalisation, un accès renforcé aux outils de vie privée (VPN intégré, bloquage de trackers plus visible, kill switch pour les fonctions IA), et un support HDR natif pour les contenus visuels.

**Ce qui est déjà activable.** Le redesign est visible dès maintenant via un flag expérimental dans Firefox, ce qui permet aux développeurs et designers de tester l'interface avant le déploiement général prévu plus tard dans l'année.

Le calendrier complet inclut également :
- Groupes d'onglets sur Firefox Android (déjà en déploiement progressif avec Firefox 152)
- Raccourcis clavier personnalisables
- Édition PDF avancée (split, merge, réorganisation)
- Multi-Account Containers intégrés nativement

## Autres nouveautés pour les développeurs

Firefox 152 embarque plusieurs ajouts moins spectaculaires mais utiles :

- **Tab Groups sur Android** : les groupes d'onglets, déjà populaires sur desktop, commencent leur déploiement mobile.
- **Silencer de tabs** : une action rapide dans la barre d'adresse permet de couper le son de toutes les tabs d'un coup.
- **DevTools – comments HTML** : nouvelle option « Show comments » dans l'Inspecteur pour afficher ou masquer les nœuds commentaires dans l'arbre DOM.
- **JPEG XL expérimental** : le format d'image nouvelle génération est activable dans Firefox Labs.

Pour les utilisateurs de design systems, l'arrivée de `field-sizing` en Baseline ouvre la voie à des formulaires plus adaptatifs sans couche JavaScript : un gain de simplicité et de performance pour tous les cas d'usage d'input à contenu variable.
