webpackJsonp([9],{91:function(t,s){t.exports={km_rpbt_related_posts_by_taxonomy_shortcode:{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>The shortcode returns an empty string if it&#8217;s is not supported by this plugin.</p>\n\t</section>\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$atts</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Attributes used by the shortcode.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(string)</span> Related posts html or empty string.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/shortcode.php",url:"/functions/km_rpbt_validate_shortcode_atts",text:"km_rpbt_validate_shortcode_atts()"},{source:"includes/shortcode.php",url:"/functions/km_rpbt_shortcode_output",text:"km_rpbt_shortcode_output()"},{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_shortcode_defaults",text:"related_posts_by_taxonomy_shortcode_defaults"},{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_shortcode_atts",text:"related_posts_by_taxonomy_shortcode_atts"},{source:"includes/shortcode.php",url:"/hooks/related_posts_by_taxonomy_after_display-2",text:"related_posts_by_taxonomy_after_display"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_related_posts_by_taxonomy_shortcode( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$atts</span>&nbsp;)'},km_rpbt_shortcode_output:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$related_posts</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Array with related post objects.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$rpbt_args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Shortcode settings.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(string)</span> Shortcode output.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/template-loader.php",url:"/functions/km_rpbt_get_template",text:"km_rpbt_get_template()"}],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'km_rpbt_shortcode_output( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$related_posts</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$rpbt_args</span>&nbsp;)'},km_rpbt_validate_shortcode_atts:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$atts</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Array with shortcode attributes.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Array with validated shortcode attributes.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"}],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_item",text:"Related_Posts_By_Taxonomy_Rest_API::get_item()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'km_rpbt_validate_shortcode_atts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$atts</span>&nbsp;)'},related_posts_by_taxonomy_shortcode_atts:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$atts</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">See $defaults above</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_shortcode_atts\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$atts</span></nobr> )'},related_posts_by_taxonomy_shortcode_defaults:{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$defaults</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">See $defaults above</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_shortcode_defaults\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$defaults</span></nobr> )'}}}});
//# sourceMappingURL=9.d92ab7a9.chunk.js.map