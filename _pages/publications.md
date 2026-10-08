---
layout: portfolio
permalink: /publications/
title: Publications
description: Research papers on human behaviour, artificial intelligence and computational systems by Leonel Aguilar and collaborators.
---
<div class="wrap catalogue">
  <header class="catalogue-header"><p class="eyebrow">Research catalogue</p><h1>Publications</h1><p>Human behaviour, artificial intelligence, and the systems that connect them.</p><a class="text-link" href="https://scholar.google.com/citations?user=XXFxxV0AAAAJ&amp;hl=en">Google Scholar profile <span aria-hidden="true">↗</span></a></header>
  <form class="publication-filters" role="search" aria-label="Filter publications" hidden>
    <div class="search-field"><label for="paper-search">Search publications</label><input id="paper-search" name="q" type="search" placeholder="Title, author or keyword…" autocomplete="off"></div>
    <div><label for="paper-topic">Research area</label><select id="paper-topic" name="topic"><option value="">All research areas</option>{% for topic in site.data.publications.topics %}<option value="{{ topic[0] }}">{{ topic[1] }}</option>{% endfor %}</select></div>
    <div><label for="paper-year">Year</label><select id="paper-year" name="year"><option value="">All years</option>{% assign years = site.data.publications.publications | map: 'year' | uniq %}{% for year in years %}<option value="{{ year }}">{{ year }}</option>{% endfor %}</select></div>
    <button class="filter-reset" type="reset">Reset</button>
  </form>
  <p class="result-count" role="status" aria-live="polite" aria-atomic="true">{{ site.data.publications.publications.size }} publications</p>
  <div class="publication-list">{% for paper in site.data.publications.publications %}
    <article class="publication" data-publication data-topic="{{ paper.topic }}" data-year="{{ paper.year }}" data-search="{{ paper.title | append: ' ' | append: paper.authors | append: ' ' | append: paper.keywords | append: ' ' | append: paper.venue | downcase | escape }}">
      <div class="publication-year">{{ paper.year }}</div><div class="publication-content"><p class="project-meta">{{ paper.topic_label | escape }} <span>·</span> {{ paper.type | escape }}</p><h2>{% if paper.url != '' %}<a href="{{ paper.url | escape }}">{{ paper.title | escape }}</a>{% else %}{{ paper.title | escape }}{% endif %}</h2><p class="publication-authors">{{ paper.authors | escape }}</p><p class="publication-venue">{{ paper.venue | escape }}{% if paper.accepted %} · Accepted for poster presentation{% endif %}</p><div class="publication-links">{% if paper.url != '' %}<a href="{{ paper.url | escape }}">{% if paper.accepted %}Conference record{% else %}Publication record{% endif %} <span aria-hidden="true">↗</span></a>{% endif %}{% if paper.research_url %}<a href="{{ paper.research_url | relative_url }}">Research summary →</a>{% endif %}{% if paper.preprint_url != '' and paper.preprint_url != paper.url %}<a href="{{ paper.preprint_url | escape }}">Preprint ↗</a>{% endif %}</div></div>
    </article>{% endfor %}</div>
  <p class="no-results" hidden>No publications match these filters. Try another keyword, research area or year.</p>
</div>
