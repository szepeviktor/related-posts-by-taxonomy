(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(s){s.exports={"related_posts_by_taxonomy_admin_widget-39":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$widget</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">Array with widget name and description.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/__construct",text:"Related_Posts_By_Taxonomy::__construct()"}]},changelog:[{description:"Introduced.",version:"0.3"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_admin_widget\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$widget</span></nobr> )',notice:""},"related_posts_by_taxonomy_widget_args-124":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="description">Widget instance.</span></p></dd><dt>$widget_args</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="description">Widget arguments.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_widget_args\',  <nobr><span class="arg-type">string</span> <span class="arg-name">$args</span></nobr>,  <nobr><span class="arg-type">string</span> <span class="arg-name">$widget_args</span></nobr> )',notice:""},"related_posts_by_taxonomy_widget_defaults-86":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$defaults</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">Default widget arguments. See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> for for more information about default widget arguments.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:"Introduced.",version:"2.7.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_widget_defaults\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$defaults</span></nobr> )',notice:""},"related_posts_by_taxonomy_widget_form_instance-200":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">Widget form instance. See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_widget/">km_rpbt_related_posts_by_taxonomy_widget()</a> for for more information about default feature arguments.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/form",text:"Related_Posts_By_Taxonomy::form()"}]},changelog:[{description:"Introduced.",version:"2.7.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_widget_form_instance\',  <nobr><span class="arg-type">array</span> <span class="arg-name">$instance</span></nobr> )',notice:""},"related_posts_by_taxonomy-13":{html:"",methods:[{url:"/classes/related_posts_by_taxonomy/__construct",title:"__construct",excerpt:"Method: Widget setup.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/add_related_post_id",title:"add_related_post_id",excerpt:"Method: Adds public query var km_rpbt_related_post_id.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/back_compat_settings",title:"back_compat_settings",excerpt:"Method: Returns correct settings for changed instance settings.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/form",title:"form",excerpt:"Method: Displays the widget form in /wp-admin/widgets.php.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/get_field",title:"get_field",excerpt:"Method: Get form field",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/get_instance_settings",title:"get_instance_settings",excerpt:"Method: Returns all widget instance settings.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/get_related_posts",title:"get_related_posts",excerpt:"Method: Get the related posts used by the widget.",deprecated:!0},{url:"/classes/related_posts_by_taxonomy/get_the_id",title:"get_the_ID",excerpt:"Method: Returns the current post id to get related posts for.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/is_all_taxonomies",title:"is_all_taxonomies",excerpt:"Method: Check if all taxonomies is selected.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/update",title:"update",excerpt:"Method: Updates the widget settings.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/widget",title:"widget",excerpt:"Method: Displays the related posts on the front end.",deprecated:!1},{url:"/classes/related_posts_by_taxonomy/widget_output",title:"widget_output",excerpt:"Method: Widget output",deprecated:!0}],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:"Related_Posts_By_Taxonomy",notice:""},"related_posts_by_taxonomy::__construct-22":{html:"",methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"},{source:"includes/class-widget.php",url:"/hooks/related_posts_by_taxonomy_admin_widget",text:"related_posts_by_taxonomy_admin_widget"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:"Related_Posts_By_Taxonomy::__construct()",notice:""},"related_posts_by_taxonomy::add_related_post_id-339":{html:'<hr /><section class="description"><h2>Description</h2><p>called by filter hook &#8216;query_vars&#8217;</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$query_vars</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with query vars.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"0.2.1"}],signature:'Related_Posts_By_Taxonomy::add_related_post_id( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$query_vars</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::back_compat_settings-272":{html:'<hr /><section class="description"><h2>Description</h2><p>This function provides back compatiblity for <strong>upgrading</strong> from older versions.</p><p>In version 0.2.2 the variable taxonomy changed to taxonomies. in version 2.7.0 the &quot;all taxonomies&quot; value is saved as an empty string.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Widget instance.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Widget instance.</p></section>',methods:[],related:{uses:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/is_all_taxonomies",text:"Related_Posts_By_Taxonomy::is_all_taxonomies()"}],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_instance_settings",text:"Related_Posts_By_Taxonomy::get_instance_settings()"}]},changelog:[],signature:'Related_Posts_By_Taxonomy::back_compat_settings( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::form-190":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Current settings.</span></p></dd></dl></section>',methods:[],related:{uses:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_instance_settings",text:"Related_Posts_By_Taxonomy::get_instance_settings()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_field",text:"Related_Posts_By_Taxonomy::get_field()"},{source:"includes/class-widget.php",url:"/hooks/related_posts_by_taxonomy_widget_form_instance",text:"related_posts_by_taxonomy_widget_form_instance"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::form( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::get_field-306":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$field</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Field name.</span></p></dd><dt>$i</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Widget instance settings.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> String with field HYML.</p></section>',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/form",text:"Related_Posts_By_Taxonomy::form()"}]},changelog:[{description:"Introduced.",version:"2.5.1"}],signature:'Related_Posts_By_Taxonomy::get_field( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$field</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$i</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::get_instance_settings-238":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Widget instance.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Widget instance</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/back_compat_settings",text:"Related_Posts_By_Taxonomy::back_compat_settings()"}],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/form",text:"Related_Posts_By_Taxonomy::form()"}]},changelog:[{description:"Introduced.",version:"2.2.2"}],signature:'Related_Posts_By_Taxonomy::get_instance_settings( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>, &nbsp;<span class="arg-name">$widget_args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>, &nbsp;<span class="arg-name">$defaults</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::get_related_posts-371":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Widget arguments.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with related post objects.</p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"}],used_by:[]},changelog:[{description:'<span class="since-description">Use <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_get_related_posts/">km_rpbt_get_related_posts()</a> instead.</span>',version:"2.5.0"},{description:"Introduced.",version:"2.3.2"}],signature:'Related_Posts_By_Taxonomy::get_related_posts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)',notice:'<div class=\'callout callout-warning\'><p><span class="screen-reader-text">Warning:</span> This method has been deprecated. Use <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_get_related_posts/">km_rpbt_get_related_posts()</a> instead.</p>\n</div>'},"related_posts_by_taxonomy::get_the_id-328":{html:"<hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(int)</span> Post id.</p></section>",methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_widget_post_id",text:"km_rpbt_get_widget_post_id()"}],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:'<span class="since-description">Moved logic to <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_get_widget_post_id/">km_rpbt_get_widget_post_id()</a>.</span>',version:"2.5.0"},{description:"Introduced.",version:"0.2.1"}],signature:"Related_Posts_By_Taxonomy::get_the_ID()",notice:""},"related_posts_by_taxonomy::is_all_taxonomies-355":{html:'<hr /><section class="description"><h2>Description</h2><p>The all_tax property is no longer used since version 2.7.0. Use empty string or &#8216;km_rpbt_all_tax&#8217; for all taxonomies option in the widget.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$taxonomies</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Taxonomies.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(boolean)</span> True if all taxonomies is selected.</p></section>',methods:[],related:{uses:[],used_by:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/update",text:"Related_Posts_By_Taxonomy::update()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/back_compat_settings",text:"Related_Posts_By_Taxonomy::back_compat_settings()"}]},changelog:[{description:"Introduced.",version:"2.7.0"}],signature:'Related_Posts_By_Taxonomy::is_all_taxonomies( <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$taxonomies</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::update-142":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$new_instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Current settings.</span></p></dd><dt>$old_instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Old settings.</span></p></dd></dl></section>',methods:[],related:{uses:[{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/is_all_taxonomies",text:"Related_Posts_By_Taxonomy::is_all_taxonomies()"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::update( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$new_instance</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$old_instance</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::widget-71":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$widget_args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Display arguments including \'before_title\', \'after_title\', \'before_widget\', and \'after_widget\'.</span></p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">The settings for the particular instance of the widget.</span></p></dd></dl></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/settings.php",url:"/functions/km_rpbt_get_template_fields",text:"km_rpbt_get_template_fields()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_feature_html",text:"km_rpbt_get_feature_html()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_instance_settings",text:"Related_Posts_By_Taxonomy::get_instance_settings()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_the_id",text:"Related_Posts_By_Taxonomy::get_the_ID()"},{source:"includes/class-widget.php",url:"/hooks/related_posts_by_taxonomy_widget_defaults",text:"related_posts_by_taxonomy_widget_defaults"},{source:"includes/class-widget.php",url:"/hooks/related_posts_by_taxonomy_widget_args",text:"related_posts_by_taxonomy_widget_args"}],used_by:[]},changelog:[{description:"Introduced.",version:"0.1"}],signature:'Related_Posts_By_Taxonomy::widget( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$widget_args</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)',notice:""},"related_posts_by_taxonomy::widget_output-386":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$related_posts</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with related post objects.</span></p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Widget arguments.</span></p></dd><dt>$widget_args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Widget display arguments.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts_html",text:"km_rpbt_get_related_posts_html()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'Related_Posts_By_Taxonomy::widget_output( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$related_posts</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$widget_args</span>&nbsp;)',notice:'<div class=\'callout callout-warning\'><p><span class="screen-reader-text">Warning:</span> This method has been deprecated. Use <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_get_related_posts_html/">km_rpbt_get_related_posts_html()</a> instead.</p>\n</div>'}}}}]);
//# sourceMappingURL=10.856a1b40.chunk.js.map