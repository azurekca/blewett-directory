---
title: 'Blewett Community Directory'
layout: 'layouts/home.njk'
pagination:
  data: collections.categoriesList
  size: 1
  alias: category
permalink: '/category/{{ category | slug }}/'
---