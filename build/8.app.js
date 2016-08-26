webpackJsonp([8],{553:function(e,l,t){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(l,"__esModule",{value:!0});var c=t(1),d=a(c),m=t(24),s=d["default"].createClass({displayName:"Grid",render:function(){return d["default"].createElement("div",null,d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.PageHeader,null,"Grid"))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",null,"Grid options"),d["default"].createElement("p",null,"See how aspects of the Bootstrap grid system work across multiple devices with a handy table."),d["default"].createElement("div",{className:"table-responsive"},d["default"].createElement("table",{className:"table table-bordered table-striped"},d["default"].createElement("thead",null,d["default"].createElement("tr",null,d["default"].createElement("th",null),d["default"].createElement("th",null,"Extra small devices",d["default"].createElement("small",null,"Phones (<768px)")),d["default"].createElement("th",null,"Small devices",d["default"].createElement("small",null,"Tablets (≥768px)")),d["default"].createElement("th",null,"Medium devices",d["default"].createElement("small",null,"Desktops (≥992px)")),d["default"].createElement("th",null,"Large devices",d["default"].createElement("small",null,"Desktops (≥1200px)")))),d["default"].createElement("tbody",null,d["default"].createElement("tr",null,d["default"].createElement("th",null,"Grid behavior"),d["default"].createElement("td",null,"Horizontal at all times"),d["default"].createElement("td",{colspan:"3"},"Collapsed to start, horizontal above breakpoints")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Max container width"),d["default"].createElement("td",null,"None (auto)"),d["default"].createElement("td",null,"750px"),d["default"].createElement("td",null,"970px"),d["default"].createElement("td",null,"1170px")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Class prefix"),d["default"].createElement("td",null,d["default"].createElement("code",null,".col-xs-")),d["default"].createElement("td",null,d["default"].createElement("code",null,".col-sm-")),d["default"].createElement("td",null,d["default"].createElement("code",null,".col-md-")),d["default"].createElement("td",null,d["default"].createElement("code",null,".col-lg-"))),d["default"].createElement("tr",null,d["default"].createElement("th",null,"# of columns"),d["default"].createElement("td",{colspan:"4"},"12")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Max column width"),d["default"].createElement("td",{className:"text-muted"},"Auto"),d["default"].createElement("td",null,"60px"),d["default"].createElement("td",null,"78px"),d["default"].createElement("td",null,"95px")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Gutter width"),d["default"].createElement("td",{colspan:"4"},"30px (15px on each side of a column)")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Nestable"),d["default"].createElement("td",{colspan:"4"},"Yes")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Offsets"),d["default"].createElement("td",{colspan:"4"},"Yes")),d["default"].createElement("tr",null,d["default"].createElement("th",null,"Column ordering"),d["default"].createElement("td",{colspan:"4"},"Yes"))))),d["default"].createElement("p",null,"Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any",d["default"].createElement("code",null,".col-md-")," class to an element will not only affect its styling on medium devices but also on large devices if a",d["default"].createElement("code",null,".col-lg-")," class is not present.")))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",null,"Example: Stacked-to-horizontal"),d["default"].createElement("p",null,"Using a single set of",d["default"].createElement("code",null,".col-md-*")," grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any",d["default"].createElement("code",null,".row"),"."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1"),d["default"].createElement("div",{className:"col-md-1"},".col-md-1")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-8"},".col-md-8"),d["default"].createElement("div",{className:"col-md-4"},".col-md-4")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-4"},".col-md-4"),d["default"].createElement("div",{className:"col-md-4"},".col-md-4"),d["default"].createElement("div",{className:"col-md-4"},".col-md-4")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-6"},".col-md-6"),d["default"].createElement("div",{className:"col-md-6"},".col-md-6"))))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",null,"Example: Mobile and desktop"),d["default"].createElement("p",null,"Dont want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding",d["default"].createElement("code",null,".col-xs-*"),d["default"].createElement("code",null,".col-md-*")," to your columns. See the example below for a better idea of how it all works."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-xs-12 col-md-8"},".col-xs-12 .col-md-8"),d["default"].createElement("div",{className:"col-xs-6 col-md-4"},".col-xs-6 .col-md-4")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-xs-6 col-md-4"},".col-xs-6 .col-md-4"),d["default"].createElement("div",{className:"col-xs-6 col-md-4"},".col-xs-6 .col-md-4"),d["default"].createElement("div",{className:"col-xs-6 col-md-4"},".col-xs-6 .col-md-4")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-xs-6"},".col-xs-6"),d["default"].createElement("div",{className:"col-xs-6"},".col-xs-6"))))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",null,"Example: Mobile, tablet, desktops"),d["default"].createElement("p",null,"Build on the previous example by creating even more dynamic and powerful layouts with tablet",d["default"].createElement("code",null,".col-sm-*")," classes."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-xs-12 col-sm-6 col-md-8"},".col-xs-12 .col-sm-6 .col-md-8"),d["default"].createElement("div",{className:"col-xs-6 col-md-4"},".col-xs-6 .col-md-4")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-xs-6 col-sm-4"},".col-xs-6 .col-sm-4"),d["default"].createElement("div",{className:"col-xs-6 col-sm-4"},".col-xs-6 .col-sm-4"),d["default"].createElement("div",{className:"clearfix visible-xs"}),d["default"].createElement("div",{className:"col-xs-6 col-sm-4"},".col-xs-6 .col-sm-4"))))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",{id:"grid-responsive-resets"},"Responsive column resets"),d["default"].createElement("p",null,"With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a",d["default"].createElement("code",null,".clearfix")," and our ",d["default"].createElement("a",{href:"javascript:void(0)"},"responsive utility classes"),"."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-xs-6 col-sm-3"},".col-xs-6 .col-sm-3",d["default"].createElement("br",null),"Resize your viewport or check it out on your phone for an example."),d["default"].createElement("div",{className:"col-xs-6 col-sm-3"},".col-xs-6 .col-sm-3"),d["default"].createElement("div",{className:"clearfix visible-xs"}),d["default"].createElement("div",{className:"col-xs-6 col-sm-3"},".col-xs-6 .col-sm-3"),d["default"].createElement("div",{className:"col-xs-6 col-sm-3"},".col-xs-6 .col-sm-3"))))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",{id:"grid-offsetting"},"Offsetting columns"),d["default"].createElement("p",null,"Move columns to the right using",d["default"].createElement("code",null,".col-md-offset-*")," classes. These classes increase the left margin of a column by",d["default"].createElement("code",null,"*")," columns. For example,",d["default"].createElement("code",null,".col-md-offset-4")," moves",d["default"].createElement("code",null,".col-md-4")," over four columns."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-4"},".col-md-4"),d["default"].createElement("div",{className:"col-md-4 col-md-offset-4"},".col-md-4 .col-md-offset-4")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-3 col-md-offset-3"},".col-md-3 .col-md-offset-3"),d["default"].createElement("div",{className:"col-md-3 col-md-offset-3"},".col-md-3 .col-md-offset-3")),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-6 col-md-offset-3"},".col-md-6 .col-md-offset-3"))))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",{id:"grid-nesting"},"Nesting columns"),d["default"].createElement("p",null,"To nest your content with the default grid, add a new",d["default"].createElement("code",null,".row")," and set of",d["default"].createElement("code",null,".col-md-*")," columns within an existing",d["default"].createElement("code",null,".col-md-*")," column. Nested rows should include a set of columns that add up to 12."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-9"},"Level 1: .col-md-9",d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-6"},"Level 2: .col-md-6"),d["default"].createElement("div",{className:"col-md-6"},"Level 2: .col-md-6"))))))),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-lg-12"},d["default"].createElement(m.Panel,null,d["default"].createElement("h3",{id:"grid-column-ordering"},"Column ordering"),d["default"].createElement("p",null,"Easily change the order of our built-in grid columns with",d["default"].createElement("code",null,".col-md-push-*")," and",d["default"].createElement("code",null,".col-md-pull-*")," modifier classes."),d["default"].createElement("div",{className:"row show-grid"},d["default"].createElement("div",{className:"col-md-9 col-md-push-3"},".col-md-9 .col-md-push-3"),d["default"].createElement("div",{className:"col-md-3 col-md-pull-9"},".col-md-3 .col-md-pull-9"))))))}});l["default"]=s,e.exports=l["default"]}).call(this)}finally{}}});