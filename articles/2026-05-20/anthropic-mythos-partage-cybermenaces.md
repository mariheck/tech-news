---
titre: "Anthropic Mythos : le modèle qui trouve des zero-days s'ouvre au partage"
accroche: "Anthropic assouplit les conditions d'accès à Mythos, son modèle cybersécurité capable d'identifier des milliers de failles critiques dans les systèmes en production."
resume: "Annoncé début avril 2026 et déployé en accès très restreint via le Projet Glasswing, Mythos Preview d'Anthropic a identifié des milliers de zero-days critiques dans tous les OS majeurs, navigateurs et logiciels open source. Le 19 mai, Anthropic a révisé sa politique initiale pour permettre aux organisations autorisées de partager leurs informations sur les menaces avec d'autres entités exposées aux mêmes vulnérabilités — une décision qui redéfinit la gouvernance des modèles IA à capacités offensives."
semaine: "Semaine du 13 au 19 mai 2026"
lecture: "7 min"
sources:
  - titre: "Anthropic's Mythos set off a cybersecurity 'hysteria.' Experts say the threat was already here — CNBC"
    url: "https://www.cnbc.com/2026/05/08/anthropic-mythos-ai-cybersecurity-banks.html"
  - titre: "Anthropic to Let Partners Share Mythos Cybersecurity Findings With Others — Insurance Journal"
    url: "https://www.insurancejournal.com/news/national/2026/05/19/870583.htm"
  - titre: "Claude Mythos Preview — Anthropic Red Team"
    url: "https://red.anthropic.com/2026/mythos-preview/"
  - titre: "Anthropic's Mythos moment: how frontier AI is redefining cybersecurity — World Economic Forum"
    url: "https://www.weforum.org/stories/2026/04/anthropic-mythos-ai-cybersecurity/"
  - titre: "Anthropic's Mythos and the global cybersecurity gap — Rest of World"
    url: "https://restofworld.org/2026/ai-cybersecurity-anthropic-mythos/"
  - titre: "Anthropic's Mythos Has Changed Cybersecurity Forever. What Now? — Center for Humane Technology"
    url: "https://centerforhumanetechnology.substack.com/p/anthropics-mythos-has-changed-cybersecurity"
  - titre: "OpenAI to give EU access to new cyber model but Anthropic still holding out on Mythos — CNBC"
    url: "https://www.cnbc.com/2026/05/11/openai-eu-cyber-model-anthropic-mythos-gpt.html"
categorie: "IA en entreprise"
---

# Anthropic Mythos : le modèle qui trouve des zero-days s'ouvre au partage

> **Annonce à fort impact** — Mythos Preview est le premier modèle IA frontier démontré capable d'identifier massivement des vulnérabilités critiques dans des systèmes en production réels. Le 19 mai, Anthropic change sa politique d'accès au partage des découvertes.

## Ce qu'est Mythos

Annoncé le 7 avril 2026, **Claude Mythos Preview** est un modèle d'Anthropic conçu spécifiquement pour la cybersécurité offensive et défensive. Ses capacités documentées sont sans précédent dans l'histoire des LLMs :

- **Identification massive de zero-days** : Anthropic l'a utilisé pour trouver des milliers de vulnérabilités jusqu'alors inconnues dans tous les OS majeurs, tous les navigateurs majeurs, et une large gamme de logiciels open source critiques
- **Exploitation de code closed-source** : Mythos est capable de reverse-engineer des exploits à partir de logiciels propriétaires dont le code source n'est pas disponible
- **Weaponisation de CVEs connues** : il peut transformer une vulnérabilité publiée mais non encore patchée en exploit fonctionnel

Anthropic a lui-même déclaré que Mythos est "loin devant les autres modèles" en matière de cybersécurité.

## Projet Glasswing : un accès extrêmement contrôlé

Face à ces capacités, Anthropic a déployé Mythos via le **Projet Glasswing** — un framework d'accès restreint qui ressemble davantage à un programme d'accréditation gouvernementale qu'à un product launch classique. Les organisations autorisées incluent Amazon, Microsoft, Nvidia et Apple, principalement pour des usages défensifs.

Le **Pentagone** a également intégré Mythos dans son programme de détection de vulnérabilités sur les systèmes du gouvernement américain — une adoption qui illustre à la fois l'utilité stratégique et la sensibilité extrême du modèle.

## La "hystérie" dans le secteur bancaire et les infrastructures critiques

La diffusion des premiers résultats de Mythos a déclenché ce que CNBC décrit comme une "cybersecurity hysteria" chez les banques, utilities et gouvernements. Des zero-days dans des systèmes critiques, identifiés par un modèle IA en quelques semaines là où des équipes Red Team humaines auraient mis des mois, ont radicalement changé la perception du risque dans ces secteurs.

La réaction d'OpenAI était symptomatique de la dynamique compétitive : Sam Altman a annoncé en réponse **GPT-5.5-Cyber**, une variante tailored cybersécurité de GPT-5.5, avec un accès limité aux équipes cybersec vettées. OpenAI a également confirmé accorder l'accès à GPT-5.5-Cyber à des partenaires européens — gouvernements, entreprises et autorités cyber — dans le cadre d'une démarche de coopération avec l'UE.

## Le tournant du 19 mai : partage autorisé

Depuis le lancement, la politique d'Anthropic était stricte : les organisations du Projet Glasswing ne pouvaient pas partager avec des tiers les informations sur les vulnérabilités découvertes par Mythos. Cette isolation minimisait les risques d'abus, mais créait une autre forme de risque : les organisations exposées aux mêmes vulnérabilités ne pouvaient pas être prévenues.

Le **19 mai 2026**, Anthropic révise cette position. Désormais, les partenaires Glasswing sont autorisés à **partager les informations sur les cybermenaces** avec d'autres entités susceptibles d'être exposées aux mêmes vulnérabilités. C'est un assouplissement significatif qui reconnaît implicitement que l'information défensive doit circuler plus vite que l'information offensive.

## Ce que ça change pour la gouvernance des modèles IA

L'affaire Mythos cristallise un débat qui dépasse la cybersécurité : **quelles règles de gouvernance pour les modèles IA à capacités offensives** ?

Anthropic a dû inventer en temps réel un cadre juridique et éthique pour un objet sans précédent — un modèle qui n'est ni une arme au sens réglementaire, ni un outil de sécurité traditionnel, mais les deux simultanément. Les décisions prises — tiers d'accès, usage policies, restrictions de partage puis leur assouplissement progressif — deviennent une référence de facto pour l'industrie.

Le WEF et plusieurs institutions ont commencé à formaliser des recommandations inspirées de ce modèle de déploiement contrôlé. Le Projet Glasswing est peut-être le premier exemple concret d'une **"responsible disclosure at scale"** pilotée par IA — un nouveau paradigme qui devra être codifié dans les régulations à venir.

Pour les équipes de sécurité : si votre organisation n'a pas encore évalué son exposition aux vulnérabilités que des modèles comme Mythos peuvent découvrir, c'est le moment de remettre à plat votre programme de gestion des vulnérabilités.
