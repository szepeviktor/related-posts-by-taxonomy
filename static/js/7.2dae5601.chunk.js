webpackJsonp([7],{41:function(t,s){t.exports={"km_rpbt_cache_related_posts-313":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>The opt-in cache feature needs to be activated to cache posts.</p>\n\t</section>\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$post_id</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="int">int</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">The post id to cache related posts for.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$taxonomies</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Taxonomies for the related posts query.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="default">Default value: \'\'</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">arguments. See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_query_related_posts/">km_rpbt_query_related_posts()</a> for more                                 information on accepted arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="default">Default value: array()</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array|false)</span> Array with cached related posts objects or false if no posts where cached.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"}],used_by:[]},changelog:[{description:'<span class="since-description">Use empty string as default value for $taxonomies parameter.</span>',version:"2.5.0"},{description:"Introduced.",version:"2.1"}],signature:'km_rpbt_cache_related_posts( <span class="arg-type">int</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$taxonomies</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>,  <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)'},"km_rpbt_flush_cache-335":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>Call this function on the wp_load hook or later.</p>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(int|bool)</span> Returns number of deleted rows or false on failure.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.1"}],signature:"km_rpbt_flush_cache()"},"km_rpbt_get_post_types-246":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$post_types</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Comma separated list or array with post type names.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="default">Default value: \'\'</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Array with validated post types.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_comma_separated_values",text:"km_rpbt_get_comma_separated_values()"}],used_by:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/filter_request",text:"Related_Posts_By_Taxonomy_Rest_API::filter_request()"}]},changelog:[{description:"Introduced.",version:"2.2"}],signature:'km_rpbt_get_post_types( <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$post_types</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>&nbsp;)'},"km_rpbt_get_public_taxonomies-283":{html:"\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(array)</span> Array with all public taxonomies.</p>\n\t</section>\n",methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_taxonomies",text:"km_rpbt_get_taxonomies()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:"km_rpbt_get_public_taxonomies()"},"km_rpbt_get_related_posts-109":{html:"\n\t<hr />\n\t<section class=\"description\">\n\t\t<h2>Description</h2>\n\t\t<p>Used by the widget, shortcode, and rest api.</p>\n<p>If the cache feature of this plugin is activated it tries to get the related posts from the cache first. If not found in the cache they will be cached before returning related posts</p>\n<p>If taxonomies are not set in the arguments it queries for related posts in all public taxonomies.</p>\n\t</section>\n\t<hr />\n\t<section class=\"parameters\">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$post_id</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class=\"desc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"type\">(<span class=\"array\">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"description\">The post id to get related posts for.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class=\"desc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"type\">(<span class=\"string\">string</span>|<span class=\"array\">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"description\">Arguments to get related posts. <ul class=\"param-hash\"><li><b>'taxonomies'</b><br /><i><span class='type'>(string|array)</span></i> Taxonomies to use for related posts query. Array or comma separated list of taxonomy names. Default empty (all taxonomies).</li>\n<li><b>'post_types'</b><br /><i><span class='type'>(string|array)</span></i> Post types to use for related posts query. Array or comma separated list of post type names. Default 'post'.</li>\n<li><b>'posts_per_page'</b><br /><i><span class='type'>(int)</span></i> Number of related posts. Default 5.</li>\n<li><b>'order'</b><br /><i><span class='type'>(string)</span></i> Order of related posts. Accepts 'DESC', 'ASC' and 'RAND'. Default 'DESC'.</li>\n<li><b>'orderby'</b><br /><i><span class='type'>(string)</span></i> Order by post date or by date modified. Accepts 'post_date'and 'post_modified'. Default 'post_date'.</li>\n<li><b>'fields'</b><br /><i><span class='type'>(string)</span></i> Return full post objects, IDs, post titles or post slugs. Accepts 'all', 'ids', 'names' or 'slugs'. Default is 'all'.</li>\n<li><b>'terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to use for the related posts query. Array or comma separated list of term ids. The terms don't need to be assigned to the post to get related posts for. </li>\n<li><b>'include_terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to include for the related posts query. Array or comma separated list of term ids. Only includes terms also assigned to the post to get related posts for. </li>\n<li><b>'exclude_terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to exlude for the related posts query. Array or comma separated list of term ids. Default empty</li>\n<li><b>'related'</b><br /><i><span class='type'>(boolean)</span></i> If false the <code>$include_terms</code> argument also includes terms not assigned to the post to get related posts for. Default true.</li>\n<li><b>'exclude_post'</b><br /><i><span class='type'>(array|string)</span></i> Exclude posts for the related posts query. Array or comma separated list of post ids. </li>\n<li><b>'limit_posts'</b><br /><i><span class='type'>(int)</span></i> Limit the posts to search related posts in. Default -1 (search in all posts).</li>\n<li><b>'limit_month'</b><br /><i><span class='type'>(int)</span></i> Limit the posts to the past months to search related posts in.</li>\n<li><b>'post_thumbnail'</b><br /><i><span class='type'>(boolean)</span></i> Whether to query for related posts with a featured image only. Default false.</li>\n<li><b>'public_only'</b><br /><i><span class='type'>(boolean)</span></i> Whether to exclude private posts in the related posts display, even if the current user has the capability to see those posts. Default false (include private posts)</li>\n<li><b>'include_self'</b><br /><i><span class='type'>(string|boolean)</span></i> Whether to include the current post in the related posts results. The included post is ordered at the top. Use 'regular_order' to include the current post ordered by terms in common. Default false (exclude current post).</li>\n</li></ul>\n</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"default\">Default value: array()</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class=\"return\">\n\t\t<h3>Return</h3>\n\t\t<p><span class='return-type'>(array)</span> Array with related post objects.</p>\n\t</section>\n",methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"},{source:"includes/template-tags.php",url:"/functions/km_rpbt_add_post_classes",text:"km_rpbt_add_post_classes()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/query.php",url:"/functions/km_rpbt_query_related_posts",text:"km_rpbt_query_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/hooks/related_posts_by_taxonomy_pre_related_posts",text:"related_posts_by_taxonomy_pre_related_posts"}],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/functions.php",url:"/functions/km_rpbt_cache_related_posts",text:"km_rpbt_cache_related_posts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_related_posts",text:"Related_Posts_By_Taxonomy_Rest_API::get_related_posts()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_related_posts",text:"Related_Posts_By_Taxonomy::get_related_posts()"},{source:"includes/back-compat/deprecated.php",url:"/functions/km_rpbt_shortcode_get_related_posts",text:"km_rpbt_shortcode_get_related_posts()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_get_related_posts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)'},"km_rpbt_get_taxonomies-264":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$taxonomies</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Taxonomies.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Array with taxonomy names.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_comma_separated_values",text:"km_rpbt_get_comma_separated_values()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/query.php",url:"/functions/km_rpbt_query_related_posts",text:"km_rpbt_query_related_posts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/filter_request",text:"Related_Posts_By_Taxonomy_Rest_API::filter_request()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/get_cache",text:"Related_Posts_By_Taxonomy_Cache::get_cache()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/check_cache",text:"Related_Posts_By_Taxonomy_Debug::check_cache()"}]},changelog:[{description:"Introduced.",version:"2.2"}],signature:'km_rpbt_get_taxonomies( <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$taxonomies</span>&nbsp;)'},"km_rpbt_get_terms-187":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$post_id</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="int">int</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">The post id to get terms for.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$taxonomies</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">The taxonomies to retrieve terms from.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$args</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Optional)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Arguments to get terms. <ul class="param-hash"><li><b>\'terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to use for the related posts query. Array or comma separated list of term ids. The terms don\'t need to be assigned to the post set by the <code>$post_id</code> argument. </li>\n<li><b>\'include_terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to include for the related posts query. Array or comma separated list of term ids. Only includes terms also assigned to the post set by the <code>$post_id</code> argument. </li>\n<li><b>\'exclude_terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to exlude for the related posts query. Array or comma separated list of term ids. Default empty</li>\n<li><b>\'related\'</b><br /><i><span class=\'type\'>(boolean)</span></i> If false the <code>$include_terms</code> argument also includes terms not assigned to the post set by the <code>$post_id</code> argument. Default true.</li>\n</li></ul>\n</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="default">Default value: array()</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(array)</span> Array with term ids.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"}],used_by:[{source:"includes/query.php",url:"/functions/km_rpbt_query_related_posts",text:"km_rpbt_query_related_posts()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_get_terms( <span class="arg-type">int</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$taxonomies</span>,  <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)'},"km_rpbt_is_cache_loaded-294":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$plugin</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="object">object</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description"><a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/classes/related_posts_by_taxonomy_cache/">Related_Posts_By_Taxonomy_Cache</a> object. Default null.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(bool)</span> True if the cache class is loaded.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_cache_related_posts",text:"km_rpbt_cache_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_flush_cache",text:"km_rpbt_flush_cache()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/debug_setup",text:"Related_Posts_By_Taxonomy_Debug::debug_setup()"}]},changelog:[],signature:"km_rpbt_is_cache_loaded()"},"km_rpbt_plugin-14":{html:'\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(Object|false)</span> <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/classes/related_posts_by_taxonomy_defaults/">Related_Posts_By_Taxonomy_Defaults</a> instance or false.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_instance",text:"Related_Posts_By_Taxonomy_Defaults::get_instance()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_taxonomies",text:"km_rpbt_get_taxonomies()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/functions/km_rpbt_flush_cache",text:"km_rpbt_flush_cache()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/__construct",text:"Related_Posts_By_Taxonomy::__construct()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/debug_setup",text:"Related_Posts_By_Taxonomy_Debug::debug_setup()"},{source:"includes/back-compat/deprecated.php",url:"/functions/km_rpbt_get_shortcode_atts",text:"km_rpbt_get_shortcode_atts()"}]},changelog:[{description:"Introduced.",version:"2.1"}],signature:"km_rpbt_plugin()"},"km_rpbt_plugin_supports-30":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$type</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="string">string</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="required">(Required)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Type of feature.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n\t<hr />\n\t<section class="return">\n\t\t<h3>Return</h3>\n\t\t<p><span class=\'return-type\'>(bool)</span> True if the feature is supported.</p>\n\t</section>\n',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_plugin_supports",text:"km_rpbt_get_plugin_supports()"},{source:"includes/functions.php",url:"/hooks/related_posts_by_taxonomy_type",text:"related_posts_by_taxonomy_{$type}"}],used_by:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_cache_related_posts",text:"km_rpbt_cache_related_posts()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/cache_init",text:"Related_Posts_By_Taxonomy_Plugin::cache_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/debug_init",text:"Related_Posts_By_Taxonomy_Plugin::debug_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/widget_init",text:"Related_Posts_By_Taxonomy_Plugin::widget_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/rest_api_init",text:"Related_Posts_By_Taxonomy_Plugin::rest_api_init()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_items_permissions_check",text:"Related_Posts_By_Taxonomy_Rest_API::get_items_permissions_check()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/get_supports",text:"Related_Posts_By_Taxonomy_Debug::get_supports()"},{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/plugin_supports",text:"Related_Posts_By_Taxonomy_Defaults::plugin_supports()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_plugin_supports( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$type</span>&nbsp;)'},"related_posts_by_taxonomy_type-54":{html:'\n\t<hr />\n\t<section class="description">\n\t\t<h2>Description</h2>\n\t\t<p>The dynamic portion of the hook name, <code>$type</code>, refers to the type of support.</p>\n<ul>\n<li>widget</li>\n<li>shortcode</li>\n<li>shortcode_hide_empty</li>\n<li>widget_hide_empty</li>\n<li>cache</li>\n<li>display_cache_log</li>\n<li>wp_rest_api</li>\n<li>debug</li>\n</ul>\n\t</section>\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$bool</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="bool">bool</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Add support if true. Default false</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"}]},changelog:[],signature:'<span class="hook-func">apply_filters</span>( "related_posts_by_taxonomy_{$type}",  <nobr><span class="arg-type">bool</span> <span class="arg-name">$bool</span></nobr> )'},"related_posts_by_taxonomy_pre_related_posts-140":{html:'\n\t<hr />\n\t<section class="parameters">\n\t\t<h3>Parameters</h3>\n\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t\t<dt>$related_posts</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="boolean">boolean</span>|<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Return an array with (related) post objects to use your own                                     related post. This prevents the query for related posts by this plugin.                                     Default false (Let this plugin query for related posts).</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t<p class="desc">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="type">(<span class="array">array</span>)</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="description">Array with widget or shortcode arguments.</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t</section>\n',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/set_cache",text:"Related_Posts_By_Taxonomy_Cache::set_cache()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/get_cache",text:"Related_Posts_By_Taxonomy_Cache::get_cache()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_pre_related_posts\',  <nobr><span class="arg-type">boolean|array</span> <span class="arg-name">$related_posts</span></nobr>,  <nobr><span class="arg-type">array</span> <span class="arg-name"></span></nobr> )'}}}});
//# sourceMappingURL=7.2dae5601.chunk.js.map