# JG Markdown App 

## Description

This app is a visualization to display Markdown File in a Splunk Dashboard.

## Instructions

### Clone and build

```shell
git clone
npm install
npm run build
```

### Refresh Splunk

Refresh your Splunk instance : https://My_Splunk_Instance:My_Splunk_Instance_Port/debug/refresh

## Dev tools

```shell
git pull && cd appserver/static/visualizations/jg_markdown/ && git run build && cd ../../../..
```

## Tools tiers

| Name | Description |
| :--: | -- |
| showdown | [showdown](https://github.com/showdownjs/showdown) |
| github-markdown-css | [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) |
