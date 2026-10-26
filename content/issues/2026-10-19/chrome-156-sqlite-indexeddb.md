---
title: "Chrome 156 : IndexedDB migre vers SQLite"
excerpt: "353 correctifs de sécurité, CSS random() stable"
summary: "Chrome 156 passe stable le 20 octobre 2026 : IndexedDB réécrit sur SQLite, la fonction CSS random() atteint la stabilité, les imports JS échoués redeviennent réessayables, et 353 failles sont corrigées."
date: 2026-10-19T00:00:00Z
reading_time: 3
sources:
  [
    { label: "GIGAZINE", url: "https://gigazine.net/gsc_news/en/20261021-google-chrome-156/" },
    { label: "Chrome Platform Status", url: "https://chromestatus.com/release-notes/156" }
  ]
category: 'frontend'
---

# Chrome 156 : IndexedDB migre vers SQLite

Google a fait passer **Chrome 156** en version stable le **20 octobre 2026** (build desktop 156.0.8078.47/.48), avec un chantier d'architecture interne et quelques nouveautés pour les développeurs.

## IndexedDB change de moteur de stockage

La plus grosse évolution est invisible depuis l'API : l'implémentation d'**IndexedDB** est réécrite pour s'appuyer sur **SQLite**, en remplacement de l'ancien système LevelDB + fichiers plats. Google ne promet aucun changement côté API web, seulement une fiabilité accrue et, dans une moindre mesure, de meilleures performances. Cette étape ne concerne pour l'instant que les **nouveaux stores de données** — la migration des données LevelDB existantes est prévue pour une étape ultérieure.

## CSS `random()` atteint la stabilité

La fonction CSS **`random()`**, qui permet de générer des valeurs aléatoires directement en CSS sans recourir à JavaScript, est désormais disponible en version stable. Elle accepte une clé de partage en premier argument pour contrôler comment les valeurs aléatoires sont partagées entre propriétés et éléments.

## JavaScript : les imports dynamiques redeviennent réessayables

Chrome 156 permet aussi de relancer manuellement un `import()` ayant échoué, par exemple en cas de réseau instable — jusqu'ici, un échec de chargement de module restait mis en cache comme définitif.

## 353 correctifs de sécurité

Cette version corrige **353 vulnérabilités**, dont **6 critiques**.

## Pourquoi ça compte

La bascule d'IndexedDB vers SQLite illustre une tendance de fond chez Chrome : moderniser la robustesse du moteur de stockage sans rien changer côté développeur — un chantier à surveiller si votre application dépend fortement d'IndexedDB pour du offline-first.
