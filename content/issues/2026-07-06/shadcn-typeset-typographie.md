---
title: "shadcn/typeset : un système typo pour le markdown"
excerpt: "Une alternative à Tailwind Typography pensée streaming"
summary: "shadcn/ui lance typeset, un fichier CSS unique pour styler du HTML ou markdown rendu (articles, chat en streaming), qui suit les tokens de thème de l'app et évite de re-styler les blocs déjà affichés à l'arrivée de nouveau contenu."
date: 2026-07-06T00:00:00Z
reading_time: 4
sources:
  [
    { label: "shadcn/ui changelog", url: "https://ui.shadcn.com/docs/changelog/2026-07-typeset" },
    { label: "dev.to", url: "https://dev.to/morellodev/shadcntypeset-vs-tailwind-typography-styling-markdown-c82" }
  ]
category: 'design'
---

# shadcn/typeset : un système typo pour le markdown

shadcn/ui a annoncé le 10 juillet 2026 le lancement de `shadcn/typeset`, un système de typographie livré sous forme d'un unique fichier CSS destiné à styler du contenu HTML ou markdown rendu dynamiquement — articles de blog, documentation, ou messages de chat affichés en streaming. Le style est scopé à un conteneur `.typeset`, suit automatiquement les tokens de thème de l'application, et expose trois leviers de contrôle : la taille, l'interlignage (leading) et le flow du contenu.

## Pensé pour le contenu qui s'affiche progressivement

La particularité de typeset par rapport à des solutions existantes comme `@tailwindcss/typography` tient à sa conception pour le contenu streamé : lorsque de nouveaux blocs de texte s'ajoutent progressivement — typiquement une réponse de chatbot qui s'affiche token par token — le style des blocs déjà rendus ne se recalcule pas et ne "saute" pas visuellement. C'est un problème concret pour toute interface de chat IA construite avec des composants shadcn/ui, où le rendu markdown en temps réel est devenu un besoin courant.

## Une alternative ciblée, pas un remplacement généraliste

shadcn positionne typeset comme une alternative à Tailwind Typography plutôt qu'un remplacement universel : l'outil vise spécifiquement le cas du contenu HTML/markdown généré dynamiquement et suivant le système de thème de l'app, pas la mise en forme de texte éditorial statique au sens large. Pour une équipe qui construit déjà son design system sur shadcn/ui et qui affiche du contenu généré par IA — assistant, résumé, documentation dynamique — typeset comble un vide assez précis entre les composants Typography existants, pensés pour du JSX écrit à la main, et le rendu de markdown brut.
