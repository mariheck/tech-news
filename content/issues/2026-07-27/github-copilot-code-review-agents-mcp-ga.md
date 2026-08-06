---
title: "Copilot Code Review passe en GA avec agents et MCP"
excerpt: "Vos outils internes et serveurs MCP entrent maintenant dans la revue de code."
summary: "Depuis le 29 juillet 2026, Copilot Code Review supporte les agent skills (SKILL.md) et les serveurs MCP en GA pour tous les plans Pro, Pro+, Business et Enterprise. Les reviewers IA peuvent désormais invoquer vos outils internes et consulter vos plateformes tierces en lecture seule pendant la revue."
date: 2026-07-27T00:00:00Z
reading_time: 4
sources:
  [
    { label: "GitHub Changelog – Copilot review GA", url: "https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available/" },
    { label: "digitalapplied – MCP Adoption Week", url: "https://www.digitalapplied.com/blog/mcp-adoption-week-copilot-code-review-ga" },
    { label: "Lumienai – Copilot Code Review", url: "https://lumienai.com/news/github-copilot-code-review-agent-skills-mcp-generally-available" },
    { label: "GitHub Docs – about code review", url: "https://docs.github.com/en/copilot/concepts/agents/code-review" }
  ]
category: 'dev-ia'
---

# Copilot Code Review passe en GA avec agents et MCP

Depuis le **29 juillet 2026**, deux fonctionnalités de Copilot Code Review sont disponibles en général availability pour tous les abonnements **Pro, Pro+, Business et Enterprise** : les **agent skills** et la connexion aux **serveurs MCP**.

La coincidence de date avec la finalisation de la spec MCP 2026-07-28 n'est pas anodine : GitHub avait annoncé en juin que Copilot Code Review supporterait la nouvelle spec dès sa sortie.

## Agent skills : vos standards dans la revue

Les agent skills permettent à Copilot de consulter les outils internes et les règles de votre équipe lors de chaque revue de code. La configuration se fait via un fichier `SKILL.md` placé dans `.github/skills/<skill-name>/SKILL.md` :

```markdown
# API versioning check

When reviewing API changes:
1. Verify backward compatibility with clients in /clients directory
2. Check that deprecation notices are present for removed fields
3. Validate against OpenAPI spec at /docs/api-spec.yaml
```

Copilot peut invoquer des outils référencés dans ce fichier (linters custom, scanners de sécurité internes, validateurs de schéma) et utiliser les instructions pour orienter son analyse.

Quelques cas d'usage typiques :
- **Vérification de conventions** : s'assurer que les noms de composants suivent la convention du projet
- **Contrôles de sécurité** : invoquer un scanner de dépendances avant chaque PR
- **Validation de types** : croiser les types TypeScript générés avec la spec OpenAPI

## Serveurs MCP : le contexte externe en lecture seule

La connexion à des serveurs MCP permet à Copilot d'aller chercher du **contexte externe** lors de la revue : tickets liés dans Jira, documentation d'API dans Confluence, entrées de catalogue de services dans Backstage, etc.

Les contraintes sont strictes : **tous les appels MCP sont en lecture seule**. Copilot Code Review ne peut pas modifier des données via MCP pendant une revue — seule la lecture est autorisée.

```yaml
# .github/copilot/mcp.yml
servers:
  - name: jira
    url: https://your-company.atlassian.net/mcp
  - name: backstage
    url: https://backstage.internal/mcp
```

Le modèle intègre le contexte récupéré dans son analyse : une PR qui modifie un service de paiement peut déclencher la consultation automatique des standards de sécurité de ce service dans Confluence avant de commenter.

## Ce qui reste en preview

Les agent skills et MCP passent en GA, mais le hub de gestion centralisé (pour configurer les skills au niveau organisation) reste en **public preview**. Les skills définies au niveau d'un repository sont disponibles en GA ; celles déployées org-wide via le hub restent en preview.

## Disponibilité

| Plan | Agent skills | MCP |
|------|-------------|-----|
| Free | ✗ | ✗ |
| Pro | ✓ | ✓ |
| Pro+ | ✓ | ✓ |
| Business | ✓ | ✓ |
| Enterprise | ✓ | ✓ |

---

Cette GA s'inscrit dans la tendance plus large d'intégration du protocole MCP dans les outils dev : la même semaine, la spec MCP 2026-07-28 finale a été publiée, rendant le protocole stateless et facilitant le déploiement scalable des serveurs MCP en entreprise.
