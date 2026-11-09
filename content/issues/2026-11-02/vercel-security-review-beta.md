---
title: "Vercel passe la revue de sécurité à l'IA"
excerpt: "Scan IA à chaque push, correctifs proposés en PR"
summary: "Vercel Security Review entre en bêta publique : un scanner piloté par Vercel Agent analyse chaque push vers GitHub à la recherche de vulnérabilités et propose des correctifs sous forme de pull request."
date: 2026-11-02T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Vercel", url: "https://vercel.com/blog/vercel-security-review" },
    { label: "CodeZine", url: "https://codezine.jp/news/detail/30254" }
  ]
category: 'dev-ia'
---

# Vercel passe la revue de sécurité à l'IA

Vercel a annoncé le 2 novembre 2026 l'entrée en **bêta publique** de **Vercel Security Review**, un outil de scan de vulnérabilités piloté par IA, pour l'instant réservé aux équipes Pro et Enterprise.

## Un scan à chaque push, des correctifs en pull request

Une fois activé dans les réglages de **Vercel Agent**, sur tout ou partie des projets, l'outil analyse le code modifié à chaque push vers un dépôt GitHub connecté. Chaque vulnérabilité détectée est expliquée avec un lien vers le commit et le déploiement où elle est apparue ; les pull requests reçoivent des commentaires de revue dédiés, et chaque commit obtient son propre check GitHub. Les correctifs proposés passent, eux, par Vercel Agent sous forme de pull request — rien n'est fusionné sans validation humaine.

## Pourquoi ça compte

Pour une équipe qui déploie déjà sur Vercel, ce scan automatique à chaque push ajoute un filet de sécurité qui s'intègre directement dans le flux GitHub existant, sans configuration d'outil tiers — à surveiller si le passage en disponibilité générale élargit l'accès au-delà des paliers Pro et Enterprise.
