---
layout: post
title: Jekyll Github Pages
date:   2023-05-19 01:56
description: Auto deploying Jekyll with github actions and pages
toc: true
tags: [devops,github,guide]
---

Since my new Github Pages site is now using [Jekyll](https://jekyllrb.com/), I figured a first good post would be a walkthrough of the devops side of setting it up, since, it wasn't very intuative.


## Installing Jekyll

I installed Jekyll using the Ubuntu guide from [here](https://jekyllrb.com/docs/installation/).

Since I didn't want to install anything on my machine, I made a Ubuntu virtual machine and put everything into that. Now that I'm writing this using the [docker image](https://hub.docker.com/r/jekyll/jekyll/) would've made more sense, but I'm good with my setup.

## Making the Project

I started with the template for the theme I liked ([found here](https://github.com/streetturtle/jekyll-clean-dark)).

Since this repo does not contain a `Gemfile`, create one in the root of the project:
```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3.2"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
```


Then, **cd** into the root of the project and run:
```sh
$ bundle exec jekyll serve
```

Which should let you preview the site and change stuff up.


## Github Pages Repo

You can see [here](https://pages.github.com/) for the official guide.

Create a new **public** repository with the name `<your-username>.github.io`, where `<your-username>` is your Github username.

Once you've made the repo, you can push the project from earlier. Then go into the settings for the repo > `Pages` and set `Source` to `Deploy from a branch`, and set the branch to `gh-pages` with `/(root)`.

This branch is where the contents of the site will be kept.


## Github Workflow

To have github auto build and deploy the site when pushing happens, we need to setup a [workflow](https://docs.github.com/en/actions/using-workflows).

Create a `.github/workflows` folders and inside create a new file `github-pages.yml` (I don't think the name matters)

Mine looks like this:
```yml
name: Build and deploy Jekyll site to GitHub Pages

on:
  push:
    branches:
      - main # or master before October 2020

  workflow_dispatch: # allows manually running the action

jobs:
  github-pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/cache@v2
        with:
          path: vendor/bundle
          key: {% raw %}${{ runner.os }}-gems-${{ hashFiles('**/Gemfile') }} {% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-gems-{% endraw %}
      - uses: helaili/jekyll-action@2.5.0    # Choose any one of the Jekyll Actions
        with:                                # Some relative inputs of your action
          token: {% raw %}${{ secrets.JEKYLL_PAT }}{% endraw %}
          target_branch: 'gh-pages'

```

This action will now be triggered when anything pushes to the `main` branch, but before that happens, you need to set the `JEKYLL_PAT` secret.

In Github, go to `Settings` > `Developer settings` > `Personal access tokens` and create a new token.

I called mine `Github Actions`, and gave it only the permissions `public_repo` under the `repo` category.

Copy this value and in the repo made earlier go into `Settings` > `Secrets and variables` > `Actions` and hit `New repository secret`. Give this secret the name `JEKYLL_PAT` (or whatever secret.xxx you put in the workflow file), and set the value to the access token you made.

You can now push to the main branch your site and it will trigger and deploy the built site.