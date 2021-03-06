<?php

// This file is part of the Carrington Theme for WordPress
// http://carringtontheme.com
//
// Copyright (c) 2008 Crowd Favorite, Ltd. All rights reserved.
// http://crowdfavorite.com
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) { die(); }
if (CFCT_DEBUG) { cfct_banner(__FILE__); }

get_header();

$s = get_query_var('s');

$search_title = '<a href="'.get_bloginfo('url').'/?s='.attribute_escape($s).'" title="">'.htmlspecialchars($s).'</a>';

?>

<div id="content">
	<h1 class="page-title"><?php printf(__('Search Results for: %s', 'carrington'), $search_title); ?></h1>
<?php
	cfct_loop();
	cfct_misc('nav-posts');
?>
</div><!--#content-->

<?php

get_sidebar();

get_footer();

?>