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

global $comments, $comment, $tpl;

$tpl["comments_loop"] = array(
	"tpl_file" => "comments-loop.html"
);

$tpl[] = array(
	"comment_list_class" => cfct_comment_list_class(false)
);

foreach ($comments as $comment) {
	if (get_comment_type() == 'comment') {
		cfct_comment();
	}
}
?>