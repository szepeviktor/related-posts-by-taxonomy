webpackJsonp([11],{37:function(t,s){t.exports={"related_posts_by_taxonomy_defaults-23":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>Data needed by this plugin:</p>\n<ul>\n<li>registered taxonomies</li>\n<li>registered post types</li>\n<li>default and registered image sizes</li>\n<li>allowed formats</li>\n<li>cache instance (if feature is activated)</li>\n</ul>\n\t</section>\n',methods:[{url:"/classes/related_posts_by_taxonomy_defaults/_setup",title:"_setup",excerpt:"Method: Sets up class properties.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_default_settings",title:"get_default_settings",excerpt:"Method: Returns default settings for the shortcode and widget.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_formats",title:"get_formats",excerpt:"Method: Returns all supported formats.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_image_sizes",title:"get_image_sizes",excerpt:"Method: Returns default and added image sizes.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_instance",title:"get_instance",excerpt:"Method: Acces this plugin's working instance.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_plugin_supports",title:"get_plugin_supports",excerpt:"Method: Get the features this plugin supports",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_post_types",title:"get_post_types",excerpt:"Method: Returns all public post types.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/get_taxonomies",title:"get_taxonomies",excerpt:"Method: Returns all public taxonomies Sets the id for 'All Taxonomies' Sets the default taxonomy",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/init",title:"init",excerpt:"Method: Sets up class properties on action hook wp_loaded.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy_defaults/plugin_supports",title:"plugin_supports",excerpt:"Method: Adds opt in support with a filter for cache, WP REST API and debug.",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[],signature:"Related_Posts_By_Taxonomy_Defaults"},"related_posts_by_taxonomy_defaults::_setup-121":{html:"\n",methods:[],related:{uses:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_post_types",text:"Related_Posts_By_Taxonomy_Defaults::get_post_types()"},{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_taxonomies",text:"Related_Posts_By_Taxonomy_Defaults::get_taxonomies()"},{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_image_sizes",text:"Related_Posts_By_Taxonomy_Defaults::get_image_sizes()"},{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_formats",text:"Related_Posts_By_Taxonomy_Defaults::get_formats()"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::_setup()"},"related_posts_by_taxonomy_defaults::get_default_settings-269":{html:"\n\t<hr />\n\t<section class=\"parameters\">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$type</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class=\"desc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"type\">(<span class=\"tring\">tring</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"description\">Type of settings. Choose from 'widget', 'shortcode', 'wp_rest_api' or 'all'.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"default\">Default value: ''</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(string)</span> ype of settings. Values can be 'shortcode' or 'widget'</p>\n\t</section>\n",methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"}],used_by:[]},changelog:[{description:'<span class="since-description">Moved logic to <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_get_default_settings/">km_rpbt_get_default_settings()</a>.</span>',version:"2.5.0"},{description:"Introduced.",version:"2.2.2"}],signature:'Related_Posts_By_Taxonomy_Defaults::get_default_settings( <span class="arg-type">tring</span>&nbsp;<span class="arg-name">$type</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>&nbsp;)'},"related_posts_by_taxonomy_defaults::get_formats-250":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(array)</span> Formats.</p>\n\t</section>\n",methods:[],related:{uses:[],used_by:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/_setup",text:"Related_Posts_By_Taxonomy_Defaults::_setup()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::get_formats()"},"related_posts_by_taxonomy_defaults::get_image_sizes-212":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>Default image sizes</p>\n<ul>\n<li>thumbnail</li>\n<li>medium</li>\n<li>large</li>\n<li>post-thumbnail</li>\n</ul>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Array with all image sizes.</p>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/_setup",text:"Related_Posts_By_Taxonomy_Defaults::_setup()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::get_image_sizes()"},"related_posts_by_taxonomy_defaults::get_instance-100":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(object)</span> </p>\n\t</section>\n",methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/cache_init",text:"Related_Posts_By_Taxonomy_Plugin::cache_init()"},{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/init",text:"Related_Posts_By_Taxonomy_Defaults::init()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::get_instance()"},"related_posts_by_taxonomy_defaults::get_plugin_supports-281":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(Array)</span> Array with plugin support types</p>\n\t</section>\n",methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_plugin_supports",text:"km_rpbt_get_plugin_supports()"}],used_by:[]},changelog:[{description:'<span class="since-description">Moved logic to a <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_get_plugin_supports/">km_rpbt_get_plugin_supports()</a>.</span>',version:"2.5.0"},{description:"Introduced.",version:"2.3.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::get_plugin_supports()"},"related_posts_by_taxonomy_defaults::get_post_types-137":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(array)</span> Array with post type objects.</p>\n\t</section>\n",methods:[],related:{uses:[],used_by:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/_setup",text:"Related_Posts_By_Taxonomy_Defaults::_setup()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::get_post_types()"},"related_posts_by_taxonomy_defaults::get_taxonomies-163":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(array)</span> Array with taxonomy names and labels.</p>\n\t</section>\n",methods:[],related:{uses:[],used_by:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/_setup",text:"Related_Posts_By_Taxonomy_Defaults::_setup()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::get_taxonomies()"},"related_posts_by_taxonomy_defaults::init-112":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>wp_loaded is fired after custom post types and taxonomies are registered by themes and plugins.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_instance",text:"Related_Posts_By_Taxonomy_Defaults::get_instance()"}],used_by:[{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/init",text:"Related_Posts_By_Taxonomy_Plugin::init()"}]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy_Defaults::init()"},"related_posts_by_taxonomy_defaults::plugin_supports-294":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$type</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Type of support (\'cache\', \'wp_rest_api\', etc.).</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="default">Default value: \'\'</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(bool)</span> True if set to true with a filter. Default false.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"}],used_by:[]},changelog:[{description:'<span class="since-description">Moved logic to <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_plugin_supports/">km_rpbt_plugin_supports()</a>.</span>',version:"2.5.0"},{description:"Introduced.",version:"2.3.0"}],signature:'Related_Posts_By_Taxonomy_Defaults::plugin_supports( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$type</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>&nbsp;)'}}}});
//# sourceMappingURL=11.b176e8c1.chunk.js.map