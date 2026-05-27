---
title: 'Next.js : 13 failles de sécurité patchées en urgence'
excerpt: '13 CVEs corrigés dans les versions 15.5.18 et 16.2.6 : bypass auth, SSRF, DoS, XSS.'
summary: 'Vercel publie un patch de sécurité coordonné pour Next.js couvrant 13 advisories : contournement d'authentification middleware, SSRF dans le WebSocket handler, déni de service sur les Server Components, empoisonnement de cache et XSS. Mise à jour immédiate requise.'
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Vercel – security release', url: 'vercel.com/changelog/next-js-may-2026-security-release' },
    { label: 'CVE-2026-44578 – SSRF', url: 'hadrian.io/blog/next-js-websocket-ssrf-unauthenticated-access-to-internal-resources-cve-2026-44578-2' },
    { label: 'Netlify – analyse', url: 'netlify.com/changelog/2026-05-08-react-nextjs-security-vulnerabilities/' },
    { label: 'ConfigDeck – advisory recap', url: 'configdeck.dev/en/advisory/nextjs-2026-05-security-release' }
  ]
category: 'frontend'
---

# Next.js : 13 failles de sécurité patchées en urgence

Vercel a publié en mai 2026 une release de sécurité coordonnée pour Next.js couvrant **13 advisories**. Les versions corrigées sont **15.5.18** et **16.2.6**. Vercel précise explicitement que ces vulnérabilités "ne peuvent pas être bloquées de manière fiable au niveau WAF" — la mise à jour est la seule mitigation complète.

## Ce qui est concerné

Les 13 advisories couvrent cinq familles de vulnérabilités :

### 1. Contournement d'authentification middleware (High)

Plusieurs vecteurs permettent de contourner les vérifications d'authentification dans le middleware :

- **Bypass via App Router segment-prefetch URL** : une URL spécialement construite permet de passer les vérifications sans authentification.
- **Turbopack : fix incomplet** — le correctif initial du bypass segment-prefetch s'est avéré incomplet pour les utilisateurs de Turbopack, nécessitant un patch supplémentaire. Les utilisateurs Turbopack doivent impérativement être sur 15.5.18 ou 16.2.6.
- **Pages Router i18n** : les chemins de locale par défaut permettent de contourner l'autorisation proxy.
- **Injection de paramètre de route dynamique** : vecteur supplémentaire de bypass.

### 2. SSRF dans le WebSocket handler (High) — CVE-2026-44578

Un attaquant non authentifié peut déclencher une requête HTTP GET interne vers n'importe quel hôte accessible depuis le serveur sur le port 80, en exploitant le handler d'upgrade WebSocket qui proxyifie aveuglément les URI en forme absolue.

Cibles potentielles : métadonnées cloud (AWS IMDS, GCP metadata server), panneaux d'administration, APIs internes. **Cette vulnérabilité ne concerne que les déploiements auto-hébergés** — les applications hébergées sur Vercel ne sont pas impactées par ce vecteur.

### 3. Déni de service sur les React Server Components (High) — CVE-2026-23870

Une requête HTTP forgée envoyée à un endpoint App Router Server Function provoque une consommation CPU excessive pendant la désérialisation, pouvant rendre le serveur indisponible.

### 4. Cache poisoning

Sous certaines conditions de cache partagé, une URL attendant du HTML peut recevoir un payload RSC à la place, corrompant le cache et servant un contenu incorrect aux utilisateurs suivants.

### 5. XSS (Moderate)

- **CSP nonces** : une faille dans les applications App Router utilisant les nonces CSP permet à un attaquant de retourner ce mécanisme de sécurité contre les utilisateurs.
- **beforeInteractive scripts** : XSS via input non-sanitisé dans les scripts chargés en mode `beforeInteractive`.

## Que faire maintenant

1. **Mettre à jour immédiatement** vers Next.js 15.5.18 (branche 15) ou 16.2.6 (branche 16).
2. **Si vous utilisez Turbopack** : la version cible est obligatoirement l'une de ces deux — une version inférieure laisse la fenêtre de bypass ouverte.
3. Les déploiements auto-hébergés sont les plus exposés, notamment sur le vecteur SSRF.
4. Les règles WAF ne constituent pas une mitigation suffisante.

Pour les équipes sur des versions antérieures à la 15, Vercel recommande de prioriser la migration — les versions plus anciennes ne reçoivent pas les correctifs de sécurité.
