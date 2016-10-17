# portal-assets

> DSE Portal assets in a gem

This gem contains front end assets for the DSE Portal.
## Usage

Add to your `Gemfile`:

```ruby
  gem 'portal-assets'
```

Then import the asset using the `require` directive in `application.js` 


```js
//= require jquery
//= require portal-assets
//= require angular-rails-templates
//= require_tree .

```

and `applicatin.css`:

```css
/*
 *= require_self
 *= require_tree .
 *= require font-awesome
 *= require portal-assets
 */

```
