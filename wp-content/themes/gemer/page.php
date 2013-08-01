<?php get_header(); ?>

<!-- BEGIN content -->
<div id="content">

	<?php if (have_posts()) : the_post(); ?>
	<!-- begin post -->
	<div class="single">
	<h2><?php the_title(); ?></h2>
	<?php the_content(); ?>
	</div>
	<!-- end post -->
	
	<div id="comments"><?php comments_template(); ?></div>
	
	

</div>
<!-- END content -->

<?php get_sidebar(); get_footer(); ?>
