(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['photocard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class = \"photo-card\">\r\n	<img class = \"frog-img\" src = "
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":38}}}) : helper)))
    + ">\r\n		<p>\r\n			"
    + alias4(((helper = (helper = lookupProperty(helpers,"frogFacts") || (depth0 != null ? lookupProperty(depth0,"frogFacts") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"frogFacts","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":16}}}) : helper)))
    + "\r\n		</p>\r\n\r\n		<button onclick=\"frogChange()\">DEEP FRY</button>\r\n\r\n</div>";
},"useData":true});
})();