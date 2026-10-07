---
layout: portfolio
permalink: /about/
title: About
---
{% assign profile = site.data.profile %}
<section class="wrap simple-page">
  <p class="eyebrow">Research, data science &amp; AI engineering</p><h1>Leonel Aguilar</h1>
  <p>I am a <a href="{{ profile.sources.senior | escape }}">Senior Researcher at ETH Zürich</a> and an <a href="{{ profile.sources.ai_center | escape }}">Associated Researcher of the ETH AI Center</a>. In 2025, I was a <a href="{{ profile.sources.cambridge | escape }}">Visiting Scholar at the University of Cambridge</a>.</p>
  <p>I build AI systems for humans: from <a href="{{ profile.sources.digital_support | escape }}">digital parenting support</a> to <a href="{{ profile.sources.simulation_video | escape }}">large-scale simulations of human movement</a> and <a href="{{ profile.sources.engineering_profile | escape }}">tools for reproducible machine learning</a>.</p>
  <p>My work was recognized by <a href="{{ profile.sources.mit_award | escape }}">MIT Technology Review’s Innovators Under 35, Latin America (2019)</a>. I also received the <a href="{{ profile.sources.guatemalteco_award | escape }}">Guatemalteco Ilustre — Orator award (2024)</a>.</p>
  <p>At ETH Zürich, I teach HCI, QuantUX, <em>Pandora’s Box</em>, <em>What is “intelligence”?</em> and <em>AI4GOOD</em>, among other courses.</p>
  <div class="actions"><a class="button" href="{{ '/#research' | relative_url }}">Explore my work</a><a href="{{ '/teaching/' | relative_url }}">Teaching record</a><a href="{{ site.linkedin | escape }}">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div>
</section>
