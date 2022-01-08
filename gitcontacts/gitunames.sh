#!/bin/bash

top_trending_repos=`echo  curl -G https://api.github.com/search/repositories --data-urlencode "sort=stars" --data-urlencode "order=desc" --data-urlencode "q=language:java"  --data-urlencode "q=created:>`date -v-7d '+%Y-%m-%d'`" | jq ".items[] | {name, description, language, watchers_count, html_url}"`
echo -e $top_trending_repos
